import React from "react";

function BottomNav(){

    return(
        <>
          <nav className="bg-white text-black px-6 py-3 flex items-center justify-between">
      <div className="flex items-center">
        <img src="nexus-logo.png" alt="Logo" className="h-16 w-auto mr-4" />
      </div>

      <div className="hidden md:flex space-x-8 font-semibold">
        <a href="#" className="hover:underline ">Web Hosting</a>
        <a href="#" className="hover:underline">Domains</a>
        <a href="#" className="hover:underline">Developments</a>
        <a href="#" className="hover:underline">Solutions</a>
        <a href="#" className="hover:underline">About Us</a>
      </div>

      <div className="flex items-center">
        <button className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-yellow-300">
          Client Area
        </button>
      </div>
    </nav>
        </>
    )

}

export default BottomNav;