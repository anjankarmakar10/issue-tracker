import prisma from "@/prisma/client";
import { notFound } from "next/navigation";

interface Params {
  params: { id: string };
}

const IssueDetailPage = async ({ params: { id } }: Params) => {
  const issue = await prisma.issue.findUnique({ where: { id } });

  if (!issue) notFound();

  return (
    <section className="max-w-7xl mx-auto p-4 ">
      <article>
        <p>{issue.title}</p>
        <p>{issue.description}</p>
        <p>{issue.status}</p>
        <p>{issue.createdAt.toDateString()}</p>
      </article>
    </section>
  );
};
export default IssueDetailPage;
