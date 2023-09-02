import { Footer, Nav } from '../components'
import { Box, Center, Container } from '@chakra-ui/react'
import { usePathname } from 'next/navigation'

import * as React from 'react'

export function PageLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const pathname = usePathname();
    return (
        <Container 
            minHeight="100vh" 
            maxWidth="100vw"
            backgroundColor='#edede9'
            padding={0}
        >
            {
                pathname === "/finansial" ? children : <Center>
                    <Box
                        width={{ 'base': '90%', 'xl': '70%' }}
                        py={10}
                        px={4}
                    >
                        <Nav />
                        {children}
                        <Footer />
                    </Box>
                </Center>
            }
        </Container>
    )
}
