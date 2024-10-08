import React, { useEffect, useState } from 'react'
import Sidebardoc from './Sidebardoc';
import Navbardoctor from './Navbardoctor';
import { customAxios } from '../confiq/axios';
import toast from 'react-hot-toast';

function Previoueappoint() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const headline = ["Sl. No", "Patient Name", "Phone Number", "Date", "Time", "Status"]
    const docId = localStorage.getItem('docId')
    const [datas, setDatas] = useState([]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const previous = async () => {
            await customAxios.get(`/user/api/doctor/appointment/previous/${docId}`)
                .then((result) => {
                    setDatas(result.data.data)
                }).catch((error) => {
                    toast.error(error.response.data.message)
                    console.log(error);
                })
        }
        previous()
    }, [docId]);

    return (
        <>
            <div className="flex">
                <Sidebardoc sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Navbardoctor />
                    <div className="p-4">

                        {datas.length > 0 ? (
                            <div className="bg-white shadow-md rounded-lg p-6">
                                <h3 className="text-xl font-bold mb-4">Previous Appointments</h3>
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
                                                    <td className="py-2 px-4 border-b">{formattedDate}</td>
                                                    <td className="py-2 px-4 border-b">{data.time}</td>
                                                    <td className={`py-2 px-4 border-b font-semibold ${data.status === "Rejected" ? "text-red-500" : data.status === "Checked" ? "text-blue-600" : ""}`}>{data.status}</td>
                                                </tr>
                                            );
                                        })}
                                    </tbody>
                                </table>
                            </div>
                        ) : (<div className="flex justify-center items-center h-full">
                            <div className="text-center p-10 bg-gray-100 shadow-lg rounded-lg">
                                <h1 className="text-4xl font-semibold text-gray-800 mb-4">No Previous Appointments</h1>
                                <p className="text-gray-600 text-lg">You have no previous appointments. Please check back later..</p>
                            </div>
                        </div>)}
                    </div>
                </div>
            </div>
        </>
    )
}

export default Previoueappoint