import React from "react";
import swimmingImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";

const Qzone = () => {
  return (
    <div className="bg-base-200 p-3">
      <h2 className="font-bold mb-5">QZone</h2>
      <div className="space-y-5">
        <img src={swimmingImage} alt="" className="mb-3" />
        <img src={classImage} alt="" className="mb-3" />
        <img src={playImage} alt="" className="mb-3" />
      </div>
    </div>
  );
};

export default Qzone;
