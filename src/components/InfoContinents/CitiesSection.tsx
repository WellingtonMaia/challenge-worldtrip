import { Grid } from "@chakra-ui/react";
import { ReactNode } from "react";

interface CitiesSectionProps {
  children: ReactNode;
}

export function CitiesSection({ children }: CitiesSectionProps) {
  return (
    <Grid
      mt={["20px", "40px"]}
      templateColumns={["repeat(1, 1fr)", "repeat(4, 1fr)"]} 
      gap={[5, 5]}
      justifyItems="end"
      alignItems="center"
    >
      {children}
    </Grid>
  );
}