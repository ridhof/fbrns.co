import { Link } from '@chakra-ui/next-js'
import { Box, Center, Flex, Heading, Hide, Image, Stack, Text } from '@chakra-ui/react'

export function Hero() {
    return <Box mt={{ base: 12, lg: 20 }} mb={4}>
        <Flex 
            direction={['column', 'row']}
            alignItems='center'
        >
            <Stack 
                width='100%'
                spacing={6}
            >
                <Heading as='h2' size='2xl'>Hi, it&apos;s Ridho!</Heading>
                <Text fontSize='lg'>Welcome to my digital workspace and showroom!</Text>
                <Text fontSize='lg'>
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
            <Hide below='lg'>
                <Box width='100%'>
                    <Center>
                        <Image 
                            boxSize='300'
                            borderRadius='full'
                            src='/assets/febriansa-logo.png' 
                            alt='fbrns logo'
                        />
                    </Center>
                </Box>
            </Hide>
        </Flex>
    </Box>
}