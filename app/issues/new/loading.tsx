import { Skeleton } from "@/app/components";
import { Box } from "@radix-ui/themes";

const LoadingNewIssuePage = () => {
  return (
    <Box className="max-w-lg space-y-3 mx-auto p-4">
      <Skeleton />
      <Skeleton height="20rem" />
    </Box>
  );
};

export default LoadingNewIssuePage;
