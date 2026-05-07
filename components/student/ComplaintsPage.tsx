"use client";

import {
  MessageSquareWarning,
  Send,
  Clock3,
  CheckCircle2,
  AlertTriangle,
  Sparkles,
  Wifi,
  BedDouble,
  Droplets,
  ShieldAlert,
  ChevronRight,
  CalendarDays,
  User,
  Search,
  Filter,
  Star,
  Phone,
  Wrench,
  Bell,
  ArrowUpRight,
  CircleDashed,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

/* ====================================================== */
/* 🔥 COMPLAINTS PAGE */
/* ====================================================== */

export default function ComplaintsPage() {

  /* ==================================================== */
  /* 🔥 STATES */
  /* ==================================================== */

  const [complaintText, setComplaintText] =
    useState("");

  const [category, setCategory] =
    useState("WiFi");

  const [priority, setPriority] =
    useState("Medium");

  const [submitted, setSubmitted] =
    useState(false);

  const [complaints, setComplaints] =
    useState([

      {
        id: 1,

        title:
          "WiFi issue in Room A-302",

        category: "WiFi",

        priority: "High",

        status: "Pending",

        date: "12 May 2026",

        desc:
          "Internet disconnecting frequently during online classes.",
      },

      {
        id: 2,

        title:
          "Bathroom water leakage",

        category: "Maintenance",

        priority: "Medium",

        status: "In Progress",

        date: "10 May 2026",

        desc:
          "Washroom tap leaking continuously since yesterday.",
      },

      {
        id: 3,

        title:
          "AC cooling issue resolved",

        category: "Room",

        priority: "Low",

        status: "Resolved",

        date: "06 May 2026",

        desc:
          "AC cooling problem fixed successfully by maintenance team.",
      },
    ]);

  /* ==================================================== */
  /* 🔥 SUBMIT */
/* ==================================================== */

  const handleSubmit = () => {

    if (!complaintText)
      return;

    const newComplaint = {

      id: Date.now(),

      title: complaintText,

      category,

      priority,

      status: "Pending",

      date: "Today",

      desc:
        "Complaint submitted successfully. Waiting for admin response.",
    };

    setComplaints([
      newComplaint,
      ...complaints,
    ]);

    setComplaintText("");

    setSubmitted(true);

    setTimeout(() => {

      setSubmitted(false);

    }, 3500);
  };

  /* ==================================================== */
  /* 🔥 CATEGORY ICON */
/* ==================================================== */

  const getIcon = (
    type: string
  ) => {

    switch (type) {

      case "WiFi":

        return Wifi;

      case "Room":

        return BedDouble;

      case "Maintenance":

        return Wrench;

      case "Water":

        return Droplets;

      case "Security":

        return ShieldAlert;

      default:

        return AlertTriangle;
    }
  };

  /* ==================================================== */
  /* 🔥 STATUS STYLE */
/* ==================================================== */

  const getStatusStyle = (
    status: string
  ) => {

    switch (status) {

      case "Pending":

        return "bg-yellow-500/10 border-yellow-500/20 text-yellow-300";

      case "Resolved":

        return "bg-emerald-500/10 border-emerald-500/20 text-emerald-300";

      case "In Progress":

        return "bg-cyan-500/10 border-cyan-500/20 text-cyan-300";

      default:

        return "bg-white/10";
    }
  };

  /* ==================================================== */
  /* 🔥 PRIORITY STYLE */
/* ==================================================== */

  const getPriorityStyle = (
    level: string
  ) => {

    switch (level) {

      case "High":

        return "text-red-300";

      case "Medium":

        return "text-yellow-300";

      case "Low":

        return "text-emerald-300";

      default:

        return "text-gray-300";
    }
  };

  /* ==================================================== */
  /* 🔥 JSX */
/* ==================================================== */

  return (

    <div className="
    space-y-10
    ">

      {/* ================================================= */}
      {/* 🔥 HERO */}
      {/* ================================================= */}

      <motion.div

        initial={{
          opacity: 0,
          y: 30,
        }}

        animate={{
          opacity: 1,
          y: 0,
        }}

        className="
        relative
        overflow-hidden
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        p-8
        lg:p-12
        "
      >

        {/* BG */}

        <div className="
        absolute
        inset-0
        overflow-hidden
        ">

          <div className="
          absolute
          top-[-120px]
          left-[-120px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-purple-500/20
          blur-[120px]
          "></div>

          <div className="
          absolute
          bottom-[-120px]
          right-[-120px]
          w-[350px]
          h-[350px]
          rounded-full
          bg-pink-500/20
          blur-[120px]
          "></div>

        </div>

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

          <div className="
          max-w-3xl
          ">

            <div className="
            inline-flex
            items-center
            gap-2
            px-5
            py-2.5
            rounded-full
            border
            border-white/10
            bg-white/[0.05]
            text-xs
            uppercase
            tracking-[0.3em]
            text-gray-300
            mb-7
            ">

              <Sparkles
                size={13}
                className="
                text-pink-300
                "
              />

              Support Center

            </div>

            <h1 className="
            text-5xl
            sm:text-6xl
            xl:text-7xl
            font-black
            leading-none
            text-white
            mb-6
            ">

              Raise Hostel

              <span className="
              block
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-yellow-300
              bg-clip-text
              text-transparent
              ">

                Complaints
              </span>

            </h1>

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-2xl
            ">

              Quickly report room issues, WiFi problems, food complaints or maintenance requests and track live complaint status.

            </p>

          </div>

          {/* RIGHT */}

          <div className="
          grid
          grid-cols-2
          gap-5
          w-full
          xl:w-auto
          ">

            <div className="
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.05]
            p-6
            min-w-[180px]
            ">

              <p className="
              text-gray-400
              text-sm
              mb-3
              ">

                Active Complaints

              </p>

              <h2 className="
              text-white
              text-5xl
              font-black
              mb-2
              ">

                03

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-yellow-300
              text-sm
              ">

                <Clock3
                  size={15}
                />

                Live Tracking

              </div>

            </div>

            <div className="
            rounded-[28px]
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            p-6
            min-w-[180px]
            text-white
            ">

              <p className="
              text-white/70
              text-sm
              mb-3
              ">

                Resolution Rate

              </p>

              <h2 className="
              text-5xl
              font-black
              mb-2
              ">

                96%

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-sm
              ">

                <CheckCircle2
                  size={15}
                />

                Fast Support

              </div>

            </div>

          </div>

        </div>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 MAIN GRID */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-[0.95fr_1.05fr]
      gap-8
      items-start
      ">

        {/* ================================================= */}
        {/* 🔥 LEFT */}
        {/* ================================================= */}

        <div className="
        space-y-8
        ">

          {/* ============================================= */}
          {/* 🔥 CREATE COMPLAINT */}
          {/* ============================================= */}

          <div className="
          relative
          overflow-hidden
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
          p-8
          "
          >

            {/* GLOW */}

            <div className="
            absolute
            top-0
            right-0
            w-[250px]
            h-[250px]
            rounded-full
            bg-pink-500/10
            blur-[120px]
            "></div>

            {/* TOP */}

            <div className="
            relative
            z-10
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

                  Submit your issue to hostel support team.

                </p>

              </div>

              <div className="
              w-16
              h-16
              rounded-[22px]
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              flex
              items-center
              justify-center
              text-white
              shadow-[0_0_40px_rgba(168,85,247,0.35)]
              ">

                <MessageSquareWarning
                  size={28}
                />

              </div>

            </div>

            {/* FORM */}

            <div className="
            relative
            z-10
            space-y-6
            ">

              {/* CATEGORY */}

              <div>

                <label className="
                block
                text-sm
                text-gray-400
                mb-3
                ">

                  Complaint Category

                </label>

                <div className="
                grid
                grid-cols-2
                sm:grid-cols-3
                gap-4
                ">

                  {[
                    "WiFi",
                    "Room",
                    "Maintenance",
                    "Water",
                    "Security",
                  ].map(
                    (item, i) => (

                      <button

                        key={i}

                        onClick={() =>
                          setCategory(
                            item
                          )
                        }

                        className={`
                        h-[55px]
                        rounded-2xl
                        border
                        text-sm
                        font-semibold
                        transition-all
                        duration-300

                        ${
                          category ===
                          item

                            ? "bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 text-white"

                            : "bg-white/[0.04] border-white/10 text-gray-300 hover:border-purple-500/20"
                        }
                        `}
                      >

                        {item}

                      </button>
                    )
                  )}

                </div>

              </div>

              {/* PRIORITY */}

              <div>

                <label className="
                block
                text-sm
                text-gray-400
                mb-3
                ">

                  Priority Level

                </label>

                <div className="
                flex
                flex-wrap
                gap-4
                ">

                  {[
                    "Low",
                    "Medium",
                    "High",
                  ].map(
                    (item, i) => (

                      <button

                        key={i}

                        onClick={() =>
                          setPriority(
                            item
                          )
                        }

                        className={`
                        px-6
                        h-[50px]
                        rounded-full
                        border
                        text-sm
                        font-semibold
                        transition-all
                        duration-300

                        ${
                          priority ===
                          item

                            ? "bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500 text-white"

                            : "bg-white/[0.04] border-white/10 text-gray-300 hover:border-purple-500/20"
                        }
                        `}
                      >

                        {item}

                      </button>
                    )
                  )}

                </div>

              </div>

              {/* TEXTAREA */}

              <div>

                <label className="
                block
                text-sm
                text-gray-400
                mb-3
                ">

                  Describe Your Issue

                </label>

                <textarea

                  value={complaintText}

                  onChange={(e) =>
                    setComplaintText(
                      e.target.value
                    )
                  }

                  placeholder="Explain the issue clearly..."

                  className="
                  w-full
                  h-[180px]
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
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
                  handleSubmit
                }

                className="
                relative
                overflow-hidden
                w-full
                h-[65px]
                rounded-[24px]
                bg-gradient-to-r
                from-purple-500
                via-pink-500
                to-yellow-400
                text-white
                font-bold
                text-lg
                shadow-[0_0_40px_rgba(168,85,247,0.35)]
                hover:scale-[1.01]
                transition-all
                duration-300
                "
              >

                <div className="
                relative
                z-10
                flex
                items-center
                justify-center
                gap-3
                ">

                  <Send
                    size={20}
                  />

                  Submit Complaint

                </div>

              </button>

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 SUPPORT */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
          p-8
          "
          >

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

                  Hostel Support

                </h2>

                <p className="
                text-gray-400
                ">

                  Contact hostel help desk anytime.

                </p>

              </div>

              <Phone
                size={28}
                className="
                text-cyan-300
                "
              />

            </div>

            <div className="
            space-y-5
            ">

              {/* ITEM */}

              <div className="
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.04]
              p-6
              flex
              items-center
              justify-between
              gap-5
              "
              >

                <div className="
                flex
                items-center
                gap-5
                ">

                  <div className="
                  w-14
                  h-14
                  rounded-[20px]
                  bg-gradient-to-r
                  from-purple-500/20
                  to-pink-500/20
                  flex
                  items-center
                  justify-center
                  text-white
                  "
                  >

                    <Bell
                      size={24}
                    />

                  </div>

                  <div>

                    <h3 className="
                    text-white
                    font-bold
                    mb-1
                    ">

                      Emergency Support

                    </h3>

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      Available 24/7

                    </p>

                  </div>

                </div>

                <button className="
                px-5
                py-3
                rounded-2xl
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                text-white
                font-semibold
                "
                >

                  Call

                </button>

              </div>

              {/* ITEM */}

              <div className="
              rounded-[28px]
              border
              border-white/10
              bg-white/[0.04]
              p-6
              flex
              items-center
              justify-between
              gap-5
              "
              >

                <div className="
                flex
                items-center
                gap-5
                ">

                  <div className="
                  w-14
                  h-14
                  rounded-[20px]
                  bg-gradient-to-r
                  from-cyan-500/20
                  to-blue-500/20
                  flex
                  items-center
                  justify-center
                  text-cyan-300
                  "
                  >

                    <User
                      size={24}
                    />

                  </div>

                  <div>

                    <h3 className="
                    text-white
                    font-bold
                    mb-1
                    ">

                      Hostel Manager

                    </h3>

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      Response within 30 mins

                    </p>

                  </div>

                </div>

                <button className="
                px-5
                py-3
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                text-white
                "
                >

                  Contact

                </button>

              </div>

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
          {/* 🔥 TOP */}
          {/* ============================================= */}

          <div className="
          flex
          flex-col
          lg:flex-row
          gap-5
          ">

            {/* SEARCH */}

            <div className="
            relative
            flex-1
            ">

              <Search
                size={20}
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

                placeholder="Search complaints..."

                className="
                w-full
                h-[60px]
                rounded-[22px]
                border
                border-white/10
                bg-white/[0.05]
                pl-14
                pr-5
                text-white
                placeholder:text-gray-500
                outline-none
                "
              />

            </div>

            {/* FILTER */}

            <button className="
            h-[60px]
            px-7
            rounded-[22px]
            border
            border-white/10
            bg-white/[0.05]
            text-white
            flex
            items-center
            gap-3
            "
            >

              <Filter
                size={18}
              />

              Filters

            </button>

          </div>

          {/* ============================================= */}
          {/* 🔥 LIST */}
          {/* ============================================= */}

          <div className="
          space-y-6
          ">

            {complaints.map(
              (item, i) => {

                const Icon =
                  getIcon(
                    item.category
                  );

                return (

                  <motion.div

                    key={item.id}

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
                    p-7
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
                    w-[180px]
                    h-[180px]
                    rounded-full
                    bg-purple-500/10
                    blur-[100px]
                    "
                    ></div>

                    {/* CONTENT */}

                    <div className="
                    relative
                    z-10
                    "
                    >

                      {/* TOP */}

                      <div className="
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-start
                      lg:justify-between
                      gap-5
                      mb-7
                      "
                      >

                        {/* LEFT */}

                        <div className="
                        flex
                        items-start
                        gap-5
                        "
                        >

                          {/* ICON */}

                          <div className="
                          w-16
                          h-16
                          rounded-[22px]
                          bg-gradient-to-r
                          from-purple-500/20
                          to-pink-500/20
                          border
                          border-white/10
                          flex
                          items-center
                          justify-center
                          text-white
                          "
                          >

                            <Icon
                              size={28}
                            />

                          </div>

                          {/* TEXT */}

                          <div>

                            <div className="
                            flex
                            flex-wrap
                            items-center
                            gap-3
                            mb-3
                            "
                            >

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
                              uppercase
                              tracking-[0.2em]
                              "
                              >

                                {
                                  item.category
                                }

                              </div>

                              <div className={`
                              px-4
                              py-2
                              rounded-full
                              text-xs
                              font-semibold
                              border

                              ${getStatusStyle(
                                item.status
                              )}
                              `}
                              >

                                {
                                  item.status
                                }

                              </div>

                            </div>

                            <h2 className="
                            text-3xl
                            font-black
                            text-white
                            mb-3
                            leading-tight
                            "
                            >

                              {
                                item.title
                              }

                            </h2>

                            <p className="
                            text-gray-400
                            leading-relaxed
                            max-w-2xl
                            "
                            >

                              {
                                item.desc
                              }

                            </p>

                          </div>

                        </div>

                        {/* RIGHT */}

                        <button className="
                        w-14
                        h-14
                        rounded-[20px]
                        border
                        border-white/10
                        bg-white/[0.04]
                        flex
                        items-center
                        justify-center
                        text-gray-300
                        hover:text-white
                        hover:border-purple-500/20
                        transition-all
                        duration-300
                        "
                        >

                          <ArrowUpRight
                            size={22}
                          />

                        </button>

                      </div>

                      {/* BOTTOM */}

                      <div className="
                      flex
                      flex-col
                      md:flex-row
                      md:items-center
                      md:justify-between
                      gap-5
                      pt-6
                      border-t
                      border-white/10
                      "
                      >

                        {/* LEFT */}

                        <div className="
                        flex
                        flex-wrap
                        items-center
                        gap-6
                        "
                        >

                          {/* DATE */}

                          <div className="
                          flex
                          items-center
                          gap-3
                          text-gray-400
                          text-sm
                          "
                          >

                            <CalendarDays
                              size={16}
                            />

                            {
                              item.date
                            }

                          </div>

                          {/* PRIORITY */}

                          <div className="
                          flex
                          items-center
                          gap-3
                          text-sm
                          "
                          >

                            <CircleDashed
                              size={16}
                              className={`
                              ${getPriorityStyle(
                                item.priority
                              )}
                              `}
                            />

                            <span className={`
                            font-semibold

                            ${getPriorityStyle(
                              item.priority
                            )}
                            `}
                            >

                              {
                                item.priority
                              } Priority

                            </span>

                          </div>

                        </div>

                        {/* RIGHT */}

                        <button className="
                        group
                        flex
                        items-center
                        gap-3
                        text-white
                        font-semibold
                        "
                        >

                          Track Status

                          <ChevronRight
                            size={18}
                            className="
                            group-hover:translate-x-1
                            transition
                            "
                          />

                        </button>

                      </div>

                    </div>

                  </motion.div>
                );
              }
            )}

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 SUCCESS */}
      {/* ================================================= */}

      {submitted && (

        <motion.div

          initial={{
            opacity: 0,
            y: 30,
          }}

          animate={{
            opacity: 1,
            y: 0,
          }}

          exit={{
            opacity: 0,
          }}

          className="
          fixed
          bottom-8
          right-8
          z-50
          max-w-md
          rounded-[30px]
          border
          border-emerald-500/20
          bg-[#08110f]
          backdrop-blur-3xl
          p-6
          shadow-[0_0_50px_rgba(16,185,129,0.25)]
          "
        >

          <div className="
          flex
          items-start
          gap-5
          "
          >

            {/* ICON */}

            <div className="
            w-16
            h-16
            rounded-[22px]
            bg-gradient-to-r
            from-emerald-500
            to-green-400
            flex
            items-center
            justify-center
            text-white
            "
            >

              <CheckCircle2
                size={28}
              />

            </div>

            {/* TEXT */}

            <div className="
            flex-1
            "
            >

              <h2 className="
              text-white
              text-2xl
              font-black
              mb-3
              "
              >

                Complaint Submitted 🎉

              </h2>

              <p className="
              text-gray-300
              leading-relaxed
              mb-4
              "
              >

                Your complaint has been successfully submitted to the hostel support team.

              </p>

              <div className="
              flex
              items-center
              gap-3
              text-emerald-400
              text-sm
              "
              >

                <Clock3
                  size={16}
                />

                Waiting for admin response

              </div>

            </div>

          </div>

        </motion.div>
      )}

    </div>
  );
}