import { useState, useEffect } from 'react';
import finnHub from '../apis/finnHub';

const StockList = () => {
    const [stock, setStock] = useState();
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT"]);

    useEffect(() => {
        let isMounted = true;
        const fetchData = async () => {
            try {
                const responses = await Promise.all(watchList.map((stock) => {
                    return finnHub.get("/quote", {
                        params: {
                            symbol: stock
                        }
                    })
                }))
                const data = responses.map((response) => {
                    return {
                        data: response.data,
                        symbol: response.config.params.symbol,
                    }
                })
                if (isMounted){
                    setStock(data);
                }
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
        return () => (isMounted = false);
    }, [])

  return (
    <table className='table hover mt-5'>
        <thead style={{color: "rgb(79,89,102)"}}>
            <tr>
                <th scope='col'>Name</th>
                <th scope='col'>Last</th>
                <th scope='col'>Chg</th>
                <th scope='col'>Chg%</th>
                <th scope='col'>High</th>
                <th scope='col'>Low</th>
                <th scope='col'>Open</th>
                <th scope='col'>Pclose</th>
            </tr>
        </thead>
    </table>
  )
}

export default StockList