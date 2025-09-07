import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import StockChart from '../components/StockChart';
import StockData from '../components/StockData';

const formatData = (data) => {
  return data.t.map((el, index)=>{
    return{
      x: el * 1000,
      y: Math.floor(data.c[index])
    }
  })
}

const StockDetailPage = () => {
  const { symbol } = useParams();

  return (
    <div>
        <div>
          <StockChart />
          <StockData symbol={symbol}/>
        </div>

    </div>
  )
}

export default StockDetailPage