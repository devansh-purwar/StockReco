import { Grid, GridItem } from '@chakra-ui/react'
import ChartComponent from "../../components/ChartComponent";

export default function Compo({ data }) {

    const formatter = (number) =>{
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    }
    let co = false
    if (data && data && data.price_data_2) {
        co = data.price_data_2[data.price_data_2.length - 1].value >= data.price_data_2[0].value
        // console.log(co)
    }
    return (
        <div>
            {data && data.price_data_2 && (<ChartComponent data={data.price_data_2} co={co} ></ChartComponent>)}
            <Grid
                h='200px'
                templateRows='repeat(2, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={3}
                marginTop={"30px"}
                boxShadow="3px 6px 24px rgba(0,0,0,.1)" borderRadius="15px"
            >
                <GridItem rowSpan={1} colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                    <div style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}>Today's High</div>
                    <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data && formatter(data.more_info.dayHigh)}</span></span>
                    
                </GridItem>
                <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "10px" }} >
                    <div style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}>Today's Low</div>
                    <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data && formatter(data.more_info.dayLow)}</span></span>

                    
                </GridItem>
                <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                    <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> 52 Week High</span>
                    <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data && formatter(data.more_info.fiftyTwoWeekHigh)}</span></span>

                    

                </GridItem>
                <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "10px" }}>

                    <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}>52 Week Low</span>
                    <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data && formatter(data.more_info.fiftyTwoWeekLow)}</span></span>

                    

                </GridItem>
                <GridItem rowSpan={1} colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }} >
                    <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}>Open</span>
                    <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data && formatter(data.more_info.open)}</span> </span>
                    


                </GridItem>
                <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }} >
                    <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}>Prev Close</span>
                    <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data && formatter(data.more_info.previousClose)}</span></span>

                    

                </GridItem>

            </Grid>
        </div>
    )
}
