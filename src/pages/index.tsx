import { Flex, useBreakpointValue } from '@chakra-ui/react';
import Head from 'next/head';
import { Header } from '../components/Header';

import { TravelTypesItem } from '../components/TravelTypes/TravelTypesItem';
import { TravelTypesSection } from '../components/TravelTypes/TravelTypesSection';
import { Banner } from '../components/Banner/Banner';
import { Divider } from '../components/Divider/Divider';
import { Continents } from '../components/ContinentsSlides';
import { GetServerSideProps } from 'next';
import { api } from '../api/service';

interface HomeProps {
  continents: {
    id: string,
    title: string,
    description: string,
    image: string
}[],
}

export default function Home({
  continents
} : HomeProps) {
  
  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  return (
    <Flex w="100%" direction="column" >
      <Head>
        <title>Home | WorldTrip</title>
      </Head>

      <Header />
      
      <Banner showAirplane={isWideVersion} />
      
      <TravelTypesSection>
        <TravelTypesItem 
          showImage={isWideVersion}
          text="vida noturna"
          image="/images/cocktail.svg"
          justifyItems="start"
        />
        <TravelTypesItem 
          showImage={isWideVersion}
          text="praia"
          image="/images/surf.svg"
          justifyItems="end"
        />
        <TravelTypesItem 
          showImage={isWideVersion}
          text="moderno"
          image="/images/building.svg"
          justifyItems="start"
        />
        <TravelTypesItem 
          showImage={isWideVersion}
          text="clássico"
          image="/images/museum.svg"
          justifyItems="end"
        />
        <TravelTypesItem 
          showImage={isWideVersion}
          text="e mais..."
          image="/images/earth.svg"
          colSpan={2}
          justifyItems="center"
        />
      </TravelTypesSection>        
      
      <Divider />
      
      <Continents 
        data={continents}
      />
    </Flex>
  )
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const response = await api.get('/continents').then(res => res.data);
  
  return {
    props: {
      continents: response
    }
  };
}
