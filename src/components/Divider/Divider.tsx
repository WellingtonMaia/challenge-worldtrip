import { Box } from "@chakra-ui/react";

export function Divider() {

  return (
    <Box
      border="1px solid #47585B"
      bg="grayBlue.150"
      w={["60px", "90px"]}
      h="0"
      m={["36px auto 0", "80px auto 0"]}
    />
  );
}