import Image from 'next/image'
import NextLink from 'next/link'
import { Box, Center, Heading, Link, Show, Stack } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import React from 'react'

export function Nav() {
    return <Box>
        <Stack 
            direction="row" 
            padding={2} 
        >
            <Center>
                <Image
                    src="/coffee.svg"
                    width={30}
                    height={30}
                    alt="coffee"
                />
            </Center>
            <Heading as='h1' size='md'>Ridho Febriansa</Heading>
        </Stack>
        <Stack 
            direction="row" 
            margin={2} 
            padding={2} 
            gap={6} 
        >
            <Link 
                as={NextLink}
                href="/financial-aid"
                isExternal={true}
                color="gray.600"
                _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "blue",
                    textUnderlineOffset: "6px"
                }}
            >
                Financial Aid <Show above="sm"><ExternalLinkIcon mx="2px" /></Show>
            </Link>
            <Link
                as={NextLink}
                href="https://github.com/ridhof"
                isExternal={true}
                color="gray.600"
                _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "teal",
                    textUnderlineOffset: "6px"
                }}
            >
                GitHub <Show above="sm"><ExternalLinkIcon mx="2px" /></Show>
            </Link>
            <Link
                as={NextLink}
                href="/resume"
                isExternal={true}
                color="gray.600"
                _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "red",
                    textUnderlineOffset: "6px"
                }}
            >
                Resume <Show above="sm"><ExternalLinkIcon mx="2px" /></Show>
            </Link>
        </Stack>
    </Box>
}