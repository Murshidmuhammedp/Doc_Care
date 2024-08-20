import React, { useState } from 'react'
import Navbar from './Navbar'
import { FaClock, FaCalendarAlt } from 'react-icons/fa';
import { useLocation, useNavigate } from 'react-router-dom'
import { format } from 'date-fns';
import { customAxios } from '../../confiq/axios';
import toast from 'react-hot-toast';

function Doctorappointment() {

    const location = useLocation();
    const navigate = useNavigate();
    const { doctor, date, time } = location.state;

    const formatDate = format(new Date(date), 'PP')


    const [name, setName] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const doctorId = doctor._id;
    let userId = localStorage.getItem("userId")

    const handleSubmit = async (e) => {
        e.preventDefault();
        await customAxios.post(`/user/api/doctor/${doctorId}/appointment/booking/${userId}`, { name, phoneNumber, date: formatDate, time })
            .then((response) => {
                toast.success(response.data.message);
                navigate('/category')
            }).catch((error) => {
                console.error("Booking failed:", error);
                toast.error("Failed to book the appointment. Please try again.");
            });
    };

    return (
        <>
            <Navbar />
            <div className="flex justify-center items-center p-10 bg-gray-100 min-h-screen">
                <div className="w-full max-w-4xl bg-white shadow-md rounded-lg p-6 flex flex-col md:flex-row mt-[-200px]">
                    <div className='w-full md:w-1/2 h-full pr-3 mb-6 md:mb-0'>
                        <h2 className="text-xl font-semibold text-center mb-4 border-b border-gray-300 pb-2">Appointment Confirmation</h2>
                        <div className="flex justify-between items-center mb-6 border-b border-gray-300 pb-2">
                            <div className="flex items-center">
                                <FaClock className="mr-2 text-gray-500" />
                                <span className="text-lg">{time}</span>
                            </div>
                            <div className="flex items-center">
                                <FaCalendarAlt className="mr-2 text-gray-500" />
                                <span className="text-lg">{formatDate}</span>
                            </div>
                        </div>
                        <div className="flex items-center">
                            <img
                                src={doctor.Image}
                                alt={doctor.full_Name}
                                className="w-28 h-28 object-cover mr-4"
                            />
                            <div>
                                <h3 className="text-xl font-medium text-blue-400">Dr.{doctor.full_Name}</h3>
                                <p className="text-gray-600">{doctor.specialization}</p>
                                <p className="text-gray-600">{doctor.experience} years of experience</p>
                                <p className="text-gray-600">{doctor.consultation_Address}, {doctor.district}</p>
                                <p className="text-gray-600">Consultation Fee: ₹{doctor.consultation_Fee}</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-full md:w-1/2 h-full pl-3 border-l border-gray-200">
                        <h2 className="text-xl font-semibold text-center mb-4 border-b border-gray-300 pb-2">Patient Details</h2>
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label className="block text-gray-700 mb-2 text-left" htmlFor="name">
                                    Patient Name :
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    placeholder='Patient Name'
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                />
                            </div>
                            <div>
                                <label className="block text-gray-700 mb-2 text-left" htmlFor="phoneNumber">
                                    Phone Number :
                                </label>
                                <input
                                    type="tel"
                                    id="phoneNumber"
                                    placeholder='Phone Number'
                                    className="w-full p-2 border border-gray-300 rounded-md"
                                    value={phoneNumber}
                                    onChange={(e) => setPhoneNumber(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                            >
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Doctorappointment