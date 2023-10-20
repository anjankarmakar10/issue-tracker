import prisma from "@/prisma/client";
import { Container, Flex } from "@radix-ui/themes";
import { Pagination } from "@/app/components";
import IssueActions from "./IssueActions";
import { Status } from "@prisma/client";
import IssueTable, { IssueQuery, columnNames } from "./IssueTable";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const orderBy = columnNames.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const statuses = Object.values(Status);

  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  const where = { status };

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });

  const issueCount = await prisma.issue.count({ where });

  return (
    <Container className="p-4">
      <Flex direction="column" gap="4">
        <IssueActions />
        <IssueTable searchParams={searchParams} issues={issues} />
        <Pagination
          pageSize={pageSize}
          currentPage={page}
          itemCount={issueCount}
        />
      </Flex>
    </Container>
  );
};

export const dynamic = "force-dynamic";

export default IssuesPage;
