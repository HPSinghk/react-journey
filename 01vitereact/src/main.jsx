import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import MyApp from './App.jsx'

function Main(){
  return (
    <h1>Yahi bna lete hai</h1>
  )
}
/* const reactElement = {
  type : 'a',
  props : {
      href : 'https://google.com',
      target : '_blank'
  },
  children : 'Clich me to visit Google'
} */
/* const anotherElement =(
  <a href="https://google.com" target= '_blank' >visit google</a>
) */

const username2 = "jab pura react element code ho jae uske bad hum variable like this can insert"
const reactElement = React.createElement(
  'a',
  {href : 'https://facebook.com', target : '_blank'},
  'click me visit facebook',
   username2 // yha bhi completely evaluated chiz hi likh skte hai
)
 


ReactDOM.createRoot(document.getElementById('root')).render(

  
    //anotherElement
    reactElement
   //<App/>
)
