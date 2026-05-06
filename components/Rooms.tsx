"use client";

import {
  motion,
} from "framer-motion";

import {
  BedDouble,
  Users,
  Bath,
  Wifi,
  ShieldCheck,
  Sparkles,
  ArrowRight,
  Star,
  Check,
  Coffee,
  LampDesk,
  Building2,
} from "lucide-react";

export default function Rooms() {

  /* ====================================================== */
  /* 🔥 ROOM DATA */
  /* ====================================================== */

  const rooms = [

    {
      title: "Single Sharing",

      subtitle:
        "Private premium room for maximum comfort and productivity.",

      price: "₹12,500",

      image:
        "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=1200&auto=format&fit=crop",

      tag: "PREMIUM",

      rating: "4.9",

      gradient:
        "from-purple-500 via-pink-500 to-orange-400",

      features: [
        "Private Bed",
        "Study Desk",
        "Attached Bath",
        "Wardrobe",
        "High-Speed WiFi",
        "Daily Cleaning",
      ],

      icons: [
        BedDouble,
        LampDesk,
        Bath,
        Building2,
        Wifi,
        Sparkles,
      ],
    },

    {
      title: "Double Sharing",

      subtitle:
        "Balanced comfort and affordability for students.",

      price: "₹8,900",

      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=1200&auto=format&fit=crop",

      tag: "MOST POPULAR",

      popular: true,

      rating: "4.8",

      gradient:
        "from-fuchsia-500 via-pink-500 to-orange-400",

      features: [
        "Twin Beds",
        "Twin Desks",
        "Attached Bath",
        "Balcony View",
        "WiFi Included",
        "Housekeeping",
      ],

      icons: [
        Users,
        LampDesk,
        Bath,
        Coffee,
        Wifi,
        Sparkles,
      ],
    },

    {
      title: "Triple Sharing",

      subtitle:
        "Budget-friendly option with premium facilities included.",

      price: "₹6,500",

      image:
        "https://images.unsplash.com/photo-1595526114035-0d45ed16cfbf?q=80&w=1200&auto=format&fit=crop",

      tag: "AFFORDABLE",

      rating: "4.7",

      gradient:
        "from-orange-400 via-pink-500 to-purple-500",

      features: [
        "3 Beds",
        "Storage Lockers",
        "Attached Bath",
        "Window View",
        "RO Water",
        "Laundry Support",
      ],

      icons: [
        Users,
        ShieldCheck,
        Bath,
        Sparkles,
        Wifi,
        Coffee,
      ],
    },
  ];

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <section className="
    relative
    py-36
    px-6
    overflow-hidden
    ">

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      <div className="
      absolute
      inset-0
      bg-gradient-to-b
      from-transparent
      via-purple-900/10
      to-transparent
      "></div>

      {/* GRID */}

      <div className="
      absolute
      inset-0
      opacity-[0.03]
      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      [background-size:70px_70px]
      "></div>

      {/* GLOW */}

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

      {/* ================================================= */}
      {/* 🔥 HEADING */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        transition={{
          duration: 0.7,
        }}
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        mb-20
        "
      >

        <div className="
        flex
        flex-col
        lg:flex-row
        items-start
        justify-between
        gap-10
        ">

          {/* LEFT */}

          <div>

            <p className="
            text-sm
            tracking-[0.35em]
            text-gray-400
            mb-5
            ">

              ROOM COLLECTION

            </p>

            <h2 className="
            text-5xl
            md:text-7xl
            font-bold
            text-white
            leading-[1.1]
            max-w-4xl
            ">

              Pick the room{" "}

              <span className="
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-orange-300
              bg-clip-text
              text-transparent
              ">

                that matches

              </span>

              <br />

              your lifestyle.

            </h2>

          </div>

          {/* RIGHT */}

          <div className="
          max-w-md
          ">

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            mb-8
            ">

              Designed for students who expect more than
              just a place to stay. Every room combines
              comfort, functionality, and premium interiors.

            </p>

            {/* STATS */}

            <div className="
            flex
            flex-wrap
            gap-4
            ">

              {[
                "100% Furnished",
                "Daily Cleaning",
                "High-Speed WiFi",
              ].map((item, i) => (

                <div
                  key={i}
                  className="
                  px-5
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  text-sm
                  text-gray-300
                  "
                >

                  {item}

                </div>
              ))}

            </div>

          </div>

        </div>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 ROOM CARDS */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      grid
      md:grid-cols-2
      xl:grid-cols-3
      gap-10
      max-w-7xl
      mx-auto
      ">

        {rooms.map((room, i) => (

          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 80,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              duration: 0.7,
              delay: i * 0.15,
            }}
            className="
            relative
            rounded-[34px]
            overflow-hidden
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            group
            hover:-translate-y-4
            transition-all
            duration-700
            hover:shadow-[0_30px_100px_rgba(0,0,0,0.8)]
            "
          >

            {/* ========================================= */}
            {/* 🔥 IMAGE */}
            {/* ========================================= */}

            <div className="
            relative
            h-[340px]
            overflow-hidden
            ">

              <img
                src={room.image}
                alt={room.title}
                className="
                w-full
                h-full
                object-cover
                group-hover:scale-110
                transition
                duration-[1800ms]
                "
              />

              {/* OVERLAY */}

              <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-black
              via-black/60
              to-transparent
              "></div>

              {/* TOP BAR */}

              <div className="
              absolute
              top-5
              left-5
              right-5
              flex
              items-center
              justify-between
              ">

                {/* TAG */}

                <div className={`
                px-4
                py-2
                rounded-full
                text-xs
                font-semibold
                tracking-wider
                text-white
                bg-gradient-to-r
                ${room.gradient}
                shadow-xl
                `}>

                  {room.tag}

                </div>

                {/* RATING */}

                <div className="
                flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-black/40
                backdrop-blur-xl
                border
                border-white/10
                text-white
                text-sm
                ">

                  <Star
                    size={15}
                    className="
                    text-yellow-400
                    fill-yellow-400
                    "
                  />

                  {room.rating}

                </div>

              </div>

              {/* TITLE */}

              <div className="
              absolute
              bottom-6
              left-6
              right-6
              ">

                <h3 className="
                text-3xl
                font-bold
                text-white
                mb-3
                ">

                  {room.title}

                </h3>

                <p className="
                text-gray-300
                leading-relaxed
                ">

                  {room.subtitle}

                </p>

              </div>

            </div>

            {/* ========================================= */}
            {/* 🔥 CONTENT */}
            {/* ========================================= */}

            <div className="
            p-8
            ">

              {/* PRICE */}

              <div className="
              flex
              items-end
              gap-2
              mb-8
              ">

                <h4 className={`
                text-5xl
                font-bold
                bg-gradient-to-r
                ${room.gradient}
                bg-clip-text
                text-transparent
                `}>

                  {room.price}

                </h4>

                <span className="
                text-gray-400
                mb-2
                ">

                  / month

                </span>

              </div>

              {/* FEATURES */}

              <div className="
              grid
              grid-cols-2
              gap-4
              mb-8
              ">

                {room.features.map((feature, idx) => {

                  const Icon =
                    room.icons[idx];

                  return (

                    <div
                      key={idx}
                      className="
                      flex
                      items-center
                      gap-3
                      rounded-2xl
                      border
                      border-white/10
                      bg-white/[0.03]
                      p-4
                      "
                    >

                      <div className={`
                      w-10
                      h-10
                      rounded-xl
                      bg-gradient-to-r
                      ${room.gradient}
                      flex
                      items-center
                      justify-center
                      shadow-lg
                      `}>

                        <Icon
                          size={18}
                          className="text-white"
                        />

                      </div>

                      <span className="
                      text-sm
                      text-gray-300
                      leading-snug
                      ">

                        {feature}

                      </span>

                    </div>
                  );
                })}

              </div>

              {/* BUTTONS */}

              <div className="
              flex
              gap-4
              ">

                {/* PRIMARY */}

                <button className={`
                relative
                overflow-hidden
                flex-1
                py-4
                rounded-2xl
                text-white
                font-semibold
                group/btn
                bg-gradient-to-r
                ${room.gradient}
                shadow-[0_10px_40px_rgba(168,85,247,0.35)]
                `}>

                  {/* SHINE */}

                  <span className="
                  absolute
                  -left-20
                  top-0
                  h-full
                  w-20
                  bg-white/30
                  skew-x-12
                  blur-md
                  group-hover/btn:left-[130%]
                  transition-all
                  duration-1000
                  "></span>

                  <span className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  gap-3
                  ">

                    Book Room

                    <ArrowRight size={18} />

                  </span>

                </button>

                {/* SECONDARY */}

                <button className="
                px-6
                rounded-2xl
                border
                border-white/10
                bg-white/[0.04]
                text-gray-300
                hover:bg-white/[0.08]
                hover:text-white
                transition
                ">

                  View

                </button>

              </div>

            </div>

            {/* ========================================= */}
            {/* 🔥 HOVER GLOW */}
            {/* ========================================= */}

            <div className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-700
            pointer-events-none
            ">

              <div className={`
              absolute
              -inset-[1px]
              rounded-[34px]
              bg-gradient-to-r
              ${room.gradient}
              opacity-20
              blur-2xl
              `}></div>

            </div>

          </motion.div>
        ))}

      </div>

    </section>
  );
}