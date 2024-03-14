import Chai from "./chai"

/* function MyApp(){
  return(
    <h1>Custom App</h1>
  )
} */ // we can not export since a module can not multiple exports
function MyApp() {
  const username="harendra pratap singh"
  return (
  <h1>Custom App !!!! {username}</h1>
  // username is the final output we can only can write final output 
  )
}

export default MyApp
//export default MyApp
