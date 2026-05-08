"use client";

import {
  Bell,
  Search,
  Settings2,
  Sparkles,
  ShieldCheck,
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
  Clock3,
  BadgeCheck,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

/* ====================================================== */
/* 🔥 TYPES */
/* ====================================================== */

interface TopbarProps {

  title: string;

  role: string;

}

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
      glow: "from-purple-500 to-pink-500",
    },

    {
      title: "Occupancy",
      value: "92%",
      icon: Building2,
      glow: "from-pink-500 to-rose-500",
    },

    {
      title: "Revenue",
      value: "₹4.8L",
      icon: IndianRupee,
      glow: "from-yellow-500 to-orange-500",
    },

    {
      title: "Pending",
      value: "14",
      icon: AlertTriangle,
      glow: "from-red-500 to-pink-500",
    },

    {
      title: "Network",
      value: "Stable",
      icon: Wifi,
      glow: "from-cyan-500 to-blue-500",
    },

    {
      title: "Status",
      value: "Online",
      icon: UserCircle2,
      glow: "from-indigo-500 to-purple-500",
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
        {/* 🔥 TOP SECTION */}
        {/* ================================================= */}

        <div className="
        flex
        flex-col
        xl:flex-row
        xl:items-center
        xl:justify-between
        gap-8
        ">

          {/* ================================================= */}
          {/* 🔥 LEFT */}
          {/* ================================================= */}

          <div>

            {/* BADGE */}

            <motion.div

              initial={{
                opacity: 0,
                y: -20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.5,
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
              backdrop-blur-xl
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

              SVBS Hostel Management

            </motion.div>

            {/* HEADING */}

            <motion.h1

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.1,
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

            {/* TEXT */}

            <motion.p

              initial={{
                opacity: 0,
                y: 20,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: 0.2,
              }}

              className="
              text-gray-400
              text-base
              sm:text-lg
              leading-relaxed
              max-w-[850px]
              "
            >

              Welcome back {role}. Monitor hostel
              residents, room occupancy, complaints,
              reports, food management, payments and
              complete hostel analytics from one
              premium dashboard.

            </motion.p>

          </div>

          {/* ================================================= */}
          {/* 🔥 RIGHT */}
          {/* ================================================= */}

          <motion.div

            initial={{
              opacity: 0,
              x: 40,
            }}

            animate={{
              opacity: 1,
              x: 0,
            }}

            transition={{
              duration: 0.5,
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
            min-w-[350px]
            backdrop-blur-xl
            shadow-[0_0_30px_rgba(168,85,247,0.08)]
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
                Search residents,
                rooms, complaints...
                "

                className="
                w-full
                bg-transparent
                outline-none
                text-white
                placeholder:text-gray-500
                text-sm
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
            backdrop-blur-xl
            ">

              <div className="
              w-12
              h-12
              rounded-2xl
              bg-gradient-to-r
              from-purple-500/20
              to-pink-500/20
              border
              border-white/10
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
                mb-1
                ">

                  {formattedDate}

                </p>

                <p className="
                text-gray-400
                text-xs
                ">

                  Live System Analytics

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
            backdrop-blur-xl
            flex
            items-center
            justify-center
            text-gray-300
            hover:text-white
            hover:border-pink-500/30
            transition-all
            duration-300
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
              border
              border-[#050816]
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
            backdrop-blur-xl
            flex
            items-center
            justify-center
            text-gray-300
            hover:text-white
            hover:border-purple-500/30
            transition-all
            duration-300
            ">

              <Settings2
                size={24}
              />

            </button>

            {/* DARK MODE */}

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
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-gray-300
              hover:text-white
              hover:border-yellow-500/30
              transition-all
              duration-300
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

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          transition={{
            delay: 0.2,
          }}

          className="
          grid
          grid-cols-2
          md:grid-cols-3
          xl:grid-cols-6
          gap-4
          "
        >

          {stats.map((item, i) => {

            const Icon = item.icon;

            return (

              <div
                key={i}
                className="
                relative
                overflow-hidden
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.05]
                p-5
                backdrop-blur-2xl
                hover:-translate-y-1
                transition-all
                duration-300
                "
              >

                {/* GLOW */}

                <div className={`
                absolute
                top-0
                right-0
                w-28
                h-28
                rounded-full
                blur-[70px]
                opacity-30
                bg-gradient-to-r
                ${item.glow}
                `}></div>

                {/* CONTENT */}

                <div className="
                relative
                z-10
                ">

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
                    border
                    border-white/10
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

              </div>
            );
          })}

        </motion.div>

      </div>

    </div>
  );
}