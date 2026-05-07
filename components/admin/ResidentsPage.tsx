"use client";

import {
  Users,
  Search,
  Filter,
  UserPlus,
  Download,
  Eye,
  Pencil,
  Trash2,
  Phone,
  Mail,
  MapPin,
  BedDouble,
  IndianRupee,
  CalendarDays,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  Wifi,
  Building2,
  GraduationCap,
  Sparkles,
  Star,
  Crown,
  Bell,
  UserCheck,
  CreditCard,
  ChevronRight,
  Activity,
  BadgeCheck,
  Home,
  ArrowUpRight,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function ResidentsPage() {

  /* ====================================================== */
  /* 🔥 STATES */
  /* ====================================================== */

  const [search, setSearch] =
    useState("");

  const [selectedStatus, setSelectedStatus] =
    useState("All");

  /* ====================================================== */
  /* 🔥 FILTERS */
  /* ====================================================== */

  const filters = [

    "All",

    "Active",

    "Pending",

    "Defaulter",
  ];

  /* ====================================================== */
  /* 🔥 RESIDENTS */
  /* ====================================================== */

  const residents = [

    {
      name: "Uday Varma",
      room: "A-302",
      email: "uday@svbs.com",
      phone: "+91 9876543210",
      college: "SRM University",
      rent: "₹8,500",
      status: "Active",
      payment: "Paid",
      joined: "12 Jan 2026",
      floor: "3rd Floor",
    },

    {
      name: "Rahul Sharma",
      room: "B-204",
      email: "rahul@svbs.com",
      phone: "+91 9123456789",
      college: "VIT Chennai",
      rent: "₹12,500",
      status: "Pending",
      payment: "Pending",
      joined: "03 Feb 2026",
      floor: "2nd Floor",
    },

    {
      name: "Aman Verma",
      room: "C-105",
      email: "aman@svbs.com",
      phone: "+91 9345678901",
      college: "Sathyabama",
      rent: "₹9,500",
      status: "Active",
      payment: "Paid",
      joined: "28 Dec 2025",
      floor: "1st Floor",
    },

    {
      name: "Kiran Kumar",
      room: "D-401",
      email: "kiran@svbs.com",
      phone: "+91 9988776655",
      college: "Saveetha",
      rent: "₹15,000",
      status: "Defaulter",
      payment: "Overdue",
      joined: "17 Oct 2025",
      floor: "4th Floor",
    },

    {
      name: "Deepak Reddy",
      room: "A-108",
      email: "deepak@svbs.com",
      phone: "+91 9090909090",
      college: "Anna University",
      rent: "₹7,500",
      status: "Active",
      payment: "Paid",
      joined: "04 March 2026",
      floor: "Ground Floor",
    },

    {
      name: "Sai Charan",
      room: "B-309",
      email: "sai@svbs.com",
      phone: "+91 9998887771",
      college: "Hindustan",
      rent: "₹10,500",
      status: "Pending",
      payment: "Pending",
      joined: "08 Jan 2026",
      floor: "3rd Floor",
    },
  ];

  /* ====================================================== */
  /* 🔥 FILTERED */
  /* ====================================================== */

  const filteredResidents =
    residents.filter((resident) => {

      const matchSearch =

        resident.name
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        resident.room
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchStatus =

        selectedStatus === "All"

          ? true

          : resident.status ===
            selectedStatus;

      return (
        matchSearch &&
        matchStatus
      );
    });

  /* ====================================================== */
  /* 🔥 STATS */
  /* ====================================================== */

  const stats = [

    {
      title: "Total Residents",
      value: "248",
      icon: Users,
      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Active Residents",
      value: "219",
      icon: CheckCircle2,
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      title: "Pending Approval",
      value: "18",
      icon: Clock3,
      glow:
        "from-yellow-400 to-orange-400",
    },

    {
      title: "Defaulters",
      value: "11",
      icon: AlertTriangle,
      glow:
        "from-red-500 to-rose-500",
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
        w-[420px]
        h-[420px]
        bg-purple-500/20
        blur-[150px]
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

              Resident Management

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

              Hostel Residents 👨‍🎓

            </h1>

            {/* TEXT */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-[850px]
            ">

              Manage all hostel students,
              resident details, payment
              status, room allocation,
              approvals, and hostel activity
              from one powerful admin panel.

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
            px-7
            py-5
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.05]
            text-gray-300
            font-semibold
            flex
            items-center
            justify-center
            gap-4
            hover:border-purple-500/30
            hover:text-white
            transition-all
            duration-300
            ">

              <Download size={22} />

              Export Data

            </button>

            {/* ADD */}

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

              <UserPlus size={24} />

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
                    ">

                      {item.value}

                    </h2>

                  </div>

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

                {/* STATUS */}

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

                    Live Resident Analytics

                  </span>

                </div>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* ================================================= */}
      {/* 🔥 FILTERS */}
      {/* ================================================= */}

      <div className="
      flex
      flex-col
      xl:flex-row
      xl:items-center
      xl:justify-between
      gap-6
      ">

        {/* SEARCH */}

        <div className="
        flex
        items-center
        gap-4
        px-6
        py-5
        rounded-[28px]
        border
        border-white/10
        bg-white/[0.05]
        flex-1
        ">

          <Search
            size={22}
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

            placeholder="
            Search residents...
            "

            className="
            w-full
            bg-transparent
            outline-none
            text-white
            placeholder:text-gray-500
            "
          />

        </div>

        {/* FILTERS */}

        <div className="
        flex
        flex-wrap
        gap-4
        ">

          {filters.map((item, i) => (

            <button

              key={i}

              onClick={() =>
                setSelectedStatus(
                  item
                )
              }

              className={`
              px-6
              py-4
              rounded-2xl
              border
              text-sm
              font-semibold
              transition-all
              duration-300

              ${
                selectedStatus === item

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

      </div>

      {/* ================================================= */}
      {/* 🔥 RESIDENTS GRID */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-2
      gap-8
      ">

        {filteredResidents.map((resident, i) => (

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
            rounded-[38px]
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
            p-8
            hover:-translate-y-2
            transition-all
            duration-500
            group
            "
          >

            {/* GLOW */}

            <div className="
            absolute
            top-0
            right-0
            w-40
            h-40
            rounded-full
            bg-purple-500/20
            blur-[100px]
            opacity-0
            group-hover:opacity-100
            transition-all
            duration-500
            "></div>

            {/* CONTENT */}

            <div className="
            relative
            z-10
            ">

              {/* TOP */}

              <div className="
              flex
              flex-col
              lg:flex-row
              lg:items-start
              lg:justify-between
              gap-6
              mb-8
              ">

                {/* PROFILE */}

                <div className="
                flex
                items-center
                gap-5
                ">

                  {/* AVATAR */}

                  <div className="
                  w-24
                  h-24
                  rounded-[30px]
                  bg-gradient-to-r
                  from-purple-500
                  via-pink-500
                  to-yellow-400
                  flex
                  items-center
                  justify-center
                  text-white
                  shadow-[0_0_35px_rgba(168,85,247,0.35)]
                  ">

                    <GraduationCap
                      size={40}
                    />

                  </div>

                  {/* DETAILS */}

                  <div>

                    <h2 className="
                    text-3xl
                    font-black
                    text-white
                    mb-2
                    ">

                      {resident.name}

                    </h2>

                    <p className="
                    text-gray-400
                    mb-3
                    ">

                      {resident.college}

                    </p>

                    <div className="
                    flex
                    flex-wrap
                    gap-3
                    ">

                      {/* STATUS */}

                      <div className={`
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-semibold
                      border

                      ${
                        resident.status ===
                        "Active"

                          ? `
                            bg-emerald-500/10
                            border-emerald-500/20
                            text-emerald-300
                          `

                          : resident.status ===
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

                        {resident.status}

                      </div>

                      {/* PAYMENT */}

                      <div className={`
                      px-4
                      py-2
                      rounded-full
                      text-xs
                      font-semibold
                      border

                      ${
                        resident.payment ===
                        "Paid"

                          ? `
                            bg-cyan-500/10
                            border-cyan-500/20
                            text-cyan-300
                          `

                          : `
                            bg-red-500/10
                            border-red-500/20
                            text-red-300
                          `
                      }
                      `}>

                        {resident.payment}

                      </div>

                    </div>

                  </div>

                </div>

                {/* BUTTON */}

                <button className="
                w-14
                h-14
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

                  <ArrowUpRight
                    size={22}
                  />

                </button>

              </div>

              {/* DETAILS */}

              <div className="
              grid
              sm:grid-cols-2
              gap-5
              mb-8
              ">

                {/* ROOM */}

                <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
                ">

                  <div className="
                  flex
                  items-center
                  gap-4
                  mb-4
                  ">

                    <BedDouble
                      size={20}
                      className="
                      text-purple-300
                      "
                    />

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      Room Number

                    </p>

                  </div>

                  <h3 className="
                  text-white
                  font-bold
                  text-xl
                  ">

                    {resident.room}

                  </h3>

                </div>

                {/* RENT */}

                <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
                ">

                  <div className="
                  flex
                  items-center
                  gap-4
                  mb-4
                  ">

                    <IndianRupee
                      size={20}
                      className="
                      text-yellow-300
                      "
                    />

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      Monthly Rent

                    </p>

                  </div>

                  <h3 className="
                  text-white
                  font-bold
                  text-xl
                  ">

                    {resident.rent}

                  </h3>

                </div>

                {/* FLOOR */}

                <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
                ">

                  <div className="
                  flex
                  items-center
                  gap-4
                  mb-4
                  ">

                    <Building2
                      size={20}
                      className="
                      text-cyan-300
                      "
                    />

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      Floor

                    </p>

                  </div>

                  <h3 className="
                  text-white
                  font-bold
                  text-xl
                  ">

                    {resident.floor}

                  </h3>

                </div>

                {/* JOINED */}

                <div className="
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                p-5
                ">

                  <div className="
                  flex
                  items-center
                  gap-4
                  mb-4
                  ">

                    <CalendarDays
                      size={20}
                      className="
                      text-pink-300
                      "
                    />

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      Joined Date

                    </p>

                  </div>

                  <h3 className="
                  text-white
                  font-bold
                  text-lg
                  ">

                    {resident.joined}

                  </h3>

                </div>

              </div>

              {/* CONTACT */}

              <div className="
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.04]
              p-6
              mb-8
              ">

                <h3 className="
                text-white
                text-xl
                font-bold
                mb-6
                ">

                  Contact Information

                </h3>

                <div className="
                space-y-5
                ">

                  {/* EMAIL */}

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
                    from-purple-500/20
                    to-pink-500/20
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-purple-300
                    ">

                      <Mail size={20} />

                    </div>

                    <div>

                      <p className="
                      text-gray-400
                      text-sm
                      mb-1
                      ">

                        Email Address

                      </p>

                      <h4 className="
                      text-white
                      font-semibold
                      ">

                        {resident.email}

                      </h4>

                    </div>

                  </div>

                  {/* PHONE */}

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
                    from-cyan-500/20
                    to-blue-500/20
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-cyan-300
                    ">

                      <Phone size={20} />

                    </div>

                    <div>

                      <p className="
                      text-gray-400
                      text-sm
                      mb-1
                      ">

                        Phone Number

                      </p>

                      <h4 className="
                      text-white
                      font-semibold
                      ">

                        {resident.phone}

                      </h4>

                    </div>

                  </div>

                </div>

              </div>

              {/* ACTIONS */}

              <div className="
              grid
              sm:grid-cols-4
              gap-4
              ">

                {/* VIEW */}

                <button className="
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                text-gray-300
                hover:text-white
                hover:border-purple-500/30
                transition-all
                duration-300
                ">

                  <Eye size={18} />

                  View

                </button>

                {/* EDIT */}

                <button className="
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                text-gray-300
                hover:text-white
                hover:border-cyan-500/30
                transition-all
                duration-300
                ">

                  <Pencil size={18} />

                  Edit

                </button>

                {/* PAYMENT */}

                <button className="
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-2xl
                border
                border-white/10
                bg-white/[0.05]
                text-gray-300
                hover:text-white
                hover:border-yellow-500/30
                transition-all
                duration-300
                ">

                  <CreditCard
                    size={18}
                  />

                  Payment

                </button>

                {/* DELETE */}

                <button className="
                flex
                items-center
                justify-center
                gap-3
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-red-500
                to-pink-500
                text-white
                font-semibold
                hover:scale-[1.02]
                transition-all
                duration-300
                shadow-[0_0_25px_rgba(239,68,68,0.35)]
                ">

                  <Trash2 size={18} />

                  Remove

                </button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}