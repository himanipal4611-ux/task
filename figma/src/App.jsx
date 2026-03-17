import { Award } from './component/Award'
import { Business } from './component/Business'
import { Choose } from './component/Choose'
import { Customized } from './component/Customized'
import { Dealing } from './component/Dealing'
import Development from './component/Development'
import { Features } from './component/Features'
import Footers from './component/Footers'
import Home from './component/Home'
import Level from './component/Level'
import { Mobileapp } from './component/Mobileapp'
import Navbar from './component/Navbar'
import { Portfolio } from './component/Portfolio'
import Section from './component/Section'
import { Services } from './component/Services'
import { Trust } from './component/Trust'
// import { Footer} from './component/Footer'



const App = () => { 
  return (
    <>
      <Navbar/> 
      <Home/> 
      <Mobileapp/>
      <Level/>
      <Services/>
      <Development/>
      <Section/>
      <Portfolio/>  
      <Dealing/>
      <Award/>
      <Trust/>
      <Features/>
      <Customized/>
      <Choose/>
      <Business/>
      <Footers/>
    </>
  )
}

export default App
