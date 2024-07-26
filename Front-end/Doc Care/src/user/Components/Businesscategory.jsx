import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Businessreg() {

    const navigate = useNavigate();

    const business = [
        { imageUrl: "https://img.freepik.com/free-photo/front-view-female-doctor-wearing-stethoscope_23-2149856262.jpg", description: "Are you a doctor?", title: "Doctor" },
        { imageUrl: "https://media.gettyimages.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=StV1gAkbzgp14Us0XAfuIRoWo8iXO7CUwUOlh66Y9S0=", description: "Register your hospital", title: "Hospital" },
        { imageUrl: "https://img.freepik.com/free-photo/empty-drugstore-with-bottles-packages-full-with-medicaments-retail-shop-shelves-with-pharmaceutical-products-pharmacy-space-filled-with-medical-drugs-pills-vitamins-boxes_482257-62215.jpg", description: "Do you have a pharmacy?", title: "Medical shop" }
    ]

    const chooseroute = (value) => {
        value == "Doctor" ? navigate('/doctorregister') : navigate('/hospitalregister')
    }


    return (
        <>
            <Navbar />
    
            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-[40px] mt-4 md:mt-[50px] w-full md:w-[1200px] ml-4 md:ml-[150px]">
                {business.map((value, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-40 md:w-auto" onClick={() => { {/*setcate(value.title);*/ } chooseroute(value.title) }}>
                        <div className="h-[300px] w-[250px] border-2 pt-[30px] rounded-md shadow-md hover:shadow-xl">
                            <div className="mt-[-30px] w-55 h-[220px] overflow-hidden border-4 border-gray-200 shadow-lg mx-auto hover:shadow-xl">
                                <img src={value.imageUrl} alt={value.title} className="w-full h-full object-cover cursor-pointer" />
                            </div>
                            <p className="mt-4 text-md font-semibold text-gray-800 text-center">{value.description}</p>
                            <p className="mt-1 text-md font-semibold text-blue-400 text-center hover:cursor-pointer">Register now </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className=" bg-green-200">
                <div className="flex flex-col md:flex-row">

                    <div className="flex flex-col items-start justify-center mt-8 md:mt-0 md:ml-[200px]">
                        <h1 className="text-3xl md:text-4xl font-bold" style={{ fontFamily: 'inria-serif' }}>
                            <span className="md:ml-[-220px]">Join Us to Transform Healthcare.</span> <br />
                            <span className="md:ml-[-40px]"> Become a Part of Our Healthcare Revolution.</span><br />
                        </h1>
                        <h6 className="mt-4 md:mt-[40px] text-base md:text-lg ml-[-40px]">Together, we can provide seamless and accessible healthcare to all.</h6>
                    </div>
                    <div
                        className="h-[300px] w-[20%] mt-[20px] bg-cover bg-center  ml-[200px] flex items-start justify-start "
                        style={{
                            backgroundImage: "url('https://png.pngtree.com/png-clipart/20231001/original/pngtree-male-physician-doctor-png-image_13218894.png')"
                        }}
                    >
                    </div>
                </div>
            </div>

        
            
            <Footer />
        </>
    )
}

export default Businessreg