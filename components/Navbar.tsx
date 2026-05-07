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
  Eye,
  EyeOff,
  ArrowRight,
  Shield,
  Menu,
} from "lucide-react";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useEffect,
  useState,
} from "react";

export default function Navbar() {

  /* ===================================================== */
  /* 🔥 STATES */
  /* ===================================================== */

  const [open, setOpen] =
    useState(false);

  const [mobileMenu, setMobileMenu] =
    useState(false);

  const [role, setRole] = useState<
    "student" | "admin"
  >("student");

  const [email, setEmail] =
    useState("");

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

  const [showPassword, setShowPassword] =
    useState(false);

  const [activeLink, setActiveLink] =
    useState("Home");

  const [navbarBg, setNavbarBg] =
    useState(false);

  /* ===================================================== */
  /* 🔥 EFFECT */
  /* ===================================================== */

  useEffect(() => {

    const handleScroll = () => {

      if (window.scrollY > 40) {

        setNavbarBg(true);

      } else {

        setNavbarBg(false);
      }
    };

    window.addEventListener(
      "scroll",
      handleScroll
    );

    return () =>
      window.removeEventListener(
        "scroll",
        handleScroll
      );

  }, []);

  /* ===================================================== */
  /* 🔥 NAVIGATION */
  /* ===================================================== */

  const navItems = [

    {
      name: "Home",
      id: "home",
    },

    {
      name: "Facilities",
      id: "facilities",
    },

    {
      name: "Rooms",
      id: "rooms",
    },

    {
      name: "Gallery",
      id: "gallery",
    },

    {
      name: "Contact",
      id: "contact",
    },
  ];

  const scrollToSection = (
    id: string,
    name: string
  ) => {

    setActiveLink(name);

    const element =
      document.getElementById(id);

    if (element) {

      element.scrollIntoView({

        behavior: "smooth",
      });
    }

    setMobileMenu(false);
  };

  /* ===================================================== */
/* 🔥 LOGIN */
/* ===================================================== */

const handleLogin = () => {

  /* ============================================== */
  /* 🔥 EMPTY CHECK */
  /* ============================================== */

  if (!email || !password) {

    setSuccess(false);

    setMessage(
      "Please fill all fields"
    );

    setShowPopup(true);

    setTimeout(() => {

      setShowPopup(false);

    }, 3000);

    return;
  }

  /* ============================================== */
  /* 🔥 EMAIL VALIDATION */
  /* ============================================== */

  const emailRegex =
    /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (!emailRegex.test(email)) {

    setSuccess(false);

    setMessage(
      "Please enter valid email"
    );

    setShowPopup(true);

    setTimeout(() => {

      setShowPopup(false);

    }, 3000);

    return;
  }

  /* ============================================== */
  /* 🔥 DEMO CREDENTIALS */
  /* ============================================== */

  const studentDemo = {

    email: "student@svbs.com",

    password: "student123",
  };

  const adminDemo = {

    email: "admin@svbs.com",

    password: "admin123",
  };

  /* ============================================== */
  /* 🔥 LOADING */
  /* ============================================== */

  setLoading(true);

  /* ============================================== */
  /* 🔥 AUTH CHECK */
  /* ============================================== */

  setTimeout(() => {

    const validStudent =

      role === "student" &&

      email === studentDemo.email &&

      password === studentDemo.password;

    const validAdmin =

      role === "admin" &&

      email === adminDemo.email &&

      password === adminDemo.password;

    /* ========================================== */
    /* 🔥 SUCCESS */
    /* ========================================== */

    if (

      validStudent ||

      validAdmin

    ) {

      setLoading(false);

      setSuccess(true);

      setMessage(

        `${
          role === "student"
            ? "Student"
            : "Admin"
        } login successful`

      );

      setShowPopup(true);

      /* ====================================== */
      /* 🔥 LOCAL STORAGE */
      /* ====================================== */

      localStorage.setItem(
        "svbs-auth",
        "true"
      );

      localStorage.setItem(
        "svbs-role",
        role
      );

      localStorage.setItem(
        "svbs-user-email",
        email
      );

      /* ====================================== */
      /* 🔥 CLOSE MODAL */
      /* ====================================== */

      setTimeout(() => {

        setOpen(false);

      }, 1000);

      /* ====================================== */
      /* 🔥 REDIRECT */
      /* ====================================== */

      setTimeout(() => {

        if (role === "student") {

          window.location.href =
            "/StudentDashboard";

        } else {

          window.location.href =
            "/AdminDashboard";
        }

      }, 1600);

    }

    /* ========================================== */
    /* 🔥 INVALID LOGIN */
    /* ========================================== */

    else {

      setLoading(false);

      setSuccess(false);

      setMessage(
        "Invalid demo credentials"
      );

      setShowPopup(true);

      setTimeout(() => {

        setShowPopup(false);

      }, 3500);
    }

  }, 2000);
};

  /* ===================================================== */
  /* 🔥 JSX */
  /* ===================================================== */

  return (

    <>

      {/* ================================================= */}
      {/* 🔥 NAVBAR */}
      {/* ================================================= */}

      <motion.nav

        initial={{
          y: -100,
          opacity: 0,
        }}

        animate={{
          y: 0,
          opacity: 1,
        }}

        transition={{
          duration: 0.7,
        }}

        className="
        fixed
        top-5
        left-1/2
        -translate-x-1/2
        w-[94%]
        max-w-7xl
        z-50
        "
      >

        <div
          className={`
          relative
          flex
          items-center
          justify-between
          px-8
          py-4
          rounded-full
          border
          overflow-hidden
          transition-all
          duration-500

          ${
            navbarBg

              ? `
              bg-black/70
              backdrop-blur-3xl
              border-purple-500/20
              shadow-[0_10px_70px_rgba(0,0,0,0.6)]
              `

              : `
              bg-white/[0.04]
              backdrop-blur-2xl
              border-white/10
              `
          }
          `}
        >

          {/* GLOW */}

          <div className="
          absolute
          inset-0
          pointer-events-none
          opacity-40
          ">

            <div className="
            absolute
            -top-20
            left-0
            w-72
            h-72
            bg-purple-500/20
            blur-[120px]
            rounded-full
            "></div>

            <div className="
            absolute
            -bottom-20
            right-0
            w-72
            h-72
            bg-pink-500/20
            blur-[120px]
            rounded-full
            "></div>

          </div>

          {/* LOGO */}

          <div className="
          relative
          z-10
          flex
          items-center
          gap-4
          ">

            <motion.div

              whileHover={{
                rotate: 360,
              }}

              transition={{
                duration: 0.8,
              }}

              className="
              w-12
              h-12
              rounded-full
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-yellow-400
              flex
              items-center
              justify-center
              font-bold
              text-black
              shadow-[0_0_30px_rgba(168,85,247,0.5)]
              "
            >

              S

            </motion.div>

            <div>

              <h1 className="
              text-white
              text-2xl
              font-bold
              tracking-wide
              ">

                SVBS

                <span className="
                text-gray-500
                ">

                  .

                </span>

              </h1>

              <p className="
              text-[10px]
              uppercase
              tracking-[0.3em]
              text-gray-500
              ">

                Premium Hostel

              </p>

            </div>

          </div>

          {/* DESKTOP LINKS */}

          <ul className="
          hidden
          lg:flex
          items-center
          gap-8
          text-sm
          text-gray-300
          z-10
          ">

            {navItems.map((item, i) => (

              <li
                key={i}
                onClick={() =>
                  scrollToSection(
                    item.id,
                    item.name
                  )
                }
                className="
                relative
                cursor-pointer
                group
                "
              >

                <span
                  className={`
                  transition-all
                  duration-300

                  ${
                    activeLink === item.name

                      ? `
                      text-white
                      `

                      : `
                      group-hover:text-white
                      `
                  }
                  `}
                >

                  {item.name}

                </span>

                <span
                  className={`
                  absolute
                  left-0
                  -bottom-2
                  h-[2px]
                  bg-gradient-to-r
                  from-purple-400
                  via-pink-400
                  to-yellow-400
                  transition-all
                  duration-300

                  ${
                    activeLink === item.name

                      ? `
                      w-full
                      `

                      : `
                      w-0
                      group-hover:w-full
                      `
                  }
                  `}
                ></span>

              </li>
            ))}

          </ul>

          {/* RIGHT */}

          <div className="
          flex
          items-center
          gap-4
          z-10
          ">

            {/* MOBILE MENU */}

            <button
              onClick={() =>
                setMobileMenu(
                  !mobileMenu
                )
              }
              className="
              lg:hidden
              text-white
              "
            >

              <Menu size={28} />

            </button>

            {/* PROFILE */}

            <button
              onClick={() =>
                setOpen(true)
              }
              className="
              hidden
              sm:flex
              w-12
              h-12
              rounded-full
              border
              border-white/10
              bg-white/[0.05]
              items-center
              justify-center
              text-gray-300
              hover:text-white
              hover:border-purple-500/40
              transition-all
              duration-300
              "
            >

              <User size={19} />

            </button>

            {/* CTA */}

            <button
              onClick={() =>
                setOpen(true)
              }
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

              <span className="
              absolute
              inset-0
              bg-gradient-to-r
              from-purple-500
              via-pink-500
              to-yellow-400
              "></span>

              <span className="
              absolute
              inset-0
              opacity-0
              group-hover:opacity-100
              transition-all
              duration-500
              blur-xl
              bg-gradient-to-r
              from-yellow-400
              via-pink-500
              to-purple-500
              "></span>

              <span className="
              relative
              z-10
              flex
              items-center
              gap-2
              ">

                Book Now

                <ArrowRight
                  size={16}
                />

              </span>

            </button>

          </div>

        </div>

      </motion.nav>

      {/* ================================================ */}
      {/* 🔥 MOBILE MENU */}
      {/* ================================================ */}

      <AnimatePresence>

        {mobileMenu && (

          <motion.div

            initial={{
              opacity: 0,
              y: -20,
            }}

            animate={{
              opacity: 1,
              y: 0,
            }}

            exit={{
              opacity: 0,
              y: -20,
            }}

            className="
            fixed
            top-28
            left-1/2
            -translate-x-1/2
            w-[92%]
            bg-black/80
            backdrop-blur-3xl
            border
            border-white/10
            rounded-3xl
            p-6
            z-40
            lg:hidden
            "
          >

            <div className="
            flex
            flex-col
            gap-5
            ">

              {navItems.map((item, i) => (

                <button
                  key={i}
                  onClick={() =>
                    scrollToSection(
                      item.id,
                      item.name
                    )
                  }
                  className="
                  text-left
                  text-gray-300
                  hover:text-white
                  transition-all
                  duration-300
                  "
                >

                  {item.name}

                </button>
              ))}

            </div>

          </motion.div>
        )}

      </AnimatePresence>

      {/* ================================================ */}
      {/* 🔥 LOGIN MODAL */}
      {/* ================================================ */}

      <AnimatePresence>

        {open && (

          <motion.div

            initial={{
              opacity: 0,
            }}

            animate={{
              opacity: 1,
            }}

            exit={{
              opacity: 0,
            }}

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

            <motion.div

              initial={{
                scale: 0.8,
                opacity: 0,
              }}

              animate={{
                scale: 1,
                opacity: 1,
              }}

              exit={{
                scale: 0.8,
                opacity: 0,
              }}

              className="
              relative
              w-full
              max-w-lg
              rounded-[40px]
              border
              border-white/10
              bg-[#111116]/95
              overflow-hidden
              shadow-[0_0_100px_rgba(168,85,247,0.15)]
              "
            >

              {/* CONTENT */}

              <div className="
              relative
              z-10
              p-10
              ">

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
                  "
                >

                  <X size={28} />

                </button>

                <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                border
                border-white/10
                bg-white/[0.04]
                text-xs
                uppercase
                tracking-[0.2em]
                text-gray-400
                mb-6
                ">

                  <Sparkles size={14} />

                  Secure Access

                </div>

                <h2 className="
                text-5xl
                font-bold
                text-white
                mb-3
                ">

                  Welcome Back

                </h2>

                <p className="
                text-gray-400
                mb-8
                ">

                  Login to continue

                </p>

                {/* ROLE */}

                <div className="
                grid
                grid-cols-2
                gap-4
                mb-8
                ">

                  <button
                    onClick={() =>
                      setRole("student")
                    }
                    className={`
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300

                    ${
                      role === "student"

                        ? `
                        bg-gradient-to-r
                        from-purple-500
                        to-pink-500
                        text-white
                        `

                        : `
                        bg-white/[0.05]
                        text-gray-300
                        `
                    }
                    `}
                  >

                    Student

                  </button>

                  <button
                    onClick={() =>
                      setRole("admin")
                    }
                    className={`
                    py-4
                    rounded-2xl
                    transition-all
                    duration-300

                    ${
                      role === "admin"

                        ? `
                        bg-gradient-to-r
                        from-pink-500
                        to-yellow-400
                        text-white
                        `

                        : `
                        bg-white/[0.05]
                        text-gray-300
                        `
                    }
                    `}
                  >

                    Admin

                  </button>

                </div>

                {/* EMAIL */}

                <div className="
                relative
                mb-5
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
                    type="email"
                    value={email}
                    onChange={(e) =>
                      setEmail(
                        e.target.value
                      )
                    }
                    placeholder="Enter email"
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
                    outline-none
                    focus:border-purple-500/40
                    "
                  />

                </div>

                {/* PASSWORD */}

                <div className="
                relative
                mb-8
                ">

                  <Lock
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
                    type={
                      showPassword
                        ? "text"
                        : "password"
                    }
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
                    pr-14
                    py-5
                    rounded-2xl
                    bg-white/[0.05]
                    border
                    border-white/10
                    text-white
                    outline-none
                    focus:border-pink-500/40
                    "
                  />

                  <button
                    type="button"
                    onClick={() =>
                      setShowPassword(
                        !showPassword
                      )
                    }
                    className="
                    absolute
                    right-5
                    top-1/2
                    -translate-y-1/2
                    text-gray-500
                    "
                  >

                    {showPassword

                      ? <EyeOff size={18} />

                      : <Eye size={18} />
                    }

                  </button>

                </div>

                {/* LOGIN */}

                <button
                  onClick={handleLogin}
                  disabled={loading}
                  className="
                  relative
                  overflow-hidden
                  w-full
                  py-5
                  rounded-2xl
                  text-white
                  font-semibold
                  "
                >

                  <span className="
                  absolute
                  inset-0
                  bg-gradient-to-r
                  from-purple-500
                  via-pink-500
                  to-yellow-400
                  "></span>

                  <span className="
                  relative
                  z-10
                  flex
                  items-center
                  justify-center
                  gap-3
                  ">

                    {loading

                      ? "Authenticating..."

                      : "Continue"
                    }

                  </span>

                </button>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </>
  );
}