import { Skeleton } from "@/app/components";
import { Box, Flex, Card } from "@radix-ui/themes";

const LoadingIssueDetailPage = () => {
  return (
    <Box className="max-w-3xl mx-auto p-4 ">
      <Skeleton width={"80%"} />
      <Flex className="space-x-3" my="2">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="4">
        <Skeleton count={3} />
      </Card>
    </Box>
  );
};
export default LoadingIssueDetailPage;
