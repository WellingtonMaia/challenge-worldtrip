import { 
  Flex, 
  GridItem, 
  GridItemProps as ChakraGridItemProps,
  HStack, 
  Icon, 
  Image, 
  Text, 
  VStack 
} from "@chakra-ui/react";
import { FaCircle } from 'react-icons/fa';

interface TravelTypesItemProps extends ChakraGridItemProps {
  text: string;
  image: string;
  showImage?: boolean  
}

export function TravelTypesItem (
  { text, image, showImage = false, ...rest } : TravelTypesItemProps
) {

  if(!showImage) {
    return (
    <GridItem
      w="100%" 
      h="100%"
      m="auto"
      display="grid"
      {...rest}
    >
      <HStack>
        <Icon color="yellow.100" h="8px" w="8px" as={FaCircle} />
        <Text
          fontFamily="Poppins, sans-serif"
          fontWeight="500"
          fontStyle="normal"
          fontSize={16}
          lineHeight="20px"
        >
          {text}
        </Text>
      </HStack>
    </GridItem>
    );
  }

  return (
    <Flex
      w="100%" 
      h="100%"
      justify="center"
    >
      <VStack>
        <Image
          src={image} 
          alt={text}
        />
        <Text
          mt="24px"
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          fontStyle="normal"
          fontSize={24}
          lineHeight={"36px"}
        >
          {text}
        </Text>
      </VStack>
    </Flex>
  );
}