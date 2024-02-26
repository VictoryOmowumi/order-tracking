import React from 'react'

const OrderDetails = ({ orderDetail }) => {
  const orderDetails = orderDetail?.data?.orderDetail;
  const orderList = orderDetails?.orderItems;  
   const total = orderList.reduce((acc, item) => acc + item.price, 0);
 
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
        <table className="w-full  table-fixed border-collapse text-center">
          <thead className="bg-white w-full  rounded-t-md ">
            <tr className="">
              <th className="text-primary-color text-sm font-medium py-4 px-2 rounded-tl-md ">
                Product
              </th>
              <th className="text-primary-color text-sm font-medium py-4 px-2 ">
                Quantity
              </th>
              <th className="text-primary-color text-sm font-medium py-4 px-2 rounded-tr-md ">
                Price
              </th>
            </tr>
          </thead>
          <tbody className="">
            {orderList?.map((item, index) => (
              <tr key={index}>
                <td className="text-white text-sm font-medium py-6 px-2">
                  {item.description}
                </td>
                <td className="text-white text-sm font-medium py-6 px-2">
                  {item.quantity}
                </td>
                <td className="text-white text-sm font-medium py-6 px-2">
                  ₦{item.price.toLocaleString()}
                </td>
              </tr>
            ))}
            {/*  add a row for the total */}

            <tr className="border-t">
              <td className="text-white text-xl font-medium py-6 px-2">
                Total
              </td>
              <td className="text-white text-sm font-medium py-6 px-2"></td>
              <td className="text-white text-xl font-medium py-6 px-2">
                ₦ {total.toLocaleString()}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default OrderDetails