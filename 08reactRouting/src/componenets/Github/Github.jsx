import React,{useEffect,useState} from 'react'
import {useLoaderData} from 'react-router-dom'

function Github() {
    const data = useLoaderData([])
  return (
    <div className='flex text-center first:text-center m-4 bg-gray-600 text-white p-4 text-3xl'>
    <img className='rounded-3xl 'src={data.avatar_url} alt="Git picture" width={300} />
    <div className='m-auto px-11'> 
        <p className='font-serif'>Happiness is nothing to do with your with your achievement it is your nature!! </p>
    </div>
    </div>
  )
}

export default Github

export const githubInfoLoader = async ()=>{
    const response = await fetch('https://api.github.com/users/HPSinghk')
    return response.json()
}