import React, { useEffect, useState } from 'react'
import Sidebardoc from './Sidebardoc';
import Navbardoctor from './Navbardoctor';
import { customAxios } from '../confiq/axios';
import toast from 'react-hot-toast';

function Previoueappoint() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const headline = ["Sl. No", "Patient Name", "Phone Number", "Time", "Status"]
    const docId = localStorage.getItem('docId')
    const [datas, setDatas] = useState([]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
   
    useEffect(() => {
        const previous = async () => {
            await customAxios.get(`/user/api/doctor/previousappointment/${docId}`)
                .then((result) => {
                    setDatas(result.data.data)
                    toast.success(result.data.message)
                    console.log(result);
                }).catch((error) => {
                    toast.error(error.response.data.message)
                    console.log(error);
                })
        }
        previous()
    });

    return (
        <>
            <div className="flex">
                <Sidebardoc sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Navbardoctor />
                    <div className="p-4">

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
                                    {datas?.map((data, index) => (
                                        <tr>
                                            <td className="py-2 px-4 border-b">{1}</td>
                                            <td className="py-2 px-4 border-b">{data.patient_name}</td>
                                            <td className="py-2 px-4 border-b">{data.contact_number}</td>
                                            <td className="py-2 px-4 border-b">{data.time}</td>
                                            <td className="py-2 px-4 border-b">{data.status}</td>
                                            <td className="py-2 px-4 border-b">{ }</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Previoueappoint