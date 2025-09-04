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
        let oneDay;
        if(date.getDay() === 6){
          oneDay = currentTime - 2*24*60*60;
        } else if(date.getDay() === 0){
          oneDay = currentTime - 3*24*60*60;
        } else {
          oneDay = currentTime - 24*60*60;
        }
        const oneWeek = 7*24*60*60;
        const oneYear = 365*24*60*60;
        const responseDay = await finnHub.get("/stock/candle", {
          params: {
            symbol,
            from: oneDay,
            to: currentTime,
            resolution: 30
          }
        });
        const responseWeek = await finnHub.get("/stock/candle", {
          params: {
            symbol,
            from: oneWeek,
            to: currentTime,
            resolution: 30
          }
        });
        const responseYear = await finnHub.get("/stock/candle", {
          params: {
            symbol,
            from: oneYear,
            to: currentTime,
            resolution: "W"
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