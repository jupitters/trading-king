import { useState, useEffect, useContext } from 'react';
import finnHub from '../apis/finnHub';
import { BsFillCaretDownFill, BsFillCaretUpFill } from "react-icons/bs";
import { WatchListContext } from '../context/WatchListContext';
import { useNavigate } from 'react-router-dom';

const StockList = () => {
    const [stock, setStock] = useState([]);
    const { watchList, deleteStock } = useContext(WatchListContext)
    const navigate = useNavigate();
    const test = {
                    "c": 152.34,
                    "d": -1.25,
                    "dp": -0.81,
                    "h": 154.20,
                    "l": 150.75,
                    "o": 153.59,
                    "pc": 153.59,
                    "t": 1757020000
                }

    const changeColor = (change) => {
        return change > 0?"success":"danger";
    }
    const renderIcon = (change) => {
        return change > 0?<BsFillCaretUpFill />:<BsFillCaretDownFill />;
    }

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
    }, [watchList])

    const handleStockSelect = (symbol) => {
        navigate(`detail/${symbol}`)
    }

  return (
    <div>
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
            <tbody>
                <tr onClick={() => handleStockSelect("TEST")} style={{cursor:"pointer"}} className='table-row'>
                                <th scope='row'>{"TEST"}</th>
                                <td>{test.c}</td>
                                <td className={`text-${changeColor(test.d)}`}>{test.d} {renderIcon(test.d)}</td>
                                <td className={`text-${changeColor(test.dp)}`}>{test.dp} {renderIcon(test.d)}</td>
                                <td>{test.h}</td>
                                <td>{test.l}</td>
                                <td>{test.o}</td>
                                <td>{test.pc}</td>
                </tr>
                {
                    stock.map((stockData) => {
                        return (
                            <tr onClick={() => handleStockSelect(stockData.symbol)} style={{cursor:"pointer"}} className='table-row' key={stockData.symbol}>
                                <th scope='row'>{stockData.symbol}</th>
                                <td>{stockData.data.c}</td>
                                <td className={`text-${changeColor(stockData.data.d)}`}>{stockData.data.d} {renderIcon(stockData.data.d)}</td>
                                <td className={`text-${changeColor(stockData.data.dp)}`}>{stockData.data.dp} {renderIcon(stockData.data.d)}</td>
                                <td>{stockData.data.h}</td>
                                <td>{stockData.data.l}</td>
                                <td>{stockData.data.o}</td>
                                <td>{stockData.data.pc} <button className='btn btn-danger btn-sm ml-3 d-inline-block delete-button' onClick={(e) =>{e.stopPropagation() deleteStock(stockData.symbol)}}>Remove</button> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    </div>
  )
}

export default StockList