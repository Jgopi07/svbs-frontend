"use client";

import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  BadgeIndianRupee,
  Banknote,
  Bell,
  CalendarDays,
  Check,
  CheckCircle2,
  ChevronRight,
  Clock3,
  CreditCard,
  Download,
  Eye,
  FileText,
  Filter,
  IndianRupee,
  Landmark,
  Receipt,
  RefreshCcw,
  Search,
  ShieldCheck,
  Sparkles,
  TrendingDown,
  TrendingUp,
  User,
  Users,
  Wallet,
  XCircle,
} from "lucide-react";

import { motion } from "framer-motion";

import { useMemo, useState } from "react";

export default function PaymentsPage() {

  /* ====================================================== */
  /* 🔥 SEARCH */
  /* ====================================================== */

  const [search, setSearch] =
    useState("");

  /* ====================================================== */
  /* 🔥 FILTER */
  /* ====================================================== */

  const [filter, setFilter] =
    useState("All");

  /* ====================================================== */
  /* 🔥 PAYMENT DATA */
  /* ====================================================== */

  const payments = [

    {
      id: "#SVBS001",
      name: "Rahul Sharma",
      room: "A-302",
      amount: "₹8,500",
      status: "Paid",
      method: "UPI",
      date: "12 June 2026",
      phone: "+91 9876543210",
    },

    {
      id: "#SVBS002",
      name: "Aman Verma",
      room: "B-204",
      amount: "₹12,000",
      status: "Pending",
      method: "Pending",
      date: "Due Tomorrow",
      phone: "+91 9876543211",
    },

    {
      id: "#SVBS003",
      name: "Kiran Kumar",
      room: "C-110",
      amount: "₹7,500",
      status: "Paid",
      method: "Card",
      date: "09 June 2026",
      phone: "+91 9876543212",
    },

    {
      id: "#SVBS004",
      name: "Deepak Reddy",
      room: "D-401",
      amount: "₹9,500",
      status: "Overdue",
      method: "Pending",
      date: "5 Days Late",
      phone: "+91 9876543213",
    },

    {
      id: "#SVBS005",
      name: "Rohit Singh",
      room: "A-210",
      amount: "₹8,000",
      status: "Paid",
      method: "Net Banking",
      date: "11 June 2026",
      phone: "+91 9876543214",
    },

    {
      id: "#SVBS006",
      name: "Surya Kumar",
      room: "E-102",
      amount: "₹10,500",
      status: "Pending",
      method: "Pending",
      date: "Due Today",
      phone: "+91 9876543215",
    },
  ];

  /* ====================================================== */
  /* 🔥 FILTERED DATA */
  /* ====================================================== */

  const filteredPayments =
    useMemo(() => {

      return payments.filter(
        (item) => {

          const matchesSearch =

            item.name
              .toLowerCase()
              .includes(
                search.toLowerCase()
              )

            ||

            item.room
              .toLowerCase()
              .includes(
                search.toLowerCase()
              );

          const matchesFilter =

            filter === "All"

              ? true

              : item.status === filter;

          return (
            matchesSearch &&
            matchesFilter
          );
        }
      );

    }, [search, filter]);

  /* ====================================================== */
  /* 🔥 STATS */
  /* ====================================================== */

  const stats = [

    {
      title:
        "Total Revenue",
      value:
        "₹4.8L",
      desc:
        "+18% this month",
      icon:
        IndianRupee,
      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title:
        "Pending Payments",
      value:
        "14",
      desc:
        "Need follow-up",
      icon:
        Clock3,
      glow:
        "from-yellow-400 to-orange-500",
    },

    {
      title:
        "Successful Payments",
      value:
        "234",
      desc:
        "This month",
      icon:
        CheckCircle2,
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      title:
        "Overdue Payments",
      value:
        "03",
      desc:
        "Urgent attention",
      icon:
        AlertTriangle,
      glow:
        "from-red-500 to-orange-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 RECENT */
  /* ====================================================== */

  const recent = [

    {
      title:
        "Rahul Sharma paid hostel rent",
      time:
        "5 mins ago",
    },

    {
      title:
        "Kiran Kumar completed card payment",
      time:
        "20 mins ago",
    },

    {
      title:
        "Overdue reminder sent to Deepak",
      time:
        "1 hour ago",
    },

    {
      title:
        "Revenue report generated",
      time:
        "Today",
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
        bg-yellow-500/20
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
            bg-white/[0.04]
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

              Revenue & Payment Analytics

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

              Payments Management 💰

            </h1>

            {/* TEXT */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-[850px]
            ">

              Track hostel rent,
              payment status,
              overdue collections,
              revenue analytics,
              transaction history,
              and resident payment
              activities in real-time.

            </p>

          </div>

          {/* RIGHT */}

          <div className="
          flex
          flex-wrap
          gap-5
          ">

            {/* EXPORT */}

            <button className="
            px-8
            py-5
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.04]
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-4
            hover:border-yellow-500/30
            transition-all
            duration-300
            ">

              <Download size={22} />

              Export Report

            </button>

            {/* GENERATE */}

            <button className="
            px-8
            py-5
            rounded-[24px]
            bg-gradient-to-r
            from-yellow-400
            via-orange-500
            to-pink-500
            text-white
            font-bold
            flex
            items-center
            justify-center
            gap-4
            shadow-[0_0_40px_rgba(234,179,8,0.4)]
            hover:scale-[1.03]
            transition-all
            duration-300
            ">

              <Receipt size={22} />

              Generate Invoice

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

                    Financial Analytics

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
      xl:grid-cols-[1.2fr_0.8fr]
      gap-8
      ">

        {/* ================================================= */}
        {/* 🔥 LEFT */}
        {/* ================================================= */}

        <div className="
        space-y-8
        ">

          {/* ============================================= */}
          {/* 🔥 PAYMENT TABLE */}
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
            xl:flex-row
            xl:items-center
            xl:justify-between
            gap-6
            mb-10
            ">

              {/* TITLE */}

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Resident Payments

                </h2>

                <p className="
                text-gray-400
                ">

                  Monitor hostel rent
                  collection and payment
                  history.

                </p>

              </div>

              {/* SEARCH + FILTER */}

              <div className="
              flex
              flex-col
              sm:flex-row
              gap-4
              ">

                {/* SEARCH */}

                <div className="
                flex
                items-center
                gap-4
                px-5
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                min-w-[280px]
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
                    placeholder="Search resident..."
                    className="
                    bg-transparent
                    outline-none
                    text-white
                    placeholder:text-gray-500
                    w-full
                    "
                  />

                </div>

                {/* FILTER */}

                <select

                  value={filter}

                  onChange={(e) =>
                    setFilter(
                      e.target.value
                    )
                  }

                  className="
                  px-5
                  py-4
                  rounded-2xl
                  border
                  border-white/10
                  bg-[#10172b]
                  text-white
                  outline-none
                  "

                >

                  <option>
                    All
                  </option>

                  <option>
                    Paid
                  </option>

                  <option>
                    Pending
                  </option>

                  <option>
                    Overdue
                  </option>

                </select>

              </div>

            </div>

            {/* TABLE */}

            <div className="
            space-y-5
            ">

              {filteredPayments.map(
                (item, i) => (

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
                      delay:
                        i * 0.05,
                    }}

                    className="
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    hover:border-yellow-500/20
                    transition-all
                    duration-300
                    "
                  >

                    {/* TOP */}

                    <div className="
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-6
                    ">

                      {/* LEFT */}

                      <div className="
                      flex
                      items-center
                      gap-5
                      ">

                        {/* ICON */}

                        <div className="
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-r
                        from-yellow-400/20
                        to-orange-500/20
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-yellow-300
                        ">

                          <User
                            size={28}
                          />

                        </div>

                        {/* DETAILS */}

                        <div>

                          <div className="
                          flex
                          items-center
                          gap-3
                          mb-2
                          flex-wrap
                          ">

                            <h3 className="
                            text-white
                            text-xl
                            font-bold
                            ">

                              {item.name}

                            </h3>

                            <div className="
                            px-3
                            py-1
                            rounded-full
                            bg-purple-500/10
                            border
                            border-purple-500/20
                            text-purple-300
                            text-xs
                            ">

                              {item.room}

                            </div>

                          </div>

                          <p className="
                          text-gray-400
                          text-sm
                          mb-2
                          ">

                            {item.phone}

                          </p>

                          <p className="
                          text-gray-500
                          text-xs
                          ">

                            {item.id}

                          </p>

                        </div>

                      </div>

                      {/* RIGHT */}

                      <div className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      gap-5
                      ">

                        {/* AMOUNT */}

                        <div className="
                        text-left
                        sm:text-right
                        ">

                          <h2 className="
                          text-3xl
                          font-black
                          text-white
                          mb-2
                          ">

                            {item.amount}

                          </h2>

                          <p className="
                          text-gray-400
                          text-sm
                          ">

                            {item.date}

                          </p>

                        </div>

                        {/* STATUS */}

                        <div className={`
                        px-5
                        py-3
                        rounded-full
                        border
                        text-sm
                        font-semibold
                        text-center

                        ${
                          item.status ===
                          "Paid"

                            ? `
                              bg-emerald-500/10
                              border-emerald-500/20
                              text-emerald-300
                            `

                            : item.status ===
                              "Pending"

                            ? `
                              bg-yellow-500/10
                              border-yellow-500/20
                              text-yellow-300
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

                        {/* ACTION */}

                        <button className="
                        w-14
                        h-14
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-white
                        flex
                        items-center
                        justify-center
                        hover:border-yellow-500/20
                        transition-all
                        duration-300
                        ">

                          <Eye size={22} />

                        </button>

                      </div>

                    </div>

                    {/* BOTTOM */}

                    <div className="
                    mt-6
                    pt-6
                    border-t
                    border-white/10
                    flex
                    flex-wrap
                    gap-4
                    ">

                      {/* METHOD */}

                      <div className="
                      px-4
                      py-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-sm
                      text-gray-300
                      flex
                      items-center
                      gap-3
                      ">

                        <Wallet
                          size={18}
                          className="
                          text-yellow-300
                          "
                        />

                        {item.method}

                      </div>

                      {/* RECEIPT */}

                      <button className="
                      px-4
                      py-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-sm
                      text-gray-300
                      flex
                      items-center
                      gap-3
                      hover:border-purple-500/20
                      transition-all
                      duration-300
                      ">

                        <Receipt
                          size={18}
                          className="
                          text-purple-300
                          "
                        />

                        Download Receipt

                      </button>

                      {/* REMINDER */}

                      {item.status !==
                        "Paid" && (

                        <button className="
                        px-4
                        py-3
                        rounded-2xl
                        bg-gradient-to-r
                        from-red-500
                        to-pink-500
                        text-white
                        text-sm
                        flex
                        items-center
                        gap-3
                        ">

                          <Bell
                            size={18}
                          />

                          Send Reminder

                        </button>

                      )}

                    </div>

                  </motion.div>
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
          {/* 🔥 REVENUE ANALYTICS */}
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

                  Revenue Analytics

                </h2>

                <p className="
                text-gray-400
                ">

                  Hostel financial growth.

                </p>

              </div>

              <TrendingUp
                size={30}
                className="
                text-emerald-300
                "
              />

            </div>

            {/* CHART STYLE */}

            <div className="
            space-y-6
            ">

              {[
                {
                  label:
                    "Room Rent",
                  value:
                    "82%",
                  width:
                    "w-[82%]",
                  color:
                    "from-purple-500 to-pink-500",
                },

                {
                  label:
                    "Mess Collection",
                  value:
                    "64%",
                  width:
                    "w-[64%]",
                  color:
                    "from-yellow-400 to-orange-500",
                },

                {
                  label:
                    "Maintenance",
                  value:
                    "48%",
                  width:
                    "w-[48%]",
                  color:
                    "from-cyan-500 to-blue-500",
                },
              ].map(
                (item, i) => (

                  <div
                    key={i}
                  >

                    {/* LABEL */}

                    <div className="
                    flex
                    items-center
                    justify-between
                    mb-3
                    ">

                      <p className="
                      text-white
                      font-medium
                      ">

                        {item.label}

                      </p>

                      <p className="
                      text-gray-400
                      text-sm
                      ">

                        {item.value}

                      </p>

                    </div>

                    {/* BAR */}

                    <div className="
                    h-4
                    rounded-full
                    bg-white/[0.04]
                    overflow-hidden
                    ">

                      <div className={`
                      h-full
                      rounded-full
                      bg-gradient-to-r
                      ${item.color}
                      ${item.width}
                      `}></div>

                    </div>

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

                  Latest payment updates.

                </p>

              </div>

              <Activity
                size={30}
                className="
                text-yellow-300
                "
              />

            </div>

            {/* LIST */}

            <div className="
            space-y-6
            ">

              {recent.map(
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
                    from-yellow-400/20
                    to-orange-500/20
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-yellow-300
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

          {/* ============================================= */}
          {/* 🔥 PAYMENT METHODS */}
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

                  Payment Methods

                </h2>

                <p className="
                text-gray-400
                ">

                  Supported hostel payments.

                </p>

              </div>

              <Landmark
                size={30}
                className="
                text-purple-300
                "
              />

            </div>

            {/* METHODS */}

            <div className="
            space-y-5
            ">

              {[
                {
                  title:
                    "UPI Payments",
                  icon:
                    Wallet,
                  status:
                    "Most Used",
                },

                {
                  title:
                    "Credit / Debit Card",
                  icon:
                    CreditCard,
                  status:
                    "Available",
                },

                {
                  title:
                    "Net Banking",
                  icon:
                    Landmark,
                  status:
                    "Secure",
                },

                {
                  title:
                    "Cash Payments",
                  icon:
                    Banknote,
                  status:
                    "Offline",
                },
              ].map(
                (item, i) => {

                  const Icon =
                    item.icon;

                  return (

                    <div

                      key={i}

                      className="
                      rounded-[26px]
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

        </div>

      </div>

    </div>
  );
}