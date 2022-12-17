import {
  Box, Card, CardBody,
  Text,
  Center,
  Flex,
  Heading,

  Image,
  Button,
  Stack,
  Divider,
  CardFooter,
} from '@chakra-ui/react';
import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';
import Footer from '../Footer';
import Holidayslider from '../Slider/HolidaySlider/Holidayslider';
import { Link } from "react-router-dom"

const Holiday = () => {
  return (
    <div>
      <Box marginBottom={12}>
        <Holidayslider />
      </Box>

      {/* ****************************************  Three  cirle image*************************** */}


      <Text fontSize={45} mt={"14px"} mb={"14px"} align="center">Holiday Offers</Text>
      <Box mt={12} textAlign="center">
        <Center>
          <Flex direction={['column', 'column', 'row']} w={"95%"} gap={4} m='auto' justifyContent={'space-between'} alignItems="center">

            <Box w={['100%', '100%', '30%']} >
              <Center>
                <Link to='/skin'><Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/01/original-original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot21500x500-052147-021101.jpg" w={'100%'} alt="1" /> </Link>
              </Center>
              <Heading fontSize={20} mt={4}>SkinCeuticals Gift</Heading>
              <Text fontSize={13} mt={2} color="gray">Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you spend $220 or more on the brand.</Text>
              <Link to="/skin">
                <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
              </Link>
            </Box>
            <Box w={['100%', '100%', '30%']}>
              <Center>
                <Link to='/skin'> <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/36/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot20500x500-052136.jpg" w={'100%'} alt={"2"} /></Link>
              </Center>
              <Heading fontSize={20} mt={4}>20%off SkinMedica+$135 gift</Heading>
              <Text fontSize={13} mt={2} color="gray">Receive a FREE SkinMedica Eye Illuminating Kit (Worth $135) when you spend $250 or more on the brand.</Text>
              <Link to="/skin">
              
              <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
              </Link>
            </Box>
            <Box w={['100%', '100%', '30%']}>
              <Center>
                <Link to='/skin'>   <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/57/original-original-original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot23500x500-053709-091327-021057.jpg" w={'100%'} alt={"3"} /></Link>
              </Center>
              <Heading fontSize={20} mt={4}>25%off 111SKIN with code REPLAY+$95 Gift</Heading>
              <Text fontSize={13} mt={2} color="gray">Plus, receive a 111SKIN Space Defence Bright Eye Lift Gel Mini 7.5ml (Worth $95) when you spend $250 or more on the brand.</Text>
              <Link>
                <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
              </Link>
            </Box>
          </Flex>
        </Center>
      </Box>

      {/* ****************************************  Three  cirle image*************************** */}

      <Box mt={12} textAlign="center">
        <Center>
          <Flex direction={['column', 'column', 'row']} w={"95%"} gap={4} m='auto' justifyContent={'space-between'}>

            <Box w={['100%', '100%', '30%']}>
              <Center>
                <Link to='/skin'><Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/05/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot22500x500-053705.jpg" w={'100%'} alt="1" /> </Link>
              </Center>
              <Heading fontSize={20} mt={4}>SkinCeuticals Gift</Heading>
              <Text fontSize={13} mt={2} color="gray">Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you spend $220 or more on the brand.</Text>
              <Link to="/skin">
              
              <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
              </Link>
            </Box>
            <Box w={['100%', '100%', '30%']}>
              <Center>
                <Link to='/skin'> <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/58/original-Shot34-500x500-091258.jpeg" w={'100%'} alt={"2"} /></Link>
              </Center>
              <Heading fontSize={20} mt={4}>20%off SkinMedica+$135 gift</Heading>
              <Text fontSize={13} mt={2} color="gray">Receive a FREE SkinMedica Eye Illuminating Kit (Worth $135) when you spend $250 or more on the brand.</Text>
              <Link to="/skin">
              <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
              </Link>
            </Box>
            <Box w={['100%', '100%', '30%']}>
              <Center>
                <Link to='/skin'>   <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/17/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot24500x500-053717.jpg" w={'100%'} alt={"3"} /></Link>
              </Center>
              <Heading fontSize={20} mt={4}>25%off 111SKIN with code REPLAY+$95 Gift</Heading>
              <Text fontSize={13} mt={2} color="gray">Plus, receive a 111SKIN Space Defence Bright Eye Lift Gel Mini 7.5ml (Worth $95) when you spend $250 or more on the brand.</Text>
              <Link to="/">
                <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
              </Link>
            </Box>
          </Flex>
        </Center>
      </Box>

      {/* ****************************************  Three  cirle image*************************** */}

      <Box mt={12} textAlign="center">
        <Center>
          <Flex direction={['column', 'column', 'row']} w={"95%"} gap={4} m='auto' justifyContent={'space-between'}>

            <Box w={['100%', '100%', '30%']}>
              <Center>
                <Link to='/skin'><Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/41/original-Shot27-500x500-091541.jpeg" w={'100%'} alt="1" /> </Link>
              </Center>
              <Heading fontSize={20} mt={4}>SkinCeuticals Gift</Heading>
              <Text fontSize={13} mt={2} color="gray">Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you spend $220 or more on the brand.</Text>
              <Link to="/">
              <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
              </Link>
            </Box>
            <Box w={['100%', '100%', '30%']}>
              <Center>
                <Link to='/skin'> <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/15/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot25500x500-054015.jpg" w={'100%'} alt={"2"} /></Link>
              </Center>
              <Heading fontSize={20} mt={4}>20%off SkinMedica+$135 gift</Heading>
              <Text fontSize={13} mt={2} color="gray">Receive a FREE SkinMedica Eye Illuminating Kit (Worth $135) when you spend $250 or more on the brand.</Text>
              <Link to="/skin">
              <Button bgColor={"white"} border='1px solid gray' borderRadius={'0'} mt={5}>SHOP-NOW</Button>
              </Link>
            </Box>
            <Box w={['100%', '100%', '30%']}>
              <Center>
                <Link to='/skin'>   <Image src="https://static.thcdn.com/images/small/webp/widgets/121-us/19/original-SkinStore_Q4_Photography_2022_-_October_-_THG0035163_-_BATCHING_shot26500x500-054019.jpg" w={'100%'} alt={"3"} /></Link>
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

      {/* **********************************************Four Card ***************************************** */}

      <Text fontSize={45} mt={"14px"} mb={"14px"} align="center">What People Are Buying Right Now</Text>

      <Box  >
        <Center>
          <Flex direction={['column', 'column', 'row']} w={"95%"} gap={4} m='auto' justifyContent={'space-between'} >

            {/* ****************Card -1**************** */}

            <Card w={['70%', '70%', '30%']} marginLeft={12} cursor='pointer' margin='auto'>
              <CardBody>
                <Image
                  src='https://static.thcdn.com/images/small/webp//productimg/480/480/13812007-1244993329820695.jpg'
                  alt='  Skinstore 2022 Holiday Edit - $670 Value'

                />
                <Stack mt='6' spacing='3'>
                  <Text color={"gray"}>
                    Skinstore 2022 Holiday Edit - $670 Value
                  </Text>
                  <Text fontSize={23} textAlign="left">
                    $43
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box w="100%">
                  <Link to="/skin">
                    <Button borderRadius="0px" bgColor='black' _hover={{ bgColor: "#28bdb7" }} color={'white'} w='100%'>
                      <BiShoppingBag color='white' fontSize={25} />  View More
                    </Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>
            {/* ****************Card -2**************** */}

            <Card w={['70%', '70%', '30%']} cursor='pointer' margin='auto'>
              <CardBody>
                <Image
                  src='https://static.thcdn.com/images/small/webp//productimg/480/480/13949126-6304993388536680.jpg'
                  alt='Rituals The Ritual of Advent 3D'
                  borderRadius='lg'
                />
                <Stack mt='6' spacing='3'>
                  <Text color={"gray"}>
                    Rituals The Ritual of Advent 3D
                  </Text>
                  <Text fontSize={23} textAlign="left">
                    $25
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box w="100%">
                  <Link to="/skin">
                    <Button borderRadius="0px" bgColor='black' _hover={{ bgColor: "#28bdb7" }} color={'white'} w='100%'>
                      <BiShoppingBag color='white' fontSize={25} />  View More
                    </Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>


            {/* ****************Card -3**************** */}


            <Card w={['70%', '70%', '30%']} cursor='pointer' margin='auto'>
              <CardBody>
                <Image
                  src='https://static.thcdn.com/images/small/webp//productimg/480/480/13903619-1444998250558359.jpg'
                  alt='Olaplex Hair Repair Treatment Holiday Kit (Worth $90.00)'

                />
                <Stack mt='6' spacing='3'>
                  color={"gray"}
                  <Text>
                    Olaplex Hair Repair Treatment Holiday Kit (Worth $90.00)
                  </Text>
                  <Text fontSize={23} textAlign="left">
                    $65
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box w="100%">
                  <Link to="/skin">
                    <Button borderRadius="0px" bgColor='black' _hover={{ bgColor: "#28bdb7" }} color={'white'} w='100%'>
                      <BiShoppingBag color='white' fontSize={25} />  View More
                    </Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>




            {/* ****************Card -4**************** */}
            <Card w={['70%', '70%', '30%']} cursor='pointer' margin='auto'>
              <CardBody>
                <Image
                  src='https://static.thcdn.com/images/small/webp//productimg/480/480/13953421-1574996250285994.jpg'
                  alt='111SKIN Y Theorem Bio Cellulose Facial Mask Single 0.87 oz (Worth $32.00)'

                />
                <Stack mt='6' spacing='3'>
                  <Text color={"gray"}>
                    Natura Bissé Diamond Extreme Holiday Set (Worth $633.00)
                  </Text>
                  <Text fontSize={23} textAlign="left">
                    $65
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box w="100%">
                  <Link to="/skin">
                    <Button borderRadius="0px" bgColor='black' _hover={{ bgColor: "#28bdb7" }} color={'white'} w='100%'>
                      <BiShoppingBag color='white' fontSize={25} />  View More
                    </Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>
          </Flex>
        </Center>
      </Box>

      <Footer />
    </div>
  );
}

export default Holiday;
