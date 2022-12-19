import { Box, Flex, Grid, Heading, SimpleGrid, Skeleton, SkeletonCircle } from '@chakra-ui/react'
import React, { useEffect, useState } from 'react'
import Footer from '../Pages/Footer';
import SingleProduct from '../ProductsPage/SingleProduct';

const Latest = () => {
    let [data, setData] = useState([]);
    let [loading, setLoading] = useState(true);
    useEffect(() => {
        fetch("https://admin-database-sage.vercel.app/latest").then((res) => res.json()).then((res) => setData(res)).then((res) => setLoading(false))

    }, [])
    return (
        <>
            <Box>
                <Heading size="xl" mt="10px"
                    align="center">Latest Products</Heading>
                {loading ? <Box display="grid" w={["95%", "95%", "75%"]} m="auto" mt="20px" gap="60px" gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr "]}>{Array(5)
                    .fill("")
                    .map((e) => (
                        <Box padding="6" h="470px " boxShadow="md" bg="white">
                            <Skeleton
                                h="200px"

                                mb="25px"
                                endColor="orange.100"
                                size="10"
                            />
                            <Skeleton
                                h="16px"
                                w="100%"

                                mb="15px"
                            />
                            <Skeleton h="16px" w="85%" mb="15px" />
                            <Skeleton h="30px" mb="15px" w="55%" />
                            <Flex mb="15px">
                                {Array(5)
                                    .fill("")
                                    .map(() => (
                                        <SkeletonCircle

                                            mr="5px"
                                            size="15px"
                                        />
                                    ))}
                            </Flex>
                            <Skeleton h="20px" mb="15px" w="30%" />
                            <Skeleton h="30px" mb="15px" w="100%" endColor="gray.600" />
                        </Box>
                    ))}</Box> : <Box display="grid" w={["95%", "95%", "75%"]} m="auto" mt="20px" gap={["10px", "60px"]} gridTemplateColumns={["1fr 1fr", "1fr 1fr", "1fr 1fr 1fr "]}>
                    {data.map((e) => <SingleProduct image_link={e.image} name={e.name} price={e.price} />)}
                </Box>}

            </Box>

            <Footer />
        </>
    )
}

export default Latest