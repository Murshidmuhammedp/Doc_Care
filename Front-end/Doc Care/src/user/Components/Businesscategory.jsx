import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom'

function Businessreg() {

    const navigate = useNavigate();

    const business = [
        { imageUrl: "https://img.freepik.com/free-photo/front-view-female-doctor-wearing-stethoscope_23-2149856262.jpg", description: "Are you a doctor?", title: "Doctor" },
        { imageUrl: "https://media.gettyimages.com/id/1312706504/photo/modern-hospital-building.jpg?s=612x612&w=gi&k=20&c=StV1gAkbzgp14Us0XAfuIRoWo8iXO7CUwUOlh66Y9S0=", description: "Register your hospital", title: "Hospital" },
        { imageUrl: "https://img.freepik.com/free-photo/empty-drugstore-with-bottles-packages-full-with-medicaments-retail-shop-shelves-with-pharmaceutical-products-pharmacy-space-filled-with-medical-drugs-pills-vitamins-boxes_482257-62215.jpg", description: "Are you a medical shop owner?", title: "Medical shop" }
    ]
    return (
        <>
            <Navbar />

            <div className="mb-10 flex flex-wrap items-center justify-center gap-4 md:gap-[40px] mt-4 md:mt-[50px] w-full md:w-[1200px] ml-4 md:ml-[150px]">
                {business.map((value, index) => (
                    <div key={index} className="flex flex-col items-center justify-center w-40 md:w-auto" onClick={() => { {/*setcate(value.title);*/} navigate('/businessregister'); }}>
                        <div className="h-[300px] w-[250px] border-2 pt-[30px] rounded-md shadow-md hover:shadow-xl">
                            <div className="mt-[-30px] w-55 h-[220px] overflow-hidden border-4 border-gray-200 shadow-lg mx-auto hover:shadow-xl">
                                <img src={value.imageUrl} alt={value.title} className="w-full h-full object-cover cursor-pointer"/>
                            </div>
                            <p className="mt-4 text-md font-semibold text-gray-800 text-center">{value.description}</p>
                            <p className="mt-1 text-md font-semibold text-blue-400 text-center hover:cursor-pointer">Register now </p>
                        </div>
                    </div>
                ))}
            </div>


            <Footer />
        </>
    )
}

export default Businessreg