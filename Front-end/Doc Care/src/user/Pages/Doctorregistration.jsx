import React from 'react';
import Navbar from '../Components/Navbar';

function Registrationform() {

    const state = ["Kerala", "Chhattisgarh", "Bihar", "Maharashtra", "Andhra Pradesh", "Mizoram", "Punjab", "Karnataka", "West Bengal", "Haryana", "Manipur", "Himachal Pradesh", "Goa", "Arunachal Pradesh", "Assam", "Gujarat", "Telangana", "Rajasthan", "Madhya Pradesh", "Tamil Nadu", "Nagaland", "Odisha", "Jharkhand", "Meghalaya", "Delhi", "Tripura", "Uttar Pradesh", "Jammu & Kashmir", "Sikkim", "Uttarakhand"];
    const specialization = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedic", "General medicine", "Opthalmology", "Psychiatry", "ENT", "Gynaecology", "Sexology", "General physician", "Urology", "Dental", "General surgery", "Stomach & digestion"];
    const doctorregistration = () => {

    }
    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center h-[649px] bg-gray-200">
                <div className="w-[1060px] bg-white p-8 rounded-lg shadow-md flex-wrap hover:shadow-xl">
                    <h2 className="text-2xl font-bold mb-12 text-center">Doctor Registration</h2>
                    <form onSubmit={doctorregistration}>

                        <div className='float-left  w-[500px] h-[300px] '>
                            <div className="display-flex justify-start	 mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="doctorId">
                                    Doctor ID
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="doctorId"
                                    type="text"
                                    placeholder="Enter doctor ID"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="name">
                                    Full Name
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="name"
                                    type="text"
                                    placeholder="Enter full name"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="email"
                                    type="email"
                                    placeholder="Enter email"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="phone">
                                    Phone Number
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    type="text"
                                    placeholder="Enter phone number"
                                    required
                                />
                            </div>
                            <div className="float-'left' mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="gender">
                                    Gender
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="gender" required
                                >
                                    <option value="">Select Gender</option>
                                    <option value="New York">Male</option>
                                    <option value="Houston">Female</option>
                                </select>
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="specialization">
                                    Specialization
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="specialization" required
                                >
                                    <option value="">Select specialization</option>
                                    {specialization.map((value, index) => (
                                        <option key={index} value={value}>{value}</option>
                                    ))}
                                </select>
                            </div>
                        </div>


                        <div className='w-[1000px] h-[300px] '>

                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="experience">
                                    Experience
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="experience"
                                    type="number"
                                    placeholder="Enter years of experience"
                                    required
                                />
                            </div>

                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="address">
                                    Address
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="address"
                                    type="text"
                                    placeholder="Enter address"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="city">
                                    City
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="city" required
                                >
                                    <option value="">Select city</option>
                                    <option value="New York">New York</option>
                                    <option value="Los Angeles">Los Angeles</option>
                                    <option value="Chicago">Chicago</option>
                                    <option value="Houston">Houston</option>
                                    <option value="Phoenix">Phoenix</option>
                                </select>
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="state">
                                    State
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="state" required
                                >
                                    <option value="">Select state</option>
                                    {state.map((text, index) => (
                                        <option key={index} value={text}>{text}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="password">
                                    Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700  leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                            <div className="mb-4 flex items-center">
                                <label className="w-1/3 text-gray-700 text-sm font-bold" htmlFor="confirm password">
                                    Confirm Password
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-2/3 py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                    id="confirm password"
                                    type="password"
                                    placeholder="Enter password"
                                    required
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <button
                                className="mt-[50px] ml-[430px] w-[150px] bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
