import { Spacer, HStack, Flex, Text,Link as ChakraLink } from '@chakra-ui/react'
import { Heading } from '@chakra-ui/react'
import { Link} from 'react-router-dom'

export default function Navbar() {
    return (
        <Flex as="nav" p="10px" mb="10px" alignItems="center" position={"sticky"} top={0} bg={"white"}
            opacity="1" zIndex={1} style={{ filter: "opacity=50" }}
        >
            <table>
                <tbody>
                    <tr>
                        <td style={{ paddingRight: "20px" }}>
                            <img height="70px" width="70px" src='/assets/icon.jpg' alt='icon' />
                        </td>
                        <td>
                            <Link to='/'>
                                <span>
                                    <Heading style={{ fontSize: "2rem" }}>Recommendations by :</Heading>
                                    <Text fontSize={"1.8rem"}>Sitting on the Shoulders of Giants</Text>
                                </span>
                            </Link>
                        </td>
                    </tr>
                </tbody>
            </table>


            <Spacer />
            <HStack spacing="30px">
                <ChakraLink href='http://10.0.6.22:8001' isExternal style={{ fontSize: "1.8rem",textDecoration: 'none' }}>Reco</ChakraLink>
                <Link to='/daily' style={{ fontSize: "1.8rem" }}>Daily</Link>
                <Link to='/stocks' style={{ fontSize: "1.8rem" }}>Stocks</Link>
                <Link to='/mfs' style={{ fontSize: "1.8rem" }}> Mutual Funds</Link>
                <Link to='/supinv' style={{ fontSize: "1.8rem" }}>Super Investors</Link>
            </HStack>
        </Flex >
    )
}
