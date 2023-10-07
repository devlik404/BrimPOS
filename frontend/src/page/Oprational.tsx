
import { FaBagShopping, FaCashRegister, FaWallet } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { MdOutlineTableBar, MdOutlineTableRestaurant, MdViewCompactAlt } from "react-icons/md";
import { BiBookAdd } from "react-icons/bi";
import {
  Box,
  Text,
  Heading,
  Flex,
  Input,
  InputGroup,
  Button,
  SimpleGrid,
  ListItem,
  List,
  ListIcon,
  Center,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  HStack,
  InputLeftElement,
  Image,
} from "@chakra-ui/react";
import SearchProduct from "../assets/search.svg";
import ReceiptSearch from "../assets/receipt-search.svg";
import dummyBeverage from "../utils/beverageDummy.json";
import dummyFoods from "../utils/foodsDummy.json";

import { SetStateAction, useState } from "react";

export default function Operational() {
  const [searchQueryAll, setSearchQueryAll] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryFoods, setSearchQueryFoods] = useState("");
  const [filteredProductsAll, setFilteredProductsAll] = useState(
    dummyBeverage.concat(dummyFoods)
  );
  const [filteredProducts, setFilteredProducts] = useState(dummyBeverage);
  const [filteredProductsFoods, setFilteredProductsFoods] = useState(dummyFoods);

  const handleSearchInputChangeAll = (event: any) => {
    const query = event.target.value;
    setSearchQueryAll(query);

    const filteredAll = [...dummyBeverage, ...dummyFoods].filter((item) =>
      item.nameProduct?.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProductsAll(filteredAll);
  };

  const handleSearchInputChange = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);

    const filtered = dummyBeverage.filter((item) =>
      item.nameProduct?.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProducts(filtered);
  };

  const handleSearchInputChangeFoods = (event: any) => {
    const query = event.target.value;
    setSearchQueryFoods(query);

    const filtered = dummyFoods.filter((item) =>
      item.nameProduct?.toLowerCase().includes(query.toLowerCase())
    );

    setFilteredProductsFoods(filtered);
  };
  const [name,setName] = useState('')


  const [tableActive,setTableAcive] = useState(false)
  const [table,setTable] = useState('')
  
  const selectedChange = (table: SetStateAction<string>)=>{
    if(table==="1"||table==="2"||table==="3"||table==="4"){
      setTableAcive(true)
      return setTable(table)
    }
    
  }
  const ifNotFound = (
    <Box marginTop={"70px"}>
      <Center>
        <Box textAlign="center" mt={5} display={"flex"}>
          <Image src={ReceiptSearch} />
          <Text fontSize="16px" mt={1}>
            Oops, makanan atau minuman yang kamu cari tidak ditemukan.
            <Text fontSize={"12px"} color={"#909090"} textAlign={"left"}>
              Coba bisa cari dengan kata kunci lain
            </Text>
          </Text>
        </Box>
      </Center>
    </Box>
  );


  return (
    <>
      <Box
        w={"100%"}
        h={"100vh"}
        position={"fixed"}
        fontFamily={"arial"}
        overflow="hidden"
       
      >
        <Flex>
          {/* SIDE BAR */}
          <Box w={"15%"} h={"100vh"} boxShadow={"md"}>
            <Heading textAlign={"center"} fontFamily={"serif"} mt={2}>
              {" "}
              Brim Shop{" "}
            </Heading>
            <Box ms={5} mt={10} display={"flex"}>
              <List spacing={8} fontSize={"24px"}>
                <ListItem>
                  <ListIcon as={FaBagShopping} color="#6C3428" />
                  Dashboard
                </ListItem>
                <ListItem color={"#6C3428"}>
                  <ListIcon as={FaCashRegister} color="#6C3428" />
                  Operational
                </ListItem>
                <ListItem>
                  <ListIcon as={IoFastFood} color="#6C3428" />
                  Product
                </ListItem>
                <ListItem>
                  <ListIcon as={FaWallet} color="#6C3428" />
                  Payment
                </ListItem>
              </List>
            </Box>
          </Box>
          {/* CONTENT */}
          <Box w={"65%"} h={"100vh"}>
            <Flex boxShadow={"sm"} gap={"50"} py={5} px={5} h={"10%"}>
              <Tabs position="relative" variant="unstyled" w={"100%"}>
                <TabList gap={16}>
                  <Tab fontSize={"22px"} _hover={{border:"none"}} borderColor={"transparent"} >Menu</Tab>
                  <Tab fontSize={"22px"}>Table</Tab>
                </TabList>
                <TabIndicator
                  mt="-1.5px"
                  height="2px"
                  bg="blue.500"
                  borderRadius="1px"
                />
                <TabPanels>
                  <TabPanel>
                    <Tabs position="relative" variant="unstyled">
                      <Center>
                        <TabList gap={10} borderRadius={5}>
                          <Tab
                            _selected={{
                              color: "white",
                              bg: "#6C3428",
                              borderRadius: "5",
                            }}
                          >
                            All
                          </Tab>
                          <Tab
                            _selected={{
                              color: "white",
                              bg: "#6C3428",
                              borderRadius: "5",
                            }}
                          >
                            Foods
                          </Tab>
                          <Tab
                            _selected={{
                              color: "white",
                              bg: "#6C3428",
                              borderRadius: "5",
                            }}
                          >
                            Beverages
                          </Tab>
                        </TabList>
                      </Center>

                      <TabPanels>
                        {/* ALL */}
                        <TabPanel>
                          <Center>
                            <InputGroup bg={"white"} ms={"-5"} w={"50%"}>
                              <InputLeftElement pointerEvents="none">
                                <Image src={SearchProduct} />
                              </InputLeftElement>

                              <Input
                                type="text"
                                placeholder="Cari Makanan & Minuman"
                                value={searchQueryAll}
                                onChange={handleSearchInputChangeAll}
                                _placeholder={{
                                  opacity: 1,
                                  color: "#909090",
                                  fontSize: "14px",
                                }}
                              />
                            </InputGroup>
                          </Center>

                          {filteredProductsAll.length === 0 ? (
                            ifNotFound
                          ) : (
                            <SimpleGrid
                              columns={4}
                              ms={"-5"}
                              mt={5}
                              spacing={10}
                            >
                              {filteredProductsAll.map((item) => (
                                <Box
                                  bg="gray.50"
                                  height="150px"
                                  w={"180px"}
                                  borderRadius={"md"}
                                  boxShadow={"md"}
                                  cursor={"pointer"}
                                >
                                  <Center>
                                    <Box
                                      h={"100px"}
                                      w={"170px"}
                                      borderRadius={"md"}
                                    >
                                      <Image
                                        src={`${item.imageProduct}`}
                                        sizes="full"
                                        pt={1}
                                        borderRadius={"md"}
                                      ></Image>
                                    </Box>
                                  </Center>

                                  <Center>
                                    <SimpleGrid
                                      columns={2}
                                      ms={2}
                                      mt={5}
                                      gap={20}
                                    >
                                      <Box
                                        w={"140px"}
                                        h={"26px"}
                                        overflow={"hidden"}
                                      >
                                        {" "}
                                        {item.nameProduct}{" "}
                                      </Box>
                                      <Box
                                        w={"30px"}
                                        h={"26px"}
                                        overflow={"hidden"}
                                        ms={3}
                                      >
                                        {" "}
                                        {item.priceProduct}{" "}
                                      </Box>
                                    </SimpleGrid>
                                  </Center>
                                </Box>
                              ))}
                            </SimpleGrid>
                          )}
                        </TabPanel>
                        {/* END ALL */}

                        {/* FOODS */}
                        <TabPanel>
                          <Center>
                            <InputGroup bg={"white"} ms={"-5"} w={"50%"}>
                              <InputLeftElement pointerEvents="none">
                                <Image src={SearchProduct} />
                              </InputLeftElement>

                              <Input
                                type="text"
                                placeholder="Cari Makanan"
                                value={searchQueryFoods}
                                onChange={handleSearchInputChangeFoods}
                                _placeholder={{
                                  opacity: 1,
                                  color: "#909090",
                                  fontSize: "14px",
                                }}
                              />
                            </InputGroup>
                          </Center>
                          {filteredProductsFoods.length === 0 ? (
                            ifNotFound
                          ) : (
                            <SimpleGrid
                              columns={4}
                              ms={"-5"}
                              mt={5}
                              spacing={10}
                            >
                              {filteredProductsFoods.map((item) => (
                                <Box
                                  bg="gray.50"
                                  height="150px"
                                  w={"180px"}
                                  borderRadius={"md"}
                                  boxShadow={"md"}
                                  key={item.id}
                                  onClick={ ()=> setName(`es teh anget`)}
                                  cursor={"pointer"}
                                >
                                  <Center>
                                    <Box
                                      h={"100px"}
                                      w={"170px"}
                                      borderRadius={"md"}
                                    >
                                      <Image
                                        src={`${item.imageProduct}`}
                                        sizes="full"
                                        pt={1}
                                        borderRadius={"md"}
                                      ></Image>
                                    </Box>
                                  </Center>

                                  <Center>
                                    <SimpleGrid
                                      columns={2}
                                      ms={2}
                                      mt={5}
                                      gap={20}
                                    >
                                      <Box
                                        w={"140px"}
                                        h={"26px"}
                                        overflow={"hidden"}
                                      >
                                        {" "}
                                        {item.nameProduct}{" "}
                                      </Box>
                                      <Box
                                        w={"30px"}
                                        h={"26px"}
                                        overflow={"hidden"}
                                        ms={3}
                                      >
                                        {" "}
                                        {item.priceProduct}{" "}
                                      </Box>
                                    </SimpleGrid>
                                  </Center>
                                </Box>
                              ))}
                            </SimpleGrid>
                          )}
                        </TabPanel>
                        {/* END FOODS */}

                        {/* BEVERAGES */}
                        <TabPanel>
                          <Center>
                            <InputGroup bg={"white"} ms={"-5"} w={"50%"}>
                              <InputLeftElement pointerEvents="none">
                                <Image src={SearchProduct} />
                              </InputLeftElement>

                              <Input
                                type="text"
                                placeholder="Cari Minuman"
                                value={searchQuery}
                                onChange={handleSearchInputChange}
                                _placeholder={{
                                  opacity: 1,
                                  color: "#909090",
                                  fontSize: "14px",
                                }}
                              />
                            </InputGroup>
                          </Center>
                          {filteredProducts.length === 0 ? (
                            ifNotFound
                          ) : (
                            <SimpleGrid
                              columns={4}
                              ms={"-5"}
                              mt={5}
                              spacing={10}
                            >
                              {filteredProducts.map((item) => (
                                <Box
                                  bg="gray.50"
                                  height="150px"
                                  w={"180px"}
                                  borderRadius={"md"}
                                  boxShadow={"md"}
                                  key={item.id}
                                  cursor={"pointer"}
                                >
                                  <Center>
                                    <Box
                                      h={"100px"}
                                      w={"170px"}
                                      borderRadius={"md"}
                                    >
                                      <Image
                                        src={`${item.imageProduct}`}
                                        sizes="full"
                                        pt={1}
                                        borderRadius={"md"}
                                      ></Image>
                                    </Box>
                                  </Center>

                                  <Center>
                                    <SimpleGrid
                                      columns={2}
                                      ms={2}
                                      mt={5}
                                      gap={20}
                                    >
                                      <Box
                                        w={"140px"}
                                        h={"26px"}
                                        overflow={"hidden"}
                                      >
                                        {" "}
                                        {item.nameProduct}{" "}
                                      </Box>
                                      <Box
                                        w={"30px"}
                                        h={"26px"}
                                        overflow={"hidden"}
                                        ms={3}
                                      >
                                        {" "}
                                        {item.priceProduct}{" "}
                                      </Box>
                                    </SimpleGrid>
                                  </Center>
                                </Box>
                              ))}
                            </SimpleGrid>
                          )}
                        </TabPanel>
                        {/* END BEVERAGES */}
                      </TabPanels>
                    </Tabs>
                  </TabPanel>
                  <TabPanel>
                    <SimpleGrid columns={4} spacing={10}>

                      { tableActive ? (
                        <Button
                        height="160px"
                        w={"160px"}
                        fontSize={"30px"}
                        bg={"gray.200"}
                        borderColor={"green"}
                      >
                        1 <MdOutlineTableRestaurant size={"full"} />{" "}
                      </Button>
                      ) : (
                        <Button
                        height="160px"
                        w={"160px"}
                        onClick={()=>selectedChange("1")}
                        fontSize={"30px"}
                        bg={"transparent"}
                        
                      >
                        1 <MdOutlineTableRestaurant size={"full"} />{" "}
                      </Button>
                      )
                      }
                    
                      { tableActive ? (
                        <Button
                        height="160px"
                        w={"160px"}
                        fontSize={"30px"}
                        bg={"gray.200"}
                        borderColor={"green"}
                      >
                        2 <MdOutlineTableRestaurant size={"full"} />{" "}
                      </Button>
                      ) : (
                        <Button
                        height="160px"
                        w={"160px"}
                        onClick={()=>selectedChange("2")}
                        fontSize={"30px"}
                        bg={"transparent"}
                        
                      >
                        2 <MdOutlineTableRestaurant size={"full"} />{" "}
                      </Button>
                      )
                      }
                      { tableActive ? (
                        <Button
                        height="160px"
                        w={"160px"}
                        fontSize={"30px"}
                        bg={"gray.200"}
                        borderColor={"green"}
                      >
                        3 <MdOutlineTableRestaurant size={"full"} />{" "}
                      </Button>
                      ) : (
                        <Button
                        height="160px"
                        w={"160px"}
                        onClick={()=>selectedChange("3")}
                        fontSize={"30px"}
                        bg={"transparent"}
                        
                      >
                        3 <MdOutlineTableRestaurant size={"full"} />{" "}
                      </Button>
                      )
                      }
                      { tableActive ? (
                        <Button
                        height="160px"
                        w={"160px"}
                        fontSize={"30px"}
                        bg={"gray.200"}
                        borderColor={"green"}
                      >
                        4 <MdOutlineTableRestaurant size={"full"} />{" "}
                      </Button>
                      ) : (
                        <Button
                        height="160px"
                        w={"160px"}
                        onClick={()=>selectedChange("4")}
                        fontSize={"30px"}
                        bg={"transparent"}
                        
                      >
                        4 <MdOutlineTableRestaurant size={"full"} />{" "}
                      </Button>
                      )
                      }
                      
                    </SimpleGrid>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Box>
          <Box w={"20%"} h={"100vh"} boxShadow={"md"}>
            <Heading textAlign={"center"} mt={5}>
              Table
            </Heading>
            <Center>
              <Box w={"95%"} mt={5} lineHeight={"30px"}>
                <Text>Table: {table} </Text>
                <Text>Product name: {name} </Text>
                <Text>Price:</Text>
                <Text>Quantity:</Text>
              </Box>
            </Center>
            <Center>
              <Box w={"95%"} mt={5} h={"100vh"}>
                <Heading position={"absolute"} bottom={0}>
                  {" "}
                  Total:{" "}
                </Heading>
              </Box>
            </Center>
          </Box>
        </Flex>
      </Box>
    </>
  );
}
