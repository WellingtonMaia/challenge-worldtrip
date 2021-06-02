import { Flex, Icon, Image } from "@chakra-ui/react";
import { useRouter } from "next/router";
import { BsChevronLeft } from 'react-icons/bs';
import Link from 'next/link';
export function Header() {
  
  const router = useRouter();
  let showButtonBack = false

  if(router.asPath !== "/"){
    showButtonBack = true;
  }

  return (
    <Flex 
      as="header"
      w="100%"
      maxWidth={1480}
      h={["50","24"]}
      mx="auto"
      align="center"
      justify="center"
    >

      {showButtonBack && (
      <Link
        href="/"
      >
        <Icon
          h={["16px", "32px"]} 
          w={["16px", "32px"]}
          as={BsChevronLeft}
          position="absolute"
          ml={["16px", "140px"]}
          left="0"
          _hover={{
            cursor:'pointer'
          }}
        />
      </Link>
      )}

      <Image 
        h={["20px", "45.92px"]}
        w={["80px", "184.06px"]}     
        objectFit="contain"
        src="/images/logo.png"
        alt="Logo"
      />
    </Flex>
  );
}