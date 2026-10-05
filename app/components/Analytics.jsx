"use client";

import {
  AreaChart,
  Area,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
} from "recharts";
import {
  TrendingUp,
  TrendingDown,
  Users,
  ShoppingCart,
  MousePointerClick,
  Globe,
} from "lucide-react";

const revenueData = [
  { month: "Jan", revenue: 42000 },
  { month: "Feb", revenue: 52000 },
  { month: "Mar", revenue: 48000 },
  { month: "Apr", revenue: 61000 },
  { month: "May", revenue: 72000 },
  { month: "Jun", revenue: 68000 },
  { month: "Jul", revenue: 84000 },
  { month: "Aug", revenue: 92000 },
  { month: "Sep", revenue: 98000 },
  { month: "Oct", revenue: 105000 },
  { month: "Nov", revenue: 112000 },
  { month: "Dec", revenue: 124000 },
];

const ordersData = [
  { month: "Jan", orders: 320 },
  { month: "Feb", orders: 410 },
  { month: "Mar", orders: 380 },
  { month: "Apr", orders: 490 },
  { month: "May", orders: 560 },
  { month: "Jun", orders: 530 },
  { month: "Jul", orders: 680 },
  { month: "Aug", orders: 720 },
  { month: "Sep", orders: 790 },
  { month: "Oct", orders: 850 },
  { month: "Nov", orders: 920 },
  { month: "Dec", orders: 1020 },
];

const customerData = [
  { month: "Jan", customers: 420 },
  { month: "Feb", customers: 510 },
  { month: "Mar", customers: 580 },
  { month: "Apr", customers: 650 },
  { month: "May", customers: 740 },
  { month: "Jun", customers: 820 },
  { month: "Jul", customers: 910 },
  { month: "Aug", customers: 1020 },
  { month: "Sep", customers: 1140 },
  { month: "Oct", customers: 1260 },
  { month: "Nov", customers: 1390 },
  { month: "Dec", customers: 1520 },
];

const trafficData = [
  { name: "Google", value: 42 },
  { name: "Social Media", value: 28 },
  { name: "Direct", value: 18 },
  { name: "Referral", value: 12 },
];

const categoryData = [
  { name: "Electronics", value: 38 },
  { name: "Accessories", value: 27 },
  { name: "Audio", value: 21 },
  { name: "Others", value: 14 },
];

export default function Analytics() {
  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col justify-between gap-4 md:flex-row md:items-center">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Analytics</h1>
          <p className="mt-1 text-sm text-gray-500">
            Track your store performance and business growth
          </p>
        </div>

        <select className="w-fit rounded-lg border border-gray-200 bg-white px-4 py-2.5 text-sm font-medium text-gray-700 outline-none focus:border-gray-400">
          <option>Last 12 Months</option>
          <option>Last 6 Months</option>
          <option>Last 30 Days</option>
          <option>Last 7 Days</option>
        </select>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-4">
        <AnalyticsCard
          title="Total Revenue"
          value="$842,450"
          change="+18.4%"
          positive
          icon={TrendingUp}
        />

        <AnalyticsCard
          title="Total Orders"
          value="8,426"
          change="+12.8%"
          positive
          icon={ShoppingCart}
        />

        <AnalyticsCard
          title="Customers"
          value="12,842"
          change="+15.6%"
          positive
          icon={Users}
        />

        <AnalyticsCard
          title="Conversion Rate"
          value="4.82%"
          change="-2.4%"
          positive={false}
          icon={MousePointerClick}
        />
      </div>

      {/* Revenue Chart */}
      <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
        <div className="mb-6">
          <h2 className="text-lg font-semibold text-gray-900">
            Revenue Overview
          </h2>
          <p className="mt-1 text-sm text-gray-500">
            Revenue performance over the last 12 months
          </p>
        </div>

        <div className="h-[340px] w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#111827" stopOpacity={0.25} />
                  <stop offset="100%" stopColor="#111827" stopOpacity={0} />
                </linearGradient>
              </defs>

              <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

              <XAxis
                dataKey="month"
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
              />

              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fontSize: 12, fill: "#6b7280" }}
                tickFormatter={(value) => `$${value / 1000}k`}
              />

              <Tooltip
                formatter={(value) => [`$${value.toLocaleString()}`, "Revenue"]}
                contentStyle={{
                  borderRadius: "8px",
                  border: "1px solid #e5e7eb",
                }}
              />

              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#111827"
                strokeWidth={3}
                fill="url(#revenueGradient)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Orders + Customer Growth */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Orders */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Orders Overview
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Monthly order performance
            </p>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={ordersData}>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />

                <Tooltip
                  formatter={(value) => [value, "Orders"]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />

                <Bar
                  dataKey="orders"
                  fill="#111827"
                  radius={[5, 5, 0, 0]}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Customer Growth */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-6">
            <h2 className="text-lg font-semibold text-gray-900">
              Customer Growth
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              New customer registrations
            </p>
          </div>

          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <AreaChart data={customerData}>
                <defs>
                  <linearGradient
                    id="customerGradient"
                    x1="0"
                    y1="0"
                    x2="0"
                    y2="1"
                  >
                    <stop
                      offset="0%"
                      stopColor="#6b7280"
                      stopOpacity={0.25}
                    />
                    <stop
                      offset="100%"
                      stopColor="#6b7280"
                      stopOpacity={0}
                    />
                  </linearGradient>
                </defs>

                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />

                <XAxis
                  dataKey="month"
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />

                <YAxis
                  axisLine={false}
                  tickLine={false}
                  tick={{ fontSize: 12, fill: "#6b7280" }}
                />

                <Tooltip
                  formatter={(value) => [value, "Customers"]}
                  contentStyle={{
                    borderRadius: "8px",
                    border: "1px solid #e5e7eb",
                  }}
                />

                <Area
                  type="monotone"
                  dataKey="customers"
                  stroke="#4b5563"
                  strokeWidth={3}
                  fill="url(#customerGradient)"
                />
              </AreaChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      {/* Traffic + Categories */}
      <div className="grid grid-cols-1 gap-6 xl:grid-cols-2">
        {/* Traffic Sources */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
              <Globe size={19} className="text-gray-700" />
            </div>

            <div>
              <h2 className="text-lg font-semibold text-gray-900">
                Traffic Sources
              </h2>
              <p className="text-sm text-gray-500">
                Where your visitors come from
              </p>
            </div>
          </div>

          <div className="flex flex-col items-center gap-6 sm:flex-row">
            <div className="h-[220px] w-full sm:w-1/2">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={trafficData}
                    dataKey="value"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    innerRadius={55}
                    outerRadius={85}
                    paddingAngle={3}
                  >
                    {trafficData.map((entry, index) => (
                      <Cell
                        key={`traffic-${index}`}
                        fill={["#111827", "#4b5563", "#9ca3af", "#d1d5db"][index]}
                      />
                    ))}
                  </Pie>

                  <Tooltip formatter={(value) => [`${value}%`, "Traffic"]} />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="w-full space-y-4 sm:w-1/2">
              {trafficData.map((item, index) => (
                <div
                  key={item.name}
                  className="flex items-center justify-between"
                >
                  <div className="flex items-center gap-2">
                    <span
                      className="h-3 w-3 rounded-full"
                      style={{
                        backgroundColor: [
                          "#111827",
                          "#4b5563",
                          "#9ca3af",
                          "#d1d5db",
                        ][index],
                      }}
                    />

                    <span className="text-sm text-gray-600">
                      {item.name}
                    </span>
                  </div>

                  <span className="text-sm font-semibold text-gray-900">
                    {item.value}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sales by Category */}
        <div className="rounded-xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-gray-900">
              Sales by Category
            </h2>
            <p className="text-sm text-gray-500">
              Product category performance
            </p>
          </div>

          <div className="space-y-5">
            {categoryData.map((category) => (
              <div key={category.name}>
                <div className="mb-2 flex items-center justify-between">
                  <span className="text-sm font-medium text-gray-700">
                    {category.name}
                  </span>

                  <span className="text-sm font-semibold text-gray-900">
                    {category.value}%
                  </span>
                </div>

                <div className="h-2 overflow-hidden rounded-full bg-gray-100">
                  <div
                    className="h-full rounded-full bg-gray-900"
                    style={{ width: `${category.value}%` }}
                  />
                </div>
              </div>
            ))}
          </div>

          <div className="mt-7 border-t border-gray-100 pt-5">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Total Sales</span>
              <span className="text-lg font-bold text-gray-900">
                $842,450
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function AnalyticsCard({
  title,
  value,
  change,
  positive,
  icon: Icon,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5 shadow-sm">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-gray-500">{title}</p>

          <h3 className="mt-2 text-2xl font-bold text-gray-900">
            {value}
          </h3>
        </div>

        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gray-100">
          <Icon size={19} className="text-gray-700" />
        </div>
      </div>

      <div className="mt-4 flex items-center gap-2">
        <span
          className={`text-xs font-semibold ${
            positive ? "text-green-600" : "text-red-500"
          }`}
        >
          {change}
        </span>

        <span className="text-xs text-gray-400">
          vs last period
        </span>
      </div>
    </div>
  );
}