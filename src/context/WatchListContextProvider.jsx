import { WatchListContext } from "./WatchListContext";
import { useState } from "react";

export const WatchListContextProvider = ({ children }) => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT"]);

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
