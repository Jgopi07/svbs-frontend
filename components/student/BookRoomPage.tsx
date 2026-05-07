"use client";

import {
  BedDouble,
  Wifi,
  Snowflake,
  ShieldCheck,
  Tv,
  Bath,
  Users,
  CheckCircle2,
  Sparkles,
  IndianRupee,
  MapPin,
  Star,
  ArrowUpRight,
  Search,
  SlidersHorizontal,
  Heart,
  Clock3,
  Coffee,
  Dumbbell,
  BookOpen,
  Car,
  Waves,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

/* ====================================================== */
/* 🔥 BOOK ROOM PAGE */
/* ====================================================== */

export default function BookRoomPage() {

  /* ==================================================== */
  /* 🔥 STATES */
/* ==================================================== */

  const [selectedRoom, setSelectedRoom] =
    useState<any>(null);

  const [bookingSuccess, setBookingSuccess] =
    useState(false);

  /* ==================================================== */
  /* 🔥 ROOMS */
/* ==================================================== */

  const rooms = [

    {
      id: 1,

      name: "Premium Deluxe Room",

      roomNo: "A-302",

      type: "Single Sharing",

      price: "₹8,500",

      rating: "4.9",

      floor: "2nd Floor",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

      status: "Available",

      description:
        "Luxury premium room with modern interiors, study space, smart lighting and attached washroom.",

      features: [

        "AC Room",

        "Study Table",

        "Private Washroom",

        "Balcony",

        "Smart TV",

        "High-Speed WiFi",
      ],

      facilities: [

        {
          icon: Wifi,
          name: "WiFi",
        },

        {
          icon: Snowflake,
          name: "AC",
        },

        {
          icon: Tv,
          name: "Smart TV",
        },

        {
          icon: Bath,
          name: "Bathroom",
        },
      ],
    },

    {
      id: 2,

      name: "Executive Sharing Room",

      roomNo: "B-210",

      type: "Double Sharing",

      price: "₹6,500",

      rating: "4.8",

      floor: "1st Floor",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

      status: "Few Left",

      description:
        "Comfortable double sharing room with premium interiors and modern facilities.",

      features: [

        "2 Beds",

        "WiFi",

        "Wardrobe",

        "Study Lamps",

        "Laundry Access",

      ],

      facilities: [

        {
          icon: Wifi,
          name: "WiFi",
        },

        {
          icon: Users,
          name: "2 Sharing",
        },

        {
          icon: Coffee,
          name: "Mess Access",
        },

        {
          icon: BookOpen,
          name: "Study Area",
        },
      ],
    },

    {
      id: 3,

      name: "Elite Student Suite",

      roomNo: "C-510",

      type: "Premium Suite",

      price: "₹12,000",

      rating: "5.0",

      floor: "5th Floor",

      image:
        "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1200&auto=format&fit=crop",

      status: "Luxury",

      description:
        "Ultra premium hostel suite with luxury furniture, gaming setup and private balcony.",

      features: [

        "Gaming Setup",

        "Luxury Bed",

        "Private Balcony",

        "Mini Fridge",

        "Smart Lights",

      ],

      facilities: [

        {
          icon: Wifi,
          name: "WiFi",
        },

        {
          icon: Dumbbell,
          name: "Gym",
        },

        {
          icon: Car,
          name: "Parking",
        },

        {
          icon: Waves,
          name: "Premium Access",
        },
      ],
    },
  ];

  /* ==================================================== */
  /* 🔥 BOOK ROOM */
/* ==================================================== */

  const handleBookRoom = (
    room: any
  ) => {

    setSelectedRoom(room);

    setBookingSuccess(true);

    setTimeout(() => {

      setBookingSuccess(false);

    }, 4000);
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

        {/* BACKGROUND */}

        <div className="
        absolute
        inset-0
        overflow-hidden
        ">

          {/* PURPLE */}

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

          {/* PINK */}

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
            tracking-[0.3em]
            text-gray-300
            mb-7
            ">

              <Sparkles
                size={13}
                className="
                text-purple-300
                "
              />

              Premium Hostel Rooms

            </div>

            {/* TITLE */}

            <h1 className="
            text-5xl
            sm:text-6xl
            xl:text-7xl
            font-black
            leading-none
            text-white
            mb-6
            ">

              Book Your

              <span className="
              block
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-yellow-300
              bg-clip-text
              text-transparent
              ">

                Dream Room

              </span>

            </h1>

            {/* TEXT */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-2xl
            ">

              Choose from luxury hostel rooms with premium facilities, high-speed WiFi, AC rooms, modern interiors and secure living environment.

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

            {/* CARD */}

            <div className="
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.05]
            p-6
            min-w-[170px]
            ">

              <p className="
              text-gray-400
              text-sm
              mb-3
              ">

                Available Rooms

              </p>

              <h2 className="
              text-white
              text-5xl
              font-black
              mb-2
              ">

                24

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-emerald-400
              text-sm
              ">

                <CheckCircle2
                  size={15}
                />

                Live Availability

              </div>

            </div>

            {/* CARD */}

            <div className="
            rounded-[28px]
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            p-6
            min-w-[170px]
            text-white
            shadow-[0_0_45px_rgba(168,85,247,0.35)]
            ">

              <p className="
              text-white/70
              text-sm
              mb-3
              ">

                Starting From

              </p>

              <h2 className="
              text-5xl
              font-black
              mb-2
              ">

                ₹6K

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-sm
              ">

                <Star
                  size={15}
                />

                Premium Living

              </div>

            </div>

          </div>

        </div>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 SEARCH */}
      {/* ================================================= */}

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

            placeholder="Search room type, floor, facilities..."

            className="
            w-full
            h-[62px]
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
            pl-14
            pr-5
            text-white
            placeholder:text-gray-500
            outline-none
            focus:border-purple-500/30
            transition-all
            duration-300
            "
          />

        </div>

        {/* FILTER */}

        <button className="
        h-[62px]
        px-7
        rounded-[24px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        text-white
        flex
        items-center
        justify-center
        gap-3
        hover:border-purple-500/20
        transition-all
        duration-300
        ">

          <SlidersHorizontal
            size={20}
          />

          Filters

        </button>

      </div>

      {/* ================================================= */}
      {/* 🔥 ROOMS */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-2
      gap-8
      ">

        {
          rooms.map(
            (room, i) => (

              <motion.div

                key={room.id}

                initial={{
                  opacity: 0,
                  y: 40,
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
                rounded-[40px]
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-3xl
                "
              >

                {/* IMAGE */}

                <div className="
                relative
                h-[300px]
                overflow-hidden
                ">

                  {/* IMG */}

                  <img

                    src={room.image}

                    alt={room.name}

                    className="
                    w-full
                    h-full
                    object-cover
                    transition-all
                    duration-700
                    hover:scale-110
                    "
                  />

                  {/* OVERLAY */}

                  <div className="
                  absolute
                  inset-0
                  bg-gradient-to-t
                  from-black
                  via-black/20
                  to-transparent
                  "></div>

                  {/* STATUS */}

                  <div className="
                  absolute
                  top-5
                  left-5
                  px-4
                  py-2
                  rounded-full
                  bg-emerald-500/90
                  text-white
                  text-xs
                  font-bold
                  uppercase
                  tracking-[0.2em]
                  backdrop-blur-xl
                  ">

                    {room.status}

                  </div>

                  {/* HEART */}

                  <button className="
                  absolute
                  top-5
                  right-5
                  w-12
                  h-12
                  rounded-2xl
                  bg-black/30
                  backdrop-blur-xl
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  hover:text-pink-400
                  transition-all
                  duration-300
                  ">

                    <Heart size={20} />

                  </button>

                  {/* ROOM DETAILS */}

                  <div className="
                  absolute
                  bottom-6
                  left-6
                  right-6
                  flex
                  items-end
                  justify-between
                  gap-5
                  ">

                    {/* LEFT */}

                    <div>

                      <h2 className="
                      text-white
                      text-3xl
                      font-black
                      mb-2
                      ">

                        {room.name}

                      </h2>

                      <div className="
                      flex
                      flex-wrap
                      items-center
                      gap-4
                      text-white/80
                      text-sm
                      ">

                        <div className="
                        flex
                        items-center
                        gap-2
                        ">

                          <MapPin
                            size={15}
                          />

                          {room.floor}

                        </div>

                        <div className="
                        flex
                        items-center
                        gap-2
                        ">

                          <BedDouble
                            size={15}
                          />

                          {room.type}

                        </div>

                      </div>

                    </div>

                    {/* PRICE */}

                    <div className="
                    text-right
                    ">

                      <p className="
                      text-white/70
                      text-sm
                      mb-1
                      ">

                        Monthly Rent

                      </p>

                      <h2 className="
                      text-white
                      text-4xl
                      font-black
                      ">

                        {room.price}

                      </h2>

                    </div>

                  </div>

                </div>

                {/* CONTENT */}

                <div className="
                p-7
                ">

                  {/* TOP */}

                  <div className="
                  flex
                  items-start
                  justify-between
                  gap-5
                  mb-6
                  ">

                    {/* LEFT */}

                    <div>

                      <div className="
                      flex
                      items-center
                      gap-3
                      mb-3
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
                        uppercase
                        tracking-[0.15em]
                        ">

                          {room.roomNo}

                        </div>

                        <div className="
                        flex
                        items-center
                        gap-1
                        text-yellow-300
                        text-sm
                        ">

                          <Star
                            size={15}
                            fill="currentColor"
                          />

                          {room.rating}

                        </div>

                      </div>

                      <p className="
                      text-gray-400
                      leading-relaxed
                      ">

                        {room.description}

                      </p>

                    </div>

                  </div>

                  {/* FEATURES */}

                  <div className="
                  flex
                  flex-wrap
                  gap-3
                  mb-7
                  ">

                    {
                      room.features.map(
                        (
                          feature,
                          idx
                        ) => (

                          <div

                            key={idx}

                            className="
                            px-4
                            py-2
                            rounded-full
                            border
                            border-white/10
                            bg-white/[0.04]
                            text-gray-300
                            text-sm
                            "
                          >

                            {feature}

                          </div>
                        )
                      )
                    }

                  </div>

                  {/* FACILITIES */}

                  <div className="
                  grid
                  grid-cols-2
                  sm:grid-cols-4
                  gap-4
                  mb-8
                  ">

                    {
                      room.facilities.map(
                        (
                          item,
                          idx
                        ) => {

                          const Icon =
                            item.icon;

                          return (

                            <div

                              key={idx}

                              className="
                              rounded-2xl
                              border
                              border-white/10
                              bg-white/[0.04]
                              p-4
                              flex
                              flex-col
                              items-center
                              justify-center
                              text-center
                              "
                            >

                              <div className="
                              w-12
                              h-12
                              rounded-2xl
                              bg-gradient-to-r
                              from-purple-500/20
                              to-pink-500/20
                              flex
                              items-center
                              justify-center
                              text-white
                              mb-3
                              ">

                                <Icon
                                  size={20}
                                />

                              </div>

                              <p className="
                              text-gray-300
                              text-sm
                              font-medium
                              ">

                                {item.name}

                              </p>

                            </div>
                          );
                        }
                      )
                    }

                  </div>

                  {/* BOTTOM */}

                  <div className="
                  flex
                  flex-col
                  sm:flex-row
                  sm:items-center
                  sm:justify-between
                  gap-5
                  ">

                    {/* LEFT */}

                    <div className="
                    flex
                    items-center
                    gap-3
                    text-emerald-400
                    ">

                      <CheckCircle2
                        size={18}
                      />

                      <span className="
                      text-sm
                      font-medium
                      ">

                        Room Available Now

                      </span>

                    </div>

                    {/* BUTTON */}

                    <button

                      onClick={() =>
                        handleBookRoom(
                          room
                        )
                      }

                      className="
                      group
                      relative
                      overflow-hidden
                      px-8
                      py-4
                      rounded-[22px]
                      bg-gradient-to-r
                      from-purple-500
                      via-pink-500
                      to-yellow-400
                      text-white
                      font-bold
                      shadow-[0_0_40px_rgba(168,85,247,0.35)]
                      hover:scale-[1.03]
                      transition-all
                      duration-300
                      "
                    >

                      {/* GLOW */}

                      <div className="
                      absolute
                      inset-0
                      bg-white/10
                      opacity-0
                      group-hover:opacity-100
                      transition
                      duration-300
                      "></div>

                      {/* CONTENT */}

                      <div className="
                      relative
                      z-10
                      flex
                      items-center
                      gap-3
                      ">

                        <IndianRupee
                          size={18}
                        />

                        Book Room

                        <ArrowUpRight
                          size={18}
                          className="
                          group-hover:-translate-y-1
                          group-hover:translate-x-1
                          transition-all
                          duration-300
                          "
                        />

                      </div>

                    </button>

                  </div>

                </div>

              </motion.div>
            )
          )
        }

      </div>

      {/* ================================================= */}
      {/* 🔥 SUCCESS */}
      {/* ================================================= */}

      {
        bookingSuccess && (

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

            {/* TOP */}

            <div className="
            flex
            items-start
            gap-5
            ">

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
              shadow-lg
              ">

                <CheckCircle2
                  size={28}
                />

              </div>

              {/* TEXT */}

              <div className="
              flex-1
              ">

                <h2 className="
                text-white
                text-2xl
                font-black
                mb-3
                ">

                  Booking Successful 🎉

                </h2>

                <p className="
                text-gray-300
                leading-relaxed
                mb-4
                ">

                  Your room booking request for

                  <span className="
                  text-emerald-400
                  font-semibold
                  ">

                    {" "}
                    {
                      selectedRoom?.name
                    }

                  </span>

                  {" "}has been submitted successfully.

                </p>

                <div className="
                flex
                items-center
                gap-3
                text-emerald-400
                text-sm
                ">

                  <Clock3
                    size={16}
                  />

                  Waiting for admin approval

                </div>

              </div>

            </div>

          </motion.div>
        )
      }

    </div>
  );
}