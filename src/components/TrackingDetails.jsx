import React, { useState } from "react";
import moment from "moment";
import {
  FaChevronDown,
  FaChevronUp,
  FaLink,
  FaMapPin,
  FaClock,
  FaCheckDouble,
  FaShippingFast,
  FaMoneyCheckAlt,
} from "react-icons/fa";
import { FaCheck, FaBoxOpen } from "react-icons/fa6";
import { RiCustomerService2Line } from "react-icons/ri";

const TrackingDetails = ({ trackingStage }) => {
  const orderDetail = trackingStage?.data?.orderDetail;
  const trackingDetail = trackingStage?.data?.trackTrail;
  const paymentDetails = trackingStage?.data?.paymentDetails;
  const customerService = trackingStage?.data?.customerService;
  const [visibleIndex, setVisibleIndex] = useState(null);
  const trailLength = trackingStage?.data?.trackTrail.length;
const aramexLink = trackingStage?.data?.aramexLink
  const toggleDetails = (index) => {
    setVisibleIndex(visibleIndex === index ? null : index);
  };
 

  const stageIcons = {
    "Order Placed": <FaBoxOpen />,
    Shipped: <FaShippingFast />,
    "Payment Confirmed": <FaMoneyCheckAlt />,
    // Add more stages and icons as needed
  };

  return (
    <>
      <div className="fade-in">
        <div className="flex flex-col">
          <span className="font-medium text-white opacity-45 text-sm">
            Order ID:
          </span>
          <span className="font-medium text-white text-xl mt-2">
            {orderDetail?.orderId}
          </span>
        </div>
        {/*  tracking details */}
        <div className="flex flex-col my-2 mt-4 ">
          {(trackingStage?.data?.trackTrail || [])
            .slice()
            .reverse()
            .map((stage, index) => {
              const reversedIndex =
                trackingStage.data.trackTrail.length - 1 - index;
              return (
                <div key={index} className="flex gap-5 ">
                  <div
                    className={`flex-[1] flex flex-col-reverse justify-between text-center items-center max-w-6 rounded-lg  
                      ${index < trailLength ? "" : " opacity-0"}
                        `}
                  >
                    <div
                      className={`w-6 h-6 flex items-center justify-center rounded-full ${
                        trackingDetail && trackingDetail[reversedIndex]
                          ? "bg-[#009289]"
                          : "bg-[#009289] opacity-50"
                      }`}
                    >
                      {trackingDetail && trackingDetail[reversedIndex] && (
                        <FaCheck className="text-white text-lg" />
                      )}
                    </div>
                    {reversedIndex !== trailLength - 1 &&
                      trackingDetail &&
                      trackingDetail[reversedIndex] && (
                        <div className="flex-1 border-[1.8px] border-dashed border-spacing-y-9  border-[#f5f5f5d1]"></div>
                      )}
                  </div>

                  {stage && (
                    <div className="flex-[2] flex flex-col gap-5 ">
                      <div
                        key={index}
                        className={`flex flex-col px-2 rounded-md pt-5 transition-all ease-in-out duration-500  relative`}
                      >
                        <div
                          className={`flex  justify-between items-center cursor-pointer ${
                            reversedIndex !==
                              trackingStage?.data?.trackTrail.length - 1 &&
                            "pt-8 "
                          }`}
                          onClick={
                            reversedIndex ===
                            trackingStage?.data?.trackTrail.length - 1
                              ? () => toggleDetails(index)
                              : null
                          }
                        >
                          <div className="flex flex-col">
                            <span className="font-semibold text-white text-base">
                              {stage.stage}
                            </span>
                          </div>

                          <div className="flex flex-col items-end ">
                            {reversedIndex ===
                            trackingStage?.data?.trackTrail.length - 1 ? (
                              visibleIndex === index ? (
                                <FaChevronUp className="text-primary-color" />
                              ) : (
                                <FaChevronDown className="text-primary-color" />
                              )
                            ) : (
                              <div className="flex flex-col items-end text-[#f5f5f5] font-medium  text-sm">
                                <span>
                                  {moment(stage.date).format("hh:mm A")}
                                </span>
                                <span className="text-[#949494] font-medium  text-sm">
                                    {moment(stage.date).format("MMM D, YYYY")}
                                </span>
                              </div>
                            )}
                          </div>
                        </div>
                        {visibleIndex === index && (
                          <div className="flex flex-col mt-4 gap-4 transition-all ease-in-out duration-500 bg-slate-500 bg-opacity-50 px-2 py-3 rounded-md">
                            <div className="flex flex-col gap-4 w-full">
                              
                              <span className="flex gap-2 items-center font-medium text-white text-sm">
                                {stage.date ? (
                                  <FaClock className="text-amber-400 text-lg" />
                                ) : (
                                  ""
                                )}

                                {moment(stage.date).format("hh:mm A")}
                              </span>
                              <span className="flex gap-2 items-center font-medium text-white text-sm">
                                {stage.location ? (
                                  <FaMapPin className="text-amber-400 text-lg" />
                                ) : (
                                  ""
                                )}

                                {stage.location}
                              </span>
                            </div>
                            {/*  if the stage is order placed, show the payment details */}
                            {stage.stage === "Order Placed" && (
                              <div className="flex flex-col gap-2">
                                <span className="flex gap-2 items-center font-medium text-white text-sm">
                                  <FaLink className="text-amber-400 text-lg" />
                                  <a
                                    href={paymentDetails?.paymentLink}
                                    className="text-slate-200 underline"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {paymentDetails?.paymentLink.substring(
                                      0,
                                      20
                                    )}
                                    ...
                                  </a>
                                </span>
                                <span className="mt-2 font-medium text-white text-sm">
                                  Expiry Date:{" "}
                                  {moment(paymentDetails?.expiry).format(
                                    "DD/MM/YYYY"
                                  )}
                                </span>
                              </div>
                            )}
                            {/*  if the stage is shipped show the aramex link for live tracking */}
                            {(stage.stage === "Shipped" || stage.stage === "In Transit") && (
                              <div className="flex flex-col gap-2">
                                <span className="font-medium text-white text-sm">
                                  Aramex Tracking Link:{" "}
                                  <a
                                    href={trackingDetail?.aramexLink}
                                    className="text-[#949494] underline"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    {aramexLink.substring(
                                      0,
                                      40
                                    )}
                                    ...
                                  </a>
                                </span>
                              </div>
                            )}

                            {/* if the stage is payment confirmed i want to display the customer whatsapp link so that the customer can chat with the customer care if they have any issues */}
                            {stage.stage === "Payment Confirmed" && (
                              <div className="flex flex-col gap-2">
                                <div className="flex flex-col gap-2 font-medium text-white text-sm">
                                  <span className="flex gap-2 items-center">
                                    <RiCustomerService2Line className="text-amber-400 text-lg" />
                                    Customer Care{" "}
                                  </span>
                                  <a
                                    href={customerService}
                                    className="text-slate-200 underline"
                                    target="_blank"
                                    rel="noreferrer"
                                  >
                                    Chat with us on WhatsApp for expired orders
                                  </a>
                                </div>
                              </div>
                            )}
                          </div>
                        )}
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};

export default TrackingDetails;
