import React, { useState } from 'react'
import Navbar from '../Components/Navbar'
import { districts, states } from '../Components/State_district'


function Hospitalregister() {

    const [state, setState] = useState("");
    const specialization = ["Cardiology", "Dermatology", "Neurology", "Pediatrics", "Orthopedic", "General medicine", "Opthalmology", "Psychiatry", "ENT", "Gynaecology", "Sexology", "General physician", "Urology", "Dental", "General surgery", "Stomach & digestion"];


    const hospitalregistration = () => {

    };

    return (
        <>
            <Navbar />
            <div className="flex items-center justify-center min-h-screen bg-gray-200">
                <div className="max-w-4xl bg-white p-8 rounded-lg shadow-md hover:shadow-xl w-full mt-6">
                    <h2 className="text-2xl font-bold mb-12 text-center">Hospital Registration</h2>
                    <form onSubmit={hospitalregistration}>
                        <div className="md:flex md:flex-wrap -mx-3 mb-6">
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="licenseNumber">
                                    Hospital License No :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="licenseNumber"
                                    type="text"
                                    placeholder="License number"
                                    required
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left" htmlFor="hospitalName">
                                    Hospital Name :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="hospitalName"
                                    type="text"
                                    placeholder="Hospital name"
                                    required
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
                                    placeholder="E-mail"
                                    required
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="phone">
                                    Phone Number :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone"
                                    type="text"
                                    placeholder="Phone number"
                                    required
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="phone1">
                                    Phone Number 2 :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="phone1"
                                    type="text"
                                    placeholder="Phone number"
                                    required
                                />
                            </div>
                            {/* <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="specialization">
                                    Specialization :
                                </label>
                                <select
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="specialization"
                                    required
                                >
                                    <option value="">Select specialization</option>
                                    {specialization.map((value, index) => (
                                    <option value={value}>{value}</option>
                                     ))} 
                                </select>
                            </div> */}
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="address">
                                    Address :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="address"
                                    type="text"
                                    placeholder="Address"
                                    required
                                />
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="city">
                                    City
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="city"
                                    type="text"
                                    placeholder="City"
                                    required
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

                                >
                                    <option value="">Select District</option>
                                    {state && districts[state].map((district) => (
                                        <option value={district}>{district}</option>
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
                                    value={state}
                                    onChange={(e) => setState(e.target.value)}
                                >
                                    <option value="">Select state</option>
                                    {states.map((state, index) => (
                                        <option key={index} value={state}>{state}</option>
                                    ))}
                                </select>
                            </div>
                            <div className="md:w-1/2 px-3 mb-4 md:mb-0">
                                <label className="block text-gray-700 text-sm font-bold mb-2 text-left mt-1" htmlFor="password">
                                    Password :
                                </label>
                                <input
                                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                    id="password"
                                    type="password"
                                    placeholder="Password"
                                    required
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