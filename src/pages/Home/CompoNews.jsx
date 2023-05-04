import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box, Button, Link as ChakraLink,Spacer
} from '@chakra-ui/react'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import DrawerNews from './DrawerNews'
export default function CompoNews({ info }) {
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            padding:"10px",
            border:"1px solid rgb(137, 137, 137)",
            borderRadius:"5px",
            marginTop:"3px"
            // background:"yellow"
        }}>
                <h2 style={{ borderTop: "None" }}>
                        <Box as="span" flex='1' textAlign='left' fontWeight={"500"} textColor={"#000"}>
                            {info.title} 
                        </Box>
                </h2>
                <Spacer />
                <span style={{marginLeft:"auto"}}><DrawerNews text={info.text} link={info.link} title={info.title}/></span> 
        </div>
    )
}
