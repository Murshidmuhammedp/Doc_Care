import React, { useEffect, useState } from 'react'
import Sidebar from './Sidebar'
import Nav from './Navbaradmin'
import { customAxios } from '../confiq/axios';
import toast from 'react-hot-toast';

function Pendingrequest() {

    const categories = ["Doctor", "Hospital", "Pharmacy"]
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    const [selectedCategory, setSelectedCategory] = useState('Doctor');
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchdata = async () => {
            await customAxios.get(`/admin/api/workers/${selectedCategory}/pendingrequest`)
                .then((result) => {
                    console.log(result.data.data);
                    setData(result.data.data)
                }).catch((error) => {
                    console.log(error);
                })
        }
        fetchdata();
    }, []);

    const rejectDoctor = async (id) => {
        await customAxios.delete(`/admin/api/workers/${selectedCategory}/rejected/${id}`)
            .then((result) => {
                toast.success(result.data.message)
            }).catch((error) => {
                console.log(error);
            })
    };

    const approvelDoctor = async (id) => {
        await customAxios.patch(`/admin/api/workers/${selectedCategory}/approved/${id}`)
            .then((result) => {
                console.log(result);
                toast.success(result.data.message)
            }).catch((error) => {
                console.log(error);
            })
    };

    const handleCategoryChange = (category) => {
        setSelectedCategory(category)
    };

    return (
        <>
            <div className="flex">
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Nav />
                    <div className="p-4">

                        <div className="min-h-screen bg-gray-100 py-8 px-4">
                            <h1 className="text-3xl font-bold text-center mb-6">Category Page</h1>
                            <div className="flex justify-center mb-6 space-x-4">
                                {categories.map((category) => (
                                    <button
                                        key={category}
                                        onClick={() => handleCategoryChange(category)}
                                        className={`py - 2 px - 4 rounded - lg font - semibold transition - colors duration - 300 ${selectedCategory === category
                                            ? 'bg-blue-500 text-white'
                                            : 'bg-white text-blue-500 border border-blue-500'
                                            } hover: bg-blue - 600 hover: text - white`}
                                    >
                                        {category}
                                    </button>
                                ))}
                            </div>

                            <div className="overflow-x-auto">
                                <table className="min-w-full bg-white border border-gray-200 rounded-lg shadow-md">
                                    <thead className="bg-blue-500 text-white">
                                        <tr>
                                            <th className="py-3 px-4 text-center">Sl. No</th>
                                            <th className="py-3 px-4 text-center">Name</th>
                                            <th className="py-3 px-4 text-center">Doctor Id</th>
                                            <th className="py-3 px-4 text-center">Specialization</th>
                                            <th className="py-3 px-4 text-center">Phone Number</th>
                                            <th className="py-3 px-4 text-left">Actions</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {data && data.map((item, index) => (
                                            <tr key={item._id} className="border-b hover:bg-gray-100">
                                                <td className="py-3 px-4">{index + 1}</td>
                                                <td className="py-3 px-4">{item.Full_Name}</td>
                                                <td className="py-3 px-4">{item.Doctor_ID}</td>
                                                <td className="py-3 px-4">{item.Specialization}</td>
                                                <td className="py-3 px-4">{item.Phone_Number}</td>
                                                <td className="py-3 px-4 flex space-x-2">
                                                    <button className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600" onClick={() => rejectDoctor(item._id)}>
                                                        Reject
                                                    </button>
                                                    <button className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600" onClick={() => approvelDoctor(item._id)}>
                                                        Approve
                                                    </button>
                                                    <button className="bg-blue-500 text-white px-3 py-1 rounded hover:bg-blue-600" onClick={() => detailspage(item._id)}>
                                                        Details
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
            </div>
        </>
    )
}

export default Pendingrequest