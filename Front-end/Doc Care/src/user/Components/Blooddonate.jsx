import React, { useState } from 'react';
import Navbar from './Navbar';
import { bloodGroups, districts, states } from './State_district';
import toast from 'react-hot-toast';
import { customAxios } from '../../confiq/axios';

function Blooddonate() {

    const [formData, setformData] = useState({
        Name: "",
        Blood_group: "",
        Email: "",
        Phone_number: "",
        District: "",
        State: ""
    });

    const handleInputChange = (e) => {
        const { id, value } = e.target;
        setformData((state) => ({
            ...state,
            [id]: value
        }));
    }

    const bloodRegistration = async (e) => {
        e.preventDefault()
        await customAxios.post('/user/api/bloodregister', formData)
            .then((result) => {
                toast.success(result.data.message)
            }).catch((error) => {
                toast.error(error.response.data.message)
            })
    };
    return (
        <>
            <Navbar />

            <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg w-full max-w-sm mx-4 ">
                <h2 style={{ fontFamily: 'inria-serif' }} className="text-3xl font-bold mb-6 text-center">Register</h2>
                <form onSubmit={bloodRegistration}>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className=" font-bold">Donor name</span>
                            </div>
                            <input
                                type="text"
                                id="Name"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="User name"
                                required
                                value={formData.Name}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="font-bold">Blood group</span>
                            </div>
                            <select className="h-[40px] w-full border 2px gray"
                                id='Blood_group'
                                required
                                value={formData.Blood_group}
                                onChange={handleInputChange}
                            >
                                <option>Select blood group</option>
                                {bloodGroups.map((blood, index) => (
                                    <option key={index} value={blood}>{blood}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className="font-bold">Donor e-mail</span>
                            </div>
                            <input
                                type="email"
                                id="Email"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="E-mail"
                                required
                                value={formData.Email}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className=" font-bold">Contact number</span>
                            </div>
                            <input
                                type="tel"
                                id="Phone_number"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Phone number"
                                required
                                value={formData.Phone_number}
                                onChange={handleInputChange}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="form-control w-full max-w-xs" htmlFor='District'>
                            <div className="label">
                                <span className="font-bold">District</span>
                            </div>
                            <select className="h-[40px] w-full border 2px gray"
                                id='District'
                                required
                                value={formData.District}
                                onChange={handleInputChange}
                            >
                                <option>Select district</option>
                                {formData.State && districts[formData.State].map((district, index) => (
                                    <option key={index} value={district}>{district}</option>
                                ))}
                            </select>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="form-control w-full max-w-xs" htmlFor='State'>
                            <div className="label">
                                <span className="font-bold">State</span>
                            </div>
                            <select className="h-[40px] w-full border 2px gray"
                                id='State'
                                required
                                value={formData.State}
                                onChange={handleInputChange}
                            >
                                <option>Select State</option>
                                {states.map((state, index) => (
                                    <option key={index} value={state}>{state}</option>
                                ))}
                            </select>
                        </label>
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 text-xl"
                    >
                        Submit
                    </button>
                </form>
            </div>
        </>
    )
}

export default Blooddonate;