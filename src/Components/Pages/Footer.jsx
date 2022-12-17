import { Box, Button, Flex, Heading, Text, Image } from '@chakra-ui/react';
import { IoMdCall } from 'react-icons/io';
import { FaTruckMoving } from "react-icons/fa"
import { BsArrowClockwise } from "react-icons/bs"
import { FaQuestion } from "react-icons/fa"
import { CgTrack } from "react-icons/cg"
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from '@chakra-ui/react'
import { Link } from "react-router-dom"

import React from 'react';
const socialLinks = ["https://seeklogo.com/images/F/facebook-icon-circle-logo-09F32F61FF-seeklogo.com.png", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnNKRDhSi5b_UTin6DkL-H_kHILzCewAA_VQ&usqp=CAU", "https://www.pngkey.com/png/full/2-27646_twitter-logo-png-transparent-background-logo-twitter-png.png", "https://upload.wikimedia.org/wikipedia/commons/0/08/Pinterest-logo.png", "https://toppng.com/uploads/preview/snapchat-logo-icon-png-snapchat-logo-circle-11562922134qgu9m89jgh.png"]

const about = ["Key Workers Discount", "About Us", "Affiliate Program", "Brand Directory", "Coupon Codes", "Refer A Friend", "Student Discount", "Join SkinStore Experts"]

const legal = ["Cookie Information", "Privacy Policy", "Terms & Conditions", "Modern Slavery Statement"]



const Footer = () => {
  return (

    <Box mt="100px" borderTop="1px solid black">
      <Box w="90%" m="auto">
        <Flex direction={["column", "column", "row"]} mt="25px" textAlign="left">
          <Box w={["100%", "100%", "50%"]} pb="25px">
            <Heading mb="20px" fontSize="md">Sign up to our email list and receive 20% off your next order</Heading>
            <Link to="/signup"><Button border="0px" bgColor="black" borderRadius="0px" _hover={{ bgColor: "#28bdb7", color: "white" }} color="white">SIGN UP</Button></Link>
          </Box>
          <Box w={["100%", "100%", "50%"]} pb="25px">
            <Heading fontSize="md" mb="20px" >Connect with us</Heading>
            <Flex>
              {socialLinks.map((s) => <Image mr="10px" as="img" w="35px" src={s} />)}
            </Flex>
          </Box>
        </Flex>


        <Flex justify="space-between" direction={["column", "column", "row"]}>
          <Box textAlign="left" w={["100%", "100%", "48%"]} borderTop="1px solid black" pt="15px">
            <Heading size="sm" mb="25px">Help & Information</Heading>
            <Button border={["1px solid gainsboro", "0px"]} textAlign="left" fontSize="13px" display="block" w={["100%", "100%", "50%"]} mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} leftIcon={<IoMdCall />}>Customer Service</Button>
            <Button border={["1px solid gainsboro", "0px"]} textAlign="left" fontSize="13px" display="block" w={["100%", "100%", "50%"]} mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} leftIcon={<FaTruckMoving />}>Delivery Information</Button>
            <Button border={["1px solid gainsboro", "0px"]} textAlign="left" fontSize="13px" display="block" w={["100%", "100%", "50%"]} mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} leftIcon={<BsArrowClockwise />}>Returns & Refunds</Button>
            <Button border={["1px solid gainsboro", "0px"]} textAlign="left" fontSize="13px" display="block" w={["100%", "100%", "50%"]} mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} leftIcon={<FaQuestion />}>Help Center</Button>
            <Button border={["1px solid gainsboro", "0px"]} textAlign="left" fontSize="13px" display="block" w={["100%", "100%", "50%"]} mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} leftIcon={<CgTrack />}>Track my order</Button>
          </Box>
          <Flex display={["block", "block", "none"]}>
            <Accordion allowToggle>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" fontSize="14px" flex='1' textAlign='left'>
                      About SkinStore
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  {about.map((a) => <Button fontSize="13px" textAlign="left" display="block" w="100%" borderBottom="1px solid gainsboro" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} >{a}</Button>)}

                </AccordionPanel>
              </AccordionItem>

              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" fontSize="14px" flex='1' textAlign='left'>
                      Legal
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>

                  {legal.map((l) => <Button fontSize="13px" textAlign="left" display="block" w="100%" borderBottom="1px solid gainsboro" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} >{l}</Button>)}

                </AccordionPanel>
              </AccordionItem>
              <AccordionItem>
                <h2>
                  <AccordionButton>
                    <Box as="span" fontSize="14px" flex='1' textAlign='left'>
                      How To Contact Us
                    </Box>
                    <AccordionIcon />
                  </AccordionButton>
                </h2>
                <AccordionPanel pb={4}>
                  <Button fontSize="13px" textAlign="left" display="block" w="100%" borderBottom="1px solid gainsboro" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} >Message Us</Button>
                  <Button fontSize="13px" textAlign="left" display="block" w="100%" borderBottom="1px solid gainsboro" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} >Free Beauty Consultations</Button>
                </AccordionPanel>
              </AccordionItem>
            </Accordion>

          </Flex>
          <Flex display={["none", "none", "flex"]} justify="space-between" textAlign="left" w={["100%", "48%"]}>
            <Box w="30%" borderTop="1px solid black">
              <Heading size="sm" ml="14px" mt="15px" mb="25px">About SkinStore</Heading>
              {about.map((a) => <Button key={a} fontSize="13px" textAlign="left" display="block" w="100%" mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} >{a}</Button>)}
            </Box>
            <Box w="30%" borderTop="1px solid black">
              <Heading size="sm" ml="14px" mt="15px" mb="25px">Legal</Heading>
              {legal.map((l) => <Button key={l} fontSize="13px" textAlign="left" display="block" w="100%" mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} >{l}</Button>)}
            </Box>
            <Box w="30%" borderTop="1px solid black">
              <Heading size="sm" ml="14px" mt="15px" mb="25px">How To Contact Us</Heading>
              <Button fontSize="13px" textAlign="left" display="block" w="100%" mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} >Message Us</Button>
              <Button fontSize="13px" textAlign="left" display="block" w="100%" mb="10px" borderRadius="0px" bgColor="white" _hover={{ bgColor: "gainsboro" }} >Free Beauty Consultations</Button>
            </Box>
          </Flex>

        </Flex>
      </Box>
      <Box borderTop="1px solid black" p="40px" mt="30px">
        <Flex textAlign="left" w={["95%", "95%", "90%"]} m="auto" direction={["column-reverse", "column-reverse", "row"]} >
          <Box w={["100%", "100%", "50%"]}>
            <Heading size="lg">THG</Heading>
            <Text>2022 © The Hut.com Ltd.</Text>
          </Box>
          <Box w={["100%", "100%", "50%"]}>
            <Heading size="sm" mb="25px" >Pay securely with</Heading>
            <Image w={["100%", "100%", "50%"]} src="https://content.asos-media.com/-/media/customer-care/images/imported/us/uspaymentmethodsklarna.ash?la=en-us&h=418&w=1385&hash=A8DC189DE960960509E521CB0405352C" />
          </Box>
        </Flex>
      </Box>
    </Box>
  );
}

export default Footer;
