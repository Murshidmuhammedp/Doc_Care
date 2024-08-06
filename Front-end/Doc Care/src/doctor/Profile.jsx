import React, { useEffect, useState } from 'react'
import Sidebardoc from './Sidebardoc'
import Navbardoctor from './Navbardoctor'
import { customAxios } from '../confiq/axios';
import { FiEdit2 } from 'react-icons/fi';
import toast from 'react-hot-toast';

function Profile() {
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const docId = localStorage.getItem('docId')
    const [profile, setProfile] = useState("")
    const [isEditing, setIsEditing] = useState({
        image: false, email: false, phone_Number: false, consultation_Fee: false,
        consultation_Address: false, district: false, state: false, pincode: false,
        startTime: false, endTime: false
    });

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };

    useEffect(() => {
        const profile = async () => {
            try {
                const response = await customAxios.get(`/user/api/doctor/profile/${docId}`);
                setProfile(response.data.data)
            } catch (error) {
                console.log(error);
            }
        }
        profile();
    }, [])

    const handleEditToggle = (field) => {
        setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProfile((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async () => {
        await customAxios.put(``)
            .then((result) => {
                toast.success(result.data.message)
                console.log(result);
            }).catch((error) => {
                console.log(error);
            })
    };
    return (
        <>
            <div className="flex">
                <Sidebardoc sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Navbardoctor />
                    <div>

                        <div className="max-w-6xl mx-auto my-10 p-5 bg-gray-100 text-gray-800 shadow-lg rounded-lg">
                            <h1 className='font-bold text-4xl mb-5 text-center'>Profile</h1>
                            <div className="flex items-center space-x-6 mb-10">
                                <div className="relative">
                                    <img className="w-40 h-40 rounded-full object-cover border-4 border-gray-300" src={profile.Image} alt={`${profile.full_Name}'s profile`} />
                                    <FiEdit2 className="absolute top-0 right-0 text-gray-500 cursor-pointer bg-white rounded-full p-1" size={24} onClick={() => handleEditToggle('image')} />
                                    {isEditing.image && <input type="text" name="image" value={profile.image} onChange={handleChange} className="absolute top-0 left-0 w-full h-full opacity-0" />}
                                </div>
                                <div>
                                    <h2 className="text-3xl font-semibold">{profile.full_Name}</h2>
                                    <p className="text-gray-600">{profile.specialization}</p>
                                    <p className="text-gray-500">{profile.experience} years of experience</p>
                                </div>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Contact Information</h3>
                                    <div className="flex items-center space-x-2">
                                        <p><span className="font-semibold">Email: </span>{isEditing.email ?
                                            <input type="text" name="email" value={profile.email} onChange={handleChange} className="border p-1 rounded" /> :
                                            profile.email}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('email')} />
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <p><span className="font-semibold">Phone: </span>{isEditing.phone_Number ?
                                            <input type="text" name="phone_Number" value={profile.phone_Number} onChange={handleChange} className="border p-1 rounded" /> :
                                            profile.phone_Number}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('phone_Number')} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Personal Details</h3>
                                    <p><span className="font-semibold">Gender: </span>{profile.gender}</p>
                                    <p><span className="font-semibold">Date of Birth: </span>{profile.DOB}</p>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Consultation Details</h3>
                                    <div className="flex items-center space-x-2">
                                        <p><span className="font-semibold">Fee: </span>{isEditing.consultation_Fee ?
                                            <input type="text" name="consultation_Fee" value={profile.consultation_Fee} onChange={handleChange} className="border p-1 rounded" /> :
                                            `₹${profile.consultation_Fee}`}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('consultation_Fee')} />
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <p><span className="font-semibold">Address: </span>{isEditing.consultation_Address ?
                                            <input type="text" name="consultation_Address" value={profile.consultation_Address} onChange={handleChange} className="border p-1 rounded" /> :
                                            profile.consultation_Address}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('consultation_Address')} />
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <p><span className="font-semibold">District: </span>{isEditing.district ?
                                            <input type="text" name="district" value={profile.district} onChange={handleChange} className="border p-1 rounded" /> :
                                            profile.district}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('district')} />
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <p><span className="font-semibold">State: </span>{isEditing.state ?
                                            <input type="text" name="state" value={profile.state} onChange={handleChange} className="border p-1 rounded" /> :
                                            profile.state}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('state')} />
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <p><span className="font-semibold">Pincode: </span>{isEditing.pincode ?
                                            <input type="text" name="pincode" value={profile.pincode} onChange={handleChange} className="border p-1 rounded" /> :
                                            profile.pincode}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('pincode')} />
                                    </div>
                                </div>

                                <div>
                                    <h3 className="text-2xl font-semibold mb-3">Available Timings</h3>
                                    <div className="flex items-center space-x-2">
                                        <p><span className="font-semibold">Start Time: </span>{isEditing.startTime ?
                                            <input type="text" name="startTime" value={profile.startTime} onChange={handleChange} className="border p-1 rounded" /> :
                                            profile.startTime}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('startTime')} />
                                    </div>
                                    <div className="flex items-center space-x-2 mt-2">
                                        <p><span className="font-semibold">End Time: </span>{isEditing.endTime ?
                                            <input type="text" name="endTime" value={profile.endTime} onChange={handleChange} className="border p-1 rounded" /> :
                                            profile.endTime}</p>
                                        <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('endTime')} />
                                    </div>
                                </div>
                            </div>

                            <button
                                className="mt-10 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
                                onClick={handleSubmit}
                            >
                                Submit
                            </button>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default Profile