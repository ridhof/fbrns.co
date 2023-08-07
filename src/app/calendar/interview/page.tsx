'use client'

import { Box } from '@chakra-ui/react'
import Script from 'next/script'

export default function Calendar() {
    return (
        <Box>
            <Box
                className="calendly-inline-widget"
                data-url="https://calendly.com/ridho-fbrns/interview" 
                style={{ minWidth: "280px", height: "700px" }}
            >
            </Box>
            <Script 
                src="https://assets.calendly.com/assets/external/widget.js"
            />
        </Box>
    )
}