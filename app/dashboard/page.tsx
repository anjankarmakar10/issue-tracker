import { Container } from "@radix-ui/themes";
import prisma from "@/prisma/client";
import IssueSummary from "./IssueSummary";

export default async function Dashboard() {
  const open = await prisma.issue.count({
    where: { status: "OPEN" },
  });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  const closed = await prisma.issue.count({
    where: { status: "CLOSED" },
  });

  return (
    <Container className="p-4">
      <IssueSummary closed={closed} inProgress={inProgress} open={open} />
    </Container>
  );
}
