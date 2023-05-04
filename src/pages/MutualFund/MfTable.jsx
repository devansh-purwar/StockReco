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
import RowTemp from './RowTemp'
import { useFetch } from '../../hookd/useFetch'

export default function MfTable({ data }) {

  function myFunction(name) {
    let f = useFetch("http://localhost:5001/stock_info/" + name)
    return f.data;
  }
  const info = data && data.map(myFunction)
  // console.log(data)
  // console.log(info)
  return (
    <TableContainer overflowY="auto" maxHeight="550px" style={{ border: "1px solid #E2E8F0", borderRadius: "20px" }} >
      <Table variant='simple'>
        {/* <TableCaption>Imperial to metric conversion factors</TableCaption> */}
        <Thead position="sticky" top={0} bgColor="white" zIndex={1}>
          <Tr>
            <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Company</Th>
            <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Sector</Th>
            <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Industry</Th>
            <Th style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>Market Price</Th>
            <Th style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>Aggregate Volume</Th>
            <Th style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>Market Cap</Th>
            <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Funds</Th>
            <Th style={{ borderBottom: "1px solid #E2E8F0" }}>Chart</Th>
          </Tr>
        </Thead>
        <Tbody>
          {info && info.map(stock => stock && <RowTemp key={stock.name} info={stock} />)}
        </Tbody>
      </Table>
    </TableContainer >
  )
}
