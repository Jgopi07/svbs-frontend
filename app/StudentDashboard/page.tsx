"use client";

import { useEffect } from "react";

import { useRouter } from "next/navigation";

import StudentDashboard from "@/components/StudentDashboard";

/* ======================================================= */
/* 🔥 STUDENT DASHBOARD PAGE */
/* ======================================================= */

export default function StudentDashboardPage() {

  /* ===================================================== */
  /* 🔥 ROUTER */
  /* ===================================================== */

  const router = useRouter();

  /* ===================================================== */
  /* 🔥 AUTH CHECK */
  /* ===================================================== */

  useEffect(() => {

    const role =
      localStorage.getItem(
        "svbs-role"
      );

    /* ================================================ */
    /* 🔥 NOT LOGGED IN */
    /* ================================================ */

    if (
      !role ||
      role !== "student"
    ) {

      router.push("/");
    }

  }, [router]);

  /* ===================================================== */
  /* 🔥 PAGE */
  /* ===================================================== */

  return (

    <main className="
    relative
    min-h-screen
    overflow-hidden
    bg-[#050816]
    ">

      {/* ================================================= */}
      {/* 🔥 GLOBAL BACKGROUND */}
      {/* ================================================= */}

      <div className="
      fixed
      inset-0
      overflow-hidden
      pointer-events-none
      ">

        {/* ============================================= */}
        {/* 🔥 GRID */}
        {/* ============================================= */}

        <div className="
        absolute
        inset-0
        opacity-[0.03]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:80px_80px]
        "></div>

        {/* ============================================= */}
        {/* 🔥 TOP LEFT GLOW */}
        {/* ============================================= */}

        <div className="
        absolute
        top-[-250px]
        left-[-250px]
        w-[750px]
        h-[750px]
        bg-purple-500/20
        blur-[180px]
        rounded-full
        animate-pulse
        "></div>

        {/* ============================================= */}
        {/* 🔥 BOTTOM RIGHT GLOW */}
        {/* ============================================= */}

        <div className="
        absolute
        bottom-[-250px]
        right-[-250px]
        w-[750px]
        h-[750px]
        bg-pink-500/20
        blur-[180px]
        rounded-full
        animate-pulse
        "></div>

        {/* ============================================= */}
        {/* 🔥 CENTER GLOW */}
        {/* ============================================= */}

        <div className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[650px]
        h-[650px]
        bg-cyan-500/10
        blur-[180px]
        rounded-full
        "></div>

      </div>

      {/* ================================================= */}
      {/* 🔥 DASHBOARD */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      ">

        <StudentDashboard />

      </div>

    </main>
  );
}