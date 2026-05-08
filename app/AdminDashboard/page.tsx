"use client";

import Sidebar from "@/components/admin/Sidebar";
import Topbar from "@/components/admin/Topbar";

import DashboardPage from "@/components/admin/DashboardPage";
import RoomsPage from "@/components/admin/RoomsPage";
import ResidentsPage from "@/components/admin/ResidentsPage";
import ComplaintsPage from "@/components/admin/ComplaintsPage";
import ReportsPage from "@/components/admin/ReportsPage";
import PaymentsPage from "@/components/admin/PaymentsPage";
import FoodPage from "@/components/admin/FoodPage";

import {
  BedDouble,
  CreditCard,
  FileBarChart2,
  LayoutDashboard,
  LogOut,
  MessageSquareWarning,
  Users,
  UtensilsCrossed,
  Menu,
} from "lucide-react";

import { useState } from "react";

export default function AdminDashboardPage() {

  const [activePage, setActivePage] =
    useState("Dashboard");

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  const menu = [
    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },
    {
      name: "Rooms",
      icon: BedDouble,
    },
    {
      name: "Residents",
      icon: Users,
    },
    {
      name: "Payments",
      icon: CreditCard,
    },
    {
      name: "Food Menu",
      icon: UtensilsCrossed,
    },
    {
      name: "Complaints",
      icon: MessageSquareWarning,
    },
    {
      name: "Reports",
      icon: FileBarChart2,
    },
  ];

  const handleLogout = () => {

    localStorage.removeItem(
      "svbs-role"
    );

    localStorage.removeItem(
      "svbs-user"
    );

    window.location.href = "/";
  };

  return (

    <main className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#050816]
    ">

      {/* BACKGROUND */}

      <div className="
      fixed
      inset-0
      overflow-hidden
      pointer-events-none
      ">

        <div className="
        absolute
        inset-0
        opacity-[0.03]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:80px_80px]
        "></div>

      </div>

      {/* MOBILE OVERLAY */}

      {
        sidebarOpen && (

          <div
            onClick={() =>
              setSidebarOpen(false)
            }
            className="
            fixed
            inset-0
            bg-black/60
            backdrop-blur-sm
            z-40
            lg:hidden
            "
          />

        )
      }

      {/* MAIN */}

      <div className="
      relative
      z-10
      flex
      min-h-screen
      ">

        {/* SIDEBAR */}

        <div className={`
        fixed
        lg:relative
        z-50
        lg:z-10
        h-screen
        transition-all
        duration-300

        ${
          sidebarOpen
            ? "translate-x-0"
            : "-translate-x-full lg:translate-x-0"
        }
        `}>

          <Sidebar
            activeMenu={activePage}
            setActiveMenu={setActivePage}
          />

        </div>

        {/* CONTENT */}

        <div className="
        flex-1
        flex
        flex-col
        min-h-screen
        overflow-hidden
        ">

          {/* MOBILE TOPBAR */}

          <div className="
          lg:hidden
          sticky
          top-0
          z-30
          px-5
          py-4
          border-b
          border-white/10
          bg-[#050816]/90
          backdrop-blur-3xl
          flex
          items-center
          justify-between
          ">

            <div className="
            flex
            items-center
            gap-3
            ">

              <button
                onClick={() =>
                  setSidebarOpen(true)
                }
                className="
                w-11
                h-11
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                flex
                items-center
                justify-center
                text-white
                "
              >

                <Menu size={22} />

              </button>

              <div>

                <h2 className="
                text-white
                text-lg
                font-bold
                ">

                  SVBS Hostel

                </h2>

                <p className="
                text-xs
                text-gray-400
                ">

                  Admin Dashboard

                </p>

              </div>

            </div>

          </div>

          {/* TOPBAR */}

          <Topbar
            title={activePage}
            role="Admin"
          />

          {/* PAGE */}

          <div className="
          flex-1
          overflow-y-auto
          p-4
          sm:p-6
          lg:p-8
          xl:p-10
          ">

            {
              activePage ===
              "Dashboard" && (
                <DashboardPage />
              )
            }

            {
              activePage ===
              "Rooms" && (
                <RoomsPage />
              )
            }

            {
              activePage ===
              "Residents" && (
                <ResidentsPage />
              )
            }

            {
              activePage ===
              "Payments" && (
                <PaymentsPage />
              )
            }

            {
              activePage ===
              "Food Menu" && (
                <FoodPage />
              )
            }

            {
              activePage ===
              "Complaints" && (
                <ComplaintsPage />
              )
            }

            {
              activePage ===
              "Reports" && (
                <ReportsPage />
              )
            }

          </div>

        </div>

      </div>

      {/* MOBILE LOGOUT */}

      <button

        onClick={handleLogout}

        className="
        lg:hidden
        fixed
        bottom-6
        right-6
        z-50
        w-16
        h-16
        rounded-2xl
        bg-gradient-to-r
        from-red-500
        via-pink-500
        to-orange-500
        text-white
        shadow-[0_0_40px_rgba(239,68,68,0.45)]
        flex
        items-center
        justify-center
        hover:scale-110
        active:scale-95
        transition-all
        duration-300
        "
      >

        <LogOut size={24} />

      </button>

    </main>
  );
}