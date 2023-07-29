import NextLink from 'next/link'
import { Center, Container, Link, Stack, Text } from '@chakra-ui/react'

export function Footer() {
    return (
        <Container my={8} position='absolute' bottom={0} left={0} right={0}>
            <Center >
                <Stack>
                    <Center>
                        <Text fontSize='sm'>Made by Ridho Febriansa</Text>
                    </Center>
                    <Stack direction='row'>
                        <Link
                            as={NextLink}
                            href='https://nextjs.org/'
                            isExternal={true}
                            color='gray.600'
                            _hover={{
                                textDecoration: 'underline',
                                textDecorationColor: 'blue',
                                textUnderlineOffset: '2px'
                            }}
                            fontSize='sm'
                        >
                            Next.js
                        </Link>
                        <Link
                            as={NextLink}
                            href='https://chakra-ui.com/'
                            isExternal={true}
                            color='gray.600'
                            _hover={{
                                textDecoration: 'underline',
                                textDecorationColor: 'blue',
                                textUnderlineOffset: '2px'
                            }}
                            fontSize='sm'
                        >
                            Chakra
                        </Link>
                        <Link
                            as={NextLink}
                            href='https://vercel.com/'
                            isExternal={true}
                            color='gray.600'
                            _hover={{
                                textDecoration: 'underline',
                                textDecorationColor: 'blue',
                                textUnderlineOffset: '2px'
                            }}
                            fontSize='sm'
                        >
                            Vercel
                        </Link>
                        <Link
                            as={NextLink}
                            href='https://gitpod.io/'
                            isExternal={true}
                            color='gray.600'
                            _hover={{
                                textDecoration: 'underline',
                                textDecorationColor: 'blue',
                                textUnderlineOffset: '2px'
                            }}
                            fontSize='sm'
                        >
                            Gitpod
                        </Link>
                    </Stack>
                </Stack>
            </Center>
        </Container>
    )
}