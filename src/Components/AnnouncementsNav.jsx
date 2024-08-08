import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCircle } from '@fortawesome/free-solid-svg-icons'

const AnnouncementsNav = () => {
  return (
    <div className="bg-gray-100 py-3 overflow-hidden">
      <div className="whitespace-nowrap flex animate-marquee text-sm">
        <p className="text-black mr-8 text-sm">
        <FontAwesomeIcon className="text-xxs text-blue-600" icon={faCircle} /> Basic Hosting Packages Price Revision
        </p>
        <p className="text-black mr-8 text-sm">
        <FontAwesomeIcon className="text-xxs text-blue-600" icon={faCircle} />  Extended Lifecycle Support Fee on End-Of-Life Operating Systems
        </p>
        <p className="text-black mr-8 text-sm">
        <FontAwesomeIcon className="text-xxs text-blue-600" icon={faCircle} /> Important Announcement: .Com Domains Price Revision
        </p>
        <p className="text-black mr-8 text-sm">
        <FontAwesomeIcon className="text-xxs text-blue-600" icon={faCircle} /> New Host Zero - Simplified Shared Hosting
        </p>
        <p className="text-black mr-8 text-sm">
        <FontAwesomeIcon className="text-xxs text-blue-600" icon={faCircle} />  Hybrid Cloud / DCVM Backup Policy & Pricing Update
        </p>
      </div>
    </div>
  );
};

export default AnnouncementsNav; // Make sure this is a default export
