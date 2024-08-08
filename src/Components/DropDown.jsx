import React,{useState} from "react";


const DropDown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block text-left">
      <button
        onClick={toggleDropdown}
        className="bg-white border-none text-black cursor-pointer mr-2.5 px-2.5 py-0 rounded-lg"
      >
        PKR
      </button>
      <div
        className={`absolute right-0 mt-2 w-48 bg-white text-black border border-gray-300 rounded shadow-lg ${isOpen ? 'block' : 'hidden'}`}
      >
        <a href="#" className="block px-2.5 py-0 w-2.5 hover:bg-gray-100">USD</a>
        <a href="#" className="block px-2.5 py-0 hover:bg-gray-100">SAR</a>
      </div>
    </div>
  );
};

export default DropDown;
