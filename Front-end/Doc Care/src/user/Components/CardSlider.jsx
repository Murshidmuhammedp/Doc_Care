import React, { useRef } from 'react';
import { useNavigate } from 'react-router-dom'; // Assuming you're using react-router for navigation

const CardSlider = ({ department }) => {
    const sliderRef = useRef(null);
    const navigate = useNavigate();

    const scrollLeft = () => {
        sliderRef.current.scrollLeft -= sliderRef.current.clientWidth / 6; // Adjust scroll amount
    };

    const scrollRight = () => {
        sliderRef.current.scrollLeft += sliderRef.current.clientWidth / 6; // Adjust scroll amount
    };

    return (
        <div className="relative w-full overflow-hidden">
            <button
                className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10 shadow-lg hover:bg-gray-300 transition-colors"
                onClick={scrollLeft}
            >
                &lt;
            </button>
            <div
                ref={sliderRef}
                className="flex overflow-x-scroll scrollbar-hide space-x-4 p-4"
                style={{ scrollSnapType: 'x mandatory', width: '100%' }}
            >
                {department.map((value, index) => (
                    <div
                        key={index}
                        className="flex-shrink-0 w-1/6 px-2"
                        style={{ scrollSnapAlign: 'start' }}
                    >
                        <div className="h-[250px] w-full border-2 pt-[30px] rounded-md shadow-md hover:shadow-xl">
                            <div className="w-32 h-32 rounded-full overflow-hidden border-4 border-gray-200 shadow-lg mx-auto hover:shadow-xl">
                                <img
                                    src={value.imageUrl}
                                    alt={value.title}
                                    className="w-full h-full object-cover cursor-pointer"
                                    onClick={() => navigate('/category')}
                                />
                            </div>
                            <p className="mt-4 text-md font-semibold text-gray-800 text-center">{value.title}</p>
                            <p className="mt-2 text-md font-semibold text-blue-400 text-center hover:cursor-pointer">Book now</p>
                        </div>
                    </div>
                ))}
            </div>
            <button
                className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-gray-200 p-2 rounded-full z-10 shadow-lg hover:bg-gray-300 transition-colors"
                onClick={scrollRight}
            >
                &gt;
            </button>
        </div>
    );
};

export default CardSlider;
