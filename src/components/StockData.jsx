import { useEffect, useState } from "react"
import finnHub from "../apis/finnHub";

const StockData = ({symbol}) => {
    const [stockData, setStockData] = useState();
    
    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await finnHub.get("stock/profile2", {
                    params: {
                        symbol
                    }
                })
                console.log(response)
                if (isMounted) {
                    setStockData(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        return () => (isMounted = false);
    }, [symbol])
  return (
    <div>StockData</div>
  )
}

export default StockData