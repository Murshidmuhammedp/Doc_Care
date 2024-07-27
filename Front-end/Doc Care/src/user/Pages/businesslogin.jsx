import React, { useState } from 'react'
import Navbar2 from '../Components/Navbar2';
import { useNavigate } from 'react-router-dom';
import { customAxios } from '../../confiq/axios';
import toast from 'react-hot-toast';

function businesslogin() {

    const navigate = useNavigate();

    const [role, setRole] = useState('doctor');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const businessValidation = async (e) => {
        e.preventDefault();
        if (role == "doctor") {
            await customAxios.post("/user/api/doctor/login", { email, password })
                .then((response) => {
                    console.log(response);
                    toast.success(response.data.message)
                    navigate('/doctor/homepage')
                }).catch((error) => {
                    console.log(error, "error");
                });
        } else if (role == 'hospital') {
            toast.error("Hospital not complited");
        } else {
            toast.error("Pharmacy not complited");
        }
    };

    return (
        <>
            <Navbar2 />
            <div className="flex flex-col md:flex-row w-full h-screen ">
                <div
                    className="hidden md:flex bg-cover bg-center w-[550px] h-[500px]  items-center justify-center mt-[60px] ml-[300px] "
                    style={{
                        backgroundImage: "url('https://img.freepik.com/premium-vector/2d-vector-illustration-colorful-medical-field-care-patient-doctor-nurse_918459-15126.jpg')",
                    }}
                ></div>
                <div className="flex justify-center w-full  md:w-1/2 mt-6 md:mt-0">
                    <div className="bg-white p-8 rounded-lg w-full h-[450px] max-w-sm mx-4 border border-gray-300 mt-[100px] ml-[-300px]">
                        <h2 style={{ fontFamily: 'inria-serif' }} className="text-3xl font-bold mb-6 text-center">Login</h2>
                        <div className="mb-6">
                            <div className="flex justify-around">
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="role"
                                        value="doctor"
                                        checked={role === 'doctor'}
                                        onChange={() => setRole('doctor')}
                                    />
                                    <span className="ml-2">Doctor</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="role"
                                        value="hospital"
                                        checked={role === 'hospital'}
                                        onChange={() => setRole('hospital')}
                                    />
                                    <span className="ml-2">Hospital</span>
                                </label>
                                <label className="inline-flex items-center">
                                    <input
                                        type="radio"
                                        className="form-radio"
                                        name="role"
                                        value="pharmacy"
                                        checked={role === 'pharmacy'}
                                        onChange={() => setRole('pharmacy')}
                                    />
                                    <span className="ml-2">Pharmacy</span>
                                </label>
                            </div>
                        </div>
                        <form onSubmit={businessValidation}>
                            <div className="mb-4">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    placeholder="Email or Mobile Number"
                                    required
                                    onChange={e => setEmail(e.target.value)}
                                />
                            </div>
                            <div className="mb-6">
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                    placeholder="Password"
                                    required
                                    onChange={e => setPassword(e.target.value)}
                                />
                            </div>
                            <div className="flex items-center justify-between mb-4">
                                <a href="#" className="text-sm text-blue-600 hover:underline">Forgot Password?</a>
                            </div>
                            <button
                                type="submit"
                                className="w-full bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 text-xl"
                            >
                                Login
                            </button>
                        </form>
                        <div className=" items-center justify-between mt-4">
                            <a href="#" style={{ fontFamily: 'inria-serif' }} className="text-md text-black-600">Not a Member?</a>
                            <a href="#" style={{ fontFamily: 'inria-serif' }} className="text-md text-blue-600 hover:underline font-bold" onClick={() => navigate("/forbusiness")}>Sign Up</a>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default businesslogin;