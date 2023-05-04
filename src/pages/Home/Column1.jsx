import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel, Flex } from '@chakra-ui/react'
import Compo from './Compo'
import { useFetch } from '../../hookd/useFetch'
import ChartComponent from "../../components/ChartComponent";
// import AreaChart from './AreaChart'
export default function Column1() {

    const { data, isPending } = useFetch("http://localhost:5001/nifty")
    return (
        <Tabs variant='soft-rounded' colorScheme='green'>
            <TabList >
                <Tab>Nifty-50</Tab>
                {/* <Tab>BSE-Sensex</Tab>
                <Tab>Nifty Bank</Tab>
                <Tab>Nifty IT</Tab> */}
            </TabList>
            <TabPanels>
                <TabPanel style={{ height: "1rem" }}>
                    {data&&<Compo data={data} />}
                </TabPanel>
                {/* <TabPanel>
                    <Compo data={data} />
                </TabPanel>
                <TabPanel>
                    <Compo data={data} />
                </TabPanel>
                <TabPanel>
                    <Compo data={data} />
                </TabPanel> */}
            </TabPanels>
        </Tabs >
    )
}
