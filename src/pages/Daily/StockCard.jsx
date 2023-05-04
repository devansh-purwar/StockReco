import { Card, CardHeader, CardBody, CardFooter, Stack, Text, Heading, Button, ButtonGroup, Divider, Image, Td } from '@chakra-ui/react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box, Link as ChakraLink
} from '@chakra-ui/react'

import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
export default function StockCard({ stock, fund, signal, target, date, link }) {
    if (!stock) {
        return <Td></Td>
    }
    return (
        <Td alignContent={"center"}><Card maxW='17rem' justifyContent={"center"} margin={"0px auto"}>
            <CardBody padding={"1rem"} >
                <Stack>
                    <label>
                        <span style={{ fontWeight: "400" }} >Stock</span>
                        <Heading fontSize={"1.10rem"}>
                            {stock.length > 15 ? stock.slice(0, 15) + "..." : stock}
                        </Heading>
                    </label>

                    <label>
                        <span style={{ fontWeight: "500" }}> Target : </span>
                        <Button size={"sm"} style={{ background: "#FFF8D6", marginLeft: "7px", border: "1px solid red" }}>
                            ₹{target}<img height="20px" width="20px" src='/assets/target.png' alt='icon' style={{ display: "inline", marginLeft: "10px" }} />
                        </Button>
                    </label>
                    <label>
                        <span style={{ fontWeight: "500" }}>
                            Fund :
                        </span>
                        <Button size={"sm"} style={{ background: "#FDE2F3", marginLeft: "7px", border: "1px solid red" }}>

                            {fund.length > 15 ? fund.slice(0, 15) + "..." : fund}
                        </Button>
                    </label>
                    <label>
                        <span style={{ fontWeight: "500" }}>Signal :</span>
                        <Button variant='solid' ml={"7px"} mr={"7px"} colorScheme={signal == "Buy" ? "green" : signal == "Sell" ? "red" : "yellow"} >
                            {signal}
                        </Button>
                        <Button bg={"#E8F9FD"} variant='outline'>
                            <ChakraLink href={link} isExternal>
                                Info <ExternalLinkIcon />
                            </ChakraLink>
                        </Button>
                    </label>
                </Stack>
            </CardBody>
        </Card></Td>
    )
}
