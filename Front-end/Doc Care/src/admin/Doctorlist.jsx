import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Navbaradmin';
import { customAxios } from '../confiq/axios';
import { districts, specializations } from '../user/Components/State_district';

function Doctorlist() {
    const [gender, setGender] = useState("")
    const [specialization, setSpecialization] = useState("")
    const [district, setDistrict] = useState("")
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [doctorlist, setdoctorlist] = useState([])

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const docotorList = async () => {
            try {
                const result = await customAxios.get(`/admin/api/doctors/view/data?gender=${gender}&specialization=${specialization}&district=${district}`);
                setdoctorlist(result.data.data);
            } catch (error) {
                console.log(error);
            }
        }
        docotorList()
    }, [gender, specialization, district])
    return (
        <>

            <div className="flex">
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Nav />
                    <div className="p-4">

                        <div className='mt-8 w-full h-[40px] bg-gray-400 gap-7 flex justify-items-center px-10'>
                            <select className='h-full p-2 bg-gray-300 border-gray-300 rounded' onChange={e => setGender(e.target.value)}>
                                <option value="">Select Gender</option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                            </select>

                            <select className='h-full p-2 bg-gray-300 border-gray-300 rounded' onChange={e => setSpecialization(e.target.value)}>
                                <option value="">Select Specialization</option>
                                {specializations.map((value, index) => (
                                    <option key={index} value={value}>{value}</option>
                                ))}
                            </select>

                            <select className='h-full p-2 bg-gray-300 border-gray-300 rounded' onChange={e => setDistrict(e.target.value)}>
                                <option value="">Select District</option>
                                {districts["Kerala"].map((district, index) => (
                                    <option key={index} value={district}>{district}</option>
                                ))}
                            </select>
                        </div>

                        <div className='bg-gray-100 py-5'>
                            {doctorlist && doctorlist.map(item => {
                                return (
                                    <div key={item._id} className="bg-white shadow-xl flex flex-col md:flex-row mb-5 text-start md:h-auto w-full md:w-[1000px] mx-auto md:m-5 rounded-lg overflow-hidden">
                                        <figure className="w-full md:w-1/3 flex justify-center items-center p-5 md:p-0">
                                            <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg mx-auto hover:shadow-md">
                                                <img src={item.Image} alt="" className="w-full h-full object-cover cursor-pointer" />
                                            </div>
                                        </figure>
                                        <div className="w-full md:w-2/3 p-5 md:p-8 flex flex-col justify-center">
                                            <h2 className="text-2xl text-blue-500 mb-2">Dr. {item.full_Name}</h2>
                                            <p className="text-md text-black mb-1">{item.specialization}</p>
                                            <p className="text-md text-blue-800 mb-1">{item.experience} Years experience</p>
                                            <p className="text-md font-semibold text-black mb-1">{item.district}</p>
                                            <p className="text-md font-semibold text-black mb-1">{item.consultation_Address}</p>
                                            <p className="text-md text-black">₹{item.consultation_Fee} Consultation Fee</p>
                                            <div className="mt-[-50px] flex justify-end">
                                                <button
                                                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                                    onClick={() => handleBookingClick(item)}
                                                >
                                                    Details
                                                </button>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctorlist