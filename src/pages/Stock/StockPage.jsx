import ChartComponent from "../../components/ChartComponent";
import { Grid, GridItem, Link } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import Info from './Info'
import {
    Tag,
    TagLabel,
    TagLeftIcon,
    TagRightIcon,
    TagCloseButton, Button
} from '@chakra-ui/react'
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
import { TriangleUpIcon, TriangleDownIcon } from '@chakra-ui/icons'
export default function StockPage({ data }) {

    const initialData = data.price_data_2
    const formatter = (number) =>{
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    }
    let co = false
    let val = null
    let percent = null
    let co2 = false
    if (data && data.price_data_2) {
        co = data.price_data_2[data.price_data_2.length - 1].value >= data.price_data_2[0].value
        val = data.price_data_2[data.price_data_2.length - 1].value - data.price_data_2[data.price_data_2.length - 2].value
        if(val<0){
            co2 = true
        }
        percent = Math.abs((val/data.more_info['currentPrice'])*100)
        // console.log(co,val,percent)
    }
    return (
        <>
            <Grid
                h='75vh'
                templateRows='repeat(3, 1fr)'
                templateColumns='repeat(4, 1fr)'
                gap={4}
                mt="20px"
            >
                <GridItem rowSpan={1} colSpan={2} boxShadow="3px 6px 24px rgba(0,0,0,.1)" borderRadius="15px">
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <div>
                            <Heading style={{ padding: "10px" }} size={"lg"}>
                                <span>{data.name.length > 15 ? data.name.slice(0, 32) + "..." : data.name}</span>
                            </Heading>
                            <Text style={{ padding: "10px" }}>
                                NSE: <span style={{ background: "#FF8400", padding: "3px", color: "#fff" }}>{data["Symbol"]}</span> &nbsp;
                                Founded: <span style={{ background: "#6DA9E4", padding: "3px", color: "#fff" }}>{data["Founded"]}</span> &nbsp;
                                Managing Director: <span color="#0078ff">{data['Managing Director']}</span>
                            </Text>
                        </div>
                        <div style={{ display: "flex", justifyContent: "center", flexDirection: "column", padding: "10px" }}>
                            <Text>₹{formatter(data.more_info['currentPrice'])}{co2?<TriangleDownIcon color='#f23645'/>:<TriangleUpIcon color="#00D09C" />}</Text>
                            <Text fontSize={"sm"} color={co2?'#f23645':"#00D09C"}> {val+" ("+(percent).toFixed(2)+"%) 1D"}</Text>
                        </div>
                    </div>
                </GridItem>
                <GridItem rowSpan={3} colSpan={2} boxShadow="3px 6px 24px rgba(0,0,0,.1)" borderRadius="15px">
                    <div>
                        <Heading style={{ padding: "10px" }} size={"lg"}>Company Essentials</Heading>
                        <Grid
                            h='80%'
                            templateRows='repeat(6, 1fr)'
                            templateColumns='repeat(3, 1fr)'
                            gap={3}
                            mt={5}
                        >
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <Text size={"md"} style={{ borderBottom: "medium solid #898989", paddingBottom: "5px", color: "#000" }}> Market Cap
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>Market capitalization is the aggregate valuation of the company based on its current share price and the total number of outstanding shares.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </Text>
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data['Market Cap']}</span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> P/E
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>It is a valuation parameter that measures the company's current share price relative to its per-share earnings. Generally, high P/E is Overvalued & low P/E is Undervalued.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </span>
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data['P/E Ratio(TTM)']}</span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> P/B
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>It shows the relationship between the current price and the book value of each share. A lower P/B ratio can mean that the stock is undervalued.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </span>
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["P/B Ratio"]}</span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Face Value
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>Value of a security, as stated by its issuer. It has no relation with market price of the stock.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["Face Value"]}</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Dividend Yield
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>It measures the amount of cash dividends distributed to equity shareholders relative to the market value per share.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["Dividend Yield"]}</span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Book Value(TTM)
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>It calculates the per share value of a company based on its equity available to common shareholders.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </span>
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["Book Value"]}</span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Debt To Equity
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>It is the sum of all short term and long term debts taken by the company over equity</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data['Debt to Equity']}</span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> EPS(TTM)
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>It is the profit allocated to each outstanding share of common stock.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>
                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["EPS(TTM)"]}</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> ROE
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>It measures the ability of a firm to generate profits from its shareholders investments in the company.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["ROE"]}</span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Industry P/E
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>P/E average of the particular sector is to take the average PE of all sector companies.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["Industry P/E"]}</span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Upper Circuit
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>the highest possible price that the stock can trade at on that designated day.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["Upper Circuit"]}</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Lower Circuit
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>the lowest that the stock price can trade at on that day. </PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{data["Lower Circuit"]}</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Total Debt
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>Total debt includes long-term liabilities, such as mortgages and other loans that do not mature for several years, as well as short-term obligations, including loan payments, credit cards, and accounts payable balances.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data.more_info["totalDebt"]/10e6)}Cr</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Total Revenue
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody> the total receipts a seller can obtain from selling goods or services to buyers</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data.more_info["totalRevenue"]/10e6)}Cr</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Enterprise Value
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>an economic measure reflecting the market value of a business. It is a sum of claims by all claimants: creditors and shareholders</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data.more_info["enterpriseValue"]/10e6)}Cr</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Gross Profits
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody> the profit a company makes after deducting the costs associated with making and selling its products.</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data.more_info["grossProfits"]/10e6)}Cr</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Revenue Per Share
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>a ratio that computes the total revenue earned per share over a designated period</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data.more_info["revenuePerShare"])}</span>
                                </span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "0px 10px 10px 10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> Total Cash Per Share
                                    &nbsp;
                                    <Popover>
                                        <PopoverTrigger>
                                            <QuestionOutlineIcon />
                                        </PopoverTrigger>
                                        <PopoverContent>
                                            <PopoverArrow />
                                            <PopoverBody>the broadest measure of available cash to a business divided by the number of equity shares outstanding</PopoverBody>
                                        </PopoverContent>
                                    </Popover>

                                </span>
                                <span>
                                ₹
                                <span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data.more_info["totalCashPerShare"])}</span>
                                </span>
                            </GridItem>
                            {/* <Info data={temp} /> */}
                        </Grid>
                    </div>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2} bg={"pink"}>
                    <ChartComponent data={initialData} co={co}></ChartComponent>
                </GridItem>
                <GridItem rowSpan={1} colSpan={2} boxShadow="3px 6px 24px rgba(0,0,0,.1)" borderRadius="15px">
                    <div>
                        <Heading style={{ padding: "10px" }} size={"lg"}>Price Summary</Heading>
                        <Grid
                            h='auto'
                            templateRows='repeat(1, 1fr)'
                            templateColumns='repeat(4, 1fr)'
                            gap={4}
                        >
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                                <div style={{ borderBottom: "medium solid #898989   ", paddingBottom: "5px" }}>TODAY'S HIGH</div>
                               <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data['todaymax'])}</span></span>
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "10px" }} >
                                <div style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}>TODAY'S LOW</div>
                               <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{ formatter(data['todaymin'])}</span></span> 
                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}> 52 WEEK HIGH</span>
                                <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data['52max'])}</span></span>

                            </GridItem>
                            <GridItem colSpan={1} style={{ display: "flex", flexDirection: "column", padding: "10px" }}>
                                <span style={{ borderBottom: "medium solid #898989", paddingBottom: "5px" }}>52 WEEK LOW</span>
                                <span>₹<span style={{ marginTop: "5px", color: "#000", fontWeight: "500" }}>{formatter(data['52min'])}</span></span>
                            </GridItem>
                        </Grid>
                    </div>

                </GridItem>
            </Grid>

        </>
    )
}
