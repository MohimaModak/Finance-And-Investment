// import React, { useEffect } from 'react';
// import { Line } from 'react-chartjs-2'; // Chart.js for interactive charts
// import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

// export default function Charts() {

//     useEffect(() => {
//         AOS.init({
//           duration: 2000,
//           easing: 'ease-out',
//           once: true,
//         });
//       }, []);

//     // Data for the chart (example: investment growth over time)
//     const chartData = {
//         labels: ['2018', '2019', '2020', '2021', '2022', '2023'],
//         datasets: [
//             {
//                 label: 'Portfolio Value',
//                 data: [1000, 1200, 1500, 1800, 2200, 2500], // Example data points
//                 borderColor: '#92400e', // Amber-800 line color
//                 backgroundColor: 'rgba(146, 64, 14, 0.2)', // Light amber fill
//                 tension: 0.3, // Smooth the line
//                 fill: true,
//             },
//         ],
//     };

//     // Options for the chart
//     const chartOptions = {
//         responsive: true,
//         maintainAspectRatio: false, // Allows custom height
//         plugins: {
//             title: {
//                 display: true,
//                 text: 'Investment Growth Over Time',
//                 font: { size: 18 },
//             },
//             tooltip: {
//                 callbacks: {
//                     label: (tooltipItem) => `$${tooltipItem.raw.toFixed(2)}`,
//                 },
//             },
//         },
//         scales: {
//             x: { title: { display: true, text: 'Year' } },
//             y: { title: { display: true, text: 'Portfolio Value ($)' }, beginAtZero: true },
//         },
//     };

//     return (
//         <section className="py-16 bg-orange-200 relative px-5">
//             <div data-aos="fade-up" className="max-w-6xl mx-auto px-6">
//                 {/* Section Header */}
//                 <h2 className="text-3xl font-bold mb-8 text-center text-gray-700">
//                     Investment Performance & Growth
//                 </h2>

//                 {/* Subheading */}
//                 <p className="text-lg text-center text-gray-800 font-medium mb-12">
//                     Track the past performance of your portfolio and explore future growth scenarios.
//                 </p>

//                 {/* Performance Metrics */}
//                 <div className="lg:flex justify-between items-center mb-12 lg:gap-10">
//                     <div data-aos="fade-up" className="w-full sm:w-1/3 text-center bg-orange-100 rounded-lg shadow-lg p-6 mb-5 lg:mb-0">
//                         <h3 className="text-xl font-bold text-amber-800">Current Portfolio Return</h3>
//                         <p className="text-2xl text-gray-800 font-medium my-4">$2,500.00</p>
//                         <p className="text-sm text-gray-800 font-medium">Current value of your investments</p>
//                     </div>
//                     <div data-aos="fade-up" className="w-full sm:w-1/3 text-center bg-orange-100 rounded-lg shadow-lg p-6 mb-5 lg:mb-0">
//                         <h3 className="text-xl font-bold text-amber-800">Annual Return</h3>
//                         <p className="text-2xl text-green-600 font-medium my-4">8.3%</p>
//                         <p className="text-sm text-gray-800 font-medium">Your annual growth rate</p>
//                     </div>
//                     <div data-aos="fade-up" className="w-full sm:w-1/3 text-center bg-orange-100 rounded-lg shadow-lg p-6 mb-5 lg:mb-0">
//                         <h3 className="text-xl font-bold text-amber-800">Total Invested</h3>
//                         <p className="text-2xl text-gray-800 font-medium my-4">$15,000.00</p>
//                         <p className="text-sm text-gray-800 font-medium">Total amount you have invested so far</p>
//                     </div>
//                 </div>

//                 {/* Line Chart - Increased size */}
//                 <div data-aos="fade-up" className="mb-12" style={{ height: '400px' }}>
//                     <Line data={chartData} options={chartOptions} />
//                 </div>

//                 {/* CTA Button */}
//                 <div className="text-center">
//                     <a
//                         href="/"
//                         className="inline-block px-6 py-3 text-lg font-medium text-white bg-amber-600 
// hover:bg-amber-700 rounded-sm border-2 border-amber-800 shadow-md transition"
//                     >
//                         Explore More Investment Insights
//                     </a>
//                 </div>
//             </div>
//         </section>
//     );
// }
