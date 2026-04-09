import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

const FindUs = () => {
  return (
    <div>
      <h2 className="font-bold mb-5">Find Us on</h2>
      <div className="join join-vertical w-full">
        <button className="btn bg-base-100 join-item justify-start">
          <FaFacebook /> Facebook
        </button>
        <button className="btn bg-base-100 join-item justify-start">
          <FaTwitter /> Twitter
        </button>
        <button className="btn bg-base-100 join-item justify-start">
          <FaInstagram />
          Instagram
        </button>
      </div>
    </div>
  );
};

export default FindUs;
