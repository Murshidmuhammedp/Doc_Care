import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Navbaradmin';
import { customAxios } from '../confiq/axios';

function Blooddonor() {
    const headline = ["Sl. No", "Name", "Blood Group", "Gender", "Phone Number", "District"];
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [blooddonor, setblooddonor] = useState([]);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const donordashboard = async () => {
            const result = await customAxios.get('/admin/api/blood/donors')
            setblooddonor(result.data.data);
        }
        donordashboard();
    }, []);
    return (
        <>
            <div className="flex">
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Nav />
                    <div className="p-4">
                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4">Donor's List</h3>
                            <table className="min-w-full bg-white border-collapse">
                                <thead>
                                    <tr>
                                        {headline.map((title, index) => (
                                            <th key={index} className="py-2 px-4 border-b">{title}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {blooddonor.map((data, index) => {
                                        return (
                                            <tr key={index}>
                                                <td className="py-2 px-4 border-b">{index + 1}</td>
                                                <td className="py-2 px-4 border-b">{data.Name}</td>
                                                <td className="py-2 px-4 border-b">{data.Blood_group}</td>
                                                <td className="py-2 px-4 border-b">{data.Gender}</td>
                                                <td className="py-2 px-4 border-b">{data.Phone_number}</td>
                                                <td className="py-2 px-4 border-b">{data.District}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Blooddonor