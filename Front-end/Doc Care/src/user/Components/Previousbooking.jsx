import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { customAxios } from '../../confiq/axios'

function Previousbooking() {

    const [bookings, setBookings] = useState([])
    let userId = localStorage.getItem("userId")

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await customAxios.get(`/user/api/previous/booking/${userId}`);
                setBookings(response.data.data)
            } catch (error) {
                console.error(error, "error previous bookings");
            }
        }
        fetchData();
    }, [])
    return (
        <>
            <Navbar />
            <div className='bg-gray-100 py-5'>
            {bookings?.map((data, index) => (
                <div key={index} className="bg-white shadow-xl flex flex-col md:flex-row mb-5 text-start md:h-auto w-full md:w-[1000px] mx-auto md:m-5 rounded-lg overflow-hidden">
                    <figure className="w-full md:w-1/3 flex justify-center items-center p-5 md:p-0">
                        <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg mx-auto hover:shadow-md">
                            <img src={data.doctorId.Image} alt="" className="w-full h-full object-cover cursor-pointer" />
                        </div>
                    </figure>
                    <div className="w-full md:w-2/3 p-5 md:p-8 flex flex-col justify-center">
                        <h2 className="text-xl text-blue-500 mb-2">Dr. {data.doctorId.full_Name}</h2>
                        <p className="text-md text-black mb-1">{ }</p>
                        <p className="text-md text-blue-800 mb-1">Patient Name : {data.patient_name}</p>
                        <p className="text-md font-semibold text-black mb-1">Date : {data.date}</p>
                        <p className="text-md font-semibold text-black mb-1">Time : {data.time}</p>
                        <p className="text-md font-semibold text-black mb-1">Status : {data.status}</p>
                        <p className="text-md text-black">Consultation Fee : ₹{data.doctorId.consultation_Fee}</p>
                    </div>
                </div>
            ))}
            </div>
        </>
    )
}

export default Previousbooking