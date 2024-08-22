import React, { useEffect, useRef, useState } from 'react'
import Sidebardoc from './Sidebardoc';
import Navbardoctor from './Navbardoctor';
import { customAxios } from '../confiq/axios';
import toast from 'react-hot-toast';

function Appointments() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [datas, setDatas] = useState([]);
    const headline = ["Sl. No", "Patient Name", "Phone Number", "Time", "Date", "Status", "Action"]

    const handleApprove = async (Id) => {
        await customAxios.patch(`/user/api/doctor/appointment/approve/${Id}`)
            .then((response) => {
                toast.success(response.data.message)
            }).catch((error) => {
                console.log(error);
            });
    };

    const handleReject = async (Id) => {
        await customAxios.patch(`/user/api/doctor/appointment/reject/${Id}`)
            .then((response) => {
                toast.success(response.data.message)
            }).catch((error) => {
                console.log(error);
            });
    };

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const docId = localStorage.getItem('docId')

    useEffect(() => {
        const Appointment = async () => {
            await customAxios.get(`/user/api/doctor/appointments/${docId}`)
                .then((result) => {
                    setDatas(result.data.data)
                }).catch((error) => {
                    console.log(error);
                });
        }
        Appointment()
    }, [])


    return (
        <>
            <div className="flex">
                <Sidebardoc sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Navbardoctor />
                    <div className="p-4">

                        {datas.length > 0 ? (
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Appointments</h3>
                                <table className="min-w-full bg-white border-collapse">
                                    <thead>
                                        <tr>
                                            {headline.map((title, index) => (
                                                <th key={index} className="py-2 px-4 border-b">{title}</th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {datas?.map((data, index) => {
                                            const formattedDate = new Date(data.date).toLocaleDateString("en-US", {
                                                weekday: 'short',
                                                year: 'numeric',
                                                month: 'short',
                                                day: 'numeric'
                                            });
                                            return (
                                                <tr key={index}>
                                                    <td className="py-2 px-4 border-b">{index + 1}</td>
                                                    <td className="py-2 px-4 border-b">{data.patient_name}</td>
                                                    <td className="py-2 px-4 border-b">{data.contact_number}</td>
                                                    <td className="py-2 px-4 border-b">{data.time}</td>
                                                    <td className="py-2 px-4 border-b">{formattedDate}</td>
                                                    <td className="py-2 px-4 border-b">{data.status}</td>
                                                    <td className="py-2 px-4 border-b">
                                                        <div className="flex justify-center space-x-4">
                                                            <button
                                                                className="flex items-center justify-center bg-green-500 hover:bg-green-600 text-white w-12 h-12 rounded-full"
                                                                onClick={() => handleApprove(data._id)}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-6 w-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M9 12l2 2l4-4"
                                                                    />
                                                                </svg>
                                                            </button>
                                                            <button
                                                                className="flex items-center justify-center bg-red-500 hover:bg-red-600 text-white w-12 h-12 rounded-full"
                                                                onClick={() => handleReject(data._id)}
                                                            >
                                                                <svg
                                                                    xmlns="http://www.w3.org/2000/svg"
                                                                    className="h-6 w-6"
                                                                    fill="none"
                                                                    viewBox="0 0 24 24"
                                                                    stroke="currentColor"
                                                                >
                                                                    <path
                                                                        strokeLinecap="round"
                                                                        strokeLinejoin="round"
                                                                        strokeWidth={2}
                                                                        d="M6 18L18 6M6 6l12 12"
                                                                    />
                                                                </svg>
                                                            </button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (<div className="flex justify-center items-center h-full">
                            <div className="text-center p-10 bg-gray-100 shadow-lg rounded-lg">
                                <h1 className="text-4xl font-semibold text-gray-800 mb-4">No New Appointments</h1>
                                <p className="text-gray-600 text-lg">You currently have no new appointments. Please check back later.</p>
                            </div>
                        </div>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Appointments