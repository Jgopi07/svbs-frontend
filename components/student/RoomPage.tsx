"use client";

import {
  BedDouble,
  Wifi,
  ShieldCheck,
  Wind,
  Tv2,
  Bath,
  Sparkles,
  CheckCircle2,
  ArrowUpRight,
  MapPin,
  Star,
  Coffee,
  UtensilsCrossed,
  BookOpen,
  Clock3,
  Users,
  Building2,
  Home,
  MoonStar,
  SunMedium,
  HeartHandshake,
  Car,
  Lock,
  Bell,
  CalendarDays,
  IndianRupee,
  Phone,
  ChevronRight,
  LampDesk,
  AirVent,
  Waves,
  WashingMachine,
  Dumbbell,
  Trees,
  Shield,
  Plus,
  Minus,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

/* ====================================================== */
/* 🔥 ROOM PAGE */
/* ====================================================== */

export default function RoomPage() {

  /* ==================================================== */
  /* 🔥 STATES */
  /* ==================================================== */

  const [selectedRoom, setSelectedRoom] =
    useState("Single Sharing");

  const [selectedImage, setSelectedImage] =
    useState(0);

  /* ==================================================== */
  /* 🔥 ROOMS */
  /* ==================================================== */

  const rooms = [

    {
      title: "Single Sharing",

      price: "₹12,500",

      type: "Premium",

      floor: "2nd Floor",

      availability: "Available",

      rating: "4.9",

      students: "1 Student",

      size: "240 sq.ft",

      images: [

        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0",

        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

        "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267",
      ],

      features: [

        "Air Conditioner",

        "Study Table",

        "Attached Bathroom",

        "Wardrobe",

        "High-Speed WiFi",

        "Smart TV",

        "Premium Mattress",

        "Balcony View",
      ],

      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Double Sharing",

      price: "₹8,500",

      type: "Most Popular",

      floor: "3rd Floor",

      availability: "Available",

      rating: "4.8",

      students: "2 Students",

      size: "320 sq.ft",

      images: [

        "https://images.unsplash.com/photo-1611892440504-42a792e24d32",

        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

        "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2",
      ],

      features: [

        "Twin Beds",

        "Study Desks",

        "Attached Bathroom",

        "Shared Wardrobe",

        "WiFi",

        "LED Lighting",

        "Hot Water",

        "Window View",
      ],

      glow:
        "from-cyan-500 to-blue-500",
    },

    {
      title: "Triple Sharing",

      price: "₹6,500",

      type: "Budget Friendly",

      floor: "1st Floor",

      availability: "Limited",

      rating: "4.6",

      students: "3 Students",

      size: "420 sq.ft",

      images: [

        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf",

        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",

        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85",
      ],

      features: [

        "Comfort Beds",

        "Lockers",

        "Study Area",

        "Shared Bathroom",

        "WiFi",

        "Power Backup",

        "Night Security",

        "Laundry Access",
      ],

      glow:
        "from-orange-400 to-yellow-500",
    },
  ];

  /* ==================================================== */
  /* 🔥 SELECTED ROOM */
  /* ==================================================== */

  const currentRoom =
    rooms.find(
      (room) =>
        room.title ===
        selectedRoom
    ) || rooms[0];

  /* ==================================================== */
  /* 🔥 FACILITIES */
  /* ==================================================== */

  const facilities = [

    {
      title:
        "24/7 Security",

      icon: ShieldCheck,
    },

    {
      title:
        "High-Speed WiFi",

      icon: Wifi,
    },

    {
      title:
        "Laundry Service",

      icon: WashingMachine,
    },

    {
      title:
        "Study Rooms",

      icon: BookOpen,
    },

    {
      title:
        "Power Backup",

      icon: Bell,
    },

    {
      title:
        "Gym Access",

      icon: Dumbbell,
    },

    {
      title:
        "Mess Facility",

      icon: UtensilsCrossed,
    },

    {
      title:
        "Parking Area",

      icon: Car,
    },
  ];

  /* ==================================================== */
  /* 🔥 RULES */
  /* ==================================================== */

  const rules = [

    "Maintain silence after 10 PM",

    "Visitors allowed till 8 PM only",

    "Keep rooms clean and organized",

    "Avoid damaging hostel property",

    "Mess timings should be followed",

    "Identity card mandatory",
  ];

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
        rounded-[45px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        p-8
        lg:p-10
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
          top-[-250px]
          left-[-250px]
          w-[500px]
          h-[500px]
          bg-purple-500/20
          blur-[160px]
          rounded-full
          "></div>

          <div className="
          absolute
          bottom-[-250px]
          right-[-250px]
          w-[500px]
          h-[500px]
          bg-pink-500/20
          blur-[160px]
          rounded-full
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
        gap-10
        ">

          {/* LEFT */}

          <div className="
          flex-1
          ">

            {/* BADGE */}

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
            tracking-[0.25em]
            text-gray-300
            mb-6
            ">

              <Sparkles
                size={13}
              />

              Premium Hostel Rooms

            </div>

            {/* TITLE */}

            <h1 className="
            text-5xl
            sm:text-6xl
            xl:text-7xl
            font-black
            text-white
            leading-none
            mb-6
            ">

              Smart Living
              <br />

              <span className="
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-yellow-300
              bg-clip-text
              text-transparent
              ">

                Comfortable Stay

              </span>

            </h1>

            {/* DESC */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-3xl
            mb-8
            ">

              Experience premium hostel living with modern rooms,
              secure environment, high-speed internet, hygienic food,
              and student-friendly facilities.

            </p>

            {/* BUTTONS */}

            <div className="
            flex
            flex-wrap
            gap-5
            ">

              <button className="
              px-8
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              text-white
              font-semibold
              shadow-[0_0_40px_rgba(168,85,247,0.35)]
              flex
              items-center
              gap-3
              ">

                Book Your Room

                <ArrowUpRight
                  size={20}
                />

              </button>

              <button className="
              px-8
              py-5
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              text-gray-300
              font-semibold
              hover:text-white
              transition-all
              duration-300
              ">

                Explore Facilities

              </button>

            </div>

          </div>

          {/* RIGHT */}

          <div className="
          grid
          grid-cols-2
          gap-5
          w-full
          xl:w-auto
          ">

            {[
              {
                title:
                  "Students",

                value:
                  "1000+",

                icon:
                  Users,
              },

              {
                title:
                  "Rooms",

                value:
                  "250+",

                icon:
                  BedDouble,
              },

              {
                title:
                  "Rating",

                value:
                  "4.9",

                icon:
                  Star,
              },

              {
                title:
                  "Security",

                value:
                  "24/7",

                icon:
                  Shield,
              },
            ].map(
              (
                item,
                i
              ) => {

                const Icon =
                  item.icon;

                return (

                  <div

                    key={i}

                    className="
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    p-6
                    min-w-[180px]
                    "
                  >

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
                    mb-6
                    ">

                      <Icon
                        size={24}
                      />

                    </div>

                    <h2 className="
                    text-4xl
                    font-black
                    text-white
                    mb-2
                    ">

                      {item.value}

                    </h2>

                    <p className="
                    text-gray-400
                    ">

                      {item.title}

                    </p>

                  </div>
                );
              }
            )}

          </div>

        </div>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 ROOM TABS */}
      {/* ================================================= */}

      <div className="
      flex
      flex-wrap
      gap-5
      ">

        {rooms.map(
          (
            room,
            i
          ) => (

            <button

              key={i}

              onClick={() => {

                setSelectedRoom(
                  room.title
                );

                setSelectedImage(
                  0
                );
              }}

              className={`
              relative
              overflow-hidden
              px-7
              py-5
              rounded-[28px]
              border
              transition-all
              duration-300

              ${
                selectedRoom ===
                room.title

                  ? "border-purple-500/30 bg-gradient-to-r from-purple-500 to-pink-500 text-white shadow-[0_0_40px_rgba(168,85,247,0.35)]"

                  : "border-white/10 bg-white/[0.05] text-gray-300 hover:border-purple-500/20 hover:text-white"
              }
              `}
            >

              <div className="
              flex
              items-center
              gap-4
              ">

                <BedDouble
                  size={22}
                />

                <div className="
                text-left
                ">

                  <h3 className="
                  font-semibold
                  mb-1
                  ">

                    {room.title}

                  </h3>

                  <p className="
                  text-sm
                  opacity-80
                  ">

                    {room.price}/month

                  </p>

                </div>

              </div>

            </button>
          )
        )}

      </div>

      {/* ================================================= */}
      {/* 🔥 ROOM DETAILS */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-[1fr_0.45fr]
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
          {/* 🔥 GALLERY */}
          {/* ============================================= */}

          <div className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.05]
          overflow-hidden
          backdrop-blur-3xl
          ">

            {/* MAIN IMAGE */}

            <div className="
            relative
            h-[520px]
            overflow-hidden
            ">

              <img

                src={
                  currentRoom
                    .images[
                    selectedImage
                  ]
                }

                alt="Room"

                className="
                w-full
                h-full
                object-cover
                "
              />

              {/* OVERLAY */}

              <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black/70
              via-black/10
              to-transparent
              "></div>

              {/* INFO */}

              <div className="
              absolute
              bottom-8
              left-8
              right-8
              flex
              flex-col
              lg:flex-row
              lg:items-end
              lg:justify-between
              gap-6
              ">

                {/* LEFT */}

                <div>

                  <div className={`
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-gradient-to-r
                  ${currentRoom.glow}
                  text-white
                  text-sm
                  font-semibold
                  mb-5
                  shadow-[0_0_30px_rgba(168,85,247,0.35)]
                  `}>

                    <Sparkles
                      size={15}
                    />

                    {
                      currentRoom.type
                    }

                  </div>

                  <h2 className="
                  text-5xl
                  font-black
                  text-white
                  mb-4
                  ">

                    {
                      currentRoom.title
                    }

                  </h2>

                  <div className="
                  flex
                  flex-wrap
                  gap-5
                  text-gray-200
                  ">

                    <div className="
                    flex
                    items-center
                    gap-2
                    ">

                      <MapPin
                        size={17}
                      />

                      {
                        currentRoom.floor
                      }

                    </div>

                    <div className="
                    flex
                    items-center
                    gap-2
                    ">

                      <Users
                        size={17}
                      />

                      {
                        currentRoom
                          .students
                      }

                    </div>

                    <div className="
                    flex
                    items-center
                    gap-2
                    ">

                      <Building2
                        size={17}
                      />

                      {
                        currentRoom
                          .size
                      }

                    </div>

                  </div>

                </div>

                {/* PRICE */}

                <div className="
                rounded-[30px]
                bg-black/40
                backdrop-blur-3xl
                border
                border-white/10
                px-8
                py-6
                ">

                  <p className="
                  text-gray-300
                  text-sm
                  mb-2
                  ">

                    Monthly Rent

                  </p>

                  <h2 className="
                  text-5xl
                  font-black
                  text-white
                  mb-3
                  ">

                    {
                      currentRoom.price
                    }

                  </h2>

                  <div className="
                  flex
                  items-center
                  gap-2
                  text-emerald-300
                  text-sm
                  ">

                    <CheckCircle2
                      size={15}
                    />

                    {
                      currentRoom
                        .availability
                    }

                  </div>

                </div>

              </div>

            </div>

            {/* THUMBNAILS */}

            <div className="
            p-6
            flex
            gap-5
            overflow-x-auto
            ">

              {currentRoom.images.map(
                (
                  image,
                  i
                ) => (

                  <button

                    key={i}

                    onClick={() =>
                      setSelectedImage(
                        i
                      )
                    }

                    className={`
                    shrink-0
                    rounded-[24px]
                    overflow-hidden
                    border-2
                    transition-all
                    duration-300

                    ${
                      selectedImage ===
                      i

                        ? "border-purple-500 shadow-[0_0_30px_rgba(168,85,247,0.35)]"

                        : "border-white/10"
                    }
                    `}
                  >

                    <img

                      src={image}

                      alt="Thumbnail"

                      className="
                      w-40
                      h-28
                      object-cover
                      "
                    />

                  </button>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 FEATURES */}
          {/* ============================================= */}

          <div className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
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
                text-4xl
                font-black
                text-white
                mb-3
                ">

                  Room Features

                </h2>

                <p className="
                text-gray-400
                ">

                  Premium amenities included in this room.

                </p>

              </div>

              <Sparkles
                size={34}
                className="
                text-purple-300
                "
              />

            </div>

            {/* GRID */}

            <div className="
            grid
            sm:grid-cols-2
            xl:grid-cols-3
            gap-6
            ">

              {currentRoom.features.map(
                (
                  item,
                  i
                ) => (

                  <div

                    key={i}

                    className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    flex
                    items-center
                    gap-5
                    hover:border-purple-500/20
                    transition-all
                    duration-300
                    "
                  >

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
                    text-purple-300
                    shrink-0
                    ">

                      <CheckCircle2
                        size={24}
                      />

                    </div>

                    <div>

                      <h3 className="
                      text-white
                      font-semibold
                      text-lg
                      ">

                        {item}

                      </h3>

                      <p className="
                      text-gray-400
                      text-sm
                      mt-1
                      ">

                        Included

                      </p>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 FACILITIES */}
          {/* ============================================= */}

          <div className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
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
                text-4xl
                font-black
                text-white
                mb-3
                ">

                  Hostel Facilities

                </h2>

                <p className="
                text-gray-400
                ">

                  Facilities available for all residents.

                </p>

              </div>

              <Home
                size={32}
                className="
                text-pink-300
                "
              />

            </div>

            {/* GRID */}

            <div className="
            grid
            md:grid-cols-2
            gap-6
            ">

              {facilities.map(
                (
                  item,
                  i
                ) => {

                  const Icon =
                    item.icon;

                  return (

                    <div

                      key={i}

                      className="
                      rounded-[30px]
                      border
                      border-white/10
                      bg-white/[0.04]
                      p-6
                      flex
                      items-center
                      justify-between
                      hover:border-purple-500/20
                      transition-all
                      duration-300
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
                        from-purple-500/20
                        to-pink-500/20
                        flex
                        items-center
                        justify-center
                        text-white
                        ">

                          <Icon
                            size={26}
                          />

                        </div>

                        <div>

                          <h3 className="
                          text-white
                          text-lg
                          font-semibold
                          mb-1
                          ">

                            {
                              item.title
                            }

                          </h3>

                          <p className="
                          text-gray-400
                          text-sm
                          ">

                            Available

                          </p>

                        </div>

                      </div>

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

        {/* ================================================= */}
        {/* 🔥 RIGHT */}
        {/* ================================================= */}

        <div className="
        space-y-8
        sticky
        top-5
        ">

          {/* ============================================= */}
          {/* 🔥 BOOK CARD */}
          {/* ============================================= */}

          <div className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-r
          from-purple-500
          via-pink-500
          to-yellow-400
          p-8
          text-white
          shadow-[0_0_60px_rgba(168,85,247,0.35)]
          ">

            {/* BG */}

            <div className="
            absolute
            top-[-100px]
            right-[-100px]
            w-[250px]
            h-[250px]
            rounded-full
            bg-white/10
            blur-[100px]
            "></div>

            {/* CONTENT */}

            <div className="
            relative
            z-10
            ">

              <div className="
              flex
              items-center
              justify-between
              mb-8
              ">

                <div className="
                w-20
                h-20
                rounded-[28px]
                bg-white/20
                flex
                items-center
                justify-center
                text-white
                ">

                  <BedDouble
                    size={38}
                  />

                </div>

                <div className="
                px-4
                py-2
                rounded-full
                bg-black/20
                text-sm
                backdrop-blur-xl
                ">

                  {
                    currentRoom
                      .availability
                  }

                </div>

              </div>

              <p className="
              text-white/70
              text-sm
              mb-3
              ">

                Monthly Rent

              </p>

              <h2 className="
              text-6xl
              font-black
              mb-5
              ">

                {
                  currentRoom.price
                }

              </h2>

              <div className="
              flex
              items-center
              gap-2
              mb-8
              text-white/80
              ">

                <Star
                  size={18}
                />

                {
                  currentRoom.rating
                } Rating

              </div>

              {/* BUTTONS */}

              <div className="
              space-y-4
              ">

                <button className="
                w-full
                py-5
                rounded-2xl
                bg-black/20
                backdrop-blur-xl
                border
                border-white/20
                font-bold
                text-lg
                flex
                items-center
                justify-center
                gap-3
                ">

                  Book Now

                  <ArrowUpRight
                    size={20}
                  />

                </button>

                <button className="
                w-full
                py-5
                rounded-2xl
                border
                border-white/20
                bg-white/10
                backdrop-blur-xl
                font-semibold
                "
                >

                  Contact Hostel

                </button>

              </div>

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 ROOM INFO */}
          {/* ============================================= */}

          <div className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
          p-8
          ">

            <h2 className="
            text-3xl
            font-black
            text-white
            mb-8
            ">

              Room Details

            </h2>

            <div className="
            space-y-5
            ">

              {[
                {
                  title:
                    "Room Type",

                  value:
                    currentRoom
                      .title,
                },

                {
                  title:
                    "Room Size",

                  value:
                    currentRoom
                      .size,
                },

                {
                  title:
                    "Residents",

                  value:
                    currentRoom
                      .students,
                },

                {
                  title:
                    "Floor",

                  value:
                    currentRoom
                      .floor,
                },

                {
                  title:
                    "Availability",

                  value:
                    currentRoom
                      .availability,
                },
              ].map(
                (
                  item,
                  i
                ) => (

                  <div

                    key={i}

                    className="
                    flex
                    items-center
                    justify-between
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    px-5
                    py-5
                    "
                  >

                    <p className="
                    text-gray-400
                    ">

                      {item.title}

                    </p>

                    <p className="
                    text-white
                    font-semibold
                    ">

                      {item.value}

                    </p>

                  </div>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 RULES */}
          {/* ============================================= */}

          <div className="
          rounded-[40px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
          p-8
          ">

            <h2 className="
            text-3xl
            font-black
            text-white
            mb-8
            ">

              Hostel Rules

            </h2>

            <div className="
            space-y-5
            ">

              {rules.map(
                (
                  item,
                  i
                ) => (

                  <div

                    key={i}

                    className="
                    flex
                    items-start
                    gap-4
                    rounded-[24px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                    "
                  >

                    <div className="
                    mt-1
                    w-3
                    h-3
                    rounded-full
                    bg-gradient-to-r
                    from-purple-500
                    to-pink-500
                    shrink-0
                    "></div>

                    <p className="
                    text-gray-300
                    leading-relaxed
                    ">

                      {item}

                    </p>

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