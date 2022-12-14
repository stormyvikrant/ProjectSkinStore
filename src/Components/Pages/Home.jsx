
//   Vikrant is responsible 


import React, { useState } from 'react';
import{GrDeliver}from "react-icons/gr";
import{ImMobile}from "react-icons/im";
import{VscReferences}from "react-icons/vsc";
import{RiBatterySaverLine}from "react-icons/ri";
import {Grid,Box,Center, Heading, Text, Image, Flex, Link, Button}from "@chakra-ui/react"
;
import SliderImage from './Slider/SliderImage';

import ProductSlider1 from './Slider/ProductSlider1';

const Home = () => {
  const [select, setselect] = useState("vikrant");


  const handlecomponent=()=>{

  }


  return (
    <div>

      

      {/* **********************************************************First section************************************** */}
              
              {/* **********************************************************Slider ************************************** */}
              <Box marginBottom={12}>
                <SliderImage/> 
              </Box>
         {/* **********************************************************shop by Category ************************************** */}
         <Text fontSize={45}>Shop by Category</Text>
<Box mt={8}>
  <Center>
      <Flex gap={8} flexWrap="wrap">
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
  </Flex>
  </Center>
</Box>

   {/* **********************************************************shop by Category ************************************** */}
   <Text fontSize={45}mt={8}>Missed Black Friday?</Text>
   <Box mt={8}>
{/* <Button onClick={()=>setselect()}>vikki</Button>
<Button onClick={()=>setselect("uma")}>uma</Button>
<Button onClick={()=>setselect("kishan")}>kisan</Button>

<Box>
{select}
</Box> */}


<ProductSlider1/>

</Box>

    </div>
  );
}

export default Home;
