import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import {
  Card,
  CardBody,
  Box,
  Button,
  FormLabel,
  Input,
  FormControl,
  Select,
  Stack,
  Heading,
  Center,
  Container,
} from '@chakra-ui/react';
import {
  Product,
  getProduct,
  // getProductDetail, 
  productSelector
} from '../../features/Product/poductSlice';
import {
  useAppDispatch,
  useAppSelector
} from '../../app/hooks';
import { useNavigate, useParams } from 'react-router-dom';
import Layoute from '../../page/Layoute';
import { ApiData } from '../../hooks/api';
import { FcAddImage } from "react-icons/fc";


const ProductId = () => {
  const [form, setForm] = useState<Product>({
    id: "",
    name: "",
    category: "",
    price: 0,
    image: "",
  });

  const { id } = useParams<{ id: string }>();
  console.log(id);

  const dispatch = useAppDispatch();
  // dispatch(getProductDetail(id));
  // const { product } = useAppSelector(productSelector);
  const navigate = useNavigate();

  async function handleEdit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("price", form.price.toString());
      formData.append("category", form.category);
      formData.append("image", form.image as File);
      console.log(formData);
      const response = await ApiData.patch(`/updateproduct/${id}`, formData);
      console.log(response)
      console.log("response", response);
      navigate('/product');
      // await dispatch(getProduct());
    } catch (error) {
      console.error(error);
    }
  }
  function handleChange(event: ChangeEvent<HTMLInputElement>) {
    const { name, value, files } = event.target

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

  const { products } = useAppSelector(productSelector);
  console.log('products', products);
  useEffect(() => {
    dispatch(getProduct());
  }, [dispatch]);

  // const product = products.find((product) => product.id === id);

  return (
    <>
      <Container maxW='container.2xl' display={'flex'} justifyContent={'center'}>
        <Box display={'flex'} width={'1000px'} justifyContent={'space-between'}>
          <Box color={'black'} flex={'0,5'}>
            <Layoute />
          </Box>
          <Box left={'300px'} width={'800px'} overflow='hidden'>
            <Box color={'black'} flex={'1'}></Box>
            <Box>
              <Center margin={'auto'} width={'900px'} marginTop={'40px'}>
                <Box display={'flex'} justifyContent={'center'}>
                  <Card direction={{ base: 'column', sm: 'row' }} overflow='hidden' variant='outline'>
                    <Stack width={'700px'}>
                      <CardBody>
                        <Heading size='md'>Edit Data</Heading>
                        <Box>
                          <form onSubmit={handleEdit}>
                            <FormControl mt={'20px'}>
                              <FormLabel>Product Name</FormLabel>
                              <Input hidden value={products[0].id} />
                              <Input
                                placeholder="Product Name"
                                type="text"
                                name="name"
                                // defaultValue={products.name}
                                onChange={handleChange}
                              />
                            </FormControl>

                            <FormLabel mt={"20px"}>Category</FormLabel>
                            <Select
                              onChange={handleChangeSelect}
                              name="category"
                            // defaultValue={product.category}
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
                                // defaultValue={product.price}
                                onChange={handleChange}
                              />
                            </FormControl>

                            <FormControl mt={"20px"}>
                            <FormLabel ><FcAddImage style={{width: '60px', height: '60px'}}/></FormLabel>
                              <Input
                                placeholder="image"
                                type="file"
                                name="image"
                                hidden
                                height={'200px'}
                                cursor={'pointer'}
                                // defaultValue={product.image}
                                onChange={handleChange} // Menggunakan setImage untuk mengatur state image
                              />
                            </FormControl>
                            <FormControl mt={'20px'}>
                              
                              <Button variant='solid' colorScheme='blue' type='submit' >
                                Save Changes
                              </Button>
                            </FormControl>
                          </form>
                        </Box>
                      </CardBody>
                    </Stack>
                  </Card>
                </Box>
              </Center>
            </Box>
            <Box flex={'0.5'}>
              <Box width={'300px'}>{/* <Text>sdfsad</Text> */}</Box>
            </Box>
          </Box>
        </Box >
      </Container >
    </>
  );
};
  
export default ProductId;
