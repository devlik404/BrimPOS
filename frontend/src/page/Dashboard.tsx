import { Box, Container } from '@chakra-ui/react'
import Layoute from './Layoute'
import Home from './Home'

const Dhasboard = () => {

    return (
        <Container maxW='container.2xl' display={'flex'}  justifyContent={'center'} >
            <Box display={'flex'} width={"1500px"} justifyContent={'space-between'} position={"relative"}>
                <Box color={'black'} flex={'0,5'}  position={"fixed"} >
                    <Layoute />

                </Box>
                <Box position={"relative"} left={'300px'} display={'flex'} width={"80%"}>
                    <Box color={'black'} flex={'1'} position={"relative"}>
                        <Home />
                    </Box>
                    <Box flex={'0.5'}position={"relative"}>
                        {/* <LayouteRight /> */}
                    </Box>
                </Box>
            </Box>


        </Container>
    )
}

export default Dhasboard
