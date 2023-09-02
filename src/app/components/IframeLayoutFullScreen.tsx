"use client"

import { Center } from '@chakra-ui/react'
import Script from 'next/script'

export function IframeLayoutFullScreen() {
    return (
        <Center>
            <iframe 
                style={{ height: "100vh", width: "100vw" }}
                data-tally-src="https://tally.so/r/meQoVo?transparentBackground=0" 
                width="100%" 
                height="100%" 
                title="Formulir Program Bantuan Finansial">
            </iframe>
            <Script
                id="tally-js"
                src="https://tally.so/widgets/embed.js"
            />
        </Center>
    );
}