import React from 'react'
import { IoMdStarOutline } from "react-icons/io";

const CurrencyDropdown = ({
    currencies,
    currency,
    setCurrency,
    favorite,
    handleFavorite,
    title="",
}) => {
  return (
    <div>
            <label className='block tex-sm font-medium text-gray-700' htmlFor={title}>{title}</label>

            <div className='mt-1 relative'>
                <select value={currency} onChange={(e)=>setCurrency(e.target.value)} className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-nnone focus:ring-2 focus:ring-indigo-500'>
               {favorite?.map((currency)=>{
                return (
                     <option className='bg-gray-200' 
                value={currency}
                key={currency}>
                </option>
                );
               })}
               <hr/>
                 {currencies?.map((currency)=>{
                  return  <option value={currency} key={currency}>
                        {currency}
                    </option>
                 })}
                </select>
                
                <button onClick={()=>handleFavorite(currency)} className='absolute inset-y-0 right-0 pr-5 flex items-center text-sm leading-5'>
                <IoMdStarOutline />
                </button>
                </div>
    </div>
  )
}

export default CurrencyDropdown