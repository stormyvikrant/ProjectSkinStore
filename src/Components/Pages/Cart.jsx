import React from "react";
import {
  Box,
  Button,
  Flex,
  Text,
  Heading,
  Spacer,
  TableContainer,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Tfoot,
  Td,
  Image,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionIcon,
  AccordionPanel,
  Input,
} from "@chakra-ui/react";
import { AiFillLock } from "react-icons/ai";
import { CheckCircleIcon, InfoIcon, SmallCloseIcon } from "@chakra-ui/icons";
import { BsGiftFill } from "react-icons/bs";
import {FaCcAmazonPay, FaCcApplePay, FaCcPaypal, FaGooglePay} from "react-icons/fa"
import {SiPaytm} from "react-icons/si"
const Cart = () => {
 
  return (
    <Box w={["col", "col", "row"]} mb={8}>
      <Box w={["95%", "95%", "95%"]} m="auto">
        <Flex direction={["column", "column", "row"]} mt={8}>
          <Heading as="h4" fontFamily={"sans-serif"} fontWeight="normal">
            Your Cart
          </Heading>
          <Spacer />
          <Button
            mt={["8", "8", "0"]}
            bgColor="blackAlpha.800"
            color="white"
            colorScheme="none"
            borderRadius="none"
            height="12"
            fontFamily={"sans-serif"}
            fontWeight="normal"
          >
            <AiFillLock style={{ marginRight: "10px" }} /> CHECKOUT SECURILY NOW
          </Button>
        </Flex>

        <Box border="1px solid #c8dec8" mt={8} color="green" bgColor="#E6F2E6">
          <Text alignItems="center" display="flex" gap="10px" py={2} ml={4}>
            <CheckCircleIcon />
            You have qualified for: {""}Select a gift for you or someone you
            love when you spend $130 or{""} more Don't forget to make your
            selection below
          </Text>
        </Box>

        <Flex direction={["column", "column", "column", "column", "row"]}>
          <Box>
            <TableContainer mt={8}>
              <Table size="md">
                <Thead alignItems="center">
                  <Tr>
                    <Th>Items</Th>
                    <Th>Price</Th>
                    <Th>Quantity</Th>
                    <Th>Subtotal</Th>
                    <Th></Th>
                  </Tr>
                </Thead>
                <Tbody>
                  <Tr>
                    <Td>
                      <Flex
                        alignItems="center"
                        gap="10px"
                        direction={[
                          "column",
                          "column",
                          "column",
                          "column",
                          "row",
                        ]}
                      >
                        <Image
                          height={"70px"}
                          width="70px"
                          src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/11396212-1194870995675144.jpg"
                          alt="product"
                        />
                        <Text fontSize={["13px", "14px", "16px"]}>
                          SkinMedica LYTERA 2.0 Pigment Correcting Serum
                        </Text>
                      </Flex>
                    </Td>
                    <Td>$128</Td>
                    <Td>
                      <Flex alignItems={"center"} gap="10px">
                        <Button>-</Button>
                        <Text>1</Text>
                        <Button>+</Button>
                      </Flex>
                    </Td>
                    <Td>
                      <Text fontWeight="bold">$128</Text>
                    </Td>
                    <Td>
                      <Box
                        bgColor="#f1f1f1"
                        display="flex"
                        justifyContent="center"
                        alignItem="center"
                        p ={["1","1","2"]}
                        borderRadius="50%"
                      >
                        <SmallCloseIcon
                          boxSize="1em"
                          display="flex"
                          justifyContent="center"
                          alignItem="center"
                        />
                      </Box>
                    </Td>
                  </Tr>
                </Tbody>
                <Tfoot>
                  <Tr>
                    <Th></Th>
                    <Th></Th>
                    <Th>Cart Subtotal:</Th>
                    <Th fontWeight={"bold"}>$232</Th>
                  </Tr>
                </Tfoot>
              </Table>
            </TableContainer>

            <Box mt="8">
              <Input
                mt={4}
                w={["100%", "50%", "40%"]}
                borderRadius="none"
                m={"auto"}
                placeholder="Got a Coupon Code? Enter it here: "
                focusBorderColor="#f1f1f1"
              />
              <Button
                mt={["2", "-1", "-1"]}
                w={["100%", "auto", "auto"]}
                borderRadius={"none"}
                fontFamily={"sans-serif"}
                fontWeight="normal"
              >
                ADD
              </Button>
            </Box>

            <Box mt={8}>
              <Flex direction={["column", "column", "row"]}>
                <Button
                  mt={["8", "8", "0"]}
                  bgColor="#f1f1f1"
                  color="black"
                  borderRadius="none"
                  height="12"
                  fontFamily={"sans-serif"}
                  fontWeight="normal"
                  colorScheme="blue"
                >
                  CONTINUE SHOPPING
                </Button>
                <Spacer />
                <Flex direction={["column","column","column"]} gap = "20px">
                  <Button
                    mt={["8", "8", "0"]}
                    bgColor="blackAlpha.800"
                    color="white"
                    borderRadius="none"
                    
                    height="12"
                    fontFamily={"sans-serif"}
                    fontWeight="normal"
                    colorScheme="blue"
                  >
                    <AiFillLock style={{ marginRight: "10px" }} /> CHECKOUT
                    SECURILY NOW
                  </Button>
                  <Flex gap={"20px"} gap = "20px" alignItems = "center" w={["70%","50%","100%"]} margin = "auto">
                        <FaCcPaypal size={"2.5em"} />
                        <FaGooglePay size={"2.5em"}/>
                        <SiPaytm size={"2.5em"}/>
                        <FaCcAmazonPay size={"2.5em"}/>
                        <FaCcApplePay size={"2.5em"}/>

                  </Flex>
                </Flex>
              </Flex>
            </Box>
          </Box>

          <Spacer />

          <Accordion
            allowToggle
            w={["100%", "100%", "100%", "100%", "30%"]}
            mt={8}
          >
            <AccordionItem bgColor={"#f1f1f1"}>
              <h2>
                <AccordionButton>
                  <Box as="span" flex="1" textAlign="left">
                    Gift Selections
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
                <Flex py={6}>
                  <Text fontSize={"16px"} textAlign="left" pl="20px">
                    Select a Gift for You or Someone you love.{" "}
                  </Text>
                  <Spacer />
                  <BsGiftFill style={{ marginRight: "20px" }} />
                </Flex>
              </h2>
              <AccordionPanel pb={4}>
                <Box bgColor={"white"}>
                  <Flex py={4} alignItems="center" pr={4} pl={2} gap="2">
                    <Image
                      height="70px"
                      width={"70px"}
                      src="https://s1.thcdn.com//productimg/70/70/13227262-1734932752281617.jpg"
                      alt="product"
                    />
                    <Text textAlign={"left"}>
                      SkinMedica LYTERA 2.0 Pigment Correcting Serum
                    </Text>
                    <InfoIcon />
                  </Flex>
                </Box>

                <Box bgColor={"white"} mt="4">
                  <Flex py={4} alignItems="center" pr={4} pl={2} gap="2">
                    <Image
                      height="70px"
                      width={"70px"}
                      src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/11975850-1514742470154982.jpg"
                      alt="product"
                    />
                    <Text textAlign={"left"}>
                      NUDESTIX Nudies All Over Face Color Matte{" "}
                    </Text>
                    <InfoIcon />
                  </Flex>
                </Box>

                <Box bgColor={"white"} mt="4">
                  <Flex py={4} alignItems="center" pr={4} pl={2} gap="2">
                    <Image
                      height="70px"
                      width={"70px"}
                      src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/13971588-5624998481683801.jpg"
                      alt="product"
                    />
                    <Text textAlign={"left"}>
                      Deck Of Scarlet Metal Leaf Shadow Pot
                    </Text>
                    <InfoIcon />
                  </Flex>
                </Box>

                <Box bgColor={"white"} mt="4">
                  <Flex py={4} alignItems="center" pr={4} pl={2} gap="2">
                    <Image
                      height="70px"
                      width={"70px"}
                      src="https://static.thcdn.com/images/large/webp//productimg/1600/1600/12590182-1754866388387935.jpg"
                      alt="product"
                    />
                    <Text textAlign={"left"}>
                      Osmosis Beauty Wellness Skin Perfection Elixir{" "}
                    </Text>
                    <InfoIcon />
                  </Flex>
                </Box>
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Flex>
      </Box>
    </Box>
  );
};

export default Cart;
