
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

import {
  LayoutDashboard,
  Layers,
  Rss,
  ShoppingBag,
  Radio,
  LogOut,
  ChevronDown,
  ChevronRight,
  PanelLeftClose,
} from "lucide-react";

export default function Sidebar() {
  const router = useRouter();
  const [siteOpen, setSiteOpen] = useState(false);
  return (
   <aside className="fixed left-0 top-0 flex h-screen w-[300px] flex-col overflow-hidden border-r border-gray-200 bg-white">
      <div className="flex h-[72px] items-center border-b border-gray-700 px-6">
        <img
          src="images/logo.jpg"
          alt="Logo"
          className="h-16 w-auto object-contain"
        />
      </div>

      <div className="flex flex-1 flex-col px-5 py-6">
        <div className="relative mb-5">
          <p className="mb-2 px-1 text-[10px] font-semibold text-gray-700">
            Working on Site:
          </p>

          <button
            onClick={() => setSiteOpen(!siteOpen)}
            className="flex h-[58px] w-full items-center justify-between rounded-xl border border-gray-300 bg-white px-5 text-left shadow-sm"
          >
            <span className="text-[17px] font-medium text-gray-700">
              Earthmaa Foods
            </span>

            <ChevronDown
              size={21}
              className={`text-gray-600 transition-transform ${
                siteOpen ? "rotate-180" : ""
              }`}
            />
          </button>

          {siteOpen && (
            <div className="absolute left-0 right-0 top-[86px] z-50 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
              <button className="w-full rounded-lg px-4 py-3 text-left text-[16px] text-gray-700 hover:bg-blue-600 hover:text-white">
                Earthmaa Foods
              </button>

              <button className="w-full rounded-lg px-4 py-3 text-left text-[16px] text-gray-700 hover:bg-blue-600 hover:text-white">
                All Tenants
              </button>
              <button className="w-full rounded-lg px-4 py-3 text-left text-[16px] text-gray-700 hover:bg-blue-600 hover:text-white">
                Cost2Cost Supplements
              </button>
              <button className="w-full rounded-lg px-4 py-3 text-left text-[16px] text-gray-700 hover:bg-blue-600 hover:text-white">
                Earthmaa Foods
              </button>
              <button className="w-full rounded-lg px-4 py-3 text-left text-[16px] text-gray-700 hover:bg-blue-600 hover:text-white">
                Promolecules Limited
              </button>
              <button className="w-full rounded-lg px-4 py-3 text-left text-[16px] text-gray-700 hover:bg-blue-600 hover:text-white">
                Grainly Foods Limited
              </button>
              <button className="w-full rounded-lg px-4 py-3 text-left text-[16px] text-gray-700 hover:bg-blue-600 hover:text-white">
                emoro
              </button>
              <button className="w-full rounded-lg px-4 py-3 text-left text-[16px] text-gray-700 hover:bg-blue-600 hover:text-white">
                Promolecules-in
              </button>
            </div>
          )}
        </div>

        <nav className="space-y-1">
          <button className="flex w-full items-center gap-4 rounded-lg px-3 py-3 text-[17px] font-semibold text-blue-600">
            <LayoutDashboard size={22} strokeWidth={2.2} />
            <span>Dashboard</span>
          </button>

          <button className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-[17px] font-medium text-gray-700 hover:bg-gray-50">
            <ChevronRight size={16} className="text-gray-500" />

            <Layers size={22} strokeWidth={2} />

            <span>Advance Module</span>
          </button>

          <button className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-[17px] font-medium text-gray-700 hover:bg-gray-50">
            <ChevronRight size={16} className="text-gray-500" />

            <Rss size={22} strokeWidth={2} />

            <span>Blogging</span>
          </button>

          <button className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-[17px] font-medium text-gray-700 hover:bg-gray-50">
            <ChevronRight size={16} className="text-gray-500" />

            <ShoppingBag size={22} strokeWidth={2} />

            <span>Products</span>
          </button>

          

          <button className="group flex w-full items-center gap-3 rounded-lg px-3 py-3 text-[17px] font-medium text-gray-700 hover:bg-gray-50">
            <ChevronRight size={16} className="text-gray-500" />

            <Radio size={22} strokeWidth={2} />

            <span>All Seo Config</span>
          </button>

          

          <button className="group flex w-full items-center gap-4 rounded-lg px-3 py-3 text-[17px] font-medium text-gray-700 hover:bg-gray-50">
            <span className="w-[16px]" />

            <LogOut size={22} strokeWidth={2} />

            <span>Logout</span>
          </button>
        </nav>
      </div>

      <div className="border-t border-gray-200 px-6 py-5">
        <button className="flex items-center gap-3 text-[15px] font-medium text-gray-600 hover:text-gray-900">
          <PanelLeftClose size={20} />
          <span>Collapsed View</span>
        </button>
      </div>
    </aside>
  );
}
