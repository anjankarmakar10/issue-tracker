import { Container } from "@radix-ui/themes";
import LatestIssues from "./LatestIssues ";

export default function Dashboard() {
  return (
    <Container className="p-4">
      <LatestIssues />
    </Container>
  );
}
