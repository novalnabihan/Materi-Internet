// import React, { useState, useEffect } from 'react';
// import { useInView } from 'react-intersection-observer';

// // Navbar Component
// const Navbar = () => {
//   return (
//     <nav className="fixed top-0 left-0 right-0 bg-white shadow-md z-50">
//       <div className="max-w-7xl mx-auto px-4">
//         <div className="flex justify-between h-16 items-center">
//           <div className="flex space-x-4">
//             <a href="#internet" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
//               Internet
//             </a>
//             <a href="#http" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
//               HTTP/HTTPS
//             </a>
//             <a href="#domain" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
//               Domain
//             </a>
//             <a href="#hosting" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
//               Hosting
//             </a>
//             <a href="#dns" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
//               DNS
//             </a>
//             <a href="#browser" className="px-3 py-2 rounded-md text-gray-700 hover:bg-gray-100">
//               Browser
//             </a>
//           </div>
//         </div>
//       </div>
//     </nav>
//   );
// };

// // Section Component
// const Section = ({ title, content, image }) => {
//   const [ref, inView] = useInView({
//     threshold: 0.5,
//     triggerOnce: false
//   });

//   useEffect(() => {
//     if (inView) {
//       // Update the left sidebar title when this section is in view
//       document.getElementById('current-section').innerText = title;
//     }
//   }, [inView, title]);

//   return (
//     <div ref={ref} className="mb-16">
//       <h2 className="text-2xl font-bold mb-6">{title}</h2>
//       <div className="prose max-w-none">
//         <p>{content}</p>
//         {image && (
//           <div className="my-8 border-2 border-gray-200 rounded-lg p-4">
//             <img 
//               src="/api/placeholder/800/400"
//               alt="Content illustration"
//               className="w-full h-auto object-cover rounded"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// // Main Layout Component
// const Layout = () => {
//   return (
//     <div className="min-h-screen pt-16"> {/* pt-16 to account for fixed navbar */}
//       <Navbar />
//       <div className="max-w-7xl mx-auto px-4 py-8">
//         <div className="flex gap-8">
//           {/* Left Sidebar - Current Section Title */}
//           <div className="w-1/4">
//             <div className="sticky top-24">
//               <h2 id="current-section" className="text-xl font-bold">
//                 {/* This will be updated dynamically based on scroll position */}
//               </h2>
//             </div>
//           </div>

//           {/* Main Content Area */}
//           <div className="w-3/4">
//             <Section
//               title="Pengertian Domain"
//               content="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
//               image={true}
//             />
//             <Section
//               title="Fungsi Domain"
//               content="Vestibulum et tortor mattis neque gravida venenatis sed eget est."
//               image={true}
//             />
//             <Section
//               title="Perbedaan Domain dan URL"
//               content="Integer congue ac mauris ut ultrices. Aenean at posuere ipsum."
//               image={true}
//             />
//             {/* Add more sections as needed */}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Layout;