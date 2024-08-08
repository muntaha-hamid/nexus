import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar,faPaperPlane } from '@fortawesome/free-solid-svg-icons'

const StatsSection = () => {
  return (
    <>
    <div className="bg-white py-8">
      <div className="max-w-6xl mx-auto px-4 md:px-10">
        <div className="flex justify-around items-center  py-4">
          <div className="text-center">
            <p className="text-5xl font-bold text-black mb-5">10K</p>
            <p className="text-gray-700 text-2xl font-bold">Customers Globally</p>
          </div>
          <div className="text-center border-l border-gray-300 pl-4">
            <p className="text-5xl font-bold text-black">7,598</p>
            <p className="text-blue-900 text-2xl font-bold"> <FontAwesomeIcon icon={faPaperPlane} /> Capterra</p>
            <p className='text-yellow-400'><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></p>
          </div>
          <div className="text-center border-l border-gray-300 pl-4">
            <p className="text-5xl font-bold text-black">8,435</p>
            <p className="text-gray-700 text-2xl font-bold"> <FontAwesomeIcon className='text-green-700' icon={faStar} /> Trustpilot</p>
            <p className='text-green-700'><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></p>
          </div>
          <div className="text-center border-l border-gray-300 pl-4">
            <p className="text-5xl font-bold text-black">2,598</p>
            <p className="text-2xl font-bold text-red-600">G2</p>
            <p className='text-red-600'><FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} /></p>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default StatsSection;
