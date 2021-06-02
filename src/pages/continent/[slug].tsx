import { Box, Flex, Grid, Text, useBreakpointValue } from "@chakra-ui/react";
import { GetServerSideProps } from "next";
import { Header } from "../../components/Header";
import { CitiesSection } from "../../components/InfoContinents/CitiesSection";
import { CititesItems } from "../../components/InfoContinents/CitiesItems";
import { DetailsContinent } from "../../components/InfoContinents/DetailsContinent";
import { BannerContinent } from "../../components/InfoContinents/BannerContinent";
import { api } from "../../api/service";

interface ContinentProps {
  continent: {
    id: string;
    title: string;
    info: {
      banner: string;
      description: string;
      count_country: number,
      count_language: number,
      count_cities: number,
      cities: {
        image: string;
        flag_country: string;
        country: string;
        city: string;
      }[],
    }
  }
}

export default function Continent({ 
  continent
}: ContinentProps) {
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100%" direction="column">
      <Header />
      <BannerContinent 
        title={continent.title}
        image={continent.info.banner}
        responsiveMobile={isWideVersion}
      />
      <Grid
          m={["24px auto", "80px auto"]}
          w={["343px", "1160px"]}
          templateColumns={["repeat(1, 1fr)", "repeat(2, 1fr)"]}
      >
        <Text
          width={["343px", "600px"]}
          fontFamily="Poppins, sans-serif"
          fontWeight="400"
          fontStyle="normal"
          fontSize={[14, 24]}
          lineHeight={["21px", "36px"]}
          align="justify"
        >
          {continent.info.description}
        </Text>
        <Grid 
          templateColumns={"repeat(3, 1fr)"} 
          gap={[1, 3]}
        >
          <DetailsContinent
            number={continent.info.count_country}
            description="países"
          />
          <DetailsContinent
            number={continent.info.count_language}
            description="línguas"
          />  
          <DetailsContinent
            number={continent.info.count_cities}
            description="cidades +100"
            showIcon={true}
          />
        </Grid>
      </Grid>
      <Box
          m={["22px 16px 35px", "30px auto 35px"]}
          w={["300px", "1160px"]}
        >
          <Text
            fontFamily="Poppins, sans-serif"
            fontWeight="500"
            fontStyle="normal"
            fontSize={[24, 36]}
            lineHeight={["36px", "54px"]}
            align="left"
          >
            Cidades +100
          </Text>
          <CitiesSection>
            {continent.info.cities.map(city => (
              <CititesItems 
                key={city.city}
                country={city.country}
                city={city.city}
                image={city.image}
                iconFlagCountry={city.flag_country}
              />
            ))}
          </CitiesSection>
        </Box>
    </Flex>  
  );
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  
  const response = await api.get(`/continents/${query.slug}`).then(
    resp => resp.data
  );
  
  return {
    props: {
      continent: response
    }
  }
}