import React, { useEffect, useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Navbaradmin';
import { customAxios } from '../confiq/axios';
import toast from 'react-hot-toast';

function Userlist() {

    const [users, setUsers] = useState([]);
    const headline = ["Sl. No", "Name", "Email", "Phone Number", "Account Create Date", "Action"]
    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const fetchUsers = async () => {
            await customAxios.get('/admin/api/userdata')
                .then((result) => {
                    setUsers(result.data.data)
                }).catch((error) => {
                    console.log(error);
                })
        }
        fetchUsers();
    });


    const toggleBlock = async (id) => {
        await customAxios.patch(`/admin/api/blockandunblock/${id}`)
            .then((result) => {
                toast.success(result.data.message)
            }).catch((error) => {
                console.log(error);
            })
    };

    return (
        <>
            <div className="flex">
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Nav />
                    <div className="p-4">

                        <div className="bg-white shadow-md rounded-lg p-6">
                            <h3 className="text-xl font-bold mb-4">User's List</h3>
                            <table className="min-w-full bg-white border-collapse">
                                <thead>
                                    <tr>
                                        {headline.map((title, index) => (
                                            <th key={index} className="py-2 px-4 border-b">{title}</th>
                                        ))}
                                    </tr>
                                </thead>
                                <tbody>
                                    {users.map((user, index) => (
                                        <tr key={user._id}>
                                            <td className="py-2 px-4 border-b">{index + 1}</td>
                                            <td className="py-2 px-4 border-b">{user.username}</td>
                                            <td className="py-2 px-4 border-b">{user.email}</td>
                                            <td className="py-2 px-4 border-b">{user.phone_number}</td>
                                            <td className="py-2 px-4 border-b">{user.accountCreatedDate}</td>
                                            <td className="py-2 px-4 border-b">
                                                <button
                                                    onClick={() => toggleBlock(user._id)}
                                                    className={`py-1 px-3 rounded ${user.isDeleted ? 'bg-red-500 hover:bg-red-700' : 'bg-green-500 hover:bg-green-700'
                                                        } text-white`}
                                                >
                                                    {user.isDeleted ? 'Unblock' : 'Block'}
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

export default Userlist