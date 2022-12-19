import {
  Box, Image, Flex, Heading, Select, Input
  ,
  Text,

  Center,
  Button,
  useDisclosure

} from '@chakra-ui/react';

import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import Footer from '../Footer';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { CheckCircleIcon } from '@chakra-ui/icons';
import { resetCart } from '../../Redux/cart/cart.actions';

const Checkout = () => {
  const cartItems = useSelector((state) => state.cartManager.products);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const dispatch = useDispatch()
  let cartTotal = cartItems.reduce((acc, p) => {
    return acc + Number(p.price);
  }, 0);
  const handleProceed = () => {
    dispatch(resetCart());
    onOpen();


  }


  return (
    <>

      <Flex margin="auto" direction={["column-reverse", "column-reverse", "row"]} mt={["12","12","12","12","auto"]}>
        <Box w={["95%", "95%", "55%"]} >

          <Center>
            <Box w='60%' mb={8} bgColor={'white'} mt={6}  >
              <Heading fontSize={'22'} mt={7} textAlign='left' mb='3'> 1. Shipping Address</Heading>
              <hr />
              <Text fontSize={'15'} textAlign='left' mt={7} >* Country /Region</Text>
              <Select id="delivery-country" mt={7} data-test="delivery-country-field" class="selectField-0-3-35 selectField-d0-0-3-36 " name="deliveryAddress.country">
                <option value="" disabled="">Please select</option>
                <option value="AS">American Samoa</option>
                <option value="AD">Andorra</option>
                <option value="AO">Angola</option>
                <option value="BM">Bermuda</option>
                <option value="BT">Bhutan</option>
                <option value="BO">Bolivia</option>
                <option value="BA">Bosnia and Herzegovina (Bosna i Hercegovina)</option>
                <option value="BW">Botswana</option>
                <option value="BV">Bouvet Island</option>
                <option value="BR">Brazil (Brasil)</option>
                <option value="IO">British Indian Ocean Territory</option>
                <option value="BN">Brunei Darussalam</option>
                <option value="BG">Bulgaria (България)</option>
                <option value="BF">Burkina Faso</option>
                <option value="BI">Burundi</option>
                <option value="KH">Cambodia</option>
                <option value="CM">Cameroon</option>
                <option value="CA">Canada</option>
                <option value="CV">Cape Verde</option>
                <option value="KY">Cayman Islands</option>
                <option value="CF">Central African Republic</option>
                <option value="TD">Chad</option>
                <option value="CL">Chile</option>
                <option value="CN">China Mainland (中国大陆)</option>
                <option value="CX">Christmas Island</option>
                <option value="CC">Cocos (Keeling) Islands</option><option value="KM">Comoros</option><option value="CG">Congo</option><option value="CD">Congo, the Democratic Republic of the</option><option value="CK">Cook Islands</option><option value="CR">Costa Rica</option><option value="HR">Croatia (Hrvatska)</option><option value="CY">Cyprus (Κύπρος)</option><option value="CZ">Czech Republic (Česká republika)</option><option value="DK">Denmark (Danmark)</option><option value="DJ">Djibouti</option><option value="DM">Dominica</option><option value="DO">Dominican Republic</option><option value="EC">Ecuador</option><option value="SV">El Salvador</option><option value="GQ">Equatorial Guinea</option><option value="ER">Eritrea</option><option value="EE">Estonia (Eesti)</option><option value="SZ">Eswatini</option><option value="ET">Ethiopia</option><option value="FK">Falkland Islands</option><option value="FO">Faroe Islands</option><option value="FJ">Fiji</option><option value="FI">Finland (Suomi)</option><option value="FR">France</option><option value="GF">French Guiana</option><option value="PF">French Polynesia</option><option value="TF">French Southern Territories</option><option value="GA">Gabon</option><option value="GM">Gambia</option><option value="GE">Georgia</option><option value="DE">Germany (Deutschland)</option><option value="GI">Gibraltar</option><option value="GR">Greece (Ελλάδα)</option><option value="GL">Greenland</option><option value="GD">Grenada</option><option value="GP">Guadeloupe</option><option value="GU">Guam</option><option value="GT">Guatemala</option><option value="GG">Guernsey</option><option value="GN">Guinea</option><option value="GW">Guinea-Bissau</option><option value="GY">Guyana</option><option value="HT">Haiti</option><option value="HM">Heard Island and McDonald Islands</option><option value="VA">Holy See (Vatican City State)</option><option value="HN">Honduras</option><option value="HK">Hong Kong</option><option value="HU">Hungary (Magyarország)</option><option value="IS">Iceland</option><option value="IN">India (India)</option><option value="IE">Ireland</option><option value="IM">Isle of Man</option><option value="IL">Israel (ישראל)</option><option value="IT">Italy (Italia)</option><option value="JM">Jamaica</option><option value="JP">Japan (日本)</option><option value="JE">Jersey</option><option value="JO">Jordan</option><option value="KZ">Kazakhstan</option><option value="KE">Kenya</option><option value="KI">Kiribati</option><option value="KR">Korea, Republic of (대한민국)</option><option value="KW">Kuwait</option><option value="KG">Kyrgyzstan</option><option value="LA">Lao People's Democratic Republic</option><option value="LV">Latvia (Latvija)</option><option value="LS">Lesotho</option><option value="LR">Liberia</option><option value="LI">Liechtenstein</option><option value="LT">Lithuania (Lietuva)</option><option value="LU">Luxembourg</option><option value="MO">Macao</option><option value="MK">Macedonia, the former Yugoslav Republic of</option><option value="MG">Madagascar</option><option value="MW">Malawi</option><option value="MY">Malaysia</option><option value="MV">Maldives</option><option value="ML">Mali</option><option value="MT">Malta</option><option value="MH">Marshall Islands</option><option value="MQ">Martinique</option><option value="MR">Mauritania</option><option value="MU">Mauritius</option><option value="YT">Mayotte</option><option value="MX">Mexico (México)</option><option value="FM">Micronesia, Federated States of</option><option value="MD">Moldova, Republic of</option><option value="MC">Monaco</option><option value="MN">Mongolia</option><option value="ME">Montenegro</option><option value="MS">Montserrat</option><option value="MZ">Mozambique (Moçambique)</option><option value="NA">Namibia</option><option value="NR">Nauru</option><option value="NP">Nepal</option><option value="NL">Netherlands (Nederland)</option><option value="AN">Netherlands Antilles</option><option value="NC">New Caledonia</option><option value="NZ">New Zealand</option><option value="NI">Nicaragua</option><option value="NE">Niger</option><option value="NG">Nigeria</option><option value="NU">Niue</option><option value="MP">Northern Mariana Islands</option><option value="NO">Norway (Norge)</option><option value="OM">Oman</option><option value="PW">Palau</option><option value="PA">Panama</option><option value="PG">Papua New Guinea</option><option value="PY">Paraguay</option><option value="PE">Peru</option><option value="PH">Philippines</option><option value="PN">Pitcairn</option><option value="PL">Poland (Polska)</option><option value="PT">Portugal</option><option value="PR">Puerto Rico</option><option value="QA">Qatar</option><option value="RO">Romania (România)</option><option value="RU">Russian Federation (Россия)</option><option value="RW">Rwanda</option><option value="SH">Saint Helena</option><option value="KN">Saint Kitts and Nevis</option><option value="LC">Saint Lucia</option><option value="MF">Saint Martin (French part)</option><option value="PM">Saint Pierre and Miquelon</option><option value="VC">Saint Vincent and the Grenadines</option><option value="WS">Samoa</option><option value="SM">San Marino</option><option value="ST">Sao Tome and Principe (São Tomé e Príncipe)</option><option value="SA">Saudi Arabia</option><option value="SN">Senegal</option><option value="RS">Serbia (Srbija)</option><option value="SC">Seychelles</option><option value="SL">Sierra Leone</option><option value="SG">Singapore</option><option value="SK">Slovakia (Slovensko)</option><option value="SI">Slovenia (Slovenija)</option><option value="SB">Solomon Islands</option><option value="ZA">South Africa</option><option value="GS">South Georgia and the South Sandwich Islands</option><option value="ES">Spain (España)</option><option value="LK">Sri Lanka (Sri Lanka)</option><option value="SR">Suriname</option><option value="SJ">Svalbard and Jan Mayen</option><option value="SE">Sweden (Sverige)</option><option value="CH">Switzerland (Schweiz)</option><option value="TW">Taiwan (台灣)</option><option value="TJ">Tajikistan</option><option value="TZ">Tanzania, United Republic of</option><option value="TH">Thailand</option><option value="TL">Timor-Leste</option><option value="TG">Togo</option><option value="TK">Tokelau</option><option value="TO">Tonga</option><option value="TT">Trinidad and Tobago</option><option value="TR">Turkey</option><option value="TM">Turkmenistan</option><option value="TC">Turks and Caicos Islands</option><option value="TV">Tuvalu</option><option value="UA">Ukraine</option><option value="AE">United Arab Emirates</option><option value="GB">United Kingdom</option><option value="US">United States</option><option value="UM">United States Minor Outlying Islands</option><option value="UY">Uruguay</option><option value="UZ">Uzbekistan</option><option value="VU">Vanuatu</option><option value="VN">Vietnam</option><option value="VG">Virgin Islands, British</option><option value="WF">Wallis and Futuna</option><option value="EH">Western Sahara</option>
                <option value="ZM">Zambia</option></Select>

              <hr />
              <Text fontSize={'15'} textAlign='left' mt={7} >* Full Name</Text>
              <Input type='text' placeholder='Enter full name' ></Input>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Zip Code/Postcode</Text>
              <Input type='text' placeholder='Enter Zip Code/Postcode' ></Input>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Address</Text>
              <Input type='text' placeholder='Enter Address' ></Input>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Town/City</Text>
              <Input type='text' placeholder='Enter Town/City' ></Input>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Contact Number</Text>
              <Input placeholder='Enter Contact Number' ></Input>
            </Box>

          </Center>

          {/* ********************************* Payement section****************** */}
          <Center>
            <Box w='60%'>
              <Heading fontSize={'20'} mt={1} mb={'3'} textAlign='left'> 2. Pyement Selection </Heading>
              <Flex justify={'space-between'} cursor='pointer'>
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/3c2e42cbf9d0b0df0d3b3bb81aa41d6a.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/57987be4eb98b4c77644d93d92df80fa.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/932e82ef072c7df18e91e66b96dfdf5d.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/6732c0137a7dab50b23daf1337fe2f30.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/0528692e7541ff3755880b3408793969.svg' alt='1' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/8ba3dc816042268141a2205e3bfc3971.svg' alt='2' />
                <Image w={'10%'} src='https://s1.thcdn.com/checkout/resources/images/248074ffdeeeaeffed9c5db35f35fe45.svg' alt='2' />
              </Flex>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Card Number</Text>
              <Input placeholder='Enter Card Number' mt={'2'} ></Input>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Name on card</Text>
              <Input placeholder='Enter Name on card' mt={'2'} ></Input>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Expiry Date</Text>

              <Flex justify={'space-between'} >
                <Select placeholder='Month'>
                  <option>Jan</option>
                  <option>Feb</option>
                  <option>Mar</option>
                  <option>Apr</option>
                  <option>May</option>
                  <option>Jun</option>
                  <option>Jul</option>
                  <option>Aug</option>
                  <option>Sep</option>
                  <option>Oct</option>
                  <option>Nov</option>
                  <option>Dec</option>
                </Select>
                <Select placeholder='Year'>
                  <option>22</option>
                  <option>23</option>
                  <option>24</option>
                  <option>25</option>
                  <option>26</option>
                  <option>27</option>
                  <option>28</option>
                  <option>29</option>
                  <option>30</option>
                  <option>31</option>
                  <option>32</option>
                  <option>33</option>
                  <option>34</option>
                  <option>35</option>
                  <option>36</option>
                  <option>37</option>
                  <option>38</option>
                  <option>39</option>
                  <option>40</option>
                </Select>
              </Flex>
              <Text fontSize={'15'} textAlign='left' mt={7} >* Security Code (CV2)</Text>
              <Input placeholder='Enter Cvv' mt={'2'}  ></Input>
              <Button w="95%" margin="auto" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} color="white" borderRadius="0px" display="block" marginTop="15px">Save Address</Button>
            </Box>
          </Center>
        </Box>

        {/* ***********total item box*********** */}

        <Box margin={"auto"} w={["85%", "85%", '30%']} h="370px" p="30px" border="1px solid black" borderRadius="10px" mt={12} >
          <Heading align="center" mb="15px">Order Summary</Heading>
          <Flex mb="25px" justify="space-between">
            <Heading size="md">{`Total Items ${cartItems.length}`}</Heading>
            <Heading size="md">{`$${cartTotal}`}</Heading>
          </Flex>
          <Heading size="md" mb="25px">{` Taxes and duties : $18.5`}</Heading>
          <Heading size="md" color="#28bdb7" mb="25px">{` Amount To Pay : $${cartTotal == 0 ? 0 : cartTotal + 18.5}`}</Heading>
          <Button m="auto" onClick={handleProceed} display="block" bgColor="black" _hover={{ bgColor: "#28bdb7", color: "black" }} color="white" borderRadius="0px" w={["95%", "95%", "95%"]} >{`Proceed To Pay $${cartTotal == 0 ? 0 : cartTotal + 18.5}`}</Button>
          <Link to="/skin">
            <Button m="auto" onClick={handleProceed} display="block" bgColor="white" border="1px solid black" _hover={{ bgColor: "#28bdb7", color: "black" }} color="black" borderRadius="0px" w={["95%", "95%", "95%"]} mt="20px">Continue Shopping</Button>

          </Link>
        </Box>





      </Flex>

      <Footer />
      <Modal isCentered isOpen={isOpen} onClose={onClose}>
        <ModalOverlay
          bg='none'
          backdropFilter='auto'
          backdropInvert='80%'
          backdropBlur='2px'
        />
        <ModalContent>
          <ModalHeader>Payment Done !!!</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Image w="130px" m="auto" src="https://media.tenor.com/0AVbKGY_MxMAAAAM/check-mark-verified.gif" />
            <Heading mt="20px" size="md">Your order is Successfully Placed.</Heading>
            <Text>Thanks for Placing order. Your order should be placed under 4 to 5 Days. </Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose} bgColor="green.200" borderRadius="0px">Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Checkout;
