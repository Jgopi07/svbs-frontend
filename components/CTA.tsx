"use client";

import {
  motion,
} from "framer-motion";

import {
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Clock3,
  BadgeCheck,
  Star,
  Phone,
  Mail,
  MapPin,
} from "lucide-react";

export default function CTA() {

  /* ====================================================== */
  /* 🔥 FEATURES */
  /* ====================================================== */

  const features = [

    {
      icon: ShieldCheck,
      title: "Secure & Safe",
      desc:
        "24/7 security and monitored hostel premises.",
    },

    {
      icon: Clock3,
      title: "Quick Booking",
      desc:
        "Reserve your room instantly within minutes.",
    },

    {
      icon: BadgeCheck,
      title: "Verified Hostel",
      desc:
        "Trusted by students with premium facilities.",
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
    flex
    justify-center
    ">

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0">

        {/* TOP GLOW */}

        <div className="
        absolute
        -top-[250px]
        left-[-200px]
        w-[700px]
        h-[700px]
        bg-purple-500/20
        blur-[180px]
        rounded-full
        "></div>

        {/* BOTTOM GLOW */}

        <div className="
        absolute
        -bottom-[250px]
        right-[-200px]
        w-[700px]
        h-[700px]
        bg-pink-500/20
        blur-[180px]
        rounded-full
        "></div>

        {/* CENTER LIGHT */}

        <div className="
        absolute
        top-1/2
        left-1/2
        -translate-x-1/2
        -translate-y-1/2
        w-[500px]
        h-[500px]
        bg-orange-400/10
        blur-[140px]
        rounded-full
        "></div>

      </div>

      {/* ================================================= */}
      {/* 🔥 MAIN CONTAINER */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          scale: 0.94,
          y: 60,
        }}
        whileInView={{
          opacity: 1,
          scale: 1,
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
        max-w-7xl
        w-full
        rounded-[45px]
        overflow-hidden
        border
        border-white/10
        bg-white/[0.04]
        backdrop-blur-3xl
        shadow-[0_30px_120px_rgba(0,0,0,0.75)]
        "
      >

        {/* ============================================= */}
        {/* 🔥 GRID OVERLAY */}
        {/* ============================================= */}

        <div className="
        absolute
        inset-0
        opacity-[0.04]
        [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
        [background-size:60px_60px]
        "></div>

        {/* ============================================= */}
        {/* 🔥 GLOW LAYERS */}
        {/* ============================================= */}

        <div className="
        absolute
        top-0
        left-0
        w-[500px]
        h-[500px]
        bg-purple-500/20
        blur-[160px]
        rounded-full
        "></div>

        <div className="
        absolute
        bottom-0
        right-0
        w-[500px]
        h-[500px]
        bg-pink-500/20
        blur-[160px]
        rounded-full
        "></div>

        {/* ============================================= */}
        {/* 🔥 CONTENT */}
        {/* ============================================= */}

        <div className="
        relative
        z-10
        px-8
        md:px-16
        py-20
        ">

          {/* ========================================= */}
          {/* 🔥 TOP BADGE */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 20,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.1,
            }}
            className="
            flex
            justify-center
            mb-10
            "
          >

            <div className="
            flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            bg-white/[0.06]
            border
            border-white/10
            backdrop-blur-xl
            ">

              <div className="
              w-3
              h-3
              rounded-full
              bg-emerald-400
              animate-pulse
              "></div>

              <span className="
              text-sm
              tracking-[0.25em]
              uppercase
              text-gray-300
              ">

                Limited Rooms Available

              </span>

            </div>

          </motion.div>

          {/* ========================================= */}
          {/* 🔥 HEADING */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
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
            text-center
            max-w-5xl
            mx-auto
            "
          >

            <h2 className="
            text-5xl
            md:text-7xl
            font-bold
            leading-[1.1]
            text-white
            mb-8
            ">

              Your premium hostel{" "}

              <span className="
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-orange-300
              bg-clip-text
              text-transparent
              ">

                experience

              </span>

              {" "}starts here.

            </h2>

            <p className="
            text-lg
            md:text-xl
            text-gray-400
            leading-relaxed
            max-w-3xl
            mx-auto
            mb-14
            ">

              Reserve your room in under two minutes.
              Smart booking, premium facilities, secure
              living and a modern student environment —
              all in one place.

            </p>

          </motion.div>

          {/* ========================================= */}
          {/* 🔥 FEATURE CARDS */}
          {/* ========================================= */}

          <div className="
          grid
          md:grid-cols-3
          gap-6
          mb-16
          ">

            {features.map((item, i) => {

              const Icon = item.icon;

              return (

                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 30,
                  }}
                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}
                  viewport={{
                    once: true,
                  }}
                  transition={{
                    delay: i * 0.15,
                  }}
                  className="
                  relative
                  overflow-hidden
                  rounded-[30px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-2xl
                  p-8
                  group
                  hover:border-purple-500/30
                  transition-all
                  duration-500
                  "
                >

                  {/* HOVER GLOW */}

                  <div className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-700
                  ">

                    <div className="
                    absolute
                    -inset-[1px]
                    rounded-[30px]
                    bg-gradient-to-r
                    from-purple-500/10
                    via-pink-500/10
                    to-orange-400/10
                    blur-2xl
                    "></div>

                  </div>

                  {/* ICON */}

                  <div className="
                  relative
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-br
                  from-purple-500/20
                  to-pink-500/20
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  mb-6
                  ">

                    <Icon
                      size={28}
                      className="text-white"
                    />

                  </div>

                  {/* TITLE */}

                  <h3 className="
                  text-2xl
                  font-bold
                  text-white
                  mb-4
                  ">

                    {item.title}

                  </h3>

                  {/* DESC */}

                  <p className="
                  text-gray-400
                  leading-relaxed
                  ">

                    {item.desc}

                  </p>

                </motion.div>
              );
            })}

          </div>

          {/* ========================================= */}
          {/* 🔥 BUTTONS */}
          {/* ========================================= */}

          <motion.div
            initial={{
              opacity: 0,
              y: 30,
            }}
            whileInView={{
              opacity: 1,
              y: 0,
            }}
            viewport={{
              once: true,
            }}
            transition={{
              delay: 0.4,
            }}
            className="
            flex
            flex-col
            md:flex-row
            items-center
            justify-center
            gap-6
            mb-16
            "
          >

            {/* PRIMARY BUTTON */}

            <button className="
            relative
            overflow-hidden
            px-12
            py-5
            rounded-full
            font-semibold
            text-lg
            text-white
            group
            ">

              {/* BASE */}

              <span className="
              absolute
              inset-0
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-orange-400
              "></span>

              {/* HOVER GLOW */}

              <span className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition
              duration-700
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
              group-hover:left-[140%]
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

                <Sparkles size={20} />

                Book Your Room Today

                <ArrowRight size={20} />

              </span>

            </button>

            {/* SECONDARY BUTTON */}

            <button className="
            px-10
            py-5
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            text-gray-300
            hover:text-white
            hover:bg-white/[0.08]
            transition-all
            duration-300
            ">

              Schedule a Hostel Visit →

            </button>

          </motion.div>

          {/* ========================================= */}
          {/* 🔥 STATS */}
          {/* ========================================= */}

          <div className="
          grid
          grid-cols-2
          md:grid-cols-4
          gap-6
          mb-16
          ">

            {[
              {
                value: "1000+",
                label: "Students",
              },

              {
                value: "24/7",
                label: "Security",
              },

              {
                value: "5 Floors",
                label: "Modern Rooms",
              },

              {
                value: "4.9★",
                label: "Student Rating",
              },

            ].map((item, i) => (

              <motion.div
                key={i}
                initial={{
                  opacity: 0,
                  y: 20,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                }}
                transition={{
                  delay: i * 0.1,
                }}
                className="
                text-center
                rounded-[28px]
                border
                border-white/10
                bg-white/[0.04]
                backdrop-blur-xl
                p-8
                "
              >

                <h3 className="
                text-4xl
                font-bold
                text-white
                mb-3
                ">

                  {item.value}

                </h3>

                <p className="
                text-gray-400
                ">

                  {item.label}

                </p>

              </motion.div>
            ))}

          </div>

          {/* ========================================= */}
          {/* 🔥 CONTACT STRIP */}
          {/* ========================================= */}

          <div className="
          grid
          md:grid-cols-3
          gap-6
          ">

            {/* PHONE */}

            <div className="
            flex
            items-center
            gap-4
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-6
            ">

              <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-purple-500/20
              to-pink-500/20
              flex
              items-center
              justify-center
              ">

                <Phone
                  className="text-white"
                />

              </div>

              <div>

                <p className="
                text-gray-400
                text-sm
                mb-1
                ">

                  Call Us

                </p>

                <h4 className="
                text-white
                font-semibold
                ">

                  +91 98765 43210

                </h4>

              </div>

            </div>

            {/* EMAIL */}

            <div className="
            flex
            items-center
            gap-4
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-6
            ">

              <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-purple-500/20
              to-pink-500/20
              flex
              items-center
              justify-center
              ">

                <Mail
                  className="text-white"
                />

              </div>

              <div>

                <p className="
                text-gray-400
                text-sm
                mb-1
                ">

                  Email

                </p>

                <h4 className="
                text-white
                font-semibold
                ">

                  support@svbs.com

                </h4>

              </div>

            </div>

            {/* LOCATION */}

            <div className="
            flex
            items-center
            gap-4
            rounded-[28px]
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            p-6
            ">

              <div className="
              w-14
              h-14
              rounded-2xl
              bg-gradient-to-br
              from-purple-500/20
              to-pink-500/20
              flex
              items-center
              justify-center
              ">

                <MapPin
                  className="text-white"
                />

              </div>

              <div>

                <p className="
                text-gray-400
                text-sm
                mb-1
                ">

                  Location

                </p>

                <h4 className="
                text-white
                font-semibold
                ">

                  Premium Student Hostel

                </h4>

              </div>

            </div>

          </div>

          {/* ========================================= */}
          {/* 🔥 BOTTOM TEXT */}
          {/* ========================================= */}

          <div className="
          text-center
          mt-14
          ">

            <div className="
            inline-flex
            items-center
            gap-3
            px-6
            py-3
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-xl
            ">

              <Star
                size={16}
                className="text-yellow-300"
              />

              <p className="
              text-sm
              text-gray-300
              ">

                Trusted by hundreds of students for a premium hostel experience.

              </p>

            </div>

          </div>

        </div>

        {/* ============================================= */}
        {/* 🔥 BORDER GLOW */}
        {/* ============================================= */}

        <div className="
        absolute
        inset-0
        rounded-[45px]
        opacity-0
        hover:opacity-100
        transition
        duration-700
        pointer-events-none
        ">

          <div className="
          absolute
          -inset-[1px]
          rounded-[45px]
          bg-gradient-to-r
          from-purple-500/20
          via-pink-500/20
          to-orange-400/20
          blur-2xl
          "></div>

        </div>

      </motion.div>

    </section>
  );
}