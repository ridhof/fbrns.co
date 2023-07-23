import { Link } from '@chakra-ui/next-js'
import { Box, Center, Flex, Heading, Image, Stack, Text } from '@chakra-ui/react'

export function Hero() {
    return <Box>
        <Flex 
            direction='row'
            alignItems='center'
        >
            <Stack 
                width='100%'
                spacing={6}
            >
                <Heading as='h2' size='2xl'>Hi, it's Ridho!</Heading>
                <Text fontSize='md'>Welcome to my digital workspace and showroom!</Text>
                <Text fontSize='md'>
                    Based in Indonesia, I build website to showcase an activity and to help people ease their life.
                    I am influenced by many business, self-help, and fantasy books.
                    I <Link 
                        href="https://twitter.com/ridhofebriansa"
                        color="blue.600"
                        textDecoration="underline"
                        textUnderlineOffset="1px"
                        _hover={{
                            textDecoration: "none"
                        }}
                    >write</Link> any of my thought online.
                </Text>
            </Stack>
            <Box 
                width='100%'
            >
                <Center>
                    <Image 
                        boxSize='300'
                        borderRadius='full'
                        src='/assets/febriansa-logo.png' 
                    />
                </Center>
            </Box>
        </Flex>
    </Box>
}