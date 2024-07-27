import React, { useState } from 'react';
import Navbar from '../Components/Navbar';
import { districts, specializations, states } from '../Components/State_district'
import toast from 'react-hot-toast';
import { customAxios } from '../../confiq/axios';
import { useNavigate } from 'react-router-dom';

function Registrationform() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        doctor_ID: "",
        full_Name: "",
        email: "",
        phone_Number: "",
        gender: "",
        DOB: "",
        specialization: "",
        experience: "",
        consultation_Fee: "",
        consultation_Address: "",
        district: "",
        state: "",
        pincode: "",
        image: "",
        startTime: "",
        endTime: "",
        password: "",
    });
    const [confirmPassword, setconfirmPassword] = useState("");

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
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

    const doctorregistration = async (e) => {
        e.preventDefault();
        const config = {
            headers: {
                'Content-Type': 'multipart/form-data',
            }
        }
        const startTime = new Date(`1970-01-01T${formData.startTime}:00`);
        const endTime = new Date(`1970-01-01T${formData.endTime}:00`);
        if (formData.password === confirmPassword) {
            if (endTime >= startTime) {
                await customAxios.post('/user/api/doctor/register', formData, config)
                    .then((result) => {
                        toast.success(result.data.message);
                        navigate('/forbusiness')
                    }).catch((error) => {
                        console.log(error);
                        toast.error(error.response.data.message);
                    });
            } else {
                toast.error("End time must be after start time.")
            }
        } else {
            toast.error("Password not match")
        }
    };
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-200">
                <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md hover:shadow-xl w-full mt-6">
                    <h2 className="text-2xl font-bold mb-12 text-center">DOCTOR REGISTRATION</h2>
                    <form onSubmit={doctorregistration}>
                        <div className="md:flex md:flex-wrap -mx-3 mb-6">
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="doctor_ID">
                                    Doctor ID :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="doctor_ID"
                                    type="text"
                                    placeholder="Enter doctor ID"
                                    required
                                    value={formData.doctor_ID}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="full_Name">
                                    Full Name :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="full_Name"
                                    type="text"
                                    placeholder="Enter full name"
                                    required
                                    value={formData.full_Name}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="email">
                                    Email :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                    value={formData.email}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="phone_Number">
                                    Phone Number :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone_Number"
                                    type="text"
                                    placeholder="Enter phone number"
                                    required
                                    value={formData.phone_Number}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="gender">
                                    Gender :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="gender"
                                    required
                                    value={formData.gender}
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
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="specialization">
                                    Specialization :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="specialization"
                                    required
                                    value={formData.specialization}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select specialization</option>
                                    {specializations.map((value, index) => (
                                        <option key={index} value={value}>{value}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="experience">
                                    Experience :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="experience"
                                    type="number"
                                    placeholder="Enter years of experience"
                                    required
                                    value={formData.experience}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="consultation_Fee">
                                    Consultation Fee :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="consultation_Fee"
                                    type="text"
                                    placeholder="Enter Fee"
                                    required
                                    value={formData.consultation_Fee}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="consultation_Address">
                                    Consultation Address :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="consultation_Address"
                                    type="text"
                                    placeholder="Enter consultation Address"
                                    required
                                    value={formData.consultation_Address}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="district">
                                    District :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="district"
                                    required
                                    value={formData.district}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select district</option>
                                    {formData.state && districts[formData.state].map((district, index) => (
                                        <option key={index} value={district}>{district}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="state">
                                    State :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="state"
                                    required
                                    value={formData.state}
                                    onChange={handleInputChange}
                                >
                                    <option value="">Select state</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="pincode">
                                    Pincode :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="pincode"
                                    type="tel"
                                    placeholder="Enter Pincode"
                                    required
                                    value={formData.pincode}
                                    onChange={handleInputChange}
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="Image">
                                    Upload Photo :
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
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="startTime">
                                    Start Time :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="startTime"
                                    type="time"
                                    placeholder="Enter Start Time"
                                    required
                                    value={formData.startTime}
                                    onChange={handleInputChange}
                                />
                            </div>

                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="endTime">
                                    End Time :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="endTime"
                                    type="time"
                                    placeholder="Enter End Time"
                                    required
                                    value={formData.endTime}
                                    onChange={handleInputChange}
                                />
                            </div>


                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="password">
                                    Password :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                    value={formData.password}
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
