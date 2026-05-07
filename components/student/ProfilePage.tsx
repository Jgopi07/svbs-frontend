"use client";

import {
  User,
  Mail,
  Phone,
  MapPin,
  GraduationCap,
  ShieldCheck,
  Camera,
  Pencil,
  Lock,
  Bell,
  MoonStar,
  Save,
  CheckCircle2,
  Building2,
  BedDouble,
  CreditCard,
  CalendarDays,
  Wifi,
  BookOpen,
  HeartHandshake,
  Sparkles,
  ArrowUpRight,
  BadgeCheck,
  Clock3,
  School,
  Globe,
  FileText,
  Download,
  ChevronRight,
  Wallet,
  Shield,
  Star,
  IndianRupee,
  AlertTriangle,
  Trophy,
  Laptop,
  Coffee,
  UtensilsCrossed,
  Home,
  Briefcase,
  Edit3,
  UserCircle2,
  SunMedium,
  Activity,
  Check,
  Plus,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

/* ====================================================== */
/* 🔥 PROFILE PAGE */
/* ====================================================== */

export default function ProfilePage() {

  /* ==================================================== */
  /* 🔥 STATES */
  /* ==================================================== */

  const [editing, setEditing] =
    useState(false);

  const [name, setName] =
    useState("Uday Varma");

  const [phone, setPhone] =
    useState("+91 9876543210");

  const [email, setEmail] =
    useState("student@svbs.com");

  const [address, setAddress] =
    useState("Hyderabad, Telangana");

  const [bio, setBio] =
    useState(
      "Passionate student focused on academics, technology and hostel community activities."
    );

  /* ==================================================== */
  /* 🔥 STATS */
  /* ==================================================== */

  const stats = [

    {
      title: "Room",

      value: "A-302",

      icon: BedDouble,

      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Rent Status",

      value: "PAID",

      icon: CreditCard,

      glow:
        "from-emerald-400 to-green-500",
    },

    {
      title: "Attendance",

      value: "96%",

      icon: CheckCircle2,

      glow:
        "from-cyan-400 to-blue-500",
    },

    {
      title: "Complaints",

      value: "01",

      icon: AlertTriangle,

      glow:
        "from-orange-400 to-yellow-500",
    },
  ];

  /* ==================================================== */
  /* 🔥 ACTIVITIES */
  /* ==================================================== */

  const activities = [

    {
      title:
        "Paid hostel rent successfully",

      time:
        "2 hours ago",
    },

    {
      title:
        "Updated profile information",

      time:
        "Yesterday",
    },

    {
      title:
        "Submitted mess feedback",

      time:
        "2 days ago",
    },

    {
      title:
        "Complaint resolved by hostel admin",

      time:
        "4 days ago",
    },
  ];

  /* ==================================================== */
  /* 🔥 FACILITIES */
  /* ==================================================== */

  const facilities = [

    {
      title:
        "High Speed WiFi",

      icon: Wifi,
    },

    {
      title:
        "Library Access",

      icon: BookOpen,
    },

    {
      title:
        "24/7 Security",

      icon: ShieldCheck,
    },

    {
      title:
        "Laundry Service",

      icon: Clock3,
    },

    {
      title:
        "Mess Facility",

      icon: UtensilsCrossed,
    },

    {
      title:
        "Medical Support",

      icon: HeartHandshake,
    },
  ];

  /* ==================================================== */
  /* 🔥 DOCUMENTS */
  /* ==================================================== */

  const documents = [

    {
      title:
        "Hostel ID Card",

      type:
        "PDF",
    },

    {
      title:
        "Rent Receipt",

      type:
        "PDF",
    },

    {
      title:
        "Student Verification",

      type:
        "PDF",
    },
  ];

  /* ==================================================== */
  /* 🔥 SETTINGS */
  /* ==================================================== */

  const settings = [

    {
      title:
        "Notifications",

      icon: Bell,

      status:
        "Enabled",
    },

    {
      title:
        "Dark Mode",

      icon: MoonStar,

      status:
        "Enabled",
    },

    {
      title:
        "Privacy Protection",

      icon: Lock,

      status:
        "Protected",
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
        rounded-[45px]
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
          top-[-220px]
          left-[-220px]
          w-[500px]
          h-[500px]
          bg-purple-500/20
          blur-[150px]
          rounded-full
          "></div>

          <div className="
          absolute
          bottom-[-220px]
          right-[-220px]
          w-[500px]
          h-[500px]
          bg-pink-500/20
          blur-[150px]
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
          flex
          flex-col
          lg:flex-row
          lg:items-center
          gap-8
          flex-1
          ">

            {/* PROFILE */}

            <div className="
            relative
            shrink-0
            ">

              {/* IMAGE */}

              <div className="
              w-40
              h-40
              rounded-[40px]
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-yellow-400
              p-[3px]
              shadow-[0_0_60px_rgba(168,85,247,0.35)]
              ">

                <div className="
                w-full
                h-full
                rounded-[38px]
                bg-[#050816]
                flex
                items-center
                justify-center
                text-white
                ">

                  <UserCircle2
                    size={90}
                  />

                </div>

              </div>

              {/* CAMERA */}

              <button className="
              absolute
              bottom-2
              right-2
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
              shadow-[0_0_35px_rgba(168,85,247,0.35)]
              ">

                <Camera
                  size={22}
                />

              </button>

            </div>

            {/* DETAILS */}

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

                Premium Resident

              </div>

              {/* NAME */}

              <h1 className="
              text-5xl
              sm:text-6xl
              font-black
              text-white
              mb-5
              leading-none
              ">

                {name}

              </h1>

              {/* ROLE */}

              <div className="
              flex
              flex-wrap
              items-center
              gap-4
              mb-6
              ">

                <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-purple-500/10
                border
                border-purple-500/20
                text-purple-300
                text-sm
                ">

                  <GraduationCap
                    size={15}
                  />

                  B.Tech Student

                </div>

                <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-emerald-500/10
                border
                border-emerald-500/20
                text-emerald-300
                text-sm
                ">

                  <BadgeCheck
                    size={15}
                  />

                  Verified Resident

                </div>

              </div>

              {/* BIO */}

              <p className="
              text-gray-400
              text-lg
              leading-relaxed
              max-w-3xl
              ">

                {bio}

              </p>

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

            <div className="
            rounded-[30px]
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

                Joined Hostel

              </p>

              <h2 className="
              text-4xl
              font-black
              text-white
              mb-2
              ">

                2025

              </h2>

              <p className="
              text-gray-400
              text-sm
              ">

                SVBS Residency

              </p>

            </div>

            <div className="
            rounded-[30px]
            bg-gradient-to-r
            from-purple-500
            to-pink-500
            p-6
            text-white
            shadow-[0_0_45px_rgba(168,85,247,0.35)]
            ">

              <p className="
              text-white/70
              text-sm
              mb-3
              ">

                Resident Score

              </p>

              <h2 className="
              text-4xl
              font-black
              mb-2
              ">

                9.8

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

                Excellent

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
            item,
            i
          ) => {

            const Icon =
              item.icon;

            return (

              <motion.div

                key={i}

                initial={{
                  opacity: 0,
                  y: 20,
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
                ${item.glow}
                `}></div>

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

                    <div className={`
                    w-16
                    h-16
                    rounded-2xl
                    bg-gradient-to-r
                    ${item.glow}
                    flex
                    items-center
                    justify-center
                    text-white
                    `}>

                      <Icon
                        size={28}
                      />

                    </div>

                    <ArrowUpRight
                      size={20}
                      className="
                      text-gray-400
                      "
                    />

                  </div>

                  <h2 className="
                  text-5xl
                  font-black
                  text-white
                  mb-3
                  ">

                    {item.value}

                  </h2>

                  <p className="
                  text-gray-400
                  ">

                    {item.title}

                  </p>

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
      xl:grid-cols-[1fr_0.5fr]
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
          {/* 🔥 PERSONAL INFO */}
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
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-6
            mb-10
            ">

              <div>

                <h2 className="
                text-4xl
                font-black
                text-white
                mb-3
                ">

                  Personal Information

                </h2>

                <p className="
                text-gray-400
                ">

                  Manage your hostel resident profile.

                </p>

              </div>

              <button

                onClick={() =>
                  setEditing(
                    !editing
                  )
                }

                className="
                px-6
                py-4
                rounded-2xl
                bg-gradient-to-r
                from-purple-500
                to-pink-500
                text-white
                font-semibold
                flex
                items-center
                gap-3
                "
              >

                <Edit3
                  size={18}
                />

                {editing
                  ? "Cancel"
                  : "Edit Profile"}

              </button>

            </div>

            {/* FORM */}

            <div className="
            grid
            md:grid-cols-2
            gap-6
            ">

              {/* NAME */}

              <div className="
              space-y-3
              ">

                <label className="
                text-gray-300
                text-sm
                ">

                  Full Name

                </label>

                <div className="
                relative
                ">

                  <User
                    size={18}
                    className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    "
                  />

                  <input

                    value={name}

                    onChange={(e) =>
                      setName(
                        e.target
                          .value
                      )
                    }

                    disabled={
                      !editing
                    }

                    className="
                    w-full
                    h-16
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    pl-14
                    pr-5
                    text-white
                    outline-none
                    "
                  />

                </div>

              </div>

              {/* EMAIL */}

              <div className="
              space-y-3
              ">

                <label className="
                text-gray-300
                text-sm
                ">

                  Email Address

                </label>

                <div className="
                relative
                ">

                  <Mail
                    size={18}
                    className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    "
                  />

                  <input

                    value={email}

                    onChange={(e) =>
                      setEmail(
                        e.target
                          .value
                      )
                    }

                    disabled={
                      !editing
                    }

                    className="
                    w-full
                    h-16
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    pl-14
                    pr-5
                    text-white
                    outline-none
                    "
                  />

                </div>

              </div>

              {/* PHONE */}

              <div className="
              space-y-3
              ">

                <label className="
                text-gray-300
                text-sm
                ">

                  Phone Number

                </label>

                <div className="
                relative
                ">

                  <Phone
                    size={18}
                    className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    "
                  />

                  <input

                    value={phone}

                    onChange={(e) =>
                      setPhone(
                        e.target
                          .value
                      )
                    }

                    disabled={
                      !editing
                    }

                    className="
                    w-full
                    h-16
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    pl-14
                    pr-5
                    text-white
                    outline-none
                    "
                  />

                </div>

              </div>

              {/* ADDRESS */}

              <div className="
              space-y-3
              ">

                <label className="
                text-gray-300
                text-sm
                ">

                  Address

                </label>

                <div className="
                relative
                ">

                  <MapPin
                    size={18}
                    className="
                    absolute
                    left-5
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    "
                  />

                  <input

                    value={address}

                    onChange={(e) =>
                      setAddress(
                        e.target
                          .value
                      )
                    }

                    disabled={
                      !editing
                    }

                    className="
                    w-full
                    h-16
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    pl-14
                    pr-5
                    text-white
                    outline-none
                    "
                  />

                </div>

              </div>

            </div>

            {/* BIO */}

            <div className="
            mt-8
            ">

              <label className="
              text-gray-300
              text-sm
              mb-3
              block
              ">

                Bio

              </label>

              <textarea

                value={bio}

                onChange={(e) =>
                  setBio(
                    e.target.value
                  )
                }

                disabled={
                  !editing
                }

                className="
                w-full
                h-40
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                text-white
                outline-none
                resize-none
                "
              />

            </div>

            {/* SAVE */}

            {editing && (

              <button className="
              mt-8
              px-8
              py-5
              rounded-2xl
              bg-gradient-to-r
              from-purple-500
              to-pink-500
              text-white
              font-semibold
              flex
              items-center
              gap-3
              shadow-[0_0_40px_rgba(168,85,247,0.35)]
              ">

                <Save
                  size={20}
                />

                Save Changes

              </button>
            )}

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

                  Services accessible to you.

                </p>

              </div>

              <Home
                size={32}
                className="
                text-purple-300
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

                            Active Access

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
        ">

          {/* ============================================= */}
          {/* 🔥 SOCIAL */}
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

  Social Profiles

</h2>

<div className="
space-y-5
">

  {[
    {
      name: "Instagram",
      value: "@uday_varma",
    },

    {
      name: "LinkedIn",
      value: "Uday Varma",
    },

    {
      name: "GitHub",
      value: "jgopi07",
    },
  ].map((item, i) => (

    <button
      key={i}
      className="
      w-full
      rounded-[28px]
      border
      border-white/10
      bg-white/[0.04]
      p-5
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
        font-bold
        text-lg
        ">

          {item.name.charAt(0)}

        </div>

        <div className="
        text-left
        ">

          <h3 className="
          text-white
          font-semibold
          mb-1
          ">

            {item.name}

          </h3>

          <p className="
          text-gray-400
          text-sm
          ">

            {item.value}

          </p>

        </div>

      </div>

      <ChevronRight
        size={20}
        className="
        text-gray-500
        "
      />

    </button>
  ))}

</div>

          </div>

          {/* ============================================= */}
          {/* 🔥 DOCUMENTS */}
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

              Documents

            </h2>

            <div className="
            space-y-5
            ">

              {documents.map(
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
                    p-5
                    flex
                    items-center
                    justify-between
                    "
                  >

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
                      text-purple-300
                      ">

                        <FileText
                          size={24}
                        />

                      </div>

                      <div>

                        <h3 className="
                        text-white
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

                          {
                            item.type
                          }

                        </p>

                      </div>

                    </div>

                    <button className="
                    w-12
                    h-12
                    rounded-xl
                    border
                    border-white/10
                    bg-white/[0.04]
                    flex
                    items-center
                    justify-center
                    text-gray-300
                    hover:text-white
                    transition
                    ">

                      <Download
                        size={18}
                      />

                    </button>

                  </div>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 SETTINGS */}
          {/* ============================================= */}

          <div className="
          rounded-[40px]
          bg-gradient-to-r
          from-purple-500
          to-pink-500
          p-8
          text-white
          shadow-[0_0_60px_rgba(168,85,247,0.35)]
          ">

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
                mb-3
                ">

                  Settings

                </h2>

                <p className="
                text-white/80
                ">

                  Personalized account controls.

                </p>

              </div>

              <Shield
                size={34}
              />

            </div>

            <div className="
            space-y-5
            ">

              {settings.map(
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
                      border-white/20
                      bg-black/10
                      backdrop-blur-xl
                      p-5
                      flex
                      items-center
                      justify-between
                      "
                    >

                      <div className="
                      flex
                      items-center
                      gap-5
                      ">

                        <div className="
                        w-14
                        h-14
                        rounded-2xl
                        bg-white/20
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
                          font-semibold
                          text-lg
                          mb-1
                          ">

                            {
                              item.title
                            }

                          </h3>

                          <p className="
                          text-white/70
                          text-sm
                          ">

                            {
                              item.status
                            }

                          </p>

                        </div>

                      </div>

                      <CheckCircle2
                        size={22}
                      />

                    </div>
                  );
                }
              )}

            </div>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 RECENT ACTIVITY */}
      {/* ================================================= */}

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

              Recent Activity

            </h2>

            <p className="
            text-gray-400
            ">

              Your latest hostel interactions.

            </p>

          </div>

          <Activity
            size={34}
            className="
            text-purple-300
            "
          />

        </div>

        {/* LIST */}

        <div className="
        grid
        md:grid-cols-2
        gap-6
        ">

          {activities.map(
            (
              item,
              i
            ) => (

              <div

                key={i}

                className="
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.04]
                p-6
                flex
                items-start
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

                  <Check
                    size={24}
                  />

                </div>

                <div className="
                flex-1
                ">

                  <h3 className="
                  text-white
                  font-semibold
                  text-lg
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
  );
}