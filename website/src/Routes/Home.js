import React from 'react'
import Navbar from '../Comonents/Navbar'
import Landing from '../Comonents/Landing'
import Farming from '../Comonents/Farming'
import Enthusiastic from '../Comonents/Enthusiastic'
import Pfaqs from '../Comonents/Pfaqs'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <Landing/>
        <Farming/>
        <Enthusiastic/>
        <Pfaqs/>
    </div>
  )
}

export default Home