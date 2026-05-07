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
} from "lucide-react";

import { useState } from "react";

export default function AdminDashboardPage() {

  /* ====================================================== */
  /* 🔥 ACTIVE PAGE */
  /* ====================================================== */

  const [activePage, setActivePage] =
    useState("Dashboard");

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

        {/* CYAN GLOW */}

        <div className="
        absolute
        top-[30%]
        left-[40%]
        w-[500px]
        h-[500px]
        bg-cyan-500/10
        blur-[180px]
        rounded-full
        "></div>

        {/* EXTRA PURPLE LIGHT */}

        <div className="
        absolute
        bottom-[10%]
        left-[15%]
        w-[400px]
        h-[400px]
        bg-violet-500/10
        blur-[160px]
        rounded-full
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

        <Sidebar

  activeMenu={activePage}

  setActiveMenu={
    setActivePage
  }

/>

        {/* ================================================= */}
        {/* 🔥 CONTENT AREA */}
        {/* ================================================= */}

        <div className="
        flex-1
        flex
        flex-col
        min-h-screen
        overflow-hidden
        ">

          {/* ================================================= */}
          {/* 🔥 TOPBAR */}
          {/* ================================================= */}

          <Topbar
            title={activePage}
            role="Admin"
          />

          {/* ================================================= */}
          {/* 🔥 PAGE CONTENT */}
          {/* ================================================= */}

          <div className="
          flex-1
          overflow-y-auto
          p-4
          sm:p-6
          lg:p-8
          xl:p-10
          ">

            {/* ============================================= */}
            {/* 🔥 DASHBOARD */}
            {/* ============================================= */}

            {activePage ===
              "Dashboard" && (

              <DashboardPage />

            )}

            {/* ============================================= */}
            {/* 🔥 ROOMS */}
            {/* ============================================= */}

            {activePage ===
              "Rooms" && (

              <RoomsPage />

            )}

            {/* ============================================= */}
            {/* 🔥 RESIDENTS */}
            {/* ============================================= */}

            {activePage ===
              "Residents" && (

              <ResidentsPage />

            )}

            {/* ============================================= */}
            {/* 🔥 PAYMENTS */}
            {/* ============================================= */}

            {activePage ===
              "Payments" && (

              <PaymentsPage />

            )}

            {/* ============================================= */}
            {/* 🔥 FOOD MENU */}
            {/* ============================================= */}

            {activePage ===
              "Food Menu" && (

              <FoodPage />

            )}

            {/* ============================================= */}
            {/* 🔥 COMPLAINTS */}
            {/* ============================================= */}

            {activePage ===
              "Complaints" && (

              <ComplaintsPage />

            )}

            {/* ============================================= */}
            {/* 🔥 REPORTS */}
            {/* ============================================= */}

            {activePage ===
              "Reports" && (

              <ReportsPage />

            )}

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 MOBILE FLOATING LOGOUT */}
      {/* ================================================= */}

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