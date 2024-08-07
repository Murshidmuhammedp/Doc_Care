import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { customAxios } from '../../confiq/axios'
import { FiEdit2 } from 'react-icons/fi';

function Userprofile() {
  let userId = localStorage.getItem("userId");
  const [profile, setProfile] = useState("");
  const defaultAvatar = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQOtu74pEiq7ofeQeTsco0migV16zZoBwSlGg&s';

  useEffect(() => {
    const profile = async () => {
      try {
        const response = await customAxios.get(`/user/api/user/profile/${userId}`);
        setProfile(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        console.log(error);
      }
    }
    profile();
  }, []);

  const [isEditing, setIsEditing] = useState({
    name: false, email: false, phone_Number: false, district: false, state: false, pincode: false, DOB: false, gender: false
  });

  const handleEditToggle = (field) => {
    setIsEditing((prev) => ({ ...prev, [field]: !prev[field] }));
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Handle submit logic here
    console.log('Updated Profile:', profile);
    // You can send the updated profile to your server or handle it as needed
  };

  return (
    <>
      <Navbar />
      <div className="max-w-4xl mx-auto my-10 p-8 bg-gray-100 text-gray-800 shadow-lg rounded-lg">
        <h1 className='font-bold text-3xl mb-5 text-center'>Profile</h1>

        <div className="flex items-center space-x-6 mb-10">
          <div className="relative">
            <img className="w-40 h-40 rounded-full object-cover border-4 border-gray-300" src={defaultAvatar} alt={`${profile.name}'s profile`} />
            <FiEdit2 className="absolute top-0 right-0 text-gray-500 cursor-pointer bg-white rounded-full p-1" size={24} onClick={() => handleEditToggle('image')} />
            {isEditing.image && (
              <input
                type="file"
                name="image"
                accept="image/*"
                // onChange={handleImageChange}
                className="absolute top-0 left-0 w-full h-full opacity-0 cursor-pointer"
              />
            )}
          </div>
          <div>
            <h2 className="text-3xl font-semibold">{profile.name}</h2>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-2xl font-semibold mb-3 text-left">Basic Information</h3>
            <div className="flex items-center space-x-2">
              <p><span className="font-semibold">Name: </span>{isEditing.name ?
                <input type="text" name="name" value={profile.name} onChange={handleChange} className="border p-1 rounded" /> :
                profile.username}</p>
              <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('name')} />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p><span className="font-semibold">Email: </span>{isEditing.email ?
                <input type="text" name="email" value={profile.email} onChange={handleChange} className="border p-1 rounded" /> :
                profile.email}</p>
              <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('email')} />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p><span className="font-semibold">Phone: </span>{isEditing.phone_Number ?
                <input type="text" name="phone_Number" value={profile.phone_number} onChange={handleChange} className="border p-1 rounded" /> :
                profile.phone_number}</p>
              <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('phone_Number')} />
            </div>
          </div>

          <div>
            <h3 className="text-2xl font-semibold mb-3 text-left">Additional Information</h3>
            <div className="flex items-center space-x-2 mt-2">
              <p><span className="font-semibold">Gender: </span>{isEditing.gender ?
                <input type="text" name="gender" value={profile.gender} onChange={handleChange} className="border p-1 rounded" /> :
                profile.gender}</p>
              <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('gender')} />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p><span className="font-semibold">Date of Birth: </span>{isEditing.DOB ?
                <input type="text" name="DOB" value={profile.DOB} onChange={handleChange} className="border p-1 rounded" /> :
                profile.DOB}</p>
              <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('DOB')} />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p><span className="font-semibold">District: </span>{isEditing.district ?
                <input type="text" name="district" value={profile.district} onChange={handleChange} className="border p-1 rounded" /> :
                profile.district}</p>
              <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('district')} />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p><span className="font-semibold">State: </span>{isEditing.state ?
                <input type="text" name="state" value={profile.state} onChange={handleChange} className="border p-1 rounded" /> :
                profile.state}</p>
              <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('state')} />
            </div>
            <div className="flex items-center space-x-2 mt-2">
              <p><span className="font-semibold">Pincode: </span>{isEditing.pincode ?
                <input type="text" name="pincode" value={profile.pincode} onChange={handleChange} className="border p-1 rounded" /> :
                profile.pincode}</p>
              <FiEdit2 className="text-gray-500 cursor-pointer" onClick={() => handleEditToggle('pincode')} />
            </div>
          </div>
        </div>

        <button
          className="mt-10 px-6 py-3 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300"
          onClick={handleSubmit}
        >
          Submit
        </button>
      </div>

    </>
  )
}

export default Userprofile