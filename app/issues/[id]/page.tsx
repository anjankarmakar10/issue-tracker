import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import {
  Heading,
  Flex,
  Card,
  Text,
  Box,
  Button,
  Grid,
  Link,
} from "@radix-ui/themes";
import { notFound } from "next/navigation";
import ReactMarkdown from "react-markdown";
import { Pencil2Icon } from "@radix-ui/react-icons";
import EditIssueButton from "./EditIssueButton";
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
          <EditIssueButton issueId={issue.id} />
        </Box>
      </Grid>
    </section>
  );
};
export default IssueDetailPage;
