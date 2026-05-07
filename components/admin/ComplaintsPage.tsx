"use client";

import {
  AlertTriangle,
  CheckCircle2,
  Clock3,
  MessageSquareWarning,
  Sparkles,
  Search,
  Filter,
  Bell,
  ShieldAlert,
  ShieldCheck,
  Siren,
  User,
  ArrowUpRight,
  ChevronRight,
  Wifi,
  Wrench,
  Droplets,
  UtensilsCrossed,
  AirVent,
  Building2,
  ClipboardList,
  BadgeCheck,
  Activity,
  CalendarDays,
  Eye,
  Check,
  XCircle,
  Plus,
  Send,
  Star,
  Flame,
  Phone,
  Home,
  TimerReset,
  Layers3,
  CircleAlert,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function ComplaintsPage() {

  /* ====================================================== */
  /* 🔥 STATES */
  /* ====================================================== */

  const [selectedFilter, setSelectedFilter] =
    useState("All");

  const [complaintText, setComplaintText] =
    useState("");

  const [category, setCategory] =
    useState("WiFi");

  const [priority, setPriority] =
    useState("Medium");

  const [complaints, setComplaints] =
    useState([

      {
        id: "#CMP-1021",
        title:
          "WiFi speed very slow on 3rd floor",
        category: "WiFi",
        priority: "High",
        status: "Pending",
        date: "Today",
        room: "A-302",
        desc:
          "Internet speed is very low during evening hours.",
      },

      {
        id: "#CMP-1017",
        title:
          "AC not cooling properly",
        category: "Maintenance",
        priority: "Medium",
        status: "In Progress",
        date: "Yesterday",
        room: "B-204",
        desc:
          "AC temperature is not decreasing properly.",
      },

      {
        id: "#CMP-1009",
        title:
          "Water leakage in bathroom",
        category: "Water",
        priority: "High",
        status: "Resolved",
        date: "2 days ago",
        room: "C-401",
        desc:
          "Bathroom tap leakage issue fixed successfully.",
      },

      {
        id: "#CMP-1001",
        title:
          "Food quality issue in dinner",
        category: "Food",
        priority: "Low",
        status: "Resolved",
        date: "3 days ago",
        room: "A-108",
        desc:
          "Mess food quality improved after complaint.",
      },
    ]);

  /* ====================================================== */
  /* 🔥 FILTERS */
  /* ====================================================== */

  const filters = [

    "All",

    "Pending",

    "In Progress",

    "Resolved",
  ];

  /* ====================================================== */
  /* 🔥 CATEGORY LIST */
  /* ====================================================== */

  const categories = [

    {
      name: "WiFi",
      icon: Wifi,
      glow:
        "from-cyan-500 to-blue-500",
    },

    {
      name: "Maintenance",
      icon: Wrench,
      glow:
        "from-yellow-400 to-orange-500",
    },

    {
      name: "Water",
      icon: Droplets,
      glow:
        "from-blue-400 to-cyan-400",
    },

    {
      name: "Food",
      icon: UtensilsCrossed,
      glow:
        "from-pink-500 to-rose-500",
    },

    {
      name: "Electricity",
      icon: AirVent,
      glow:
        "from-purple-500 to-pink-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 STATS */
  /* ====================================================== */

  const stats = [

    {
      title: "Total Complaints",
      value: "48",
      desc: "This month",
      icon: ClipboardList,
      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Pending",
      value: "08",
      desc: "Need attention",
      icon: Clock3,
      glow:
        "from-yellow-400 to-orange-500",
    },

    {
      title: "Resolved",
      value: "36",
      desc: "Successfully fixed",
      icon: CheckCircle2,
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      title: "Critical",
      value: "04",
      desc: "Urgent issues",
      icon: Siren,
      glow:
        "from-red-500 to-pink-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 SUBMIT COMPLAINT */
  /* ====================================================== */

  const submitComplaint = () => {

    if (!complaintText)
      return;

    const newComplaint = {

      id: `#CMP-${
        Math.floor(
          Math.random() * 1000
        ) + 1100
      }`,

      title: complaintText,

      category,

      priority,

      status: "Pending",

      date: "Just now",

      room: "A-302",

      desc:
        "Complaint submitted successfully.",
    };

    setComplaints([
      newComplaint,
      ...complaints,
    ]);

    setComplaintText("");
  };

  /* ====================================================== */
  /* 🔥 FILTERED */
  /* ====================================================== */

  const filteredComplaints =
    selectedFilter === "All"

      ? complaints

      : complaints.filter(
          (item) =>
            item.status ===
            selectedFilter
        );

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
        bg-pink-500/20
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

              Hostel Complaint System

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

              Complaints Center 🛠️

            </h1>

            {/* TEXT */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-[850px]
            ">

              Monitor, manage, resolve,
              and track hostel complaints
              efficiently with real-time
              status updates and analytics.

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

              <Search size={22} />

              Search Complaints

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

              Raise Complaint

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

                    Live Complaint Data

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
      xl:grid-cols-[0.9fr_1.1fr]
      gap-8
      ">

        {/* ================================================= */}
        {/* 🔥 LEFT */}
        {/* ================================================= */}

        <div className="
        space-y-8
        ">

          {/* ============================================= */}
          {/* 🔥 RAISE COMPLAINT */}
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

                  Raise Complaint

                </h2>

                <p className="
                text-gray-400
                ">

                  Submit hostel issues for
                  quick resolution.

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
              ">

                <MessageSquareWarning
                  size={30}
                />

              </div>

            </div>

            {/* CATEGORY */}

            <div className="
            mb-8
            ">

              <p className="
              text-white
              font-semibold
              mb-5
              ">

                Complaint Category

              </p>

              <div className="
              grid
              grid-cols-2
              gap-4
              ">

                {categories.map(
                  (item, i) => {

                    const Icon =
                      item.icon;

                    return (

                      <button

                        key={i}

                        onClick={() =>
                          setCategory(
                            item.name
                          )
                        }

                        className={`
                        rounded-[24px]
                        border
                        p-5
                        transition-all
                        duration-300

                        ${
                          category ===
                          item.name

                            ? `
                              border-purple-500/30
                              bg-gradient-to-r
                              from-purple-500/20
                              to-pink-500/20
                            `

                            : `
                              border-white/10
                              bg-white/[0.04]
                              hover:border-purple-500/20
                            `
                        }
                        `}
                      >

                        <div className="
                        flex
                        flex-col
                        items-center
                        justify-center
                        gap-4
                        ">

                          <div className={`
                          w-14
                          h-14
                          rounded-2xl
                          bg-gradient-to-r
                          ${item.glow}
                          flex
                          items-center
                          justify-center
                          text-white
                          `}>

                            <Icon
                              size={24}
                            />

                          </div>

                          <span className="
                          text-white
                          font-semibold
                          ">

                            {item.name}

                          </span>

                        </div>

                      </button>
                    );
                  }
                )}

              </div>

            </div>

            {/* PRIORITY */}

            <div className="
            mb-8
            ">

              <p className="
              text-white
              font-semibold
              mb-5
              ">

                Priority Level

              </p>

              <div className="
              flex
              flex-wrap
              gap-4
              ">

                {[
                  "Low",
                  "Medium",
                  "High",
                ].map((item, i) => (

                  <button

                    key={i}

                    onClick={() =>
                      setPriority(item)
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
                      priority ===
                      item

                        ? item ===
                          "High"

                          ? `
                            bg-red-500/20
                            border-red-500/30
                            text-red-300
                          `

                          : item ===
                            "Medium"

                          ? `
                            bg-yellow-500/20
                            border-yellow-500/30
                            text-yellow-300
                          `

                          : `
                            bg-emerald-500/20
                            border-emerald-500/30
                            text-emerald-300
                          `

                        : `
                          border-white/10
                          bg-white/[0.04]
                          text-gray-300
                        `
                    }
                    `}
                  >

                    {item}

                  </button>
                ))}

              </div>

            </div>

            {/* TEXTAREA */}

            <div className="
            mb-8
            ">

              <p className="
              text-white
              font-semibold
              mb-5
              ">

                Complaint Description

              </p>

              <textarea

                value={complaintText}

                onChange={(e) =>
                  setComplaintText(
                    e.target.value
                  )
                }

                placeholder="
                Explain your issue clearly...
                "

                className="
                w-full
                h-[180px]
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                text-white
                placeholder:text-gray-500
                outline-none
                resize-none
                focus:border-purple-500/30
                transition-all
                duration-300
                "
              />

            </div>

            {/* BUTTON */}

            <button

              onClick={
                submitComplaint
              }

              className="
              w-full
              py-5
              rounded-[28px]
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-yellow-400
              text-white
              font-bold
              text-lg
              flex
              items-center
              justify-center
              gap-4
              shadow-[0_0_40px_rgba(168,85,247,0.35)]
              hover:scale-[1.01]
              transition-all
              duration-300
              "
            >

              <Send size={22} />

              Submit Complaint

            </button>

          </div>

          {/* ============================================= */}
          {/* 🔥 CATEGORY ANALYTICS */}
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

                  Complaint Categories

                </h2>

                <p className="
                text-gray-400
                ">

                  Most reported hostel issues.

                </p>

              </div>

              <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              flex
              items-center
              justify-center
              text-white
              ">

                <Layers3
                  size={24}
                />

              </div>

            </div>

            {/* ITEMS */}

            <div className="
            space-y-5
            ">

              {categories.map(
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

                        <div className={`
                        w-14
                        h-14
                        rounded-2xl
                        bg-gradient-to-r
                        ${item.glow}
                        flex
                        items-center
                        justify-center
                        text-white
                        `}>

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

                            {item.name}

                          </h3>

                          <p className="
                          text-gray-400
                          ">

                            Active issue
                            category

                          </p>

                        </div>

                      </div>

                      {/* RIGHT */}

                      <ChevronRight
                        size={22}
                        className="
                        text-gray-400
                        "
                      />

                    </div>
                  );
                }
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
          {/* 🔥 FILTER */}
          {/* ============================================= */}

          <div className="
          flex
          flex-wrap
          gap-4
          ">

            {filters.map((item, i) => (

              <button

                key={i}

                onClick={() =>
                  setSelectedFilter(
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
                  selectedFilter ===
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

          {/* ============================================= */}
          {/* 🔥 COMPLAINT LIST */}
          {/* ============================================= */}

          <div className="
          space-y-6
          ">

            {filteredComplaints.map(
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
                    delay: i * 0.05,
                  }}

                  className="
                  relative
                  overflow-hidden
                  rounded-[38px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-8
                  hover:border-purple-500/20
                  transition-all
                  duration-300
                  "
                >

                  {/* GLOW */}

                  <div className="
                  absolute
                  top-0
                  right-0
                  w-40
                  h-40
                  bg-purple-500/10
                  blur-[100px]
                  rounded-full
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
                    xl:flex-row
                    xl:items-start
                    xl:justify-between
                    gap-6
                    mb-8
                    ">

                      {/* LEFT */}

                      <div>

                        <div className="
                        flex
                        flex-wrap
                        items-center
                        gap-4
                        mb-5
                        ">

                          <div className="
                          px-4
                          py-2
                          rounded-full
                          bg-white/[0.05]
                          border
                          border-white/10
                          text-gray-300
                          text-sm
                          font-semibold
                          ">

                            {item.id}

                          </div>

                          <div className="
                          px-4
                          py-2
                          rounded-full
                          bg-purple-500/10
                          border
                          border-purple-500/20
                          text-purple-300
                          text-sm
                          font-semibold
                          ">

                            {item.category}

                          </div>

                          <div className={`
                          px-4
                          py-2
                          rounded-full
                          text-sm
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
                            {" "}
                            Priority

                          </div>

                        </div>

                        {/* TITLE */}

                        <h2 className="
                        text-2xl
                        font-black
                        text-white
                        mb-4
                        leading-relaxed
                        ">

                          {item.title}

                        </h2>

                        {/* DESC */}

                        <p className="
                        text-gray-400
                        text-lg
                        leading-relaxed
                        max-w-[850px]
                        ">

                          {item.desc}

                        </p>

                      </div>

                      {/* STATUS */}

                      <div className={`
                      px-6
                      py-4
                      rounded-2xl
                      border
                      font-semibold
                      text-sm

                      ${
                        item.status ===
                        "Resolved"

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
                            bg-cyan-500/10
                            border-cyan-500/20
                            text-cyan-300
                          `
                      }
                      `}>

                        {item.status}

                      </div>

                    </div>

                    {/* DETAILS */}

                    <div className="
                    grid
                    sm:grid-cols-3
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

                        <p className="
                        text-gray-400
                        text-sm
                        mb-3
                        ">

                          Room

                        </p>

                        <h3 className="
                        text-white
                        font-bold
                        text-xl
                        ">

                          {item.room}

                        </h3>

                      </div>

                      {/* DATE */}

                      <div className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-5
                      ">

                        <p className="
                        text-gray-400
                        text-sm
                        mb-3
                        ">

                          Submitted

                        </p>

                        <h3 className="
                        text-white
                        font-bold
                        text-xl
                        ">

                          {item.date}

                        </h3>

                      </div>

                      {/* STATUS */}

                      <div className="
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-5
                      ">

                        <p className="
                        text-gray-400
                        text-sm
                        mb-3
                        ">

                          Current Status

                        </p>

                        <h3 className="
                        text-white
                        font-bold
                        text-xl
                        ">

                          {item.status}

                        </h3>

                      </div>

                    </div>

                    {/* BUTTONS */}

                    <div className="
                    flex
                    flex-wrap
                    gap-5
                    ">

                      <button className="
                      flex-1
                      min-w-[180px]
                      py-5
                      rounded-[24px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      text-gray-300
                      font-semibold
                      hover:text-white
                      hover:border-purple-500/30
                      transition-all
                      duration-300
                      flex
                      items-center
                      justify-center
                      gap-4
                      ">

                        <Eye size={20} />

                        View Details

                      </button>

                      <button className="
                      flex-1
                      min-w-[180px]
                      py-5
                      rounded-[24px]
                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500
                      text-white
                      font-bold
                      hover:scale-[1.02]
                      transition-all
                      duration-300
                      shadow-[0_0_35px_rgba(168,85,247,0.35)]
                      flex
                      items-center
                      justify-center
                      gap-4
                      ">

                        <CheckCircle2
                          size={20}
                        />

                        Track Status

                      </button>

                    </div>

                  </div>

                </motion.div>
              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
}