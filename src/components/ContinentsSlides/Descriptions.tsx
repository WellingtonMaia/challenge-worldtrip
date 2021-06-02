import { Box, Text } from "@chakra-ui/react";

export function Descriptions() {
  return (
    <Box m={["24px auto 0", "52px auto 0"]}>
        <Text
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontStyle="normal"
          fontSize={["20px", "36px"]}
          lineHeight={["30px", "54px"]}
          align="center"
          color="grayBlue.150"
        >
        Vamos nessa?<br />
        Então escolha seu continente
        </Text>
    </Box>
  )
}