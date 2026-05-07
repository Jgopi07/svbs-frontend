"use client";

import {
  BedDouble,
  Building2,
  Users,
  Search,
  Plus,
  Filter,
  Wifi,
  Snowflake,
  Bath,
  Tv,
  ShieldCheck,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  Wrench,
  ArrowUpRight,
  Sparkles,
  Eye,
  Pencil,
  Trash2,
  IndianRupee,
  UserPlus,
  Home,
  DoorOpen,
  Layers3,
  Star,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function RoomsPage() {

  /* ====================================================== */
  /* 🔥 STATES */
  /* ====================================================== */

  const [search, setSearch] =
    useState("");

  const [selectedFloor, setSelectedFloor] =
    useState("All");

  /* ====================================================== */
  /* 🔥 FLOORS */
  /* ====================================================== */

  const floors = [

    "All",

    "Ground Floor",

    "1st Floor",

    "2nd Floor",

    "3rd Floor",
  ];

  /* ====================================================== */
  /* 🔥 ROOMS */
  /* ====================================================== */

  const rooms = [

    {
      roomNo: "A-101",
      type: "2 Sharing AC Deluxe",
      floor: "Ground Floor",
      residents: 2,
      capacity: 2,
      rent: "₹12,500",
      status: "Occupied",
      wifi: true,
      ac: true,
      attachedBath: true,
      tv: true,
    },

    {
      roomNo: "A-102",
      type: "3 Sharing Non AC",
      floor: "Ground Floor",
      residents: 1,
      capacity: 3,
      rent: "₹8,500",
      status: "Available",
      wifi: true,
      ac: false,
      attachedBath: false,
      tv: false,
    },

    {
      roomNo: "B-204",
      type: "Single Premium",
      floor: "2nd Floor",
      residents: 1,
      capacity: 1,
      rent: "₹16,500",
      status: "Occupied",
      wifi: true,
      ac: true,
      attachedBath: true,
      tv: true,
    },

    {
      roomNo: "C-305",
      type: "2 Sharing Deluxe",
      floor: "3rd Floor",
      residents: 0,
      capacity: 2,
      rent: "₹11,000",
      status: "Maintenance",
      wifi: true,
      ac: true,
      attachedBath: true,
      tv: false,
    },

    {
      roomNo: "A-203",
      type: "3 Sharing AC",
      floor: "2nd Floor",
      residents: 2,
      capacity: 3,
      rent: "₹9,500",
      status: "Available",
      wifi: true,
      ac: true,
      attachedBath: false,
      tv: true,
    },

    {
      roomNo: "B-301",
      type: "Single Executive",
      floor: "3rd Floor",
      residents: 1,
      capacity: 1,
      rent: "₹18,000",
      status: "Occupied",
      wifi: true,
      ac: true,
      attachedBath: true,
      tv: true,
    },
  ];

  /* ====================================================== */
  /* 🔥 FILTERED */
  /* ====================================================== */

  const filteredRooms =
    rooms.filter((room) => {

      const matchSearch =

        room.roomNo
          .toLowerCase()
          .includes(
            search.toLowerCase()
          )

        ||

        room.type
          .toLowerCase()
          .includes(
            search.toLowerCase()
          );

      const matchFloor =

        selectedFloor === "All"

          ? true

          : room.floor ===
            selectedFloor;

      return (
        matchSearch &&
        matchFloor
      );
    });

  /* ====================================================== */
  /* 🔥 STATS */
  /* ====================================================== */

  const stats = [

    {
      title: "Total Rooms",
      value: "128",
      icon: Building2,
      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Occupied",
      value: "104",
      icon: Users,
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      title: "Available",
      value: "18",
      icon: CheckCircle2,
      glow:
        "from-cyan-500 to-blue-500",
    },

    {
      title: "Maintenance",
      value: "06",
      icon: Wrench,
      glow:
        "from-orange-400 to-yellow-400",
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
        w-[400px]
        h-[400px]
        bg-purple-500/20
        blur-[140px]
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
            text-gray-300
            text-xs
            tracking-[0.25em]
            uppercase
            mb-6
            ">

              <Sparkles
                size={14}
                className="
                text-yellow-300
                "
              />

              Room Management

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

              Hostel Rooms 🏨

            </h1>

            {/* TEXT */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-[850px]
            ">

              Manage hostel room availability,
              occupancy, maintenance, pricing,
              and facilities with a powerful
              admin room management system.

            </p>

          </div>

          {/* RIGHT */}

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
          text-lg
          flex
          items-center
          justify-center
          gap-4
          shadow-[0_0_40px_rgba(168,85,247,0.4)]
          hover:scale-[1.03]
          transition-all
          duration-300
          ">

            <Plus size={24} />

            Add New Room

          </button>

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
                delay: i * 0.1,
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

                    Live Room Analytics

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
            Search rooms...
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

        {/* FLOOR FILTER */}

        <div className="
        flex
        flex-wrap
        gap-4
        ">

          {floors.map((item, i) => (

            <button

              key={i}

              onClick={() =>
                setSelectedFloor(
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
                selectedFloor === item

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
      {/* 🔥 ROOMS GRID */}
      {/* ================================================= */}

      <div className="
      grid
      lg:grid-cols-2
      2xl:grid-cols-3
      gap-8
      ">

        {filteredRooms.map((room, i) => (

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
              items-start
              justify-between
              gap-5
              mb-8
              ">

                {/* LEFT */}

                <div className="
                flex
                items-center
                gap-5
                ">

                  {/* ICON */}

                  <div className="
                  w-20
                  h-20
                  rounded-[26px]
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

                    <BedDouble
                      size={34}
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

                      {room.roomNo}

                    </h2>

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      {room.type}

                    </p>

                  </div>

                </div>

                {/* STATUS */}

                <div className={`
                px-5
                py-3
                rounded-full
                border
                text-sm
                font-semibold

                ${
                  room.status ===
                  "Occupied"

                    ? `
                      bg-red-500/10
                      border-red-500/20
                      text-red-300
                    `

                    : room.status ===
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

                  {room.status}

                </div>

              </div>

              {/* ROOM DETAILS */}

              <div className="
              grid
              sm:grid-cols-2
              gap-5
              mb-8
              ">

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

                    <Home
                      size={20}
                      className="
                      text-purple-300
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
                  text-lg
                  ">

                    {room.floor}

                  </h3>

                </div>

                {/* CAPACITY */}

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

                    <Users
                      size={20}
                      className="
                      text-cyan-300
                      "
                    />

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      Occupancy

                    </p>

                  </div>

                  <h3 className="
                  text-white
                  font-bold
                  text-lg
                  ">

                    {room.residents}/
                    {room.capacity}

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
                  text-lg
                  ">

                    {room.rent}

                  </h3>

                </div>

                {/* TYPE */}

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

                    <Layers3
                      size={20}
                      className="
                      text-pink-300
                      "
                    />

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      Category

                    </p>

                  </div>

                  <h3 className="
                  text-white
                  font-bold
                  text-lg
                  ">

                    Premium

                  </h3>

                </div>

              </div>

              {/* FACILITIES */}

              <div className="
              mb-8
              ">

                <h3 className="
                text-white
                text-xl
                font-bold
                mb-5
                ">

                  Room Facilities

                </h3>

                <div className="
                grid
                grid-cols-2
                gap-4
                ">

                  {/* WIFI */}

                  <div className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  ">

                    <Wifi
                      size={18}
                      className="
                      text-cyan-300
                      "
                    />

                    <span className="
                    text-gray-300
                    text-sm
                    ">

                      WiFi

                    </span>

                  </div>

                  {/* AC */}

                  <div className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  ">

                    <Snowflake
                      size={18}
                      className="
                      text-blue-300
                      "
                    />

                    <span className="
                    text-gray-300
                    text-sm
                    ">

                      AC

                    </span>

                  </div>

                  {/* BATH */}

                  <div className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  ">

                    <Bath
                      size={18}
                      className="
                      text-pink-300
                      "
                    />

                    <span className="
                    text-gray-300
                    text-sm
                    ">

                      Attached Bath

                    </span>

                  </div>

                  {/* TV */}

                  <div className="
                  flex
                  items-center
                  gap-3
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  px-5
                  py-4
                  ">

                    <Tv
                      size={18}
                      className="
                      text-yellow-300
                      "
                    />

                    <span className="
                    text-gray-300
                    text-sm
                    ">

                      Smart TV

                    </span>

                  </div>

                </div>

              </div>

              {/* BUTTONS */}

              <div className="
              grid
              sm:grid-cols-3
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

                {/* ASSIGN */}

                <button className="
                flex
                items-center
                justify-center
                gap-3
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

                  <UserPlus
                    size={18}
                  />

                  Assign

                </button>

              </div>

            </div>

          </motion.div>
        ))}

      </div>

    </div>
  );
}