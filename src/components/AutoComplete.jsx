import { useState, useEffect, useContext } from 'react'
import finnHub from '../apis/finnHub';
import { WatchListContext } from '../context/WatchListContext';

const AutoComplete = () => {
    const [search, setSearch] = useState("");
    const [results, setResults] = useState([]);
    const { addStock } = useContext(WatchListContext);

    const renderDropdown = (results) => {
        if (results.length > 0 ){
            return "show";
        }
        return null;
    }
    
    useEffect(()=>{
        let isMounted = true;
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/search", {
                    params: {
                        q: search
                    }
                })
                if (isMounted){
                    setResults(response.data.result);
                }
            } catch (error) {
                console.log(error);
            }
        }
        if (search.length > 0){
            fetchData()
        } else {
            setResults([]);
        }
        return () => (isMounted = false)
    },[search])

  return (
    <div className='w-50 p-5 rounded mx-auto'>
        <div className='form-floating dropdown'>
            <input style={{backgroundColor: "rgba(145, 158, 171, 0.4"}} id='search' type='text' className='form-control' placeholder='Search Stock' autoComplete='off' value={search} onChange={(e) => setSearch(e.target.value)} />
            <label htmlFor="search">Search Stock</label>
            <ul style={{height:"200px", overflowY:"scroll", overflowX:"hidden", cursor:"pointer"}}className={`dropdown-menu ${renderDropdown(results)}`}>
                {
                        results.map((result) => {
                                return <li onClick={() => { 
                                    addStock(result.symbol); 
                                    setSearch("");
                                }} key={result.symbol} className='dropdown-item'>{result.description} ({result.symbol})</li>
                        })
                }
            </ul>
        </div>
    </div>
  )
}

export default AutoComplete