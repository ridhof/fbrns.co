import Image from 'next/image'
import NextLink from 'next/link'
import { Box, Center, Heading, Link, Show, Stack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'

export function Nav() {
  return (
    <Box>
      <Stack direction='row' padding={2}>
        <Center>
          <Image src='/coffee.svg' width={30} height={30} alt='coffee' />
        </Center>
        <Heading as='h1' size='md'>
          fbrns
        </Heading>
      </Stack>
      <Stack direction='row' margin={2} padding={2} gap={6}>
        <Link
          as={NextLink}
          href='/finansial'
          color='gray.600'
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: 'gray.800',
            textUnderlineOffset: '6px',
          }}
        >
          Bantuan Finansial
        </Link>
        <Link
          as={NextLink}
          href='https://chat.fbrns.co'
          color='gray.600'
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: 'gray.800',
            textUnderlineOffset: '6px',
          }}
        >
          XMPP Server
        </Link>
        <Link
          as={NextLink}
          href='https://conversejs.fbrns.co'
          color='gray.600'
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: 'gray.800',
            textUnderlineOffset: '6px',
          }}
        >
          XMPP Client
        </Link>
        <Link
          as={NextLink}
          href='https://firefly.fbrns.co'
          color='gray.600'
          _hover={{
            textDecoration: 'underline',
            textDecorationColor: 'gray.800',
            textUnderlineOffset: '6px',
          }}
        >
          Firefly III
        </Link>
      </Stack>
    </Box>
  )
}
