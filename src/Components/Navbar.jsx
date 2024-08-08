import React, { useState, useEffect } from 'react';
import './Navbar.css';
import DropDown from './DropDown';
const Navbar = () => {
  const [blink, setBlink] = useState(true);
 
  useEffect(() => {
    const blinkInterval = setInterval(() => {
      setBlink((prevBlink) => !prevBlink);
    }, 1000); // Toggle blink state every second

    return () => clearInterval(blinkInterval); // Cleanup on component unmount
  }, []);

  const Dropdown = () => {
    const [isOpen, setIsOpen] = useState(false);
  
    const toggleDropdown = () => {
      setIsOpen(!isOpen);
    }
    };

  return (
    <div className="top-navbar bg-blue-700 text-white p-2.5 flex justify-between items-center -mt-8  -mx-8 ">
      <div className="contact-info text-sm">
        <span className='ml-10'>24/7 technical support</span> |
        <span className='mr-2.5'>UAN :+923000341140</span> |
        <span className='mr-2.5'>support@nexus.pk</span>
      </div>
      <div className="navbar-right flex items-center mr-24">
        <button className="btn bg-transparent border-none text-white cursor-pointer mr-2.5 knowledgebase">Knowledgebase</button>
        <button className={`btn bg-transparent border-none cursor-pointer mr-2.5 promotions text-yellow-300 ${blink ? 'blink' : ''}`}>
          Promotions
        </button>
      <DropDown />
    </div>
      </div>
  );
};

export default Navbar;
