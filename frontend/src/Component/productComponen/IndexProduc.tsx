import {
  Tabs,
  Box,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  TabIndicator,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormControl,
  FormLabel,
  Input,
  useDisclosure,
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Spinner,
  Center,
} from "@chakra-ui/react";
import React, {useEffect} from "react";
import {
  deleteProduct,
  getProduct,
  productSelector,
} from "../../features/Product/poductSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FaTrashAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
// import axios from "axios";
import { usePost } from "../../config/post";
const IndexProduc = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
//   const [name, setName] = useState<string>("");
//   const [category, setCategory] = useState<string>("");
//   const [price, setPrice] = useState<number>(0);
//   const [image, setImage] = useState<File | Blob |string |null>(null);
  const dispatch = useAppDispatch();
  const { products, error, loading } = useAppSelector(productSelector);
//   async function handleAddUser(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     try {
//       const newProduct = {
//         name: name,
//         price: price,
//         category: category,
//         image: image,
//       };
//       console.log("newProduct", newProduct);
//     const data = await axios.post('http://localhost:4000/api/v1/product', newProduct)
//     return data

//     } catch (error) {
//       console.error(error);
//     }
//   }
  const {submitHandler,handleNameChange,handlePriceChange,handleCategoryChange,handlePictureChange,content} = usePost()
  
console.log("content",content)
  const handleDelete = (id: string) => {
    dispatch(deleteProduct(id));
    dispatch(getProduct());
  };
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log("product", products);

  return (
    <>
      <Box
        // background={'#FF4B91'}
        marginTop={"20px"}
      >
        <Tabs position="relative" variant="unstyled">
          <TabList
            display={"flex"}
            justifyContent={"space-around"}
            fontSize={"20px"}
          >
            <Tab
              _hover={{ borderColor: "white" }}
              _placeholder={{ opacity: 1, color: "gray.500" }}
            >
              All
            </Tab>
            <Tab _hover={{ borderColor: "white" }}>Food</Tab>
            <Tab _hover={{ borderColor: "white" }}>Beverages</Tab>
          </TabList>
          <TabIndicator
            mt="-1.5px"
            height="3px"
            bg="blue.500"
            borderRadius="1px"
            borderColor={"white"}
          />
          <Box
            mt={"20px"}
            display={"flex"}
            justifyContent={"right"}
            paddingRight={"20px"}
          >
            <Box>
              <Button onClick={onOpen}> + Add Products</Button>
              <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
                size={"xl"}
              >
                <ModalOverlay />
                <form onSubmit={submitHandler}>
                  <ModalContent>
                    <ModalHeader>Create your account</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody pb={6}>
                      <FormControl>
                        <FormLabel>Product Name</FormLabel>
                        <Input
                          ref={initialRef}
                          placeholder="Product Name"
                          type="text"
                        
                          value={content.name}
                          onChange={handleNameChange}
                        />
                      </FormControl>

                      <FormLabel mt={"20px"}>Category</FormLabel>
                      <Select
  value={content.category}
  onChange={handleCategoryChange}
  name="category"
>
  <option value="" hidden>
    Options
  </option>
  <option value="food">Food</option>
  <option value="beferages">Beferages</option>
</Select>


                      <FormControl mt={"20px"}>
                        <FormLabel>price</FormLabel>
                        <Input
                          placeholder="price"
                       
                          type="number"
                          value={content.price}
                          onChange={handlePriceChange}
                        />
                      </FormControl>

                      <FormControl mt={4}>
                        <FormLabel>Image Product</FormLabel>
                        <Input
                          placeholder="Image"
                          type="file"
                        
                          onChange={handlePictureChange}
                        />
                      </FormControl>
                    </ModalBody>

                    <ModalFooter>
                      <Button
                        colorScheme="blue"
                        onClick={onClose}
                        mr={3}
                        type="submit"
                      >
                        Save
                      </Button>
                      <Button onClick={onClose}>Cancel</Button>
                    </ModalFooter>
                  </ModalContent>
                </form>
              </Modal>
            </Box>
          </Box>
          <TabPanels>
            <TabPanel>
              <TableContainer mt={"20px"}>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Categoryes</Th>
                      <Th>Price</Th>
                      <Th>Delete</Th>
                      <Th>Edit</Th>
                    </Tr>
                  </Thead>
                  {loading && loading ? (
                    <Center
                      display={"flex"}
                      marginTop={"150px"}
                      marginLeft={"200px"}
                    >
                      <Spinner
                        thickness="4px"
                        speed="0.65s"
                        emptyColor="gray.200"
                        color="blue.500"
                        size="xl"
                      />
                    </Center>
                  ) : error && error ? (
                    <Box color="red.500">{error}</Box>
                  ) : (
                    <Tbody>
                      {Array.isArray(products) &&
                        products.map((items, index) => (
                          <Tr key={index}>
                            <Td>{items.name}</Td>
                            <Td>{items.category}</Td>
                            <Td>{items.price}</Td>
                            <Td onClick={() => handleDelete(items.id)}>
                              <FaTrashAlt />
                            </Td>
                            <Td>
                              <Link to={`/product/${items.id}`}>edit </Link>
                              {/* <Box>
                                                            <Button onClick={onOpen} ><FaPen /></Button>
                                                            <Modal
                                                                initialFocusRef={initialRef}
                                                                finalFocusRef={finalRef}
                                                                isOpen={isOpen}
                                                                onClose={onClose}
                                                                size={'xl'}

                                                            >
                                                                <ModalOverlay />
                                                                <form onSubmit={handleEdit}>
                                                                    <ModalContent>
                                                                        <ModalHeader>Create your account</ModalHeader>
                                                                        <ModalCloseButton />
                                                                        <ModalBody pb={6}>
                                                                            <FormControl>
                                                                                <FormLabel>Product Name</FormLabel>
                                                                                <Input ref={initialRef} placeholder='Product Name'
                                                                                    type='text' name='name' onChange={(e) => setName(e.target.value)} />
                                                                            </FormControl>

                                                                            <FormLabel mt={'20px'}>Category</FormLabel>
                                                                            <Select onChange={(e) => setCategory(e.target.value)} name='category'>
                                                                                <option value='' hidden >Options</option>
                                                                                <option value='food'>Food</option>
                                                                                <option value='beferages'>Beferages</option>
                                                                            </Select>

                                                                            <FormControl mt={'20px'}>
                                                                                <FormLabel>price</FormLabel>
                                                                                <Input placeholder='price' name='price' onChange={(e) => setPrice(e.target.value)} />
                                                                            </FormControl>


                                                                        </ModalBody>

                                                                        <ModalFooter>
                                                                            <Button colorScheme='blue' onClick={onClose} mr={3} type='submit'>
                                                                                Save
                                                                            </Button>
                                                                            <Button onClick={onClose}>Cancel</Button>
                                                                        </ModalFooter>
                                                                    </ModalContent>
                                                                </form>
                                                            </Modal>
                                                        </Box> */}
                            </Td>
                          </Tr>
                        ))}
                    </Tbody>
                  )}
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TableContainer mt={"20px"}>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Categoryes</Th>
                      <Th>Price</Th>
                    </Tr>
                  </Thead>

                  <Tbody>
                    {Array.isArray(products) &&
                      products
                        .filter((item) => item.category === "makanan") // Filter produk dengan kategori 'food'
                        .map((item, index) => (
                          <Tr key={index}>
                            <Td>{item.name}</Td>
                            <Td>{item.category}</Td>
                            <Td>{item.price}</Td>
                          </Tr>
                        ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
            <TabPanel>
              <TableContainer mt={"20px"}>
                <Table variant="simple">
                  <Thead>
                    <Tr>
                      <Th>Name</Th>
                      <Th>Categoryes</Th>
                      <Th>Price</Th>
                    </Tr>
                  </Thead>
                  <Tbody>
                    {Array.isArray(products) &&
                      products
                        .filter((item) => item.category === "minuman") // Filter produk dengan kategori 'food'
                        .map((item, index) => (
                          <Tr key={index}>
                            <Td>{item.name}</Td>
                            <Td>{item.category}</Td>
                            <Td>{item.price}</Td>
                          </Tr>
                        ))}
                  </Tbody>
                </Table>
              </TableContainer>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </>
  );
};

export default IndexProduc;
