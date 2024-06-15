import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import CreatePirate from './views/CreatePirate'
import PirateDetails from './views/PirateDetails'
import Dashborad from './views/Dashborad'

function App() {
  return (
    <>
    <BrowserRouter> 
    <Routes>
      <Route exact path='/' element={<Dashborad />} />
      <Route path='/pirates' element={<Home />} />
      <Route path='/pirate/new' element={ <CreatePirate /> } />
      <Route path='/pirate/:id' element={ <PirateDetails /> } />
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
