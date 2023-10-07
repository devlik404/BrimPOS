import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Flex,
  Heading,
  Text,
  Button,
  Container,
  FormControl,
  FormLabel,
  Input,
  Stack,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { useState } from "react";
import { useRegister } from "../hooks/useRegister";
export default function Register() {
  const {submitHandelValidate,changeHandlerValidate} = useRegister()
  const [active, isActive] = useState(false);
  const handleActive = () => {
    isActive(!active);
  };
  return (
    <>
      <Box
        w={"100%"}
        h={"100vh"}
        bgImage={
          "https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2528&q=80"
        }
        bgSize={"contain"}
      >
        <Flex>
          <Box w={"67%"} h={"100vh"} bg={"blackAlpha.300"} color={"white"}>
            <Text
              fontSize={"56px"}
              mt={10}
              fontWeight={"bold"}
              fontFamily={"serif"}
              textAlign={"center"}
            >
              Welcome_ To Brim Coffee Shop
            </Text>
            <Text
              fontSize={"40px"}
              mt={5}
              color={"gray.200"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Temmukan Rasa kopi yang Berbeda
            </Text>
            <Text
              fontSize={"40px"}
              mt={5}
              color={"gray.200"}
              fontWeight={"bold"}
              textAlign={"center"}
            >
              Tentukan Rasa
            </Text>
          </Box>

          <Box w={"33%"} h={"100vh"} bg={"blackAlpha.800"}>
            <Container py="10">
              <Heading color={"white"} mt={6} textAlign={"center"}>
                Register Form
              </Heading>
              <Box
                padding="4"
                border="1px solid lightgray"
                borderRadius="4px"
                mt="8"
              >
                <form onSubmit={submitHandelValidate}>
                  <Stack spacing="3">
                    <FormControl>
                      <FormLabel color={"white"}>Username</FormLabel>
                      <Input color={"white"} placeholder='username
                      ' onChange={changeHandlerValidate} name="username"/>
                    </FormControl>
                    <FormControl>
                      <FormLabel color={"white"}>Email</FormLabel>
                      <Input color={"white"} type='email' onChange={changeHandlerValidate} name="email"/>
                    </FormControl>
                    <FormControl>
                      <FormLabel color={"white"}>Password</FormLabel>
                      <InputGroup>
                        <Input
                          type={active ? "password" : "text"}
                          bg={"blackAlpha.600"}
                          placeholder='Enter password'
                          onChange={changeHandlerValidate} 
                          name="password"
                          color={"white"}
                        />
                        <InputRightElement h={"full"}>
                          <Button bg={"transparent"} onClick={handleActive}>
                            {active ? (
                              <ViewOffIcon color={"white"} />
                            ) : (
                              <ViewIcon color={"white"} />
                            )}
                          </Button>
                        </InputRightElement>
                      </InputGroup>
                    </FormControl>
                    <Button
                      type="submit"
                      bgGradient={"linear(to-l, white, #6C3428)"}
                      _hover={{
                        bgGradient: "linear(to-l, white, #6C3428)",
                        transition: "1s",
                        color: "white",
                        textShadow: "dark-lg",
                      }}
                    >
                      Register Account
                    </Button>
                    <Text textAlign={"end"} color={"white"}>
                      {" "}
                      already account ? <a href="/login">Login</a>{" "}
                    </Text>
                  </Stack>
                </form>
              </Box>
            </Container>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
