import { Heading } from '@chakra-ui/react'
import MfTable from './MfTable'
import { useFetch } from '../../hookd/useFetch'

export default function Mfs() {
    // fetch req
    const { data } = useFetch("http://localhost:5001/top_volume_grow")
    // console.log(data)
    return (
        <div>
            <Heading mb="10px" fontSize="1.9rem" color="#2D3748">Top 10 best Stocks according to Big Mutual Funds</Heading>
            <MfTable data={data} />
        </div>
    )
}
