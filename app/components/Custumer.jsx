"use client";

import { useState } from "react";
import {
  Search,
  SlidersHorizontal,
  MoreHorizontal,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";

const customers = [
  {
    id: 1,
    name: "John Smith",
    email: "john@example.com",
    orders: 24,
    spent: "$2,480.00",
    joined: "Jan 12, 2026",
    status: "Active",
  },
  {
    id: 2,
    name: "Sarah Wilson",
    email: "sarah@example.com",
    orders: 18,
    spent: "$1,920.00",
    joined: "Feb 08, 2026",
    status: "Active",
  },
  {
    id: 3,
    name: "Michael Brown",
    email: "michael@example.com",
    orders: 31,
    spent: "$4,250.00",
    joined: "Jan 24, 2026",
    status: "VIP",
  },
  {
    id: 4,
    name: "Emily Davis",
    email: "emily@example.com",
    orders: 12,
    spent: "$980.00",
    joined: "Mar 15, 2026",
    status: "Active",
  },
  {
    id: 5,
    name: "David Miller",
    email: "david@example.com",
    orders: 7,
    spent: "$620.00",
    joined: "Apr 02, 2026",
    status: "Inactive",
  },
  {
    id: 6,
    name: "Jessica Moore",
    email: "jessica@example.com",
    orders: 27,
    spent: "$3,150.00",
    joined: "Feb 19, 2026",
    status: "VIP",
  },
  {
    id: 7,
    name: "Daniel Taylor",
    email: "daniel@example.com",
    orders: 15,
    spent: "$1,340.00",
    joined: "May 11, 2026",
    status: "Active",
  },
  {
    id: 8,
    name: "Sophia Anderson",
    email: "sophia@example.com",
    orders: 21,
    spent: "$2,760.00",
    joined: "Mar 28, 2026",
    status: "Active",
  },
];

export default function Customers() {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredCustomers = customers.filter((customer) => {
    const matchesSearch =
      customer.name
        .toLowerCase()
        .includes(search.toLowerCase()) ||
      customer.email
        .toLowerCase()
        .includes(search.toLowerCase());

    const matchesFilter =
      filter === "All" || customer.status === filter;

    return matchesSearch && matchesFilter;
  });

  return (
    <div className="space-y-6">

      {/* Heading */}
      <div>
        <h1 className="text-2xl font-bold text-gray-900">
          Customers
        </h1>

        <p className="mt-1 text-sm text-gray-500">
          Manage your customers and their activity.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">

        <CustomerStat
          title="Total Customers"
          value="8,549"
          description="All registered customers"
        />

        <CustomerStat
          title="New Customers"
          value="426"
          description="This month"
        />

        <CustomerStat
          title="Active Customers"
          value="7,892"
          description="92.3% of total"
        />

        <CustomerStat
          title="VIP Customers"
          value="312"
          description="High value customers"
        />

      </div>

      {/* Customer Table */}
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
              placeholder="Search customers..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />

          </div>

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
              <option value="All">
                All Customers
              </option>

              <option value="Active">
                Active
              </option>

              <option value="VIP">
                VIP
              </option>

              <option value="Inactive">
                Inactive
              </option>
            </select>

          </div>

        </div>

        {/* Table */}
        <div className="overflow-x-auto">

          <table className="w-full min-w-[900px]">

            <thead>
              <tr className="border-b border-gray-100 bg-gray-50/50 text-left">

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Customer
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Orders
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Total Spent
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Joined
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Status
                </th>

                <th className="px-6 py-4 text-xs font-semibold uppercase tracking-wide text-gray-400">
                  Action
                </th>

              </tr>
            </thead>

            <tbody>

              {filteredCustomers.map((customer) => (

                <tr
                  key={customer.id}
                  className="border-b border-gray-50 last:border-0 hover:bg-gray-50"
                >

                  {/* Customer */}
                  <td className="px-6 py-4">

                    <div className="flex items-center gap-3">

                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gray-900 text-sm font-semibold text-white">
                        {customer.name.charAt(0)}
                      </div>

                      <div>
                        <p className="text-sm font-semibold text-gray-900">
                          {customer.name}
                        </p>

                        <p className="mt-1 text-xs text-gray-400">
                          {customer.email}
                        </p>
                      </div>

                    </div>

                  </td>

                  {/* Orders */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-medium text-gray-700">
                      {customer.orders}
                    </span>
                  </td>

                  {/* Spent */}
                  <td className="px-6 py-4">
                    <span className="text-sm font-semibold text-gray-900">
                      {customer.spent}
                    </span>
                  </td>

                  {/* Joined */}
                  <td className="px-6 py-4">
                    <span className="text-sm text-gray-500">
                      {customer.joined}
                    </span>
                  </td>

                  {/* Status */}
                  <td className="px-6 py-4">
                    <CustomerStatus status={customer.status} />
                  </td>

                  {/* Action */}
                  <td className="px-6 py-4">

                    <button className="rounded-lg p-2 text-gray-400 transition hover:bg-gray-100 hover:text-gray-700">
                      <MoreHorizontal size={19} />
                    </button>

                  </td>

                </tr>

              ))}

              {filteredCustomers.length === 0 && (
                <tr>
                  <td
                    colSpan="6"
                    className="px-6 py-12 text-center text-sm text-gray-500"
                  >
                    No customers found.
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
              {filteredCustomers.length}
            </span>{" "}
            of{" "}
            <span className="font-medium text-gray-900">
              {customers.length}
            </span>{" "}
            customers
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

function CustomerStat({ title, value, description }) {
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

function CustomerStatus({ status }) {
  const styles = {
    Active: "bg-green-50 text-green-600",
    VIP: "bg-purple-50 text-purple-600",
    Inactive: "bg-gray-100 text-gray-500",
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