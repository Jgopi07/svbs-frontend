"use client";

import {
  Bell,
  Search,
  Settings2,
  Sparkles,
  CalendarDays,
  Activity,
  Wifi,
  Users,
  Building2,
  IndianRupee,
  AlertTriangle,
  MoonStar,
  SunMedium,
  UserCircle2,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

/* ====================================================== */
/* 🔥 TYPES */
/* ====================================================== */

type TopbarProps = {

  title: string;

  role: string;

};

/* ====================================================== */
/* 🔥 COMPONENT */
/* ====================================================== */

export default function Topbar({

  title,

  role,

}: TopbarProps) {

  /* ====================================================== */
  /* 🔥 STATES */
  /* ====================================================== */

  const [darkMode, setDarkMode] =
    useState(true);

  const [search, setSearch] =
    useState("");

  /* ====================================================== */
  /* 🔥 DATE */
  /* ====================================================== */

  const today = new Date();

  const formattedDate =
    today.toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        day: "numeric",
        month: "long",
        year: "numeric",
      }
    );

  /* ====================================================== */
  /* 🔥 STATS */
  /* ====================================================== */

  const stats = [

    {
      title: "Residents",
      value: "248",
      icon: Users,
    },

    {
      title: "Occupancy",
      value: "92%",
      icon: Building2,
    },

    {
      title: "Revenue",
      value: "₹4.8L",
      icon: IndianRupee,
    },

    {
      title: "Pending",
      value: "14",
      icon: AlertTriangle,
    },

    {
      title: "Network",
      value: "Stable",
      icon: Wifi,
    },

    {
      title: "Admin",
      value: "Online",
      icon: UserCircle2,
    },
  ];

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <div className="
    sticky
    top-0
    z-40
    border-b
    border-white/10
    bg-[#050816]/80
    backdrop-blur-3xl
    px-4
    sm:px-6
    xl:px-10
    py-6
    ">

      {/* ================================================= */}
      {/* 🔥 MAIN */}
      {/* ================================================= */}

      <div className="
      flex
      flex-col
      gap-8
      ">

        {/* ================================================= */}
        {/* 🔥 TOP */}
        {/* ================================================= */}

        <div className="
        flex
        flex-col
        xl:flex-row
        xl:items-center
        xl:justify-between
        gap-8
        ">

          {/* LEFT */}

          <div>

            <motion.div

              initial={{
                opacity: 0,
                y: -20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              className="
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              text-gray-300
              text-xs
              tracking-[0.25em]
              uppercase
              mb-6
              "
            >

              <Sparkles
                size={14}
                className="
                text-yellow-300
                "
              />

              SVBS HOSTEL MANAGEMENT

            </motion.div>

            <motion.h1

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              className="
              text-4xl
              sm:text-5xl
              xl:text-6xl
              font-black
              text-white
              leading-none
              mb-5
              "
            >

              {title} ⚡

            </motion.h1>

            <motion.p

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              className="
              text-gray-400
              text-base
              sm:text-lg
              leading-relaxed
              max-w-[850px]
              "
            >

              Welcome back {role}. Monitor residents,
              rooms, complaints, reports, food
              management, analytics and payments.

            </motion.p>

          </div>

          {/* RIGHT */}

          <motion.div

            initial={{
              opacity: 0,
              x: 40,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            className="
            flex
            flex-wrap
            items-center
            gap-4
            "
          >

            {/* SEARCH */}

            <div className="
            hidden
            lg:flex
            items-center
            gap-4
            px-6
            py-4
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.05]
            min-w-[340px]
            ">

              <Search
                size={20}
                className="
                text-gray-500
                "
              />

              <input

                value={search}

                onChange={(e) =>
                  setSearch(
                    e.target.value
                  )
                }

                type="text"

                placeholder="
                Search rooms,
                residents...
                "

                className="
                w-full
                bg-transparent
                outline-none
                text-white
                placeholder:text-gray-500
                "
              />

            </div>

            {/* DATE */}

            <div className="
            hidden
            xl:flex
            items-center
            gap-4
            px-5
            py-4
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.05]
            ">

              <div className="
              w-12
              h-12
              rounded-2xl
              bg-purple-500/20
              flex
              items-center
              justify-center
              text-purple-300
              ">

                <CalendarDays
                  size={22}
                />

              </div>

              <div>

                <p className="
                text-white
                text-sm
                font-semibold
                ">

                  {formattedDate}

                </p>

                <p className="
                text-gray-400
                text-xs
                ">

                  Live Analytics

                </p>

              </div>

            </div>

            {/* NOTIFICATION */}

            <button className="
            relative
            w-16
            h-16
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.05]
            flex
            items-center
            justify-center
            text-gray-300
            ">

              <Bell size={24} />

              <span className="
              absolute
              top-4
              right-4
              w-3
              h-3
              rounded-full
              bg-pink-500
              animate-pulse
              "></span>

            </button>

            {/* SETTINGS */}

            <button className="
            w-16
            h-16
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.05]
            flex
            items-center
            justify-center
            text-gray-300
            ">

              <Settings2
                size={24}
              />

            </button>

            {/* MODE */}

            <button

              onClick={() =>
                setDarkMode(
                  !darkMode
                )
              }

              className="
              w-16
              h-16
              rounded-[24px]
              border
              border-white/10
              bg-white/[0.05]
              flex
              items-center
              justify-center
              text-gray-300
              "
            >

              {darkMode ? (

                <MoonStar
                  size={24}
                />

              ) : (

                <SunMedium
                  size={24}
                />

              )}

            </button>

          </motion.div>

        </div>

        {/* ================================================= */}
        {/* 🔥 STATS */}
        {/* ================================================= */}

        <div className="
        grid
        grid-cols-2
        md:grid-cols-3
        xl:grid-cols-6
        gap-4
        ">

          {stats.map((item, i) => {

            const Icon = item.icon;

            return (

              <div
                key={i}
                className="
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.05]
                p-5
                "
              >

                <div className="
                flex
                items-center
                justify-between
                mb-5
                ">

                  <div className="
                  w-12
                  h-12
                  rounded-2xl
                  bg-white/[0.06]
                  flex
                  items-center
                  justify-center
                  text-white
                  ">

                    <Icon size={22} />

                  </div>

                  <Activity
                    size={18}
                    className="
                    text-emerald-400
                    "
                  />

                </div>

                <h3 className="
                text-3xl
                font-black
                text-white
                mb-2
                ">

                  {item.value}

                </h3>

                <p className="
                text-gray-400
                text-sm
                ">

                  {item.title}

                </p>

              </div>
            );
          })}

        </div>

      </div>

    </div>
  );
}