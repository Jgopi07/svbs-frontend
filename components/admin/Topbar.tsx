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
    py-5
    ">

      {/* ================================================= */}
      {/* 🔥 MAIN FLEX */}
      {/* ================================================= */}

      <div className="
      flex
      flex-col
      gap-6
      ">

        {/* ============================================= */}
        {/* 🔥 TOP SECTION */}
        {/* ============================================= */}

        <div className="
        flex
        flex-col
        2xl:flex-row
        2xl:items-center
        2xl:justify-between
        gap-6
        ">

          {/* ========================================= */}
          {/* 🔥 LEFT */}
          {/* ========================================= */}

          <div>

            {/* BADGE */}

            <motion.div

              initial={{
                opacity: 0,
                y: -15,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                duration: 0.4,
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
              bg-white/[0.04]
              text-gray-300
              text-xs
              tracking-[0.25em]
              uppercase
              mb-5
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
              mb-4
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
              max-w-[850px]
              leading-relaxed
              "
            >

              Logged in as {role}. Monitor residents,
              manage hostel rooms, track payments,
              handle complaints, generate reports,
              and control hostel operations with
              real-time analytics.

            </motion.p>

          </div>

          {/* ========================================= */}
          {/* 🔥 RIGHT */}
          {/* ========================================= */}

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

            {/* ===================================== */}
            {/* 🔥 SEARCH */}
            {/* ===================================== */}

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
            shadow-[0_0_25px_rgba(168,85,247,0.08)]
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
                rooms, payments...
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

            {/* ===================================== */}
            {/* 🔥 DATE */}
            {/* ===================================== */}

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

                  System Updated Live

                </p>

              </div>

            </div>

            {/* ===================================== */}
            {/* 🔥 NOTIFICATIONS */}
            {/* ===================================== */}

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
            shadow-[0_0_20px_rgba(168,85,247,0.08)]
            ">

              <Bell size={24} />

              {/* DOT */}

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

            {/* ===================================== */}
            {/* 🔥 SETTINGS */}
            {/* ===================================== */}

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
            shadow-[0_0_20px_rgba(168,85,247,0.08)]
            ">

              <Settings2
                size={24}
              />

            </button>

            {/* ===================================== */}
            {/* 🔥 DARK MODE */}
            {/* ===================================== */}

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
              shadow-[0_0_20px_rgba(168,85,247,0.08)]
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

        {/* ============================================= */}
        {/* 🔥 STATS STRIP */}
        {/* ============================================= */}

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

          {/* CARD 1 */}

          <div className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.05]
          p-5
          backdrop-blur-2xl
          ">

            <div className="
            absolute
            top-0
            right-0
            w-28
            h-28
            rounded-full
            bg-purple-500/20
            blur-[70px]
            "></div>

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

                  <Users size={22} />

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

                248

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Total Residents

              </p>

            </div>

          </div>

          {/* CARD 2 */}

          <div className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.05]
          p-5
          backdrop-blur-2xl
          ">

            <div className="
            absolute
            top-0
            right-0
            w-28
            h-28
            rounded-full
            bg-pink-500/20
            blur-[70px]
            "></div>

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
                bg-gradient-to-r
                from-pink-500/20
                to-rose-500/20
                border
                border-white/10
                flex
                items-center
                justify-center
                text-pink-300
                ">

                  <Building2
                    size={22}
                  />

                </div>

                <BadgeCheck
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

                92%

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Occupancy Rate

              </p>

            </div>

          </div>

          {/* CARD 3 */}

          <div className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.05]
          p-5
          backdrop-blur-2xl
          ">

            <div className="
            absolute
            top-0
            right-0
            w-28
            h-28
            rounded-full
            bg-yellow-500/20
            blur-[70px]
            "></div>

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
                bg-gradient-to-r
                from-yellow-500/20
                to-orange-500/20
                border
                border-white/10
                flex
                items-center
                justify-center
                text-yellow-300
                ">

                  <IndianRupee
                    size={22}
                  />

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

                ₹4.8L

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Monthly Revenue

              </p>

            </div>

          </div>

          {/* CARD 4 */}

          <div className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.05]
          p-5
          backdrop-blur-2xl
          ">

            <div className="
            absolute
            top-0
            right-0
            w-28
            h-28
            rounded-full
            bg-red-500/20
            blur-[70px]
            "></div>

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
                bg-gradient-to-r
                from-red-500/20
                to-pink-500/20
                border
                border-white/10
                flex
                items-center
                justify-center
                text-red-300
                ">

                  <AlertTriangle
                    size={22}
                  />

                </div>

                <Clock3
                  size={18}
                  className="
                  text-yellow-300
                  "
                />

              </div>

              <h3 className="
              text-3xl
              font-black
              text-white
              mb-2
              ">

                14

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Pending Payments

              </p>

            </div>

          </div>

          {/* CARD 5 */}

          <div className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.05]
          p-5
          backdrop-blur-2xl
          ">

            <div className="
            absolute
            top-0
            right-0
            w-28
            h-28
            rounded-full
            bg-cyan-500/20
            blur-[70px]
            "></div>

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
                bg-gradient-to-r
                from-cyan-500/20
                to-blue-500/20
                border
                border-white/10
                flex
                items-center
                justify-center
                text-cyan-300
                ">

                  <Wifi size={22} />

                </div>

                <ShieldCheck
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

                Stable

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Network Status

              </p>

            </div>

          </div>

          {/* CARD 6 */}

          <div className="
          relative
          overflow-hidden
          rounded-[28px]
          border
          border-white/10
          bg-white/[0.05]
          p-5
          backdrop-blur-2xl
          ">

            <div className="
            absolute
            top-0
            right-0
            w-28
            h-28
            rounded-full
            bg-purple-500/20
            blur-[70px]
            "></div>

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
                bg-gradient-to-r
                from-purple-500/20
                to-indigo-500/20
                border
                border-white/10
                flex
                items-center
                justify-center
                text-purple-300
                ">

                  <UserCircle2
                    size={22}
                  />

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

                Online

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Admin Status

              </p>

            </div>

          </div>

        </motion.div>

      </div>

    </div>
  );
}