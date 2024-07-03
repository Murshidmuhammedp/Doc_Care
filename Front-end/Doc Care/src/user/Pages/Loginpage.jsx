import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';


function Loginpage() {
    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");

    const navigate = useNavigate();

    const loginValidation = (e) => {
        e.preventDefault();

    }
    return (
        <>
            <div
                className="bg-cover bg-center h-screen w-full flex items-center justify-center"
                style={{
                    backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/001/226/647/large_2x/close-up-of-doctor-touching-patient-hand-for-support-free-photo.jpg')",
                }}
            >
                <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg w-full max-w-sm mx-4">
                    <h2 style={{ fontFamily: 'inria-serif' }} className="text-3xl font-bold mb-6 text-center">Login</h2>
                    <form onChange={loginValidation}>
                        <div className="mb-4">
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Enter email or mobile number"
                                required
                                value={email}
                                onChange={e => setemail(e.target.value)}
                            />
                        </div>
                        <div className="mb-6">
                            <input
                                type="password"
                                id="password"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Enter password"
                                required
                                value={password}
                                onChange={e => setpassword(e.target.value)}
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
                    <div className="items-center justify-between mt-4">
                        <a href="#" style={{ fontFamily: 'inria-serif' }} className="text-md text-black-600">Not a Member?</a>
                        <a href="#" style={{ fontFamily: 'inria-serif' }} className="text-md text-blue-600 hover:underline font-bold" onClick={() => navigate("/registration")}>Sign Up</a>
                    </div>
                </div>
            </div>


        </>
    )
}

export default Loginpage;