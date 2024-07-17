import React, { useState } from 'react'
import toast from 'react-hot-toast';
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import { customAxios } from '../../confiq/axios';
import Navbar2 from '../Components/Navbar2';

function Registrationpage() {

    const [username, setusername] = useState("");
    const [email, setemail] = useState("");
    const [phone_number, setnumber] = useState();
    const [password, setpassword] = useState("");
    const [confirmpassword, setconfirmpassword] = useState("");
    const navigate = useNavigate();

    const handleRegistration = async (e) => {
        e.preventDefault()
        try {
            if (password === confirmpassword) {
                const response = await customAxios.post('/user/api/register', { username, email, phone_number, password });
                if (response.status === 201) {
                    toast.success(response.data.message)
                    navigate('/login');
                }
                if (response.status === 200) {
                    toast.error(response.data.message)
                }
            } else {
                toast.error("Password not match");
            }
        } catch (error) {
            alert(error);
        }
    }

    return (
        <>
            <Navbar2 />
            <div
                className="bg-cover bg-center h-screen w-full flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://cdn.britannica.com/29/123229-050-4EE13335/stethoscopes-rubber-tubing-sounds-patient-ears-physician.jpg')",
                }}
            >
                <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg w-full max-w-sm mx-4">
                    <h2 style={{ fontFamily: 'inria-serif' }} className="text-3xl font-bold mb-6 text-center">Register</h2>
                    <form onSubmit={handleRegistration}>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="username"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="User name"
                                required
                                value={username}
                                onChange={e => setusername(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="E-mail"
                                required
                                value={email}
                                onChange={e => setemail(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="text"
                                id="phone"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Phone number"
                                required
                                value={phone_number}
                                onChange={e => setnumber(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Password"
                                required
                                value={password}
                                onChange={e => setpassword(e.target.value)}
                            />
                        </div>
                        <div className="mb-4">
                            <input
                                type="password"
                                id="confirm-password"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Confirm password"
                                required
                                value={confirmpassword}
                                onChange={e => setconfirmpassword(e.target.value)}
                            />
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 text-xl"
                        >
                            Sign Up
                        </button>
                    </form>
                    <div className="items-center justify-between mt-4">
                        <a href="#" style={{ fontFamily: 'inria-serif' }} className="text-md text-black-600">Have an Account?</a>
                        <a href="#" style={{ fontFamily: 'inria-serif' }} className="text-md text-blue-600 hover:underline font-bold" onClick={() => navigate('/login')}>Login Here</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Registrationpage