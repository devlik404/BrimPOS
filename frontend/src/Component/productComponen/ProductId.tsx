// import { FormEvent, useEffect, useState } from 'react'
// import { Card, CardBody, Box, Button, FormLabel, Input, FormControl, Select, Stack, Heading, Center, Container } from '@chakra-ui/react'
// import { editProduct, getProduct, productSelector } from '../../features/Product/poductSlice'
// import { useAppDispatch, useAppSelector } from '../../app/hooks'
// import { useNavigate, useParams } from 'react-router-dom';
// import Layoute from '../../page/Layoute';
// const ProductId = () => {

//   const [name, setName] = useState<string>("");
//   const [category, setCategory] = useState<string>("");
//   const [price, setPrice] = useState<string>("");

//   const { id } = useParams()
//   const dispatch = useAppDispatch()
//   console.log(id)
//   const navigate = useNavigate()
//   async function handleEdit(e: FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     try {
//       const newProduct = {
//         id: id,
//         name: name,
//         price: price,
//         category: category,
//       };
//       console.log('EDIT', newProduct);
//       await dispatch(editProduct(id, newProduct));

//       await dispatch(getProduct());
//       navigate('/product');
//     } catch (error) {
//       console.error(error);
//     }
//   }
//   const { products } = useAppSelector(productSelector)
//   useEffect(() => {
//     dispatch(getProduct(id))
//   })


//   return (

//     <>
//       <Container maxW='container.2xl' display={'flex'} justifyContent={'center'}>
//         <Box display={'flex'} width={"1000px"} justifyContent={'space-between'}>
//           <Box color={'black'} flex={'0,5'}  >
//             <Layoute />
//           </Box>
//           <Box
//             left={'300px'}
//             // display={'flex'}
//             width={"800px"}
//             overflow='hidden' // Menyembunyikan scrollbar secara horizontal dan vertikal
//           >
//             <Box color={'black'} flex={'1'}></Box>
//             <Box>
//               <Center margin={'auto'} width={'900px'} marginTop={'40px'}>
//                 <Box display={'flex'} justifyContent={'center'}>
//                   <Card
//                     direction={{ base: 'column', sm: 'row' }}
//                     overflow='hidden'
//                     variant='outline'
//                   >


//                     <Stack width={'700px'}>
//                       <CardBody>
//                         <Heading size='md'>Edit Data</Heading>
//                         <Box>
//                           <form onSubmit={handleEdit}>


//                             <FormControl>
//                               <FormLabel>Product Name</FormLabel>
//                               <Input placeholder='Product Name'
//                                 type='text' defaultValue={} name='name' onChange={(e) => setName(e.target.value)} />
//                             </FormControl>

//                             <FormLabel mt={'20px'}>Category</FormLabel>
//                             <Select onChange={(e) => setCategory(e.target.value)} name='category'>
//                               <option value='' hidden >Options</option>
//                               <option value='food'>Food</option>
//                               <option value='beferages'>Beferages</option>
//                             </Select>

//                             <FormControl mt={'20px'}>
//                               <FormLabel>price</FormLabel>
//                               <Input placeholder='price' name='price' onChange={(e) => setPrice(e.target.value)} />
//                             </FormControl>
//                             <FormControl mt={'20px'}>
//                               <Button variant='solid' colorScheme='blue' type='submit'>
//                                 Buy Latte
//                               </Button>
//                             </FormControl>
//                           </form>
//                         </Box>
//                       </CardBody>


//                     </Stack>
//                   </Card>




//                 </Box>
//               </Center>
//             </Box>
//             <Box flex={'0.5'}>
//               <Box width={'300px'}>
//                 {/* <Text>sdfsad</Text> */}
//               </Box>
//             </Box>
//           </Box>
//         </Box>
//       </Container>
//     </>

//   )
// }

// export default ProductId