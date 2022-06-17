import React, { useEffect, useState } from "react";
import "./checkOut.css";
import {
  Accordion,
  AccordionButton,
  AccordionIcon,
  AccordionItem,
  AccordionPanel,
  Box,
  Button,
  FormControl,
  FormHelperText,
  FormLabel,
  Icon,
  Input,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  UnorderedList,
} from "@chakra-ui/react";
// import { IconName } from "react-icons/fa";
import { FaCreditCard, FaCcPaypal } from "react-icons/fa";

const Checkout = () => {
  const [country, setCountry] = useState([]);
  const [countryId, setCountryId] = useState([]);
  const [countryImage, setCountryImage] = useState([]);

  useEffect(() => {
    const getcountry = async () => {
      const rescountry = await fetch("http://localhost:2324/country");
      const rescon = await rescountry.json();
      setCountry(await rescon);
    };
    getcountry();
  }, []);

  useEffect(() => {
    const getcountryImage = async () => {
      const rescountry = await fetch(
        `http://localhost:2324/country/${countryId}`
      );
      const rescon = await rescountry.json();
      setCountryImage(await rescon);
      //   console.log(countryImage);
    };
    getcountryImage();
  }, [countryImage, countryId]);

  const handleOnChange = (e) => {
    const countryId = e.target.value;
    console.log(countryId);
    setCountryId(countryId);
  };
  return (
    <>
      <div className="container">
        <div className="header">
          <img
            className="logo"
            src="https://cdn.worldvectorlogo.com/logos/asos-1.svg"
            alt=""
          />
          <h1 className="checkoutText">CHECKOUT</h1>
          <img
            className="logo"
            src="https://www.digicert.com/content/dam/digicert/images/tls-ssl/tls-ssl-overview/digicert-smart-seal/dc_seal_page-02.png"
            alt=""
          />
        </div>
        <div className="mainBox">
          <div className="leftBox">
            <div className="country">
              <div className="countryLeft">
                <h1 className="boldLargeText">DELIVERY COUNTRY:</h1>
                <div className="countryBox">
                  <img className="countryImage" src={countryImage.img} alt="" />
                  <select
                    name="country"
                    className="form-controlp-2"
                    onChange={(e) => handleOnChange(e)}
                  >
                    <option value="">-- Select Country --</option>
                    {country.map((getcon, index) => (
                      <option key={index} value={getcon.id}>
                        {getcon.name}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
            <div className="grid2">
              <Accordion allowToggle>
                <AccordionItem>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left">
                        <h1 className="smallBoldText">
                          PROMO/STUDENT CODE OR VOUCHER
                        </h1>
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    <Tabs size="md" variant="enclosed">
                      <TabList>
                        <Tab>PROMO/STUDENT CODE</Tab>
                        <Tab>VOUCHER</Tab>
                      </TabList>
                      <TabPanels>
                        <TabPanel>
                          <h1 className="boldLargeText">
                            ADD A PROMO/STUDENT CODE:
                          </h1>

                          <Input size="lg" />
                          <Button
                            colorScheme="teal"
                            variant="solid"
                            mt="4"
                            mb="5"
                          >
                            APPLY CODE
                          </Button>
                          <h1 className="boldLargeText">NEED TO KNOW</h1>
                          <UnorderedList>
                            <ListItem pb="4">
                              You can only use one discount/promo code per
                              order. This applies to our free-delivery codes,
                              too.
                            </ListItem>
                            <ListItem>
                              Discount/promo codes cannot be used when buying
                              gift vouchers.
                            </ListItem>
                          </UnorderedList>
                        </TabPanel>
                        <TabPanel>
                          <h1 className="boldLargeText">ADD A VOUCHER</h1>
                          <br />
                          <p mt="30">16-DIGIT VOUCHER CODE:</p>
                          <Input size="lg" />
                          <Button
                            colorScheme="teal"
                            variant="solid"
                            mt="4"
                            mb="5"
                          >
                            ADD VOUCHER
                          </Button>

                          <h1>
                            Got a gift card? Visit My Account to add it to your
                            gift-voucher balance before you can redeem it at
                            checkout.
                          </h1>
                        </TabPanel>
                      </TabPanels>
                    </Tabs>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="grid3">
              <h1 className="boldLargeText">EMAIL ADDRESS</h1>
              {/* todo */}
              <p className="paraText">DeepanshuChugh24@gmail.com </p>
            </div>
            <div className="grid4">
              <Accordion defaultIndex={[0]} allowMultiple>
                <AccordionItem>
                  <button className="addressBtn">
                    <AccordionButton type="button">Add Address</AccordionButton>
                  </button>
                  <AccordionPanel pb={4}>
                    <form>
                      <FormControl>
                        <FormLabel htmlFor="first-name" color="#999999">
                          FIRST NAME:
                        </FormLabel>
                        <Input
                          id="first-name"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="last-name" color="#999999">
                          LAST NAME:
                        </FormLabel>
                        <Input
                          id="last-name"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="mobile" color="#999999">
                          MOBILE:
                        </FormLabel>
                        <Input
                          id="mobile"
                          type="number"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                        <FormHelperText
                          mb="20px"
                          display="flex"
                          flexDirection="flex-start"
                        >
                          We'll never share your Mobile Number
                        </FormHelperText>
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="address" color="#999999">
                          ADDRESS:
                        </FormLabel>
                        <Input
                          id="address"
                          type="address"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>
                      <FormControl>
                        <FormLabel htmlFor="city" color="#999999">
                          CITY:
                        </FormLabel>
                        <Input
                          id="city"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>

                      <FormControl>
                        <FormLabel htmlFor="mobile" color="#999999">
                          POSTAL CODE:
                        </FormLabel>
                        <Input
                          id="mobile"
                          type="number"
                          mb="20px"
                          w="330px"
                          h="45px"
                          borderRadius="0"
                          borderColor="black"
                          border="2px"
                          display="flex"
                          flexDirection="flex-start"
                        />
                      </FormControl>
                    </form>
                  </AccordionPanel>
                </AccordionItem>
              </Accordion>
            </div>
            <div className="grid3">
              <h1 className="boldLargeText">PAYMENT TYPE</h1>
              <br></br>
              <br></br>

              <div className="payment">
                <div className="pay1">
                  <Icon h="60px" ml="14px" w="22px" as={FaCreditCard} />
                  <h1 className="smallBoldText">ADD CREDIT/DEBIT CARD</h1>
                </div>
                <div className="pay2">
                  <h1>OR</h1>
                </div>

                <div className="pay1">
                  <Icon h="60px" w="22px" as={FaCcPaypal} />
                  <h1 className="smallBoldText">PAY VIA PAYPAL</h1>
                </div>
                <br></br>
              </div>
              <div className="paymentFooter">
                <h1>WE ACCEPT:</h1>
                <img
                  src="https://assets.asosservices.com/asos-finance/images/marketing/single.png"
                  alt=""
                />
              </div>
            </div>
            <button className="payBtn">PLACE ORDER</button>
            <br></br>
            <br></br>
            <div className="lastPara">
              <p>
                By placing your order you agree to our{" "}
                <a href="/">
                  <u>Terms & Conditions</u>
                </a>
                , privacy and returns policies . You also consent to some of
                your data being stored by ASOS, which may be used to make future
                shopping experiences better for you.
              </p>
            </div>
          </div>

          <div className="rightBox"></div>
        </div>
      </div>
      <br></br>
      <br></br>

      <div className="footer">
        <p style={{ textAlign: "center" }}>ASOS Help</p>
      </div>
    </>
  );
};

export default Checkout;
