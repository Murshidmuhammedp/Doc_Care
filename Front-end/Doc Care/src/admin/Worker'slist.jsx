import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Nav from './Navbaradmin';

function Workerlist() {

    const [sidebarOpen, setSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
    };
    return (
        <>
            <div className="flex">
                <Sidebar sidebarOpen={sidebarOpen} toggleSidebar={toggleSidebar} />
                <div className="flex flex-col flex-grow">
                    <Nav />
                    <div className="p-4">
                        {/* Add your main content here */}
                        Worker list
                    </div>
                </div>
            </div>
        </>
    )
}

export default Workerlist