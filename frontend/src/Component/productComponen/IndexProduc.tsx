import {
    Tabs, Box, TabList, TabPanels, Tab, TabPanel, TabIndicator, Button, Modal,
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
} from '@chakra-ui/react'
import AddProduct from './AddProduct'
import AddProductTwo from './AddProductMakanan'
import AddProductMinuman from './AddProductMinuman'
import { useAppDispatch } from '../../app/hooks'
import React, { FormEvent, useState } from 'react'
import { fetchProduct } from '../../features/Product/poductSlice'
import { useNavigate } from 'react-router-dom'

const IndexProduc = () => {
    const { isOpen, onOpen, onClose } = useDisclosure()

    const initialRef = React.useRef(null)
    const finalRef = React.useRef(null)

    const [name, setName] = useState<string>("");
    const [category, setCategory] = useState<string>("");
    const [price, setPrice] = useState<string>("");
    const dispatch = useAppDispatch();
    const  navigate = useNavigate();

    function handleAddUser(e: FormEvent<HTMLFormElement>) {
        e.preventDefault();
        try {
            const newProduct = {
                name: name,
                price: price,
                category: category,
            };
            console.log('newProduct', newProduct)
            dispatch(fetchProduct(newProduct));
            navigate(`/product`)
        } catch (error) {
            console.error(error)
        }

    }
    return (
        <>
            <Box
                // background={'#FF4B91'}
                marginTop={'20px'} >

                <Tabs position="relative" variant="unstyled">
                    <TabList display={'flex'} justifyContent={'space-around'} fontSize={'20px'} >
                        <Tab >All</Tab>
                        <Tab>Food</Tab>
                        <Tab>Beverages</Tab>
                    </TabList>
                    <TabIndicator
                        mt="-1.5px"
                        height="3px"
                        bg="blue.500"
                        borderRadius="1px"
                    />
                    <Box mt={'20px'} display={'flex'} justifyContent={'right'} paddingRight={'20px'}>
                        <Box>
                            <Button onClick={onOpen}>Open Modal</Button>


                            <Modal
                                initialFocusRef={initialRef}
                                finalFocusRef={finalRef}
                                isOpen={isOpen}
                                onClose={onClose}
                                size={'xl'}
                            >
                                <ModalOverlay />
                                <form onSubmit={handleAddUser}>
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

                                            {/* <FormControl mt={4}>
                                                <FormLabel>Image Product</FormLabel>
                                                <Input placeholder='Image Product' type='file' />
                                            </FormControl> */}
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
                        </Box>
                    </Box>
                    <TabPanels>
                        <TabPanel>
                            <AddProduct />
                        </TabPanel>
                        <TabPanel>
                            <AddProductTwo />
                        </TabPanel>
                        <TabPanel>
                            <AddProductMinuman />
                        </TabPanel>
                    </TabPanels>
                </Tabs>
            </Box>
        </>
    )
}

export default IndexProduc