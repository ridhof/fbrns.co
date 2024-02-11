'use client'

import Cal, { getCalApi } from '@calcom/embed-react'
import { Box } from '@chakra-ui/react'
import { useEffect } from 'react'

export default function Calendar() {
    useEffect(() => {
    	(async function () {
		const cal = await getCalApi()
		// @ts-ignore
		cal.ns["30min"](
			"ui", 
			{
				"styles": {
					"branding": {
						"brandColor": "#000000"
					}
				},
				"hideEventTypeDetails": false,
				"layout": "month_view"
			}
		);
	})();
    }, [])
    return (
        <Box marginBottom={8}>
	    <Cal
	    	namespace="30min"
		calLink="ridhof/30min"
		style={{width:"100%",height:"100%",overflow:"scroll"}}
		config={{layout: 'month_view'}}
	    />
        </Box>
    )
}
