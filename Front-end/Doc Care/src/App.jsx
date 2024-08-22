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
import AdminLogin from './admin/Login'
import AdminHomepage from './admin/Homepage'
import Userlist from './admin/User\'slist'
import Doctorlist from './admin/Doctorlist'
import Pendingrequest from './admin/Pendingrequest'
import Blooddonor from './admin/Blooddonor\'s'
import Viewdoctors from './user/Components/Viewdoctors'
import DoctorhomePage from '../src/doctor/DoctorHomePage';
import Doctorappointment from './user/Components/Doctorappointment'
import Appointments from './doctor/Appointments'
import Previoueappoint from './doctor/Previoueappoint'
import Profile from './doctor/Profile'
import Userprofile from './user/Components/Userprofile'
import Previousbooking from './user/Components/Previousbooking'

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
        <Route path='/admin/login' element={<AdminLogin />}></Route>
        <Route path='/admin/home/dashboard' element={<AdminHomepage />}></Route>
        <Route path='/admin/userlist' element={<Userlist />}></Route>
        <Route path='/admin/doctorlist' element={<Doctorlist />}></Route>
        <Route path='/admin/pendingrequest' element={<Pendingrequest />}></Route>
        <Route path='/admin/blooddonors' element={<Blooddonor />}></Route>
        <Route path='/viewdoctors' element={<Viewdoctors />}></Route>
        <Route path='/doctor/homepage' element={<DoctorhomePage />}></Route>
        <Route path='/doctor/appointment' element={<Doctorappointment />}></Route>
        <Route path='/doctor/appointments' element={<Appointments />}></Route>
        <Route path='/doctor/previousappointment' element={<Previoueappoint />}></Route>
        <Route path='/doctor/profile' element={<Profile />}></Route>
        <Route path='user/profile' element={<Userprofile />}></Route>
        <Route path='user/bookings' element={<Previousbooking />}></Route>
      </Routes>
    </div>
  )
}

export default App
