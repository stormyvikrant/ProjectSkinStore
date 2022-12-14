//   Mukesh  is responsible

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "../Pages/Navbar.css";
import { HamburgerIcon, Search2Icon, SearchIcon } from "@chakra-ui/icons";
import { VscAccount } from "react-icons/vsc";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { RiBattery2ChargeFill, RiCoinsFill } from "react-icons/ri";
import { MdLocalOffer, MdOutlineSmartphone } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { TbDiscount2, TbGift } from "react-icons/tb";
import {HiMenu} from "react-icons/hi"
import { VscReferences } from "react-icons/vsc";
import {CgSearch} from "react-icons/cg"

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <div>
      <Box
        style={{
          backgroundColor: "#F2F2F2",
          padding: "10px",
          paddingRight: "30px",
        }}
      >
        <Box
          style={{
            display: "flex",
            alignItem: "center",
            gap: "50px",
            flexDirection: "row-reverse",
          }}
        >
          <Text>Help</Text>
          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "10px",
            }}
          >
            <img
              style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
            />
            <Text>us - USD</Text>
          </Box>
        </Box>
      </Box>

      <Box id="after-top">
        <Box>
          <img
            className="logo"
            src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
            alt="logo"
          />
        </Box>

        <div id="search-bar">
          <InputGroup>
            <Input placeholder="Search for a Product or a Brand" />
            <InputRightElement children={<Search2Icon color="gray.500" />} />
          </InputGroup>
        </div>

        <div style={{ display: "flex", gap: "50px" }}>
          <div id="dropdown-account">
            <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
              <VscAccount size="1.6em" />
              <Text>Account</Text>
            </div>
            <div id="dropdown-account-content">
              <Button
                colorScheme="none"
                w="full"
                bgColor="black"
                borderRadius={0}
              >
                LOGIN
              </Button>
              <Button
                colorScheme="none"
                mt={4}
                borderRadius={0}
                color="black"
                w="full"
                variant="outline"
              >
                REGISTER
              </Button>
              <div
                style={{
                  textAlign: "left",
                  display: "flex",
                  flexDirection: "column",
                  gap: "15px",
                  marginTop: "20px",
                  fontSize: "16px",
                }}
              >
                <p>Wishlist</p>
                <p>Your Orders</p>
                <p>Your Referrels</p>
              </div>
            </div>
          </div>

          <div class="dropdown">
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <FaShoppingCart size="1.6em" />
                <p className="cartValue">0</p>
              </div>

              <Text>Cart</Text>
            </div>
            <div class="dropdown-content">
              <p>There are currently no items in your cart.</p>
            </div>
          </div>
        </div>
      </Box>

      <Box id="menu_nav" style={{ borderTop: "2px solid black" }}>
        <Box
          alignItems="center"
          display="flex"
          justifyContent="space-evenly"
          width="84%"
          margin="auto"
          id="hover-black"
        >
          <div id="menu-title">Brands</div>
          <div id="menu-dropdown">
            <div id="menu-title">Holiday Gifts</div>
            <div className="menu-dropdown-content">
              <Box display="flex" gap="50px" pt={5} padding="20px">
                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Populer Categories
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Show All Products by Beuty Gift</p>
                    <p>Our Favorite Beuty Gift Sets</p>
                    <p>Skinstore Exclusive Gifts</p>
                    <p>SkinStore's Holiday Edit Box</p>
                    <p>Holiday Gift Ideas for Her</p>
                    <p>Holiday Gift Ideas for Him</p>
                  </div>
                </div>
                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    By Gift Idea
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Budget Friendly and Small Gifts</p>
                    <p>Stocking Stuffer Ideas</p>
                    <p>Thoughtful Gifts for Smart Splurges</p>
                    <p>Luxury Holiday Gifts</p>
                    <p> Last Minute Gift Ideas</p>
                    <p>Gifts For You</p>
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    By Price
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Gifts Under $25</p>
                    <p>Gifts Under $50</p>
                    <p>Gifts Under $100</p>
                    <p>Gifts Over $100</p>
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    By Category
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Skin Care Gifts</p>
                    <p>Body Care Gifts</p>
                    <p>Home Scents and Candle Gifts</p>
                    <p>Makeup Gifts</p>
                    <p>Hair Care Gifts</p>
                    <p>Beauty Tools and Hair Styling Gifts</p>
                  </div>
                </div>
              </Box>
            </div>
          </div>

          <div id="menu-dropdown">
            <div id="menu-title">Sales</div>
            <div className="menu-dropdown-content">
              <Box display="flex" gap="50px" pt={5} padding="20px">
                <div style={{ display: "flex", gap: "20px" }}>
                  <div>
                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        backgroundColor: "#f1f1f1",
                        border: "2px solid #f1f1f1",
                        borderRadius: "10px",
                      }}
                    >
                      <Flex gap={4} alignItems="center">
                        <BiDollar size="1.5em" />
                        <p style={{ fontSize: "20px" }}>Sale</p>
                      </Flex>
                    </div>
                    <div
                      style={{
                        paddingTop: "20px",
                        marginTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        backgroundColor: "#f1f1f1",
                        border: "2px solid #f1f1f1",
                        borderRadius: "10px",
                      }}
                    >
                      <Flex gap={4} alignItems="center">
                        <MdLocalOffer size="1.5em" />
                        <p style={{ fontSize: "18px" }}>All Coupons</p>
                      </Flex>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        backgroundColor: "#f1f1f1",
                        border: "2px solid #f1f1f1",
                        borderRadius: "10px",
                      }}
                    >
                      <Flex gap={4} alignItems="center">
                        <p style={{ fontSize: "18px" }}>Key Workers Discount</p>
                      </Flex>
                    </div>
                    <div
                      style={{
                        paddingTop: "20px",
                        marginTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        backgroundColor: "#f1f1f1",
                        border: "2px solid #f1f1f1",
                        borderRadius: "10px",
                      }}
                    >
                      <Flex gap={4} alignItems="center">
                        <TbDiscount2 size="1.5em" />
                        <p style={{ fontSize: "18px" }}>Fetures Offer</p>
                      </Flex>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        backgroundColor: "#f1f1f1",
                        border: "2px solid #f1f1f1",
                        borderRadius: "10px",
                      }}
                    >
                      <Flex gap={4} alignItems="center">
                        <VscReferences size="1.5em" />
                        <p style={{ fontSize: "18px" }}>Refer a Friend</p>
                      </Flex>
                    </div>
                  </div>

                  <div>
                    <div
                      style={{
                        paddingTop: "20px",
                        paddingBottom: "20px",
                        paddingLeft: "30px",
                        paddingRight: "30px",
                        backgroundColor: "#f1f1f1",
                        border: "2px solid #f1f1f1",
                        borderRadius: "10px",
                      }}
                    >
                      <Flex gap={4} alignItems="center">
                        <TbGift size="1.5em" />
                        <p style={{ fontSize: "18px" }}>Gift and Sets</p>
                      </Flex>
                    </div>
                  </div>
                </div>
              </Box>
            </div>
          </div>

          <div id="menu-dropdown">
            <div id="menu-title">Skin Care</div>
            <div className="menu-dropdown-content">
              <Box display="flex" gap="50px" pt={5} padding="20px">
                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Populer Categories
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>View All Skin Care</p>
                    <p>New In</p>
                    <p>Clean Skincare</p>
                    <p>5 Rated Products</p>
                    <p>Gift and Sets</p>
                    <p>Suprizes & Duo</p>
                    <p>Travel Sizes</p>
                  </div>
                </div>
                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    By Product Types
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Cleaners</p>
                    <p>Moisturizers</p>
                    <p>Serums</p>
                    <p>Eye Serum</p>
                    <p>Exfoliators</p>
                    <p>Masks</p>
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    By Ingredient
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Vitamin C</p>
                    <p>AHA</p>
                    <p>Caffeine</p>
                    <p>Retinol</p>
                    <p>Lactic Acid</p>
                    <p>Salicylic Acid</p>
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    By Specific Concern
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Acne & Blemishes</p>
                    <p>Fine Lines & Wrinkes</p>
                    <p>Dark Circles</p>
                    <p>Dry Skin</p>
                    <p>Dullness</p>
                    <p>Lack of Firmness</p>
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Sunscreen & Suncare
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Take the SPF Quiz</p>
                    <p>SPF 30 and Over</p>
                    <p>SPF 50 and Over</p>
                    <p>After Sun</p>
                    <p>Tinted</p>
                    <p>Mineral</p>
                  </div>
                </div>
              </Box>
            </div>
          </div>

          <div id="menu-dropdown">
            <div id="menu-title">Hair</div>
            <div className="menu-dropdown-content">
              <Box display="flex" gap="50px" pt={5} padding="20px">
                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Populer Categories
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>View All Hair Care</p>
                    <p>New In</p>
                    <p>Clean Hair Care</p>
                    <p>5 Rated Products</p>
                    <p>Gift and Sets</p>
                    <p>Travel Sizes</p>
                  </div>
                </div>
                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Products Type
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Shampoo</p>
                    <p>Conditioners</p>
                    <p>Hair Treatments</p>
                    <p>Hair Masks</p>
                    <p>Hair Oils</p>
                    <p>Hair Sprays</p>
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Hair Types
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Anti Dandruff Scale Care</p>
                    <p>Coarse & Textured Hair</p>
                    <p>Colored hair</p>
                    <p>Curly & Wavy Hair</p>
                    <p>Damaged Hair</p>
                    <p>Dry Hair</p>
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Electrical
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Flat Irons</p>
                    <p>Hair Dryers</p>
                    <p>Rollers & Curling Tongs</p>
                  </div>
                </div>

                <div style={{ fontFamily: "sans-serif", paddingLeft: "20px" }}>
                  <p
                    style={{
                      paddingTop: "15px",
                      textAlign: "left",
                      borderTop: "1px solid gray",
                      fontWeight: "bold",
                      marginBottom: "20px",
                    }}
                  >
                    Hair Removal
                  </p>
                  <div
                    style={{
                      textAlign: "left",
                      display: "flex",
                      flexDirection: "column",
                      gap: "10px",
                    }}
                  >
                    <p>Hair Removal Devices</p>
                    <p>Hair Removal Products</p>
                    <p>Men Shaving Products</p>
                  </div>
                </div>
              </Box>
            </div>
          </div>

          <div>
            <div id="menu-title">Makeup</div>
          </div>
          <div>
            <div id="menu-title">Bath & Body</div>
          </div>
          <div>
            <div id="menu-title">Fragrence</div>
          </div>
          <div>
            <div id="menu-title">Self Care</div>
          </div>
          <div>
            <div id="menu-title">Tools</div>
          </div>
          <div>
            <div id="menu-title">News & Trending</div>
          </div>
          <div>
            <div id="menu-title">Build a Routine</div>
          </div>
          <div>
            <div id="menu-title">Blog</div>
          </div>
        </Box>
      </Box>

      <Box bgColor="#f2f2f2" alignItems="center" id="bottom_nav">
        <Box
          alignItems="center"
          display="flex"
          py={5}
          pl={20}
          pr={20}
          fontSize="14px"
          justifyContent="space-evenly"
        >
          <Box display="flex" alignItems="center" gap="10px">
            <FaShippingFast size="1.5em" />
            <p>FREE US Sheeping Over $49</p>
          </Box>

          <Box display="flex" alignItems="center" gap="10px">
            <RiCoinsFill size="1.5em" />
            <p> Refer a Friend, Get $15</p>
          </Box>

          <Box display="flex" alignItems="center" gap="10px">
            <RiBattery2ChargeFill size="1.5em" />
            <p> New Customers Save 20% - Use Code NEWBIE</p>
          </Box>

          <Box display="flex" alignItems="center" gap="10px">
            <MdOutlineSmartphone size="1.5em" />
            <p>Download Our App</p>
          </Box>
        </Box>
      </Box>

      <div id="mobile_bar">
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          <div style={{ marginLeft: "30px" }}>
            <HiMenu ref={btnRef} colorScheme="teal" onClick={onOpen} size="1.6em"/>
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              height= "100vh"
              size="full"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader mt={12}>
                  <Button bgColor="black" color="white" colorScheme = "none">Login</Button>
                  <Button variant="outline"  border =" 1px solid black" ml={4} colorScheme = "none">Register</Button>
                </DrawerHeader>

                <DrawerBody>
                  <Box display="flex" flexDirection = "column" gap = "20px">
                    <p>Brands</p>
                    <p>Holiday Gif</p>
                    <p>Sale</p>
                    <p>Skin Care</p>
                    <p>Hair Care</p>
                    <p>Makeup</p>
                    <p>Bath & Body</p>
                    <p>Self Care</p>
                    <p>New & Trending</p>
                    <p>Build a Routine</p>
                    <p>Blog</p>
                  </Box>
                </DrawerBody>

              </DrawerContent>
            </Drawer>
          </div>

          <CgSearch size="1.5em" />
        </div>

        <div>
            <img style= {{width : "90px", height : "25px"}} src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png" alt="logo"/>
        </div>

        <div style={{display : "flex", gap : "30px", alignItems: "center"}}>
            <VscAccount size="1.6em"/>
            <div class="dropdown" style={{paddingRight : "50px"}}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <FaShoppingCart size="1.6em" />
                <p className="cartValue">0</p>
              </div>
            </div>
            </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
