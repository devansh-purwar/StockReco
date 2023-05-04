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
    Spacer,
} from '@chakra-ui/react'
import { useHistory } from 'react-router-dom'
import Info from './Info'
import LineGraphWrapper from '../../components/LineGraphWrapper'
export default function RowTemp({ info }) {
    const history = useHistory()

    const handleClick = (name) => {
        history.push('/stock/' + name + "/1")
    }
    const formatter = (number) =>{
        return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(number);
    }
    // console.log(info)
    return (
        <>
            {info && <Tr>
                <Td style={{ borderBottom: "1px solid #E2E8F0" }}>
                <span style={{
                        color: "#44475b",
                        fontWeight: "bolder",
                        cursor: "pointer"
                    }}
                    onClick={() => handleClick(info.name)}
                    _hover={{
                        background: "white",
                        color: "teal.500",
                    }}>
                    {info.name.length > 25 ? info.name.slice(0, 25) + "..." : info.name} 
                    </span>
                <span  
                    style={{
                        paddingLeft:"20px", 
                        color: "rgb(128, 138, 157)",
                        display:"block" }}> 
                        {info.Symbol + ".NS"}
                    </span>
                </Td>
                <Td style={{ borderBottom: "1px solid #E2E8F0" }}>{!info.more_info.sector ? "No Info" : info.more_info.sector.length > 25 ? info.more_info.sector.slice(0, 25) + "..." : info.more_info.sector}</Td>
                <Td style={{ borderBottom: "1px solid #E2E8F0" }}>{!info.more_info.industry ? "No Info" : info.more_info.sector.length > 25 ?info.more_info.sector.slice(0, 25) + "..." : info.more_info.sector}</Td>           
                <Td style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>₹{formatter(info.more_info['currentPrice'])}</Td>
                <Td style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>{info.Volume}</Td>
    
                <Td style={{ borderBottom: "1px solid #E2E8F0" }} isNumeric>{info['Market Cap']}</Td>
                <Td style={{ borderBottom: "1px solid #E2E8F0" }}> <Info name={info.name} /> </Td>
                <Td style={{ borderBottom: "1px solid #E2E8F0" }}> <LineGraphWrapper data={info.price_data} key={info.name}  width={160} /> </Td>
            </Tr>}
        </>
    )
}
