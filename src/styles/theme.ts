import { extendTheme } from '@chakra-ui/react';

export const theme = extendTheme({
  colors: {
    gray: {
      "50":"#F7FAFC",
      "100":"#EDF2F7",
      "200":"#E2E8F0",
      "300":"#CBD5E0",
      "400":"#A0AEC0",
      "500":"#718096",
      "600":"#4A5568",
      "700":"#2D3748",
      "800":"#1A202C",
      "900": "#171923",
    },
    grayBlue: {
      "50": "#F5F8FA",
      "100": "#DADADA",
      "150": "#47585B",  
    },
    yellow: {
      "100": "#FFBA08"
    }
  },
  fonts: {
    heading: 'Roboto',
    body: 'Roboto',
  },
  styles: {
    global: {
      body: {
        bg: 'grayBlue.50',
        color: 'grayBlue.150'
      }
    }
  }
});