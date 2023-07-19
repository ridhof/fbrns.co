'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { Box, ChakraProvider } from '@chakra-ui/react'
import React from 'react'

export function Providers({
        children
    }: {
        children: React.ReactNode
    }) {
    return (
        <CacheProvider>
            <ChakraProvider>
                <Box bgColor="gray.50">
                    {children}
                </Box>
            </ChakraProvider>
        </CacheProvider>
    )
}