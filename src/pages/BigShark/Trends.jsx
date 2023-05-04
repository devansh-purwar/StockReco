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

import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'

export default function Trends() {
    return (

        <Tabs isFitted variant='enclosed' colorScheme="purple" >
            <TabList>
                <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Top 5</Tab>
                <Tab _selected={{ color: 'white', bg: 'purple.400' }}>Bottom 5</Tab>
            </TabList>
            <TabPanels>
                <TabPanel maxWidth="750px" margin="auto">
                    <TableContainer style={{ border: "1px solid #E2E8F0", borderRadius: "20px" }}>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Company</Th>
                                    <Th>Market Price</Th>
                                    <Th isNumeric>Change </Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4 <TriangleUpIcon color="#00D09C"></TriangleUpIcon></Td>

                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48 <TriangleUpIcon color="#00D09C"></TriangleUpIcon></Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric> 0.91444 <TriangleUpIcon color="#00D09C"></TriangleUpIcon></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </TabPanel>
                <TabPanel>
                    <TableContainer style={{ border: "1px solid #E2E8F0", borderRadius: "20px" }}>
                        <Table variant='simple'>
                            <Thead>
                                <Tr>
                                    <Th>Company</Th>
                                    <Th>Market Price</Th>
                                    <Th isNumeric>% Change</Th>
                                </Tr>
                            </Thead>
                            <Tbody>
                                <Tr>
                                    <Td>inches</Td>
                                    <Td>millimetres (mm)</Td>
                                    <Td isNumeric>25.4 <TriangleDownIcon color="#FF0000"></TriangleDownIcon></Td>
                                </Tr>
                                <Tr>
                                    <Td>feet</Td>
                                    <Td>centimetres (cm)</Td>
                                    <Td isNumeric>30.48 <TriangleDownIcon color="#FF0000"></TriangleDownIcon></Td>
                                </Tr>
                                <Tr>
                                    <Td>yards</Td>
                                    <Td>metres (m)</Td>
                                    <Td isNumeric>0.91444<TriangleDownIcon color="#FF0000"></TriangleDownIcon></Td>
                                </Tr>
                            </Tbody>
                        </Table>
                    </TableContainer>
                </TabPanel>
            </TabPanels>
        </Tabs>
    )
}
