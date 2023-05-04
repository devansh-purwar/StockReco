import { Grid, GridItem, Heading, Link as ChakraLink } from '@chakra-ui/react'
import News from "./News";
import Column1 from "./Column1";
import { ExternalLinkIcon } from '@chakra-ui/icons'
export default function Home() {
    return (
        <>
            <Grid
                h='78vh'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(5, 1fr)'
                gap={4}
                mt={"28px"}
            >
                <GridItem rowSpan={2} colSpan={2} boxShadow="3px 6px 24px rgba(0,0,0,.1)" borderRadius="15px" padding="10px">
                    <Column1 />
                </GridItem>
                <GridItem colSpan={3} rowSpan={2} boxShadow="3px 6px 24px rgba(0,0,0,.1)" borderRadius="15px" padding="10px">
                    <div>
                        <ChakraLink href='https://www.moneycontrol.com/news/stocksinnews-142.html' isExternal fontSize="1.8rem" display={"flex"} alignContent={"end"} flexWrap={"wrap"} marginBottom={"5px"}>
                            <span> Market News</span> <ExternalLinkIcon mx='2px' />
                        </ChakraLink>
                        <News />
                    </div>
                </GridItem>
            </Grid>

        </>
    )
}
