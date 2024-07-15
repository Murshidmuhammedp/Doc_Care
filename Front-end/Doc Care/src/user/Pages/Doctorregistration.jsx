import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { districts, specializations, states } from '../Components/State_district'
import toast from 'react-hot-toast';
import { customAxios } from '../../confiq/axios';

function Registrationform() {

    const [formData, setFormData] = useState({
        Doctor_ID: "",
        Full_Name: "",
        Email: "",
        Phone_Number: "",
        Gender: "",
        DOB: "",
        Specialization: "",
        Experience: "",
        Address: "",
        Consultation_Address: "",
        District: "",
        State: "",
        Password: "",
    });
    const [confirmPassword, setconfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [id]: value
        }));
    };


    const doctorregistration = async (e) => {
        e.preventDefault();
        if (formData.Password === confirmPassword) {
            await customAxios.post('/user/api/doctor/register', formData)
                .then((result) => {
                    toast.success(result.data.message);
                }).catch((error) => {
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
                    <h2 className="text-2xl font-bold mb-12 text-center">Doctor Registration</h2>
                    <form onSubmit={doctorregistration}>
                        <div className="md:flex md:flex-wrap -mx-3 mb-6">
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="Doctor_ID">
                                    Doctor ID :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Doctor_ID"
                                    type="text"
                                    placeholder="Enter doctor ID"
                                    required
                                    value={formData.Doctor_ID}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="Full_Name">
                                    Full Name :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Full_Name"
                                    type="text"
                                    placeholder="Enter full name"
                                    required
                                    value={formData.Full_Name}
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
                                    placeholder="Enter email"
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
                                    placeholder="Enter phone number"
                                    required
                                    value={formData.Phone_Number}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Gender">
                                    Gender :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Gender"
                                    required
                                    value={formData.Gender}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select Gender</option>
                                    <option value="Male">Male</option>
                                    <option value="Female">Female</option>
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="DOB">
                                    DOB :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="DOB"
                                    type="date"
                                    placeholder="Enter Date of birth"
                                    required
                                    value={formData.DOB}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Specialization">
                                    Specialization :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Specialization"
                                    required
                                    value={formData.Specialization}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select specialization</option>
                                    {specializations.map((value, index) => (
                                        <option key={index} value={value}>{value}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Experience">
                                    Experience :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Experience"
                                    type="number"
                                    placeholder="Enter years of experience"
                                    required
                                    value={formData.Experience}
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
                                    placeholder="Enter address"
                                    required
                                    value={formData.Address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Consultation_Address">
                                    Consultation Address :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Consultation_Address"
                                    type="text"
                                    placeholder="Enter consultation Address"
                                    required
                                    value={formData.Consultation_Address}
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
                                    <option value="">Select district</option>
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
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Password">
                                    Password :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="Password"
                                    type="password"
                                    placeholder="Enter password"
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
                                    placeholder="Enter password"
                                    required
                                    value={confirmPassword}
                                    onChange={e => setconfirmPassword(e.target.value)}
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
    );
}

export default Registrationform;
