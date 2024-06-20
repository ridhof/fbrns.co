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
                {/*<Heading as='h2' size='2xl'>Welcome</Heading>*/}
                <Text fontSize='lg'>Welcome to my digital workspace and showroom!</Text>
                <Text fontSize='lg' textAlign='justify'>
		    I adore FOSS, and started to self-host some apps for my own.
		    I believe that my self-hosted apps can benefit many, so I started to invite friend to join me. 

		    If you have question, feel free to contact me through XMPP <Link 
                        href="xmpp:garage9194@chat.fbrns.co"
                        color="blue.600"
                        textDecoration="underline"
                        textUnderlineOffset="1px"
                        _hover={{
                            textDecoration: "none"
                        }}
                    >garage9194@chat.fbrns.co</Link>.
                </Text>
            </Stack>
	    {/*
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
	    */}
        </Flex>
    </Box>
}
