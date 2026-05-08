"use client";

import { useState } from "react";

import {
  Menu,
} from "lucide-react";

/* ====================================================== */
/* 🔥 STUDENT COMPONENTS */
/* ====================================================== */

import Sidebar from "@/components/student/Sidebar";

import Topbar from "@/components/student/Topbar";

import DashboardPage from "@/components/student/DashboardPage";

import FoodPage from "@/components/student/FoodPage";

import PaymentsPage from "@/components/student/PaymentsPage";

import ComplaintsPage from "@/components/student/ComplaintsPage";

import ProfilePage from "@/components/student/ProfilePage";

import BookRoomPage from "@/components/student/BookRoomPage";

import RoomPage from "@/components/student/RoomPage";

/* ====================================================== */
/* 🔥 DASHBOARD */
/* ====================================================== */

export default function StudentDashboard() {

  /* ==================================================== */
  /* 🔥 ACTIVE MENU */
/* ==================================================== */

  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

  /* ==================================================== */
  /* 🔥 MOBILE SIDEBAR */
/* ==================================================== */

  const [sidebarOpen, setSidebarOpen] =
    useState(false);

  /* ==================================================== */
  /* 🔥 LOGOUT */
/* ==================================================== */

  const handleLogout = () => {

    localStorage.removeItem(
      "svbs-role"
    );

    localStorage.removeItem(
      "svbs-user"
    );

    window.location.href = "/";
  };

  /* ==================================================== */
  /* 🔥 RENDER PAGE */
/* ==================================================== */

  const renderPage = () => {

    switch (activeMenu) {

      case "Dashboard":

        return (
          <DashboardPage
            setActiveMenu={
              setActiveMenu
            }
          />
        );

      case "Book Room":

        return <BookRoomPage />;

      case "My Room":

        return <RoomPage />;

      case "Payments":

        return <PaymentsPage />;

      case "Food Menu":

        return <FoodPage />;

      case "Complaints":

        return <ComplaintsPage />;

      case "Profile":

        return <ProfilePage />;

      default:

        return (
          <DashboardPage/>
        );
    }
  };

  /* ==================================================== */
  /* 🔥 JSX */
/* ==================================================== */

  return (

    <div className="
    relative
    min-h-screen
    bg-[#050816]
    overflow-hidden
    flex
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
        [background-size:70px_70px]
        "></div>

        {/* PURPLE */}

        <div className="
        absolute
        top-[-250px]
        left-[-250px]
        w-[700px]
        h-[700px]
        bg-purple-500/20
        blur-[180px]
        rounded-full
        animate-pulse
        "></div>

        {/* PINK */}

        <div className="
        absolute
        bottom-[-250px]
        right-[-250px]
        w-[700px]
        h-[700px]
        bg-pink-500/20
        blur-[180px]
        rounded-full
        animate-pulse
        "></div>

      </div>

      {/* ================================================= */}
      {/* 🔥 MOBILE OVERLAY */}
      {/* ================================================= */}

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
          activeMenu={activeMenu}
          setActiveMenu={setActiveMenu}
          handleLogout={handleLogout}
          closeSidebar={() =>
            setSidebarOpen(false)
          }
        />

      </div>

      {/* ================================================= */}
      {/* 🔥 MAIN CONTENT */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      flex-1
      min-h-screen
      overflow-y-auto
      ">

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

                Student Dashboard

              </p>

            </div>

          </div>

        </div>

        {/* =============================================== */}
        {/* 🔥 TOPBAR */}
        {/* =============================================== */}

        <Topbar
          activeMenu={activeMenu}
        />

        {/* =============================================== */}
        {/* 🔥 PAGE CONTENT */}
        {/* =============================================== */}

        <div className="
        px-4
        sm:px-6
        lg:px-10
        py-6
        ">

          {renderPage()}

        </div>

      </div>

    </div>
  );
}