import React from 'react'
import Navbar from './Navbar'

function Blooddonate() {
    return (
        <>
            <Navbar />

            <div className="bg-white bg-opacity-40 p-8 rounded-lg shadow-lg w-full max-w-sm mx-4">
                <h2 style={{ fontFamily: 'inria-serif' }} className="text-3xl font-bold mb-6 text-center">Register</h2>
                <form>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className=" font-bold">Enter Donor name</span>
                            </div>
                            <input
                                type="text"
                                id="username"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="User name"
                                required
                                onChange={e => setusername(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label className="form-control w-full max-w-xs">
                            <div className="label">
                                <span className="font-bold">Select Blood group</span>
                            </div>
                            <select className="h-[40px] w-full" onChange={e => setcategory(e.target.value)}>
                                <option>Select category</option>
                                <option value="A+">A+</option>
                                <option value="A-">A-</option>
                                <option value="B+">B+</option>
                                <option value="B-">B-</option>
                                <option value="AB+">AB+</option>
                                <option value="AB-">AB-</option>
                                <option value="O+">O+</option>
                                <option value="O-">O-</option>
                            </select>
                        </label>
                    </div>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className="font-bold">Enter Donor e-mail</span>
                            </div>
                            <input
                                type="email"
                                id="email"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="E-mail"
                                required
                                onChange={e => setemail(e.target.value)}
                            />
                        </label>
                    </div>
                    <div className="mb-4">
                        <label>
                            <div className="label">
                                <span className=" font-bold">Enter Contact number</span>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-blue-200"
                                placeholder="Phone number"
                                required
                                onChange={e => setnumber(e.target.value)}
                            />
                        </label>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white p-2 rounded-full hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-200 text-xl"
                    >
                        Register
                    </button>
                </form>
            </div>
        </>
    )
}

export default Blooddonate;