import { useState, useEffect } from 'react'
import finnHub from '../apis/finnHub';

const AutoComplete = () => {
    const [search, setSearch] = useState("");

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await finnHub.get("/search", {
                    params: {
                        q: search
                    }
                })
            } catch (error) {
                console.log(error);
            }
        }
        if (search.length > 0){
            fetchData()
        }
    },[search])

  return (
    <div className='w-50 p-5 rounded mx-auto'>
        <div className='form-floating dropdown'>
            <input style={{backgroundColor: "rgba(145, 158, 171, 0.4"}} id='search' type='text' className='form-control' placeholder='Search Stock' autoComplete='off' onChange={(e) => setSearch(e.target.value)} />
            <label htmlFor="search">Search Stock</label>
            <ul className='dropdown-menu'>
                <li>Item1</li>
            </ul>
        </div>
    </div>
  )
}

export default AutoComplete