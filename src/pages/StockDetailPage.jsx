import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import finnHub from '../apis/finnHub';

const StockDetailPage = () => {
  const { symbol } = useParams();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await finnHub.get("/");
        console.log(response);
      } catch (error) {
        console.log(error);
      }
    }
    fetchData()
  }, [])

  return (
    <div>StockDetailPage of {symbol}</div>
  )
}

export default StockDetailPage