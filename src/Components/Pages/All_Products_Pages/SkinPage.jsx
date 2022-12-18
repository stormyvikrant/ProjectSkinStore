import { Box, Image ,Center,Text,Flex,Heading,Button,
    Card,      
    CardBody,  
    Stack,     
    Divider,   
   
    CardFooter,
   
} from '@chakra-ui/react';
import React from 'react';
import { Link } from 'react-router-dom';
import BrandSlider from '../Slider/BrandSlider';
import{BiShoppingBag}from "react-icons/bi";
import Footer from '../Footer';
const SkinPage = () => {
  return (
    <div>
    {/* ******************************Big Image********************* */}
    <Box w='90%' m='auto' border={'2px solid black'} mt='2' borderRadius={10}  >    
      <Link to='/skin'>
       <Image  borderRadius={10} src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/26/1180x450-073626.jpeg' alt='skin image'/> 
      </Link>        
    </Box>

      {/* **********************************************************   Trending Offers ************************************** */}

  <Text fontSize={45}mt={4} textAlign="center" mb={4}>Trending Offers</Text>
  <Box>
 <Center>
  <Flex direction={['column','column','row']}   w={"95%"} gap={4} m='auto' justifyContent={'space-between'}>
      
        <Box w={['100%','100%','30%']}>
          <Center>
          <Link to='/skin'><Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-500x500-041753.jpeg"  w={'100%'}alt="1"/> </Link>    
          </Center>
         <Heading fontSize={20} mt={4}>SkinCeuticals Gift</Heading>
          <Text fontSize={13} mt={2} color="gray">Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you spend $220 or more on the brand.</Text>
      <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
      </Box>
      <Box w={['100%','100%','30%']}>
        <Center>
        <Link to='/skin'> <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-500x500-041805.jpeg"  w={'100%'}alt={"2"}/></Link>  
        </Center>
          <Heading fontSize={20} mt={4}>20%off SkinMedica+$135 gift</Heading>
          <Text fontSize={13} mt={2} color="gray">Receive a FREE SkinMedica Eye Illuminating Kit (Worth $135) when you spend $250 or more on the brand.</Text>
      <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
      </Box>
      <Box w={['100%','100%','30%']}>
        <Center>
        <Link to='/skin'>   <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/original-500x500-060614.jpg" w={'100%'}alt={"3"}/></Link> 
        </Center>
         <Heading fontSize={20} mt={4}>25%off 111SKIN with code REPLAY+$95 Gift</Heading>
       <Text fontSize={13} mt={2} color="gray">Plus, receive a 111SKIN Space Defence Bright Eye Lift Gel Mini 7.5ml (Worth $95) when you spend $250 or more on the brand.</Text>
<Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
      </Box>
    </Flex>
 </Center>
  </Box>
 

     {/* **********************************************************    New and Trending: ISDIN ************************************** */}

     <Text fontSize={35}mt={4}  textAlign="center" mb={4}>New and Trending: ISDIN</Text>
 <Box w='90%' margin={'auto'}>

    <Flex gap={12} direction={['column','column','row']}   w={"95%"}  m='auto' justifyContent={'space-between'} >
    <Box w={['100%','100%','55%']}>
    <Link tp='/skin'>  <Image w={"120%"} h='100%' src='https://static.thcdn.com/images/medium/webp/widgets/121-us/28/600x600-065228.jpeg' alt='1'/></Link> 
    </Box>

    <Box  w={['100%','100%','65%']}>
      <BrandSlider/>
    </Box>
    
  </Flex>
 </Box>


{/* **********************************************************Shop by Ingredient ************************************** */}

<Text fontSize={45}  textAlign="center" mb={4}>Shop by Ingredient</Text>
<Box mt={8} alignItems='center' w='85%' margin='auto'>
  
      <Box display={['grid','grid','flex']} justifyContent='space-between' gridTemplateColumns={'1fr 1fr'} >
 <Link>
 <Link to='/skin'><Image w={205} src='https://static.thcdn.com/images/small/webp/widgets/121-us/10/Page-001-095910.png' alt="cat-1"/></Link> 
 </Link>
 <Link>
 <Link to='/skin'><Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/02/original-Page-002-095102.png" alt="cat-2"/></Link> 
 </Link> 
  <Link>
   <Link to='/skin'><Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/00/original-Page-003-095100.png" alt="cat-3"/></Link> 
  </Link>
 <Link>
 <Link to='/skin'><Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/56/Page-004-095856.png" alt="cat-4"/></Link> 
 </Link>
  <Link>
   <Link to='/skin'><Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/original-Page-005-095106.png" alt="cat-5"/></Link> 
  </Link>
 <Link>
 <Link to='/skin'><Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/original-Page-006-095117.png" alt="cat-6"/></Link> 
 </Link>
  </Box>

</Box>

 {/* ********************************************************** Best Sellers ************************************** */}

 <Text fontSize={35}mt={4}  textAlign="center" mb={4}>Best Sellers</Text>
  
  <Box  >
<Center>
<Flex direction={['column','column','row']}   w={"95%"} gap={4} m='auto' justifyContent={'space-between'} >

{/* ****************Card -1**************** */}

 <Card w={['70%','70%','30%']} marginLeft={12} cursor='pointer' margin='auto'>
<CardBody>
  <Image
    src='https://static.thcdn.com/images/small/webp//productimg/480/480/11289609-1174892770940184.jpg'
    alt='SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml'
  
  />
  <Stack mt='6' spacing='3'>
    <Text color={"gray"}>
    SkinCeuticals C E Ferulic with 15% L-Ascorbic Acid Vitamin C Serum 30ml
    </Text>
    <Text fontSize={23} textAlign="left">
      $430
    </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
    <Button variant='solid' bgColor='black' color={'white'} w='100%'>
    <BiShoppingBag color='white' fontSize={25}/>  SHOP-NOW
    </Button>
</CardFooter>
</Card>
{/* ****************Card -2**************** */}

<Card w={['70%','70%','30%']} cursor='pointer' margin='auto'>
<CardBody>
  <Image
    src='https://static.thcdn.com/images/small/webp//productimg/480/480/13156807-2034893783165696.jpg'
    alt='Eve Lom Decadent Double Cleanse Ritual Holiday Set 2022 (Worth $235.00)'
    borderRadius='lg'
  />
  <Stack mt='6' spacing='3'>
    <Text color={"gray"}>
    Eve Lom Decadent Double Cleanse Ritual Holiday Set 2022 (Worth $235.00)
    </Text>
    <Text fontSize={23} textAlign="left">
      $250
    </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
    <Button variant='solid' bgColor='black' color={'white'} w='100%'>
    <BiShoppingBag color='white' fontSize={25}/>  SHOP-NOW
    </Button>
</CardFooter>
</Card>


  {/* ****************Card -3**************** */}


  <Card w={['70%','70%','30%']}cursor='pointer' margin='auto'>
<CardBody>
  <Image
    src='https://static.thcdn.com/images/small/webp//productimg/480/480/11588281-8764882139037003.jpg'
    alt='BIOEFFECT EGF Eye Serum 6ml'
   
  />
  <Stack mt='6' spacing='3'>
    color={"gray"} 
    <Text>
    BIOEFFECT EGF Eye Serum 6ml
    </Text>
    <Text fontSize={23} textAlign="left">
      $450
    </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
    <Button variant='solid' bgColor='black' color={'white'} w='100%'>
    <BiShoppingBag color='white' fontSize={25}/>  SHOP-NOW
    </Button>
</CardFooter>
</Card>




    {/* ****************Card -4**************** */}
    <Card w={['70%','70%','30%']} cursor='pointer' margin='auto'>
<CardBody>
  <Image
    src='https://static.thcdn.com/images/small/webp//productimg/480/480/11370312-1044938634157826.jpg'
    alt='111SKIN Y Theorem Bio Cellulose Facial Mask Single 0.87 oz (Worth $32.00)'
 
  />
  <Stack mt='6' spacing='3'>
    <Text color={"gray"}>
    111SKIN Y Theorem Bio Cellulose Facial Mask Single 0.87 oz (Worth $32.00)
    </Text>
    <Text fontSize={23} textAlign="left">
      $450
    </Text>
  </Stack>
</CardBody>
<Divider />
<CardFooter>
    <Button variant='solid' bgColor='black' color={'white'} w='100%'>
    <BiShoppingBag color='white' fontSize={25}/>  SHOP-NOW
    </Button>
</CardFooter>
</Card>
</Flex>
</Center>
</Box>

    {/* **********************************************************   Over On The Blog... ************************************** */}

    <Text fontSize={45}mt={4}  textAlign="center" mb={4}>Over On The Blog...</Text>
  <Box>
 <Center>
  <Flex direction={['column','column','row']}   w={"95%"} gap={4} m='auto' justifyContent={'space-between'}>
      
        <Box w={['100%','100%','30%']}>
          <Center>
            <Image borderRadius={200} src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/1223-DPO660-PD-SS-Jan-batch-shot-15_1200x672_1610651093-070718.jpg"  w={'100%'}alt="1"/> 
          </Center>
         <Heading fontSize={20} mt={4}>SkinCeuticals Gift</Heading>
          <Text fontSize={13} mt={2} color="gray">Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you spend $220 or more on the brand.</Text>
          <Link to="/skin">
          <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
          </Link>
      </Box>
      <Box w={['100%','100%','30%']}>
        <Center>
         <Image borderRadius={200} src="https://static.thcdn.com/images/small/webp/widgets/121-us/55/shot-211200X672_1609954468-070955.jpg"  w={'100%'}alt={"2"}/>  
        </Center>
          <Heading fontSize={20} mt={4}>20%off SkinMedica+$135 gift</Heading>
          <Text fontSize={13} mt={2} color="gray">Receive a FREE SkinMedica Eye Illuminating Kit (Worth $135) when you spend $250 or more on the brand.</Text>
      <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
      </Box>
      <Box w={['100%','100%','30%']}>
        <Center>
          <Image  borderRadius={200} src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/1200x672_1611689526-071206.jpg" w={'100%'}alt={"3"}/>
        </Center>
         <Heading fontSize={20} mt={4}>25%off 111SKIN with code REPLAY+$95 Gift</Heading>
       <Text fontSize={13} mt={2} color="gray">Plus, receive a 111SKIN Space Defence Bright Eye Lift Gel Mini 7.5ml (Worth $95) when you spend $250 or more on the brand.</Text>
       <Link to="/skin">
       <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
       </Link>
      </Box>
    </Flex>
 </Center>
  </Box>



  <hr/>
<Footer/>

    </div>
  );
}

export default SkinPage;
