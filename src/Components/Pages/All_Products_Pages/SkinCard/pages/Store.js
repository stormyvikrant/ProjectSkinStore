//* @CSS
import { Badge, Box, Image, Icon, Grid, Container, Button, Text, SimpleGrid } from '@chakra-ui/react';

import React, { useEffect, useState } from 'react';
import { AiFillStar } from 'react-icons/ai';
import { formatCurrency } from '../utilities/formatCurrency';
import LoadingScreen from '../components/LoadingScreen';

//* redux
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, increaseCartQuantity } from '../Redux/action';


const Shop = () => {
    const [ products, setProducts ] = useState([]);
    const dispatch = useDispatch();
    const [ loading, setLoading ] = useState(true);

    let storeData = useSelector(store => store.storeData);
    let cartItems = useSelector(store => store.cartData);


    const handleCart = (item) => {
        const { id } = item;
        let newItem = { ...item };

        let find = cartItems.find(item => item.id === id);
        if (!find) {
            newItem.quantity = 1;
            dispatch(addToCart(newItem));
        } else {
            dispatch(increaseCartQuantity(id));
        }
    };

    useEffect(() => {
        setTimeout(() => setLoading(false), 300);
        setProducts(storeData)
    }, []);

    return (
        <Container maxW='container.xl'>

            <Text fontSize={ '6xl' }>Store </Text>
{/* //box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px; */}
            { !loading ?
                <SimpleGrid columns={ [ 1, 2, 3, 4 ] } spacing='40px' pt='10' >
                    { products && products.map((item) => (
                        <Box key={ item.id } borderWidth='1px' borderRadius='lg' overflow='hidden' boxShadow= 'rgba(0, 0, 0, 0.04) 0px 3px 5px'>

                            <Image src={ item.image } alt={ item.category } h='200px' w='full' p='2'
                                objectFit='contain' />

                            <Box p='6'>

                                <Box display='flex' alignItems='baseline'>

                                    <Badge borderRadius='full' px='2' colorScheme='gray'>
                                        Category
                                    </Badge>

                                    <Box
                                        color='gray.500'
                                        fontWeight='semibold'
                                        letterSpacing='wide'
                                        fontSize='xs'
                                        textTransform='uppercase'
                                        ml='2'
                                    >
                                        { item.category }
                                    </Box>
                                </Box>

                                <Box
                                    mt='1'
                                    fontWeight='semibold'
                                    as='h4'
                                    lineHeight='tight'
                                    noOfLines={ 1 }
                                >
                                    { item.title }
                                    </Box>

                                

                                <Box as='h1' color='gray.600' fontWeight='bold'>
                                    { formatCurrency(item.price) }
                                </Box>

                                <Box display='flex' mt='2' justifyContent='center' alignItems='center'>
                                    { Array(5)
                                        .fill('')
                                        .map((_, i) => (
                                            <Icon as={ AiFillStar }
                                                key={ i }
                                                color={ i < item.rating.rate ? 'orange.400' : 'gray.300' }
                                            />
                                        )) }
                                    <Box as='span' ml='2' color='gray.600' fontSize='sm'>
                                        { item.rating.count } reviews
                                    </Box>
                                </Box>

                                <Box w='full' as='button' mt={ 10 } onClick={ () => handleCart(item) }>
                                    <Button w='full' bg='black' color='white' _hover={ { color: 'black', bg: "teal.200", border: '1px solid black' } } >Quick Buy</Button>
                                </Box>

                            </Box>
                        </Box>
                    ))

                    }</SimpleGrid>

                : <LoadingScreen />
            }
        </Container>
    );

};

export default Shop;