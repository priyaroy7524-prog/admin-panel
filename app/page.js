"use client";

import { useState } from "react";

import Sidebar from "./components/Sidebar";
import Header from "./components/Header";
import Dashboard from "./components/Dashboard";
import Orders from "./components/Orders";
import Analytics from "./components/Analytics";

export default function Home() {
  const [activePage, setActivePage] = useState("Dashboard");

  return (
    <div className="min-h-screen bg-[#f8fafc]">

      <Sidebar
        activePage={activePage}
        setActivePage={setActivePage}
      />

      <Header />

      <main className="ml-[250px] pt-[72px]">
        <div className="p-7">

          {activePage === "Dashboard" && (
            <Dashboard />
          )}

          {activePage === "Orders" && (
  <Orders />
)}

          {activePage === "Products" && (
            <PagePlaceholder title="Products" />
          )}

          {activePage === "Customers" && (
  <Customers />
)}

          {activePage === "Analytics" && <Analytics />}

          {activePage === "Reviews" && (
            <PagePlaceholder title="Reviews" />
          )}

        </div>
      </main>

    </div>
  );
}

function PagePlaceholder({ title }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-8 shadow-sm">
      <h1 className="text-2xl font-bold text-gray-900">
        {title}
      </h1>

      <p className="mt-2 text-sm text-gray-500">
        {title} page content will be added here.
      </p>
    </div>
  );
}