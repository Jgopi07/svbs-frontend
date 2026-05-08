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
        duration: 0.5,
      }}

      className="
      flex
      flex-col

      w-[85vw]
      max-w-[320px]
      sm:max-w-[340px]

      h-screen

      border-r
      border-white/10

      bg-[#0b1020]/95
      backdrop-blur-3xl

      p-4
      sm:p-6

      relative
      overflow-y-auto

      shadow-[0_0_60px_rgba(0,0,0,0.55)]
      "
    >

      {/* ================================================= */}
      {/* 🔥 GLOW */}
      {/* ================================================= */}

      <div className="
      absolute
      top-[-120px]
      left-[-120px]
      w-[220px]
      h-[220px]
      rounded-full
      bg-purple-500/20
      blur-[100px]
      "></div>

      <div className="
      absolute
      bottom-[-120px]
      right-[-120px]
      w-[220px]
      h-[220px]
      rounded-full
      bg-pink-500/20
      blur-[100px]
      "></div>

      {/* ================================================= */}
      {/* 🔥 TOP */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      flex
      items-center
      justify-between
      mb-8
      ">

        <div className="
        flex
        items-center
        gap-3
        ">

          {/* LOGO */}

          <div className="
          relative
          w-14
          h-14
          sm:w-16
          sm:h-16
          rounded-[20px]
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
          shadow-[0_0_30px_rgba(168,85,247,0.4)]
          ">

            A

          </div>

          {/* TEXT */}

          <div>

            <h1 className="
            text-2xl
            sm:text-3xl
            font-black
            text-white
            leading-none
            ">

              SVBS

            </h1>

            <p className="
            text-xs
            sm:text-sm
            text-gray-400
            mt-1
            ">

              Admin Dashboard

            </p>

          </div>

        </div>

        {/* LIVE */}

        <div className="
        hidden
        sm:flex
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
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.05]
      p-4
      sm:p-5
      mb-6
      ">

        {/* GLOW */}

        <div className="
        absolute
        top-0
        right-0
        w-40
        h-40
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
          gap-3
          mb-5
          ">

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

              <ShieldCheck size={26} />

            </div>

            <div>

              <h2 className="
              text-white
              text-lg
              sm:text-xl
              font-bold
              ">

                Super Admin

              </h2>

              <p className="
              text-gray-400
              text-xs
              sm:text-sm
              ">

                admin@svbs.com

              </p>

            </div>

          </div>

          {/* TAGS */}

          <div className="
          flex
          flex-wrap
          gap-2
          mb-5
          ">

            <div className="
            px-3
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
            px-3
            py-2
            rounded-full
            bg-purple-500/10
            border
            border-purple-500/20
            text-purple-300
            text-xs
            font-semibold
            ">

              Secure

            </div>

          </div>

          {/* STATS */}

          <div className="
          grid
          grid-cols-2
          gap-3
          ">

            <div className="
            rounded-2xl
            border
            border-white/10
            bg-white/[0.04]
            p-3
            ">

              <div className="
              flex
              items-center
              gap-2
              mb-2
              ">

                <Users
                  size={16}
                  className="
                  text-purple-300
                  "
                />

                <span className="
                text-gray-400
                text-xs
                ">

                  Residents

                </span>

              </div>

              <h3 className="
              text-xl
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
            p-3
            ">

              <div className="
              flex
              items-center
              gap-2
              mb-2
              ">

                <Building2
                  size={16}
                  className="
                  text-pink-300
                  "
                />

                <span className="
                text-gray-400
                text-xs
                ">

                  Rooms

                </span>

              </div>

              <h3 className="
              text-xl
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
      grid-cols-1
      sm:grid-cols-2
      gap-3
      mb-6
      ">

        {/* ADD */}

        <button className="
        rounded-2xl
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        p-4
        text-left
        text-white
        transition-all
        duration-300
        ">

          <UserPlus
            size={22}
            className="mb-3"
          />

          <h3 className="
          font-bold
          text-base
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
        p-4
        text-left
        ">

          <ClipboardList
            size={22}
            className="
            text-purple-300
            mb-3
            "
          />

          <h3 className="
          text-white
          font-bold
          text-base
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
                scale: 1.01,
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
              rounded-[24px]
              border
              p-4
              transition-all
              duration-300

              ${
                activeMenu === item.name

                  ? `
                  bg-gradient-to-r
                  from-purple-500
                  to-pink-500
                  border-purple-500/20
                  text-white
                  `

                  : `
                  bg-white/[0.04]
                  border-white/10
                  hover:border-purple-500/20
                  text-gray-300
                  `
              }
              `}
            >

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
                gap-3
                min-w-0
                ">

                  {/* ICON */}

                  <div className={`
                  w-12
                  h-12
                  rounded-2xl
                  flex
                  items-center
                  justify-center

                  ${
                    activeMenu === item.name

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

                    <Icon size={22} />

                  </div>

                  {/* TEXT */}

                  <div className="
                  text-left
                  min-w-0
                  ">

                    <h3 className="
                    font-bold
                    text-sm
                    sm:text-base
                    truncate
                    ">

                      {item.name}

                    </h3>

                    <p className={`
                    text-xs
                    truncate

                    ${
                      activeMenu === item.name

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

                  size={18}

                  className={`
                  flex-shrink-0

                  ${
                    activeMenu === item.name

                      ? `
                      text-white
                      `

                      : `
                      text-gray-500
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
      mt-6
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.05]
      p-5
      mb-5
      overflow-hidden
      ">

        <div className="
        absolute
        bottom-0
        right-0
        w-32
        h-32
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
        mb-5
        ">

          <div>

            <h3 className="
            text-white
            text-lg
            font-bold
            mb-1
            ">

              Live Analytics

            </h3>

            <p className="
            text-gray-400
            text-xs
            ">

              Hostel performance

            </p>

          </div>

          <div className="
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
          ">

            <Activity size={20} />

          </div>

        </div>

        {/* BARS */}

        <div className="
        relative
        z-10
        space-y-4
        ">

          <div>

            <div className="
            flex
            justify-between
            mb-2
            ">

              <span className="
              text-gray-300
              text-xs
              ">

                Occupancy

              </span>

              <span className="
              text-white
              text-xs
              font-semibold
              ">

                92%

              </span>

            </div>

            <div className="
            w-full
            h-2
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

          <div>

            <div className="
            flex
            justify-between
            mb-2
            ">

              <span className="
              text-gray-300
              text-xs
              ">

                Revenue

              </span>

              <span className="
              text-white
              text-xs
              font-semibold
              ">

                84%

              </span>

            </div>

            <div className="
            w-full
            h-2
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
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.05]
        p-4
        mb-4
        ">

          <div>

            <h3 className="
            text-white
            font-bold
            text-sm
            mb-1
            ">

              Secure Mode

            </h3>

            <p className="
            text-gray-400
            text-xs
            ">

              System protected

            </p>

          </div>

          <div className="
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
          ">

            <MoonStar size={20} />

          </div>

        </div>

        {/* LOGOUT */}

        <motion.button

          whileHover={{
            scale: 1.01,
          }}

          whileTap={{
            scale: 0.98,
          }}

          onClick={handleLogout}

          className="
          w-full
          rounded-[24px]
          bg-gradient-to-r
          from-red-500
          via-pink-500
          to-rose-500
          p-4
          text-white
          font-bold
          text-base
          flex
          items-center
          justify-center
          gap-3
          shadow-[0_0_35px_rgba(239,68,68,0.35)]
          "
        >

          <LogOut size={22} />

          Logout

        </motion.button>

        {/* COPYRIGHT */}

        <div className="
        mt-4
        text-center
        ">

          <p className="
          text-gray-500
          text-[10px]
          tracking-wide
          ">

            © 2026 SVBS Hostel Management

          </p>

        </div>

      </div>

    </motion.aside>
  );
}