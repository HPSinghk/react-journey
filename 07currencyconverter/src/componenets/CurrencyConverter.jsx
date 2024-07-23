import React, { useEffect } from 'react'
import { useState } from 'react'
import CurrencyDropdown from './dropdown';
import { HiArrowsRightLeft } from "react-icons/hi2";


const CurrencyConverter = () => {
    const [currencies, setcurrencies] = useState([]);
    const [amount, setamount] = useState(1);
    const [from, setfrom] = useState("USD")
    const [to, setto] = useState("INR")
    const [convertedAmount, setConvertedAmount] = useState(null)
    const [converting, setConverting] = useState(false)
    const [favorites, setFavorites] = useState(JSON.parse(localStorage.getItem("favorites")) || ["INR","EUR"]);


    // https://api.frankfurter.app/currencies

    const fetchCurrencies=async()=>{
        try {
            const res = await fetch("https://api.frankfurter.app/currencies");
            const data = await res.json();
            setcurrencies(Object.keys(data));
            
        } catch (error) {
            console.error("error fetching",error);
        }
    }

    useEffect(() => {
      fetchCurrencies()
      
    }, [])

    console.log(currencies)

    const ConvertCurrency= async()=>{
        if(!amount) return;
        setConverting(true);
        try {
            const res = await fetch(`https://api.frankfurter.app/latest?amount=${amount}&from=${from}&to=${to}`);
            const data = await res.json();
            setConvertedAmount(data.rates[to]+" "+to);
            
        } catch (error) {
            console.error("error fetching",error);
        }finally{
            setConverting(false)
        }

    }
    
        const handleFavorite=(currency)=>{
            //add to favorite

        }

        const swapCurrencies= ()=>{
            setfrom(to);
            setto(from)
        }
    //https://api.frankfurter.app/latest?amount=10&from=GBP&to=USD
  return (
   
   <div className='max-w-xl mx-auto my-10 p-5 bg-white rounded-lg shadow-md'>
    <h2 className='mb-5 text-2xl font-semibold text-gray-700'>Currency Converter</h2>

    <div className='grid grid-col-1 sm:grid-cols-3 gap-4 items-end'>
        <CurrencyDropdown
         favorites={favorites}
         currencies={currencies}
         title="From:" 
         currency={from}
         setCurrency={setfrom}
         handleFavorite={handleFavorite}
         />
         {/* swap curercies */}

        <div className='flex justify-center -mb-5 sm:mb-0' >
            <button className='p-2 bg-gray-200 rounded-full cursor-pointer hover:bg-gray-300'>
                <HiArrowsRightLeft onClick={swapCurrencies} className='text-xl text-gray-700'/>
            </button>
        </div>
        <CurrencyDropdown
        favorites={favorites}
         currencies={currencies}
         title="To:"
         currency={to}
         setCurrency={setto}
         handleFavorite={handleFavorite}/>
        
        </div>
    <div className='mt-4'>
        <label 
        htmlFor='amount'
        className='block-text-sm font-medium text-gray-700'
        >
            amount:
        </label>
        <input 
        value={amount}
        onChange={(e)=>setamount(e.target.value)}
        type='number'
        className='w-full p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500'
        />
    </div>
    <div className='flex justify-end mt-6'>
        <button
         onClick={ConvertCurrency}
         className={`px-5 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 ${converting ? "animate-pulse" : ""}`}>
            Convert
        </button>
    </div>

    { convertedAmount && (
        <div className='mt-4 text-lg font-medium tex-right text-green-600'>
        Converted Amount:{convertedAmount}
    </div>
    )}
   </div>

  )
}

export default CurrencyConverter