import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginpage from './user/Pages/Loginpage'
import Registrationpage from './user/Pages/Registrationpage'
import Homepage from './user/Pages/Homepage'
import Blooddonate from './user/Components/Blooddonate'
import Categorypage from './user/Components/Categorypage'
import Businessreg from './user/Components/Businesscategory'
import Doctorregistration from './user/Pages/Doctorregistration'
import Hospitalregister from './user/Pages/Hospitalregister'
import Doclogin from './user/Pages/businesslogin'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/registration' element={<Registrationpage />}></Route>
        <Route path='/blooddonate' element={<Blooddonate />}></Route>
        <Route path='/category' element={<Categorypage />}></Route>
        <Route path='/forbusiness' element={<Businessreg />}></Route>
        <Route path='/doctorregister' element={<Doctorregistration />}></Route>
        <Route path='/hospitalregister' element={<Hospitalregister />}></Route>
        <Route path='/forbusiness/doclogin' element={<Doclogin />}></Route>
      </Routes>
    </div>
  )
}

export default App
