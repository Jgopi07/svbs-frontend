"use client";

import {
  LayoutDashboard,
  BedDouble,
  Users,
  CreditCard,
  UtensilsCrossed,
  MessageSquareWarning,
  FileBarChart2,
  Bell,
  Search,
  Settings,
  ShieldCheck,
  IndianRupee,
  AlertTriangle,
  CheckCircle2,
  Clock3,
  ArrowUpRight,
  ChevronRight,
  Sparkles,
  MoonStar,
  Building2,
  UserPlus,
  DoorOpen,
  BarChart3,
  LogOut,
  Activity,
  Eye,
  Download,
  ClipboardList,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function AdminDashboard() {

  /* ====================================================== */
  /* 🔥 MENU */
  /* ====================================================== */

  const menu = [

    {
      name: "Dashboard",
      icon: LayoutDashboard,
    },

    {
      name: "Rooms",
      icon: BedDouble,
    },

    {
      name: "Residents",
      icon: Users,
    },

    {
      name: "Payments",
      icon: CreditCard,
    },

    {
      name: "Food Menu",
      icon: UtensilsCrossed,
    },

    {
      name: "Complaints",
      icon: MessageSquareWarning,
    },

    {
      name: "Reports",
      icon: FileBarChart2,
    },
  ];

  /* ====================================================== */
  /* 🔥 STATES */
  /* ====================================================== */

  const [activeMenu, setActiveMenu] =
    useState("Dashboard");

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
  /* 🔥 STATS */
  /* ====================================================== */

  const stats = [

    {
      title: "Residents",
      value: "248",
      desc: "+12 this month",
      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Occupancy",
      value: "92%",
      desc: "Hostel almost full",
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      title: "Revenue",
      value: "₹4.8L",
      desc: "Monthly collection",
      glow:
        "from-yellow-400 to-orange-400",
    },

    {
      title: "Pending",
      value: "14",
      desc: "Payment reminders",
      glow:
        "from-pink-500 to-rose-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 ROOMS */
  /* ====================================================== */

  const rooms = [

    {
      room: "A-101",
      type: "2 Sharing",
      status: "Occupied",
    },

    {
      room: "A-203",
      type: "3 Sharing",
      status: "Available",
    },

    {
      room: "B-302",
      type: "AC Deluxe",
      status: "Maintenance",
    },

    {
      room: "C-112",
      type: "Single Room",
      status: "Occupied",
    },
  ];

  /* ====================================================== */
  /* 🔥 RESIDENTS */
  /* ====================================================== */

  const residents = [

    {
      name: "Rahul Sharma",
      room: "A-101",
      status: "Active",
    },

    {
      name: "Kiran Kumar",
      room: "B-302",
      status: "Pending",
    },

    {
      name: "Aman Verma",
      room: "A-203",
      status: "Active",
    },
  ];

  /* ====================================================== */
  /* 🔥 PAYMENTS */
  /* ====================================================== */

  const payments = [

    {
      name: "Rahul Sharma",
      amount: "₹8,500",
      status: "Paid",
    },

    {
      name: "Aman Verma",
      amount: "₹8,500",
      status: "Pending",
    },

    {
      name: "Kiran Kumar",
      amount: "₹12,500",
      status: "Paid",
    },
  ];

  /* ====================================================== */
  /* 🔥 COMPLAINTS */
  /* ====================================================== */

  const complaints = [

    {
      title:
        "WiFi issue on Floor 2",
      priority: "High",
    },

    {
      title:
        "AC issue in Room 302",
      priority: "Medium",
    },

    {
      title:
        "Laundry machine repair",
      priority: "Low",
    },
  ];

  /* ====================================================== */
  /* 🔥 REPORTS */
  /* ====================================================== */

  const reports = [

    {
      title: "Monthly Revenue Report",
      type: "Finance",
    },

    {
      title: "Resident Activity Report",
      type: "Residents",
    },

    {
      title: "Complaint Analytics",
      type: "Complaints",
    },
  ];

  return (

    <div className="
    min-h-screen
    bg-[#050816]
    flex
    relative
    overflow-hidden
    ">

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      <div className="
      absolute
      inset-0
      overflow-hidden
      pointer-events-none
      ">

        <div className="
        absolute
        inset-0
        opacity-[0.03]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:70px_70px]
        "></div>

        <div className="
        absolute
        top-[-250px]
        left-[-250px]
        w-[700px]
        h-[700px]
        bg-purple-500/20
        blur-[180px]
        rounded-full
        animate-pulse
        "></div>

        <div className="
        absolute
        bottom-[-250px]
        right-[-250px]
        w-[700px]
        h-[700px]
        bg-pink-500/20
        blur-[180px]
        rounded-full
        animate-pulse
        "></div>

      </div>

      {/* ================================================= */}
      {/* 🔥 SIDEBAR */}
      {/* ================================================= */}

      <div className="
      hidden
      lg:flex
      relative
      z-10
      flex-col
      w-[310px]
      border-r
      border-white/10
      bg-white/[0.04]
      backdrop-blur-3xl
      p-7
      ">

        {/* LOGO */}

        <div className="
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

            <div className="
            w-14
            h-14
            rounded-2xl
            bg-gradient-to-r
            from-purple-500
            via-pink-500
            to-yellow-400
            flex
            items-center
            justify-center
            text-black
            font-black
            text-xl
            ">

              A

            </div>

            <div>

              <h2 className="
              text-white
              text-2xl
              font-bold
              ">

                SVBS

              </h2>

              <p className="
              text-gray-400
              text-sm
              ">

                Admin Dashboard

              </p>

            </div>

          </div>

          <button
            onClick={handleLogout}
            className="
            w-11
            h-11
            rounded-xl
            border
            border-white/10
            bg-white/[0.05]
            flex
            items-center
            justify-center
            text-gray-400
            hover:text-red-400
            transition
            "
          >

            <LogOut size={20} />

          </button>

        </div>

        {/* ADMIN CARD */}

        <div className="
        rounded-[30px]
        border
        border-white/10
        bg-white/[0.05]
        p-6
        mb-8
        ">

          <div className="
          flex
          items-center
          gap-4
          mb-5
          ">

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

              <ShieldCheck size={28} />

            </div>

            <div>

              <h3 className="
              text-white
              text-xl
              font-bold
              ">

                Admin Access

              </h3>

              <p className="
              text-gray-400
              text-sm
              ">

                admin@svbs.com

              </p>

            </div>

          </div>

          <div className="
          flex
          flex-wrap
          gap-3
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
            ">

              System Control

            </div>

          </div>

        </div>

        {/* MENU */}

        <div className="
        flex-1
        space-y-3
        ">

          {menu.map((item, i) => {

            const Icon = item.icon;

            return (

              <button
                key={i}
                onClick={() =>
                  setActiveMenu(
                    item.name
                  )
                }
                className={`
                w-full
                flex
                items-center
                justify-between
                px-5
                py-4
                rounded-2xl
                border
                transition-all
                duration-300

                ${
                  activeMenu === item.name
                    ? "bg-gradient-to-r from-purple-500 to-pink-500 border-purple-500/20 text-white"
                    : "bg-white/[0.04] border-white/10 text-gray-300 hover:border-purple-500/20 hover:text-white"
                }
                `}
              >

                <div className="
                flex
                items-center
                gap-4
                ">

                  <Icon size={20} />

                  <span>

                    {item.name}

                  </span>

                </div>

                <ChevronRight size={18} />

              </button>
            );
          })}

        </div>

        {/* BOTTOM */}

        <div className="
        mt-8
        rounded-2xl
        border
        border-white/10
        bg-white/[0.04]
        p-5
        flex
        items-center
        justify-between
        ">

          <div>

            <h3 className="
            text-white
            font-semibold
            mb-1
            ">

              Secure Mode

            </h3>

            <p className="
            text-gray-400
            text-sm
            ">

              Admin Control Active

            </p>

          </div>

          <div className="
          w-12
          h-12
          rounded-xl
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

      </div>

      {/* ================================================= */}
      {/* 🔥 MAIN */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      flex-1
      h-screen
      overflow-y-auto
      ">

        {/* TOPBAR */}

        <div className="
        sticky
        top-0
        z-20
        border-b
        border-white/10
        bg-[#050816]/80
        backdrop-blur-3xl
        px-6
        lg:px-10
        py-6
        ">

          <div className="
          flex
          flex-col
          xl:flex-row
          xl:items-center
          xl:justify-between
          gap-6
          ">

            <div>

              <div className="
              inline-flex
              items-center
              gap-2
              px-4
              py-2
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              text-xs
              text-gray-400
              tracking-[0.25em]
              uppercase
              mb-5
              ">

                <Sparkles size={13} />

                Hostel Management

              </div>

              <h1 className="
              text-4xl
              lg:text-6xl
              font-black
              text-white
              mb-3
              ">

                Admin Dashboard ⚡

              </h1>

              <p className="
              text-gray-400
              text-lg
              ">

                Monitor rooms, residents, revenue and complaints.

              </p>

            </div>

            <div className="
            flex
            items-center
            gap-4
            ">

              <div className="
              hidden
              lg:flex
              items-center
              gap-3
              px-5
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              min-w-[300px]
              ">

                <Search
                  size={18}
                  className="
                  text-gray-500
                  "
                />

                <input
                  placeholder="Search..."
                  className="
                  bg-transparent
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  w-full
                  "
                />

              </div>

              <button className="
              relative
              w-14
              h-14
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              flex
              items-center
              justify-center
              text-gray-300
              ">

                <Bell size={22} />

                <span className="
                absolute
                top-3
                right-3
                w-2.5
                h-2.5
                rounded-full
                bg-pink-500
                animate-pulse
                "></span>

              </button>

              <button className="
              w-14
              h-14
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              flex
              items-center
              justify-center
              text-gray-300
              ">

                <Settings size={22} />

              </button>

            </div>

          </div>

        </div>

        {/* CONTENT */}

        <div className="
        p-6
        lg:p-10
        ">

          {/* DASHBOARD */}

          {activeMenu ===
            "Dashboard" && (

            <>

              {/* STATS */}

              <div className="
              grid
              sm:grid-cols-2
              xl:grid-cols-4
              gap-7
              mb-10
              ">

                {stats.map((card, i) => (

                  <motion.div
                    key={i}
                    initial={{
                      opacity: 0,
                      y: 40,
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
                    "
                  >

                    <div className={`
                    absolute
                    top-0
                    right-0
                    w-40
                    h-40
                    rounded-full
                    blur-[90px]
                    opacity-30
                    bg-gradient-to-r
                    ${card.glow}
                    `}></div>

                    <div className="
                    relative
                    z-10
                    ">

                      <p className="
                      text-gray-400
                      mb-4
                      ">

                        {card.title}

                      </p>

                      <h2 className="
                      text-5xl
                      font-black
                      text-white
                      mb-3
                      ">

                        {card.value}

                      </h2>

                      <p className="
                      text-gray-400
                      ">

                        {card.desc}

                      </p>

                    </div>

                  </motion.div>
                ))}

              </div>

              {/* GRID */}

              <div className="
              grid
              xl:grid-cols-[1.2fr_0.8fr]
              gap-8
              ">

                {/* LEFT */}

                <div className="
                space-y-8
                ">

                  {/* QUICK ACTIONS */}

                  <div className="
                  rounded-[35px]
                  border
                  border-white/10
                  bg-white/[0.05]
                  p-8
                  ">

                    <div className="
                    flex
                    items-center
                    justify-between
                    mb-10
                    ">

                      <div>

                        <h2 className="
                        text-3xl
                        font-bold
                        text-white
                        mb-3
                        ">

                          Quick Actions

                        </h2>

                        <p className="
                        text-gray-400
                        ">

                          Manage hostel instantly.

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

                        <Sparkles size={28} />

                      </div>

                    </div>

                    <div className="
                    grid
                    md:grid-cols-2
                    gap-5
                    ">

                      <button className="
                      rounded-[28px]
                      bg-gradient-to-r
                      from-purple-500
                      via-pink-500
                      to-yellow-400
                      p-7
                      text-left
                      text-white
                      ">

                        <UserPlus
                          size={32}
                          className="mb-6"
                        />

                        <h3 className="
                        text-2xl
                        font-bold
                        mb-3
                        ">

                          Add Resident

                        </h3>

                        <p className="
                        text-white/80
                        ">

                          Register new students quickly.

                        </p>

                      </button>

                      <button className="
                      rounded-[28px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-7
                      text-left
                      ">

                        <DoorOpen
                          size={32}
                          className="
                          text-purple-300
                          mb-6
                          "
                        />

                        <h3 className="
                        text-2xl
                        font-bold
                        text-white
                        mb-3
                        ">

                          Manage Rooms

                        </h3>

                        <p className="
                        text-gray-400
                        ">

                          Update room availability.

                        </p>

                      </button>

                    </div>

                  </div>

                  {/* ROOMS */}

                  <div className="
                  rounded-[35px]
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

                      <h2 className="
                      text-3xl
                      font-bold
                      text-white
                      ">

                        Room Overview

                      </h2>

                      <Building2
                        size={28}
                        className="
                        text-purple-300
                        "
                      />

                    </div>

                    <div className="
                    space-y-5
                    ">

                      {rooms.map(
                        (room, i) => (

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
                            md:flex-row
                            md:items-center
                            md:justify-between
                            gap-5
                            "
                          >

                            <div>

                              <h3 className="
                              text-white
                              text-xl
                              font-bold
                              mb-2
                              ">

                                {room.room}

                              </h3>

                              <p className="
                              text-gray-400
                              ">

                                {room.type}

                              </p>

                            </div>

                            <div className={`
                            px-5
                            py-3
                            rounded-full
                            text-sm
                            font-semibold

                            ${
                              room.status ===
                              "Occupied"
                                ? "bg-red-500/10 text-red-300"
                                : room.status ===
                                  "Available"
                                ? "bg-emerald-500/10 text-emerald-300"
                                : "bg-yellow-500/10 text-yellow-300"
                            }
                            `}>

                              {room.status}

                            </div>

                          </div>
                        )
                      )}

                    </div>

                  </div>

                </div>

                {/* RIGHT */}

                <div className="
                space-y-8
                ">

                  {/* PAYMENTS */}

                  <div className="
                  rounded-[35px]
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

                      <h2 className="
                      text-3xl
                      font-bold
                      text-white
                      ">

                        Payments

                      </h2>

                      <IndianRupee
                        size={28}
                        className="
                        text-yellow-300
                        "
                      />

                    </div>

                    <div className="
                    space-y-5
                    ">

                      {payments.map(
                        (item, i) => (

                          <div
                            key={i}
                            className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-5
                            flex
                            items-center
                            justify-between
                            "
                          >

                            <div>

                              <h3 className="
                              text-white
                              font-semibold
                              mb-2
                              ">

                                {item.name}

                              </h3>

                              <p className="
                              text-gray-400
                              ">

                                {item.amount}

                              </p>

                            </div>

                            <div className={`
                            px-4
                            py-2
                            rounded-full
                            text-sm

                            ${
                              item.status ===
                              "Paid"
                                ? "bg-emerald-500/10 text-emerald-300"
                                : "bg-red-500/10 text-red-300"
                            }
                            `}>

                              {item.status}

                            </div>

                          </div>
                        )
                      )}

                    </div>

                  </div>

                  {/* COMPLAINTS */}

                  <div className="
                  rounded-[35px]
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

                      <h2 className="
                      text-3xl
                      font-bold
                      text-white
                      ">

                        Complaints

                      </h2>

                      <AlertTriangle
                        size={28}
                        className="
                        text-pink-300
                        "
                      />

                    </div>

                    <div className="
                    space-y-5
                    ">

                      {complaints.map(
                        (item, i) => (

                          <div
                            key={i}
                            className="
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            p-5
                            "
                          >

                            <div className="
                            flex
                            items-center
                            justify-between
                            gap-4
                            mb-4
                            ">

                              <h3 className="
                              text-white
                              font-medium
                              ">

                                {item.title}

                              </h3>

                              <div className={`
                              px-3
                              py-1
                              rounded-full
                              text-xs

                              ${
                                item.priority ===
                                "High"
                                  ? "bg-red-500/10 text-red-300"
                                  : item.priority ===
                                    "Medium"
                                  ? "bg-yellow-500/10 text-yellow-300"
                                  : "bg-emerald-500/10 text-emerald-300"
                              }
                              `}>

                                {item.priority}

                              </div>

                            </div>

                            <button className="
                            text-purple-300
                            text-sm
                            ">

                              View Details →

                            </button>

                          </div>
                        )
                      )}

                    </div>

                  </div>

                </div>

              </div>

            </>
          )}

          {/* ROOMS PAGE */}

          {activeMenu ===
            "Rooms" && (

            <div>

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

                  <h1 className="
                  text-5xl
                  font-black
                  text-white
                  mb-4
                  ">

                    Rooms Management 🏨

                  </h1>

                  <p className="
                  text-gray-400
                  text-lg
                  ">

                    Manage hostel rooms and availability.

                  </p>

                </div>

                <button className="
                px-7
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                text-white
                font-semibold
                flex
                items-center
                gap-3
                ">

                  <Plus size={20} />

                  Add Room

                </button>

              </div>

              <div className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-7
              ">

                {rooms.map((room, i) => (

                  <div
                    key={i}
                    className="
                    rounded-[35px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-7
                    "
                  >

                    <div className="
                    flex
                    items-center
                    justify-between
                    mb-8
                    ">

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

                        <BedDouble size={30} />

                      </div>

                      <div className={`
                      px-4
                      py-2
                      rounded-full
                      text-xs

                      ${
                        room.status ===
                        "Occupied"
                          ? "bg-red-500/10 text-red-300"
                          : room.status ===
                            "Available"
                          ? "bg-emerald-500/10 text-emerald-300"
                          : "bg-yellow-500/10 text-yellow-300"
                      }
                      `}>

                        {room.status}

                      </div>

                    </div>

                    <h2 className="
                    text-3xl
                    font-black
                    text-white
                    mb-3
                    ">

                      {room.room}

                    </h2>

                    <p className="
                    text-gray-400
                    mb-8
                    ">

                      {room.type}

                    </p>

                    <button className="
                    w-full
                    py-4
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    text-gray-300
                    ">

                      Manage Room

                    </button>

                  </div>
                ))}

              </div>

            </div>
          )}

          {/* RESIDENTS */}

          {activeMenu ===
            "Residents" && (

            <div>

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

                  <h1 className="
                  text-5xl
                  font-black
                  text-white
                  mb-4
                  ">

                    Residents 👨‍🎓

                  </h1>

                  <p className="
                  text-gray-400
                  text-lg
                  ">

                    Manage all hostel residents.

                  </p>

                </div>

                <button className="
                px-7
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                text-white
                font-semibold
                flex
                items-center
                gap-3
                ">

                  <UserPlus size={20} />

                  Add Resident

                </button>

              </div>

              <div className="
              space-y-5
              ">

                {residents.map(
                  (item, i) => (

                    <div
                      key={i}
                      className="
                      rounded-[30px]
                      border
                      border-white/10
                      bg-white/[0.05]
                      p-7
                      flex
                      flex-col
                      lg:flex-row
                      lg:items-center
                      lg:justify-between
                      gap-6
                      "
                    >

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
                        from-purple-500
                        to-pink-500
                        flex
                        items-center
                        justify-center
                        text-white
                        ">

                          <Users size={28} />

                        </div>

                        <div>

                          <h3 className="
                          text-white
                          text-2xl
                          font-bold
                          mb-2
                          ">

                            {item.name}

                          </h3>

                          <p className="
                          text-gray-400
                          ">

                            Room {item.room}

                          </p>

                        </div>

                      </div>

                      <div className="
                      flex
                      items-center
                      gap-4
                      ">

                        <div className={`
                        px-5
                        py-3
                        rounded-full
                        text-sm

                        ${
                          item.status ===
                          "Active"
                            ? "bg-emerald-500/10 text-emerald-300"
                            : "bg-yellow-500/10 text-yellow-300"
                        }
                        `}>

                          {item.status}

                        </div>

                        <button className="
                        w-12
                        h-12
                        rounded-xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        flex
                        items-center
                        justify-center
                        text-gray-300
                        ">

                          <Eye size={20} />

                        </button>

                      </div>

                    </div>
                  )
                )}

              </div>

            </div>
          )}

          {/* REPORTS */}

          {activeMenu ===
            "Reports" && (

            <div>

              <div className="
              mb-10
              ">

                <h1 className="
                text-5xl
                font-black
                text-white
                mb-4
                ">

                  Reports & Analytics 📊

                </h1>

                <p className="
                text-gray-400
                text-lg
                ">

                  Download hostel management reports.

                </p>

              </div>

              <div className="
              grid
              md:grid-cols-2
              xl:grid-cols-3
              gap-7
              ">

                {reports.map(
                  (item, i) => (

                    <div
                      key={i}
                      className="
                      rounded-[35px]
                      border
                      border-white/10
                      bg-white/[0.05]
                      p-7
                      "
                    >

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
                      mb-8
                      ">

                        <ClipboardList size={28} />

                      </div>

                      <h2 className="
                      text-2xl
                      font-bold
                      text-white
                      mb-3
                      ">

                        {item.title}

                      </h2>

                      <p className="
                      text-gray-400
                      mb-8
                      ">

                        {item.type}

                      </p>

                      <button className="
                      w-full
                      py-4
                      rounded-2xl
                      bg-gradient-to-r
                      from-purple-500
                      to-pink-500
                      text-white
                      font-semibold
                      flex
                      items-center
                      justify-center
                      gap-3
                      ">

                        <Download size={20} />

                        Download Report

                      </button>

                    </div>
                  )
                )}

              </div>

            </div>
          )}

        </div>

      </div>

    </div>
  );
}