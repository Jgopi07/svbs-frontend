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

  /* ====================================================== */
  /* 🔥 ACTIVE PAGE */
  /* ====================================================== */

  const [activePage, setActivePage] =
    useState("Dashboard");

  /* ====================================================== */
  /* 🔥 MOBILE SIDEBAR */
  /* ====================================================== */

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  /* ====================================================== */
  /* 🔥 MENU */
  /* ====================================================== */

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

  /* ====================================================== */
  /* 🔥 LOGOUT */
  /* ====================================================== */

  const handleLogout = () => {

    localStorage.removeItem(
      "svbs-role"
    );

    localStorage.removeItem(
      "svbs-user"
    );

    window.location.href = "/";
  };

  /* ====================================================== */
  /* 🔥 CLOSE SIDEBAR */
  /* ====================================================== */

  const handleMenuChange = (
    page: string
  ) => {

    setActivePage(page);

    setSidebarOpen(false);
  };

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <main className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#050816]
    ">

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      <div className="
      fixed
      inset-0
      overflow-hidden
      pointer-events-none
      ">

        {/* GRID */}

        <div className="
        absolute
        inset-0
        opacity-[0.03]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:80px_80px]
        "></div>

        {/* PURPLE GLOW */}

        <div className="
        absolute
        top-[-300px]
        left-[-300px]
        w-[800px]
        h-[800px]
        bg-purple-500/20
        blur-[200px]
        rounded-full
        animate-pulse
        "></div>

        {/* PINK GLOW */}

        <div className="
        absolute
        bottom-[-300px]
        right-[-300px]
        w-[800px]
        h-[800px]
        bg-pink-500/20
        blur-[200px]
        rounded-full
        animate-pulse
        "></div>

      </div>

      

      {/* ================================================= */}
      {/* 🔥 MAIN LAYOUT */}
      {/* ================================================= */}

      <div className="
relative
z-10
flex
min-h-screen
">

        {/* ================================================= */}
        {/* 🔥 SIDEBAR */}
        {/* ================================================= */}

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

  setActiveMenu={
    handleMenuChange
  }

  closeSidebar={() =>
    setSidebarOpen(false)
  }

/>

        </div>

        {/* ================================================= */}
        {/* 🔥 CONTENT AREA */}
        {/* ================================================= */}

        <div className={`
relative
z-10
flex-1
min-h-screen

${
  sidebarOpen
    ? "overflow-hidden h-screen"
    : "overflow-y-auto"
}
`}>

          {/* =============================================== */}
          {/* 🔥 MOBILE TOP */}
          {/* =============================================== */}

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

            {/* LEFT */}

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

          {/* =============================================== */}
          {/* 🔥 TOPBAR */}
          {/* =============================================== */}

          <Topbar
            title={activePage}
            role="Admin"
          />

          {/* =============================================== */}
          {/* 🔥 PAGE CONTENT */}
          {/* =============================================== */}

          <div className="
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

      

    </main>
  );
}