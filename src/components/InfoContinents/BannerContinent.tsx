import { Box, Text } from "@chakra-ui/layout";
interface BannerContinentProps {
  title: string;
  image: string;
  responsiveMobile?: boolean;
}
export function BannerContinent({
  title, image, responsiveMobile = false
}: BannerContinentProps) {
  
  if (!responsiveMobile) {
    return (
      <Box
        w="100%"
        h="150px"
        backgroundImage={`
          linear-gradient(0deg,
            rgba(28, 20, 1, 0.35),
            rgba(28, 20, 1, 0.35)), 
            url(${image});`}
        backgroundPosition="center"
        backgroundSize="cover"
        backgroundRepeat="no-repeat"
        display="flex"
        justifyContent="center"
        alignItems="center"
      >
        <Text
          color="grayBlue.50"
          fontFamily="Poppins, sans-serif"
          fontWeight="600"
          fontStyle="normal"
          fontSize="28px"
          lineHeight="42px"
        >
          {title}
        </Text>
      </Box>
    );
  }

  return (
    <Box
      position="relative"
      w={["375px", "100%"]}
      h={["150px", "500px"]}
      backgroundImage={`
        linear-gradient(0deg,
          rgba(28, 20, 1, 0.35),
          rgba(28, 20, 1, 0.35)), 
          url(${image});`}
      backgroundPosition="center"
      backgroundSize="cover"
      backgroundRepeat="no-repeat"
    >
      <Text
        position="absolute"
        bottom="0"
        ml="140px"
        mb="60px"
        color="grayBlue.50"
        fontFamily="Poppins, sans-serif"
        fontWeight="600"
        fontStyle="normal"
        fontSize="48px"
        lineHeight="72px"
      >
        {title}
      </Text>
    </Box>
  );
}