import { createContext, useState } from "react"

const WatchListContext = createContext();

export const WatchListContextProvider = (props) => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT"]);

    return <watchListContext.Provider value={{ watchList }} />
}

export default WatchListContext