//   Mukesh  is responsible

import {
  Box,
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Flex,
  Image,
  Input,
  InputGroup,
  InputRightElement,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import "../Pages/Navbar.css";
import { Search2Icon } from "@chakra-ui/icons";
import { VscAccount } from "react-icons/vsc";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { RiBattery2ChargeFill, RiCoinsFill } from "react-icons/ri";
import { MdLocalOffer, MdOutlineSmartphone } from "react-icons/md";
import { BiDollar } from "react-icons/bi";
import { TbDiscount2, TbGift } from "react-icons/tb";
import { HiMenu } from "react-icons/hi"
import { VscReferences } from "react-icons/vsc";
import { CgSearch } from "react-icons/cg"
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cartItems = useSelector((state) => state.cartManager.products);
  const username = useSelector((state) => state.authManager.userdata.username);
  const isAuth = useSelector((state) => state.authManager.isAuth)
  const btnRef = React.useRef();
  return (
    <div>
      <Box
        style={{
          backgroundColor: "#F2F2F2",
          padding: "10px",
          paddingRight: "30px",
          position: "sticky"

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
            <Image
              style={{ width: "20px", height: "20px", borderRadius: "50%" }}
              src="https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg"
            />
            <Text>us - USD</Text>
          </Box>
        </Box>
      </Box>
      <Box position={'fixed'} top='0px' zIndex={100} bgColor='white' w='100%'>
        <Box id="after-top"  >

          <Box>
            <Link to='/'>
              <Image
                className="logo"
                src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png"
                alt="logo"
              />
            </Link>

          </Box>

          <div id="search-bar">
            <InputGroup>
              <Input placeholder="Search for a Product or a Brand" />
              <InputRightElement children={<Search2Icon color="gray.500" />} />
            </InputGroup>
          </div>

          <div style={{ display: "flex", gap: "50px" }}>
            <div id="dropdown-account">
              <div >
                <Link to="/login" style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                  <VscAccount size="1.6em" />
                  <Text>{isAuth ? username : "Account"}</Text>
                </Link>
              </div>
              <div id="dropdown-account-content">
                <Link to="/login"><Button
                  colorScheme="none"
                  w="full"
                  bgColor="black"
                  borderRadius={0}
                >
                  LOGIN
                </Button></Link>
                <Link to="/signup">
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
                </Link>

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
              <Link to="/cart"><div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
                <div id="cart-icon">
                  <FaShoppingCart size="1.6em" />
                  <p className="cartValue">{cartItems.length}</p>
                </div>

                <Text>Cart</Text>
              </div></Link>
              <div class="dropdown-content">
                <p>{`There are currently ${cartItems.length} items in your cart.`}</p>
              </div>
            </div>
          </div>
        </Box>

        <Box id="menu_nav" style={{ borderTop: "2px solid black" }} borderBottom='1px solid gainsboro'>
          <Box
            alignItems="center"
            display="flex"
            justifyContent="space-evenly"
            width="84%"
            margin="auto"
            id="hover-black"
          >
            <Link to='/brands'><div id="menu-title">Brands</div></Link>
            <div id="menu-dropdown">
              <Link to='/holiday'><div id="menu-title">Holiday Gifts</div></Link>
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
                      <Link to='/holiday'><p>Show All Products by Beuty Gift</p></Link>
                      <Link to='/holiday'>   <p>Our Favorite Beuty Gift Sets</p></Link>
                      <Link to='/holiday'>      <p>Skinstore Exclusive Gifts</p></Link>
                      <Link to='/holiday'>   <p>SkinStore's Holiday Edit Box</p></Link>
                      <Link to='/holiday'>     <p>Holiday Gift Ideas for Her</p></Link>
                      <Link to='/holiday'>     <p>Holiday Gift Ideas for Him</p></Link>
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
                      <Link to='/holiday'> <p>Budget Friendly and Small Gifts</p></Link>
                      <Link to='/holiday'> <p>Stocking Stuffer Ideas</p></Link>
                      <Link to='/holiday'> <p>Thoughtful Gifts for Smart Splurges</p></Link>
                      <Link to='/holiday'> <p>Luxury Holiday Gifts</p></Link>
                      <Link to='/holiday'> <p> Last Minute Gift Ideas</p></Link>
                      <Link to='/holiday'> <p>Gifts For You</p></Link>
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
                      <Link to='/holiday'><p>Gifts Under $25</p></Link>
                      <Link to='/holiday'><p>Gifts Under $50</p></Link>
                      <Link to='/holiday'><p>Gifts Under $100</p></Link>
                      <Link to='/holiday'><p>Gifts Over $100</p></Link>
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
                      <Link to='/holiday'><p>Skin Care Gifts</p></Link>
                      <Link to='/holiday'><p>Body Care Gifts</p></Link>
                      <Link to='/holiday'><p>Home Scents and Candle Gifts</p></Link>
                      <Link to='/holiday'><p>Makeup Gifts</p></Link>
                      <Link to='/holiday'><p>Hair Care Gifts</p></Link>
                      <Link to='/holiday'><p>Beauty Tools and Hair Styling Gifts</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to='/sale'> <div id="menu-title">Sales</div></Link>
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
                          <Link to='/sale'> <p style={{ fontSize: "20px" }}>Sale</p></Link>
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
                          <Link to='/sale'><p style={{ fontSize: "18px" }}>All Coupons</p></Link>
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
                          <Link to='/sale'><p style={{ fontSize: "18px" }}>Key Workers Discount</p></Link>
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
                          <Link to='/sale'><p style={{ fontSize: "18px" }}>Fetures Offer</p></Link>
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
              <Link to="/skincare"><div id="menu-title">Skin Care</div></Link>
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
                      <Link to="/skin"><p>View All Skin Care</p></Link>
                      <Link to="/skin"><p>New In</p></Link>
                      <Link to="/skin"><p>Clean skincare</p></Link>
                      <Link to="/skin"><p>5 Rated Products</p></Link>
                      <Link to="/skin"><p>Gift and Sets</p></Link>
                      <Link to="/skin"><p>Suprizes & Duo</p></Link>
                      <Link to="/skin"><p>Travel Sizes</p></Link>
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
                      <Link to="/skin"><p>Cleaners</p></Link>
                      <Link to="/skin"><p>Moisturizers</p></Link>
                      <Link to="/skin"><p>Serums</p></Link>
                      <Link to="/skin"><p>Eye Serum</p></Link>
                      <Link to="/skin"><p>Exfoliators</p></Link>
                      <Link to="/skin"><p>Masks</p></Link>
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
                      <Link to="/skin"><p>Vitamin C</p></Link>
                      <Link to="/skin"><p>AHA</p></Link>
                      <Link to="/skin"><p>Caffeine</p></Link>
                      <Link to="/skin"><p>Retinol</p></Link>
                      <Link to="/skin"><p>Lactic Acid</p></Link>
                      <Link to="/skin"><p>Salicylic Acid</p></Link>
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
                      <Link to="/skin"><p>Take the SPF Quiz</p></Link>
                      <Link to="/skin"><p>SPF 30 and Over</p></Link>
                      <Link to="/skin"><p>SPF 50 and Over</p></Link>
                      <Link to="/skin"><p>After Sun</p></Link>
                      <Link to="/skin"><p>Tinted</p></Link>
                      <Link to="/skin"><p>Mineral</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div id="menu-dropdown">
              <Link to='/hair'><div id="menu-title">Hair</div></Link>
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
                      <Link to='/hair'><p>View All Hair Care</p></Link>
                      <Link to='/hair'><p>New In</p></Link>
                      <Link to='/hair'><p>Clean Hair Care</p></Link>
                      <Link to='/hair'><p>5 Rated Products</p></Link>
                      <Link to='/hair'><p>Gift and Sets</p></Link>
                      <Link to='/hair'><p>Travel Sizes</p></Link>
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
                      <Link to='/hair'> <p>Shampoo</p></Link>
                      <Link to='/hair'> <p>Conditioners</p></Link>
                      <Link to='/hair'> <p>Hair Treatments</p></Link>
                      <Link to='/hair'> <p>Hair Masks</p></Link>
                      <Link to='/hair'> <p>Hair Oils</p></Link>
                      <Link to='/hair'> <p>Hair Sprays</p></Link>
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
                      <Link to='/hair'><p>Anti Dandruff Scale Care</p></Link>
                      <Link to='/hair'><p>Coarse & Textured Hair</p></Link>
                      <Link to='/hair'><p>Colored hair</p></Link>
                      <Link to='/hair'><p>Curly & Wavy Hair</p></Link>
                      <Link to='/hair'><p>Damaged Hair</p></Link>
                      <Link to='/hair'><p>Dry Hair</p></Link>
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
                      <Link to='/hair'><p>Hair Removal Devices</p></Link>
                      <Link to='/hair'><p>Hair Removal Products</p></Link>
                      <Link to='/hair'><p>Men Shaving Products</p></Link>
                    </div>
                  </div>
                </Box>
              </div>
            </div>

            <div>
              <Link to='/makeup'><div id="menu-title">Makeup</div></Link>
            </div>
            <div>
              <Link to='/bathbeauty'><div id="menu-title">Bath & Body</div></Link>
            </div>
            <div>
              <Link to='/fragrence'><div id="menu-title">Fragrence</div></Link>
            </div>
            <div>
              <Link to="/selfcare"><div id="menu-title">Self Care</div></Link>
            </div>
            <div>
              <Link to='/tools'><div id="menu-title">Tools</div></Link>
            </div>
            <div>
              <Link to='/news'><div id="menu-title">News & Trending</div></Link>
            </div>
            <div>
              <Link to='/building'><div id="menu-title">Build a Routine</div></Link>
            </div>
            <div>
              <Link to='/blog'><div id="menu-title">Blog</div></Link>
            </div>
          </Box>
        </Box>
      </Box>


      <Box bgColor="#f2f2f2" alignItems="center" id="bottom_nav">
        <Box mt={120}
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
            <HiMenu ref={btnRef} colorScheme="teal" onClick={onOpen} size="1.6em" />
            <Drawer
              isOpen={isOpen}
              placement="left"
              onClose={onClose}
              finalFocusRef={btnRef}
              height="100vh"
              size="full"
            >
              <DrawerOverlay />
              <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader mt={12}>
                  <Link to="/login" onClick={onClose}>
                    <Button bgColor="black" color="white" colorScheme="none">Login</Button>
                  </Link>
                  <Link to="/signup" onClick={onClose}>
                    <Button variant="outline" border=" 1px solid black" ml={4} colorScheme="none">Register</Button>
                  </Link>
                </DrawerHeader>

                <DrawerBody>
                  <Box display="flex" flexDirection="column" gap="20px">
                    <Link to="/brands" onClick={onClose}>Brands</Link>
                    <Link to="/holiday" onClick={onClose}>Holiday Gif</Link>
                    <Link to="/sale" onClick={onClose}>Sale</Link>
                    <Link to="/skincare" onClick={onClose}>Skin Care</Link>
                    <Link to="/hair" onClick={onClose}>Hair Care</Link>
                    <Link to="/makeup" onClick={onClose}>Makeup</Link>
                    <Link to="/bathbeauty" onClick={onClose}>Bath & Body</Link>
                    <Link to="/selfcare" onClick={onClose}>Self Care</Link>
                    <Link to="/blog" onClick={onClose}>Blog</Link>
                  </Box>
                </DrawerBody>

              </DrawerContent>
            </Drawer>
          </div>

          <CgSearch size="1.5em" />
        </div>

        <div>
          <Link to="/">
            <img style={{ width: "90px", height: "25px" }} src="https://seeklogo.com/images/S/skinstore-logo-5281C41BD3-seeklogo.com.png" alt="logo" />
          </Link>
        </div>

        <div style={{ display: "flex", gap: "30px", alignItems: "center" }}>
          <Link to="/login">
            <VscAccount size="1.6em" />
          </Link>
          <div class="dropdown" style={{ paddingRight: "50px" }}>
            <div style={{ display: "flex", alignItems: "center", gap: "24px" }}>
              <div id="cart-icon">
                <Link to="/cart">
                  <FaShoppingCart size="1.6em" />
                  <p className="cartValue">{cartItems.length}</p>
                </Link>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Navbar;