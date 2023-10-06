import { Box,  Container, Text } from '@chakra-ui/react'
import Layoute from './Layoute'
import HomeProduct from '../Component/productComponen/HomeProduct'
const Product = () => {
  return (
    <>
      <Container maxW='container.2xl' display={'flex'} justifyContent={'center'}>
        <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} position={"relative"}>
          <Box color={'black'} flex={'0,5'} position={"fixed"}  >
            <Layoute />
          </Box>
          <Box 
          position={"relative"} 
          left={'300px'} 
          // display={'flex'}
           width={"1000px"}
          >
            <Box color={'black'} flex={'1'} position={"relative"}></Box>
            <Box >
              <HomeProduct/>
            </Box>
            <Box flex={'0.5'} position={"relative"} >
              <Text></Text>
            </Box>
          </Box>
        </Box>
      </Container>
    </>
  )
}

export default Product