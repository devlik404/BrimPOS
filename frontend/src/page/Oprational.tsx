import { FaBagShopping, FaCashRegister, FaWallet } from "react-icons/fa6";
import { IoFastFood } from "react-icons/io5";
import { CiLogout } from "react-icons/ci";
import { MdOutlineTableRestaurant } from "react-icons/md";
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
  InputLeftElement,
  Image,
  Table,
  TableContainer,
  Tbody,
  Td,
  Tfoot,
  Th,
  Thead,
  Tr,
  ButtonGroup,
  Card,
  CardBody,
  CardFooter,
  Divider,
  Stack,
} from "@chakra-ui/react";
import SearchProduct from "../assets/search.svg";
import ReceiptSearch from "../assets/receipt-search.svg";

import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import GetTables from "../service/useTable";
import GetProduct from "../service/useProduct";
import { Iproductchange } from "../interface/Iproduct";
import usePostOrders from "../service/useOrders";

export default function Operational() {
  //get api table
  const { tableData } = GetTables();
  //api get product
  const { productData } = GetProduct();

  const drinks = productData.filter(
    (product) => product.category === "minuman"
  );
  const foods = productData.filter((product) => product.category === "makanan");
  //api post orders
  const { setOrdersData, submitHandler } = usePostOrders();

  const [searchQueryAll, setSearchQueryAll] = useState("");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchQueryFoods, setSearchQueryFoods] = useState("");
  const [filteredProductsAll, setFilteredProductsAll] = useState(productData);
  console.log("filteredProductsAll", filteredProductsAll.length);
  console.log("filteredProductsAll", filteredProductsAll);
  const [filteredProducts, setFilteredProducts] = useState(drinks);
  const [filteredProductsFoods, setFilteredProductsFoods] = useState(foods);

  const handleSearchInputChangeAll = (event: any) => {
    const query = event.target.value;
    setSearchQueryAll(query);
    const filteredAll = productData.filter((item) =>
      item.name.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProductsAll(filteredAll);
  };
  const handleSearchInputChange = (event: any) => {
    const query = event.target.value;
    setSearchQuery(query);
    const filtered = drinks.filter((item) =>
      item.name?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProducts(filtered);
  };

  const handleSearchInputChangeFoods = (event: any) => {
    const query = event.target.value;
    setSearchQueryFoods(query);
    const filtered = foods.filter((item) =>
      item.name?.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredProductsFoods(filtered);
  };

  const [tableActive1, setTableAcive1] = useState(false);
  const [tableActive2, setTableAcive2] = useState(false);

  const [selectedTable, setSelectedTable] = useState({ id: "", name: "" }); // State untuk meja yang dipilih

  const [selectedProduct, setSelectedProduct] = useState<Iproductchange[]>([]);

  const selectedChange = (productName: string, price: number) => {
    if (selectedTable) {
      setTableAcive1(true);
      const existingProduct = selectedProduct.find(
        (product) => product.name === productName
      );

      if (existingProduct) {
        // Jika produk sudah ada, tingkatkan kuantitas dan harga
        existingProduct.qty += 1;
        existingProduct.price += price;
        setSelectedProduct([...selectedProduct]);
      } else {
        // Jika produk belum ada, tambahkan produk baru ke dalam array
        setSelectedProduct([
          ...selectedProduct,
          { name: productName, price: price, qty: 1 },
        ]);
      }
    }
  };
  // Mendefinisikan fungsi untuk menjumlahkan harga dari semua produk yang dipilih
  const calculateTotalPrice = () => {
    return selectedProduct.reduce((total, product) => total + product.price, 0);
  };

  // Menggunakan fungsi calculateTotalPrice untuk menghitung total harga
  const totalHarga = calculateTotalPrice();
  console.log("selectedTable", selectedTable);
  const resetSelected = () => {
    setOrdersData({
      total: totalHarga,
      tableId: selectedTable.id,
    });
  };

  const [orderComplete, setOrderComplete] = useState(false);

  const selectTable = (tableInfo: any) => {
    if (!orderComplete) {
      setOrderComplete(true);
      setSelectedTable({ id: tableInfo.id, name: tableInfo.tableName });
    }
  };

  // const completeOrder = () => {
  //   // Lakukan logika untuk menyelesaikan pesanan
  //   // Set orderComplete menjadi true

  // };

  useEffect(() => {
    setFilteredProductsAll(productData);
    setFilteredProducts(drinks);
    setFilteredProductsFoods(foods);
  }, [productData]);


  const vendorPrefixScrollBar = {
    '::-webkit-scrollbar': {
      display: 'none',
    },
    '::-moz-scrollbar': {
      display: 'none',
    },
    '::-ms-scrollbar': {
      display: 'none',
    },
    '::-o-scrollbar': {
      display: 'none',
    },
  };

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
      {/* <Box
        w={"100%"}
        h={"100vh"}
        fontFamily={"arial"}
       
      > */}
        <Flex height="100vh " >
          {/* SIDE BAR */}
          <Box   flex={".2"}   boxShadow={"md"} >
            <Heading textAlign={"center"} fontFamily={"serif"} mt={2}>
              {" "}
              Brim Shop{" "}
            </Heading>
            <Box ms={5} mt={10} display={"flex"}>
              <List spacing={8} fontSize={"24px"}>
                <ListItem>
                  <ListIcon as={FaBagShopping} color="#6C3428" />
                  <Link to={"/dashboard"}>Dashboard</Link>
                </ListItem>
                <ListItem textShadow={"lg"}>
                  <ListIcon as={FaCashRegister} color="#6C3428" />
                  <Link to={"/operational"}>operational</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={IoFastFood} color="#6C3428" />
                  <Link to={"/product"}>product</Link>
                </ListItem>
                <ListItem>
                  <ListIcon as={FaWallet} color="#6C3428" />
                  <Link to={"/payment"}>payment</Link>
                </ListItem>
                <ListItem position={"absolute"} bottom={10}>
                  <ListIcon as={CiLogout} color="#6C3428" />
                  <Link to={"/login"}>Log out</Link>
                </ListItem>
              </List>
            </Box>
          </Box>
          {/* CONTENT */}
          <Box   flex={"1"}   style={{ overflowY: 'auto', maxHeight: '100vh' }}
        sx={vendorPrefixScrollBar}>
            <Flex boxShadow={"sm"} gap={"50"} py={5} px={5} h={"10%"}>
              <Tabs position="relative" variant="unstyled" w={"100%"}>
                <TabList gap={16}>
                  <Tab
                    fontSize={"22px"}
                    _hover={{ border: "none" }}
                    borderColor={"transparent"}
                  >
                    Menu
                  </Tab>
                  <Tab fontSize={"22px"}>Table</Tab>
                </TabList>
                <TabIndicator mt="-1.5px" height="2px" borderRadius="1px" />
                <TabPanels>
                  <TabPanel>
                    <Tabs position="relative" variant="unstyled">
                      <Center>
                        <TabList gap={10} borderRadius={5}>
                          <Tab
                            _selected={{
                              color: "white",

                              borderRadius: "5",
                            }}
                          >
                            All
                          </Tab>
                          <Tab
                            _selected={{
                              color: "white",

                              borderRadius: "5",
                            }}
                          >
                            Foods
                          </Tab>
                          <Tab
                            _selected={{
                              color: "white",

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
                            <InputGroup ms={"-5"} w={"50%"}>
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
                              columns={3}
                              ms={"-5"}
                              mt={5}
                              spacing={4}
                            >
                              {filteredProductsAll.map((item) => (
                                 
                                <Card maxW="md">
                                  <CardBody key={item.id}>
                                    <Image
                                      src={item.image}
                                      alt="Green double couch with wooden legs"
                                      borderRadius="lg"
                                      h={"200px"}
                                      w={"100%"}
                                    />
                                    <Stack mt="6" spacing="3">
                                      <Heading size="md">{item.name}</Heading>

                                      <Text color="blue.600" fontSize="2xl">
                                        Rp.{item.price}
                                      </Text>
                                    </Stack>
                                  </CardBody>
                                  <Divider />
                                  <CardFooter>
                                    <ButtonGroup spacing="2">
                            
                                      <Button
                                        variant="ghost"
                                        colorScheme="blue"
                                        onClick={() =>
                                          selectedChange(item.name, item.price)
                                        }
                                      >
                                        Add to cart
                                      </Button>
                                    </ButtonGroup>
                                  </CardFooter>
                                </Card>
                              
                              ))}
                            </SimpleGrid>
                           
                          )}
                        </TabPanel>
                        {/* END ALL */}
                       
                        {/* FOODS */}
                        <TabPanel>
                          <Center>
                            <InputGroup ms={"-5"} w={"50%"}>
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
                                  cursor={"pointer"}
                                  onClick={() =>
                                    selectedChange(item.name, item.price)
                                  }
                                >
                                  <Center>
                                    <Box
                                      h={"100px"}
                                      w={"170px"}
                                      borderRadius={"md"}
                                    >
                                      <Image
                                        w={"100%"}
                                        src={`${item.image}`}
                                        h={"100%"}
                                        pt={1}
                                        borderRadius={"md"}
                                        objectFit={"cover"}
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
                                        
                                      >
                                        {" "}
                                        {item.name}{" "}
                                      </Box>
                                      <Box
                                        w={"30px"}
                                        h={"26px"}
                                        
                                        ms={3}
                                      >
                                        {" "}
                                        {item.price}{" "}
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
                            <InputGroup ms={"-5"} w={"50%"}>
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
                                  onClick={() =>
                                    selectedChange(item.name, item.price)
                                  }
                                >
                                  <Text> {item.name} </Text>
                                  <Center>
                                    <Box
                                      height="150px"
                                      w={"180px"}
                                      borderRadius={"md"}
                                      boxShadow={"md"}
                                      key={item.id}
                                      cursor={"pointer"}
                                    >
                                      <Image
                                        w={"100%"}
                                        src={`${item.image}`}
                                        h={"100%"}
                                        pt={1}
                                        borderRadius={"md"}
                                        objectFit={"cover"}
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
                                        
                                      >
                                        {item.name}
                                      </Box>
                                      <Box
                                        w={"30px"}
                                        h={"26px"}
                                        
                                        ms={3}
                                      >
                                        {item.price}
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
                    <SimpleGrid columns={4} cursor={"pointer"} spacing={10}>
                      {tableData?.map((item) => (
                        <>
                          {/* <Button
                           key={item.id}
                            height="160px"
                            w={"160px"}
                            fontSize={"30px"}
                            bg={tableActive1 ? "gray.200" : "transparent"}
                            borderColor={selectedTable === "1" ? "green" : ""}
                            onClick={() => selectedChange(item.tableName,"","")}
                          >
                              {item.tableName}<MdOutlineTableRestaurant size={"full"} />{" "}
                          </Button> */}

                          <Button
                            key={item.id}
                            w={"160px"}
                            fontSize={"30px"}
                            borderColor={
                              selectedTable.id === item.id ? "green" : "initial"
                            }
                            bg={
                              selectedTable.id === item.id
                                ? "green"
                                : "transparent"
                            }
                            onClick={() => selectTable(item)}
                            disabled={orderComplete} // Menonaktifkan tombol jika pesanan sudah selesai
                          >
                            {item.tableName} <MdOutlineTableRestaurant />
                          </Button>
                        </>
                      ))}
                      {/* <Button
        onClick={completeOrder}
        disabled={orderComplete}
      ></Button> */}
                    </SimpleGrid>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Flex>
          </Box>
          {/* RIGHT BAR */}
          <Box overflow={"hidden"} flex={".3"} boxShadow={"md"} >
            <Heading textAlign={"center"} mt={5} mb="5">
              Detail order
            </Heading>
            <Box mb="5">
              <Text fontSize="lg" fontWeight="bold">
                Table : {selectedTable.name}
              </Text>
            </Box>
            <Center>
              <TableContainer>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Menu</Th>
                      <Th>Qty</Th>
                      <Th isNumeric>Price</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {selectedProduct.map((item, index) => (
                      <Tr key={index}>
                        <Td>{item.name}</Td>
                        <Td>{item.qty}</Td>
                        <Td isNumeric>{item.price}</Td>
                      </Tr>
                    ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </Center>
            <form onSubmit={submitHandler}>
              <Center>
                <Box w={"95%"} mt={5} h={"100vh"}>
                  <Button
                    position={"absolute"}
                    bg={"#6C3428"}
                    bottom={10}
                    w={"10vw"}
                    _hover={{ bg: "#6C3428", color: "white" }}
                    color={"white"}
                    type="submit"
                    onClick={resetSelected}
                  >
                    Pesan
                  </Button>
                  <Heading position={"absolute"} bottom={24}>
                    {" "}
                    <Text fontSize="lg" fontWeight="bold">
                      Total:{totalHarga}
                    </Text>
                  </Heading>
                </Box>
              </Center>
            </form>
          </Box>
        </Flex>
      {/* </Box> */}
    </>
  );
}
