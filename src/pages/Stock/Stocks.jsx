import { Heading } from '@chakra-ui/react'
import React from 'react'
import StocksTable from './StocksTable'
import { useFetch } from '../../hookd/useFetch'

export default function Stocks() {
    // fetch data
    const { data } = useFetch("http://localhost:5001/most_pop_stocks")
    return (
        <div>
            <Heading mb="10px" fontSize="1.9rem" color="#2D3748">Top 10 best Stocks According to popularity</Heading>
            <StocksTable data={data} />
        </div>
    )
}
