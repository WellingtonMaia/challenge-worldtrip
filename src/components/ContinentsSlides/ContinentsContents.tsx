import { Box, Flex, Text } from "@chakra-ui/layout";
import Link from "next/link";

interface ContinentsSlidesProps {
  title: string;
  description: string;
  image: string;
  slug: string;
}

export function ContinentsContent({
  title, description, image, slug,
}: ContinentsSlidesProps) {
  return (
    <Flex 
      h={["250px", "450px"]}
      alignItems="center"
      justifyContent="center"
      backgroundImage={`url(${image})`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Link
        href={`/continent/${slug}`}
      >
        <Box
          position="relative"
          display="block"
          _hover={{
            cursor: 'pointer'
          }}
        >
          <Text
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fontStyle="normal"
            fontSize={["24px", "48px"]}
            lineHeight={["36px", "72px"]}
            align="center"
            color="grayBlue.50"
          >
            {title}
          </Text>
          <Text
            fontFamily="Poppins, sans-serif"
            fontWeight="700"
            fontStyle="normal"
            fontSize={["14px", "24px"]}
            lineHeight={["21px", "36px"]}
            align="center"
            color="grayBlue.50"
          >
            {description}
          </Text>
        </Box>
      </Link>
    </Flex>
  );
}