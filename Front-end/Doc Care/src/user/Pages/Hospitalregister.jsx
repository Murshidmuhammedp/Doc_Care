import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { districts, states } from '../Components/State_district'
import toast from 'react-hot-toast';
import { customAxios } from '../../confiq/axios';
import { useNavigate } from 'react-router-dom';


function Hospitalregister() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        License_number: "",
        Hospital_name: "",
        Email: "",
        Phone_Number: "",
        Address: "",
        City: "",
        District: "",
        State: "",
        Pincode: "",
        image: "",
        Password: "",
    });
    const [CPassword, setCPassword] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((state) => ({
            ...state,
            [id]: value
        }));
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData({
                ...formData,
                image: file
            });
        }
    };

    const hospitalregistration = async (e) => {
        e.preventDefault()
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        if (formData.Password === CPassword) {
            await customAxios.post('', formData, config)
                .then((result) => {
                    toast.success(result.data.message);
                    navigate('/forbusiness')
                }).catch((error) => {
                    console.log(error);
                    toast.error(error.response.data.message);
                });
        } else {
            toast.error("Password not match")
        }
    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-200">
                <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md hover:shadow-xl w-full mt-6">
                    <h2 className="text-2xl font-bold mb-12 text-center">HOSPITAL REGISTRATION</h2>
                    <form onSubmit={hospitalregistration}>
                        <div className="md:flex md:flex-wrap -mx-3 mb-6">
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="License_number">
                                    Hospital License No :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="License_number"
                                    type="text"
                                    placeholder="License number"
                                    required
                                    value={formData.License_number}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="Hospital_name">
                                    Hospital Name :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Hospital_name"
                                    type="text"
                                    placeholder="Hospital name"
                                    required
                                    value={formData.Hospital_name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Email">
                                    Email :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Email"
                                    type="email"
                                    placeholder="E-mail"
                                    required
                                    value={formData.Email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Phone_Number">
                                    Phone Number :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Phone_Number"
                                    type="text"
                                    placeholder="Phone number"
                                    required
                                    value={formData.Phone_Number}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Address">
                                    Address :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Address"
                                    type="text"
                                    placeholder="Address"
                                    required
                                    value={formData.Address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="City">
                                    City
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="City"
                                    type="text"
                                    placeholder="City"
                                    required
                                    value={formData.City}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="District">
                                    District :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="District"
                                    required
                                    value={formData.District}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select District</option>
                                    {formData.State && districts[formData.State].map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="State">
                                    State :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="State"
                                    required
                                    value={formData.State}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select state</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Pincode">
                                    Pincode :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Pincode"
                                    type="tel"
                                    placeholder="Pincode"
                                    required
                                    value={formData.Pincode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Image">
                                    Upload Hospital Photo :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Image"
                                    type="file"
                                    placeholder="Upload Photo"
                                    required
                                    onChange={handleImageChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Password">
                                    Password :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Password"
                                    type="password"
                                    placeholder="Password"
                                    required
                                    value={formData.Password}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="confirmPassword">
                                    Confirm Password :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="confirmPassword"
                                    type="password"
                                    placeholder="Confirm Password"
                                    required
                                    value={CPassword}
                                    onChange={e => setCPassword(e.target.value)}
                                />
                            </div>
                        </div>
                        <div className="flex items-center justify-center">
                            <button
                                className="mt-8 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit"
                            >
                                Register
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default Hospitalregister