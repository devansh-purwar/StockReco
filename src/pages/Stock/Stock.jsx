import { useFetch } from "../../hookd/useFetch"
import StockPage from "./StockPage"
import { useParams } from 'react-router-dom'

export default function Stock() {
    const { id } = useParams()
    // fetch data
    const { data, error } = useFetch("http://localhost:5001/stock_info/" + id.replaceAll("%20", ' '))
    // console.log(data, error)
    return (
        <div>
            {data && <StockPage data={data} />}
        </div>
    )
}
