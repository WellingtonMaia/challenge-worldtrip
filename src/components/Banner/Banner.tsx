import { Box, Flex, HStack, Image, Text } from "@chakra-ui/react";

interface BannerProps {
  showAirplane?: boolean;
}

export function Banner({ showAirplane = true } : BannerProps) {
  return (
    <Flex h={[163, 368.21]}>
      <Box w="100%">
        <Image 
          position="absolute" 
          h={[163, 335]} w="100%" 
          src="/images/bg-banner.png" alt="Banner"
        />
        <HStack align="revert">
          <Box position="relative">
            <Text
              display="block"
              mt={["28px", "80px"]}
              ml={["16px","140px"]}
              fontFamily="Poppins, sans-serif"
              fontWeight="500"
              fontStyle="normal"
              fontSize={[20, 36]}
              lineHeight={["30px", "50px"]}
              color="grayBlue.50"
            >
              5 Continentes,
              <br/> infinitas possibilidades.
            </Text>
            <Text
              w={["300px", "524px"]}
              display="block"
              mt={["8px", "20px"]}
              ml={["16px","140px"]}
              fontFamily="Poppins, sans-serif"
              fontStyle="normal"
              fontWeight={["400", "normal"]}
              fontSize={[14, 20]}
              lineHeight={["21px", "30px"]}
              color="grayBlue.100"
            >
              Chegou a hora de tirar do papel a viagem que 
              você sempre sonhou. 
            </Text>
          </Box>
          {showAirplane && (
            <Flex
              position="relative"
              display="block"
              w="100%"
              align="flex-end"
            >
              <Image 
                src="/images/airplane.png"
                h="270.74px"
                mt="96px"
                mr="140px"
                float="right"
                transform={"rotate(4deg)"}
              />
            </Flex>
          )}
        </HStack>
      </Box>
    </Flex>      
  );
}