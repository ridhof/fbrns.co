import { Link } from '@chakra-ui/next-js'
import { Box, Center, Flex, Heading, Show, Spacer, Text } from '@chakra-ui/react'

export function Posts() {
    const posts = [
        {
            id: 'aa4cf485195f',
            title: 'Cara Mengambil Data Dari Tabel Yang Berbeda Menggunakan Inner Join',
            url: 'https://medium.com/@ridhofebriansa/cara-mengambil-data-dari-tabel-yang-berbeda-menggunakan-inner-join-aa4cf485195f',
            date: '9 November 2018',
            view: '141K',
        },
        {
            id: '1f5098268b79',
            title: 'Laravel 5.7 : Mengubah Waktu Timeout Auth User Dan Mengarahkan Pada Laman Tertentu',
            url: 'https://medium.com/@ridhofebriansa/laravel-5-7-mengubah-waktu-timeout-auth-user-dan-mengarahkan-pada-laman-tertentu-1f5098268b79',
            date: '9 December 2018',
            view: '13K',
        },
        {
            id: '1018120fa735',
            title: 'Cara Menggunakan JWT (JSON Web Token) pada Lumen 5.8 dan PostgreSQL',
            url: 'https://medium.com/@ridhofebriansa/cara-menggunakan-jwt-json-web-token-pada-lumen-5-8-dan-postgresql-1018120fa735',
            date: '27 July 2019',
            view: '10.4K',
        },
        {
            id: '88eb39461bbe',
            title: 'Belajar Dasar Kotlin — Class',
            url: 'https://medium.com/@ridhofebriansa/belajar-dasar-kotlin-class-88eb39461bbe',
            date: '23 February 2019',
            view: '10.3K',
        },
        {
            id: 'a47b6c57e3fe',
            title: 'Belajar Dasar Kotlin — Function',
            url: 'https://medium.com/@ridhofebriansa/belajar-dasar-kotlin-function-a47b6c57e3fe',
            date: '20 February 2019',
            view: '9.8K',
        },
    ];
    return <Box mt={{ base: 12, lg: 20 }} mb={4}>
        <Flex 
            width='100%'
            direction='column'
            gap={8}
        >
            <Heading as='h3' size='lg'>Popular Medium Articles</Heading>
            <Flex
                direction='column'
                gap={{ base: 4, lg: 2 }}
            >
                {
                    posts.map(({ id, title, url, date, view }) => (
                        <Box key={`box-${id}`}>
                            <Link 
                                key={`link-${id}`}
                                href={url}
                                isExternal={true}
                                fontSize='md'
                                _hover={{ textDecoration: 'none' }}
                            >
                                <Flex key={`flex-${id}`} direction={{ base: 'column', lg: 'row' }}>
                                    <Text key={`title-${id}`} fontWeight='bold' _hover={{ textDecoration: 'underline' }}>{ title }</Text>
                                    <Show above='lg'>
                                        <Center key={`center-${id}`}>
                                            <Text 
                                                key={`view-${id}`} 
                                                as='sub' 
                                                color='gray.500' 
                                                px={2} 
                                                fontSize='xs'
                                            >
                                                { view }
                                            </Text>
                                        </Center>
                                    </Show>
                                    <Spacer />
                                    <Text key={`date-${id}`} color='gray.600'>{ date }</Text>
                                </Flex>
                            </Link>
                        </Box>
                    ))
                }
            </Flex>
        </Flex>
    </Box>
}