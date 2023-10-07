
// // import {
// //     Table,
// //     Thead,
// //     Tbody,
// //     Tr,
// //     Th,
// //     Td,
// //     TableContainer,
// //     Spinner,
// //     Box,
// //     Stack,
// // } from '@chakra-ui/react'
// // import { useEffect } from 'react'
// // import { useAppDispatch, useAppSelector } from '../../app/hooks'
// // import { getProduct, productSelector } from '../../features/Product/poductSlice'

// // const AddProduct = () => {
// //     const { products, error, loading } = useAppSelector(productSelector)
// //     const dispatch = useAppDispatch()
// //     useEffect(() => {
// //         dispatch(getProduct())
// //     }, [dispatch])
// //     console.log('product', products)

// //     return (
// //         <>
// //             <TableContainer mt={'20px'}>
// //                 <Table variant='simple'>
// //                     <Thead>
// //                         <Tr>
// //                             <Th>Name</Th>
// //                             <Th>Price</Th>
// //                         </Tr>
// //                     </Thead>
// //                     {loading && loading ? (
// //                         <Stack>
// //                             <Spinner
// //                                 thickness='4px'
// //                                 speed='0.65s'
// //                                 emptyColor='gray.200'
// //                                 color='blue.500'
// //                                 size='xl'
// //                             /></Stack>
// //                     ) : error && error ? (
// //                         <Box color="red.500">{error}</Box>
// //                     ) : (
// //                         <Tbody>
// //                             {Array.isArray(products) && products.map((items, index) => (
// //                                 <Tr key={index }>
// //                                     <Td>{items.name}</Td>
// //                                     <Td>{items.category}</Td>
// //                                     <Td>{items.price}</Td>
// //                                 </Tr>
// //                             ))}
// //                         </Tbody>
// //                     )}
// //                 </Table>
// //             </TableContainer>
// //         </>
// //     )
// // }

// // export default AddProduct

// import {
//     Tabs, Box, TabList, TabPanels, Tab, TabPanel, TabIndicator, Button, Modal,
//     ModalOverlay,
//     ModalContent,
//     ModalHeader,
//     ModalFooter,
//     ModalBody,
//     ModalCloseButton,
//     FormControl,
//     FormLabel,
//     Input,
//     useDisclosure,
//     Select, Table,
//     Thead,
//     Tbody,
//     Tr,
//     Th,
//     Td,
//     TableContainer,
//     Spinner,
//     Stack,
// } from '@chakra-ui/react'
// // import AddProduct from './AddProduct'
// // import AddProductTwo from './AddProductMakanan'
// // import AddProductMinuman from './AddProductMinuman'
// // import { useAppDispatch } from '../../app/hooks'
// import React, { FormEvent, useEffect, useState } from 'react'
// import { fetchProduct, getProduct, productSelector } from '../../features/Product/poductSlice'
// // import { useNavigate } from 'react-router-dom'
// // import { useEffect } from 'react'
// import { useAppDispatch, useAppSelector } from '../../app/hooks'
// // import { getProduct, productSelector } from '../../features/Product/poductSlice'

// const IndexProduc = () => {
//     const { isOpen, onOpen, onClose } = useDisclosure()

//     const initialRef = React.useRef(null)
//     const finalRef = React.useRef(null)
//     const [name, setName] = useState<string>("");
//     const [category, setCategory] = useState<string>("");
//     const [price, setPrice] = useState<string>("");
//     // const navigate = useNavigate();
//     const dispatch = useAppDispatch()

//     const { products, error, loading } = useAppSelector(productSelector)
//     const foodFilter = products.filter((items) => items.category === 'food')
//     const beveragesFilter = products.filter((items) => items.category === 'beferages')

//     function handleAddUser(e: FormEvent<HTMLFormElement>) {
//         e.preventDefault();
//         try {
//             const newProduct = {
//                 name: name,
//                 price: price,
//                 category: category,
//             };
//             console.log('newProduct', newProduct)
//             dispatch(fetchProduct(newProduct));
//             dispatch(getProduct())
//             // navigate(`/product`)
//         } catch (error) {
//             console.error(error)
//         }

//     }
//     useEffect(() => {
//         dispatch(getProduct())
//     }, [dispatch])
//     console.log('product', products)

//     return (
//         <>
//             <Box
//                 // background={'#FF4B91'}
//                 marginTop={'20px'} >

//                 <Tabs position="relative" variant="unstyled">
//                     <TabList display={'flex'} justifyContent={'space-around'} fontSize={'20px'} >
//                         <Tab >All</Tab>
//                         <Tab>Food</Tab>
//                         <Tab>Beverages</Tab>
//                     </TabList>
//                     <TabIndicator
//                         mt="-1.5px"
//                         height="3px"
//                         bg="blue.500"
//                         borderRadius="1px"
//                     />
//                     <Box mt={'20px'} display={'flex'} justifyContent={'right'} paddingRight={'20px'}>
//                         <Box>
//                             <Button onClick={onOpen}>Open Modal</Button>


//                             <Modal
//                                 initialFocusRef={initialRef}
//                                 finalFocusRef={finalRef}
//                                 isOpen={isOpen}
//                                 onClose={onClose}
//                                 size={'xl'}
//                             >
//                                 <ModalOverlay />
//                                 <form onSubmit={handleAddUser}>
//                                     <ModalContent>
//                                         <ModalHeader>Create your account</ModalHeader>
//                                         <ModalCloseButton />
//                                         <ModalBody pb={6}>
//                                             <FormControl>
//                                                 <FormLabel>Product Name</FormLabel>
//                                                 <Input ref={initialRef} placeholder='Product Name'
//                                                     type='text' name='name' onChange={(e) => setName(e.target.value)} />
//                                             </FormControl>

//                                             <FormLabel mt={'20px'}>Category</FormLabel>
//                                             <Select onChange={(e) => setCategory(e.target.value)} name='category'>
//                                                 <option value='' hidden >Options</option>
//                                                 <option value='food'>Food</option>
//                                                 <option value='beferages'>Beferages</option>
//                                             </Select>

//                                             <FormControl mt={'20px'}>
//                                                 <FormLabel>price</FormLabel>
//                                                 <Input placeholder='price' name='price' onChange={(e) => setPrice(e.target.value)} />
//                                             </FormControl>

//                                             {/* <FormControl mt={4}>
//                                                 <FormLabel>Image Product</FormLabel>
//                                                 <Input placeholder='Image Product' type='file' />
//                                             </FormControl> */}
//                                         </ModalBody>

//                                         <ModalFooter>
//                                             <Button colorScheme='blue' onClick={onClose} mr={3} type='submit'>
//                                                 Save
//                                             </Button>
//                                             <Button onClick={onClose}>Cancel</Button>
//                                         </ModalFooter>
//                                     </ModalContent>
//                                 </form>
//                             </Modal>
//                         </Box>
//                     </Box>
//                     <TabPanels>
//                         <TabPanel>
//                             <TableContainer mt={'20px'}>
//                                 <Table variant='simple'>
//                                     <Thead>
//                                         <Tr>
//                                             <Th>Name</Th>
//                                             <Th>Categiry</Th>
//                                             <Th>Price</Th>
//                                         </Tr>
//                                     </Thead>
//                                     {loading && loading ? (
//                                         <Stack>
//                                             <Spinner
//                                                 thickness='4px'
//                                                 speed='0.65s'
//                                                 emptyColor='gray.200'
//                                                 color='blue.500'
//                                                 size='xl'
//                                             /></Stack>
//                                     ) : error && error ? (
//                                         <Box color="red.500">{error}</Box>
//                                     ) : (
//                                         <Tbody>
//                                             {Array.isArray(products) && products.map((items, index) => (
//                                                 <Tr key={index}>
//                                                     <Td>{items.name}</Td>
//                                                     <Td>{items.category}</Td>
//                                                     <Td>{items.price}</Td>
//                                                 </Tr>
//                                             ))}
//                                         </Tbody>
//                                     )}
//                                 </Table>
//                             </TableContainer>
//                         </TabPanel>
//                         <TabPanel>
//                             <TableContainer mt={'20px'}>
//                                 <Table variant='simple'>
//                                     <Thead>
//                                         <Tr>
//                                             <Th>Name</Th>
//                                             <Th>Categiry</Th>
//                                             <Th>Price</Th>
//                                         </Tr>
//                                     </Thead>
//                                     {loading && loading ? (
//                                         <Stack>
//                                             <Spinner
//                                                 thickness='4px'
//                                                 speed='0.65s'
//                                                 emptyColor='gray.200'
//                                                 color='blue.500'
//                                                 size='xl'
//                                             /></Stack>
//                                     ) : error && error ? (
//                                         <Box color="red.500">{error}</Box>
//                                     ) : (
//                                         <Tbody>
//                                             {foodFilter.map((items, index) => (
//                                                 <Tr key={index}>
//                                                     <Td>{items.name}</Td>
//                                                     <Td>{items.category}</Td>
//                                                     <Td>{items.price}</Td>
//                                                 </Tr>
//                                             ))}
//                                         </Tbody>
//                                     )}
//                                 </Table>
//                             </TableContainer>
//                         </TabPanel>
//                         <TabPanel>
//                             <TableContainer mt={'20px'}>
//                                 <Table variant='simple'>
//                                     <Thead>
//                                         <Tr>
//                                             <Th>Name</Th>
//                                             <Th>Categiry</Th>
//                                             <Th>Price</Th>
//                                         </Tr>
//                                     </Thead>
//                                     {loading && loading ? (
//                                         <Stack>
//                                             <Spinner
//                                                 thickness='4px'
//                                                 speed='0.65s'
//                                                 emptyColor='gray.200'
//                                                 color='blue.500'
//                                                 size='xl'
//                                             /></Stack>
//                                     ) : error && error ? (
//                                         <Box color="red.500">{error}</Box>
//                                     ) : (
//                                         <Tbody>
//                                             {beveragesFilter.map((items, index) => (
//                                                 <Tr key={index}>
//                                                     <Td>{items.name}</Td>
//                                                     <Td>{items.category}</Td>
//                                                     <Td>{items.price}</Td>
//                                                 </Tr>
//                                             ))}
//                                         </Tbody>
//                                     )}
//                                 </Table>
//                             </TableContainer>
//                         </TabPanel>
//                     </TabPanels>
//                 </Tabs>
//             </Box>
//         </>
//     )
// }

// export default IndexProduc