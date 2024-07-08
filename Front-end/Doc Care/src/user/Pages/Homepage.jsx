import React from 'react'
import Footer from '../Components/Footer'
import { useNavigate } from 'react-router-dom'
import Navbar from '../Components/Navbar';

function Homepage() {

    const navigate = useNavigate();
    return (
        <>
        <Navbar/>
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
                        >
                            Book Appointment
                        </button>
                    </div>
                </div>
            </div>
            <div
                className="ml-[50px] h-[450px] bg-cover bg-center flex items-start justify-start"
                style={{
                    backgroundImage: "url('https://images.alphacoders.com/565/565094.jpg')",
                }}
            >
                <button
                    className="md:mt-[350px] ml-[750px] w-[300px] bg-black text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-200 text-lg md:text-xl"
                    onClick={() => navigate('/blooddonate')}>
                    Donate Blood
                </button>
            </div>
            <Footer />
        </>



    )
}

export default Homepage