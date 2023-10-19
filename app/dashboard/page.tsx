import { Pagination } from "@/app/components";
import { Container } from "@radix-ui/themes";

export default function Dashboard({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Container className="p-4">
      <div>Hello World</div>
      <Pagination
        itemCount={100}
        pageSize={10}
        currentPage={parseInt(searchParams.page)}
      />
    </Container>
  );
}
