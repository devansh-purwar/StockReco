import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
} from '@chakra-ui/react'

import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons'
import Info from '../Stock/Info'

import RowTemp from './RowTemp'
import { useFetch } from '../../hookd/useFetch'
import LineGraphWrapper from '../../components/LineGraphWrapper'
import { nanoid } from 'nanoid'

export default function InvTable({ data }) {

    function myFunction(name) {
        const { data } = useFetch("http://localhost:5001/stock_info/" + name)
        return data;
    }
    const info = data && data.map(myFunction)
    return (
        <TableContainer style={{ border: "1px solid #E2E8F0", borderRadius: "20px" }}  overflowY="auto" maxHeight="550px">
            <Table variant='simple'>
                {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
                <Thead position="sticky" top={0} bgColor="white" zIndex={1}>
                    <Tr>
                        <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Company</Th>
                        <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Sector</Th>
                        <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Industry</Th>
                        <Th style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>Market Price</Th>
                        <Th style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>Volume(24h)</Th>
                        <Th style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>Market Cap</Th>
                        {/* <Th style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>% Change</Th> */}
                        <Th style={{ borderBottom: "1px solid #E2E8F0", paddingRight: "0px" }}>Big Investors</Th>
                        <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Chart</Th>

                    </Tr>
                </Thead>
                <Tbody>
                    {info && info.map(stock => stock && <RowTemp key={nanoid()} info={stock} />)}
                </Tbody>
            </Table>
        </TableContainer >
    )
}
