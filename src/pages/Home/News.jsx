import React from 'react'
import {
    Accordion,
    AccordionItem,
    AccordionButton,
    AccordionPanel,
    AccordionIcon, Box, Button, Link as ChakraLink
} from '@chakra-ui/react'
import CompoNews from './CompoNews'
import { ArrowForwardIcon, ExternalLinkIcon } from '@chakra-ui/icons'
import { useFetch } from '../../hookd/useFetch'
import { nanoid } from 'nanoid'

export default function News() {

    const { data } = useFetch('http://localhost:5001/marketnews')
    // console.log(data)
    let iter = []
    for(let i =0;i<9;i++){
        iter.push(i)
    }
    return (
        data && data.length && <Accordion allowToggle  borderTop={"medium solid rgb(137, 137, 137)"} paddingTop={"15px"} >
            {iter.map(idx => <CompoNews key={nanoid()} info={data[idx]} />)}
        </Accordion>
    )
}
