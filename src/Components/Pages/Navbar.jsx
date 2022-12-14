//   Mukesh  is responsible

import {
  Box,
  Button,
  Input,
  InputGroup,
  InputRightElement,
  Text,
} from "@chakra-ui/react";
import React from "react";
import "../Pages/Navbar.css";
import { Search2Icon } from "@chakra-ui/icons";
import { VscAccount } from "react-icons/vsc";
import { FaShippingFast, FaShoppingCart } from "react-icons/fa";
import { RiBattery2ChargeFill, RiCoinsFill } from "react-icons/ri";
import { MdOutlineSmartphone } from "react-icons/md";

const Navbar = () => {
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

      <Box style={{ borderTop: "2px solid black" }}>
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
          </div>
          <div id="menu-dropdown-content">
            <Box display="flex" gap ="50px" pt={5} padding= "20px">
              <div style={{fontFamily: "sans-serif", paddingLeft: "20px"}}>
            
                <p style={{paddingTop : "15px",textAlign: "left", borderTop : "1px solid gray", fontWeight : "bold", marginBottom: "20px"}}>Populer Categories</p>
                <div style={{textAlign : "left", display: "flex", flexDirection: "column", gap : "10px"}}>
                  <p>Show All Products by Beuty Gift</p>
                  <p>Our Favorite Beuty Gift Sets</p>
                  <p>Skinstore Exclusive Gifts</p>
                  <p>SkinStore's Holiday Edit Box</p>
                  <p>Holiday Gift Ideas for Her</p>
                  <p>Holiday Gift Ideas for Him</p>
                </div>
              </div>
              <div style={{fontFamily: "sans-serif", paddingLeft: "20px"}}>
            
              <p style={{paddingTop : "15px",textAlign: "left", borderTop : "1px solid gray", fontWeight : "bold", marginBottom: "20px"}}>By Gift Idea</p>
              <div style={{textAlign : "left", display: "flex", flexDirection: "column", gap : "10px"}}>
                <p>Budget Friendly and Small Gifts</p>
                <p>Stocking Stuffer Ideas</p>
                <p>Thoughtful Gifts for Smart Splurges</p>
                <p>Luxury Holiday Gifts</p>
                <p> Last Minute Gift Ideas</p>
                <p>Gifts For You</p>
              </div>
            </div>

            <div style={{fontFamily: "sans-serif", paddingLeft: "20px"}}>
            
              <p style={{paddingTop : "15px",textAlign: "left", borderTop : "1px solid gray", fontWeight : "bold", marginBottom: "20px"}}>By Price</p>
              <div style={{textAlign : "left", display: "flex", flexDirection: "column", gap : "10px"}}>
                <p>Gifts Under $25</p>
                <p>Gifts Under $50</p>
                <p>Gifts Under $100</p>
                <p>Gifts Over $100</p>
              </div>
            </div>
              
            <div style={{fontFamily: "sans-serif", paddingLeft: "20px"}}>
            
              <p style={{paddingTop : "15px",textAlign: "left", borderTop : "1px solid gray", fontWeight : "bold", marginBottom: "20px"}}>By Category</p>
              <div style={{textAlign : "left", display: "flex", flexDirection: "column", gap : "10px"}}>
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

          <div>
            <div id="menu-title">Sale</div>
          </div>

          <div>
            <div id="menu-title">Skin Care</div>
          </div>
          <div>
            <div id="menu-title">Hair</div>
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

      <Box bgColor="#f2f2f2" alignItems="center">
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
    </div>
  );
};

export default Navbar;
