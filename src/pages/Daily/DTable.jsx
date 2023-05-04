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
import { useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import StockCard from './StockCard'
import { useFetch } from '../../hookd/useFetch'

export default function DTable({ info, prev }) {
    const [max, setMax] = useState(5)

    useEffect(() => {
        let temp = 0
        for (let i = 0; info && info[i] && info[i].date && i < prev; i++) {
            temp = Math.max(info[i].date.length, temp)
        }
        setMax(temp)
    }, [prev, info])

    let iter = []
    info.reverse()
    let iter2 = []
    for (let i = 0; info && i < prev; i++) {
        iter2.push(i)
    }
    for (let i = 0; info && i < max; i++) {
        iter.push(i)
    }
    return (
        <TableContainer overflowY="auto" maxHeight="550px" style={{ border: "1px solid #E2E8F0", borderRadius: "20px", maxWidth: "100%" }}>
            <Table variant='simple'>
                <Thead position="sticky" top={0} bgColor="white" zIndex={1}>
                    <Tr>
                        {info && iter2.map(idx2 => info[idx2] && <Th key={nanoid()} textAlign={"center"} >{info[idx2].date[0]}</Th>)}
                    </Tr>
                </Thead>
                <Tbody>
                    {iter.map(idx1 => <Tr key={idx1}>{iter2.map(idx2 => info[idx2] && <StockCard key={nanoid()} stock={info[idx2].stock_name[idx1]} target={info[idx2].target[idx1]} fund={info[idx2].fund_name[idx1]} signal={info[idx2]['action'][idx1]} date={info[idx2]['date'][idx1]} link={info[idx2]['link'][idx1]} />)}</Tr>)}
                    {/* <Tr>{iter.map(idx2 => <StockCard stock={info[idx2].stock[0]} />)}</Tr> */}
                    {/* {info && info.map(inf => <Tr>{iter.map(idx => idx < inf.date.length && <Td><StockCard stock={inf.stock[idx]} key={inf.stock[idx]} /></Td>)}</Tr>)} */}
                    {/* <Tr>
                        <Td><StockCard /></Td>
                        <Td><StockCard /></Td>
                        <Td><StockCard /></Td>
                        <Td><StockCard /></Td>
                        <Td><StockCard /></Td>
                        <Td><StockCard /></Td>
                        <Td><StockCard /></Td>
                        <Td><StockCard /></Td>
                    </Tr>
                    */}
                </Tbody>
            </Table>
        </TableContainer>
    )
}
