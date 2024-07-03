import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginpage from './user/Pages/Loginpage'
import Registrationpage from './user/Pages/Registrationpage'
import Homepage from './user/Pages/Homepage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/' element={<Loginpage />}></Route>
        <Route path='/registration' element={<Registrationpage />}></Route>
        <Route path='/home' element={<Homepage />}></Route>
      </Routes>
    </div>
  )
}

export default App
