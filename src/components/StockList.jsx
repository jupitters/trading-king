import { useState, useEffect } from 'react';
import finnHub from '../apis/finnHub';

const StockList = () => {
    const [stockList, setStockList] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/quote?symbol=MSFT");
                console.log(response.data);
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [])

  return (
    <div>StockList</div>
  )
}

export default StockList