"use client";

import {
  motion,
} from "framer-motion";

import {
  Wifi,
  Utensils,
  Droplets,
  ShieldCheck,
  BookOpen,
  Sparkles,
  Bike,
  WashingMachine,
  ArrowUpRight,
  Star,
  Clock3,
  Users,
  Building2,
  BadgeCheck,
  Coffee,
} from "lucide-react";

export default function Facilities() {

  /* ====================================================== */
  /* 🔥 FACILITIES DATA */
  /* ====================================================== */

  const items = [

    {
      name: "High-Speed WiFi",

      desc:
        "Ultra-fast internet connectivity across every room and common area for study, streaming, and productivity.",

      icon: Wifi,

      gradient:
        "from-purple-500 via-pink-500 to-orange-400",

      stats:
        "300 Mbps",

      tag:
        "MOST USED",
    },

    {
      name: "24/7 Security",

      desc:
        "Advanced CCTV monitoring, secured entry systems, and hostel staff ensuring complete student safety.",

      icon: ShieldCheck,

      gradient:
        "from-emerald-400 via-cyan-400 to-blue-500",

      stats:
        "24/7",

      tag:
        "SAFE",
    },

    {
      name: "Laundry Service",

      desc:
        "Convenient washing and drying facilities available weekly with hygienic maintenance support.",

      icon: WashingMachine,

      gradient:
        "from-pink-500 via-fuchsia-500 to-purple-500",

      stats:
        "Weekly",

      tag:
        "PREMIUM",
    },

    {
      name: "Daily Mess",

      desc:
        "Fresh and hygienic breakfast, lunch, and dinner prepared daily with quality ingredients.",

      icon: Utensils,

      gradient:
        "from-orange-400 via-red-400 to-pink-500",

      stats:
        "3 Meals",

      tag:
        "HEALTHY",
    },

    {
      name: "Study Rooms",

      desc:
        "Peaceful and distraction-free learning spaces built for focused preparation and productivity.",

      icon: BookOpen,

      gradient:
        "from-blue-500 via-cyan-500 to-teal-400",

      stats:
        "Silent Zone",

      tag:
        "TOP RATED",
    },

    {
      name: "Daily Housekeeping",

      desc:
        "Professional cleaning and maintenance services to keep every room fresh and organized.",

      icon: Sparkles,

      gradient:
        "from-yellow-400 via-orange-400 to-pink-500",

      stats:
        "Daily",

      tag:
        "CLEAN",
    },

    {
      name: "RO Water Facility",

      desc:
        "Clean and purified drinking water available on every floor for a healthy hostel experience.",

      icon: Droplets,

      gradient:
        "from-cyan-400 via-sky-500 to-indigo-500",

      stats:
        "24/7 Water",

      tag:
        "PURE",
    },

    {
      name: "Bike Parking",

      desc:
        "Safe and spacious parking area with secured entry for student vehicles and bikes.",

      icon: Bike,

      gradient:
        "from-violet-500 via-purple-500 to-pink-500",

      stats:
        "Secure",

      tag:
        "FREE",
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
          y: 50,
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
        mb-24
        "
      >

        <div className="
        flex
        flex-col
        lg:flex-row
        justify-between
        gap-12
        ">

          {/* LEFT */}

          <div>

            <p className="
            text-sm
            tracking-[0.35em]
            text-gray-400
            mb-5
            ">

              PREMIUM FACILITIES

            </p>

            <h2 className="
            text-5xl
            md:text-7xl
            font-bold
            text-white
            leading-[1.1]
            max-w-4xl
            ">

              Everything you need{" "}

              <span className="
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-orange-300
              bg-clip-text
              text-transparent
              ">

                for a smarter

              </span>

              <br />

              student lifestyle.

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

              Designed to provide productivity,
              comfort, convenience, and safety —
              all inside one premium student hostel.

            </p>

            {/* BADGES */}

            <div className="
            flex
            flex-wrap
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
                  icon: Building2,
                  text: "Modern Campus",
                },
              ].map((item, i) => {

                const Icon = item.icon;

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
                    "
                  >

                    <Icon
                      size={16}
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

        </div>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 GRID */}
      {/* ================================================= */}

      <div className="
      relative
      z-10
      grid
      sm:grid-cols-2
      xl:grid-cols-4
      gap-8
      max-w-7xl
      mx-auto
      ">

        {items.map((item, i) => {

          const Icon =
            item.icon;

          return (

            <motion.div
              key={i}
              initial={{
                opacity: 0,
                y: 70,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                delay: i * 0.08,
                duration: 0.6,
              }}
              className="
              relative
              group
              rounded-[34px]
              overflow-hidden
              border
              border-white/10
              bg-white/[0.04]
              backdrop-blur-2xl
              p-8
              hover:-translate-y-4
              transition-all
              duration-700
              hover:border-purple-500/30
              hover:shadow-[0_30px_100px_rgba(0,0,0,0.8)]
              "
            >

              {/* ========================================= */}
              {/* 🔥 TOP BAR */}
              {/* ========================================= */}

              <div className="
              flex
              items-center
              justify-between
              mb-8
              ">

                {/* ICON */}

                <div className={`
                relative
                w-16
                h-16
                rounded-2xl
                bg-gradient-to-r
                ${item.gradient}
                flex
                items-center
                justify-center
                shadow-[0_10px_40px_rgba(168,85,247,0.35)]
                group-hover:scale-110
                transition
                duration-500
                `}>

                  <Icon
                    size={28}
                    className="
                    text-white
                    "
                  />

                </div>

                {/* TAG */}

                <div className="
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-black/20
                backdrop-blur-xl
                text-[11px]
                font-semibold
                tracking-wider
                text-gray-300
                ">

                  {item.tag}

                </div>

              </div>

              {/* ========================================= */}
              {/* 🔥 TITLE */}
              {/* ========================================= */}

              <h3 className="
              text-2xl
              font-bold
              text-white
              mb-4
              leading-tight
              group-hover:text-purple-300
              transition
              ">

                {item.name}

              </h3>

              {/* ========================================= */}
              {/* 🔥 DESCRIPTION */}
              {/* ========================================= */}

              <p className="
              text-gray-400
              leading-relaxed
              mb-8
              group-hover:text-gray-300
              transition
              ">

                {item.desc}

              </p>

              {/* ========================================= */}
              {/* 🔥 STATS */}
              {/* ========================================= */}

              <div className="
              flex
              items-center
              justify-between
              pt-6
              border-t
              border-white/10
              ">

                <div>

                  <p className="
                  text-sm
                  text-gray-500
                  mb-1
                  ">

                    Availability

                  </p>

                  <h4 className={`
                  text-xl
                  font-bold
                  bg-gradient-to-r
                  ${item.gradient}
                  bg-clip-text
                  text-transparent
                  `}>

                    {item.stats}

                  </h4>

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

              </div>

              {/* ========================================= */}
              {/* 🔥 FLOATING BADGE */}
              {/* ========================================= */}

              <div className="
              absolute
              top-6
              right-6
              opacity-0
              group-hover:opacity-100
              transition
              duration-500
              ">

                <div className="
                w-8
                h-8
                rounded-full
                bg-white/10
                backdrop-blur-xl
                flex
                items-center
                justify-center
                border
                border-white/10
                ">

                  <BadgeCheck
                    size={16}
                    className="text-emerald-400"
                  />

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
                ${item.gradient}
                opacity-20
                blur-2xl
                `}></div>

              </div>

            </motion.div>
          );
        })}

      </div>

      {/* ================================================= */}
      {/* 🔥 BOTTOM STRIP */}
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
        mt-24
        "
      >

        <div className="
        rounded-[36px]
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-2xl
        p-10
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-8
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
          ">

            <p className="
            text-sm
            tracking-[0.3em]
            text-gray-400
            mb-4
            ">

              WHY STUDENTS LOVE SVBS

            </p>

            <h3 className="
            text-3xl
            md:text-5xl
            font-bold
            text-white
            leading-tight
            mb-4
            ">

              More than a hostel. <br />

              <span className="
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-orange-300
              bg-clip-text
              text-transparent
              ">

                A complete experience.

              </span>

            </h3>

            <p className="
            text-gray-400
            max-w-xl
            leading-relaxed
            ">

              Every facility is carefully designed to help
              students stay productive, comfortable,
              connected, and secure throughout their stay.

            </p>

          </div>

          {/* RIGHT */}

          <div className="
          relative
          z-10
          flex
          flex-wrap
          justify-center
          gap-5
          ">

            {[
              {
                icon: Coffee,
                title: "Healthy Food",
              },

              {
                icon: Wifi,
                title: "Fast Internet",
              },

              {
                icon: ShieldCheck,
                title: "Safe Campus",
              },

              {
                icon: Clock3,
                title: "24/7 Access",
              },
            ].map((item, i) => {

              const Icon =
                item.icon;

              return (

                <div
                  key={i}
                  className="
                  w-[170px]
                  rounded-3xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  p-6
                  text-center
                  "
                >

                  <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-purple-500
                  via-pink-500
                  to-orange-400
                  flex
                  items-center
                  justify-center
                  mx-auto
                  mb-4
                  shadow-lg
                  ">

                    <Icon
                      size={24}
                      className="text-white"
                    />

                  </div>

                  <h4 className="
                  text-white
                  font-semibold
                  ">

                    {item.title}

                  </h4>

                </div>
              );
            })}

          </div>

        </div>

      </motion.div>

    </section>
  );
}