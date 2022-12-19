import React, { useEffect, useRef, useState } from 'react'
import { Box, Button, Image, Flex, Text, FormControl, FormLabel, Heading, Input, useToast, Icon, IconButton } from '@chakra-ui/react'
import { CheckCircleIcon, WarningIcon } from '@chakra-ui/icons';
const intdata = {
    name: "",
    price: "",
    brand: "",
    image: ""
}
const Admin = () => {
    const [data, setData] = useState(intdata);
    const imgref = useRef();
    const [loading, setLoading] = useState(false);
    const toast = useToast()
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });


    }
    const handleImage = async () => {
        setLoading(true)
        let form = new FormData();
        form.append("image", imgref.current.files[0]);
        let res = await fetch(
            "https://api.imgbb.com/1/upload?expiration=600&key=a41dce7e6c8daf73cb9eedd71bf2e9ef",
            {
                method: "POST",
                body: form,
            }
        )
        let acc_res = await res.json();
        const imageurl = acc_res.data.display_url;
        console.log(imageurl)
        setData({ ...data, image: imageurl })
        setLoading(false)
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (data.name == "" || data.brand == "" || data.image == "" || data.price == "") {
            toast({
                position: 'top-left',

                render: () => (
                    <Flex color='white' border="4px solid white" p={"10px"} bgColor='red'>

                        <WarningIcon w={30} h={30} /><Text size="lg" ml="15px">Add Product Image</Text>
                    </Flex >

                ),
            })
            return
        }
        toast({
            position: 'top-left',
            render: () => (
                <Flex color='white' border="4px solid white" p={"10px"} bgColor='green.400'>

                    <CheckCircleIcon w={30} h={30} /><Text size="lg" ml="15px">Product has been added!! </Text>
                </Flex >

            ),
        })
        let res = await fetch("https://admin-database-sage.vercel.app/latest", {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }

        }).then(setData(intdata));






    }

    return (
        <>
            <Heading align="center" size="xl" mt="30px">Admin Panel</Heading>
            <Flex w={["95%", "95%", "85%"]} m="auto" direction={["column", "column", "row"]} justify="space-between" >
                <Box mt="30px" w={["100%", "100%", "40%"]} p="40px" shadow="2xl" >

                    <Heading size="lg" mb="30px">Add new Product</Heading>
                    <form onSubmit={handleSubmit}>

                        <FormControl>
                            <FormLabel >*Product Name</FormLabel>
                            <Input value={data.name} name="name" h="50px" border="1px solid black" onChange={handleChange} mb="30px" isRequired type='text' />
                            <FormLabel>*Product Price</FormLabel>

                            <Input value={data.price} h="50px" name="price" onChange={handleChange} mb="30px" isRequired type='number' />
                            <FormLabel >*Brand Name</FormLabel>
                            <Input value={data.brand} h="50px" name="brand" border="1px solid black" onChange={handleChange} mb="30px" isRequired type='text' />
                            <Input type="file" ref={imgref} border="0px" onChange={handleImage} />
                        </FormControl>
                        <Button w="100%" color="white" mt="20px" borderRadius="0px" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} isLoading={loading} type="submit">Add New product</Button>

                    </form>

                </Box>
                <Box w={["100%", "100%", "45%"]} mt="30px">
                    <Flex justify={"space-between"} mb="100px">
                        <Image src="graph.png" width="45%" display="block" />
                        <Image src="customer.png" w="45%" display="block" />


                    </Flex>



                </Box>
            </Flex>
        </>
    )
}

export default Admin