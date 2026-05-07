"use client";

import {
  BarChart3,
  TrendingUp,
  TrendingDown,
  IndianRupee,
  Users,
  BedDouble,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  Download,
  CalendarDays,
  Wallet,
  CreditCard,
  Building2,
  PieChart,
  Activity,
  ShieldCheck,
  Bell,
  Search,
  Filter,
  Sparkles,
  ArrowUpRight,
  UserCheck,
  UserX,
  Home,
  FileBarChart2,
  ChevronRight,
  Wifi,
  UtensilsCrossed,
  Siren,
  BadgeCheck,
  ClipboardList,
  Eye,
  Layers3,
  CircleDollarSign,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function ReportsPage() {

  /* ====================================================== */
  /* 🔥 STATES */
  /* ====================================================== */

  const [selectedPeriod, setSelectedPeriod] =
    useState("Monthly");

  /* ====================================================== */
  /* 🔥 FILTERS */
  /* ====================================================== */

  const periods = [

    "Weekly",

    "Monthly",

    "Yearly",
  ];

  /* ====================================================== */
  /* 🔥 MAIN STATS */
  /* ====================================================== */

  const stats = [

    {
      title: "Total Revenue",
      value: "₹24.8L",
      change: "+18.4%",
      icon: IndianRupee,
      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Occupancy Rate",
      value: "92%",
      change: "+4.2%",
      icon: BedDouble,
      glow:
        "from-cyan-500 to-blue-500",
    },

    {
      title: "Residents",
      value: "248",
      change: "+12",
      icon: Users,
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      title: "Pending Payments",
      value: "14",
      change: "-2",
      icon: Clock3,
      glow:
        "from-yellow-400 to-orange-400",
    },
  ];

  /* ====================================================== */
  /* 🔥 PAYMENT REPORTS */
  /* ====================================================== */

  const paymentReports = [

    {
      month: "January",
      revenue: "₹3.8L",
      paid: "92%",
      pending: "8%",
    },

    {
      month: "February",
      revenue: "₹4.1L",
      paid: "95%",
      pending: "5%",
    },

    {
      month: "March",
      revenue: "₹4.4L",
      paid: "97%",
      pending: "3%",
    },

    {
      month: "April",
      revenue: "₹5.2L",
      paid: "91%",
      pending: "9%",
    },

    {
      month: "May",
      revenue: "₹5.8L",
      paid: "96%",
      pending: "4%",
    },
  ];

  /* ====================================================== */
  /* 🔥 TOP ROOMS */
  /* ====================================================== */

  const topRooms = [

    {
      room: "A-302",
      type: "Premium AC",
      occupancy: "100%",
      revenue: "₹18,000",
    },

    {
      room: "B-204",
      type: "2 Sharing",
      occupancy: "100%",
      revenue: "₹12,500",
    },

    {
      room: "C-401",
      type: "Single Executive",
      occupancy: "100%",
      revenue: "₹22,000",
    },

    {
      room: "A-108",
      type: "3 Sharing",
      occupancy: "66%",
      revenue: "₹9,000",
    },
  ];

  /* ====================================================== */
  /* 🔥 COMPLAINT ANALYTICS */
  /* ====================================================== */

  const complaints = [

    {
      category: "WiFi Issues",
      count: 12,
      status: "Resolved",
    },

    {
      category: "Food Quality",
      count: 8,
      status: "Pending",
    },

    {
      category: "Room Cleaning",
      count: 15,
      status: "Resolved",
    },

    {
      category: "AC Maintenance",
      count: 5,
      status: "In Progress",
    },
  ];

  /* ====================================================== */
  /* 🔥 RECENT REPORTS */
  /* ====================================================== */

  const reports = [

    {
      title:
        "Monthly Revenue Analysis",
      created: "Today",
      type: "Finance",
    },

    {
      title:
        "Occupancy Performance Report",
      created: "Yesterday",
      type: "Rooms",
    },

    {
      title:
        "Complaint Resolution Summary",
      created: "2 days ago",
      type: "Complaints",
    },

    {
      title:
        "Resident Activity Report",
      created: "3 days ago",
      type: "Residents",
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
        blur-[160px]
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

              Analytics & Reports

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

              Hostel Reports 📊

            </h1>

            {/* TEXT */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-[850px]
            ">

              Analyze hostel performance,
              revenue growth, occupancy,
              complaints, payments, and
              resident insights with modern
              analytics dashboards.

            </p>

          </div>

          {/* RIGHT */}

          <div className="
          flex
          flex-wrap
          gap-5
          ">

            {/* PERIOD */}

            <div className="
            flex
            flex-wrap
            gap-4
            ">

              {periods.map((item, i) => (

                <button

                  key={i}

                  onClick={() =>
                    setSelectedPeriod(
                      item
                    )
                  }

                  className={`
                  px-6
                  py-4
                  rounded-2xl
                  border
                  font-semibold
                  transition-all
                  duration-300

                  ${
                    selectedPeriod ===
                    item

                      ? `
                        bg-gradient-to-r
                        from-purple-500
                        to-pink-500
                        border-purple-500/20
                        text-white
                      `

                      : `
                        border-white/10
                        bg-white/[0.05]
                        text-gray-300
                        hover:border-purple-500/30
                        hover:text-white
                      `
                  }
                  `}
                >

                  {item}

                </button>
              ))}

            </div>

            {/* EXPORT */}

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

              <Download size={22} />

              Export Report

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
      xl:grid-cols-4
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
                delay: i * 0.08,
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

                    <div className="
                    inline-flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-emerald-500/10
                    border
                    border-emerald-500/20
                    text-emerald-300
                    text-sm
                    font-semibold
                    ">

                      <TrendingUp
                        size={16}
                      />

                      {item.change}

                    </div>

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

                    Live Performance Data

                  </span>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* ================================================= */}
      {/* 🔥 MAIN GRID */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-[1.25fr_0.75fr]
      gap-8
      ">

        {/* ================================================= */}
        {/* 🔥 LEFT */}
        {/* ================================================= */}

        <div className="
        space-y-8
        ">

          {/* ============================================= */}
          {/* 🔥 REVENUE REPORT */}
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

                  Revenue Analytics

                </h2>

                <p className="
                text-gray-400
                ">

                  Monthly hostel revenue &
                  payment performance.

                </p>

              </div>

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
              shadow-[0_0_35px_rgba(168,85,247,0.35)]
              ">

                <CircleDollarSign
                  size={30}
                />

              </div>

            </div>

            {/* TABLE */}

            <div className="
            space-y-5
            ">

              {paymentReports.map(
                (item, i) => (

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
                      border
                      border-white/10
                      flex
                      items-center
                      justify-center
                      text-purple-300
                      ">

                        <Wallet
                          size={28}
                        />

                      </div>

                      <div>

                        <h3 className="
                        text-white
                        font-bold
                        text-xl
                        mb-2
                        ">

                          {item.month}

                        </h3>

                        <p className="
                        text-gray-400
                        ">

                          Revenue Collection

                        </p>

                      </div>

                    </div>

                    {/* CENTER */}

                    <div className="
                    flex
                    flex-wrap
                    gap-5
                    ">

                      {/* REVENUE */}

                      <div className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      px-6
                      py-4
                      ">

                        <p className="
                        text-gray-400
                        text-sm
                        mb-2
                        ">

                          Revenue

                        </p>

                        <h4 className="
                        text-white
                        text-xl
                        font-bold
                        ">

                          {item.revenue}

                        </h4>

                      </div>

                      {/* PAID */}

                      <div className="
                      rounded-2xl
                      border
                      border-emerald-500/20
                      bg-emerald-500/10
                      px-6
                      py-4
                      ">

                        <p className="
                        text-emerald-300
                        text-sm
                        mb-2
                        ">

                          Paid

                        </p>

                        <h4 className="
                        text-white
                        text-xl
                        font-bold
                        ">

                          {item.paid}

                        </h4>

                      </div>

                      {/* PENDING */}

                      <div className="
                      rounded-2xl
                      border
                      border-red-500/20
                      bg-red-500/10
                      px-6
                      py-4
                      ">

                        <p className="
                        text-red-300
                        text-sm
                        mb-2
                        ">

                          Pending

                        </p>

                        <h4 className="
                        text-white
                        text-xl
                        font-bold
                        ">

                          {item.pending}

                        </h4>

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 ROOM PERFORMANCE */}
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

                  Top Performing Rooms

                </h2>

                <p className="
                text-gray-400
                ">

                  Highest occupancy and
                  revenue generating rooms.

                </p>

              </div>

              <div className="
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              flex
              items-center
              justify-center
              text-white
              ">

                <Building2
                  size={28}
                />

              </div>

            </div>

            {/* ROOMS */}

            <div className="
            space-y-5
            ">

              {topRooms.map(
                (item, i) => (

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
                      border
                      border-white/10
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
                        text-2xl
                        font-bold
                        mb-2
                        ">

                          {item.room}

                        </h3>

                        <p className="
                        text-gray-400
                        ">

                          {item.type}

                        </p>

                      </div>

                    </div>

                    {/* STATS */}

                    <div className="
                    flex
                    flex-wrap
                    gap-5
                    ">

                      <div className="
                      px-6
                      py-4
                      rounded-2xl
                      border
                      border-emerald-500/20
                      bg-emerald-500/10
                      ">

                        <p className="
                        text-emerald-300
                        text-sm
                        mb-2
                        ">

                          Occupancy

                        </p>

                        <h4 className="
                        text-white
                        font-bold
                        text-xl
                        ">

                          {item.occupancy}

                        </h4>

                      </div>

                      <div className="
                      px-6
                      py-4
                      rounded-2xl
                      border
                      border-purple-500/20
                      bg-purple-500/10
                      ">

                        <p className="
                        text-purple-300
                        text-sm
                        mb-2
                        ">

                          Revenue

                        </p>

                        <h4 className="
                        text-white
                        font-bold
                        text-xl
                        ">

                          {item.revenue}

                        </h4>

                      </div>

                    </div>

                  </div>
                )
              )}

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
          {/* 🔥 COMPLAINT ANALYTICS */}
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

                  Complaint Analytics

                </h2>

                <p className="
                text-gray-400
                ">

                  Hostel complaint categories.

                </p>

              </div>

              <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-red-500
              to-pink-500
              flex
              items-center
              justify-center
              text-white
              ">

                <AlertTriangle
                  size={24}
                />

              </div>

            </div>

            {/* ITEMS */}

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
                    p-5
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
                        mb-2
                        ">

                          {item.category}

                        </h3>

                        <p className="
                        text-gray-400
                        ">

                          {item.count}
                          {" "}
                          complaints received

                        </p>

                      </div>

                      <div className={`
                      px-4
                      py-2
                      rounded-full
                      text-sm
                      font-semibold

                      ${
                        item.status ===
                        "Resolved"

                          ? `
                            bg-emerald-500/10
                            text-emerald-300
                          `

                          : item.status ===
                            "Pending"

                          ? `
                            bg-yellow-500/10
                            text-yellow-300
                          `

                          : `
                            bg-cyan-500/10
                            text-cyan-300
                          `
                      }
                      `}>

                        {item.status}

                      </div>

                    </div>

                    {/* BAR */}

                    <div className="
                    w-full
                    h-3
                    rounded-full
                    bg-white/[0.05]
                    overflow-hidden
                    ">

                      <div className="
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      from-purple-500
                      via-pink-500
                      to-yellow-400
                      "
                      style={{
                        width: `${item.count * 5}%`,
                      }}
                      ></div>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 RECENT REPORTS */}
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

                  Recent Reports

                </h2>

                <p className="
                text-gray-400
                ">

                  Recently generated reports.

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

                <FileBarChart2
                  size={24}
                />

              </div>

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {reports.map(
                (item, i) => (

                  <div

                    key={i}

                    className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                    hover:border-purple-500/20
                    transition-all
                    duration-300
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

                        <div className="
                        flex
                        flex-wrap
                        gap-3
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
                          ">

                            {item.type}

                          </div>

                          <div className="
                          px-4
                          py-2
                          rounded-full
                          bg-white/[0.04]
                          border
                          border-white/10
                          text-gray-300
                          text-xs
                          font-semibold
                          ">

                            {item.created}

                          </div>

                        </div>

                      </div>

                      <button className="
                      w-12
                      h-12
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.05]
                      flex
                      items-center
                      justify-center
                      text-gray-300
                      hover:text-white
                      hover:border-purple-500/30
                      transition-all
                      duration-300
                      ">

                        <Eye size={18} />

                      </button>

                    </div>

                    {/* ACTIONS */}

                    <div className="
                    flex
                    flex-wrap
                    gap-4
                    ">

                      <button className="
                      flex-1
                      py-4
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-gray-300
                      font-semibold
                      hover:text-white
                      hover:border-purple-500/30
                      transition-all
                      duration-300
                      ">

                        View

                      </button>

                      <button className="
                      flex-1
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500
                      text-white
                      font-semibold
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                      shadow-[0_0_25px_rgba(168,85,247,0.35)]
                      ">

                        Download

                      </button>

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