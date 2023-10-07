import { Box, Container } from '@chakra-ui/react';
import Layoute from './Layoute';
import HomeProduct from '../Component/productComponen/HomeProduct';

const Product = () => {
  return (
    <>
      <Container maxW='container.2xl' display={'flex'} justifyContent={'center'}>
        <Box display={'flex'} width={"1000px"} justifyContent={'space-between'}>
          <Box color={'black'} flex={'0,5'}  >
            <Layoute />
          </Box>
          <Box
            left={'300px'}
            // display={'flex'}
            width={"700px"}
            overflow='hidden' // Menyembunyikan scrollbar secara horizontal dan vertikal
          >
            <Box color={'black'} flex={'1'}></Box>
            <Box>
              <HomeProduct />
            </Box>
            <Box flex={'0.5'}>
              <Box width={'300px'}>
                {/* <Text>sdfsad</Text> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Product;
