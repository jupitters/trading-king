import { useState } from "react"
import Chart from "react-apexcharts"

const StockChart = ({chartData, symbol}) => {
    const [dateFormat, setDateFormat] = useState("24h")
    const {day,week,year } = chartData

    const determineTimeFormat = () => {
        switch(dateFormat){
            case "24h": return day
            case "7d": return week
            case "1y": return year
            default: return day
        }
    }

    const color = determineTimeFormat()[determineTimeFormat().length -1].y - determineTimeFormat()[0].y > 0? "#26C281":"#ED3419"

    const options = {
        colors: [color],
        title: {
            text: symbol,
            align: "center",
            style: {
                fontSize: "24px"
            }
        },
        chart: {
            id: "stock data",
            animations: {
                speed: 1300
            }
        },
        xaxis: {
            type: "datetime",
            labels: {
                datetimeUTC: false
            }
        },
        tooltip: {
            x: {
                format: "MMM dd HH:mm"
            }
        }
    }

    const series = [{
        name: symbol,
        data: determineTimeFormat()
    }]

    if(symbol === "TEST"){
    const responses = [
      {
        "c": [152.3, 153.1, 154.0, 153.5, 152.8, 151.9, 152.6, 153.4, 154.2],
        "h": [152.9, 153.8, 154.5, 154.0, 153.3, 152.2, 153.0, 154.0, 154.7],
        "l": [151.9, 152.7, 153.4, 153.0, 152.5, 151.6, 152.2, 152.9, 153.8],
        "o": [152.0, 152.9, 153.8, 153.6, 152.9, 152.0, 152.7, 153.0, 154.0],
        "s": "ok",
        "t": [
          1756920000,
          1756921800,
          1756923600,
          1756925400,
          1756927200,
          1756929000,
          1756930800,
          1756932600,
          1756934400
        ],
        "v": [24000, 18750, 22100, 19500, 20200, 21300, 19800, 22700, 25000]
      },
      {
        "c": [148.2, 149.8, 150.5, 152.1, 151.6, 150.9, 152.7, 153.2, 154.4, 153.7, 152.5, 151.9],
        "h": [149.0, 150.3, 151.0, 152.8, 152.0, 151.5, 153.1, 153.8, 154.9, 154.2, 153.0, 152.4],
        "l": [147.7, 149.0, 149.9, 151.6, 151.1, 150.3, 152.0, 152.7, 154.0, 153.1, 152.0, 151.5],
        "o": [148.0, 149.2, 150.1, 151.9, 151.4, 150.7, 152.3, 153.0, 154.2, 153.5, 152.7, 152.0],
        "s": "ok",
        "t": [
          1756488000,
          1756500000,
          1756512000,
          1756524000,
          1756536000,
          1756548000,
          1756560000,
          1756572000,
          1756584000,
          1756596000,
          1756608000,
          1756620000
        ],
        "v": [31000, 29800, 28900, 32000, 30500, 29900, 31500, 32200, 34000, 33000, 31000, 29500]
      },
      {
        "c": [120.5, 125.7, 130.3, 128.9, 135.0, 140.8, 145.2, 150.6, 155.4, 160.1, 162.8, 168.3],
        "h": [122.0, 127.0, 131.5, 130.2, 136.8, 142.0, 146.5, 152.0, 157.0, 161.7, 164.5, 170.0],
        "l": [119.8, 124.2, 128.5, 127.3, 133.0, 139.5, 144.0, 149.0, 154.0, 159.0, 161.0, 166.5],
        "o": [120.0, 126.0, 129.0, 128.5, 134.0, 141.0, 145.0, 150.0, 156.0, 160.0, 163.0, 167.0],
        "s": "ok",
        "t": [
          1725139200,
          1725744000,
          1726348800,
          1726953600,
          1727558400,
          1728163200,
          1728768000,
          1729372800,
          1729977600,
          1730582400,
          1731187200,
          1731792000
        ],
        "v": [850000, 920000, 880000, 910000, 970000, 995000, 1010000, 1105000, 1150000, 1200000, 1185000, 1250000]
      }
    ]

    chartData({
        day: responses[0],
        week: responses[1],
        year: responses[2]
    })

  }

  const renderButtons = (button) => {
    const classes = "btn m-1"
    if (button === dateFormat) {
        return classes + "btn-primary"
    } else {
        return classes + "btn-outline-primary"
    }
  }

  return (
    <div className="mt-5 p-4 shadow-sm bg-white">
        <Chart options={options} series={series} type="area" width="100%" />
        <div>
            <button className={renderButtons("24h")} onClick={() => setDateFormat("24h")}>24h</button>  
            <button className={renderButtons("7d")} onClick={() => setDateFormat("7d")}>7d</button>  
            <button className={renderButtons("1y")} onClick={() => setDateFormat("1y")}>1y</button>  
        </div>
    </div> 
  )
}

export default StockChart