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
  Bell,
  Search,
  Sparkles,
  Wifi,
  Camera,
  Settings,
  Crown,
  ArrowUpRight,
  Shield,
  Home,
  UserCheck,
  CalendarDays,
  BarChart3,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

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
  /* 🔥 STATES */
  /* ====================================================== */

  const [currentTime, setCurrentTime] =
    useState("");

  const [onlineUsers] =
    useState(148);

  const [notifications] =
    useState(12);

  /* ====================================================== */
  /* 🔥 TIME */
  /* ====================================================== */

  useEffect(() => {

    const updateClock = () => {

      const now = new Date();

      setCurrentTime(

        now.toLocaleTimeString(
          [],
          {
            hour: "2-digit",
            minute: "2-digit",
          }
        )
      );
    };

    updateClock();

    const interval =
      setInterval(
        updateClock,
        1000
      );

    return () =>
      clearInterval(interval);

  }, []);

  /* ====================================================== */
  /* 🔥 MENU */
  /* ====================================================== */

  const menu = [

    {
      name: "Dashboard",
      icon: LayoutDashboard,
      desc:
        "Overview & analytics",
      color:
        "from-purple-500 to-pink-500",
    },

    {
      name: "Rooms",
      icon: BedDouble,
      desc:
        "Manage hostel rooms",
      color:
        "from-blue-500 to-cyan-500",
    },

    {
      name: "Residents",
      icon: Users,
      desc:
        "Students management",
      color:
        "from-emerald-500 to-green-500",
    },

    {
      name: "Payments",
      icon: CreditCard,
      desc:
        "Track rent payments",
      color:
        "from-yellow-400 to-orange-500",
    },

    {
      name: "Food Menu",
      icon: UtensilsCrossed,
      desc:
        "Mess management",
      color:
        "from-pink-500 to-rose-500",
    },

    {
      name: "Complaints",
      icon:
        MessageSquareWarning,
      desc:
        "Student issues",
      color:
        "from-red-500 to-orange-500",
    },

    {
      name: "Reports",
      icon: FileBarChart2,
      desc:
        "Analytics & reports",
      color:
        "from-indigo-500 to-purple-500",
    },

    {
      name: "Attendance",
      icon: UserCheck,
      desc:
        "Track attendance",
      color:
        "from-cyan-500 to-blue-500",
    },

    {
      name: "Events",
      icon: CalendarDays,
      desc:
        "Hostel activities",
      color:
        "from-fuchsia-500 to-pink-500",
    },

    {
      name: "Analytics",
      icon: BarChart3,
      desc:
        "Advanced insights",
      color:
        "from-violet-500 to-purple-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 LOGOUT */
  /* ====================================================== */

  const handleLogout = () => {

    localStorage.removeItem(
      "svbs-auth"
    );

    localStorage.removeItem(
      "svbs-role"
    );

    localStorage.removeItem(
      "svbs-user-email"
    );

    window.location.href = "/";
  };

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <motion.aside

      initial={{
        x: -100,
        opacity: 0,
      }}

      animate={{
        x: 0,
        opacity: 1,
      }}

      transition={{
        duration: 0.7,
      }}

      className="
      hidden
      lg:flex
      flex-col
      w-[340px]
      min-h-screen
      border-r
      border-white/10
      bg-[#06060b]
      backdrop-blur-3xl
      p-7
      relative
      overflow-hidden
      "
    >

      {/* ================================================= */}
      {/* 🔥 HUGE GLOW */}
      {/* ================================================= */}

      <div className="
      absolute
      top-[-150px]
      left-[-120px]
      w-[320px]
      h-[320px]
      rounded-full
      bg-purple-500/20
      blur-[120px]
      "></div>

      <div className="
      absolute
      bottom-[-140px]
      right-[-140px]
      w-[340px]
      h-[340px]
      rounded-full
      bg-pink-500/20
      blur-[120px]
      "></div>

      {/* ================================================= */}
      {/* 🔥 HEADER */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      flex
      items-center
      justify-between
      mb-10
      ">

        {/* LEFT */}

        <div className="
        flex
        items-center
        gap-4
        ">

          {/* LOGO */}

          <motion.div

            whileHover={{
              rotate: 360,
            }}

            transition={{
              duration: 0.9,
            }}

            className="
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
            shadow-[0_0_45px_rgba(168,85,247,0.45)]
            "
          >

            S

            <div className="
            absolute
            inset-0
            rounded-[24px]
            border
            border-white/20
            "></div>

          </motion.div>

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
            text-gray-400
            text-sm
            tracking-wide
            ">

              Premium Dashboard

            </p>

          </div>

        </div>

        {/* NOTIFICATIONS */}

        <div className="
        relative
        w-14
        h-14
        rounded-2xl
        border
        border-white/10
        bg-white/[0.05]
        flex
        items-center
        justify-center
        text-white
        ">

          <Bell size={22} />

          <div className="
          absolute
          top-2
          right-2
          w-5
          h-5
          rounded-full
          bg-pink-500
          text-[10px]
          font-bold
          flex
          items-center
          justify-center
          text-white
          ">

            {notifications}

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 SEARCH */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      mb-8
      ">

        <Search
          size={18}
          className="
          absolute
          left-5
          top-1/2
          -translate-y-1/2
          text-gray-500
          "
        />

        <input
          type="text"
          placeholder="Search anything..."
          className="
          w-full
          rounded-2xl
          border
          border-white/10
          bg-white/[0.05]
          pl-14
          pr-5
          py-4
          text-white
          outline-none
          focus:border-purple-500/30
          transition-all
          duration-300
          "
        />

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

        {/* BG */}

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

          {/* TOP */}

          <div className="
          flex
          items-center
          justify-between
          mb-6
          ">

            <div className="
            flex
            items-center
            gap-4
            ">

              {/* AVATAR */}

              <div className="
              relative
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-yellow-400
              flex
              items-center
              justify-center
              text-white
              shadow-[0_0_35px_rgba(168,85,247,0.4)]
              ">

                <ShieldCheck
                  size={28}
                />

                <div className="
                absolute
                bottom-0
                right-0
                w-4
                h-4
                rounded-full
                bg-emerald-400
                border-2
                border-black
                "></div>

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

              ONLINE

            </div>

          </div>

          {/* BADGES */}

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
            bg-purple-500/10
            border
            border-purple-500/20
            text-purple-300
            text-xs
            font-semibold
            flex
            items-center
            gap-2
            ">

              <Crown size={14} />

              Full Access

            </div>

            <div className="
            px-4
            py-2
            rounded-full
            bg-pink-500/10
            border
            border-pink-500/20
            text-pink-300
            text-xs
            font-semibold
            flex
            items-center
            gap-2
            ">

              <Shield size={14} />

              Secure Mode

            </div>

          </div>

          {/* STATS */}

          <div className="
          grid
          grid-cols-2
          gap-4
          ">

            {/* RESIDENTS */}

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
              justify-between
              mb-4
              ">

                <Users
                  size={20}
                  className="
                  text-purple-300
                  "
                />

                <ArrowUpRight
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
              mb-1
              ">

                248

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Residents

              </p>

            </div>

            {/* ROOMS */}

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
              justify-between
              mb-4
              ">

                <Home
                  size={20}
                  className="
                  text-pink-300
                  "
                />

                <ArrowUpRight
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
              mb-1
              ">

                112

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Rooms

              </p>

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 QUICK ACTIONS */}
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
        rounded-3xl
        bg-gradient-to-r
        from-purple-500
        to-pink-500
        p-5
        text-left
        text-white
        hover:scale-[1.03]
        transition-all
        duration-300
        shadow-[0_0_40px_rgba(168,85,247,0.35)]
        ">

          <UserPlus
            size={26}
            className="mb-4"
          />

          <h3 className="
          font-bold
          text-lg
          mb-2
          ">

            Add Resident

          </h3>

          <p className="
          text-white/80
          text-sm
          ">

            Create new entry

          </p>

        </button>

        {/* REPORTS */}

        <button className="
        rounded-3xl
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
            size={26}
            className="
            text-purple-300
            mb-4
            "
          />

          <h3 className="
          text-white
          font-bold
          text-lg
          mb-2
          ">

            Reports

          </h3>

          <p className="
          text-gray-400
          text-sm
          ">

            Download insights

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

          const Icon =
            item.icon;

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
                  ${item.color}
                  border-transparent
                  shadow-[0_0_45px_rgba(168,85,247,0.35)]
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

        <div className="
        absolute
        bottom-0
        right-0
        w-40
        h-40
        bg-pink-500/20
        blur-[90px]
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

              Real-time performance

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

        {/* STATS */}

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

          {/* SECURITY */}

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

                Security

              </span>

              <span className="
              text-white
              font-semibold
              text-sm
              ">

                98%

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
              w-[98%]
              rounded-full
              bg-gradient-to-r
              from-emerald-400
              to-green-500
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

        {/* SYSTEM */}

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

              System Status

            </h3>

            <p className="
            text-gray-400
            text-sm
            ">

              Fully secured

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

        {/* ONLINE */}

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

          <div className="
          flex
          items-center
          gap-4
          ">

            <div className="
            w-12
            h-12
            rounded-2xl
            bg-gradient-to-r
            from-emerald-400
            to-green-500
            flex
            items-center
            justify-center
            text-white
            ">

              <Wifi size={22} />

            </div>

            <div>

              <h3 className="
              text-white
              font-bold
              ">

                {onlineUsers} Users

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                Currently online

              </p>

            </div>

          </div>

          <div className="
          text-emerald-400
          text-sm
          font-semibold
          ">

            {currentTime}

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
          shadow-[0_0_40px_rgba(239,68,68,0.35)]
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

            © 2026 SVBS Premium Hostel

          </p>

        </div>

      </div>

    </motion.aside>
  );
}