import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import { Box, Center, Heading, Stack } from '@chakra-ui/react'
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
                href="https://ridho.one"
                color="gray.600"
                _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "tomato",
                    textUnderlineOffset: "6px"
                }}
            >
                ridho.one <ExternalLinkIcon mx="2px" />
            </Link>
            <Link 
                href="https://ridho.one/financial-aid"
                color="gray.600"
                _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "blue",
                    textUnderlineOffset: "6px"
                }}
            >
                Financial Aid <ExternalLinkIcon mx="2px" />
            </Link>
            <Link
                href="https://github.com/ridhof"
                color="gray.600"
                _hover={{
                    textDecoration: "underline",
                    textDecorationColor: "teal",
                    textUnderlineOffset: "6px"
                }}
            >
                GitHub <ExternalLinkIcon mx="2px" />
            </Link>
        </Stack>
    </Box>
}