'use client'

import { Hero, Nav } from './components'
import { Box, Center } from '@chakra-ui/react'

export default function Home() {
  return (
    <Center backgroundColor='bisque'>
      <Box 
        width={{ 'base': '90%', 'xl': '70%' }}
        py={10}
        px={4}
      >
        <Nav />
        <Hero />
      </Box>
    </Center>
  )
}
