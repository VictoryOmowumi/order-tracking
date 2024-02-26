import React, { useState } from "react";
import TrackingDetails from "./TrackingDetails";
import OrderDetails from "./OrderDetails";

const BottomContainer = ({ trackingStages, error }) => {
  const [activeTab, setActiveTab] = useState("Tracking");

  const [isExpanded, setIsExpanded] = useState(true);

  const handleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div
      className={`bg-secondary-color w-full flex flex-col bottom-container py-4 
        ${isExpanded ? "h-full expand" : "h-16 fixed bottom-0 collapsed"}
        `}
    >
      <div className="line" onClick={handleExpand}></div>
      <div
        className={`mt-4 flex justify-between w-11/12 mx-auto h-16 bg-[#717171] bg-opacity-45 rounded-md  items-center transition-all ease-in-out 
            ${isExpanded ? "expand" : "hidden collapsed"}
            ${activeTab === "Tracking" ? "slide-in" : "slide-in "}
          `}
      >
        <div
          className={`tab font-medium h-full flex-1 py-0 md:py-6 flex justify-center items-center rounded-l-md transition-all ease-in-out cursor-pointer ${
            activeTab === "Tracking" ? "active bg-primary-color" : ""
          } `}
          onClick={() => {
          
            setTimeout(() => {
              setActiveTab("Tracking");
            }, 300);
          }}
        >
          Tracking Details
        </div>
        <div
          className={`tab font-medium h-full flex-1 py-0 md:py-6  flex justify-center items-center rounded-r-md transition-all ease-in-out cursor-pointer ${
            activeTab === "Order Details" ? "active bg-primary-color" : ""
          }`}
          onClick={() => {
            
            setTimeout(() => {
              setActiveTab("Order Details");
      
            }, 500);
          }}
        >
          Order Details
        </div>
      </div>

      <div
        className={`px-3 flex-1 mt-3 w-full md:w-11/12 mx-auto transition-all ease-in-out 
        ${activeTab === "Tracking" ? "slide-in" : "slide-in "}
        ${isExpanded ? "expand" : "hidden collapsed"}
        
      `}
      >
        {activeTab === "Tracking" ? (
          <TrackingDetails trackingStage={trackingStages} error={error} />
        ) : (
          <OrderDetails orderDetail={trackingStages} />
        )}
      </div>
    </div>
  );
};

export default BottomContainer;
