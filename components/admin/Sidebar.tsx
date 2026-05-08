"use client";

import {
  LayoutDashboard,
  BedDouble,
  Users,
  CreditCard,
  UtensilsCrossed,
  MessageSquareWarning,
  FileBarChart2,
  ChevronRight,
  ShieldCheck,
  MoonStar,
  LogOut,
  Sparkles,
  Activity,
  Building2,
  ClipboardList,
  UserPlus,
  X,
} from "lucide-react";

import { motion } from "framer-motion";

interface SidebarProps {

  activeMenu: string;

  setActiveMenu: (
    value: string
  ) => void;

  closeSidebar: () => void;
}

export default function Sidebar({

  activeMenu,

  setActiveMenu,

  closeSidebar,

}: SidebarProps) {

  /* ====================================================== */
  /* 🔥 MENU */
  /* ====================================================== */

  const menu = [

    {
      name: "Dashboard",
      icon: LayoutDashboard,
      desc:
        "Overview & analytics",
    },

    {
      name: "Rooms",
      icon: BedDouble,
      desc:
        "Manage hostel rooms",
    },

    {
      name: "Residents",
      icon: Users,
      desc:
        "Students management",
    },

    {
      name: "Payments",
      icon: CreditCard,
      desc:
        "Track rent payments",
    },

    {
      name: "Food Menu",
      icon: UtensilsCrossed,
      desc:
        "Mess management",
    },

    {
      name: "Complaints",
      icon:
        MessageSquareWarning,
      desc:
        "Student issues",
    },

    {
      name: "Reports",
      icon: FileBarChart2,
      desc:
        "Analytics & reports",
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
        duration: 0.6,
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
      {/* 🔥 GLOW */}
      {/* ================================================= */}

      <div className="
      absolute
      top-[-120px]
      left-[-120px]
      w-[260px]
      h-[260px]
      rounded-full
      bg-purple-500/20
      blur-[100px]
      "></div>

      <div className="
      absolute
      bottom-[-120px]
      right-[-120px]
      w-[260px]
      h-[260px]
      rounded-full
      bg-pink-500/20
      blur-[100px]
      "></div>

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

        {/* ================================================= */}
        {/* 🔥 TOP LOGO */}
        {/* ================================================= */}

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

              A

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

                Admin Dashboard

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

        {/* ================================================= */}
        {/* 🔥 ADMIN CARD */}
        {/* ================================================= */}

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

          <div className="
          relative
          z-10
          ">

            <div className="
            flex
            items-center
            gap-4
            mb-6
            ">

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

                <ShieldCheck size={34} />

              </div>

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

                  Super Admin

                </h2>

                <p className="
                text-gray-400
                text-sm
                truncate
                ">

                  admin@svbs.com

                </p>

              </div>

            </div>

            {/* STATS */}

            <div className="
            grid
            grid-cols-2
            gap-4
            ">

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

                  Residents

                </p>

                <h3 className="
                text-white
                text-2xl
                font-black
                ">

                  248

                </h3>

              </div>

              <div className="
              rounded-2xl
              border
              border-white/10
              bg-gradient-to-r
              from-purple-500/20
              to-pink-500/20
              p-4
              ">

                <p className="
                text-yellow-300
                text-xs
                uppercase
                tracking-[0.2em]
                mb-2
                ">

                  Rooms

                </p>

                <h3 className="
                text-white
                text-xl
                font-black
                ">

                  112

                </h3>

              </div>

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* 🔥 MENU */}
        {/* ================================================= */}

        <div className="
        space-y-3
        mb-8
        ">

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

                  <div className="
                  relative
                  z-10
                  flex
                  items-center
                  gap-4
                  ">

                    <div className={`
                    w-12
                    h-12
                    rounded-2xl
                    flex
                    items-center
                    justify-center

                    ${
                      isActive
                        ? "bg-white/20"
                        : "bg-white/[0.05] border border-white/10"
                    }
                    `}>

                      <Icon size={22} />

                    </div>

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

                        {item.desc}

                      </p>

                    </div>

                  </div>

                  <ChevronRight
                    size={18}
                    className="
                    transition-all
                    duration-300
                    group-hover:translate-x-1
                    "
                  />

                </motion.button>
              );
            })
          }

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

          <LogOut
            size={22}
            className="
            relative
            z-10
            "
          />

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