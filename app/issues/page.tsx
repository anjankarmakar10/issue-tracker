import { Button } from "@radix-ui/themes";
import Link from "next/link";
const IssuesPage = () => {
  return (
    <section className="max-w-7xl mx-auto p-4">
      <Button>
        <Link href="/issues/new">Create new Issue</Link>
      </Button>
    </section>
  );
};
export default IssuesPage;
