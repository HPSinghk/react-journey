import React,{useContext} from 'react'
import UserContext from '../Context/UserContext'
function Profile() {
    
    const {user} = useContext(UserContext)
    
    if(!user) return <div className='text-2xl text-center text-orange-700'> please login</div>
    return <div className='text-3xl text-center text-orange-700'>welcome: {user.username}</div>
   
}

export default Profile