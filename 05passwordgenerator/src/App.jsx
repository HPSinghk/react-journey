import { useState,useCallback,useEffect,useRef } from 'react'
import './App.css'

function App({}) {
  const [copySuccess, setCopySuccess] = useState('')
  const [length, setLength] = useState(8)
  const [numberAllowed,setNumberAllowed]= useState(false)
  const [charAllowed,setCharAllowed]= useState(false)
  const [password,setPassword]= useState()
  const [clicked, setClicked] = useState(false)
  const passwordRef= useRef(null)

  const handleClick = () => {
    setClicked(!clicked);
  };

  const copyToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
      
  },[password])

  const passwordGenerator=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

        if(numberAllowed) str += "0123456789"
        if(charAllowed) str += "!@#$%^&*"
        for (let i = 0; i < length; i++) {
            let key= Math.floor(Math.random()*str.length)
            pass+=str.charAt(key)
        }
        setPassword(pass)

  },[length,numberAllowed,charAllowed,setPassword])

 useEffect(()=>{
      passwordGenerator()
 },[length,numberAllowed,charAllowed,passwordGenerator])

  return (
    <>
    <div className='bg-slate-300 h-36 w-96 flex-col justify-center align-middle p-3'>
      <h1 className='m-2 text-2xl'>Password generator</h1>

      <div className='m-2'>
      <input
       className='outline-none p-3 rounded-s-md h-8 w-72'
       type='text' 
       value={password} 
       placeholder='  Your generated Password' 
       readOnly
       ref={passwordRef}
       ></input>
      <button
      className='bg-blue-500 h-8 w-10 rounded-e-md'
      onClick={()=>{copyToClipboard();handleClick()}}
      style={{ backgroundColor: clicked ? 'orange' : 'blue' }}
      >copy</button>
      </div>
      
      <div>
      <input
       type='range'
       min={6}
       max={15} 
       value={length} 
       className='cursor-pointer' 
       onChange={(e)=>{setLength(e.target.value)}} 
         ></input>
      <span className='text-orange-900'>length({length})  </span>
      <input 
      type="checkbox"
      defaultChecked={numberAllowed}
      onChange={()=>{setNumberAllowed((prev)=>!prev)}}
      ></input> 
      <span className='text-orange-900'>Number</span>
      <input
       type="checkbox"
       defaultChecked={charAllowed}
       onChange={()=>{setCharAllowed((prev)=>!prev)}}
       ></input>
      <span className='text-orange-900'>Character</span>
      </div>
      
    </div>
    
    </>
  )
}

export default App

