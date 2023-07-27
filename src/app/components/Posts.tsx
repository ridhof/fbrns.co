import { Link } from '@chakra-ui/next-js'
import { Box, Divider, Flex, Heading, Spacer, Text } from '@chakra-ui/react'

export function Posts() {
    const posts = [
        {
            title: 'Cara Mengambil Data Dari Tabel Yang Berbeda Menggunakan Inner Join',
            url: 'https://medium.com/@ridhofebriansa/cara-mengambil-data-dari-tabel-yang-berbeda-menggunakan-inner-join-aa4cf485195f',
            date: '9 November 2018'
        },
        {
            title: 'Laravel 5.7 : Mengubah Waktu Timeout Auth User Dan Mengarahkan Pada Laman Tertentu',
            url: 'https://medium.com/@ridhofebriansa/laravel-5-7-mengubah-waktu-timeout-auth-user-dan-mengarahkan-pada-laman-tertentu-1f5098268b79',
            date: '9 December 2018',
        },
        {
            title: 'Cara Menggunakan JWT (JSON Web Token) pada Lumen 5.8 dan PostgreSQL',
            url: 'https://medium.com/@ridhofebriansa/cara-menggunakan-jwt-json-web-token-pada-lumen-5-8-dan-postgresql-1018120fa735',
            date: '27 July 2019',
        },
        {
            title: 'Belajar Dasar Kotlin — Class',
            url: 'https://medium.com/@ridhofebriansa/belajar-dasar-kotlin-class-88eb39461bbe',
            date: '23 February 2019',
        },
        {
            title: 'Belajar Dasar Kotlin — Function',
            url: 'https://medium.com/@ridhofebriansa/belajar-dasar-kotlin-function-a47b6c57e3fe',
            date: '20 February 2019',
        },
    ];
    return <Box mt={20} mb={4}>
        <Flex 
            width='100%'
            direction='column'
            gap={8}
        >
            <Heading as='h3' size='lg'>Popular Medium Articles</Heading>
            <Flex
                direction='column'
                gap={1}
            >
                {
                    posts.map(({ title, url, date }) => (
                        <Box>
                            <Link 
                                href={url}
                                fontSize='md'
                                _hover={{ textDecoration: 'none' }}
                            >
                                <Flex>
                                    <Text fontWeight='bold' _hover={{ textDecoration: 'underline' }}>{ title }</Text>
                                    <Spacer />
                                    <Text color='gray.600'>{ date }</Text>
                                </Flex>
                            </Link>
                            <Divider colorScheme='blackAlpha' />
                        </Box>
                    ))
                }
            </Flex>
        </Flex>
    </Box>
}