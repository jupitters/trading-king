import { useState, useEffect } from 'react';
import finnHub from '../apis/finnHub';

const StockList = () => {
    const [stock, setStock] = useState();
    const [watchList, setWatchList] = useState([]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/quote?symbol=MSFT");
                console.log(response.data);
                if (isMounted){
                    setStock(response.data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        return () => (isMounted = false);
    }, [])

  return (
    <div>StockList</div>
  )
}

export default StockList