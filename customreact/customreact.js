/* function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    domElement.setAttribute('href',reactElement.props.href)
    domElement.setAttribute('target',reactElement.props.target)
    mainContainer.appendChild(domElement)
} */
// the above function we are using to dynimically handelling 
// the div having id root present in index.html file we are 
// first storing it to mainconatiner and then passing 
// maincontainer to the function
//we are also passing reactelement to the function that is 
// created below

//but in above function if reaction have many props then we 
// have to set attribute one by one so that is not efficient way
 //  we are writing a new function that use loop

 function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type)
    domElement.innerHTML = reactElement.children
    for (const prop in reactElement.props) {
        if (reactElement.props=='children') { continue }
        // we are taking that condition because people use children
        // inside the props
        domElement.setAttribute(prop,reactElement.props.prop)
    }
    mainContainer.appendChild(domElement)
}

const reactElement = {
    type : 'a',
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    children : 'Clich me to visit Google'
}
const mainContainer = document.getElementById('root')

customRender(reactElement,mainContainer)
// this function call is custom render method here we are 
// creating reactelment our choice and rendering it by using 
// customrender function 