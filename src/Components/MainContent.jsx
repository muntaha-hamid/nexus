import React from "react";

const MainContent = () => {
  return (
    <>
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 md:px-10"
      
    >
      <div className="max-w-6xl w-full bg-transparent bg-opacity-80 rounded-lg shadow-lg p-8 md:flex md:items-center">
      
        <div className="md:w-1/2 mb-8 md:mb-0">
          <h1 className="text-3xl md:text-4xl font-bold text-blue-600 mb-4">
            Welcome to Our Service
          </h1>
          <ul className="list-disc list-inside text-gray-700 mb-6">
            <li className="mb-2">High-quality service</li>
            <li className="mb-2">Affordable prices</li>
            <li className="mb-2">Expert support team</li>
            <li className="mb-2">User-friendly interface</li>
            <li className="mb-2">24/7 customer support</li>
          </ul>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition duration-300">
            Get Started
          </button>
        </div>

        <div className="md:w-1/2 flex justify-center md:justify-end">
          <img
            src="1-1.png"
            alt="Right Image"
            className="w-2/3 md:w-full h-auto"
          />
        </div>
      </div>
    </div>
    </>
  );
};

export default MainContent;
