import React from 'react'

const AutoComplete = () => {
  return (
    <div className='w-50 p-5 rounded mx-auto'>
        <div className='form-floating dropdown'>
            <input style={{backgroundColor: "rgba(145, 158, 171, 0.4"}} id='search' type='text' className='form-control' placeholder='Search Stock' />
        </div>
    </div>
  )
}

export default AutoComplete