import React, { useState } from 'react'
import Navbar from './Navbar'
import { useSearchParams } from 'react-router-dom'
import { districts } from './State_district';

function Viewdoctors() {
    const [searchParams] = useSearchParams();
    const value = searchParams.get('value');
    const [searchQuery, setSearchQuery] = useState('');
    const [filteredDistricts, setFilteredDistricts] = useState(districts["Kerala"]);

    const handleSearchChange = (event) => {
        const query = event.target.value;
        setSearchQuery(query);
        setFilteredDistricts(
            districts["Kerala"].filter((district) =>
                district.toLowerCase().includes(query.toLowerCase())
            )
        );
    };

    const handleDistrictClick = (district) => {
        setSearchQuery(district);
        setFilteredDistricts([]);
    };

    return (
        <>
            <Navbar />

            <div className="flex justify-center mt-6">
                <input
                    type="text"
                    placeholder="Search districts..."
                    value={searchQuery}
                    onChange={handleSearchChange}
                    className="w-1/2 px-6 py-4 border border-gray-300 rounded-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition duration-300 ease-in-out"
                />
            </div>
            <div className="flex justify-center mt-2">
                {filteredDistricts.length > 0 && (
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
        </>
    )
}

export default Viewdoctors