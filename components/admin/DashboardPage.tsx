"use client";

import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  BedDouble,
  Bell,
  BookOpenCheck,
  Building2,
  CalendarDays,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  DoorOpen,
  Download,
  Eye,
  FileBarChart2,
  Flame,
  IndianRupee,
  LayoutDashboard,
  MessageSquareWarning,
  MoonStar,
  Plus,
  Search,
  Settings,
  ShieldAlert,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  UserCheck,
  UserPlus,
  Users,
  UtensilsCrossed,
  Wifi,
  Wrench,
  ClipboardList,
  Siren,
  TimerReset,
  Layers3,
  Star,
  CircleAlert,
  BarChart3,
  Home,
  Phone,
  AirVent,
  Droplets,
  Check,
  XCircle,
} from "lucide-react";

import { motion } from "framer-motion";

export default function DashboardPage() {

  /* ====================================================== */
  /* 🔥 STATS */
  /* ====================================================== */

  const stats = [

    {
      title: "Total Residents",
      value: "248",
      desc: "+12 new this month",
      icon: Users,
      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Occupancy Rate",
      value: "92%",
      desc: "Hostel almost full",
      icon: TrendingUp,
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      title: "Monthly Revenue",
      value: "₹4.8L",
      desc: "+18% increase",
      icon: IndianRupee,
      glow:
        "from-yellow-400 to-orange-400",
    },

    {
      title: "Pending Payments",
      value: "14",
      desc: "Need follow-up",
      icon: Clock3,
      glow:
        "from-pink-500 to-rose-500",
    },

    {
      title: "Complaints",
      value: "08",
      desc: "2 critical pending",
      icon: AlertTriangle,
      glow:
        "from-red-500 to-orange-500",
    },

    {
      title: "Available Rooms",
      value: "16",
      desc: "Ready for booking",
      icon: BedDouble,
      glow:
        "from-cyan-500 to-blue-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 QUICK ACTIONS */
  /* ====================================================== */

  const actions = [

    {
      title: "Add Resident",
      desc:
        "Register new hostel students instantly.",
      icon: UserPlus,
      glow:
        "from-purple-500 via-pink-500 to-yellow-400",
    },

    {
      title: "Manage Rooms",
      desc:
        "Track room occupancy and availability.",
      icon: DoorOpen,
      glow:
        "from-cyan-500 via-blue-500 to-indigo-500",
    },

    {
      title: "Resolve Complaints",
      desc:
        "Handle hostel complaints quickly.",
      icon: ShieldCheck,
      glow:
        "from-emerald-500 via-green-500 to-lime-400",
    },

    {
      title: "Generate Reports",
      desc:
        "Download hostel analytics reports.",
      icon: FileBarChart2,
      glow:
        "from-orange-500 via-pink-500 to-rose-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 ROOMS */
  /* ====================================================== */

  const rooms = [

    {
      room: "A-101",
      type: "2 Sharing",
      residents: 2,
      status: "Occupied",
    },

    {
      room: "A-102",
      type: "3 Sharing",
      residents: 1,
      status: "Available",
    },

    {
      room: "B-201",
      type: "Premium",
      residents: 1,
      status: "Occupied",
    },

    {
      room: "C-304",
      type: "2 Sharing",
      residents: 0,
      status: "Maintenance",
    },

    {
      room: "D-402",
      type: "Luxury",
      residents: 2,
      status: "Occupied",
    },
  ];

  /* ====================================================== */
  /* 🔥 PAYMENTS */
  /* ====================================================== */

  const payments = [

    {
      name: "Rahul Sharma",
      room: "A-302",
      amount: "₹8,500",
      status: "Paid",
    },

    {
      name: "Kiran Kumar",
      room: "B-204",
      amount: "₹12,000",
      status: "Pending",
    },

    {
      name: "Aman Verma",
      room: "C-102",
      amount: "₹7,500",
      status: "Paid",
    },

    {
      name: "Deepak Reddy",
      room: "D-401",
      amount: "₹10,000",
      status: "Pending",
    },
  ];

  /* ====================================================== */
  /* 🔥 COMPLAINTS */
  /* ====================================================== */

  const complaints = [

    {
      title:
        "WiFi issue on 3rd floor",
      priority: "High",
      room: "A-302",
    },

    {
      title:
        "AC not cooling properly",
      priority: "Medium",
      room: "B-204",
    },

    {
      title:
        "Mess food quality issue",
      priority: "Low",
      room: "C-108",
    },

    {
      title:
        "Water leakage in bathroom",
      priority: "High",
      room: "D-401",
    },
  ];

  /* ====================================================== */
  /* 🔥 ACTIVITIES */
  /* ====================================================== */

  const activities = [

    {
      title:
        "New booking received for Room A-302",
      time: "5 mins ago",
    },

    {
      title:
        "Payment completed by Rahul Sharma",
      time: "15 mins ago",
    },

    {
      title:
        "Complaint resolved by maintenance team",
      time: "1 hour ago",
    },

    {
      title:
        "Admin updated weekly food menu",
      time: "Today",
    },

    {
      title:
        "New resident added successfully",
      time: "Today",
    },
  ];

  /* ====================================================== */
  /* 🔥 FACILITIES */
  /* ====================================================== */

  const facilities = [

    {
      title: "High Speed WiFi",
      icon: Wifi,
      status: "Active",
    },

    {
      title: "24/7 Security",
      icon: ShieldCheck,
      status: "Secured",
    },

    {
      title: "Laundry Service",
      icon: Wrench,
      status: "Available",
    },

    {
      title: "Mess & Dining",
      icon: UtensilsCrossed,
      status: "Running",
    },
  ];

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <div className="
    space-y-10
    ">

      {/* ================================================= */}
      {/* 🔥 HERO */}
      {/* ================================================= */}

      <div className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.05]
      p-8
      lg:p-12
      ">

        {/* GLOW */}

        <div className="
        absolute
        top-0
        right-0
        w-[450px]
        h-[450px]
        bg-purple-500/20
        blur-[180px]
        rounded-full
        "></div>

        {/* CONTENT */}

        <div className="
        relative
        z-10
        flex
        flex-col
        xl:flex-row
        xl:items-center
        xl:justify-between
        gap-10
        ">

          {/* LEFT */}

          <div>

            {/* BADGE */}

            <div className="
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            text-xs
            uppercase
            tracking-[0.25em]
            text-gray-300
            mb-6
            ">

              <Sparkles
                size={14}
                className="
                text-yellow-300
                "
              />

              Hostel Management System

            </div>

            {/* TITLE */}

            <h1 className="
            text-4xl
            sm:text-5xl
            xl:text-6xl
            font-black
            text-white
            leading-none
            mb-5
            ">

              Admin Dashboard ⚡

            </h1>

            {/* TEXT */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-[850px]
            ">

              Monitor residents,
              complaints, revenue,
              occupancy, payments,
              bookings, and complete
              hostel analytics in one
              powerful dashboard.

            </p>

          </div>

          {/* RIGHT */}

          <div className="
          flex
          flex-wrap
          gap-5
          ">

            <button className="
            px-8
            py-5
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.05]
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-4
            hover:border-purple-500/30
            transition-all
            duration-300
            ">

              <Download size={22} />

              Export Reports

            </button>

            <button className="
            px-8
            py-5
            rounded-[24px]
            bg-gradient-to-r
            from-purple-500
            via-pink-500
            to-yellow-400
            text-white
            font-bold
            flex
            items-center
            justify-center
            gap-4
            shadow-[0_0_40px_rgba(168,85,247,0.4)]
            hover:scale-[1.03]
            transition-all
            duration-300
            ">

              <Plus size={22} />

              Add Resident

            </button>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 STATS */}
      {/* ================================================= */}

      <div className="
      grid
      sm:grid-cols-2
      xl:grid-cols-3
      2xl:grid-cols-6
      gap-7
      ">

        {stats.map((item, i) => {

          const Icon =
            item.icon;

          return (

            <motion.div

              key={i}

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: i * 0.06,
              }}

              className="
              relative
              overflow-hidden
              rounded-[35px]
              border
              border-white/10
              bg-white/[0.05]
              p-7
              hover:-translate-y-2
              transition-all
              duration-300
              "
            >

              {/* GLOW */}

              <div className={`
              absolute
              top-0
              right-0
              w-40
              h-40
              rounded-full
              blur-[100px]
              opacity-30
              bg-gradient-to-r
              ${item.glow}
              `}></div>

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
                mb-10
                ">

                  <div>

                    <p className="
                    text-gray-400
                    mb-4
                    ">

                      {item.title}

                    </p>

                    <h2 className="
                    text-5xl
                    font-black
                    text-white
                    mb-3
                    ">

                      {item.value}

                    </h2>

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      {item.desc}

                    </p>

                  </div>

                  {/* ICON */}

                  <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-white/[0.05]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  ">

                    <Icon size={28} />

                  </div>

                </div>

                {/* FOOT */}

                <div className="
                flex
                items-center
                gap-3
                ">

                  <div className="
                  w-2.5
                  h-2.5
                  rounded-full
                  bg-emerald-400
                  animate-pulse
                  "></div>

                  <span className="
                  text-gray-300
                  text-sm
                  ">

                    Live Analytics

                  </span>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* ================================================= */}
      {/* 🔥 QUICK ACTIONS */}
      {/* ================================================= */}

      <div className="
      grid
      md:grid-cols-2
      xl:grid-cols-4
      gap-7
      ">

        {actions.map((item, i) => {

          const Icon =
            item.icon;

          return (

            <motion.button

              key={i}

              initial={{
                opacity: 0,
                y: 30,
              }}

              animate={{
                opacity: 1,
                y: 0,
              }}

              transition={{
                delay: i * 0.08,
              }}

              className="
              relative
              overflow-hidden
              rounded-[35px]
              p-8
              text-left
              group
              hover:scale-[1.02]
              transition-all
              duration-300
              "
            >

              {/* BG */}

              <div className={`
              absolute
              inset-0
              bg-gradient-to-r
              ${item.glow}
              `}></div>

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
                mb-10
                ">

                  <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-white/20
                  flex
                  items-center
                  justify-center
                  text-white
                  ">

                    <Icon size={28} />

                  </div>

                  <ArrowUpRight
                    size={24}
                    className="
                    text-white
                    group-hover:translate-x-1
                    group-hover:-translate-y-1
                    transition
                    "
                  />

                </div>

                {/* TEXT */}

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-4
                ">

                  {item.title}

                </h2>

                <p className="
                text-white/80
                leading-relaxed
                ">

                  {item.desc}

                </p>

              </div>

            </motion.button>
          );
        })}

      </div>

      {/* ================================================= */}
      {/* 🔥 MAIN GRID */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-[1.15fr_0.85fr]
      gap-8
      ">

        {/* ================================================= */}
        {/* 🔥 LEFT */}
        {/* ================================================= */}

        <div className="
        space-y-8
        ">

          {/* ============================================= */}
          {/* 🔥 ROOM OVERVIEW */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            {/* TOP */}

            <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
            mb-10
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Room Overview

                </h2>

                <p className="
                text-gray-400
                ">

                  Real-time hostel room
                  occupancy and availability.

                </p>

              </div>

              {/* SEARCH */}

              <div className="
              flex
              items-center
              gap-4
              px-6
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              min-w-[320px]
              ">

                <Search
                  size={20}
                  className="
                  text-gray-500
                  "
                />

                <input
                  placeholder="Search room..."
                  className="
                  bg-transparent
                  outline-none
                  w-full
                  text-white
                  placeholder:text-gray-500
                  "
                />

              </div>

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {rooms.map((item, i) => (

                <div

                  key={i}

                  className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-6
                  hover:border-purple-500/20
                  transition-all
                  duration-300
                  "
                >

                  {/* LEFT */}

                  <div className="
                  flex
                  items-center
                  gap-5
                  ">

                    <div className="
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500/20
                    to-pink-500/20
                    flex
                    items-center
                    justify-center
                    text-white
                    ">

                      <BedDouble
                        size={28}
                      />

                    </div>

                    <div>

                      <h3 className="
                      text-white
                      font-black
                      text-2xl
                      mb-2
                      ">

                        Room {item.room}

                      </h3>

                      <p className="
                      text-gray-400
                      ">

                        {item.type}

                      </p>

                    </div>

                  </div>

                  {/* CENTER */}

                  <div>

                    <p className="
                    text-gray-400
                    text-sm
                    mb-2
                    ">

                      Residents

                    </p>

                    <h3 className="
                    text-white
                    text-2xl
                    font-black
                    ">

                      {item.residents}

                    </h3>

                  </div>

                  {/* STATUS */}

                  <div className={`
                  px-5
                  py-3
                  rounded-full
                  text-sm
                  font-semibold
                  border

                  ${
                    item.status ===
                    "Occupied"

                      ? `
                        bg-red-500/10
                        border-red-500/20
                        text-red-300
                      `

                      : item.status ===
                        "Available"

                      ? `
                        bg-emerald-500/10
                        border-emerald-500/20
                        text-emerald-300
                      `

                      : `
                        bg-yellow-500/10
                        border-yellow-500/20
                        text-yellow-300
                      `
                  }
                  `}>

                    {item.status}

                  </div>

                </div>
              ))}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 PAYMENT STATUS */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            {/* TOP */}

            <div className="
            flex
            items-center
            justify-between
            mb-10
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Payment Overview

                </h2>

                <p className="
                text-gray-400
                ">

                  Monthly rent collection status.

                </p>

              </div>

              <div className="
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-yellow-400
              to-orange-500
              flex
              items-center
              justify-center
              text-white
              ">

                <CreditCard
                  size={28}
                />

              </div>

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {payments.map((item, i) => (

                <div

                  key={i}

                  className="
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-6
                  flex
                  flex-col
                  lg:flex-row
                  lg:items-center
                  lg:justify-between
                  gap-5
                  "
                >

                  {/* LEFT */}

                  <div className="
                  flex
                  items-center
                  gap-5
                  ">

                    <div className="
                    w-14
                    h-14
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500/20
                    to-pink-500/20
                    flex
                    items-center
                    justify-center
                    text-white
                    ">

                      <Users size={24} />

                    </div>

                    <div>

                      <h3 className="
                      text-white
                      font-bold
                      text-lg
                      mb-2
                      ">

                        {item.name}

                      </h3>

                      <p className="
                      text-gray-400
                      text-sm
                      ">

                        {item.room}

                      </p>

                    </div>

                  </div>

                  {/* RIGHT */}

                  <div className="
                  flex
                  items-center
                  gap-5
                  ">

                    <div className="
                    text-right
                    ">

                      <h3 className="
                      text-white
                      text-2xl
                      font-black
                      mb-2
                      ">

                        {item.amount}

                      </h3>

                      <p className="
                      text-gray-400
                      text-sm
                      ">

                        Hostel Rent

                      </p>

                    </div>

                    <div className={`
                    px-5
                    py-3
                    rounded-full
                    border
                    text-sm
                    font-semibold

                    ${
                      item.status ===
                      "Paid"

                        ? `
                          bg-emerald-500/10
                          border-emerald-500/20
                          text-emerald-300
                        `

                        : `
                          bg-red-500/10
                          border-red-500/20
                          text-red-300
                        `
                    }
                    `}>

                      {item.status}

                    </div>

                  </div>

                </div>
              ))}

            </div>

          </div>

        </div>

        {/* ================================================= */}
        {/* 🔥 RIGHT */}
        {/* ================================================= */}

        <div className="
        space-y-8
        ">

          {/* ============================================= */}
          {/* 🔥 FACILITIES */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            <div className="
            flex
            items-center
            justify-between
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Hostel Facilities

                </h2>

                <p className="
                text-gray-400
                ">

                  Current facility status.

                </p>

              </div>

              <ShieldCheck
                size={30}
                className="
                text-emerald-300
                "
              />

            </div>

            <div className="
            space-y-5
            ">

              {facilities.map(
                (item, i) => {

                  const Icon =
                    item.icon;

                  return (

                    <div

                      key={i}

                      className="
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-5
                      flex
                      items-center
                      justify-between
                      "
                    >

                      {/* LEFT */}

                      <div className="
                      flex
                      items-center
                      gap-5
                      ">

                        <div className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-gradient-to-r
                        from-purple-500/20
                        to-pink-500/20
                        flex
                        items-center
                        justify-center
                        text-white
                        ">

                          <Icon
                            size={24}
                          />

                        </div>

                        <div>

                          <h3 className="
                          text-white
                          font-bold
                          text-lg
                          mb-2
                          ">

                            {item.title}

                          </h3>

                          <p className="
                          text-gray-400
                          text-sm
                          ">

                            {item.status}

                          </p>

                        </div>

                      </div>

                      {/* RIGHT */}

                      <CheckCircle2
                        size={22}
                        className="
                        text-emerald-400
                        "
                      />

                    </div>
                  );
                }
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 COMPLAINTS */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            {/* TOP */}

            <div className="
            flex
            items-center
            justify-between
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Complaints

                </h2>

                <p className="
                text-gray-400
                ">

                  Critical hostel issues.

                </p>

              </div>

              <Siren
                size={30}
                className="
                text-red-300
                "
              />

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {complaints.map(
                (item, i) => (

                  <div

                    key={i}

                    className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    "
                  >

                    {/* TOP */}

                    <div className="
                    flex
                    items-start
                    justify-between
                    gap-5
                    mb-5
                    ">

                      <div>

                        <h3 className="
                        text-white
                        font-bold
                        text-lg
                        leading-relaxed
                        mb-3
                        ">

                          {item.title}

                        </h3>

                        <p className="
                        text-gray-400
                        text-sm
                        ">

                          {item.room}

                        </p>

                      </div>

                      <div className={`
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-semibold

                      ${
                        item.priority ===
                        "High"

                          ? `
                            bg-red-500/10
                            text-red-300
                          `

                          : item.priority ===
                            "Medium"

                          ? `
                            bg-yellow-500/10
                            text-yellow-300
                          `

                          : `
                            bg-emerald-500/10
                            text-emerald-300
                          `
                      }
                      `}>

                        {item.priority}

                      </div>

                    </div>

                    {/* BUTTON */}

                    <button className="
                    text-purple-300
                    hover:text-white
                    transition
                    text-sm
                    font-semibold
                    ">

                      View Details →

                    </button>

                  </div>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 RECENT ACTIVITY */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            {/* TOP */}

            <div className="
            flex
            items-center
            justify-between
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Recent Activity

                </h2>

                <p className="
                text-gray-400
                ">

                  Latest hostel updates.

                </p>

              </div>

              <Activity
                size={30}
                className="
                text-purple-300
                "
              />

            </div>

            {/* LIST */}

            <div className="
            space-y-6
            ">

              {activities.map(
                (item, i) => (

                  <div

                    key={i}

                    className="
                    flex
                    items-start
                    gap-5
                    "
                  >

                    {/* ICON */}

                    <div className="
                    w-14
                    h-14
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

                      <CheckCircle2
                        size={22}
                      />

                    </div>

                    {/* TEXT */}

                    <div className="
                    flex-1
                    pb-6
                    border-b
                    border-white/10
                    ">

                      <h3 className="
                      text-white
                      font-semibold
                      text-lg
                      leading-relaxed
                      mb-3
                      ">

                        {item.title}

                      </h3>

                      <p className="
                      text-gray-400
                      text-sm
                      ">

                        {item.time}

                      </p>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

        </div>

      </div>

    </div>
  );
}