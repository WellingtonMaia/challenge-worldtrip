import { Grid } from '@chakra-ui/react';
import { ReactNode } from 'react';

interface TravelTypesSectionProps {
  children: ReactNode;
}

export function TravelTypesSection ({children}: TravelTypesSectionProps) {
  return (
    <Grid 
      templateColumns={["repeat(2, 1fr)", "repeat(5, 1fr)"]} 
      gap={[2, 6]}
      m={["36px auto 0", "85px auto 0"]}
      w={["275px", "1160px"]}
      height={["120px", "145px"]}
    >
      {children}
    </Grid>
  );
}