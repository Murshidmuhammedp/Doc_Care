import React, { useEffect, useState } from 'react'
import Sidebardoc from './Sidebardoc';
import Navbardoctor from './Navbardoctor';
import { customAxios } from '../confiq/axios';
import toast from 'react-hot-toast';

function Appointments() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [datas, setDatas] = useState([]);
    const headline = ["Sl. No", "Patient Name", "Phone Number", "Time", "Status", "Action"]

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

    const [open, setOpen] = useState(false);
    // const [anchorEl, setAnchorEl] = useState(null);

    const handlePopoverOpen = (event) => {
        // setAnchorEl(event.currentTarget);
        setOpen(true);
    };

    const handlePopoverClose = () => {
        // setAnchorEl(null);
        setOpen(false);
    };
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
                                            <td className="py-2 px-4 border-b">
                                                {/* <button
                                                onClick={() => toggleBlock()}
                                                >
                                                </button> */}
                                                <div className="relative ">
                                                    {/* Tooltip with IconButton */}
                                                    <button
                                                        onClick={handlePopoverOpen}
                                                        className="text-blue-500 transition-transform duration-200 hover:scale-110"
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
                                                                d="M4 6h16M4 12h16m-7 6h7"
                                                            />
                                                        </svg>
                                                    </button>

                                                    {/* Popover */}
                                                    {open && (
                                                        <div
                                                            className="absolute mt-2 bg-white border rounded shadow-lg w-52"
                                                            style={{ top: '100%', left: 0 }}
                                                            onMouseLeave={handlePopoverClose}
                                                        >
                                                            <div className="p-4">
                                                                <h6 className="text-lg font-semibold mb-2">Actions</h6>
                                                                <hr className="mb-2" />
                                                                <ul>
                                                                    <li
                                                                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                                                                        onClick={() => handleApprove(data._id)}
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="h-6 w-6 text-green-500 mr-2"
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
                                                                        <span>Approve</span>
                                                                    </li>
                                                                    <li
                                                                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                                                                        onClick={() => handleReject(data._id)}
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="h-6 w-6 text-red-500 mr-2"
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
                                                                        <span>Reject</span>
                                                                    </li>
                                                                    {/* <hr className="my-2" />
                                                                    <li
                                                                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                                                                        onClick={() => handleDetails(user._id)}
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="h-6 w-6 text-blue-500 mr-2"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M13 16h-1v-4h-1m1-4h.01"
                                                                            />
                                                                        </svg>
                                                                        <span>Details</span>
                                                                    </li> */}
                                                                    {/* <li
                                                                        className="flex items-center cursor-pointer hover:bg-gray-100 p-2 rounded"
                                                                        onClick={() => nav(`/admineditorowners/${user._id}`)}
                                                                    >
                                                                        <svg
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            className="h-6 w-6 text-blue-500 mr-2"
                                                                            fill="none"
                                                                            viewBox="0 0 24 24"
                                                                            stroke="currentColor"
                                                                        >
                                                                            <path
                                                                                strokeLinecap="round"
                                                                                strokeLinejoin="round"
                                                                                strokeWidth={2}
                                                                                d="M12 20h9M3 20h6M4 4h16v16H4V4z"
                                                                            />
                                                                        </svg>
                                                                        <span>Edit</span>
                                                                    </li> */}
                                                                </ul>
                                                            </div>
                                                        </div>
                                                    )}
                                                </div>

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