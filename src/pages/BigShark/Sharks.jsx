import { Tabs, TabList, TabPanels, Tab, TabPanel, Heading } from '@chakra-ui/react'
import InvTable from './InvTable'
import { useFetch } from '../../hookd/useFetch'
export default function SharksGrid() {
    // fetch request
    const { data } = useFetch("http://localhost:5001/top_10_volume_tick")
    console.log(data)
    return (
        <div>
            <Heading mb="10px" fontSize="1.9rem" color="#2D3748">Top 10 best Stocks according to Super Investors</Heading>
            <InvTable data={data} />
        </div>
    )
}
