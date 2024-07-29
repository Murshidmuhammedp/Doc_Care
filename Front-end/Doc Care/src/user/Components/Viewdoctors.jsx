import React, { useEffect, useState } from 'react'
import Navbar from './Navbar'
import { useNavigate, useSearchParams } from 'react-router-dom'
import { districts } from './State_district';
import { customAxios } from '../../confiq/axios';

function Viewdoctors() {
    const [selectedDoctor, setSelectedDoctor] = useState(null);
    // const navigate = useNavigate();
    const [searchParams] = useSearchParams();
    const value = searchParams.get('value');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDistricts, setFilteredDistricts] = useState(districts["Kerala"]);
    const [filter, setfilter] = useState([])

    const handleBookingClick = (doctor) => {
        setSelectedDoctor(doctor);
    };

    const closeModal = () => {
        setSelectedDoctor(null);
    };

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        if (query) {
            setFilteredDistricts(
                districts["Kerala"].filter((district) =>
                    district.toLowerCase().includes(query.toLowerCase())
                )
            );
        } else {
            setFilteredDistricts([]);
        }
    };

    const handleDistrictClick = (district) => {
        setSearchQuery(district);
        setFilteredDistricts([]);
    };

    useEffect(() => {
        const filterdata = async () => {
            await customAxios.get(`/user/api/finddoctors?district=${searchQuery}&specialization=${value}`)
                .then((response) => {
                    console.log(response);
                    setfilter(response.data.data);
                }).catch((error) => {
                    console.log(error);
                })
        }
        filterdata();
    }, [searchQuery, value]);

    return (
        <>
            <Navbar />

            <div className="flex justify-center mt-12">
                <input
                    type="text"
                    placeholder="Search districts..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-1/2 px-6 py-4 border border-gray-400 rounded-sm shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                />
            </div>
            <div className="flex justify-center mt-2">
                {searchQuery && filteredDistricts.length > 0 && (
                    <ul className="w-1/2 bg-white border border-gray-300 rounded-lg shadow-sm">
                        {filteredDistricts.map((district) => (
                            <li
                                key={district}
                                onClick={() => handleDistrictClick(district)}
                                className="px-4 py-2 cursor-pointer hover:bg-blue-500 hover:text-white"
                            >
                                {district}
                            </li>
                        ))}
                    </ul>
                )}
            </div>


            <div className='mt-8 w-full h-[40px] bg-gray-400'>
            </div>

            <div>
                <h1 className="text-2xl md:text-1xl font-bold ml-4 md:ml-[-970px] mt-4 md:mt-[30px]">25+ doctors available</h1>
                <h6 className="text-gray-500 ml-4 md:ml-[-910px] mt-2 md:mt-[10px]">Consult with top doctors across specialities</h6>
            </div>
            {/* Doctor's Cards */}
            <div className='bg-gray-100 py-5'>
                {filter && filter.map(item => {
                    return (
                        <div key={item._id} className="bg-white shadow-xl flex flex-col md:flex-row mb-5 text-start md:h-auto w-full md:w-[1000px] mx-auto md:m-5 rounded-lg overflow-hidden">
                            <figure className="w-full md:w-1/3 flex justify-center items-center p-5 md:p-0">
                                <div className="w-48 h-48 rounded-full overflow-hidden border-4 border-gray-50 shadow-lg mx-auto hover:shadow-md">
                                    <img src={item.Image} alt="" className="w-full h-full object-cover cursor-pointer" />
                                </div>
                            </figure>
                            <div className="w-full md:w-2/3 p-5 md:p-8 flex flex-col justify-center">
                                <h2 className="text-2xl text-blue-500 mb-2">Dr. {item.full_Name}</h2>
                                <p className="text-md text-black mb-1">{item.specialization}</p>
                                <p className="text-md text-blue-800 mb-1">{item.experience} Years experience</p>
                                <p className="text-md font-semibold text-black mb-1">{item.district}</p>
                                <p className="text-md font-semibold text-black mb-1">{item.consultation_Address}</p>
                                <p className="text-md text-black">₹{item.consultation_Fee} Consultation Fee</p>
                                <div className="mt-[-50px] flex justify-end">
                                    <button
                                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                        onClick={() => handleBookingClick(item)}
                                    >
                                        Book Clinic Visit
                                    </button>
                                </div>
                                <p className="text-orange-600 flex justify-end text-xs mr-[25px]">No Booking Fees</p>
                            </div>
                        </div>
                    );
                })}

                {selectedDoctor && (
                    <>
                        <div className="fixed inset-0 bg-black opacity-50 z-40"></div>
                        <div className="fixed inset-0 flex justify-end z-50">
                            <div className="bg-white shadow-xl h-full w-full md:w-1/3 p-5 overflow-auto">
                                <div className="flex justify-between items-center mb-5">
                                    <h2 className="text-2xl text-blue-500">Available Time Slots for Dr. {selectedDoctor.full_Name}</h2>
                                    <button
                                        className="text-red-500 hover:text-red-700 text-xl font-bold"
                                        onClick={closeModal}
                                    >
                                        &times;
                                    </button>
                                </div>
                                {/* Add your available time slot component here */}
                                <div>
                                    {/* Example content */}
                                    <p>Time Slot 1</p>
                                    <p>Time Slot 2</p>
                                    <p>Time Slot 3</p>
                                    {/* ... */}
                                </div>
                            </div>
                        </div>
                    </>
                )}
            </div>
        </>
    )
}

export default Viewdoctors