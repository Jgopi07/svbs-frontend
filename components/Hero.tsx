"use client";

import {
  motion,
} from "framer-motion";

import {
  ArrowRight,
  Play,
  Star,
  ShieldCheck,
  Wifi,
  Users,
  Sparkles,
  MapPin,
  Clock3,
  Building2,
  BedDouble,
  ChevronDown,
} from "lucide-react";

export default function Hero() {

  /* ====================================================== */
  /* 🔥 STATS */
  /* ====================================================== */

  const stats = [

    {
      number: "1000+",
      label: "Happy Students",
      icon: Users,
    },

    {
      number: "4.9★",
      label: "Average Rating",
      icon: Star,
    },

    {
      number: "24/7",
      label: "Security",
      icon: ShieldCheck,
    },

    {
      number: "99%",
      label: "Occupancy",
      icon: Building2,
    },
  ];

  /* ====================================================== */
  /* 🔥 FEATURES */
  /* ====================================================== */

  const features = [

    "Premium Hostel Living",
    "Fully Furnished Rooms",
    "High-Speed WiFi",
    "Daily Housekeeping",
    "Healthy Food",
    "Safe Environment",
  ];

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <section className="
    relative
    min-h-screen
    overflow-hidden
    flex
    items-center
    justify-center
    px-6
    pt-40
    pb-24
    ">

      {/* ================================================= */}
      {/* 🔥 BACKGROUND IMAGE */}
      {/* ================================================= */}

      <div className="
      absolute
      inset-0
      ">

        <img
          src="https://images.unsplash.com/photo-1555854877-bab0e564b8d5?q=80&w=1974&auto=format&fit=crop"
          alt="Hostel"
          className="
          w-full
          h-full
          object-cover
          scale-110
          animate-[slowZoom_20s_linear_infinite_alternate]
          "
        />

        {/* DARK OVERLAY */}

        <div className="
        absolute
        inset-0
        bg-black/70
        "></div>

        {/* GRADIENT */}

        <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/40
        via-[#050816]/70
        to-[#050816]
        "></div>

      </div>

      {/* ================================================= */}
      {/* 🔥 GRID */}
      {/* ================================================= */}

      <div className="
      absolute
      inset-0
      opacity-[0.04]
      [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
      [background-size:70px_70px]
      "></div>

      {/* ================================================= */}
      {/* 🔥 GLOW EFFECTS */}
      {/* ================================================= */}

      <div className="
      absolute
      top-[-200px]
      left-[-200px]
      w-[650px]
      h-[650px]
      bg-purple-500/20
      blur-[160px]
      rounded-full
      animate-pulse
      "></div>

      <div className="
      absolute
      bottom-[-250px]
      right-[-250px]
      w-[650px]
      h-[650px]
      bg-pink-500/20
      blur-[160px]
      rounded-full
      animate-pulse
      "></div>

      <div className="
      absolute
      top-[40%]
      left-[45%]
      w-[400px]
      h-[400px]
      bg-cyan-500/10
      blur-[140px]
      rounded-full
      "></div>

      {/* ================================================= */}
      {/* 🔥 MAIN CONTENT */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      max-w-7xl
      mx-auto
      w-full
      ">

        <div className="
        grid
        lg:grid-cols-[1.2fr_0.8fr]
        gap-20
        items-center
        ">

          {/* ============================================= */}
          {/* 🔥 LEFT SIDE */}
          {/* ============================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 70,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.9,
            }}
          >

            {/* BADGE */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.9,
              }}
              animate={{
                opacity: 1,
                scale: 1,
              }}
              transition={{
                delay: 0.2,
              }}
              className="
              inline-flex
              items-center
              gap-3
              px-6
              py-3
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              backdrop-blur-2xl
              mb-8
              shadow-[0_10px_40px_rgba(0,0,0,0.4)]
              "
            >

              <div className="
              w-3
              h-3
              rounded-full
              bg-green-400
              animate-pulse
              shadow-[0_0_20px_rgba(74,222,128,0.8)]
              "></div>

              <span className="
              text-sm
              tracking-wide
              text-gray-300
              ">

                NOW BOOKING FOR THE NEW SEMESTER

              </span>

              <Sparkles
                size={16}
                className="text-yellow-300"
              />

            </motion.div>

            {/* HEADING */}

            <motion.h1
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.3,
                duration: 0.8,
              }}
              className="
              text-5xl
              md:text-7xl
              xl:text-[95px]
              font-black
              leading-[0.95]
              tracking-[-0.04em]
              text-white
              mb-8
              "
            >

              Find Your <br />

              <span className="
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-orange-300
              bg-clip-text
              text-transparent
              ">

                Perfect Stay

              </span>

            </motion.h1>

            {/* DESCRIPTION */}

            <motion.p
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.5,
              }}
              className="
              text-lg
              md:text-xl
              text-gray-400
              leading-relaxed
              max-w-2xl
              mb-10
              "
            >

              Comfortable, secure, and modern hostel living designed
              for students who refuse to compromise on quality,
              productivity, and lifestyle.

            </motion.p>

            {/* FEATURES */}

            <motion.div
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              transition={{
                delay: 0.7,
              }}
              className="
              flex
              flex-wrap
              gap-4
              mb-12
              "
            >

              {features.map((item, i) => (

                <div
                  key={i}
                  className="
                  flex
                  items-center
                  gap-3
                  px-5
                  py-3
                  rounded-full
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  hover:bg-white/[0.08]
                  transition-all
                  duration-300
                  group
                  "
                >

                  <div className="
                  w-2
                  h-2
                  rounded-full
                  bg-gradient-to-r
                  from-purple-400
                  to-pink-400
                  group-hover:scale-125
                  transition
                  "></div>

                  <span className="
                  text-sm
                  text-gray-300
                  group-hover:text-white
                  transition
                  ">

                    {item}

                  </span>

                </div>
              ))}

            </motion.div>

            {/* BUTTONS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 30,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 0.8,
              }}
              className="
              flex
              flex-wrap
              items-center
              gap-5
              mb-16
              "
            >

              {/* PRIMARY */}

              <button className="
              relative
              overflow-hidden
              px-10
              py-5
              rounded-full
              text-white
              font-semibold
              text-lg
              group
              shadow-[0_15px_50px_rgba(168,85,247,0.45)]
              ">

                {/* BG */}

                <span className="
                absolute
                inset-0
                bg-gradient-to-r
                from-purple-500
                via-pink-500
                to-orange-400
                "></span>

                {/* GLOW */}

                <span className="
                absolute
                inset-0
                opacity-0
                group-hover:opacity-100
                transition
                duration-500
                blur-2xl
                bg-gradient-to-r
                from-orange-400
                via-pink-500
                to-purple-500
                "></span>

                {/* SHINE */}

                <span className="
                absolute
                -left-20
                top-0
                w-20
                h-full
                bg-white/30
                skew-x-12
                blur-md
                group-hover:left-[130%]
                transition-all
                duration-1000
                "></span>

                {/* TEXT */}

                <span className="
                relative
                z-10
                flex
                items-center
                gap-3
                ">

                  Book a Room

                  <ArrowRight
                    size={22}
                    className="
                    group-hover:translate-x-1
                    transition
                    "
                  />

                </span>

              </button>

              {/* SECONDARY */}

              <button className="
              group
              flex
              items-center
              gap-4
              px-8
              py-5
              rounded-full
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              text-gray-300
              hover:text-white
              hover:bg-white/[0.08]
              transition-all
              duration-300
              ">

                <div className="
                w-12
                h-12
                rounded-full
                bg-white/10
                flex
                items-center
                justify-center
                group-hover:bg-white/20
                transition
                ">

                  <Play
                    size={18}
                    fill="currentColor"
                  />

                </div>

                Explore Rooms

              </button>

            </motion.div>

            {/* STATS */}

            <motion.div
              initial={{
                opacity: 0,
                y: 40,
              }}
              animate={{
                opacity: 1,
                y: 0,
              }}
              transition={{
                delay: 1,
              }}
              className="
              grid
              grid-cols-2
              md:grid-cols-4
              gap-5
              "
            >

              {stats.map((item, i) => {

                const Icon =
                  item.icon;

                return (

                  <div
                    key={i}
                    className="
                    relative
                    rounded-[30px]
                    border
                    border-white/10
                    bg-white/[0.05]
                    backdrop-blur-2xl
                    p-6
                    overflow-hidden
                    group
                    hover:-translate-y-2
                    transition-all
                    duration-500
                    hover:shadow-[0_20px_70px_rgba(0,0,0,0.6)]
                    "
                  >

                    {/* GLOW */}

                    <div className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    ">

                      <div className="
                      absolute
                      -inset-[1px]
                      rounded-[30px]
                      bg-gradient-to-r
                      from-purple-500/20
                      via-pink-500/20
                      to-orange-400/20
                      blur-xl
                      "></div>

                    </div>

                    {/* ICON */}

                    <div className="
                    relative
                    w-12
                    h-12
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500/20
                    to-pink-500/20
                    flex
                    items-center
                    justify-center
                    mb-5
                    group-hover:scale-110
                    transition
                    duration-500
                    ">

                      <Icon
                        size={22}
                        className="text-white"
                      />

                    </div>

                    {/* NUMBER */}

                    <h3 className="
                    relative
                    text-3xl
                    font-bold
                    text-white
                    mb-2
                    ">

                      {item.number}

                    </h3>

                    {/* LABEL */}

                    <p className="
                    relative
                    text-sm
                    text-gray-400
                    ">

                      {item.label}

                    </p>

                  </div>
                );
              })}

            </motion.div>

          </motion.div>

          {/* ============================================= */}
          {/* 🔥 RIGHT SIDE */}
          {/* ============================================= */}

          <motion.div
            initial={{
              opacity: 0,
              x: 80,
            }}
            animate={{
              opacity: 1,
              x: 0,
            }}
            transition={{
              duration: 1,
            }}
            className="
            relative
            hidden
            lg:block
            "
          >

            {/* MAIN CARD */}

            <div className="
            relative
            rounded-[40px]
            overflow-hidden
            border
            border-white/10
            bg-white/[0.05]
            backdrop-blur-3xl
            shadow-[0_30px_120px_rgba(0,0,0,0.7)]
            ">

              {/* IMAGE */}

              <div className="
              relative
              h-[650px]
              overflow-hidden
              ">

                <img
                  src="https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=1974&auto=format&fit=crop"
                  alt="Room"
                  className="
                  w-full
                  h-full
                  object-cover
                  hover:scale-110
                  transition
                  duration-[4000ms]
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

              </div>

              {/* FLOATING CARD */}

              <motion.div
                animate={{
                  y: [0, -10, 0],
                }}
                transition={{
                  repeat: Infinity,
                  duration: 4,
                }}
                className="
                absolute
                top-8
                right-8
                rounded-[30px]
                border
                border-white/10
                bg-black/40
                backdrop-blur-2xl
                px-6
                py-5
                "
              >

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
                  to-pink-500
                  flex
                  items-center
                  justify-center
                  ">

                    <BedDouble
                      size={24}
                      className="text-white"
                    />

                  </div>

                  <div>

                    <p className="
                    text-sm
                    text-gray-400
                    mb-1
                    ">

                      Available Rooms

                    </p>

                    <h3 className="
                    text-3xl
                    font-bold
                    text-white
                    ">

                      28

                    </h3>

                  </div>

                </div>

              </motion.div>

              {/* BOTTOM CARD */}

              <div className="
              absolute
              bottom-0
              left-0
              w-full
              p-8
              ">

                <div className="
                rounded-[30px]
                border
                border-white/10
                bg-black/40
                backdrop-blur-2xl
                p-6
                ">

                  <div className="
                  flex
                  items-center
                  justify-between
                  mb-6
                  ">

                    <div>

                      <p className="
                      text-gray-400
                      text-sm
                      mb-2
                      ">

                        Premium Hostel

                      </p>

                      <h3 className="
                      text-3xl
                      font-bold
                      text-white
                      ">

                        SVBS Hostel

                      </h3>

                    </div>

                    <div className="
                    flex
                    items-center
                    gap-2
                    px-4
                    py-2
                    rounded-full
                    bg-emerald-500/10
                    border
                    border-emerald-500/20
                    ">

                      <div className="
                      w-2
                      h-2
                      rounded-full
                      bg-emerald-400
                      animate-pulse
                      "></div>

                      <span className="
                      text-sm
                      text-emerald-300
                      ">

                        Open

                      </span>

                    </div>

                  </div>

                  {/* FEATURES */}

                  <div className="
                  grid
                  grid-cols-2
                  gap-4
                  ">

                    {[
                      {
                        icon: Wifi,
                        text: "Fast WiFi",
                      },

                      {
                        icon: ShieldCheck,
                        text: "Secure Stay",
                      },

                      {
                        icon: MapPin,
                        text: "Prime Location",
                      },

                      {
                        icon: Clock3,
                        text: "24/7 Access",
                      },
                    ].map((item, i) => {

                      const Icon =
                        item.icon;

                      return (

                        <div
                          key={i}
                          className="
                          flex
                          items-center
                          gap-3
                          px-4
                          py-3
                          rounded-2xl
                          bg-white/[0.05]
                          border
                          border-white/10
                          "
                        >

                          <Icon
                            size={18}
                            className="
                            text-purple-300
                            "
                          />

                          <span className="
                          text-sm
                          text-gray-300
                          ">

                            {item.text}

                          </span>

                        </div>
                      );
                    })}

                  </div>

                </div>

              </div>

            </div>

          </motion.div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 SCROLL INDICATOR */}
      {/* ================================================= */}

      <motion.div
        animate={{
          y: [0, 10, 0],
        }}
        transition={{
          repeat: Infinity,
          duration: 2,
        }}
        className="
        absolute
        bottom-10
        left-1/2
        -translate-x-1/2
        z-20
        "
      >

        <div className="
        flex
        flex-col
        items-center
        gap-3
        text-gray-400
        ">

          <span className="
          text-xs
          tracking-[0.3em]
          ">

            SCROLL

          </span>

          <ChevronDown
            size={20}
            className="animate-bounce"
          />

        </div>

      </motion.div>

    </section>
  );
}