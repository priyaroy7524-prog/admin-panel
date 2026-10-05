"use client";

import {
  MoreHorizontal,
  ArrowUpRight,
  Star,
} from "lucide-react";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const salesData = [
  { date: "01 May", sales: 18000, previous: 14000 },
  { date: "05 May", sales: 22000, previous: 19000 },
  { date: "10 May", sales: 21000, previous: 21000 },
  { date: "15 May", sales: 30000, previous: 25000 },
  { date: "20 May", sales: 43000, previous: 35000 },
  { date: "25 May", sales: 28000, previous: 32000 },
  { date: "30 May", sales: 20000, previous: 25000 },
];

const ordersData = [
  { day: "Mon", orders: 35 },
  { day: "Tue", orders: 48 },
  { day: "Wed", orders: 40 },
  { day: "Thu", orders: 62 },
  { day: "Fri", orders: 38 },
  { day: "Sat", orders: 52 },
  { day: "Sun", orders: 68 },
];

const customersData = [
  { date: "01 May", customers: 220 },
  { date: "05 May", customers: 190 },
  { date: "10 May", customers: 240 },
  { date: "15 May", customers: 180 },
  { date: "20 May", customers: 350 },
  { date: "25 May", customers: 300 },
  { date: "30 May", customers: 390 },
];

const couponData = [
  { name: "Percentage discount", value: 72 },
  { name: "Fixed amount discount", value: 18 },
  { name: "Fixed product discount", value: 10 },
];

const payingData = [
  { name: "Paying customers", value: 90 },
  { name: "Non-paying customers", value: 10 },
];

const projectionData = [
  { month: "Jan 23", projected: 42000, actual: 39000 },
  { month: "Feb 23", projected: 36000, actual: 33000 },
  { month: "Mar 23", projected: 45000, actual: 47000 },
  { month: "Apr 23", projected: 50000, actual: 48000 },
  { month: "May 23", projected: 40000, actual: 42000 },
  { month: "Jun 23", projected: 36000, actual: 35000 },
  { month: "Jul 23", projected: 44000, actual: 45000 },
  { month: "Aug 23", projected: 39000, actual: 37000 },
];

const returningData = [
  { month: "Feb", first: 70, third: 40, fifth: 60 },
  { month: "Mar", first: 80, third: 55, fifth: 70 },
  { month: "Apr", first: 65, third: 45, fifth: 58 },
  { month: "May", first: 78, third: 62, fifth: 72 },
  { month: "Jun", first: 55, third: 35, fifth: 48 },
  { month: "Jul", first: 70, third: 50, fifth: 65 },
  { month: "Aug", first: 58, third: 42, fifth: 55 },
  { month: "Sep", first: 72, third: 48, fifth: 68 },
  { month: "Oct", first: 60, third: 38, fifth: 52 },
  { month: "Nov", first: 50, third: 32, fifth: 45 },
  { month: "Dec", first: 78, third: 55, fifth: 70 },
];

const countries = [
  {
    name: "China",
    orders: "50436",
    percentage: "52.98%",
    customers: "54",
    sales: "$6323",
    growth: "23.55%",
  },
  {
    name: "USA",
    orders: "45627",
    percentage: "64.98%",
    customers: "35",
    sales: "$5432",
    growth: "10.23%",
  },
  {
    name: "South Korea",
    orders: "36492",
    percentage: "43.21%",
    customers: "22",
    sales: "$4577",
    growth: "8.55%",
  },
  {
    name: "Vietnam",
    orders: "35007",
    percentage: "31.89%",
    customers: "17",
    sales: "$3468",
    growth: "6.01%",
  },
  {
    name: "Germany",
    orders: "30215",
    percentage: "52.14%",
    customers: "38",
    sales: "$3254",
    growth: "6.21%",
  },
  {
    name: "Australia",
    orders: "25408",
    percentage: "12.72%",
    customers: "32",
    sales: "$3215",
    growth: "12.02%",
  },
  {
    name: "Spain",
    orders: "19095",
    percentage: "23.91%",
    customers: "11",
    sales: "$4045",
    growth: "8.01%",
  },
  {
    name: "Indonesia",
    orders: "32154",
    percentage: "32.23%",
    customers: "09",
    sales: "$2456",
    growth: "9.87%",
  },
  {
    name: "Japan",
    orders: "12547",
    percentage: "27.74%",
    customers: "21",
    sales: "$2541",
    growth: "20.01%",
  },
];

export default function Dashboard() {
  return (
    <main className="min-h-screen bg-[#f8f9fc]">
      <section className="px-8 py-7">

        {/* Page Heading */}
        <div className="mb-7">
          <h1 className="text-[22px] font-semibold text-gray-900">
            Ecommerce Dashboard
          </h1>

          <p className="mt-1 text-sm text-gray-400">
            Here’s what’s going on with your business right now
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">

          <StatCard
            icon="🟢"
            title="57 new orders"
            subtitle="Last 7 days"
            value="57"
          />

          <StatCard
            icon="🟡"
            title="5 orders"
            subtitle="5 new orders"
            value="5"
          />

          <StatCard
            icon="🔴"
            title="15 products"
            subtitle="Out of stock"
            value="15"
          />

        </div>

        {/* Main Dashboard */}
        <div className="mt-6 grid grid-cols-[minmax(0,2fr)_minmax(420px,1fr)] gap-6">

          {/* TOTAL SALES */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">

            <div className="flex items-start justify-between">

              <div>
                <h2 className="text-[16px] font-semibold text-gray-900">
                  Total sells
                </h2>

                <p className="mt-1 text-xs text-gray-400">
                  Payment received across all channels
                </p>
              </div>

              <button className="rounded-md border border-gray-200 px-3 py-1.5 text-xs text-gray-500">
                Mar 1 - 31, 2022
              </button>

            </div>

            <div className="mt-5 h-[300px]">

              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={salesData}>

                  <CartesianGrid
                    stroke="#f1f3f5"
                    vertical={false}
                  />

                  <XAxis
                    dataKey="date"
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />

                  <YAxis
                    tick={{ fontSize: 10, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />

                  <Tooltip />

                  <Line
                    type="monotone"
                    dataKey="sales"
                    stroke="#3155e7"
                    strokeWidth={2}
                    dot={false}
                  />

                  <Line
                    type="monotone"
                    dataKey="previous"
                    stroke="#cbd5e1"
                    strokeWidth={1.5}
                    dot={false}
                  />

                </LineChart>
              </ResponsiveContainer>

            </div>

          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-cols-2 gap-5">

            {/* TOTAL ORDERS */}
            <SmallChartCard
              title="Total orders"
              subtitle="Last 7 days"
              value="16,247"
              increase="+12.5%"
            >
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={ordersData}>

                  <Bar
                    dataKey="orders"
                    fill="#3155e7"
                    radius={[2, 2, 0, 0]}
                  />

                  <Tooltip />

                </BarChart>
              </ResponsiveContainer>
            </SmallChartCard>

            {/* NEW CUSTOMERS */}
            <SmallChartCard
              title="New customers"
              subtitle="Last 7 days"
              value="356"
              increase="+10.23%"
            >
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={customersData}>

                  <Line
                    type="monotone"
                    dataKey="customers"
                    stroke="#3155e7"
                    strokeWidth={2}
                    dot={false}
                  />

                  <Tooltip />

                </LineChart>
              </ResponsiveContainer>
            </SmallChartCard>

            {/* TOP COUPONS */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

              <h2 className="text-sm font-semibold text-gray-900">
                Top coupons
              </h2>

              <p className="mt-1 text-[11px] text-gray-400">
                Last 7 days
              </p>

              <div className="relative mt-2 h-[115px]">

                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>

                    <Pie
                      data={couponData}
                      dataKey="value"
                      innerRadius={38}
                      outerRadius={52}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <Cell fill="#3155e7" />
                      <Cell fill="#dbe4ff" />
                      <Cell fill="#eef2ff" />
                    </Pie>

                  </PieChart>
                </ResponsiveContainer>

                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-lg font-semibold text-gray-800">
                    72%
                  </span>
                </div>

              </div>

              <div className="space-y-2 text-[10px] text-gray-500">

                <LegendRow
                  label="Percentage discount"
                  value="72%"
                />

                <LegendRow
                  label="Fixed amount discount"
                  value="18%"
                />

                <LegendRow
                  label="Fixed product discount"
                  value="10%"
                />

              </div>

            </div>

            {/* PAYING VS NON PAYING */}
            <div className="rounded-xl border border-gray-200 bg-white p-5">

              <h2 className="text-sm font-semibold text-gray-900">
                Paying vs non paying
              </h2>

              <p className="mt-1 text-[11px] text-gray-400">
                Last 7 days
              </p>

              <div className="relative mt-4 h-[115px]">

                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>

                    <Pie
                      data={payingData}
                      dataKey="value"
                      innerRadius={38}
                      outerRadius={52}
                      startAngle={90}
                      endAngle={-270}
                    >
                      <Cell fill="#3155e7" />
                      <Cell fill="#edf0f5" />
                    </Pie>

                  </PieChart>
                </ResponsiveContainer>

              </div>

              <div className="space-y-2 text-[10px]">

                <LegendRow
                  label="Paying customers"
                  value="90%"
                />

                <LegendRow
                  label="Non-paying customers"
                  value="10%"
                />

              </div>

            </div>

          </div>

        </div>

        {/* Latest Reviews */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-white">

          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">

            <div>
              <h2 className="text-[16px] font-semibold text-gray-900">
                Latest reviews
              </h2>

              <p className="mt-1 text-xs text-gray-400">
                Payment received across all channels
              </p>
            </div>

            <button className="text-xs text-gray-500">
              All products
            </button>

          </div>

          <div className="overflow-x-auto">

            <table className="w-full text-left">

              <thead className="border-b border-gray-100 text-[10px] uppercase text-gray-400">

                <tr>
                  <th className="px-6 py-4">Product</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Rating</th>
                  <th className="px-6 py-4">Review</th>
                  <th className="px-6 py-4">Status</th>
                  <th className="px-6 py-4">Time</th>
                </tr>

              </thead>

              <tbody>

                <ReviewRow
                  product="Raisin Sauce Almond"
                  customer="Richard Dawson"
                  review="This product is really amazing and very useful."
                />

                <ReviewRow
                  product="Premium Food Pack"
                  customer="John Smith"
                  review="Good quality product and fast delivery."
                />

                <ReviewRow
                  product="Organic Foods"
                  customer="Sarah Wilson"
                  review="Really liked the quality of the product."
                />

              </tbody>

            </table>

          </div>

        </div>

        {/* Bottom Section */}

        {/* TOP COUNTRIES - FULL WIDTH */}
        <div className="mt-6 rounded-xl border border-gray-200 bg-white">

          <div className="flex items-center justify-between border-b border-gray-100 px-6 py-5">
            <div>
              <h2 className="text-[16px] font-semibold text-gray-900">
                Top countries
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Actual earnings by country
              </p>
            </div>
            <button className="text-xs text-blue-600">
              Previous
            </button>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead className="border-b border-gray-100 text-[9px] uppercase text-gray-400">
                <tr>
                  <th className="px-5 py-3">Country</th>
                  <th className="px-5 py-3">Orders</th>
                  <th className="px-5 py-3">Customers</th>
                  <th className="px-5 py-3">Sales</th>
                  <th className="px-5 py-3">Growth</th>
                </tr>
              </thead>
              <tbody>
                {countries.map((country) => (
                  <tr
                    key={country.name}
                    className="border-b border-gray-50 last:border-0"
                  >
                    <td className="px-5 py-3 font-medium text-gray-700">
                      {country.name}
                    </td>
                    <td className="px-5 py-3 text-gray-500">
                      {country.orders}
                    </td>
                    <td className="px-5 py-3 text-gray-500">
                      {country.customers}
                    </td>
                    <td className="px-5 py-3 text-gray-500">
                      {country.sales}
                    </td>
                    <td className="px-5 py-3 text-gray-500">
                      {country.growth}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* PROJECTION + RETURNING CUSTOMER - SAME ROW */}
        <div className="mt-6 grid grid-cols-2 gap-6">

          {/* PROJECTION VS ACTUAL */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-[16px] font-semibold text-gray-900">
                  Projection vs actual
                </h2>
                <p className="mt-1 text-xs text-gray-400">
                  Actual earnings vs projected earnings
                </p>
              </div>
              <MoreHorizontal size={18} className="text-gray-400" />
            </div>

            <div className="mt-5 h-[230px]">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={projectionData}>
                  <CartesianGrid stroke="#f1f3f5" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                    tickFormatter={(value) => `$${value / 1000}k`}
                  />
                  <Tooltip />
                  <Bar
                    dataKey="projected"
                    fill="#3155e7"
                    radius={[2, 2, 0, 0]}
                    barSize={8}
                  />
                  <Bar
                    dataKey="actual"
                    fill="#d6dcef"
                    radius={[2, 2, 0, 0]}
                    barSize={8}
                  />
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="mt-2 flex justify-center gap-5 text-[10px] text-gray-500">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm bg-[#3155e7]" />
                Projected revenue
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-sm bg-[#d6dcef]" />
                Actual revenue
              </span>
            </div>
          </div>

          {/* RETURNING CUSTOMER RATE */}
          <div className="rounded-xl border border-gray-200 bg-white p-6">
            <div>
              <h2 className="text-[16px] font-semibold text-gray-900">
                Returning customer rate
              </h2>
              <p className="mt-1 text-xs text-gray-400">
                Rate of customers returning to your shop over time
              </p>
            </div>

            <div className="mt-5 h-[220px]">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={returningData}>
                  <CartesianGrid stroke="#f1f3f5" vertical={false} />
                  <XAxis
                    dataKey="month"
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <YAxis
                    domain={[0, 100]}
                    tickFormatter={(value) => `${value}%`}
                    tick={{ fontSize: 9, fill: "#9ca3af" }}
                    axisLine={false}
                    tickLine={false}
                  />
                  <Tooltip />
                  <Line
                    type="monotone"
                    dataKey="first"
                    stroke="#3155e7"
                    strokeWidth={2}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="third"
                    stroke="#cbd5e1"
                    strokeWidth={1.5}
                    dot={false}
                  />
                  <Line
                    type="monotone"
                    dataKey="fifth"
                    stroke="#6d5dfc"
                    strokeWidth={1.5}
                    dot={false}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>

            <div className="flex justify-center gap-5 text-[10px] text-gray-500">
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#3155e7]" />
                Fourth time
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#cbd5e1]" />
                Third time
              </span>
              <span className="flex items-center gap-1">
                <span className="h-2 w-2 rounded-full bg-[#6d5dfc]" />
                Second time
              </span>
            </div>
          </div>

        </div>

      </section>
    </main>
  );
}


/* ---------------- Components ---------------- */

function StatCard({ icon, title, subtitle, value }) {
  return (
    <div className="flex items-center gap-3 bg-transparent">

      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white text-lg shadow-sm">
        {icon}
      </div>

      <div>
        <div className="flex items-center gap-2">

          <p className="text-[13px] font-semibold text-gray-800">
            {title}
          </p>

          <ArrowUpRight
            size={13}
            className="text-green-500"
          />

        </div>

        <p className="mt-0.5 text-[11px] text-gray-400">
          {subtitle}
        </p>
      </div>

    </div>
  );
}


function SmallChartCard({
  title,
  subtitle,
  value,
  increase,
  children,
}) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-5">

      <div className="flex items-start justify-between">

        <div>
          <h2 className="text-[13px] font-semibold text-gray-900">
            {title}
          </h2>

          <p className="mt-1 text-[10px] text-gray-400">
            {subtitle}
          </p>
        </div>

        <MoreHorizontal
          size={16}
          className="text-gray-400"
        />

      </div>

      <div className="mt-1 flex items-center gap-2">

        <span className="text-[20px] font-semibold text-gray-900">
          {value}
        </span>

        <span className="text-[9px] text-green-600">
          {increase}
        </span>

      </div>

      <div className="mt-2 h-[100px]">
        {children}
      </div>

    </div>
  );
}


function LegendRow({ label, value }) {
  return (
    <div className="flex items-center justify-between">

      <div className="flex items-center gap-2">

        <span className="h-2 w-2 rounded-full bg-[#3155e7]" />

        <span>{label}</span>

      </div>

      <span className="font-medium text-gray-700">
        {value}
      </span>

    </div>
  );
}


function ReviewRow({ product, customer, review }) {
  return (
    <tr className="border-b border-gray-100 last:border-0">

      <td className="px-6 py-4 text-xs font-medium text-gray-700">
        {product}
      </td>

      <td className="px-6 py-4 text-xs text-gray-500">
        {customer}
      </td>

      <td className="px-6 py-4">

        <div className="flex gap-0.5">

          {[1, 2, 3, 4, 5].map((star) => (
            <Star
              key={star}
              size={12}
              fill="#fbbf24"
              className="text-yellow-400"
            />
          ))}

        </div>

      </td>

      <td className="max-w-[350px] px-6 py-4 text-xs text-gray-500">
        {review}
      </td>

      <td className="px-6 py-4">

        <span className="rounded-full bg-green-50 px-3 py-1 text-[10px] text-green-600">
          Published
        </span>

      </td>

      <td className="px-6 py-4 text-xs text-gray-400">
        2 hours ago
      </td>

    </tr>
  );
}