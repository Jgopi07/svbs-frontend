"use client";

import {
  Bell,
  Search,
  Sparkles,
  User,
  CalendarDays,
  MoonStar,
  ChevronDown,
  Wallet,
  ShieldCheck,
  Wifi,
  Clock3,
  GraduationCap,
  MessageSquareWarning,
  BedDouble,
  CreditCard,
  SunMedium,
} from "lucide-react";

import { motion } from "framer-motion";

/* ====================================================== */
/* 🔥 PROPS */
/* ====================================================== */

interface TopbarProps {

  activeMenu: string;
}

/* ====================================================== */
/* 🔥 TOPBAR */
/* ====================================================== */

export default function Topbar({

  activeMenu,

}: TopbarProps) {

  /* ==================================================== */
  /* 🔥 DATE */
/* ==================================================== */

  const currentDate =
    new Date().toLocaleDateString(
      "en-IN",
      {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric",
      }
    );

  /* ==================================================== */
  /* 🔥 TITLES */
/* ==================================================== */

  const titles: any = {

    Dashboard:
      "Welcome Back 👋",

    "Book Room":
      "Book Your Dream Room 🛏️",

    "My Room":
      "My Room Details 🏢",

    Payments:
      "Payments & Rent 💰",

    "Food Menu":
      "Mess & Food Menu 🍽️",

    Complaints:
      "Complaints & Support 🛠️",

    Profile:
      "Student Profile 👨‍🎓",
  };

  /* ==================================================== */
  /* 🔥 SUBTITLES */
/* ==================================================== */

  const subtitles: any = {

    Dashboard:
      "Manage your hostel life, payments, facilities, and room activities easily.",

    "Book Room":
      "Explore available premium hostel rooms and reserve instantly.",

    "My Room":
      "Check room details, facilities, roommates, and room status.",

    Payments:
      "Track rent payments, due dates, invoices, and payment history.",

    "Food Menu":
      "Check today's special meals, weekly menu, and food updates.",

    Complaints:
      "Raise complaints, monitor progress, and get hostel support quickly.",

    Profile:
      "Manage your personal details, security, and student information.",
  };

  /* ==================================================== */
  /* 🔥 QUICK STATS */
/* ==================================================== */

  const quickStats = [

    {
      title: "WiFi",
      value: "Active",
      icon: Wifi,
      color:
        "from-cyan-500 to-blue-500",
    },

    {
      title: "Security",
      value: "24/7",
      icon: ShieldCheck,
      color:
        "from-emerald-500 to-green-500",
    },

    {
      title: "Mess Time",
      value: "7:30 PM",
      icon: Clock3,
      color:
        "from-orange-400 to-yellow-400",
    },
  ];

  /* ==================================================== */
  /* 🔥 MENU ICON */
/* ==================================================== */

  const getMenuIcon = () => {

    switch (activeMenu) {

      case "Dashboard":

        return (
          <Sparkles
            size={26}
          />
        );

      case "Book Room":

        return (
          <BedDouble
            size={26}
          />
        );

      case "My Room":

        return (
          <GraduationCap
            size={26}
          />
        );

      case "Payments":

        return (
          <CreditCard
            size={26}
          />
        );

      case "Food Menu":

        return (
          <Wallet
            size={26}
          />
        );

      case "Complaints":

        return (
          <MessageSquareWarning
            size={26}
          />
        );

      case "Profile":

        return (
          <User
            size={26}
          />
        );

      default:

        return (
          <Sparkles
            size={26}
          />
        );
    }
  };

  /* ==================================================== */
  /* 🔥 JSX */
/* ==================================================== */

  return (

    <div className="
    sticky
    top-0
    z-30
    border-b
    border-white/10
    bg-[#050816]/85
    backdrop-blur-3xl
    overflow-hidden
    ">

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      <div className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
      ">

        {/* PURPLE */}

        <div className="
        absolute
        top-[-100px]
        left-[20%]
        w-[250px]
        h-[250px]
        rounded-full
        bg-purple-500/10
        blur-[100px]
        "></div>

        {/* PINK */}

        <div className="
        absolute
        right-0
        top-0
        w-[220px]
        h-[220px]
        rounded-full
        bg-pink-500/10
        blur-[100px]
        "></div>

      </div>

      {/* ================================================= */}
      {/* 🔥 MAIN */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      px-4
      sm:px-6
      lg:px-10
      py-6
      ">

        {/* =============================================== */}
        {/* 🔥 TOP SECTION */}
        {/* =============================================== */}

        <div className="
        flex
        flex-col
        xl:flex-row
        xl:items-center
        xl:justify-between
        gap-8
        ">

          {/* ============================================= */}
          {/* 🔥 LEFT */}
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
              duration: 0.5,
            }}
          >

            {/* BADGE */}

            <div className="
            inline-flex
            items-center
            gap-2
            px-4
            py-2
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            text-xs
            uppercase
            tracking-[0.3em]
            text-gray-300
            mb-6
            ">

              <Sparkles
                size={13}
                className="
                text-purple-300
                "
              />

              Premium Student Access

            </div>

            {/* TITLE */}

            <div className="
            flex
            items-start
            gap-5
            mb-5
            ">

              {/* ICON */}

              <div className="
              hidden
              sm:flex
              w-16
              h-16
              rounded-[24px]
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-yellow-400
              items-center
              justify-center
              text-white
              shadow-[0_0_40px_rgba(168,85,247,0.45)]
              ">

                {getMenuIcon()}

              </div>

              {/* TEXT */}

              <div>

                <h1 className="
                text-4xl
                sm:text-5xl
                xl:text-6xl
                font-black
                leading-none
                text-white
                tracking-tight
                mb-4
                ">

                  {
                    titles[
                      activeMenu
                    ]
                  }

                </h1>

                <p className="
                max-w-3xl
                text-gray-400
                text-base
                sm:text-lg
                leading-relaxed
                ">

                  {
                    subtitles[
                      activeMenu
                    ]
                  }

                </p>

              </div>

            </div>

            {/* DATE */}

            <div className="
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            text-gray-300
            ">

              <CalendarDays
                size={20}
                className="
                text-purple-300
                "
              />

              <span className="
              text-sm
              sm:text-base
              font-medium
              ">

                {currentDate}

              </span>

            </div>

          </motion.div>

          {/* ============================================= */}
          {/* 🔥 RIGHT */}
          {/* ============================================= */}

          <motion.div

            initial={{
              opacity: 0,
              x: 30,
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
            flex-col
            lg:flex-row
            gap-5
            xl:items-center
            "
          >

            {/* SEARCH */}

            <div className="
            relative
            w-full
            lg:w-[350px]
            ">

              {/* ICON */}

              <Search
                size={20}
                className="
                absolute
                left-5
                top-1/2
                -translate-y-1/2
                text-gray-500
                "
              />

              {/* INPUT */}

              <input

                type="text"

                placeholder="Search rooms, payments, complaints..."

                className="
                w-full
                h-[58px]
                rounded-[22px]
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-xl
                pl-14
                pr-5
                text-white
                placeholder:text-gray-500
                outline-none
                focus:border-purple-500/30
                transition-all
                duration-300
                "
              />

            </div>

            {/* ACTIONS */}

            <div className="
            flex
            items-center
            gap-4
            ">

              {/* NOTIFICATION */}

              <button className="
              relative
              w-14
              h-14
              rounded-[22px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              flex
              items-center
              justify-center
              text-gray-300
              hover:text-white
              hover:border-purple-500/20
              transition-all
              duration-300
              ">

                <Bell size={22} />

                {/* DOT */}

                <div className="
                absolute
                top-3
                right-3
                w-3
                h-3
                rounded-full
                bg-pink-500
                animate-pulse
                border-2
                border-[#050816]
                "></div>

              </button>

              {/* THEME */}

              <button className="
              hidden
              sm:flex
              w-14
              h-14
              rounded-[22px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              items-center
              justify-center
              text-yellow-300
              hover:border-yellow-400/20
              transition-all
              duration-300
              ">

                <MoonStar size={22} />

              </button>

              {/* PROFILE */}

              <button className="
              group
              flex
              items-center
              gap-4
              px-4
              sm:px-5
              h-[58px]
              rounded-[22px]
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-xl
              hover:border-purple-500/20
              transition-all
              duration-300
              ">

                {/* AVATAR */}

                <div className="
                relative
                w-12
                h-12
                rounded-2xl
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                flex
                items-center
                justify-center
                text-white
                shadow-[0_0_25px_rgba(168,85,247,0.35)]
                ">

                  <User size={20} />

                  {/* ONLINE */}

                  <div className="
                  absolute
                  bottom-0
                  right-0
                  w-3.5
                  h-3.5
                  rounded-full
                  bg-emerald-400
                  border-2
                  border-[#050816]
                  animate-pulse
                  "></div>

                </div>

                {/* TEXT */}

                <div className="
                hidden
                sm:block
                text-left
                ">

                  <h3 className="
                  text-white
                  font-bold
                  leading-none
                  mb-1
                  ">

                    Uday Varma

                  </h3>

                  <p className="
                  text-gray-400
                  text-sm
                  ">

                    Premium Student

                  </p>

                </div>

                {/* ARROW */}

                <ChevronDown
                  size={18}
                  className="
                  hidden
                  sm:block
                  text-gray-500
                  group-hover:text-white
                  transition
                  "
                />

              </button>

            </div>

          </motion.div>

        </div>

        {/* =============================================== */}
        {/* 🔥 QUICK STATUS */}
        {/* =============================================== */}

        <div className="
        mt-8
        grid
        grid-cols-1
        sm:grid-cols-2
        xl:grid-cols-3
        gap-5
        ">

          {
            quickStats.map(
              (item, i) => {

                const Icon =
                  item.icon;

                return (

                  <motion.div

                    key={i}

                    initial={{
                      opacity: 0,
                      y: 20,
                    }}

                    animate={{
                      opacity: 1,
                      y: 0,
                    }}

                    transition={{
                      delay: i * 0.1,
                    }}

                    className="
                    relative
                    overflow-hidden
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-2xl
                    p-5
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
                    blur-[80px]
                    opacity-30
                    bg-gradient-to-r
                    ${item.color}
                    `}></div>

                    {/* CONTENT */}

                    <div className="
                    relative
                    z-10
                    flex
                    items-center
                    justify-between
                    ">

                      {/* LEFT */}

                      <div>

                        <p className="
                        text-gray-400
                        text-sm
                        mb-2
                        ">

                          {item.title}

                        </p>

                        <h3 className="
                        text-white
                        text-2xl
                        font-black
                        ">

                          {item.value}

                        </h3>

                      </div>

                      {/* ICON */}

                      <div className={`
                      w-14
                      h-14
                      rounded-2xl
                      bg-gradient-to-r
                      ${item.color}
                      flex
                      items-center
                      justify-center
                      text-white
                      shadow-lg
                      `}>

                        <Icon size={24} />

                      </div>

                    </div>

                  </motion.div>
                );
              }
            )
          }

        </div>

      </div>

    </div>
  );
}