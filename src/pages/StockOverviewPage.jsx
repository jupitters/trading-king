import React from 'react'
import AutoComplete from '../components/AutoComplete'
import StockList from '../components/StockList'

const StockOverviewPage = () => {
  return (
    <main>
        <AutoComplete />
        <StockList />
    </main>
  )
}

export default StockOverviewPage