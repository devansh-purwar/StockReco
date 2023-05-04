import { Grid, GridItem, Link } from '@chakra-ui/react'
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
export default function Info({ data }) {

    return (
        <>
            <Popover>
                <PopoverTrigger>
                    <QuestionOutlineIcon style={{ cursor: "pointer" }} />
                </PopoverTrigger>
                <PopoverContent>
                    <PopoverArrow />
                    <PopoverBody>{data.info}  </PopoverBody>
                </PopoverContent>
            </Popover>

        </>
    )
}
