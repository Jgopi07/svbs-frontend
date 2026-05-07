"use client";

import {
  BedDouble,
  Wallet,
  Bell,
  Sparkles,
  ArrowUpRight,
  CheckCircle2,
  AlertTriangle,
  Wifi,
  ShieldCheck,
  BookOpen,
  Clock3,
  CalendarDays,
  UtensilsCrossed,
  IndianRupee,
  GraduationCap,
  Star,
  Building2,
  MoonStar,
  Waves,
  Coffee,
  Dumbbell,
  Car,
  ChevronRight,
  Receipt,
  MessageSquareWarning,
  User,
  Home,
  Activity,
} from "lucide-react";

import { motion } from "framer-motion";

/* ====================================================== */
/* 🔥 DASHBOARD PAGE */
/* ====================================================== */

export default function DashboardPage() {

  /* ==================================================== */
  /* 🔥 STATS */
  /* ==================================================== */

  const stats = [

    {
      title: "Current Room",

      value: "A-302",

      desc: "2nd Floor • AC Deluxe",

      glow:
        "from-purple-500 to-pink-500",

      icon: BedDouble,
    },

    {
      title: "Rent Status",

      value: "PAID",

      desc: "Paid Successfully",

      glow:
        "from-emerald-500 to-green-400",

      icon: Wallet,
    },

    {
      title: "Next Due Date",

      value: "12 June",

      desc: "₹8,500 Remaining",

      glow:
        "from-orange-400 to-yellow-400",

      icon: CalendarDays,
    },

    {
      title: "Complaints",

      value: "01",

      desc: "Under Review",

      glow:
        "from-pink-500 to-rose-400",

      icon: AlertTriangle,
    },
  ];

  /* ==================================================== */
  /* 🔥 FACILITIES */
  /* ==================================================== */

  const facilities = [

    {
      title:
        "High-Speed WiFi",

      desc:
        "Unlimited internet access",

      icon: Wifi,
    },

    {
      title:
        "24/7 Security",

      desc:
        "CCTV & hostel security",

      icon: ShieldCheck,
    },

    {
      title:
        "Study Rooms",

      desc:
        "Peaceful learning area",

      icon: BookOpen,
    },

    {
      title:
        "Laundry Service",

      desc:
        "Available daily",

      icon: Clock3,
    },

    {
      title:
        "Mess Facility",

      desc:
        "Healthy daily meals",

      icon: UtensilsCrossed,
    },

    {
      title:
        "Gym Access",

      desc:
        "Fitness & workout area",

      icon: Dumbbell,
    },
  ];

  /* ==================================================== */
  /* 🔥 ANNOUNCEMENTS */
  /* ==================================================== */

  const announcements = [

    "Mess special dinner available tonight 🍽️",

    "Room inspection scheduled on Friday",

    "WiFi maintenance at 11:00 PM",

    "Semester celebration event next week 🎉",
  ];

  /* ==================================================== */
  /* 🔥 ACTIVITIES */
  /* ==================================================== */

  const activities = [

    {
      title:
        "Rent payment successful",

      time:
        "2 hours ago",
    },

    {
      title:
        "Complaint assigned to support team",

      time:
        "Yesterday",
    },

    {
      title:
        "Room cleaning completed",

      time:
        "2 days ago",
    },

    {
      title:
        "Mess menu updated",

      time:
        "3 days ago",
    },
  ];

  /* ==================================================== */
  /* 🔥 QUICK ACTIONS */
  /* ==================================================== */

  const actions = [

    {
      title:
        "Pay Rent",

      desc:
        "Complete monthly payment instantly.",

      icon: IndianRupee,

      glow:
        "from-purple-500 via-pink-500 to-yellow-400",
    },

    {
      title:
        "Raise Complaint",

      desc:
        "Report issues to hostel support team.",

      icon: MessageSquareWarning,

      glow:
        "from-pink-500 via-rose-500 to-orange-400",
    },

    {
      title:
        "Book Room",

      desc:
        "Explore available premium rooms.",

      icon: BedDouble,

      glow:
        "from-cyan-500 via-blue-500 to-indigo-500",
    },

    {
      title:
        "View Profile",

      desc:
        "Manage your hostel profile settings.",

      icon: User,

      glow:
        "from-emerald-500 via-green-500 to-lime-400",
    },
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
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        p-8
        lg:p-12
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
          top-[-150px]
          left-[-150px]
          w-[400px]
          h-[400px]
          rounded-full
          bg-purple-500/20
          blur-[120px]
          "></div>

          <div className="
          absolute
          bottom-[-150px]
          right-[-150px]
          w-[400px]
          h-[400px]
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

              Premium Student Access

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

              Welcome Back

              <span className="
              block
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-yellow-300
              bg-clip-text
              text-transparent
              ">

                Uday 👋
              </span>

            </h1>

            {/* DESC */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-2xl
            ">

              Manage hostel life, room details, complaints, payments and food menu from your personalized student dashboard.

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
            min-w-[180px]
            ">

              <p className="
              text-gray-400
              text-sm
              mb-3
              ">

                Hostel Rating

              </p>

              <h2 className="
              text-white
              text-5xl
              font-black
              mb-2
              ">

                4.9★

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-yellow-300
              text-sm
              ">

                <Star
                  size={15}
                />

                Premium Living

              </div>

            </div>

            {/* CARD */}

            <div className="
            rounded-[28px]
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            p-6
            min-w-[180px]
            text-white
            shadow-[0_0_45px_rgba(168,85,247,0.35)]
            ">

              <p className="
              text-white/70
              text-sm
              mb-3
              ">

                Residency

              </p>

              <h2 className="
              text-5xl
              font-black
              mb-2
              ">

                2Y

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-sm
              ">

                <GraduationCap
                  size={15}
                />

                Active Student

              </div>

            </div>

          </div>

        </div>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 STATS */}
      {/* ================================================= */}

      <div className="
      grid
      sm:grid-cols-2
      xl:grid-cols-4
      gap-7
      ">

        {stats.map(
          (
            card,
            i
          ) => {

            const Icon =
              card.icon;

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
                  delay:
                    i * 0.1,
                }}

                className="
                relative
                overflow-hidden
                rounded-[35px]
                border
                border-white/10
                bg-white/[0.05]
                backdrop-blur-3xl
                p-7
                hover:-translate-y-2
                transition-all
                duration-500
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
                blur-[90px]
                opacity-30
                bg-gradient-to-r
                ${card.glow}
                `}></div>

                {/* TOP */}

                <div className="
                relative
                z-10
                flex
                items-start
                justify-between
                mb-8
                ">

                  <div>

                    <p className="
                    text-gray-400
                    mb-3
                    ">

                      {card.title}

                    </p>

                    <h2 className="
                    text-5xl
                    font-black
                    text-white
                    leading-none
                    mb-3
                    ">

                      {card.value}

                    </h2>

                    <p className="
                    text-gray-400
                    text-sm
                    ">

                      {card.desc}

                    </p>

                  </div>

                  <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-white/[0.06]
                  border
                  border-white/10
                  flex
                  items-center
                  justify-center
                  text-white
                  ">

                    <Icon
                      size={24}
                    />

                  </div>

                </div>

                {/* BOTTOM */}

                <div className="
                relative
                z-10
                flex
                items-center
                gap-3
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
                  text-gray-300
                  ">

                    Updated just now

                  </span>

                </div>

              </motion.div>
            );
          }
        )}

      </div>

      {/* ================================================= */}
      {/* 🔥 MAIN GRID */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-[1.25fr_0.75fr]
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
          {/* 🔥 QUICK ACTIONS */}
          {/* ============================================= */}

          <div className="
          relative
          overflow-hidden
          rounded-[35px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
          p-8
          ">

            {/* GLOW */}

            <div className="
            absolute
            top-0
            right-0
            w-52
            h-52
            bg-purple-500/20
            blur-[100px]
            rounded-full
            "></div>

            {/* TOP */}

            <div className="
            relative
            z-10
            flex
            items-center
            justify-between
            mb-10
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Quick Actions

                </h2>

                <p className="
                text-gray-400
                ">

                  Access important student features instantly.

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
              shadow-[0_0_40px_rgba(168,85,247,0.4)]
              ">

                <Sparkles
                  size={28}
                />

              </div>

            </div>

            {/* GRID */}

            <div className="
            grid
            md:grid-cols-2
            gap-5
            ">

              {actions.map(
                (
                  item,
                  i
                ) => {

                  const Icon =
                    item.icon;

                  return (

                    <button

                      key={i}

                      className={`
                      relative
                      overflow-hidden
                      rounded-[28px]
                      p-7
                      text-left
                      group

                      ${
                        i === 0

                          ? `bg-gradient-to-r ${item.glow} text-white`

                          : "border border-white/10 bg-white/[0.04]"
                      }
                      `}
                    >

                      {/* HOVER */}

                      {i !== 0 && (

                        <div className="
                        absolute
                        inset-0
                        opacity-0
                        group-hover:opacity-100
                        transition
                        duration-500
                        bg-gradient-to-r
                        from-purple-500/10
                        via-pink-500/10
                        to-yellow-400/10
                        blur-2xl
                        "></div>
                      )}

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
                        mb-8
                        ">

                          <div className={`
                          w-14
                          h-14
                          rounded-2xl
                          flex
                          items-center
                          justify-center

                          ${
                            i === 0

                              ? "bg-white/20 text-white"

                              : "bg-white/[0.05] border border-white/10 text-white"
                          }
                          `}>

                            <Icon
                              size={24}
                            />

                          </div>

                          <ArrowUpRight
                            size={24}
                            className="
                            group-hover:translate-x-1
                            group-hover:-translate-y-1
                            transition-all
                            duration-300
                            text-white
                            "
                          />

                        </div>

                        {/* TEXT */}

                        <h3 className="
                        text-2xl
                        font-black
                        text-white
                        mb-3
                        ">

                          {item.title}

                        </h3>

                        <p className={`
                        leading-relaxed

                        ${
                          i === 0

                            ? "text-white/80"

                            : "text-gray-400"
                        }
                        `}>

                          {item.desc}

                        </p>

                      </div>

                    </button>
                  );
                }
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 FACILITIES */}
          {/* ============================================= */}

          <div className="
          rounded-[35px]
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
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Hostel Facilities

                </h2>

                <p className="
                text-gray-400
                ">

                  Premium services available for students.

                </p>

              </div>

              <MoonStar
                size={32}
                className="
                text-yellow-300
                "
              />

            </div>

            {/* GRID */}

            <div className="
            grid
            md:grid-cols-2
            gap-5
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
                      rounded-[28px]
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

                      {/* LEFT */}

                      <div className="
                      flex
                      items-center
                      gap-5
                      ">

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
                        text-white
                        ">

                          <Icon
                            size={24}
                          />

                        </div>

                        <div>

                          <h3 className="
                          text-white
                          font-semibold
                          mb-1
                          ">

                            {item.title}

                          </h3>

                          <p className="
                          text-gray-400
                          text-sm
                          ">

                            {item.desc}

                          </p>

                        </div>

                      </div>

                      {/* RIGHT */}

                      <CheckCircle2
                        size={20}
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
        ">

          {/* ============================================= */}
          {/* 🔥 ANNOUNCEMENTS */}
          {/* ============================================= */}

          <div className="
          relative
          overflow-hidden
          rounded-[35px]
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-3xl
          p-8
          ">

            {/* GLOW */}

            <div className="
            absolute
            top-0
            right-0
            w-40
            h-40
            bg-pink-500/20
            blur-[80px]
            rounded-full
            "></div>

            {/* TOP */}

            <div className="
            relative
            z-10
            flex
            items-center
            justify-between
            mb-8
            ">

              <h2 className="
              text-3xl
              font-black
              text-white
              ">

                Announcements

              </h2>

              <Bell
                size={26}
                className="
                text-pink-300
                "
              />

            </div>

            {/* ITEMS */}

            <div className="
            relative
            z-10
            space-y-5
            ">

              {announcements.map(
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
                    rounded-2xl
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
                    animate-pulse
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

          {/* ============================================= */}
          {/* 🔥 RECENT ACTIVITY */}
          {/* ============================================= */}

          <div className="
          rounded-[35px]
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
            mb-8
            ">

              <h2 className="
              text-3xl
              font-black
              text-white
              ">

                Recent Activity

              </h2>

              <Activity
                size={26}
                className="
                text-purple-300
                "
              />

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {activities.map(
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
                    "
                  >

                    {/* ICON */}

                    <div className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-gradient-to-r
                    from-purple-500/20
                    to-pink-500/20
                    border
                    border-white/10
                    flex
                    items-center
                    justify-center
                    text-purple-300
                    ">

                      <CheckCircle2
                        size={20}
                      />

                    </div>

                    {/* TEXT */}

                    <div className="
                    flex-1
                    border-b
                    border-white/10
                    pb-5
                    ">

                      <h3 className="
                      text-white
                      font-medium
                      mb-2
                      ">

                        {item.title}

                      </h3>

                      <p className="
                      text-gray-400
                      text-sm
                      ">

                        {item.time}

                      </p>

                    </div>

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