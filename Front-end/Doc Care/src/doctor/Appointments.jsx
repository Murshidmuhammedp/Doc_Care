import React, { useEffect, useState } from 'react'
import Sidebardoc from './Sidebardoc';
import Navbardoctor from './Navbardoctor';
import { customAxios } from '../confiq/axios';

function Appointments() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [datas, setDatas] = useState([]);
    const headline = ["Sl. No", "Patient Name", "Phone Number", "Time", "Status", "Action"]

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    const docId = localStorage.getItem('docId')

    useEffect(() => {
        const Appointment = async () => {
            await customAxios.get(`/user/api/doctor/appointments/${docId}`)
                .then((result) => {
                    setDatas(result.data.data.booking)
                    console.log(result.data.data.booking);
                }).catch((error) => {
                    console.log(error);
                });
        }
        Appointment()
    }, [])

    console.log(datas, "vannkn");
    return (
        <>
            <div className="flex">
                <Sidebardoc sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Navbardoctor />
                    <div className="p-4">

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
                                    {datas?.map((data, index) => (
                                        <tr key={index}>
                                            <td className="py-2 px-4 border-b">{index + 1}</td>
                                            <td className="py-2 px-4 border-b">{data.patient_name}</td>
                                            <td className="py-2 px-4 border-b">{data.contact_number}</td>
                                            <td className="py-2 px-4 border-b">{data.time}</td>
                                            <td className="py-2 px-4 border-b">{data.status}</td>
                                            <td className="py-2 px-4 border-b">{ }</td>
                                            <td className="py-2 px-4 border-b">
                                                <button
                                                // onClick={() => toggleBlock()}
                                                // className={`py-1 px-3 rounded ${user.isDeleted ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'
                                                //     } text-white`}
                                                >
                                                    {/* {user.isDeleted ? 'Unblock' : 'Block'} */}
                                                </button>
                                            </td>
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

export default Appointments