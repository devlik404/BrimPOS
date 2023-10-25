// import React from 'react'
import { Link, Outlet } from "react-router-dom";
// import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";
// import { AUTH_LOGOUT } from '../store/rootReduc';
// import { EmailIcon } from "@chakra-ui/icons"
import { FaBagShopping, FaCashRegister, FaWallet } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { Box, Heading, Flex, ListItem, List, ListIcon } from "@chakra-ui/react";

const Layoute = () => {
  return (
    <>
      <Box w={"100%"} h={"100vh"} position={"fixed"}>
        <Flex>
          {/* SIDE BAR */}
          <Box w={"15%"} h={"100vh"} boxShadow={"md"}>
            <Heading textAlign={"center"} fontFamily={"serif"} mt={2}>
             
            </Heading>
            <Box ms={5} mt={10} display={"flex"}>
              <List spacing={8} fontSize={"24px"}>
                <ListItem>
                  <ListIcon as={FaBagShopping} color="#6C3428" />
                  <Link to={"/dashboard"}>
                    Dashboard
                  </Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCashRegister} color="#6C3428" />
                  <Link to={"/operational"}>
                    operational
                  </Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={IoFastFood} color="#6C3428" />
                  <Link to={"/product"}>
                    product
                  </Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaWallet} color="#6C3428" />
                  <Link to={"/payment"}>
                    payment
                  </Link>
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box w={"80%"} h={"100vh"}></Box>
        </Flex>
      </Box>
      <Outlet />
    </>
  );
};

export default Layoute;
