import { issueSchema } from "@/app/validationsSchemas";
import prisma from "@/prisma/client";
import { NextResponse } from "next/server";

export async function PATCH(
  response: NextResponse,
  { params }: { params: { id: string } }
) {
  const body = await response.json();
  const validation = issueSchema.safeParse(body);
  if (!validation.success)
    return NextResponse.json(validation.error.format(), { status: 400 });

  const issue = await prisma.issue.findUnique({
    where: { id: params.id },
  });

  if (!issue)
    return NextResponse.json({ error: "Invalid issue" }, { status: 404 });

  const updatedIssue = await prisma.issue.update({
    where: { id: params.id },
    data: {
      title: body.title,
      description: body.description,
    },
  });

  return NextResponse.json(updatedIssue);
}
