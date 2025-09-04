import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import finnHub from '../apis/finnHub';

const formatData = (data) => {
  return data.t.map((el, index)=>{
    return{
      x: el * 1000,
      y: data.c[index]
    }
  })
}

const StockDetailPage = () => {
  const { symbol } = useParams();
  const [chartData, setChartData] = useState();

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

        const responses = Promise.all([finnHub.get("/stock/candle", {
            params: {
              symbol,
              from: oneDay,
              to: currentTime,
              resolution: 30
            }
          }), 
          finnHub.get("/stock/candle", {
            params: {
              symbol,
              from: oneWeek,
              to: currentTime,
              resolution: 30
            }
          }),
          finnHub.get("/stock/candle", {
            params: {
              symbol,
              from: oneYear,
              to: currentTime,
              resolution: "W"
            }
          })
        ])
        console.log(responses);

        setChartData({
        day: formatData(responses[0].data),
        week: formatData(responses[1].data),
        year: formatData(responses[2].data),
      })
      } catch (error) {
        console.log(error);
      }

    }

    fetchData()
  },[symbol])

  return (
    <div>StockDetailPage of {symbol}</div>
  )
}

export default StockDetailPage