import prisma from "@/prisma/client";
import { Flex, Box, Grid } from "@radix-ui/themes";
import { notFound } from "next/navigation";
import EditIssueButton from "./EditIssueButton";
import DeleteIssueButton from "./DeleteIssueButton";
import IssueDetails from "./IssueDetails";
interface Params {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Params) => {
  const issue = await prisma.issue.findUnique({ where: { id } });

  if (!issue) notFound();

  return (
    <section className="max-w-3xl mx-auto p-4 ">
      <Grid columns={{ initial: "1", md: "5" }} gap="5">
        <Box className="col-span-4">
          <IssueDetails issue={issue} />
        </Box>
        <Box>
          <Flex direction="column" gap="4">
            <EditIssueButton issueId={issue.id} />
            <DeleteIssueButton issueId={issue.id} />
          </Flex>
        </Box>
      </Grid>
    </section>
  );
};
export default IssueDetailPage;
