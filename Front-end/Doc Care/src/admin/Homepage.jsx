import React, { useEffect, useRef, useState } from 'react';
import { Line, Pie } from 'react-chartjs-2';
import { FaTachometerAlt, FaUsers, FaUserTie, FaRegStar, FaClipboardList, FaBell, FaSignOutAlt, FaBars } from 'react-icons/fa';
import 'chart.js/auto';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
// import { admin_axios } from '../../../config/admin_axios';
import { Link, useParams } from 'react-router-dom';
// import ListingAndApprovingUsers from './Approving_Users';
// import AdminUsers from './AdminUsers';
// import AdminWorkers from './AdminWorkers';
// import Card from './Card';

Chart.register(ArcElement, Tooltip, Legend);

const Dashboard = () => {
    const [sidebarOpen, setSidebarOpen] = useState(true);
    const [data, setData] = useState();

      const toggleSidebar = () => {
        setSidebarOpen(!sidebarOpen);
      };

    //   useEffect(() => {
    //     admin_axios.get('/home')
    //       .then((res) => {
    //         console.log(res.data);
    //         setData(res.data);
    //       });
    //   }, []);

    const lineOptions = {
        responsive: true,
        scales: {
            x: {
                type: 'category',
                ticks: {
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12,
                    },
                    color: '#9ca3af',
                },
                grid: {
                    display: false,
                },
            },
            y: {
                ticks: {
                    font: {
                        family: "'Inter', sans-serif",
                        size: 12,
                    },
                    color: '#9ca3af',
                    callback: function (value) {
                        return new Intl.NumberFormat().format(value);
                    },
                },
                grid: {
                    color: '#e5e7eb',
                },
            },
        },
        elements: {
            line: {
                tension: 0.4,
            },
        },
        plugins: {
            tooltip: {
                backgroundColor: 'rgba(17, 24, 39, 0.9)',
                titleFont: {
                    family: "'Inter', sans-serif",
                    size: 14,
                    weight: 'bold',
                },
                bodyFont: {
                    family: "'Inter', sans-serif",
                    size: 12,
                },
                callbacks: {
                    label: function (tooltipItem) {
                        return (
                            tooltipItem.dataset.label +
                            ': ' +
                            new Intl.NumberFormat().format(tooltipItem.raw)
                        );
                    },
                },
            },
            legend: {
                display: true,
                position: 'top',
                labels: {
                    color: '#1f2937',
                    usePointStyle: true,
                    padding: 20,
                    font: {
                        family: "'Inter', sans-serif",
                        size: 14,
                    },
                },
            },
            filler: {
                propagate: false,
            },
        },
    };

    const [filter, setFilter] = useState('Monthly');

    const getFilteredData = () => {
        switch (filter) {
            case 'Today':
                return {
                    labels: ['8 AM', '10 AM', '12 PM', '2 PM', '4 PM', '6 PM', '8 PM'],
                    datasets: [
                        {
                            label: 'Moderate',
                            data: [150, 200, 250, 300, 350, 400, 450],
                            borderColor: 'rgba(76, 81, 191, 1)',
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                                gradient.addColorStop(0, 'rgba(76, 81, 191, 0.7)');
                                gradient.addColorStop(1, 'rgba(76, 81, 191, 0.1)');
                                return gradient;
                            },
                            pointBackgroundColor: '#4c51bf',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#4c51bf',
                            fill: true,
                        },
                        {
                            label: 'Spike Admin',
                            data: [120, 180, 240, 300, 360, 420, 480],
                            borderColor: 'rgba(56, 178, 172, 1)',
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                                gradient.addColorStop(0, 'rgba(56, 178, 172, 0.7)');
                                gradient.addColorStop(1, 'rgba(56, 178, 172, 0.1)');
                                return gradient;
                            },
                            pointBackgroundColor: '#38b2ac',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#38b2ac',
                            fill: true,
                        },
                    ],
                };
            case 'Weekly':
                return {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                        {
                            label: 'Moderate',
                            data: [1100, 1400, 1700, 2100, 2500, 2800, 3200],
                            borderColor: 'rgba(76, 81, 191, 1)',
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                                gradient.addColorStop(0, 'rgba(76, 81, 191, 0.7)');
                                gradient.addColorStop(1, 'rgba(76, 81, 191, 0.1)');
                                return gradient;
                            },
                            pointBackgroundColor: '#4c51bf',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#4c51bf',
                            fill: true,
                        },
                        {
                            label: 'Spike Admin',
                            data: [1000, 1300, 1600, 1900, 2200, 2500, 2800],
                            borderColor: 'rgba(56, 178, 172, 1)',
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                                gradient.addColorStop(0, 'rgba(56, 178, 172, 0.7)');
                                gradient.addColorStop(1, 'rgba(56, 178, 172, 0.1)');
                                return gradient;
                            },
                            pointBackgroundColor: '#38b2ac',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#38b2ac',
                            fill: true,
                        },
                    ],
                };
            case 'Monthly':
            default:
                return {
                    labels: ['14/04', '17/04', '19/04', '21/04', '26/04', '27/04', '29/04'],
                    datasets: [
                        {
                            label: 'Moderate',
                            data: [1200, 1900, 3000, 5000, 2300, 3200, 4100],
                            borderColor: 'rgba(76, 81, 191, 1)',
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                                gradient.addColorStop(0, 'rgba(76, 81, 191, 0.7)');
                                gradient.addColorStop(1, 'rgba(76, 81, 191, 0.1)');
                                return gradient;
                            },
                            pointBackgroundColor: '#4c51bf',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#4c51bf',
                            fill: true,
                        },
                        {
                            label: 'Spike Admin',
                            data: [2100, 1500, 2000, 3000, 3500, 4200, 2800],
                            borderColor: 'rgba(56, 178, 172, 1)',
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 300);
                                gradient.addColorStop(0, 'rgba(56, 178, 172, 0.7)');
                                gradient.addColorStop(1, 'rgba(56, 178, 172, 0.1)');
                                return gradient;
                            },
                            pointBackgroundColor: '#38b2ac',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: '#38b2ac',
                            fill: true,
                        },
                    ],
                };
        }
    };

    const chartRef = useRef(null);

    useEffect(() => {
        const chart = chartRef.current;

        if (chart) {
            const ctx = chart.ctx;
            const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
            gradient1.addColorStop(0, 'rgba(75, 192, 192, 0.2)');
            gradient1.addColorStop(1, 'rgba(75, 192, 192, 0)');

            const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
            gradient2.addColorStop(0, 'rgba(153, 102, 255, 0.2)');
            gradient2.addColorStop(1, 'rgba(153, 102, 255, 0)');

            const myChart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                    datasets: [
                        {
                            label: 'Dataset 1',
                            data: [65, 59, 80, 81, 56, 55, 40],
                            backgroundColor: gradient1,
                            borderColor: 'rgba(75, 192, 192, 1)',
                            borderWidth: 1,
                            fill: true,
                        },
                        {
                            label: 'Dataset 2',
                            data: [28, 48, 40, 19, 86, 27, 90],
                            backgroundColor: gradient2,
                            borderColor: 'rgba(153, 102, 255, 1)',
                            borderWidth: 1,
                            fill: true,
                        },
                    ],
                },
                options: {
                    responsive: true,
                    scales: {
                        y: {
                            beginAtZero: true,
                        },
                    },
                },
            });

            return () => {
                myChart.destroy();
            };
        }
    }, []);

    return (
        <div className="flex h-screen bg-gray-200">
            <div className={` ${sidebarOpen ? 'w-64' : 'w-20'} bg-gray-800 text-white flex flex-col justify-between`}>
                <div className="flex items-center justify-between h-16 p-4">
                    <span className="text-lg font-semibold">
                        <FaTachometerAlt />
                        <span className="ml-2">Dashboard</span>
                    </span>
                    <button
                        className="text-white focus:outline-none"
                        onClick={toggleSidebar}
                    >
                        <FaBars />
                    </button>
                </div>
                <nav className="flex-1 px-4 py-2">
                    <ul className="space-y-2">
                        <li>
                            <Link to="#" className="flex items-center space-x-2">
                                <FaUsers />
                                {sidebarOpen && <span>Users</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center space-x-2">
                                <FaUserTie />
                                {sidebarOpen && <span>Admins</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center space-x-2">
                                <FaRegStar />
                                {sidebarOpen && <span>Workers</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center space-x-2">
                                <FaClipboardList />
                                {sidebarOpen && <span>Approvals</span>}
                            </Link>
                        </li>
                        <li>
                            <Link to="#" className="flex items-center space-x-2">
                                <FaBell />
                                {sidebarOpen && <span>Notifications</span>}
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="p-4">
                    <button
                        className="w-full text-white flex items-center space-x-2"
                        onClick={() => {
                            // Implement logout functionality
                        }}
                    >
                        <FaSignOutAlt />
                        {sidebarOpen && <span>Logout</span>}
                    </button>
                </div>
            </div>
            <div className="flex flex-col flex-1 overflow-y-auto">
                <div className="px-6 py-4">
                    <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
                    <p className="text-gray-600">Welcome to the admin dashboard.</p>
                </div>
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3 p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 p-6 rounded-lg text-center shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold text-white">Total User</h3>
                <p className="text-3xl font-semibold text-white mt-4">{data?.users}</p>
                <p className="text-green-200 mt-2">8.5% Up from yesterday</p>
              </div>
              <div className="bg-gradient-to-r from-teal-500 to-green-600 p-6 rounded-lg text-center shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold text-white">Total Workers</h3>
                <p className="text-3xl font-semibold text-white mt-4">{data?.workers}</p>
                <p className="text-green-200 mt-2">8.5% Up from yesterday</p>
              </div>
              <div className="bg-gradient-to-r from-yellow-500 to-orange-600 p-6 rounded-lg text-center shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold text-white">Active Workers</h3>
                <p className="text-3xl font-semibold text-white mt-4">{data?.activeWorkers}</p>
                <p className="text-red-200 mt-2">4.3% Down from yesterday</p>
              </div>
              <div className="bg-gradient-to-r from-red-500 to-pink-600 p-6 rounded-lg text-center shadow-lg transform transition-transform hover:scale-105">
                <h3 className="text-xl font-bold text-white">Total Sales</h3>
                <p className="text-3xl font-semibold text-white mt-4">${data?.totalRevenue}</p>
                <p className="text-red-200 mt-2">4.3% Down from yesterday</p>
              </div>
            </div>
                </div>
                <div className="p-6">
                    <div className="bg-white shadow rounded-lg p-4">
                        <div className="flex justify-between items-center mb-4">
                            <h2 className="text-xl font-semibold">Statistics</h2>
                            <div>
                                <button
                                    onClick={() => setFilter('Today')}
                                    className={`mr-2 p-2 rounded ${filter === 'Today' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                >
                                    Today
                                </button>
                                <button
                                    onClick={() => setFilter('Weekly')}
                                    className={`mr-2 p-2 rounded ${filter === 'Weekly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                >
                                    Weekly
                                </button>
                                <button
                                    onClick={() => setFilter('Monthly')}
                                    className={`p-2 rounded ${filter === 'Monthly' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'}`}
                                >
                                    Monthly
                                </button>
                            </div>
                        </div>
                        <Line data={getFilteredData()} options={lineOptions} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;