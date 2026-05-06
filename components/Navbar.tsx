"use client";

import {
  User,
  X,
  ShieldCheck,
  Mail,
  Lock,
  CheckCircle2,
  AlertCircle,
  Sparkles,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import { useState } from "react";

export default function Navbar() {

  /* ======================================================= */
  /* 🔥 STATES */
  /* ======================================================= */

  const [open, setOpen] = useState(false);

  const [role, setRole] = useState<
    "student" | "admin"
  >("student");

  const [email, setEmail] = useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [success, setSuccess] =
    useState(false);

  const [showPopup, setShowPopup] =
    useState(false);

  /* ======================================================= */
  /* 🔥 LOGIN */
  /* ======================================================= */

  const handleLogin = () => {

    /* 🔥 EMPTY CHECK */

    if (!email || !password) {

      setSuccess(false);

      setMessage(
        "Please fill all fields"
      );

      setShowPopup(true);

      return;
    }

    /* 🔥 EMAIL VALIDATION */

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {

      setSuccess(false);

      setMessage(
        "Please enter valid email"
      );

      setShowPopup(true);

      return;
    }

    /* 🔥 LOADING */

    setLoading(true);

    /* 🔥 DEMO */

    setTimeout(() => {

      setLoading(false);

      setSuccess(false);

      setMessage(
        "Authentication backend not connected yet"
      );

      setShowPopup(true);

    }, 1800);
  };

  /* ======================================================= */
  /* 🔥 JSX */
  /* ======================================================= */

  return (
    <>

      {/* =================================================== */}
      {/* 🔥 NAVBAR */}
      {/* =================================================== */}

      <motion.nav
        initial={{
          y: -90,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.7,
          ease: "easeOut",
        }}
        className="
          fixed
          top-6
          left-1/2
          -translate-x-1/2
          w-[94%]
          max-w-7xl
          z-50
        "
      >

        <div
          className="
          relative
          flex
          items-center
          justify-between
          px-8
          py-4
          rounded-full
          overflow-hidden
          border
          border-white/10
          bg-white/[0.05]
          backdrop-blur-2xl
          shadow-[0_10px_50px_rgba(0,0,0,0.45)]
        "
        >

          {/* 🔥 GLOW */}

          <div className="absolute inset-0 opacity-30 pointer-events-none">

            <div className="absolute -top-16 left-0 w-72 h-72 bg-purple-500/20 blur-[120px] rounded-full animate-pulse"></div>

            <div className="absolute -bottom-16 right-0 w-72 h-72 bg-pink-500/20 blur-[120px] rounded-full animate-pulse"></div>

          </div>

          {/* ================================================= */}
          {/* 🔹 LOGO */}
          {/* ================================================= */}

          <div className="relative flex items-center gap-3 z-10">

            <div className="relative w-11 h-11 rounded-full bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400 flex items-center justify-center text-black font-bold shadow-[0_0_30px_rgba(168,85,247,0.5)]">

              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 blur-xl opacity-50"></div>

              <span className="relative z-10">
                S
              </span>

            </div>

            <h1 className="text-white font-semibold text-xl tracking-wide">

              SVBS

              <span className="text-gray-400">
                .
              </span>

            </h1>

          </div>

          {/* ================================================= */}
          {/* 🔹 LINKS */}
          {/* ================================================= */}

          <ul className="hidden md:flex items-center gap-8 text-gray-300 text-sm z-10">

            {[
              "Home",
              "Facilities",
              "Rooms",
              "Gallery",
              "Contact",
            ].map((item, i) => (

              <li
                key={i}
                className="
                  relative
                  group
                  cursor-pointer
                  px-2
                  py-1
                "
              >

                <span className="relative z-10 group-hover:text-white transition duration-300">

                  {item}

                </span>

                <span className="absolute inset-0 rounded-full bg-white/5 opacity-0 group-hover:opacity-100 transition duration-300"></span>

                <span className="absolute left-1/2 -bottom-1 h-[2px] w-0 bg-gradient-to-r from-purple-400 via-pink-400 to-yellow-400 group-hover:w-full group-hover:left-0 transition-all duration-300"></span>

              </li>
            ))}
          </ul>

          {/* ================================================= */}
          {/* 🔹 RIGHT */}
          {/* ================================================= */}

          <div className="flex items-center gap-4 z-10">

            {/* 🔥 PROFILE */}

            <button
              onClick={() => setOpen(true)}
              className="
                relative
                w-12
                h-12
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                flex
                items-center
                justify-center
                text-gray-300
                hover:text-white
                hover:border-purple-500/40
                hover:bg-white/[0.08]
                transition
                duration-300
                overflow-hidden
                group
              "
            >

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-r from-purple-500/20 to-pink-500/20 blur-xl"></span>

              <User
                size={20}
                className="relative z-10"
              />

            </button>

            {/* 🔥 CTA */}

            <button
              onClick={() => setOpen(true)}
              className="
                relative
                overflow-hidden
                px-7
                py-3
                rounded-full
                text-white
                text-sm
                font-medium
                group
              "
            >

              {/* BASE */}

              <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"></span>

              {/* GLOW */}

              <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"></span>

              {/* SHINE */}

              <span className="absolute -left-20 top-0 w-20 h-full bg-white/30 skew-x-12 blur-md group-hover:left-[130%] transition-all duration-1000"></span>

              {/* TEXT */}

              <span className="relative z-10 flex items-center gap-2">

                Book Now →

              </span>

            </button>

          </div>

          {/* 🔥 BOTTOM LINE */}

          <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-purple-500/40 to-transparent"></div>

        </div>
      </motion.nav>

      {/* =================================================== */}
      {/* 🔥 MODAL */}
      {/* =================================================== */}

      <AnimatePresence>

        {open && (

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="
              fixed
              inset-0
              z-[100]
              bg-black/80
              backdrop-blur-xl
              flex
              items-center
              justify-center
              px-4
            "
          >

            {/* ================================================= */}
            {/* 🔥 LOGIN BOX */}
            {/* ================================================= */}

            <motion.div
              initial={{
                opacity: 0,
                scale: 0.85,
                y: 60,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.85,
              }}
              transition={{
                duration: 0.4,
              }}
              className="
                relative
                w-full
                max-w-xl
                rounded-[40px]
                overflow-hidden
                border
                border-white/10
                bg-[#111116]/95
                backdrop-blur-3xl
                shadow-[0_0_100px_rgba(168,85,247,0.15)]
              "
            >

              {/* 🔥 BACKGROUND */}

              <div className="absolute inset-0 overflow-hidden">

                <div className="absolute -top-20 -left-20 w-96 h-96 bg-purple-500/20 blur-[140px] rounded-full"></div>

                <div className="absolute bottom-0 right-0 w-96 h-96 bg-pink-500/20 blur-[140px] rounded-full"></div>

                <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] bg-yellow-400/5 blur-[140px] rounded-full"></div>

              </div>

              {/* ================================================= */}
              {/* 🔹 CONTENT */}
              {/* ================================================= */}

              <div className="relative z-10 p-10">

                {/* CLOSE */}

                <button
                  onClick={() =>
                    setOpen(false)
                  }
                  className="
                    absolute
                    top-6
                    right-6
                    text-gray-500
                    hover:text-white
                    transition
                  "
                >

                  <X size={30} />

                </button>

                {/* TAG */}

                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/[0.04] text-xs tracking-[0.2em] uppercase text-gray-400 mb-6">

                  <Sparkles size={14} />

                  Secure Access

                </div>

                {/* TITLE */}

                <h2 className="text-6xl font-bold text-white leading-none mb-4">

                  Login

                </h2>

                <p className="text-gray-400 text-lg mb-10">

                  Continue as student or admin

                </p>

                {/* ROLE */}

                <div className="grid grid-cols-2 gap-4 mb-8">

                  {/* STUDENT */}

                  <button
                    onClick={() =>
                      setRole("student")
                    }
                    className={`
                      relative
                      overflow-hidden
                      rounded-2xl
                      py-5
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        role === "student"
                          ? "text-white shadow-[0_0_40px_rgba(168,85,247,0.4)]"
                          : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
                      }
                    `}
                  >

                    {role === "student" && (
                      <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-fuchsia-500 to-pink-500"></span>
                    )}

                    <span className="relative flex items-center justify-center gap-2">

                      <User size={18} />

                      Student

                    </span>

                  </button>

                  {/* ADMIN */}

                  <button
                    onClick={() =>
                      setRole("admin")
                    }
                    className={`
                      relative
                      overflow-hidden
                      rounded-2xl
                      py-5
                      font-semibold
                      transition-all
                      duration-300

                      ${
                        role === "admin"
                          ? "text-white shadow-[0_0_40px_rgba(236,72,153,0.4)]"
                          : "bg-white/[0.04] text-gray-300 hover:bg-white/[0.08]"
                      }
                    `}
                  >

                    {role === "admin" && (
                      <span className="absolute inset-0 bg-gradient-to-r from-pink-500 via-fuchsia-500 to-yellow-400"></span>
                    )}

                    <span className="relative flex items-center justify-center gap-2">

                      <ShieldCheck size={18} />

                      Admin

                    </span>

                  </button>

                </div>

                {/* EMAIL */}

                <div className="relative mb-5">

                  <Mail
                    size={19}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                    "
                  />

                  <input
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                    placeholder={
                      role === "student"
                        ? "Enter your email"
                        : "Admin email"
                    }
                    className="
                      w-full
                      pl-14
                      pr-5
                      py-5
                      rounded-2xl
                      bg-white/[0.05]
                      border
                      border-white/10
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-purple-500/40
                      focus:bg-white/[0.08]
                      transition-all
                      duration-300
                    "
                  />

                </div>

                {/* PASSWORD */}

                <div className="relative mb-7">

                  <Lock
                    size={19}
                    className="
                      absolute
                      left-5
                      top-1/2
                      -translate-y-1/2
                      text-gray-500
                    "
                  />

                  <input
                    type="password"
                    value={password}
                    onChange={(e) =>
                      setPassword(
                        e.target.value
                      )
                    }
                    placeholder="Enter password"
                    className="
                      w-full
                      pl-14
                      pr-5
                      py-5
                      rounded-2xl
                      bg-white/[0.05]
                      border
                      border-white/10
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-pink-500/40
                      focus:bg-white/[0.08]
                      transition-all
                      duration-300
                    "
                  />

                </div>

                {/* HELP */}

                <div className="flex items-center justify-between text-sm mb-8">

  <button
    className="
      text-gray-500
      hover:text-purple-300
      transition-all
      duration-300
      hover:translate-x-1
    "
    onClick={() =>
      alert(
        "Password reset system will be added with backend."
      )
    }
  >
    Forgot password?
  </button>

  <button
    className="
      text-gray-500
      hover:text-pink-300
      transition-all
      duration-300
      hover:-translate-x-1
    "
    onClick={() =>
      alert(
        "Support system coming soon."
      )
    }
  >
    Need help?
  </button>

</div>

                {/* LOGIN BUTTON */}

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="
                    relative
                    overflow-hidden
                    w-full
                    py-5
                    rounded-2xl
                    font-semibold
                    text-white
                    group
                    disabled:opacity-70
                  "
                >

                  {/* BASE */}

                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-yellow-400"></span>

                  {/* GLOW */}

                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 blur-2xl transition duration-500 bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-500"></span>

                  {/* SHINE */}

                  <span className="absolute -left-20 top-0 h-full w-20 bg-white/30 skew-x-12 blur-md group-hover:left-[130%] transition-all duration-1000"></span>

                  {/* TEXT */}

                  <span className="relative z-10 text-lg flex items-center justify-center gap-3">

                    {loading ? (

                      <>

                        <div className="w-5 h-5 border-2 border-white/40 border-t-white rounded-full animate-spin"></div>

                        Authenticating...

                      </>

                    ) : (

                      <>
                        Continue as {
                          role === "student"
                            ? "Student"
                            : "Admin"
                        }
                      </>

                    )}

                  </span>

                </button>

                {/* FOOTER */}

                <div className="mt-10 pt-6 border-t border-white/10">

                  <div className="flex items-center justify-center gap-3 text-xs uppercase tracking-[0.25em] text-gray-600">

                    <div className="w-12 h-[1px] bg-gradient-to-r from-transparent to-white/20"></div>

                    Authentication System

                    <div className="w-12 h-[1px] bg-gradient-to-l from-transparent to-white/20"></div>

                  </div>

                </div>

              </div>

              {/* BORDER */}

              <div className="absolute inset-0 rounded-[40px] border border-white/10 pointer-events-none"></div>

            </motion.div>

            {/* ================================================= */}
            {/* 🔥 POPUP */}
            {/* ================================================= */}

            <AnimatePresence>

              {showPopup && (

                <motion.div
                  initial={{
                    opacity: 0,
                    y: -40,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -40,
                  }}
                  className="
                    fixed
                    top-6
                    right-6
                    z-[200]
                  "
                >

                  <div
                    className={`
                      relative
                      overflow-hidden
                      flex
                      items-center
                      gap-4
                      px-6
                      py-5
                      rounded-[24px]
                      border
                      backdrop-blur-3xl
                      shadow-[0_10px_50px_rgba(0,0,0,0.45)]

                      ${
                        success
                          ? "bg-emerald-500/10 border-emerald-400/20"
                          : "bg-[#18181f]/90 border-pink-500/20"
                      }
                    `}
                  >

                    {/* BG */}

                    <div className="absolute inset-0 overflow-hidden">

                      <div className="absolute -top-10 -left-10 w-32 h-32 bg-purple-500/20 blur-[70px] rounded-full"></div>

                      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-pink-500/20 blur-[70px] rounded-full"></div>

                    </div>

                    {/* ICON */}

                    {success ? (

                      <div className="relative">

                        <CheckCircle2
                          size={24}
                          className="text-emerald-400"
                        />

                        <div className="absolute inset-0 bg-emerald-400 blur-xl opacity-40"></div>

                      </div>

                    ) : (

                      <div className="relative">

                        <AlertCircle
                          size={24}
                          className="text-pink-400"
                        />

                        <div className="absolute inset-0 bg-pink-400 blur-xl opacity-40"></div>

                      </div>

                    )}

                    {/* TEXT */}

                    <div className="relative z-10">

                      <p className="text-white font-medium">

                        {success
                          ? "Login Successful"
                          : "Authentication Required"}

                      </p>

                      <p className="text-sm text-gray-300">

                        {message}

                      </p>

                    </div>

                    {/* CLOSE */}

                    <button
                      onClick={() =>
                        setShowPopup(false)
                      }
                      className="
                        relative
                        z-10
                        text-gray-400
                        hover:text-white
                      "
                    >

                      <X size={18} />

                    </button>

                  </div>

                </motion.div>
              )}

            </AnimatePresence>

          </motion.div>
        )}

      </AnimatePresence>
    </>
  );
}