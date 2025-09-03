import { useState, useEffect } from 'react'
import AutoComplete from '../components/AutoComplete'
import StockList from '../components/StockList'

const StockOverviewPage = () => {
    const [stockList, setStockList] = useState([]);

  return (
    <main>
        <AutoComplete />
        <StockList />
    </main>
  )
}

export default StockOverviewPage