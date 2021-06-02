import { Image } from "@chakra-ui/image";
import { Box, GridItem, HStack, Text, VStack } from "@chakra-ui/react";

interface CitiesItemsProps {
  country: string;
  city: string;
  image: string;
  iconFlagCountry: string;
}

export function CititesItems({
  country, city, image, iconFlagCountry
}: CitiesItemsProps) {
  return (
    <GridItem
      background="white"
      borderRadius="5px"
    >
      <Image 
        w="256px"
        h="173px"
        src={image}
      />
      <HStack 
        align="center"
        justify="space-between"
        p="18px 24px 25px"
        border="1px"
        stroke="solid"
        borderColor="rgba(255, 186, 8, 0.5)"
        borderBottomRadius="5px"
      >
        <VStack
          align="flex-start"
        >
          <Text
            fontFamily="Barlow, sans-serif"
            fontWeight="600"
            fontStyle="normal"
            fontSize={20}
            lineHeight="25px"
          >
            {city}
          </Text>
          <Text
            fontFamily="Barlow, sans-serif"
            fontWeight="500"
            fontStyle="normal"
            fontSize={16}
            lineHeight="26px"
            color=" #999999"
          >
            {country}
          </Text>
        </VStack>
        <Box
          w="30px"
          h="30px"
          backgroundImage={`url(${iconFlagCountry});`}
          borderRadius="50%"
          backgroundPosition="center"
          backgroundSize="auto"
          backgroundRepeat="no-repeat"
        />
      </HStack>
    </GridItem>
  );
}