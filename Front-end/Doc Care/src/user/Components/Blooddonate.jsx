import React, { useState } from 'react';
import Navbar from './Navbar';
import { bloodGroups, districts, states } from './State_district';
import toast from 'react-hot-toast';
import { customAxios } from '../../confiq/axios';
import { useNavigate } from 'react-router-dom';

function Blooddonate() {
    const navigate = useNavigate()

    const [formData, setformData] = useState({
        Name: "",
        Blood_group: "",
        Gender: "",
        Age: "",
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
                navigate('/')
            }).catch((error) => {
                // console.log(error.response.data.Details.details);
                toast.error(error.response.data.message)
            })
    };
    return (
        <>
            <Navbar />

            <div className="bg-red-50 bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-6xl mx-auto my-8 flex flex-col md:flex-row">
    <div className="w-full md:w-1/2 p-12 mt-[-30px] flex items-center justify-center">
        <img src="https://static.vecteezy.com/system/resources/previews/008/190/860/original/human-blood-donate-on-white-background-free-vector.jpg" alt="Blood Donation" className="rounded-lg shadow-lg w-full" />
    </div>
    <div className="w-full md:w-1/2 p-4">
        <h2 style={{ fontFamily: 'Inria Serif, serif' }} className="text-3xl font-bold mb-2 text-left text-red-600">Donor Registration</h2>
        <h6 style={{ fontFamily: 'Inria Serif, serif' }} className="text-md mb-6 text-left text-gray-700">Donating blood is an act of solidarity. Join the effort and save lives.</h6>
        <form onSubmit={bloodRegistration}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="mb-4">
                    <label>
                        <div className="label text-left">
                            <span className="font-bold">Name:</span>
                        </div>
                        <input
                            type="text"
                            id="Name"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                            placeholder="Donor name"
                            required
                            value={formData.Name}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="form-control w-full max-w-xs">
                        <div className="label text-left">
                            <span className="font-bold">Blood group:</span>
                        </div>
                        <select className="h-[40px] w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
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
                    <label className="form-control w-full max-w-xs" htmlFor='Gender'>
                        <div className="label text-left">
                            <span className="font-bold">Gender:</span>
                        </div>
                        <select className="h-[40px] w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                            id='Gender'
                            required
                            value={formData.Gender}
                            onChange={handleInputChange}
                        >
                            <option>Select Gender</option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                        </select>
                    </label>
                </div>

                <div className="mb-4">
                    <label>
                        <div className="label text-left">
                            <span className="font-bold">Age:</span>
                        </div>
                        <input
                            type="tel"
                            id="Age"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                            placeholder="Age"
                            required
                            value={formData.Age}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label>
                        <div className="label text-left">
                            <span className="font-bold">E-mail:</span>
                        </div>
                        <input
                            type="email"
                            id="Email"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                            placeholder="E-mail"
                            required
                            value={formData.Email}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label>
                        <div className="label text-left">
                            <span className="font-bold">Mobile Number:</span>
                        </div>
                        <input
                            type="tel"
                            id="Phone_number"
                            className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                            placeholder="Phone number"
                            required
                            value={formData.Phone_number}
                            onChange={handleInputChange}
                        />
                    </label>
                </div>
                <div className="mb-4">
                    <label className="form-control w-full max-w-xs" htmlFor='District'>
                        <div className="label text-left">
                            <span className="font-bold">District:</span>
                        </div>
                        <select className="h-[40px] w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
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
                        <div className="label text-left">
                            <span className="font-bold">State:</span>
                        </div>
                        <select className="h-[40px] w-full border border-gray-300 rounded focus:outline-none focus:ring focus:ring-red-200"
                            id='State'
                            required
                            value={formData.State}
                            onChange={handleInputChange}
                        >
                            <option value="">Select State</option>
                            {states.map((state, index) => (
                                <option key={index} value={state}>{state}</option>
                            ))}
                        </select>
                    </label>
                </div>
            </div>
            <button
                type="submit"
                className="w-full bg-red-600 text-white p-3 rounded-full hover:bg-red-700 focus:outline-none focus:ring focus:ring-red-200 text-xl mt-[30px]"
            >
                Submit
            </button>
        </form>
    </div>
</div>


        </>
    )
}

export default Blooddonate;