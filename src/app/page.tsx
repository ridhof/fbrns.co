'use client'

import { Hero, Posts } from './components'
import { Box } from '@chakra-ui/react'

export default function Home() {
  return (
    <Box mb={24}>
      <Hero />
      {/*<Posts />*/}
    </Box>
  )
}
