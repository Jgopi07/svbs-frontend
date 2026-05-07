"use client";

import {
  Home,
  BedDouble,
  CreditCard,
  UtensilsCrossed,
  MessageSquareWarning,
  User,
  GraduationCap,
  Building2,
  ChevronRight,
  LogOut,
  X,
  ShieldCheck,
  Sparkles,
  MoonStar,
  Wifi,
  Bell,
  BookOpen,
  Clock3,
  Crown,
} from "lucide-react";

import { motion } from "framer-motion";

/* ====================================================== */
/* 🔥 PROPS */
/* ====================================================== */

interface SidebarProps {

  activeMenu: string;

  setActiveMenu: (
    menu: string
  ) => void;

  handleLogout: () => void;

  closeSidebar: () => void;
}

/* ====================================================== */
/* 🔥 SIDEBAR */
/* ====================================================== */

export default function Sidebar({

  activeMenu,

  setActiveMenu,

  handleLogout,

  closeSidebar,

}: SidebarProps) {

  /* ==================================================== */
  /* 🔥 MENU */
/* ==================================================== */

  const menu = [

    {
      name: "Dashboard",
      icon: Home,
      badge: "Live",
    },

    {
      name: "Book Room",
      icon: BedDouble,
      badge: "New",
    },

    {
      name: "My Room",
      icon: Building2,
      badge: "A-302",
    },

    {
      name: "Payments",
      icon: CreditCard,
      badge: "Due",
    },

    {
      name: "Food Menu",
      icon: UtensilsCrossed,
      badge: "Updated",
    },

    {
      name: "Complaints",
      icon: MessageSquareWarning,
      badge: "01",
    },

    {
      name: "Profile",
      icon: User,
      badge: "User",
    },
  ];

  /* ==================================================== */
  /* 🔥 FACILITIES */
/* ==================================================== */

  const facilities = [

    {
      title: "24/7 Security",
      icon: ShieldCheck,
      color:
        "from-emerald-500 to-green-400",
    },

    {
      title: "High Speed WiFi",
      icon: Wifi,
      color:
        "from-cyan-500 to-blue-500",
    },

    {
      title: "Study Rooms",
      icon: BookOpen,
      color:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Laundry Service",
      icon: Clock3,
      color:
        "from-orange-400 to-yellow-400",
    },
  ];

  /* ==================================================== */
  /* 🔥 JSX */
/* ==================================================== */

  return (

    <motion.aside

      initial={{
        x: -80,
        opacity: 0,
      }}

      animate={{
        x: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.5,
      }}

      className="
      relative
      w-[310px]
      sm:w-[340px]
      h-screen
      border-r
      border-white/10
      bg-[#070b1d]/90
      backdrop-blur-3xl
      flex
      flex-col
      overflow-hidden
      "
    >

      {/* ================================================= */}
      {/* 🔥 BACKGROUND GLOW */}
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
        left-[-100px]
        w-[300px]
        h-[300px]
        rounded-full
        bg-purple-500/20
        blur-[120px]
        "></div>

        {/* PINK */}

        <div className="
        absolute
        bottom-[-100px]
        right-[-100px]
        w-[300px]
        h-[300px]
        rounded-full
        bg-pink-500/20
        blur-[120px]
        "></div>

      </div>

      {/* ================================================= */}
      {/* 🔥 SCROLL AREA */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      flex-1
      overflow-y-auto
      custom-scrollbar
      px-5
      py-6
      ">

        {/* =============================================== */}
        {/* 🔥 TOP HEADER */}
        {/* =============================================== */}

        <div className="
        flex
        items-center
        justify-between
        mb-8
        ">

          {/* LEFT */}

          <div className="
          flex
          items-center
          gap-4
          ">

            {/* LOGO */}

            <div className="
            relative
            w-16
            h-16
            rounded-[24px]
            bg-gradient-to-r
            from-purple-500
            via-pink-500
            to-yellow-400
            flex
            items-center
            justify-center
            text-black
            font-black
            text-2xl
            shadow-[0_0_45px_rgba(168,85,247,0.5)]
            ">

              {/* GLOW */}

              <div className="
              absolute
              inset-0
              rounded-[24px]
              bg-white/20
              blur-xl
              "></div>

              <span className="
              relative
              z-10
              ">

                S

              </span>

            </div>

            {/* TEXT */}

            <div>

              <h1 className="
              text-white
              text-3xl
              font-black
              tracking-tight
              ">

                SVBS

              </h1>

              <p className="
              text-gray-400
              text-sm
              font-medium
              ">

                Student Dashboard

              </p>

            </div>

          </div>

          {/* MOBILE CLOSE */}

          <button

            onClick={closeSidebar}

            className="
            lg:hidden
            w-11
            h-11
            rounded-2xl
            border
            border-white/10
            bg-white/[0.05]
            flex
            items-center
            justify-center
            text-gray-300
            hover:text-white
            transition-all
            duration-300
            "
          >

            <X size={20} />

          </button>

        </div>

        {/* =============================================== */}
        {/* 🔥 PROFILE CARD */}
        {/* =============================================== */}

        <div className="
        relative
        overflow-hidden
        rounded-[32px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        p-6
        mb-8
        ">

          {/* GLOW */}

          <div className="
          absolute
          top-0
          right-0
          w-40
          h-40
          bg-purple-500/20
          blur-[100px]
          rounded-full
          "></div>

          {/* CONTENT */}

          <div className="
          relative
          z-10
          ">

            {/* PROFILE */}

            <div className="
            flex
            items-center
            gap-4
            mb-6
            ">

              {/* AVATAR */}

              <div className="
              relative
              w-20
              h-20
              rounded-[26px]
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              flex
              items-center
              justify-center
              text-white
              shadow-[0_0_35px_rgba(168,85,247,0.45)]
              ">

                <GraduationCap size={34} />

                {/* STATUS */}

                <div className="
                absolute
                bottom-1
                right-1
                w-4
                h-4
                rounded-full
                bg-emerald-400
                border-2
                border-[#050816]
                animate-pulse
                "></div>

              </div>

              {/* INFO */}

              <div className="
              flex-1
              min-w-0
              ">

                <h2 className="
                text-white
                text-2xl
                font-bold
                truncate
                ">

                  Uday Varma

                </h2>

                <p className="
                text-gray-400
                text-sm
                truncate
                ">

                  student@svbs.com

                </p>

                <div className="
                mt-3
                inline-flex
                items-center
                gap-2
                px-3
                py-1.5
                rounded-full
                bg-emerald-500/10
                border
                border-emerald-500/20
                text-emerald-300
                text-xs
                font-semibold
                ">

                  <ShieldCheck size={13} />

                  Active Resident

                </div>

              </div>

            </div>

            {/* ROOM */}

            <div className="
            grid
            grid-cols-2
            gap-4
            ">

              {/* ROOM */}

              <div className="
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              p-4
              ">

                <p className="
                text-gray-400
                text-xs
                mb-2
                uppercase
                tracking-[0.2em]
                ">

                  Room

                </p>

                <h3 className="
                text-white
                text-2xl
                font-black
                ">

                  A-302

                </h3>

              </div>

              {/* PLAN */}

              <div className="
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-r
              from-purple-500/20
              to-pink-500/20
              p-4
              ">

                <div className="
                flex
                items-center
                gap-2
                mb-2
                ">

                  <Crown
                    size={14}
                    className="
                    text-yellow-300
                    "
                  />

                  <p className="
                  text-yellow-300
                  text-xs
                  uppercase
                  tracking-[0.2em]
                  ">

                    Plan

                  </p>

                </div>

                <h3 className="
                text-white
                text-xl
                font-black
                ">

                  Premium

                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* =============================================== */}
        {/* 🔥 MENU */}
        {/* =============================================== */}

        <div className="
        space-y-3
        mb-8
        ">

          {/* TITLE */}

          <div className="
          flex
          items-center
          justify-between
          px-2
          mb-4
          ">

            <h3 className="
            text-gray-400
            text-xs
            uppercase
            tracking-[0.3em]
            font-semibold
            ">

              Navigation

            </h3>

            <Sparkles
              size={14}
              className="
              text-purple-300
              "
            />

          </div>

          {/* ITEMS */}

          {
            menu.map((item, i) => {

              const Icon = item.icon;

              const isActive =
                activeMenu === item.name;

              return (

                <motion.button

                  whileTap={{
                    scale: 0.97,
                  }}

                  key={i}

                  onClick={() => {

                    setActiveMenu(
                      item.name
                    );

                    closeSidebar();
                  }}

                  className={`
                  group
                  relative
                  overflow-hidden
                  w-full
                  flex
                  items-center
                  justify-between
                  px-5
                  py-4
                  rounded-[24px]
                  border
                  transition-all
                  duration-300

                  ${
                    isActive
                      ? "bg-gradient-to-r from-purple-500 via-pink-500 to-purple-500 border-purple-400/30 text-white shadow-[0_0_35px_rgba(168,85,247,0.35)]"
                      : "bg-white/[0.04] border-white/10 text-gray-300 hover:border-purple-500/20 hover:bg-white/[0.07] hover:text-white"
                  }
                  `}
                >

                  {/* ACTIVE GLOW */}

                  {
                    isActive && (

                      <div className="
                      absolute
                      inset-0
                      bg-white/10
                      backdrop-blur-xl
                      "></div>
                    )
                  }

                  {/* LEFT */}

                  <div className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-4
                  ">

                    {/* ICON */}

                    <div className={`
                    w-12
                    h-12
                    rounded-2xl
                    flex
                    items-center
                    justify-center
                    transition-all
                    duration-300

                    ${
                      isActive
                        ? "bg-white/20"
                        : "bg-white/[0.05] border border-white/10"
                    }
                    `}>

                      <Icon size={22} />

                    </div>

                    {/* NAME */}

                    <div className="
                    text-left
                    ">

                      <p className="
                      font-semibold
                      text-base
                      ">

                        {item.name}

                      </p>

                      <p className={`
                      text-xs

                      ${
                        isActive
                          ? "text-white/70"
                          : "text-gray-500"
                      }
                      `}>

                        Student Module

                      </p>

                    </div>

                  </div>

                  {/* RIGHT */}

                  <div className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-3
                  ">

                    {/* BADGE */}

                    <div className={`
                    px-3
                    py-1.5
                    rounded-full
                    text-[10px]
                    font-bold
                    uppercase
                    tracking-[0.15em]

                    ${
                      isActive
                        ? "bg-white/20 text-white"
                        : "bg-white/[0.06] text-gray-400 border border-white/10"
                    }
                    `}>

                      {item.badge}

                    </div>

                    {/* ARROW */}

                    <ChevronRight
                      size={18}
                      className={`
                      transition-all
                      duration-300

                      ${
                        isActive
                          ? "translate-x-1"
                          : "group-hover:translate-x-1"
                      }
                      `}
                    />

                  </div>

                </motion.button>
              );
            })
          }

        </div>

        {/* =============================================== */}
        {/* 🔥 FACILITIES */}
        {/* =============================================== */}

        <div className="
        mb-8
        ">

          {/* TITLE */}

          <div className="
          flex
          items-center
          justify-between
          px-2
          mb-4
          ">

            <h3 className="
            text-gray-400
            text-xs
            uppercase
            tracking-[0.3em]
            font-semibold
            ">

              Facilities

            </h3>

            <Bell
              size={14}
              className="
              text-pink-300
              "
            />

          </div>

          {/* ITEMS */}

          <div className="
          space-y-3
          ">

            {
              facilities.map(
                (item, i) => {

                  const Icon =
                    item.icon;

                  return (

                    <div

                      key={i}

                      className="
                      group
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-4
                      hover:border-purple-500/20
                      hover:bg-white/[0.06]
                      transition-all
                      duration-300
                      "
                    >

                      <div className="
                      flex
                      items-center
                      justify-between
                      ">

                        {/* LEFT */}

                        <div className="
                        flex
                        items-center
                        gap-4
                        ">

                          {/* ICON */}

                          <div className={`
                          w-12
                          h-12
                          rounded-2xl
                          bg-gradient-to-r
                          ${item.color}
                          flex
                          items-center
                          justify-center
                          text-white
                          shadow-lg
                          `}>

                            <Icon
                              size={20}
                            />

                          </div>

                          {/* TEXT */}

                          <div>

                            <h4 className="
                            text-white
                            font-semibold
                            text-sm
                            mb-1
                            ">

                              {item.title}

                            </h4>

                            <div className="
                            flex
                            items-center
                            gap-2
                            ">

                              <div className="
                              w-2
                              h-2
                              rounded-full
                              bg-emerald-400
                              animate-pulse
                              "></div>

                              <p className="
                              text-gray-400
                              text-xs
                              ">

                                Active

                              </p>

                            </div>

                          </div>

                        </div>

                      </div>

                    </div>
                  );
                }
              )
            }

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 FOOTER */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      border-t
      border-white/10
      p-5
      ">

        {/* LOGOUT */}

        <button

          onClick={handleLogout}

          className="
          group
          relative
          overflow-hidden
          w-full
          flex
          items-center
          justify-center
          gap-3
          py-4
          rounded-[24px]
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-red-500
          text-white
          font-bold
          text-lg
          shadow-[0_0_35px_rgba(239,68,68,0.35)]
          hover:scale-[1.02]
          transition-all
          duration-300
          "
        >

          {/* GLOW */}

          <div className="
          absolute
          inset-0
          bg-white/10
          opacity-0
          group-hover:opacity-100
          transition
          duration-300
          "></div>

          {/* ICON */}

          <LogOut
            size={22}
            className="
            relative
            z-10
            "
          />

          {/* TEXT */}

          <span className="
          relative
          z-10
          ">

            Logout

          </span>

        </button>

      </div>

    </motion.aside>
  );
}