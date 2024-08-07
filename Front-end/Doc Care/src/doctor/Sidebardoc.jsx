import React from 'react';
import { FaTachometerAlt, FaUsers, FaUserTie, FaRegStar, FaClipboardList, FaBell, FaSignOutAlt, FaBars, FaHandHoldingHeart } from 'react-icons/fa';
import { Link, useNavigate } from 'react-router-dom';

const Sidebardoc = ({ sidebarOpen, toggleSidebar }) => {

    const navigate = useNavigate();

    return (
        <div className={`bg-gray-100 text-gray-800 flex flex-col transition-width duration-300 ${sidebarOpen ? 'w-64' : 'w-20'} shadow-md `}>
            {/* Sidebar Header */}
            {sidebarOpen ? (
                <div className="p-4 text-center text-xl font-bold bg-gray-100 flex justify-between items-center">
                    <span style={{ fontFamily: 'inria-serif' }} className=" text-3xl font-bold text-blue-900 ">Doc Care</span>
                    <FaBars className="cursor-pointer text-gray-800" onClick={toggleSidebar} />
                </div>
            ) : (
                <div className="p-4 text-center text-xl font-bold bg-gray-100 flex justify-between items-center">
                    <FaBars className="cursor-pointer text-gray-800" onClick={toggleSidebar} />
                </div>
            )}
            {/* Sidebar Menu */}
            <ul className="list-none p-0 flex-1">
                <Link to={'/doctor/homepage'}>
                    <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        <FaTachometerAlt className="mr-4 text-gray-800" />
                        {sidebarOpen && <span className="w-full">Dashboard</span>}
                    </li>
                </Link>
                <Link to={'/doctor/profile'}>
                    <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        <FaUserTie className="mr-4 text-gray-800" />
                        {sidebarOpen && <span className="w-full">Profile</span>}
                    </li>
                </Link>
                <Link to={'/doctor/appointments'}>
                    <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        <FaUserTie className="mr-4 text-gray-800" />
                        {sidebarOpen && <span className="w-full">Appointments</span>}
                    </li>
                </Link>
                <Link to={'/doctor/previousappointment'}>
                    <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        <FaClipboardList className="mr-4 text-gray-800" />
                        {sidebarOpen && <span className="w-full">Appointment List</span>}
                    </li>
                </Link>
                {/* <Link to={'/admin/home/notification'}>
                    <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center">
                        <FaBell className="mr-4 text-gray-800" />
                        {sidebarOpen && <span className="w-full">Notification</span>}
                    </li>
                </Link> */}
                <li className="p-4 hover:bg-gray-200 cursor-pointer flex items-center" onClick={() => { navigate('/forbusiness/doclogin'); localStorage.clear(); }}>
                    <FaSignOutAlt className="mr-4 text-gray-800" />
                    {sidebarOpen && <span className="w-full">Logout</span>}
                </li>
            </ul>
        </div>
    );
}

export default Sidebardoc;
