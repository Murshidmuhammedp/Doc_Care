import { Route, Routes } from 'react-router-dom'
import './App.css'
import Loginpage from './user/Pages/Loginpage'
import Registrationpage from './user/Pages/Registrationpage'

function App() {

  return (
    <div>
      <Routes>
        <Route path='/login' element={<Loginpage />}></Route>
        <Route path='/registration' element={<Registrationpage />}></Route>
      </Routes>
    </div>
  )
}

export default App
