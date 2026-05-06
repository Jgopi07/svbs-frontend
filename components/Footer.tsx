"use client";

import {
  motion,
} from "framer-motion";

import {
  Sparkles,
  MapPin,
  Phone,
  Mail,
  ArrowUpRight,
  ShieldCheck,
  Clock3,
  Wifi,
  ChevronRight,
  Heart,
  Star,
} from "lucide-react";

export default function Footer() {

  /* ====================================================== */
  /* 🔥 FOOTER LINKS */
  /* ====================================================== */

  const exploreLinks = [
    "Facilities",
    "Rooms",
    "Gallery",
    "Pricing",
    "Availability",
    "Book Room",
  ];

  const quickLinks = [
    "About Hostel",
    "Student Reviews",
    "Terms & Conditions",
    "Privacy Policy",
    "Support Center",
    "FAQs",
  ];

  const facilities = [
    "High-Speed WiFi",
    "24/7 Security",
    "Laundry Service",
    "RO Water",
    "Daily Mess",
    "Study Rooms",
  ];

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <footer className="
    relative
    pt-36
    pb-10
    px-6
    overflow-hidden
    ">

      {/* ================================================= */}
      {/* 🔥 BACKGROUND */}
      {/* ================================================= */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-black"></div>

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
      top-[-200px]
      left-[-200px]
      w-[700px]
      h-[700px]
      bg-purple-500/20
      blur-[180px]
      rounded-full
      animate-pulse
      "></div>

      <div className="
      absolute
      bottom-[-200px]
      right-[-200px]
      w-[700px]
      h-[700px]
      bg-pink-500/20
      blur-[180px]
      rounded-full
      animate-pulse
      "></div>

      {/* ================================================= */}
      {/* 🔥 MAIN CONTENT */}
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
        "
      >

        {/* ============================================= */}
        {/* 🔥 TOP SECTION */}
        {/* ============================================= */}

        <div className="
        grid
        lg:grid-cols-[1.5fr_1fr_1fr_1fr]
        gap-14
        pb-20
        border-b
        border-white/10
        ">

          {/* ========================================= */}
          {/* 🔥 BRAND */}
          {/* ========================================= */}

          <div>

            {/* LOGO */}

            <div className="
            flex
            items-center
            gap-4
            mb-8
            ">

              <div className="
              relative
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
              shadow-[0_0_40px_rgba(168,85,247,0.45)]
              ">

                <span className="
                text-black
                font-bold
                text-xl
                ">

                  S

                </span>

              </div>

              <div>

                <h2 className="
                text-2xl
                font-bold
                text-white
                ">

                  SVBS.

                </h2>

                <p className="
                text-sm
                text-gray-400
                ">

                  Premium Hostel Living

                </p>

              </div>

            </div>

            {/* TEXT */}

            <p className="
            text-gray-400
            leading-relaxed
            text-lg
            max-w-md
            mb-10
            ">

              A modern hostel crafted for students who value comfort,
              security, productivity, and a premium lifestyle experience
              under one roof.

            </p>

            {/* BADGES */}

            <div className="
            flex
            flex-wrap
            gap-4
            mb-10
            ">

              <div className="
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
              ">

                <ShieldCheck
                  size={18}
                  className="text-emerald-400"
                />

                <span className="
                text-sm
                text-gray-300
                ">

                  Safe Hostel

                </span>

              </div>

              <div className="
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
              ">

                <Wifi
                  size={18}
                  className="text-purple-300"
                />

                <span className="
                text-sm
                text-gray-300
                ">

                  Free WiFi

                </span>

              </div>

              <div className="
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
              ">

                <Clock3
                  size={18}
                  className="text-orange-300"
                />

                <span className="
                text-sm
                text-gray-300
                ">

                  24/7 Access

                </span>

              </div>

            </div>

            {/* SOCIALS */}

            <div className="
            flex
            items-center
            gap-4
            ">

              {[
                "IG",
                "FB",
                "YT",
              ].map((social, i) => (

                <button
                  key={i}
                  className="
                  relative
                  w-14
                  h-14
                  rounded-2xl
                  border
                  border-white/10
                  bg-white/[0.04]
                  backdrop-blur-xl
                  flex
                  items-center
                  justify-center
                  text-gray-300
                  hover:text-white
                  hover:border-purple-500/30
                  hover:bg-white/[0.08]
                  transition-all
                  duration-300
                  group
                  overflow-hidden
                  "
                >

                  {/* GLOW */}

                  <span className="
                  absolute
                  inset-0
                  opacity-0
                  group-hover:opacity-100
                  transition
                  duration-500
                  bg-gradient-to-r
                  from-purple-500/10
                  via-pink-500/10
                  to-orange-400/10
                  blur-xl
                  "></span>

                  <span className="
                  relative
                  z-10
                  font-semibold
                  text-sm
                  tracking-wider
                  ">
                    {social}
                  </span>

                </button>
              ))}

            </div>

          </div>

          {/* EXPLORE */}

          <div>

            <div className="
            flex
            items-center
            gap-3
            mb-8
            ">

              <Sparkles
                size={18}
                className="text-purple-300"
              />

              <h3 className="
              text-lg
              font-semibold
              text-white
              tracking-wide
              ">

                Explore

              </h3>

            </div>

            <ul className="space-y-5">

              {exploreLinks.map((item, i) => (

                <li
                  key={i}
                  className="
                  group
                  flex
                  items-center
                  justify-between
                  text-gray-400
                  hover:text-white
                  transition
                  cursor-pointer
                  "
                >

                  <div className="
                  flex
                  items-center
                  gap-3
                  ">

                    <ChevronRight
                      size={16}
                      className="
                      text-purple-300
                      group-hover:translate-x-1
                      transition
                      "
                    />

                    {item}

                  </div>

                  <ArrowUpRight
                    size={16}
                    className="
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                  />

                </li>
              ))}

            </ul>

          </div>

          {/* QUICK LINKS */}

          <div>

            <div className="
            flex
            items-center
            gap-3
            mb-8
            ">

              <Star
                size={18}
                className="text-orange-300"
              />

              <h3 className="
              text-lg
              font-semibold
              text-white
              tracking-wide
              ">

                Quick Links

              </h3>

            </div>

            <ul className="space-y-5">

              {quickLinks.map((item, i) => (

                <li
                  key={i}
                  className="
                  group
                  flex
                  items-center
                  justify-between
                  text-gray-400
                  hover:text-white
                  transition
                  cursor-pointer
                  "
                >

                  <div className="
                  flex
                  items-center
                  gap-3
                  ">

                    <ChevronRight
                      size={16}
                      className="
                      text-pink-300
                      group-hover:translate-x-1
                      transition
                      "
                    />

                    {item}

                  </div>

                  <ArrowUpRight
                    size={16}
                    className="
                    opacity-0
                    group-hover:opacity-100
                    transition
                    "
                  />

                </li>
              ))}

            </ul>

          </div>

          {/* CONTACT */}

          <div>

            <h3 className="
            text-lg
            font-semibold
            text-white
            mb-8
            tracking-wide
            ">

              Contact

            </h3>

            <div className="space-y-5">

              {[
                {
                  icon: Phone,
                  title: "Phone",
                  value: "+91 98765 43210",
                },

                {
                  icon: Mail,
                  title: "Email",
                  value: "support@svbs.com",
                },

                {
                  icon: MapPin,
                  title: "Location",
                  value: "Premium Student Hostel Campus",
                },
              ].map((item, i) => {

                const Icon = item.icon;

                return (

                  <div
                    key={i}
                    className="
                    flex
                    items-start
                    gap-4
                    rounded-[26px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    backdrop-blur-xl
                    p-5
                    "
                  >

                    <div className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-gradient-to-br
                    from-purple-500/20
                    to-pink-500/20
                    flex
                    items-center
                    justify-center
                    ">

                      <Icon
                        size={20}
                        className="text-white"
                      />

                    </div>

                    <div>

                      <p className="
                      text-gray-400
                      text-sm
                      mb-1
                      ">

                        {item.title}

                      </p>

                      <h4 className="
                      text-white
                      font-medium
                      leading-relaxed
                      ">

                        {item.value}

                      </h4>

                    </div>

                  </div>
                );
              })}

            </div>

          </div>

        </div>

        {/* BOTTOM */}

        <div className="
        flex
        flex-col
        lg:flex-row
        items-center
        justify-between
        gap-8
        pt-10
        ">

          <div className="
          flex
          flex-col
          md:flex-row
          items-center
          gap-4
          text-center
          md:text-left
          ">

            <p className="text-gray-500">
              © 2026 SVBS Hostel. All rights reserved.
            </p>

            <div className="
            hidden
            md:block
            w-1
            h-1
            rounded-full
            bg-gray-600
            "></div>

            <div className="
            flex
            items-center
            gap-2
            text-gray-500
            ">

              Made with

              <Heart
                size={14}
                className="text-pink-400"
                fill="currentColor"
              />

              for students

            </div>

          </div>

          <div className="
          flex
          flex-wrap
          justify-center
          gap-8
          text-sm
          text-gray-500
          ">

            {[
              "Privacy Policy",
              "Terms of Service",
              "Cookies",
              "Security",
            ].map((item, i) => (

              <span
                key={i}
                className="
                hover:text-white
                transition
                cursor-pointer
                "
              >

                {item}

              </span>
            ))}

          </div>

        </div>

      </motion.div>

      {/* TOP LINE */}

      <div className="
      absolute
      top-0
      left-0
      w-full
      h-[1px]
      bg-gradient-to-r
      from-transparent
      via-purple-500/40
      to-transparent
      "></div>

    </footer>
  );
}