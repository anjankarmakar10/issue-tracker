import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
interface Params {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Params) => {
  const issue = await prisma.issue.findUnique({ where: { id } });

  if (!issue) notFound();

  return (
    <section className="max-w-3xl mx-auto p-4 ">
      <article>
        <Heading>{issue.title}</Heading>
        <Flex className="space-x-3" my="2">
          <IssueStatusBadge status={issue.status} />
          <Text>{issue.createdAt.toDateString()}</Text>
        </Flex>
        <Card className="prose" mt="4">
          <ReactMarkdown>{issue.description}</ReactMarkdown>
        </Card>
      </article>
    </section>
  );
};
export default IssueDetailPage;
