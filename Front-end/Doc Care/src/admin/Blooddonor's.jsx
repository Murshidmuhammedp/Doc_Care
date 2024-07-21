import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Navbaradmin';

function Blooddonor() {
    const headline = ["Sl. No", "Name", "Blood Group", "Phone Number", "Account Create Date", "Action"]
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
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
                                    {/* {users.map((user, index) => ( */}
                                    <tr>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b"></td>
                                        <td className="py-2 px-4 border-b">
                                            <button
                                                onClick={() => toggleBlock()}
                                            // className={`py-1 px-3 rounded ${user.isDeleted ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'
                                            //     } text-white`}
                                            >
                                                {/* {user.isDeleted ? 'Unblock' : 'Block'} */}
                                            </button>
                                        </td>
                                    </tr>
                                    {/* ))} */}
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