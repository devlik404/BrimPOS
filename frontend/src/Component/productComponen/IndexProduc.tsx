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
import React, { ChangeEvent, FormEvent, useEffect, useState } from "react";
import {
  Product,
  // deleteProduct,
  getProduct,
  productSelector,
} from "../../features/Product/poductSlice";
import { useAppDispatch, useAppSelector } from "../../app/hooks";
import { FaTrashAlt,FaPen } from "react-icons/fa";
import { Link } from "react-router-dom";
import { ApiData } from "../../hooks/api";
const IndexProduc = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);
  const finalRef = React.useRef(null);
  const [form, setForm] = useState<Product>({
    id: "",
    name: "",
    category: "",
    price: 0,
    image: "",
  });
  const dispatch = useAppDispatch();
  const { products, error, loading } = useAppSelector(productSelector);
  console.log(products, error, loading);
  async function handleAddProduct(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const formData = new FormData();
    formData.append("name", form.name);
    formData.append("price", form.price.toString());
    formData.append("category", form.category);
    formData.append("image", form.image as File);

    const response = await ApiData.post("/addproduct", formData);
    console.log("response", response);

    dispatch(getProduct());
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const {name, value, files} = event.target

    if (files) {
      setForm({
        ...form, 
        [name]: files[0]
      })
    } else {
      setForm({
        ...form,
        [name]: value
      })
    }
  }

  function handleChangeSelect(event: ChangeEvent<HTMLSelectElement>) {
    const { name, value } = event.target;

    setForm({
      ...form,
      [name]: value,
    });
  }

  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);
  console.log("product", products);

  // function handleDelete(id: string): void {
  //   throw new Error("Function not implemented.");
  // }

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
                <form onSubmit={handleAddProduct} encType="multipart/form-data">
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
                          name="name"
                          onChange={handleChange}
                        />
                      </FormControl>

                      <FormLabel mt={"20px"}>Category</FormLabel>
                      <Select
                        onChange={handleChangeSelect}
                        name="category"
                      >
                        <option value="" hidden>
                          Options
                        </option>
                        <option value="makanan">Food</option>
                        <option value="minuman">Beverage</option>
                      </Select>

                      <FormControl mt={"20px"}>
                        <FormLabel>price</FormLabel>
                        <Input
                          type="number"
                          placeholder="price"
                          name="price"
                          onChange={handleChange}
                        />
                      </FormControl>

                      <FormControl mt={"20px"}>
                        <FormLabel>price</FormLabel>
                        <Input
                          placeholder="image"
                          type="file"
                          name="image"
                          onChange={handleChange} // Menggunakan setImage untuk mengatur state image
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
                            <Td>
                              <FaTrashAlt />
                            </Td>
                            <Td>
                              <Link to={`/updateproduct/${items.id}`}><FaPen/> </Link>
                              
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
