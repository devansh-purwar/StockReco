import { Button, Grid, GridItem, Link } from '@chakra-ui/react'
import {
    Popover,
    PopoverTrigger,
    PopoverContent,
    PopoverHeader,
    PopoverBody,
    PopoverFooter,
    PopoverArrow,
    PopoverCloseButton,
    PopoverAnchor,
} from '@chakra-ui/react'
import { QuestionOutlineIcon } from '@chakra-ui/icons'
import { useFetch } from '../../hookd/useFetch'
import { nanoid } from 'nanoid'
export default function Info({ name }) {
    const {data} = useFetch("http://127.0.0.1:5001/parent_investor?name="+name)
    return (
        data&&<>
            <Popover>
                <PopoverTrigger>
                    <QuestionOutlineIcon style={{ cursor: "pointer",display:"block",margin:"auto" }} />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody display={"flex"} flexDir={"column"} >
                        {data.map(fund=> fund && <Button key={nanoid()} _hover={{bg:"#EDF2F7"}} >{fund.length>20?fund.slice(0, 20) + "...":fund}</Button>)}
                    </PopoverBody>
                </PopoverContent>
            </Popover>

        </>
    )
}
