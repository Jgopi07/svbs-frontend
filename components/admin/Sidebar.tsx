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
} from "lucide-react";

import { motion } from "framer-motion";

interface SidebarProps {

  activeMenu: string;

  setActiveMenu: (
    value: string
  ) => void;
}

export default function Sidebar({

  activeMenu,

  setActiveMenu,

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
      hidden
      lg:flex
      flex-col
      w-[330px]
      min-h-screen
      border-r
      border-white/10
      bg-white/[0.04]
      backdrop-blur-3xl
      p-7
      relative
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
      {/* 🔥 TOP LOGO */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      flex
      items-center
      justify-between
      mb-10
      ">

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
          rounded-[22px]
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
          shadow-[0_0_40px_rgba(168,85,247,0.5)]
          ">

            A

            <div className="
            absolute
            inset-0
            rounded-[22px]
            border
            border-white/20
            "></div>

          </div>

          {/* TEXT */}

          <div>

            <h1 className="
            text-3xl
            font-black
            text-white
            leading-none
            mb-2
            ">

              SVBS

            </h1>

            <p className="
            text-sm
            text-gray-400
            tracking-wide
            ">

              Admin Dashboard

            </p>

          </div>

        </div>

        {/* LIVE */}

        <div className="
        flex
        items-center
        gap-2
        px-3
        py-2
        rounded-full
        border
        border-emerald-500/20
        bg-emerald-500/10
        text-emerald-300
        text-xs
        font-semibold
        ">

          <div className="
          w-2
          h-2
          rounded-full
          bg-emerald-400
          animate-pulse
          "></div>

          LIVE

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 ADMIN CARD */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      overflow-hidden
      rounded-[35px]
      border
      border-white/10
      bg-white/[0.05]
      p-6
      mb-8
      ">

        {/* CARD GLOW */}

        <div className="
        absolute
        top-0
        right-0
        w-44
        h-44
        rounded-full
        bg-purple-500/20
        blur-[90px]
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
            w-16
            h-16
            rounded-2xl
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            flex
            items-center
            justify-center
            text-white
            shadow-[0_0_30px_rgba(168,85,247,0.4)]
            ">

              <ShieldCheck size={30} />

            </div>

            {/* DETAILS */}

            <div>

              <h2 className="
              text-white
              text-xl
              font-bold
              mb-1
              ">

                Super Admin

              </h2>

              <p className="
              text-gray-400
              text-sm
              ">

                admin@svbs.com

              </p>

            </div>

          </div>

          {/* TAGS */}

          <div className="
          flex
          flex-wrap
          gap-3
          mb-6
          ">

            <div className="
            px-4
            py-2
            rounded-full
            bg-emerald-500/10
            border
            border-emerald-500/20
            text-emerald-300
            text-xs
            font-semibold
            ">

              Full Access

            </div>

            <div className="
            px-4
            py-2
            rounded-full
            bg-purple-500/10
            border
            border-purple-500/20
            text-purple-300
            text-xs
            font-semibold
            ">

              Secure Control

            </div>

          </div>

          {/* MINI STATS */}

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

              <div className="
              flex
              items-center
              gap-3
              mb-3
              ">

                <Users
                  size={18}
                  className="
                  text-purple-300
                  "
                />

                <span className="
                text-gray-400
                text-sm
                ">

                  Residents

                </span>

              </div>

              <h3 className="
              text-2xl
              font-black
              text-white
              ">

                248

              </h3>

            </div>

            <div className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-4
            ">

              <div className="
              flex
              items-center
              gap-3
              mb-3
              ">

                <Building2
                  size={18}
                  className="
                  text-pink-300
                  "
                />

                <span className="
                text-gray-400
                text-sm
                ">

                  Rooms

                </span>

              </div>

              <h3 className="
              text-2xl
              font-black
              text-white
              ">

                112

              </h3>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 QUICK BUTTONS */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      grid
      grid-cols-2
      gap-4
      mb-8
      ">

        {/* ADD */}

        <button className="
        rounded-2xl
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        p-5
        text-left
        text-white
        hover:scale-[1.03]
        transition-all
        duration-300
        shadow-[0_0_30px_rgba(168,85,247,0.35)]
        ">

          <UserPlus
            size={24}
            className="mb-4"
          />

          <h3 className="
          font-bold
          mb-1
          ">

            Add

          </h3>

          <p className="
          text-white/80
          text-xs
          ">

            Resident

          </p>

        </button>

        {/* REPORT */}

        <button className="
        rounded-2xl
        border
        border-white/10
        bg-white/[0.05]
        p-5
        text-left
        hover:border-purple-500/30
        transition-all
        duration-300
        ">

          <ClipboardList
            size={24}
            className="
            text-purple-300
            mb-4
            "
          />

          <h3 className="
          text-white
          font-bold
          mb-1
          ">

            Reports

          </h3>

          <p className="
          text-gray-400
          text-xs
          ">

            Download

          </p>

        </button>

      </div>

      {/* ================================================= */}
      {/* 🔥 MENU */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      flex-1
      space-y-3
      overflow-y-auto
      pr-1
      ">

        {menu.map((item, i) => {

          const Icon = item.icon;

          return (

            <motion.button

              whileHover={{
                scale: 1.02,
              }}

              whileTap={{
                scale: 0.98,
              }}

              key={i}

              onClick={() =>
                setActiveMenu(
                  item.name
                )
              }

              className={`
              group
              relative
              overflow-hidden
              w-full
              rounded-[28px]
              border
              p-5
              transition-all
              duration-300

              ${
                activeMenu === item.name

                  ? `
                  bg-gradient-to-r
                  from-purple-500
                  to-pink-500
                  border-purple-500/20
                  shadow-[0_0_40px_rgba(168,85,247,0.35)]
                  text-white
                  `

                  : `
                  bg-white/[0.04]
                  border-white/10
                  hover:border-purple-500/20
                  hover:bg-white/[0.07]
                  text-gray-300
                  `
              }
              `}
            >

              {/* ACTIVE GLOW */}

              {activeMenu ===
                item.name && (

                <div className="
                absolute
                inset-0
                bg-white/5
                "></div>
              )}

              {/* CONTENT */}

              <div className="
              relative
              z-10
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
                  w-14
                  h-14
                  rounded-2xl
                  flex
                  items-center
                  justify-center
                  transition-all

                  ${
                    activeMenu ===
                    item.name

                      ? `
                      bg-white/20
                      text-white
                      `

                      : `
                      bg-white/[0.05]
                      border
                      border-white/10
                      text-purple-300
                      `
                  }
                  `}>

                    <Icon size={24} />

                  </div>

                  {/* TEXT */}

                  <div className="
                  text-left
                  ">

                    <h3 className="
                    font-bold
                    text-lg
                    mb-1
                    ">

                      {item.name}

                    </h3>

                    <p className={`
                    text-sm

                    ${
                      activeMenu ===
                      item.name

                        ? `
                        text-white/80
                        `

                        : `
                        text-gray-400
                        `
                    }
                    `}>

                      {item.desc}

                    </p>

                  </div>

                </div>

                {/* RIGHT */}

                <ChevronRight

                  size={20}

                  className={`
                  transition-all
                  duration-300

                  ${
                    activeMenu ===
                    item.name

                      ? `
                      translate-x-1
                      text-white
                      `

                      : `
                      text-gray-500
                      group-hover:translate-x-1
                      `
                  }
                  `}
                />

              </div>

            </motion.button>
          );
        })}

      </div>

      {/* ================================================= */}
      {/* 🔥 ANALYTICS */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      mt-8
      rounded-[32px]
      border
      border-white/10
      bg-white/[0.05]
      p-6
      mb-6
      overflow-hidden
      ">

        {/* GLOW */}

        <div className="
        absolute
        bottom-0
        right-0
        w-36
        h-36
        bg-pink-500/20
        blur-[80px]
        rounded-full
        "></div>

        {/* TOP */}

        <div className="
        relative
        z-10
        flex
        items-center
        justify-between
        mb-6
        ">

          <div>

            <h3 className="
            text-white
            text-xl
            font-bold
            mb-2
            ">

              Live Analytics

            </h3>

            <p className="
            text-gray-400
            text-sm
            ">

              Hostel performance

            </p>

          </div>

          <div className="
          w-14
          h-14
          rounded-2xl
          bg-gradient-to-r
          from-purple-500
          to-pink-500
          flex
          items-center
          justify-center
          text-white
          ">

            <Activity size={24} />

          </div>

        </div>

        {/* PROGRESS */}

        <div className="
        relative
        z-10
        space-y-5
        ">

          {/* OCCUPANCY */}

          <div>

            <div className="
            flex
            items-center
            justify-between
            mb-3
            ">

              <span className="
              text-gray-300
              text-sm
              ">

                Occupancy

              </span>

              <span className="
              text-white
              font-semibold
              text-sm
              ">

                92%

              </span>

            </div>

            <div className="
            w-full
            h-3
            rounded-full
            bg-white/10
            overflow-hidden
            ">

              <div className="
              h-full
              w-[92%]
              rounded-full
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              "></div>

            </div>

          </div>

          {/* REVENUE */}

          <div>

            <div className="
            flex
            items-center
            justify-between
            mb-3
            ">

              <span className="
              text-gray-300
              text-sm
              ">

                Revenue

              </span>

              <span className="
              text-white
              font-semibold
              text-sm
              ">

                84%

              </span>

            </div>

            <div className="
            w-full
            h-3
            rounded-full
            bg-white/10
            overflow-hidden
            ">

              <div className="
              h-full
              w-[84%]
              rounded-full
              bg-gradient-to-r
              from-yellow-400
              to-orange-500
              "></div>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 FOOTER */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      ">

        {/* MODE */}

        <div className="
        flex
        items-center
        justify-between
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.05]
        p-5
        mb-5
        ">

          <div>

            <h3 className="
            text-white
            font-bold
            mb-2
            ">

              Secure Mode

            </h3>

            <p className="
            text-gray-400
            text-sm
            ">

              System protected

            </p>

          </div>

          <div className="
          w-14
          h-14
          rounded-2xl
          bg-gradient-to-r
          from-purple-500
          to-pink-500
          flex
          items-center
          justify-center
          text-white
          ">

            <MoonStar size={22} />

          </div>

        </div>

        {/* LOGOUT */}

        <motion.button

          whileHover={{
            scale: 1.02,
          }}

          whileTap={{
            scale: 0.98,
          }}

          onClick={handleLogout}

          className="
          w-full
          rounded-[28px]
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-rose-500
          p-5
          text-white
          font-bold
          text-lg
          flex
          items-center
          justify-center
          gap-4
          shadow-[0_0_35px_rgba(239,68,68,0.35)]
          "
        >

          <LogOut size={24} />

          Logout

        </motion.button>

        {/* COPYRIGHT */}

        <div className="
        mt-5
        text-center
        ">

          <p className="
          text-gray-500
          text-xs
          tracking-wide
          ">

            © 2026 SVBS Hostel Management

          </p>

        </div>

      </div>

    </motion.aside>
  );
} 