import React from 'react'
import {useNavigate} from 'react-router-dom'

const Home = () => {
    let history = useNavigate()
  return (
    <div>
      <h4>Welcome To Home</h4>
      <button onClick={()=> history('./dashboard')}>Login</button>
    </div>
  )
}

export default Home
