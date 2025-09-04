import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import finnHub from '../apis/finnHub';

const StockDetailPage = () => {
  const { symbol } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const date = new Date();
        const currentTime = Math.floor(date.getTime() / 1000);
        const oneDay = currentTime - 24*60*60
        const response = await finnHub.get("/stocck/candle", {
          params: {
            symbol,
            from: oneDay,
            to: currentTime,
            resolution: 30
          }
        });
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  },[])

  return (
    <div>StockDetailPage of {symbol}</div>
  )
}

export default StockDetailPage