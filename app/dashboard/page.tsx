import { Pagination } from "@/app/components";
import { Container } from "@radix-ui/themes";

export default function Dashboard() {
  return (
    <Container className="p-4">
      <div>Hello World</div>
      <Pagination itemCount={100} pageSize={10} currentPage={10} />
    </Container>
  );
}
