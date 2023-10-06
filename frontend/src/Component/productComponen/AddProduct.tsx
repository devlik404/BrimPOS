
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
    Spinner,
    Box,
    Stack,
} from '@chakra-ui/react'
import { useEffect } from 'react'
import { useAppDispatch, useAppSelector } from '../../app/hooks'
import { getProduct, productSelector } from '../../features/Product/poductSlice'

const AddProduct = () => {
    const { product, error, loading } = useAppSelector(productSelector)
    const dispatch = useAppDispatch()
    useEffect(() => {
        dispatch(getProduct())
    }, [dispatch])

    return (
        <>
            <TableContainer mt={'20px'}>
                <Table variant='simple'>
                    <Thead>
                        <Tr>
                            <Th>Name</Th>
                            <Th>Price</Th>
                        </Tr>
                    </Thead>
                    {loading && loading ? (
                        <Stack>
                            <Spinner
                                thickness='4px'
                                speed='0.65s'
                                emptyColor='gray.200'
                                color='blue.500'
                                size='xl'
                            /></Stack>
                    ) : error && error ? (
                        <Box color="red.500">{error}</Box>
                    ) : (
                        <Tbody>
                            { product.map((items, index) => (
                                <Tr key={index }>
                                    <Td>{items.name}</Td>
                                    <Td>{items.category}</Td>
                                    <Td>{items.price}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    )}
                </Table>
            </TableContainer>
        </>
    )
}

export default AddProduct