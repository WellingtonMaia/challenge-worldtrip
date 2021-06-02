import Icon from "@chakra-ui/icon";
import { GridItem, Text, VStack } from "@chakra-ui/layout";
import { Tooltip } from "@chakra-ui/tooltip";
import { AiOutlineInfoCircle } from "react-icons/ai";

interface DetailsContinentProps {
  number: number;
  description: string;
  showIcon?: boolean;
}

export function DetailsContinent({
  number, description, showIcon = false
}: DetailsContinentProps) {
  return (
    <GridItem>
      <VStack>
        <Text
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          fontStyle="normal"
          fontSize={[24, 48]}
          lineHeight={["36px", "72px"]}
          alignSelf={["start", "center"]}
          color="#FFBA08"
          >
            {number}
        </Text>
        <Text
          position="relative"
          fontFamily="Poppins, sans-serif"
          fontWeight={["normal", "600"]}
          fontStyle="normal"
          fontSize={[18, 24]}
          lineHeight={["27px", "36px"]}
          alignSelf={["start", "center"]}
          >
            {description} 
            {showIcon && (
              <Tooltip label="Citeis....." hasArrow >
                <span>
                  <Icon 
                    position="absolute"
                    bottom={["15%" ,"25%"]}
                    ml={["5px", "9.33px"]}
                    w={["10px", "16px"]}
                    h={["10px", "16px"]} 
                    color="#999"
                    as={AiOutlineInfoCircle} 
                  />
                </span>
              </Tooltip>
            )}
        </Text>
      </VStack>
    </GridItem>
  );
}