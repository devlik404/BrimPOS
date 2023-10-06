// import React from 'react'
import { Link, Outlet } from 'react-router-dom'
// import { BsFillPersonFill } from "@react-icons/all-files/bs/BsFillPersonFill";
// import { AUTH_LOGOUT } from '../store/rootReduc';
// import { EmailIcon } from "@chakra-ui/icons"
import { FaBagShopping, FaCashRegister, FaWallet } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { Box, Heading, Flex, ListItem, List, ListIcon } from "@chakra-ui/react"

const Payment = () => {

  return (
    <>
      <Box w={"100%"} h={"100vh"} position={"fixed"}>
        <Flex>
          {/* SIDE BAR */}
          <Box w={"20%"} h={"100vh"} boxShadow={"md"} >
            <Heading textAlign={"center"} mt={2} > Brim Shop </Heading>
            <Box ms={5} mt={5} display={"flex"}  >
              <List spacing={5} fontSize={"24px"} >
                <ListItem>
                  <ListIcon as={FaBagShopping} color='cyan.400' />
                  <Link to="/dashboard"> Dashboard</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaCashRegister} color='cyan.400' />
                  Operational
                </ListItem>
                <ListItem>
                  <ListIcon as={IoFastFood} color='cyan.400' />
                  <Link to="/product   "> Product</Link>
                </ListItem>
                {/* You can also use custom icons from react-icons */}
                <ListItem>
                  <ListIcon as={FaWallet} color='cyan.400' />
                  Payment
                </ListItem>
              </List>
            </Box>
          </Box>
          <Box w={"80%"} h={"100vh"}  >
          </Box>
        </Flex>
      </Box>
      <Outlet />
    </>
  )
}

export default Payment