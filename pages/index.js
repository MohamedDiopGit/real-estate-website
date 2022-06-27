import Link from 'next/link'
import Image from 'next/image'
import {Flex, Box, Text, Button, Center} from '@chakra-ui/react';

const Banner = ({ purpose }) => (
  <Flex flexWrap="wrap" justifyContent="center" alignItems="center" m="10">
    <Image src={imageUrl} width={500} height={300} alt="banner" />
    <Box p="5">
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
    </Box>
  </Flex>
)

export default function Home() {
  return (
    <div>
     <h1>Hello world.</h1>
     <Banner purpose={'For sale'}/>
     <Banner purpose={'For rent'}/> 
    </div>
  )
}
