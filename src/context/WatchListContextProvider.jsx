import { WatchListContext } from "./WatchListContext";
import { useState } from "react";

export const WatchListContextProvider = ({ children }) => {
    const [watchList, setWatchList] = useState(["GOOGL", "MSFT"]);

    return (
        <WatchListContext.Provider value={{ watchList }}>
            {children}
        </WatchListContext.Provider>
    )
}
