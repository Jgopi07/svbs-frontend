"use client";

import {
  motion,
} from "framer-motion";

import {
  Wifi,
  ShieldCheck,
  Sparkles,
  BookOpen,
  Utensils,
  Droplets,
  Bike,
  Building2,
  Star,
  Users,
  Clock3,
  BadgeCheck,
  ArrowUpRight,
} from "lucide-react";

export default function TrustedStrip() {

  /* ====================================================== */
  /* 🔥 ITEMS */
  /* ====================================================== */

  const items = [

    {
      name: "Clean Rooms",
      icon: Sparkles,
      color:
        "from-purple-500 to-pink-500",
    },

    {
      name: "High-Speed WiFi",
      icon: Wifi,
      color:
        "from-cyan-400 to-blue-500",
    },

    {
      name: "24/7 Security",
      icon: ShieldCheck,
      color:
        "from-emerald-400 to-green-500",
    },

    {
      name: "Study Environment",
      icon: BookOpen,
      color:
        "from-orange-400 to-pink-500",
    },

    {
      name: "Affordable Pricing",
      icon: BadgeCheck,
      color:
        "from-yellow-400 to-orange-500",
    },

    {
      name: "Hot Meals Daily",
      icon: Utensils,
      color:
        "from-red-400 to-orange-500",
    },

    {
      name: "RO Water Facility",
      icon: Droplets,
      color:
        "from-sky-400 to-cyan-500",
    },

    {
      name: "Laundry Service",
      icon: Sparkles,
      color:
        "from-fuchsia-500 to-purple-500",
    },

    {
      name: "Bike Parking",
      icon: Bike,
      color:
        "from-indigo-500 to-purple-500",
    },

    {
      name: "Modern Hostel",
      icon: Building2,
      color:
        "from-pink-500 to-rose-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <section className="
    relative
    py-24
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
      [background-size:60px_60px]
      "></div>

      {/* GLOW */}

      <div className="
      absolute
      top-[-150px]
      left-[-150px]
      w-[450px]
      h-[450px]
      bg-purple-500/20
      blur-[140px]
      rounded-full
      animate-pulse
      "></div>

      <div className="
      absolute
      bottom-[-150px]
      right-[-150px]
      w-[450px]
      h-[450px]
      bg-pink-500/20
      blur-[140px]
      rounded-full
      animate-pulse
      "></div>

      {/* ================================================= */}
      {/* 🔥 TOP CONTENT */}
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
        px-6
        mb-14
        "
      >

        <div className="
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-8
        ">

          {/* LEFT */}

          <div>

            <p className="
            text-sm
            tracking-[0.35em]
            text-gray-400
            mb-4
            ">

              TRUSTED HOSTEL EXPERIENCE

            </p>

            <h2 className="
            text-4xl
            md:text-5xl
            font-bold
            text-white
            leading-tight
            ">

              Trusted by{" "}

              <span className="
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-orange-300
              bg-clip-text
              text-transparent
              ">

                1000+

              </span>

              <br />

              students across the city.

            </h2>

          </div>

          {/* RIGHT */}

          <div className="
          flex
          flex-wrap
          justify-center
          gap-4
          ">

            {[
              {
                icon: Users,
                text: "1000+ Students",
              },

              {
                icon: Star,
                text: "4.9 Rating",
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
                  "
                >

                  <Icon
                    size={18}
                    className="text-purple-300"
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

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 MARQUEE */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      overflow-hidden
      ">

        {/* LEFT FADE */}

        <div className="
        absolute
        left-0
        top-0
        w-40
        h-full
        bg-gradient-to-r
        from-[#050816]
        to-transparent
        z-20
        "></div>

        {/* RIGHT FADE */}

        <div className="
        absolute
        right-0
        top-0
        w-40
        h-full
        bg-gradient-to-l
        from-[#050816]
        to-transparent
        z-20
        "></div>

        {/* TRACK */}

        <div className="
        flex
        gap-8
        whitespace-nowrap
        animate-[marquee_28s_linear_infinite]
        hover:[animation-play-state:paused]
        w-max
        px-6
        ">

          {[...items, ...items, ...items].map(
            (item, i) => {

              const Icon =
                item.icon;

              return (

                <motion.div
                  key={i}
                  whileHover={{
                    y: -8,
                    scale: 1.04,
                  }}
                  transition={{
                    duration: 0.25,
                  }}
                  className="
                  relative
                  group
                  flex
                  items-center
                  gap-5
                  px-7
                  py-5
                  rounded-[28px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  overflow-hidden
                  min-w-fit
                  hover:border-purple-500/30
                  transition-all
                  duration-500
                  hover:shadow-[0_20px_80px_rgba(0,0,0,0.7)]
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

                    <div className={`
                    absolute
                    -inset-[1px]
                    rounded-[28px]
                    bg-gradient-to-r
                    ${item.color}
                    opacity-20
                    blur-2xl
                    `}></div>

                  </div>

                  {/* ICON */}

                  <div className={`
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  ${item.color}
                  flex
                  items-center
                  justify-center
                  shadow-[0_10px_40px_rgba(168,85,247,0.35)]
                  group-hover:scale-110
                  transition
                  duration-500
                  `}>

                    <Icon
                      size={24}
                      className="
                      text-white
                      "
                    />

                  </div>

                  {/* TEXT */}

                  <div className="
                  relative
                  z-10
                  ">

                    <h3 className="
                    text-lg
                    font-semibold
                    text-white
                    mb-1
                    group-hover:text-purple-300
                    transition
                    ">

                      {item.name}

                    </h3>

                    <p className="
                    text-sm
                    text-gray-400
                    ">

                      Premium Hostel Feature

                    </p>

                  </div>

                  {/* BUTTON */}

                  <button className="
                  relative
                  w-12
                  h-12
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  flex
                  items-center
                  justify-center
                  text-gray-300
                  hover:text-white
                  hover:bg-white/[0.08]
                  transition-all
                  duration-300
                  group/button
                  overflow-hidden
                  ">

                    <span className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover/button:opacity-100
                    transition
                    duration-500
                    bg-gradient-to-r
                    from-purple-500/10
                    via-pink-500/10
                    to-orange-400/10
                    blur-xl
                    "></span>

                    <ArrowUpRight
                      size={18}
                      className="
                      relative
                      z-10
                      group-hover/button:translate-x-1
                      group-hover/button:-translate-y-1
                      transition
                      "
                    />

                  </button>

                </motion.div>
              );
            }
          )}

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 BOTTOM INFO STRIP */}
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
          delay: 0.2,
        }}
        className="
        relative
        z-10
        max-w-7xl
        mx-auto
        px-6
        mt-16
        "
      >

        <div className="
        rounded-[34px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        px-8
        py-7
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-6
        overflow-hidden
        relative
        ">

          {/* GLOW */}

          <div className="
          absolute
          inset-0
          opacity-40
          ">

            <div className="
            absolute
            top-0
            left-0
            w-60
            h-60
            bg-purple-500/20
            blur-[120px]
            rounded-full
            "></div>

            <div className="
            absolute
            bottom-0
            right-0
            w-60
            h-60
            bg-pink-500/20
            blur-[120px]
            rounded-full
            "></div>

          </div>

          {/* LEFT */}

          <div className="
          relative
          z-10
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
            via-pink-500
            to-orange-400
            flex
            items-center
            justify-center
            shadow-[0_10px_40px_rgba(168,85,247,0.45)]
            ">

              <Star
                size={28}
                className="text-white"
                fill="currentColor"
              />

            </div>

            <div>

              <h3 className="
              text-2xl
              font-bold
              text-white
              mb-1
              ">

                Premium Student Living

              </h3>

              <p className="
              text-gray-400
              ">

                Comfortable • Secure • Modern • Affordable

              </p>

            </div>

          </div>

          {/* RIGHT */}

          <div className="
          relative
          z-10
          flex
          flex-wrap
          justify-center
          gap-4
          ">

            {[
              "Fully Furnished",
              "Prime Location",
              "Student Friendly",
              "Modern Amenities",
            ].map((item, i) => (

              <div
                key={i}
                className="
                px-5
                py-3
                rounded-full
                border
                border-white/10
                bg-black/20
                backdrop-blur-xl
                text-sm
                text-gray-300
                hover:text-white
                hover:bg-white/[0.08]
                transition-all
                duration-300
                "
              >

                {item}

              </div>
            ))}

          </div>

        </div>

      </motion.div>

    </section>
  );
}