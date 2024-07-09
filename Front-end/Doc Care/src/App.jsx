import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginpage from './user/Pages/Loginpage'
import Registrationpage from './user/Pages/Registrationpage'
import Homepage from './user/Pages/Homepage'
import Blooddonate from './user/Components/Blooddonate'
import Categorypage from './user/Components/Categorypage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Homepage />}></Route>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/registration' element={<Registrationpage />}></Route>
        <Route path='/blooddonate' element={<Blooddonate />}></Route>
        <Route path='/category' element={<Categorypage/>}></Route>
      </Routes>
    </div>
  )
}

export default App
