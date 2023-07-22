import { Box, Image, Stack } from '@chakra-ui/react'

export function Hero() {
    return <Box backgroundColor='tomato'>
        <Stack direction='row'>
            <Box 
                width='100%'
                backgroundColor='blue'
            >
                A
            </Box>
            <Box 
                width='100%'
                backgroundColor='green'
            >
                <Image 
                    boxSize='300'
                    borderRadius='full'
                    src='/assets/febriansa-logo.png' 
                />
            </Box>
        </Stack>
    </Box>
}