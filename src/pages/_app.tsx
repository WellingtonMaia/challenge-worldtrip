import type { AppProps } from 'next/app'
import { ChakraProvider } from '@chakra-ui/react';

import { theme } from '../styles/theme';

import 'swiper/swiper.scss';
import "swiper/components/pagination/pagination.min.css"
import "swiper/components/navigation/navigation.min.css"


function MyApp({ Component, pageProps }: AppProps) {
  return (
  <ChakraProvider theme={theme}>
    <Component {...pageProps} />
  </ChakraProvider>
  )
}
export default MyApp
