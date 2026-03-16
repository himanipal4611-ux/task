import React from 'react'
import Navbar from './component/Navbar'
import Home from './component/Home'
import  Development  from './component/Development'
import Section from './component/Section'
import { Portfolio } from './component/Portfolio'
import { Dealing } from './component/Dealing'
import { Award } from './component/Award'
import { Trust } from './component/Trust'
import { Features } from './component/Features'
import { Customized } from './component/Customized'
import { Choose } from './component/Choose'



const App = () => { 
  return (
    <>
      <Navbar/> 
      <Home/> 
      <Development/>
      <Section/>
      <Portfolio/>  
      <Dealing/>
      <Award/>
      <Trust/>
      <Features/>
      <Customized/>
      <Choose/>
    </>
  )
}

export default App
