import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'
import Cards from './Cards'

function Categorypage() {



    return (
        <>
            <Navbar />

            <div className=" bg-blue-100">
                <div className="flex flex-col md:flex-row">

                    <div className="flex flex-col items-start justify-center mt-8 md:mt-0 md:ml-[200px]">
                        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'inria-serif' }}>
                            <span className="md:ml-[-315px]">Skip the travel! </span> <br />
                            <span className="md:ml-[-40px]"> Take Online Doctor Consultation.</span><br />
                        </h1>
                        <h6 className="mt-4 md:mt-[40px] text-base md:text-lg ml-[-35px]">Private consultation + Audio call · Starts at just ₹199</h6>
                        {/* <button
                            type="submit"
                            className="mt-4 md:mt-[40px] w-[300px] bg-black text-white p-2 rounded-full hover:bg-gray-800 focus:outline-none focus:ring focus:ring-blue-200 text-lg md:text-xl"
                            onClick={() => navigate('/blooddonate')} >
                            Consult Now
                        </button> */}
                    </div>
                    <div
                        className="h-[300px] w-[20%] mt-[20px] bg-cover bg-center  ml-[200px] flex items-start justify-start "
                        style={{
                            backgroundImage: "url('https://static.vecteezy.com/system/resources/previews/041/408/858/non_2x/ai-generated-a-smiling-doctor-with-glasses-and-a-white-lab-coat-isolated-on-transparent-background-free-png.png')"
                        }}
                    >
                    </div>
                </div>
            </div>


            <div>
                <h1 className="text-2xl md:text-4xl font-bold ml-4 md:ml-[-950px] mt-4 md:mt-[30px]">10+ Specialities</h1>
                <h6 className="text-gray-500 ml-4 md:ml-[-910px] mt-2 md:mt-[10px]">Consult with top doctors across specialities</h6>
            </div>

            <Cards />

            <Footer />
        </>
    )
}

export default Categorypage;