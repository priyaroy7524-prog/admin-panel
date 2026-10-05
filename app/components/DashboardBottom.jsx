"use client";

import {
  MoreHorizontal,
  ArrowUpRight,
  ArrowDownRight,
} from "lucide-react";

const orders = [
  {
    id: "#ORD-1024",
    customer: "John Smith",
    product: "Wireless Headphones",
    amount: "$129.00",
    status: "Completed",
  },
  {
    id: "#ORD-1023",
    customer: "Sarah Wilson",
    product: "Smart Watch",
    amount: "$249.00",
    status: "Pending",
  },
  {
    id: "#ORD-1022",
    customer: "Michael Brown",
    product: "Gaming Mouse",
    amount: "$79.00",
    status: "Completed",
  },
  {
    id: "#ORD-1021",
    customer: "Emily Davis",
    product: "Mechanical Keyboard",
    amount: "$159.00",
    status: "Processing",
  },
  {
    id: "#ORD-1020",
    customer: "David Miller",
    product: "USB-C Monitor",
    amount: "$399.00",
    status: "Completed",
  },
];

const reviews = [
  {
    name: "Sophia Anderson",
    product: "Wireless Headphones",
    rating: 5,
    review: "Amazing product and fast delivery.",
  },
  {
    name: "James Wilson",
    product: "Smart Watch",
    rating: 4,
    review: "Really good quality for the price.",
  },
  {
    name: "Olivia Taylor",
    product: "Gaming Mouse",
    rating: 5,
    review: "Very smooth and comfortable.",
  },
];

const progressData = [
  {
    title: "Direct Sales",
    value: "72%",
    amount: "$18,240",
  },
  {
    title: "Social Media",
    value: "54%",
    amount: "$13,680",
  },
  {
    title: "Email Marketing",
    value: "38%",
    amount: "$9,420",
  },
];

export default function DashboardBottom() {
  return (
    <div className="mt-6 space-y-6">

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-[1.7fr_1fr]">

        
        <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Recent Orders
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Latest customer orders
              </p>
            </div>

            <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
              View All
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full min-w-[650px]">
              <thead>
                <tr className="border-b border-gray-100 text-left">
                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Order
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Customer
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Product
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Amount
                  </th>

                  <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                    Status
                  </th>
                </tr>
              </thead>

              <tbody>
                {orders.map((order) => (
                  <tr
                    key={order.id}
                    className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-900">
                      {order.id}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.customer}
                    </td>

                    <td className="px-6 py-4 text-sm text-gray-600">
                      {order.product}
                    </td>

                    <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                      {order.amount}
                    </td>

                    <td className="px-6 py-4">
                      <StatusBadge status={order.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">

          <div className="mb-6 flex items-center justify-between">
            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Sales Analytics
              </h2>

              <p className="mt-1 text-sm text-gray-500">
                Sales by channel
              </p>
            </div>

            <button>
              <MoreHorizontal
                size={20}
                className="text-gray-400"
              />
            </button>
          </div>

          <div className="space-y-6">
            {progressData.map((item) => (
              <div key={item.title}>

                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {item.title}
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    {item.value}
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-900"
                    style={{ width: item.value }}
                  />
                </div>

                <p className="mt-2 text-xs text-gray-400">
                  Revenue: {item.amount}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-gray-100 pt-5">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">
                  Total Growth
                </p>

                <p className="mt-1 text-2xl font-bold text-gray-900">
                  18.6%
                </p>
              </div>

              <div className="flex items-center gap-1 text-sm font-semibold text-green-600">
                <ArrowUpRight size={17} />
                4.8%
              </div>
            </div>
          </div>
        </div>
      </div>

     
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

        <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
          <div>
            <h2 className="text-lg font-semibold text-gray-900">
              Latest Reviews
            </h2>

            <p className="mt-1 text-sm text-gray-500">
              Recent customer feedback
            </p>
          </div>

          <button className="text-sm font-medium text-gray-600 hover:text-gray-900">
            View All
          </button>
        </div>

        <div className="divide-y divide-gray-100">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="flex flex-col gap-4 px-6 py-5 sm:flex-row sm:items-center sm:justify-between"
            >

              <div className="flex items-center gap-4">

                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <p className="text-sm font-semibold text-gray-900">
                    {review.name}
                  </p>

                  <p className="mt-1 text-xs text-gray-400">
                    {review.product}
                  </p>
                </div>
              </div>

              <div className="flex-1 sm:px-8">
                <div className="mb-1 flex items-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <span
                      key={star}
                      className={
                        star <= review.rating
                          ? "text-yellow-400"
                          : "text-gray-200"
                      }
                    >
                      ★
                    </span>
                  ))}
                </div>

                <p className="text-sm text-gray-500">
                  {review.review}
                </p>
              </div>

              <button className="self-start text-gray-400 hover:text-gray-700 sm:self-center">
                <MoreHorizontal size={20} />
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-green-50 text-green-600",
    Pending: "bg-yellow-50 text-yellow-600",
    Processing: "bg-blue-50 text-blue-600",
  };

  return (
    <span
      className={`inline-flex rounded-full px-3 py-1 text-xs font-semibold ${
        styles[status] || "bg-gray-100 text-gray-600"
      }`}
    >
      {status}
    </span>
  );
}