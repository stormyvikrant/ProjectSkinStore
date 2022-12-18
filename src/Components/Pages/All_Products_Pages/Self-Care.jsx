import { CheckCircleIcon } from "@chakra-ui/icons";
import {
  Box,
  Image,
  SimpleGrid,
  Flex,
  Heading,
  Checkbox,
  Select,
  useDisclosure,
  Button,
  Text,
  useToast,
} from "@chakra-ui/react";
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
} from "@chakra-ui/react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from "@chakra-ui/react";

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Footer from "../Footer";

import { addToCart } from "../../Redux/cart/cart.actions";

import SingleProduct from "../../ProductsPage/SingleProduct";

const filters = {
  brands: [
    "111SKIN (5) ",
    "3LAB (8) ",
    "Aesop (10) ",
    "African Botanics (1) ",
    "AHAVA (7) ",
    "Alchimie Forever (5) ",
    "ALGENIST (1) ",
    "Alo (1) ",
  ],
  skinCare: [
    "Moisturisers (1118) ",
    "Serums (127) ",
    "Cleansers (31) ",
    "Neck & Décolletage (21) ",
    "Toners (21) ",
  ],
  format: [
    "Cream (458) ",
    "Fluid (104) ",
    "Gel (60) ",
    "Serum (58) ",
    "Clay (18) ",
  ],
  skintype: [
    "All (381) ",
    "Combination (405) ",
    "Dry (492) ",
    "Mature (344) ",
    "Normal (563) ",
    "Sensitive (390) ",
    "Oily (349) ",
  ],
  gender: ["Boys (5) ", "Girls (200)", "Men (101) ", "Women (300) "],
  review: ["2-3 (8) ", "3-4 (41) ", "4+ (402) "],
};

const brands = [
  "almay",
  "anna sui",
  "annabelle",
  "cargo cosmetics",
  "clinique",
  "coastal classic creation",
  "colourpop",
  "covergirl",
  "dalish",
  "deciem",
  "dior",
  "dr. hauschka",
  "maybelline",
  "milani",
  "mineral fusion",
];
const categories = [
  "foundation",
  "lipstick",
  "mascara",
  "nail_polish",
  "blush",
  "eyeliner",
  "eyeshadow",
  "bronzer",
];
const Selfcare = () => {
  const [products, setProducts] = useState([]);
  let [loading, setLoading] = useState(false);
  let [price, setPrice] = useState(20);
  let [brand, setBrand] = useState("");
  let [category, setCategory] = useState("foundation");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [modalProps, setModalProps] = useState({});
  const toast = useToast();
  const cartProducts = useSelector((state) => state.cartManager.products);
  let cartTotal = cartProducts.reduce((acc, p) => {
    return acc + Number(p.price);
  }, 0);

  const dispatch = useDispatch();

  const handleSelect = (e) => {
    const { name, value } = e.target;
    if (name == "price") {
      let val = Number(value);
      setPrice(val);
    } else if (name == "brand") {
      setPrice(10);
      setCategory("");
      setBrand(value);
    } else {
      setPrice(10);
      setBrand("");
      setCategory(value);
    }
  };
  const handleModal = (data) => {
    setModalProps(data);
    onOpen();
  };
  const handleAdd = (data) => {
    toast({
      position: "top-left",
      duration: 1200,
      render: () => (
        <Flex
          color="white"
          border="4px solid white"
          p={"10px"}
          bgColor="green.400"
        >
          <CheckCircleIcon w={30} h={30} />
          <Text
            size="lg"
            ml="15px"
          >{`${modalProps.name} is now in your cart!!!`}</Text>
        </Flex>
      ),
    });
    dispatch(addToCart(data));
    onClose();
  };

  useEffect(() => {
    setLoading(true);
    brand == ""
      ? fetch(
          `https://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${category}&price_greater_than=11&price_lesser_than=${price}`
        )
          .then((res) => res.json())
          .then((res) => setProducts(res))
          .then((r) => setLoading(false))
      : fetch(
          `https://makeup-api.herokuapp.com/api/v1/products.json?&product_type=${category}&price_greater_than=11&price_lesser_than=${price}&brand=${brand}`
        )
          .then((res) => res.json())
          .then((res) => setProducts(res))
          .then((r) => setLoading(false));
  }, [price, brand, category]);

  return (
    <>
      <Flex w="90%" m="auto" justify="space-between" mt={["12","12","12","12","auto"]}>
        <Box
          w="25%"
          display={["none", "none", "block"]}
          style={{ fontFamily: "sans-serif" }}
        >
          <Box borderBottom="1px solid gainsboro" p="20px" mb="50px">
            <Heading size="lg">Refine</Heading>
          </Box>
          <Accordion defaultIndex={[0, 1, 2, 3, 4, 5, 6, 7]} allowMultiple>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    fontSize="md"
                    fontWeight="bold"
                    flex="1"
                    textAlign="left"
                  >
                    Brands
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {filters.brands.map((b) => (
                  <Box>
                    <Checkbox size="md">{b}</Checkbox>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    flex="1"
                    fontSize="md"
                    fontWeight="bold"
                    textAlign="left"
                  >
                    SkinCare Product Type
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {filters.skinCare.map((s) => (
                  <Box>
                    <Checkbox size="md">{s}</Checkbox>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    SkinCare Format
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {filters.format.map((s) => (
                  <Box>
                    <Checkbox size="md">{s}</Checkbox>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    SkinType
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {filters.skintype.map((s) => (
                  <Box>
                    <Checkbox size="md">{s}</Checkbox>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    fontSize="md"
                    fontWeight="bold"
                    as="span"
                    flex="1"
                    textAlign="left"
                  >
                    Gender
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {filters.gender.map((s) => (
                  <Box>
                    <Checkbox size="md">{s}</Checkbox>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box
                    as="span"
                    fontSize="md"
                    fontWeight="bold"
                    flex="1"
                    textAlign="left"
                  >
                    Review
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                {filters.review.map((s) => (
                  <Box>
                    <Checkbox size="md">{s}</Checkbox>
                  </Box>
                ))}
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
        <Box w={["100", "100%", "70%"]} mt="25px">
          <Heading mb="30px">{`Up to 50% off!`}</Heading>
          <Flex justify="space-between">
            <Select
              w="30%"
              borderRadius="0px"
              border="1px solid black"
              onChange={handleSelect}
              name="price"
            >
              <option value="40">By Default</option>
              <option value="10">lesser than 10$</option>
              <option value="20">lesser than 20$</option>
              <option value="30">lesser than 30$</option>
              <option value="40">lesser than 35$</option>
            </Select>
            <Select
              w="30%"
              borderRadius="0px"
              border="1px solid black"
              placeholder="Sort By Brand"
              onChange={handleSelect}
              name="brand"
            >
              {brands.map((b) => (
                <option value={b}>{b}</option>
              ))}
            </Select>
            <Select
              w="30%"
              borderRadius="0px"
              border="1px solid black"
              onChange={handleSelect}
              placeholder="Sort By Category"
              name="category"
            >
              {categories.map((c) => (
                <option value={c}>{c}</option>
              ))}
            </Select>
          </Flex>
          {loading ? (
            <Image
              w="100px"
              display="block"
              m="auto"
              mt="100px"
              src="https://www.aguacaliente.org/imgs/loading.gif"
            />
          ) : (
            <SimpleGrid w="100%" columns={[2, 2, 3]} spacing="40px" pt="10">
              {products.map((p, i) => {
                if (i < 25) {
                  return (
                    <SingleProduct
                      {...p}
                      handleModal={handleModal}
                      key={p.id}
                    />
                  );
                }
              })}
            </SimpleGrid>
          )}
        </Box>
        )
        <Modal
          isCentered
          onClose={onClose}
          isOpen={isOpen}
          motionPreset="slideInBottom"
          size={["sm", "md", "2xl"]}
        >
          <ModalOverlay />
          <ModalContent borderRadius="0px">
            <ModalHeader
              p="10px"
              bgColor="gainsboro"
              borderBottom="1px solid black"
              fontSize="20px"
            >
              {`Get Your ${modalProps.product_type} Fast Order Is Limited!!!`}
            </ModalHeader>
            <ModalCloseButton />
            <ModalBody pt="35px" pb="35px">
              <Flex mt="10px" justify="space-between">
                <Box w="30%">
                  <Image w="100%" src={modalProps.image_link} />
                </Box>
                <Box width="50%">
                  <Text mb="15px" fontSize="xl">
                    {modalProps.name}
                  </Text>
                  <Text mb="15px">{`Brand - ${modalProps.brand}`}</Text>
                  <Text mb="15px">Quantity 1</Text>
                  <Heading>{`$${modalProps.price}`}</Heading>
                </Box>
              </Flex>
              <Text fontSize="20px">{"Subtotal:"}</Text>
              <Flex justify="space-between">
                <Text fontSize="20px">{`( ${cartProducts.length} items in your cart)`}</Text>
                <Text fontSize="20px">{`$${cartTotal}`}</Text>
              </Flex>
              <Flex
                p="15px"
                mt="25px"
                borderTop="1px solid black"
                borderBottom="1px solid black"
                justify="space-between"
                direction={["column", "column", "row"]}
              >
                <Button
                  borderRadius="0px"
                  bgColor="white"
                  border="1px solid black"
                  color="black"
                  w={["100%", "100%", "48%"]}
                  display="block"
                  mb="8px"
                  onClick={() => handleAdd(modalProps)}
                >
                  Add To Cart
                </Button>
                <Box w={["100%", "100%", "48%"]}>
                  <Link to="/cart">
                    <Button
                      borderRadius="0px"
                      bgColor="black"
                      color="white"
                      w="100%"
                      display="block"
                      _hover={{ bgColor: "#28bdb7" }}
                    >
                      VIEW CART
                    </Button>
                  </Link>
                </Box>
              </Flex>
            </ModalBody>
            <ModalFooter></ModalFooter>
          </ModalContent>
        </Modal>
      </Flex>
      <Footer />
    </>
  );
};

export default Selfcare;
