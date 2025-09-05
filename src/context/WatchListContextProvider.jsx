import { WatchListContext } from "./WatchListContext";
import { useEffect, useState } from "react";

export const WatchListContextProvider = ({ children }) => {
    const [watchList, setWatchList] = useState(localStorage.getItem("watchList").split(",") || ["GOOGL", "MSFT"]);

    useEffect(() => {
        localStorage.setItem("watchList", watchList);
    },[watchList])

    const addStock = (stock) => {
        if (watchList.indexOf() === -1){
            setWatchList([...watchList, stock]); 
        }
    }
    const deleteStock = (stock) => {
        setWatchList(watchList.filter((el) => {
            return el !== stock;
        }))
    }

    return (
        <WatchListContext.Provider value={{ watchList, addStock, deleteStock }}>
            {children}
        </WatchListContext.Provider>
    )
}
