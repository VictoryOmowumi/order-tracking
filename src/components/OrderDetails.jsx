import React from 'react'

const OrderDetails = ({ orderDetail }) => {
  const orderDetails = orderDetail?.data?.orderDetail;
  const orderList = orderDetails?.orderItems;  
   
  return (
    <div className="fade-in flex flex-col h-max">
      <div className="flex flex-col">
        <span className="font-medium text-[#949494] text-sm">
          Order ID:
        </span>
        <span className="font-medium text-white text-base">
          {orderDetails?.orderId}
        </span>
      </div>

      <div className="mt-2 flex flex-col">
        <span className="font-medium text-[#949494] text-sm">
          Destination:
        </span>
        <span className="font-medium text-white text-base">
          {orderDetails?.deliveryAddress}
        </span>
      </div>

      {/*  table with product details */}
      <div className="mt-8">
        <table className="w-full  table-fixed border-collapse ">
          <thead className="bg-white w-full  rounded-t-md ">
            <tr className="w-full">
              {/* <th className="text-primary-color text-sm font-medium py-4 px-2  ">
                SKU
              </th> */}
              <th className="text-primary-color text-sm font-medium py-4 px-2 w-[70%] rounded-tl-md">
                Description
              </th>
              <th className="text-primary-color text-sm font-medium py-4 w-[30%] rounded-tr-md ">
                Quantity
              </th>
            </tr>
          </thead>
          <tbody className="">
            {orderList?.map((item, index) => (
              <tr key={index}>
                {/* <td className="text-white text-sm font-medium py-6 px-2">
                  {item.sku}
                </td> */}
                <td className="text-white text-sm font-medium py-6 px-2">
                  {item.description}
                </td>
                <td className="text-white text-sm font-medium py-6 text-center">
                  {item.quantity}
                </td>
              </tr>
            ))}
           
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails