import Image from 'next/image'
import { Link } from '@chakra-ui/next-js'
import { Box, Center, Heading, Stack } from '@chakra-ui/react'

export function Nav() {
    return <Box>
        <Stack direction="row" bg="blue" padding={4}>
            <Center>
                <Image
                    src="/coffee.svg"
                    width={40}
                    height={40}
                    alt="coffee"
                />
            </Center>
            <Heading as='h1' size='lg'>Ridho Febriansa</Heading>
        </Stack>
        <Stack>
            <Link href='/about'>About</Link>
        </Stack>
    </Box>
}