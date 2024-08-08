import React from 'react';


const Footer = () => {
  return (
    <>
    <footer className="bg-gray-100 text-blue-800 py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
      
        <div className="flex flex-col md:flex-row items-center justify-between mb-8">
          <img src="nexus-logo.png" alt="Nexus Technologies Logo" className="h-16 w-auto mb-4 md:mb-0" />
          <div className="text-center md:text-left">
            <p className="text-lg font-bold text-blue-900">Nexus Technologies</p>
            <p className="text-black">
              At Nexus Technologies, We value every single client we have. We are always glad to hear from you.
            </p>
          </div>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="text-black hover:text-blue-800">
           
            </a>
            <a href="#" className="text-black hover:text-blue-800">
            
            </a>
            <a href="#" className="text-black hover:text-blue-800">
            
            </a>
            <a href="#" className="text-black hover:text-blue-800">
            
            </a>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between border-t border-gray-700 pt-4 mb-4">
          <div className="mb-4 md:mb-0">
            <h2 className="font-bold text-lg mb-2  text-blue-900">Resources</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-blue-800">Support</a></li>
              <li><a href="#" className="text-black hover:text-blue-800">Client Area</a></li>
              <li><a href="#" className="text-black hover:text-blue-800">Knowledge Base</a></li>
              <li><a href="#" className="text-black hover:text-blue-800">Addons</a></li>
            </ul>
          </div>

          <div className="mb-4 md:mb-0">
            <h2 className="font-bold text-lg mb-2  text-blue-900">Company</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-blue-800">About Us</a></li>
              <li><a href="#" className="text-black hover:text-blue-800">Contact Us</a></li>
              <li><a href="#" className="text-black hover:text-blue-800">Portfolio</a></li>
              <li><a href="#" className="text-black hover:text-blue-800">Payment Methods</a></li>
            </ul>
          </div>

          <div>
            <h2 className="font-bold text-lg mb-2  text-blue-900">Legal</h2>
            <ul className="space-y-2">
              <li><a href="#" className="text-black hover:text-blue-800">Terms & Conditions</a></li>
              <li><a href="#" className="text-black hover:text-blue-800">Policies</a></li>
              <li><a href="#" className="text-black hover:text-blue-800">Copyright Policy</a></li>
            </ul>
          </div>
        </div>

        
        <div className="text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Nexus Technologies. All rights reserved.
        </div>
      </div>
    </footer>
    <div className="bg-blue-600 py-4 -mb-10">
        <p className="text-center text-white text-sm">
          2024 © All rights reserved by Nexus Technologies.
        </p>
      </div>
    </>
  );
};

export default Footer;
