import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbaradmin from './Navbaradmin';
import { customAxios } from '../confiq/axios';
import toast from 'react-hot-toast';

const AdminLogin = () => {

  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");

  const adminLogin = async (e) => {
    e.preventDefault();
    await customAxios.post('/admin/api/login', { email, password })
      .then((result) => {
        localStorage.setItem("adminToken", result.data.token);
        toast.success(result.data.message);
        navigate('/admin/homepage')
      }).catch((error) => {
        toast.error(error.response.data.message);
      })
  };

  return (
    <>
      <Navbaradmin />
      <div className="h-[89vh] flex items-center justify-center bg-blue-200">
        <div className="flex flex-col lg:flex-row w-full max-w-5xl  bg-white shadow-lg rounded-xl overflow-hidden">
          {/* Left Side - Quote */}
          <div className="hidden lg:flex w-full lg:w-1/2 bg-blue-500 text-white justify-center items-center p-10">
            <blockquote className="text-3xl italic font-semibold">
              "The only way to do great work is to love what you do."
            </blockquote>
          </div>

          {/* Right Side - Login Form */}
          <div className="flex flex-col justify-center items-center w-full lg:w-1/2 p-10 bg-gray-100">
            <div className="w-full max-w-md">
              <form className="bg-white shadow-lg rounded-lg px-8 pt-6 pb-8 mb-4" onSubmit={adminLogin}>
                <h2 className="text-4xl font-bold mb-6 text-center text-gray-800">Admin Login</h2>
                <div className="mb-4">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                    id="email"
                    type="email"
                    placeholder="Email"
                    required
                    onChange={e => setemail(e.target.value)}
                  />
                </div>
                <div className="mb-6">
                  <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
                    Password
                  </label>
                  <input
                    className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                    id="password"
                    type="password"
                    placeholder="Password"
                    required
                    onChange={e => setpassword(e.target.value)}
                  />
                </div>
                <div className="flex items-center justify-between">
                  <button
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition duration-300 ease-in-out transform hover:scale-105"
                    type="submit"
                  >
                    Sign In
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AdminLogin;

