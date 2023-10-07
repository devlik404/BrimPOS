import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  Text
} from "@chakra-ui/react";
// import { useFormik } from "formik";
import {  useState } from "react";
import { useLogin } from "../hooks/useLogin";
// import Typed from "typed.js";
// import * as yup from "yup";

function Login() {

//   const el1 = useRef(null);
//   const el2 = useRef(null);

//   useEffect(() => {
//     const typed1 = new Typed(el1.current, {
//       strings: ["Welcome To"],
//       showCursor: false,
//       typeSpeed: 190,
//       onComplete: () => {
//         new Typed(el2.current, {
//           strings: ["Brim Coffee"],
//           typeSpeed: 160,
//           loop: true,
//           backSpeed: 40,
//           showCursor: false,
//         });
//       },
//     });

//     return () => {
//       typed1.destroy();
//     };
//   }, []);

  const [active,isActive] = useState(false)
      const handleActive = ()=> {
        isActive(!active)
      }
      const {submitHandelValidate,changeHandlerValidate} = useLogin()
  return (
    <Center h={"100vh"} bgImage={"https://images.unsplash.com/photo-1509785307050-d4066910ec1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2528&q=80"} bgSize={"contain"} >
    <Container py="10" w={"40vw"} h={"80vh"}  >
      <Center>
      <Flex gap={2}>
        <Heading
          color={"cyan.400"}
        //   ref={el1}
          bgGradient="linear(to-r, gray, white)"
          bgClip="text"
        >
            Welcome To
          {" "}
        </Heading>
        <Heading
        //   ref={el2}
          bgGradient="linear(to-l, white, #6C3428)"
          bgClip="text"
        >
            Brim coffee
          {" "}
        </Heading>
      </Flex>
      </Center>
      <Box padding="4" border="1px solid lightgray" boxShadow={"dark-lg"} bg={"blackAlpha.400"} borderRadius="4px" mt="8">
        <form onSubmit={submitHandelValidate}>
          <Stack spacing="3">
            <FormControl >
              <FormLabel color={"white"}>Email</FormLabel>
              <Input type='email' onChange={changeHandlerValidate} name="email" bg={"blackAlpha.600"} color={"white"}/>
            </FormControl>
            <FormControl>
              <FormLabel color={"white"}>Password</FormLabel>
              <InputGroup>
              <Input type={active ? "password" : "text" } bg={"blackAlpha.600"}  onChange={changeHandlerValidate} name="password" color={"white"}/>
                <InputRightElement h={'full'}>
                  <Button
                    bg={"transparent"}
                    onClick={handleActive}>
                    {active ?  <ViewOffIcon color={"white"} /> : <ViewIcon color={"white"} /> }
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
                textShadow:"dark-lg"
              }}
              
            >
              Login Account
            </Button>
            <Text color={"white"} textAlign={'end'} >don't have account ? <a href="/register">register</a> </Text>
            
          </Stack>
        </form>
      </Box>
    </Container>
    </Center>
  );
}

export default Login;
