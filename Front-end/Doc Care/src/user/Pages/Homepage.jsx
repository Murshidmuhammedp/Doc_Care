import React from 'react'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';

function Homepage() {

    const navigate = useNavigate();

    return (
        <>
            <Navbar />
            <div className="ml-4 md:ml-[180px]">
                <div className="flex flex-col md:flex-row">
                    <div
                        className="h-[500px] w-full md:w-[500px] bg-cover bg-center rounded-[15px] mt-[40px] md:mt-[80px] flex items-start justify-start"
                        style={{
                            backgroundImage: "url('https://img.freepik.com/free-photo/doctor-with-thumb-up-white-background_1368-5891.jpg?w=740&t=st=1719299983~exp=1719300583~hmac=e6948433c862f771dd7df76f4e7d14e6df8fb478c79fcbcd20b56ecd3dda8da4')",
                        }}
                    >
                    </div>
                    <div className="flex flex-col items-start justify-center mt-8 md:mt-0 md:ml-28">
                        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'inria-serif' }}>
                            <span className="md:ml-[-70px]">Now from the good</span> <br />
                            doctor Take care of your <br />
                            <span className="md:ml-[-285px]">body.</span>
                        </h1>
                        <h6 className="mt-4 md:mt-[40px] text-base md:text-lg">Book your doctor appointment online and take the <br /><span className='ml-[-155px]'>first step towards better health.</span></h6>
                        <button
                            type="submit"
                            className="mt-4 md:mt-[40px] w-[300px] bg-black text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-200 text-lg md:text-xl"
                            onClick={() => navigate('/category')} >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>

            {/* <div
                className="ml-4 md:ml-[50px] h-[300px] md:h-[450px] bg-cover bg-center flex items-center md:items-start justify-center md:justify-start mt-8 md:mt-[80px] rounded-[15px]"
                style={{
                    backgroundImage: "url('https://images.alphacoders.com/565/565094.jpg')",
                }}
            >
                <button
                    className=" md:mt-[350px] ml-[740px] w-full md:w-[300px] bg-black text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-200 text-lg md:text-xl"
                    onClick={() => navigate('/blooddonate')}
                >
                    Donate Blood
                </button>
            </div> */}

            <div className="ml-4 md:ml-[180px]">
                <div className="flex flex-col md:flex-row">
                    <div
                        className="h-[500px] w-full md:w-[500px] bg-cover bg-center rounded-[15px] mt-[40px] md:mt-[80px] flex items-start justify-start"
                        style={{
                            backgroundImage: "url('https://img.freepik.com/free-vector/blood-donor-day-poster-with-heart-blood-drop_1017-25357.jpg')",
                        }}
                    >
                    </div>
                    <div className="flex flex-col items-start justify-center mt-8 md:mt-0 md:ml-28">
                        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'inria-serif' }}>
                            <span className="md:ml-[-330px]">Donate blood, </span> <br />
                            <span className="md:ml-[-385px]">save lives. </span> <br />
                            <span className="md:ml-[-1px]"> Be a hero in someone's story today.</span>
                        </h1>
                        <h6 className="mt-4 md:mt-[40px] text-base md:text-lg">Donating blood is a simple act that can save multiple lives,<br /><span className='ml-[-122px]'> making a profound difference in the world.</span></h6>
                        <button
                            type="submit"
                            className="mt-4 md:mt-[40px] w-[300px] bg-black text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-200 text-lg md:text-xl"
                            onClick={() => navigate('/blooddonate')} >
                            Donote Blood
                        </button>
                    </div>
                </div>
            </div>


            <Footer />
        </>



    )
}

export default Homepage