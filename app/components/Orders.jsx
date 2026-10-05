"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  Download,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const orders = [
  {
    id: "#ORD-1024",
    customer: "John Smith",
    email: "john@example.com",
    product: "Wireless Headphones",
    amount: "$129.00",
    status: "Completed",
    date: "Sep 29, 2026",
  },
  {
    id: "#ORD-1023",
    customer: "Sarah Wilson",
    email: "sarah@example.com",
    product: "Smart Watch",
    amount: "$249.00",
    status: "Pending",
    date: "Sep 29, 2026",
  },
  {
    id: "#ORD-1022",
    customer: "Michael Brown",
    email: "michael@example.com",
    product: "Gaming Mouse",
    amount: "$79.00",
    status: "Completed",
    date: "Sep 28, 2026",
  },
  {
    id: "#ORD-1021",
    customer: "Emily Davis",
    email: "emily@example.com",
    product: "Mechanical Keyboard",
    amount: "$159.00",
    status: "Processing",
    date: "Sep 28, 2026",
  },
  {
    id: "#ORD-1020",
    customer: "David Miller",
    email: "david@example.com",
    product: "USB-C Monitor",
    amount: "$399.00",
    status: "Completed",
    date: "Sep 27, 2026",
  },
  {
    id: "#ORD-1019",
    customer: "Jessica Moore",
    email: "jessica@example.com",
    product: "Laptop Stand",
    amount: "$89.00",
    status: "Cancelled",
    date: "Sep 27, 2026",
  },
  {
    id: "#ORD-1018",
    customer: "Daniel Taylor",
    email: "daniel@example.com",
    product: "Bluetooth Speaker",
    amount: "$119.00",
    status: "Processing",
    date: "Sep 26, 2026",
  },
  {
    id: "#ORD-1017",
    customer: "Sophia Anderson",
    email: "sophia@example.com",
    product: "Webcam",
    amount: "$99.00",
    status: "Completed",
    date: "Sep 26, 2026",
  },
];

export default function Orders() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredOrders = orders.filter((order) => {
    const matchesSearch =
      order.id.toLowerCase().includes(search.toLowerCase()) ||
      order.customer.toLowerCase().includes(search.toLowerCase()) ||
      order.product.toLowerCase().includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || order.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">

      {/* Page Heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Orders
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage and track all customer orders.
        </p>
      </div>

      {/* Top Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <OrderStat
          title="Total Orders"
          value="1,248"
          description="All orders"
        />

        <OrderStat
          title="Completed"
          value="986"
          description="79% of total"
        />

        <OrderStat
          title="Pending"
          value="126"
          description="10% of total"
        />

        <OrderStat
          title="Cancelled"
          value="42"
          description="3% of total"
        />

      </div>

      {/* Orders Table */}
      <div className="rounded-xl border border-gray-200 bg-white shadow-sm">

        {/* Toolbar */}
        <div className="flex flex-col gap-4 border-b border-gray-100 p-5 lg:flex-row lg:items-center lg:justify-between">

          {/* Search */}
          <div className="flex h-10 w-full items-center gap-2 rounded-lg border border-gray-200 px-3 lg:w-[320px]">
            <Search
              size={18}
              className="text-gray-400"
            />

            <input
              type="text"
              placeholder="Search orders..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>

          <div className="flex flex-wrap gap-3">

            {/* Filter */}
            <div className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-3">
              <SlidersHorizontal
                size={17}
                className="text-gray-500"
              />

              <select
                value={filter}
                onChange={(e) => setFilter(e.target.value)}
                className="bg-transparent text-sm text-gray-600 outline-none"
              >
                <option value="All">All Status</option>
                <option value="Completed">Completed</option>
                <option value="Pending">Pending</option>
                <option value="Processing">Processing</option>
                <option value="Cancelled">Cancelled</option>
              </select>
            </div>

            {/* Export */}
            <button className="flex h-10 items-center gap-2 rounded-lg border border-gray-200 px-4 text-sm font-medium text-gray-600 transition hover:bg-gray-50">
              <Download size={17} />
              Export
            </button>

          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[950px]">

            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-left">

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Order ID
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

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Date
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>
              {filteredOrders.map((order) => (

                <tr
                  key={order.id}
                  className="border-b border-gray-50 transition last:border-0 hover:bg-gray-50"
                >

                  {/* Order ID */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">
                      {order.id}
                    </span>
                  </td>

                  {/* Customer */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-gray-900 text-xs font-semibold text-white">
                        {order.customer.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-medium text-gray-900">
                          {order.customer}
                        </p>

                        <p className="text-xs text-gray-400">
                          {order.email}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Product */}
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {order.product}
                  </td>

                  {/* Amount */}
                  <td className="px-6 py-4 text-sm font-semibold text-gray-900">
                    {order.amount}
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <StatusBadge status={order.status} />
                  </td>

                  {/* Date */}
                  <td className="px-6 py-4 text-sm text-gray-500">
                    {order.date}
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4">
                    <button className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
                      <MoreHorizontal size={19} />
                    </button>
                  </td>

                </tr>

              ))}

              {filteredOrders.length === 0 && (
                <tr>
                  <td
                    colSpan="7"
                    className="px-6 py-12 text-center text-sm text-gray-500"
                  >
                    No orders found.
                  </td>
                </tr>
              )}

            </tbody>

          </table>

        </div>

        {/* Pagination */}
        <div className="flex flex-col gap-4 border-t border-gray-100 px-6 py-4 sm:flex-row sm:items-center sm:justify-between">

          <p className="text-sm text-gray-500">
            Showing{" "}
            <span className="font-medium text-gray-900">
              {filteredOrders.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-900">
              {orders.length}
            </span>{" "}
            orders
          </p>

          <div className="flex items-center gap-1">

            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
              <ChevronLeft size={16} />
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-lg bg-gray-900 text-sm font-medium text-white">
              1
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-600 hover:bg-gray-100">
              2
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-lg text-sm text-gray-600 hover:bg-gray-100">
              3
            </button>

            <button className="flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-400 hover:bg-gray-50">
              <ChevronRight size={16} />
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}

function OrderStat({ title, value, description }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">

      <p className="text-sm text-gray-500">
        {title}
      </p>

      <p className="mt-2 text-2xl font-bold text-gray-900">
        {value}
      </p>

      <p className="mt-1 text-xs text-gray-400">
        {description}
      </p>

    </div>
  );
}

function StatusBadge({ status }) {
  const styles = {
    Completed: "bg-green-50 text-green-600",
    Pending: "bg-yellow-50 text-yellow-600",
    Processing: "bg-blue-50 text-blue-600",
    Cancelled: "bg-red-50 text-red-600",
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