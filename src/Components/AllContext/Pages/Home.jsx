
//   Vikrant is responsible 


import React from 'react';
import{GrDeliver}from "react-icons/gr";
import{ImMobile}from "react-icons/im";
import{VscReferences}from "react-icons/vsc";
import{RiBatterySaverLine}from "react-icons/ri";
import{BiShoppingBag}from "react-icons/bi";

import {Grid,Box,Center, Heading, Text, Image, Flex, Link, Button, Card, CardBody, Stack, Divider, CardFooter}from "@chakra-ui/react"
;
import SliderImage from './Slider/SliderImage';

import ProductSlider1 from './Slider/ProductSlider1';
import BrandSlider from './Slider/BrandSlider';




const Home = () => {
  return (
    <div >

      {/* **********************************************************First section************************************** */}
              {/* <Box border="1px solid black">
                  <Center>
                  <Grid templateColumns='repeat(4, 1fr)' gap={8}  bg="offwhite" w='70%'>
              <Box display='flex' gap={3} h={10} mt={3}>
              <GrDeliver size={25}/> 
              <h1>FREE US Shipping Over $49</h1>
              </Box>
              <Box display='flex' gap={3} h={10} mt={3}>
              <VscReferences size={25}/> 
              <h1>Refer a Friend, Get $15</h1>
              </Box>
              <Box display='flex' gap={3} h={10} mt={3}>
              <RiBatterySaverLine size={25}/> 
              <h1> New Customers Save 20% </h1>
              </Box>
              <Box display='flex' gap={3} h={10} mt={3}>
              <ImMobile size={25}/> 
              <h1> Download Our App</h1>
              </Box>

              </Grid>
              </Center>
              </Box> */}


      

      {/* **********************************************************First section************************************** */}
              

              {/* **********************************************************Slider ************************************** */}
              <Box marginBottom={12}>
                <SliderImage/> 
              </Box>
         {/* **********************************************************shop by Category ************************************** */}
         <Text fontSize={45}>Shop by Category</Text>
<Box mt={8} alignItems='center' w='85%' margin='auto'>
  
      <Box display={['grid','grid','flex']} justifyContent='space-between' gridTemplateColumns={'1fr 1fr'} >
 <Link>
 <Image w={205} src='https://static.thcdn.com/images/small/webp/widgets/121-us/04/round_widget_ss_homepage_-_Untitled_Page-062904.png' alt="cat-1"/>
 </Link>
 <Link>
 <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/06/round_widget_ss_homepage_-_Untitled_Page_%281%29-062906.png" alt="cat-2"/>
 </Link> 
  <Link>
   <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/26/round_widget_ss_homepage_-_Untitled_Page_%282%29-062926.png" alt="cat-3"/>
  </Link>
 <Link>
 <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/round_widget_ss_homepage_-_Untitled_Page_%283%29-063011.png" alt="cat-4"/>
 </Link>
  <Link>
   <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/round_widget_ss_homepage_-_Untitled_Page_%286%29-063207.png" alt="cat-5"/>
  </Link>
 <Link>
 <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/32/round_widget_ss_homepage_-_Untitled_Page_%285%29-063132.png" alt="cat-6"/>
 </Link>
  </Box>

</Box>

   {/* **********************************************************shop by Category ************************************** */}
   <Text fontSize={45}mt={8}>Missed Black Friday?</Text>
   <Box mt={8}><ProductSlider1/></Box>

  {/* **********************************************************   Trending Offers ************************************** */}

  <Text fontSize={45}mt={4}>Trending Offers</Text>
  <Box>
 <Center>
  <Flex direction={['column','column','row']}   w={"95%"} gap={4} m='auto' justifyContent={'space-between'}>
      
        <Box w={['100%','100%','30%']}>
          <Center>
            <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/53/original-500x500-041753.jpeg"  w={'100%'}alt="1"/> 
          </Center>
         <Heading fontSize={20} mt={4}>SkinCeuticals Gift</Heading>
          <Text fontSize={13} mt={2} color="gray">Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you spend $220 or more on the brand.</Text>
      <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
      </Box>
      <Box w={['100%','100%','30%']}>
        <Center>
         <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-500x500-041805.jpeg"  w={'100%'}alt={"2"}/>  
        </Center>
          <Heading fontSize={20} mt={4}>20%off SkinMedica+$135 gift</Heading>
          <Text fontSize={13} mt={2} color="gray">Receive a FREE SkinMedica Eye Illuminating Kit (Worth $135) when you spend $250 or more on the brand.</Text>
      <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
      </Box>
      <Box w={['100%','100%','30%']}>
        <Center>
          <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/original-500x500-060614.jpg" w={'100%'}alt={"3"}/>
        </Center>
         <Heading fontSize={20} mt={4}>25%off 111SKIN with code REPLAY+$95 Gift</Heading>
       <Text fontSize={13} mt={2} color="gray">Plus, receive a 111SKIN Space Defence Bright Eye Lift Gel Mini 7.5ml (Worth $95) when you spend $250 or more on the brand.</Text>
<Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
      </Box>
    </Flex>
 </Center>
  </Box>
  {/* **********************************************************  Logos ************************************** */}
  
  <Box mt={12}>
  <Center>
      <Box display={['grid','grid','flex']} gap={8} justifyContent='center' gridTemplateColumns={'1fr 1fr'}>
 <Link>
 <Image w={205} src='https://static.thcdn.com/images/small/webp/widgets/121-us/26/180x72_4_233548301_CA_SS_Logo_Amend_BAU_THG0030424-041301-124116-063126.png' alt="cat-1"/>
 </Link>
 <Link>
 <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/18/original-logo-1024x383-035229-063318.png" alt="cat-2"/>
 </Link> 
  <Link>
   <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/11/Revision_Skincare_Logo_without_Tag_Line-052511.png" alt="cat-3"/>
  </Link>
 <Link>
 <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/46/original-NF_Skinstore_Banner_Logo_Color_320x140-01-011402-010546.png" alt="cat-4"/>
 </Link>
  <Link>
   <Image w={190} src="https://static.thcdn.com/images/small/webp/widgets/121-us/27/220322-ELTAMD-LOGO-RGB-01-065127.png" alt="cat-5"/>
  </Link>
 <Link>
 <Image w={205} src="https://static.thcdn.com/images/small/webp/widgets/121-us/07/original-LOGO-2022_SkinStore_Landing_Page-BLACK-060107.png" alt="cat-6"/>
 </Link>
  </Box>
  </Center>
</Box>

  {/* ********************************************************** What People Are Buying Right Now ************************************** */}
  <Text fontSize={35}mt={4}>What People Are Buying Right Now</Text>
  
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
      src='https://static.thcdn.com/images/small/webp//productimg/480/480/13973771-1764998807002190.jpg'
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
      src='https://static.thcdn.com/images/small/webp//productimg/480/480/12434373-1744821040696653.jpg'
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
      src='https://static.thcdn.com/images/small/webp//productimg/480/480/12588477-1794776910642146.jpg'
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
 
 {/* ********************************************************** Brand of the Month: Olaplex************************************** */}
 <Text fontSize={35}mt={4}>Brand of the Month: Olaplex</Text>
 <Box w='90%' margin={'auto'}>

    <Flex gap={12} direction={['column','column','row']}   w={"95%"}  m='auto' justifyContent={'space-between'} >
    <Box w={['100%','100%','55%']}>
      <Image w={"120%"} h='100%' src='https://static.thcdn.com/images/medium/webp/widgets/121-us/28/600x600-065228.jpeg' alt='1'/>
    </Box>

    <Box  w={['100%','100%','65%']}>
      <BrandSlider/>
    </Box>
    
  </Flex>
 </Box>

 {/* **********************************************************before footer Images************************************** */}
 <Center>
<Box w={'90%'} mt={8}>
<Link>
<Image src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/33/Skinstore_August_Referral_-_Untitled_Page_%281%29-022033.png' alt='img1'/>
</Link>
</Box>
</Center>
 <Center>
<Box w={'90%'} mt={8}>
<Link>
<Image src='https://static.thcdn.com/images/xlarge/webp/widgets/121-us/32/original-0308-STDCRE32346-SS-AH-SkinStore-Concierge-Banners-1180x200-084632.jpg' alt='img1'/>
</Link>
</Box>

</Center>



    </div>
  );
}

export default Home;


