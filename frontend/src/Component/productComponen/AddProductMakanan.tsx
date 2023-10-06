
import {
    Table,
    Thead,
    Tbody,
    Tr,
    Th,
    Td,
    TableContainer,
} from '@chakra-ui/react'

const AddProductMakanan
 = () => {
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
                    <Tbody>
                        <Tr>
                            <Td>Nasgor</Td>
                            <Td>20.000</Td>
                        </Tr>
                        <Tr>
                            <Td>Nasi Tumpeng</Td>
                            <Td>23.000</Td>
                        </Tr>

                    </Tbody>
                </Table>
            </TableContainer>
        </>
    )
}

export default AddProductMakanan
