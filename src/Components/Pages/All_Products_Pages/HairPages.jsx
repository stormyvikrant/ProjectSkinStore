import { Link } from "react-router-dom";
import BrandSlider from "../Slider/BrandSlider";
import { BiShoppingBag } from "react-icons/bi";
import Footer from "../Footer";
import {
  Box,
  Image,
  Center,
  Text,
  Flex,
  Heading,
  Button,
  Card,
  CardBody,
  Stack,
  CardFooter,
  Divider,
} from "@chakra-ui/react";
import React from "react";
const HairPage = () => {
  return (
    <div >
      {/* ******************************Big Image********************* */}
      <Box w="90%" m="auto" border={"2px solid black"}  borderRadius={10} mt={["16","16","16","16","auto"]}>
        <Link to="/hair">
          <Image
            borderRadius={10}
            src="https://static.thcdn.com/images/xlarge/webp/widgets/121-us/23/SS-Batching-Christmas-Category_Banner-EG1180x450_4-082423.jpg"
            alt="hair image"
          />
        </Link>
      </Box>

      {/* **********************************************************Shop by Ingredient ************************************** */}

      <Text fontSize={45} textAlign="center" mb={4} mt={4}>
        Shop by Hair Focus
      </Text>
      <Box mt={8} alignItems="center" w="85%" margin="auto">
        <Box
          display={["grid", "grid", "flex"]}
          justifyContent="space-between"
          gridTemplateColumns={"1fr 1fr"}
        >
          <Link>
            <Link to="/hair">
              <Image
                w={205}
                src="https://static.thcdn.com/images/small/webp/widgets/121-us/14/Page-001-015714.png"
                alt="cat-1"
              />
            </Link>
          </Link>
          <Link>
            <Link to="/hair">
              <Image
                w={205}
                src="https://static.thcdn.com/images/small/webp/widgets/121-us/23/Page-002-015723.png"
                alt="cat-2"
              />
            </Link>
          </Link>
          <Link>
            <Link to="/hair">
              <Image
                w={205}
                src="https://static.thcdn.com/images/small/webp/widgets/121-us/32/Page-003-015732.png"
                alt="cat-3"
              />
            </Link>
          </Link>
          <Link>
            <Link to="/hair">
              <Image
                w={205}
                src="https://static.thcdn.com/images/small/webp/widgets/121-us/42/Page-004-015742.png"
                alt="cat-4"
              />
            </Link>
          </Link>
          <Link>
            <Link to="/hair">
              <Image
                w={205}
                src="https://static.thcdn.com/images/small/webp/widgets/121-us/50/Page-005-015750.png"
                alt="cat-5"
              />
            </Link>
          </Link>
          <Link>
            <Link to="/hair">
              <Image
                w={205}
                src="https://static.thcdn.com/images/small/webp/widgets/121-us/56/Page-006-015756.png"
                alt="cat-6"
              />
            </Link>
          </Link>
        </Box>
      </Box>

      {/* **********************************************************   Brand of the Month: Olaplex ************************************** */}

      <Text fontSize={35} mt={4} textAlign="center" mb={4}>
        Brand of the Month: Olaplex
      </Text>
      <Box w="90%" margin={"auto"}>
        <Flex
          gap={12}
          direction={["column", "column", "row"]}
          w={"95%"}
          m="auto"
          justifyContent={"space-between"}
        >
          <Box w={["100%", "100%", "55%"]}>
            <Link tp="/skin">
              {" "}
              <Image
                w={"120%"}
                h="100%"
                src="https://static.thcdn.com/images/medium/webp/widgets/121-us/28/600x600-065228.jpeg"
                alt="1"
              />
            </Link>
          </Box>

          <Box w={["100%", "100%", "65%"]}>
            <BrandSlider />
          </Box>
        </Flex>
      </Box>

      {/* ********************************************************** Best Sellers ************************************** */}

      <Text fontSize={35} textAlign="center" mb={4} mt={4}>
        Best Sellers
      </Text>

      <Box>
        <Center>
          <Flex
            direction={["column", "column", "row"]}
            w={"95%"}
            gap={4}
            m="auto"
            justifyContent={"space-between"}
          >
            {/* ****************Card -1**************** */}

            <Card
              w={["70%", "70%", "30%"]}
              marginLeft={12}
              cursor="pointer"
              margin="auto"
            >
              <CardBody>
                <Image
                  src="https://static.thcdn.com/images/small/webp//productimg/480/480/13222916-3644914880619826.jpg"
                  alt="T3 AireBrush Duo"
                />
                <Stack mt="6" spacing="3">
                  <Text color={"gray"}>T3 AireBrush Duo</Text>
                  <Text fontSize={23} textAlign="left">
                    $189.99
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box w="100%">
                  <Link to="/skin">
                    <Button
                      borderRadius="0px"
                      bgColor="black"
                      _hover={{ bgColor: "#28bdb7" }}
                      color={"white"}
                      w="100%"
                    >
                      <BiShoppingBag color="white" fontSize={25} /> View More
                    </Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>
            {/* ****************Card -2**************** */}

            <Card w={["70%", "70%", "30%"]} cursor="pointer" margin="auto">
              <CardBody>
                <Image
                  src="https://static.thcdn.com/images/small/webp//productimg/480/480/12635437-1314911951568611.jpg"
                  alt="Christophe Robin Cleansing Purifying Scrub with Sea Salt 250ml"
                  borderRadius="lg"
                />
                <Stack mt="6" spacing="3">
                  <Text color={"gray"}>
                    Christophe Robin Cleansing Purifying Scrub with Sea Salt
                    250ml
                  </Text>
                  <Text fontSize={23} textAlign="left">
                    $125
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box w="100%">
                  <Link to="/skin">
                    <Button
                      borderRadius="0px"
                      bgColor="black"
                      _hover={{ bgColor: "#28bdb7" }}
                      color={"white"}
                      w="100%"
                    >
                      <BiShoppingBag color="white" fontSize={25} /> View More
                    </Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>

            {/* ****************Card -3**************** */}

            <Card w={["70%", "70%", "30%"]} cursor="pointer" margin="auto">
              <CardBody>
                <Image
                  src="https://static.thcdn.com/images/small/webp//productimg/480/480/12526872-4524872074957712.jpg"
                  alt="VIRTUE Healing Oil 50ml"
                />
                <Stack mt="6" spacing="3">
                  color={"gray"}
                  <Text>VIRTUE Healing Oil 50ml</Text>
                  <Text fontSize={23} textAlign="left">
                    $50
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box w="100%">
                  <Link to="/skin">
                    <Box w="100%">
                      <Link to="/skin">
                        <Button
                          borderRadius="0px"
                          bgColor="black"
                          _hover={{ bgColor: "#28bdb7" }}
                          color={"white"}
                          w="100%"
                        >
                          <BiShoppingBag color="white" fontSize={25} /> View
                          More
                        </Button>
                      </Link>
                    </Box>
                  </Link>
                </Box>
              </CardFooter>
            </Card>

            {/* ****************Card -4**************** */}
            <Card w={["70%", "70%", "30%"]} cursor="pointer" margin="auto">
              <CardBody>
                <Image
                  src="https://static.thcdn.com/images/small/webp//productimg/480/480/11927426-2014713645552216.jpg"
                  alt="Grow Gorgeous Density Serum Intense 60ml"
                />
                <Stack mt="6" spacing="3">
                  <Text color={"gray"}>
                    Grow Gorgeous Density Serum Intense 60ml
                  </Text>
                  <Text fontSize={23} textAlign="left">
                    $40
                  </Text>
                </Stack>
              </CardBody>
              <Divider />
              <CardFooter>
                <Box w="100%">
                  <Link to="/skin">
                    <Button
                      borderRadius="0px"
                      bgColor="black"
                      _hover={{ bgColor: "#28bdb7" }}
                      color={"white"}
                      w="100%"
                    >
                      <BiShoppingBag color="white" fontSize={25} /> View More
                    </Button>
                  </Link>
                </Box>
              </CardFooter>
            </Card>
          </Flex>
        </Center>
      </Box>

      {/* **********************************************************   Over On The Blog... ************************************** */}

      <Text fontSize={45} textAlign="center" mb={4} mt={4}>
        Over On The Blog...
      </Text>
      <Box textAlign={"center"}>
        <Center>
          <Flex
            direction={["column", "column", "row"]}
            w={"95%"}
            gap={4}
            m="auto"
            justifyContent={"space-between"}
          >
            <Box w={["100%", "100%", "30%"]}>
              <Center>
                <Image
                  borderRadius={200}
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/35/0115-TUU087-SS-AH-February-Batching-Shot-24-1080x1080-072235.jpg"
                  w={"100%"}
                  alt="1"
                />
              </Center>
              <Heading fontSize={20} mt={4}>
                hair Gift
              </Heading>
              <Text fontSize={13} mt={2} color="gray">
                Receive a SkinCeuticals Resveratrol BE 4ml (Worth $21) when you
                spend $220 or more on the brand.
              </Text>
              <Link to="/">
                <Button
                  bgColor={"white"}
                  border="1px solid gray"
                  borderRadius={"0"}
                  mt={5}
                >
                  SHOP-NOW
                </Button>
              </Link>
            </Box>
            <Box w={["100%", "100%", "30%"]}>
              <Center>
                <Image
                  borderRadius={200}
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/16/original-hair_color-084316.jpg"
                  w={"100%"}
                  alt={"2"}
                />
              </Center>
              <Heading fontSize={20} mt={4}>
                20%off hair+$135 gift
              </Heading>
              <Text fontSize={13} mt={2} color="gray">
                hair (Worth $135) when you spend $250 or more on the brand.
              </Text>
              <Link to="/">
                <Button
                  bgColor={"white"}
                  border="1px solid gray"
                  borderRadius={"0"}
                  mt={5}
                >
                  SHOP-NOW
                </Button>
              </Link>
            </Box>
            <Box w={["100%", "100%", "30%"]}>
              <Center>
                <Image
                  borderRadius={200}
                  src="https://static.thcdn.com/images/small/webp/widgets/121-us/33/0201-TUU087-SS-AH-February-Batching-Shot-25-1080x1080-072333.jpg"
                  w={"100%"}
                  alt={"3"}
                />
              </Center>
              <Heading fontSize={20} mt={4}>
                25%off hair with code REPLAY+$95 Gift
              </Heading>
              <Text fontSize={13} mt={2} color="gray">
                Plus, receive a 111SKIN Space Defence Bright Eye Lift Gel Mini
                7.5ml (Worth $95) when you spend $250 or more on the brand.
              </Text>
              <Link to="/">
                <Button
                  bgColor={"white"}
                  border="1px solid gray"
                  borderRadius={"0"}
                  mt={5}
                >
                  SHOP-NOW
                </Button>
              </Link>
            </Box>
          </Flex>
        </Center>
      </Box>

      <hr />
      <Footer />
    </div>
  );
};

export default HairPage;
