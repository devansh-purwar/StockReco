import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
// import AreaChart from '../AreaChart'

import GrowwTable from './GrowwTable'
import Sharks from './Sharks'
import './TabSwitching.css'
export default function TabSwitching() {
    return (
        <Tabs isFitted variant='enclosed' colorScheme="purple" mt="40px" p="20px">
            <TabList mb='1em' bg='gray.200' style={{ borderRadius: "20px" }}>
                <Tab _selected={{ color: 'white', bg: 'purple.400' }} borderLeftRadius="20px" bo fontSize='1.5em' >Stonks!</Tab>
                <Tab _selected={{ color: 'white', bg: 'purple.400' }} fontSize='1.5em' style={{ borderLeft: "3px solid #718096", borderRight: "3px solid #718096" }} >Mutual Fundas!</Tab>
                <Tab _selected={{ color: 'white', bg: 'purple.400' }} fontSize='1.5em' borderRightRadius="20px">Super Investors!</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                    <div style={{ width: "50%" }}>
                        {/* <AreaChart /> */}
                    </div>
                    <GrowwTable />
                </TabPanel>
                <TabPanel>
                    <GrowwTable />
                </TabPanel>
                <TabPanel>
                    <Sharks />
                </TabPanel>
            </TabPanels>
        </Tabs >
    )
}
