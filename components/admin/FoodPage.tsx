"use client";

import {
  Activity,
  AlertTriangle,
  ArrowUpRight,
  Bell,
  CalendarDays,
  CheckCircle2,
  ChefHat,
  Clock3,
  Coffee,
  Download,
  Eye,
  Flame,
  Leaf,
  Moon,
  Pencil,
  Plus,
  Search,
  ShieldCheck,
  Sparkles,
  Star,
  Sun,
  Trash2,
  Utensils,
  UtensilsCrossed,
  Vegan,
  Wheat,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

export default function FoodPage() {

  /* ====================================================== */
  /* 🔥 STATES */
  /* ====================================================== */

  const [search, setSearch] =
    useState("");

  const [activeDay, setActiveDay] =
    useState("Monday");

  /* ====================================================== */
  /* 🔥 TODAY MENU */
  /* ====================================================== */

  const todayMenu = [

    {
      meal: "Breakfast",
      time: "7:00 AM - 9:00 AM",
      items:
        "Idli, Vada, Sambar, Coconut Chutney, Tea",
      type: "Veg",
      icon: Coffee,
      glow:
        "from-yellow-400 to-orange-500",
    },

    {
      meal: "Lunch",
      time: "12:30 PM - 2:30 PM",
      items:
        "Rice, Dal Fry, Paneer Curry, Fryums, Salad",
      type: "Veg",
      icon: Utensils,
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      meal: "Snacks",
      time: "5:00 PM - 6:00 PM",
      items:
        "Veg Puff, Coffee, Biscuits",
      type: "Veg",
      icon: Flame,
      glow:
        "from-pink-500 to-rose-500",
    },

    {
      meal: "Dinner",
      time: "7:30 PM - 9:30 PM",
      items:
        "Chapathi, Chicken Curry, Rice, Sweet",
      type: "Non-Veg",
      icon: Moon,
      glow:
        "from-purple-500 to-pink-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 WEEKLY MENU */
  /* ====================================================== */

  const weeklyMenu = [

    {
      day: "Monday",
      breakfast:
        "Idli & Vada",
      lunch:
        "Paneer Curry",
      dinner:
        "Chicken Curry",
    },

    {
      day: "Tuesday",
      breakfast:
        "Dosa & Chutney",
      lunch:
        "Veg Biryani",
      dinner:
        "Egg Curry",
    },

    {
      day: "Wednesday",
      breakfast:
        "Poori & Curry",
      lunch:
        "Rajma Rice",
      dinner:
        "Fish Curry",
    },

    {
      day: "Thursday",
      breakfast:
        "Upma & Tea",
      lunch:
        "Mushroom Curry",
      dinner:
        "Chicken Fry",
    },

    {
      day: "Friday",
      breakfast:
        "Pongal & Vada",
      lunch:
        "Fried Rice",
      dinner:
        "Paneer Butter Masala",
    },

    {
      day: "Saturday",
      breakfast:
        "Aloo Paratha",
      lunch:
        "Meals Special",
      dinner:
        "Mutton Curry",
    },

    {
      day: "Sunday",
      breakfast:
        "Masala Dosa",
      lunch:
        "Chicken Biryani",
      dinner:
        "Ice Cream Dinner",
    },
  ];

  /* ====================================================== */
  /* 🔥 FEEDBACKS */
  /* ====================================================== */

  const feedbacks = [

    {
      name: "Rahul Sharma",
      feedback:
        "Dinner quality was excellent today 🔥",
      rating: 5,
    },

    {
      name: "Aman Verma",
      feedback:
        "Need more spicy curries during dinner.",
      rating: 4,
    },

    {
      name: "Kiran Kumar",
      feedback:
        "Breakfast was fresh and tasty.",
      rating: 5,
    },

    {
      name: "Deepak Reddy",
      feedback:
        "Please improve snacks section.",
      rating: 3,
    },
  ];

  /* ====================================================== */
  /* 🔥 STAFF */
  /* ====================================================== */

  const kitchenStaff = [

    {
      name: "Chef Anand",
      role: "Head Chef",
      status: "Available",
    },

    {
      name: "Rakesh Kumar",
      role: "Assistant Chef",
      status: "Working",
    },

    {
      name: "Mahesh",
      role: "Food Supervisor",
      status: "Available",
    },
  ];

  /* ====================================================== */
  /* 🔥 ANALYTICS */
  /* ====================================================== */

  const analytics = [

    {
      title:
        "Meals Served",
      value:
        "728",
      desc:
        "Today",
      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title:
        "Veg Orders",
      value:
        "512",
      desc:
        "70% Students",
      glow:
        "from-emerald-500 to-green-400",
    },

    {
      title:
        "Non-Veg Orders",
      value:
        "216",
      desc:
        "30% Students",
      glow:
        "from-orange-500 to-red-500",
    },

    {
      title:
        "Food Rating",
      value:
        "4.8★",
      desc:
        "Excellent",
      glow:
        "from-yellow-400 to-orange-500",
    },
  ];

  /* ====================================================== */
  /* 🔥 FILTER */
  /* ====================================================== */

  const filteredFeedbacks =
    feedbacks.filter((item) =>
      item.feedback
        .toLowerCase()
        .includes(
          search.toLowerCase()
        )
    );

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <div className="
    space-y-10
    ">

      {/* ================================================= */}
      {/* 🔥 HERO */}
      {/* ================================================= */}

      <div className="
      relative
      overflow-hidden
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.05]
      p-8
      lg:p-12
      ">

        {/* GLOW */}

        <div className="
        absolute
        top-0
        right-0
        w-[450px]
        h-[450px]
        bg-orange-500/20
        blur-[180px]
        rounded-full
        "></div>

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

          <div>

            <div className="
            inline-flex
            items-center
            gap-3
            px-5
            py-3
            rounded-full
            border
            border-white/10
            bg-white/[0.04]
            text-xs
            uppercase
            tracking-[0.25em]
            text-gray-300
            mb-6
            ">

              <Sparkles
                size={14}
                className="
                text-orange-300
                "
              />

              Hostel Mess Management

            </div>

            <h1 className="
            text-4xl
            sm:text-5xl
            xl:text-6xl
            font-black
            text-white
            leading-none
            mb-5
            ">

              Food & Mess Dashboard 🍽️

            </h1>

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-[850px]
            ">

              Manage daily hostel
              meals, weekly food
              schedules, student
              feedback, kitchen staff,
              nutrition tracking, and
              food service analytics.

            </p>

          </div>

          {/* RIGHT */}

          <div className="
          flex
          flex-wrap
          gap-5
          ">

            <button className="
            px-8
            py-5
            rounded-[24px]
            border
            border-white/10
            bg-white/[0.04]
            text-white
            font-semibold
            flex
            items-center
            justify-center
            gap-4
            hover:border-orange-500/30
            transition-all
            duration-300
            ">

              <Download size={22} />

              Export Menu

            </button>

            <button className="
            px-8
            py-5
            rounded-[24px]
            bg-gradient-to-r
            from-orange-500
            via-pink-500
            to-yellow-400
            text-white
            font-bold
            flex
            items-center
            justify-center
            gap-4
            shadow-[0_0_40px_rgba(249,115,22,0.4)]
            hover:scale-[1.03]
            transition-all
            duration-300
            ">

              <Plus size={22} />

              Add Food Item

            </button>

          </div>

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 ANALYTICS */}
      {/* ================================================= */}

      <div className="
      grid
      sm:grid-cols-2
      xl:grid-cols-4
      gap-7
      ">

        {analytics.map((item, i) => (

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
              delay: i * 0.08,
            }}

            className="
            relative
            overflow-hidden
            rounded-[35px]
            border
            border-white/10
            bg-white/[0.05]
            p-7
            hover:-translate-y-2
            transition-all
            duration-300
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
            blur-[100px]
            opacity-30
            bg-gradient-to-r
            ${item.glow}
            `}></div>

            {/* CONTENT */}

            <div className="
            relative
            z-10
            ">

              <p className="
              text-gray-400
              mb-4
              ">

                {item.title}

              </p>

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
              text-sm
              ">

                {item.desc}

              </p>

            </div>

          </motion.div>
        ))}

      </div>

      {/* ================================================= */}
      {/* 🔥 TODAY MENU */}
      {/* ================================================= */}

      <div className="
      rounded-[40px]
      border
      border-white/10
      bg-white/[0.05]
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

              Today's Menu

            </h2>

            <p className="
            text-gray-400
            text-lg
            ">

              Live meal schedule and
              food availability.

            </p>

          </div>

          <div className="
          flex
          items-center
          gap-4
          px-5
          py-4
          rounded-2xl
          border
          border-white/10
          bg-white/[0.04]
          text-white
          ">

            <CalendarDays
              size={20}
              className="
              text-orange-300
              "
            />

            Monday • June 12

          </div>

        </div>

        {/* GRID */}

        <div className="
        grid
        md:grid-cols-2
        gap-7
        ">

          {todayMenu.map(
            (item, i) => {

              const Icon =
                item.icon;

              return (

                <motion.div

                  key={i}

                  whileHover={{
                    y: -6,
                  }}

                  className="
                  relative
                  overflow-hidden
                  rounded-[35px]
                  border
                  border-white/10
                  bg-white/[0.04]
                  p-7
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

                    {/* TOP */}

                    <div className="
                    flex
                    items-center
                    justify-between
                    mb-8
                    ">

                      <div className="
                      flex
                      items-center
                      gap-5
                      ">

                        <div className="
                        w-16
                        h-16
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
                            size={28}
                          />

                        </div>

                        <div>

                          <h3 className="
                          text-3xl
                          font-black
                          text-white
                          mb-2
                          ">

                            {item.meal}

                          </h3>

                          <p className="
                          text-gray-400
                          text-sm
                          ">

                            {item.time}

                          </p>

                        </div>

                      </div>

                      {/* TYPE */}

                      <div className={`
                      px-4
                      py-2
                      rounded-full
                      border
                      text-sm
                      font-semibold

                      ${
                        item.type ===
                        "Veg"

                          ? `
                            bg-emerald-500/10
                            border-emerald-500/20
                            text-emerald-300
                          `

                          : `
                            bg-red-500/10
                            border-red-500/20
                            text-red-300
                          `
                      }
                      `}>

                        {item.type}

                      </div>

                    </div>

                    {/* ITEMS */}

                    <p className="
                    text-gray-300
                    text-lg
                    leading-relaxed
                    mb-8
                    ">

                      {item.items}

                    </p>

                    {/* FOOT */}

                    <div className="
                    flex
                    items-center
                    justify-between
                    ">

                      <div className="
                      flex
                      items-center
                      gap-3
                      text-gray-400
                      text-sm
                      ">

                        <CheckCircle2
                          size={18}
                          className="
                          text-emerald-400
                          "
                        />

                        Available

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
                      text-white
                      ">

                        <ArrowUpRight
                          size={20}
                        />

                      </button>

                    </div>

                  </div>

                </motion.div>
              );
            }
          )}

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 MAIN GRID */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-[1.2fr_0.8fr]
      gap-8
      ">

        {/* ================================================= */}
        {/* 🔥 LEFT */}
        {/* ================================================= */}

        <div className="
        space-y-8
        ">

          {/* ============================================= */}
          {/* 🔥 WEEKLY MENU */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            {/* TOP */}

            <div className="
            flex
            items-center
            justify-between
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Weekly Food Schedule

                </h2>

                <p className="
                text-gray-400
                ">

                  Complete weekly meal
                  management.

                </p>

              </div>

              <ChefHat
                size={30}
                className="
                text-orange-300
                "
              />

            </div>

            {/* TABLE */}

            <div className="
            space-y-5
            ">

              {weeklyMenu.map(
                (item, i) => (

                  <motion.div

                    key={i}

                    whileHover={{
                      scale: 1.01,
                    }}

                    className={`
                    rounded-[30px]
                    border
                    p-6
                    transition-all
                    duration-300

                    ${
                      activeDay ===
                      item.day

                        ? `
                          border-orange-500/30
                          bg-gradient-to-r
                          from-orange-500/10
                          to-pink-500/10
                        `

                        : `
                          border-white/10
                          bg-white/[0.04]
                        `
                    }
                    `}
                  >

                    {/* TOP */}

                    <div className="
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-6
                    ">

                      {/* LEFT */}

                      <div>

                        <h3 className="
                        text-2xl
                        font-black
                        text-white
                        mb-3
                        ">

                          {item.day}

                        </h3>

                        <div className="
                        flex
                        flex-wrap
                        gap-3
                        ">

                          <div className="
                          px-4
                          py-2
                          rounded-full
                          bg-purple-500/10
                          border
                          border-purple-500/20
                          text-purple-300
                          text-xs
                          ">

                            Breakfast:
                            {" "}
                            {
                              item.breakfast
                            }

                          </div>

                          <div className="
                          px-4
                          py-2
                          rounded-full
                          bg-emerald-500/10
                          border
                          border-emerald-500/20
                          text-emerald-300
                          text-xs
                          ">

                            Lunch:
                            {" "}
                            {
                              item.lunch
                            }

                          </div>

                          <div className="
                          px-4
                          py-2
                          rounded-full
                          bg-orange-500/10
                          border
                          border-orange-500/20
                          text-orange-300
                          text-xs
                          ">

                            Dinner:
                            {" "}
                            {
                              item.dinner
                            }

                          </div>

                        </div>

                      </div>

                      {/* BUTTONS */}

                      <div className="
                      flex
                      gap-4
                      ">

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
                        ">

                          <Pencil
                            size={18}
                          />

                        </button>

                        <button className="
                        w-12
                        h-12
                        rounded-xl
                        border
                        border-red-500/20
                        bg-red-500/10
                        flex
                        items-center
                        justify-center
                        text-red-300
                        ">

                          <Trash2
                            size={18}
                          />

                        </button>

                      </div>

                    </div>

                  </motion.div>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 FEEDBACK */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            {/* TOP */}

            <div className="
            flex
            flex-col
            lg:flex-row
            lg:items-center
            lg:justify-between
            gap-5
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Student Feedback

                </h2>

                <p className="
                text-gray-400
                ">

                  Reviews and food ratings.

                </p>

              </div>

              {/* SEARCH */}

              <div className="
              flex
              items-center
              gap-4
              px-5
              py-4
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              min-w-[260px]
              ">

                <Search
                  size={20}
                  className="
                  text-gray-500
                  "
                />

                <input
                  value={search}
                  onChange={(e) =>
                    setSearch(
                      e.target.value
                    )
                  }
                  placeholder="Search feedback..."
                  className="
                  bg-transparent
                  outline-none
                  text-white
                  placeholder:text-gray-500
                  w-full
                  "
                />

              </div>

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {filteredFeedbacks.map(
                (item, i) => (

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
                        i * 0.06,
                    }}

                    className="
                    rounded-[28px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    "
                  >

                    {/* TOP */}

                    <div className="
                    flex
                    items-center
                    justify-between
                    mb-5
                    ">

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
                        from-orange-500/20
                        to-pink-500/20
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-white
                        text-xl
                        font-bold
                        ">

                          {
                            item.name[0]
                          }

                        </div>

                        <div>

                          <h3 className="
                          text-white
                          text-lg
                          font-bold
                          mb-1
                          ">

                            {item.name}

                          </h3>

                          <div className="
                          flex
                          items-center
                          gap-1
                          ">

                            {[
                              1,
                              2,
                              3,
                              4,
                              5,
                            ].map(
                              (
                                star
                              ) => (

                                <Star
                                  key={
                                    star
                                  }
                                  size={
                                    16
                                  }
                                  className={`
                                  ${
                                    star <=
                                    item.rating

                                      ? `
                                        text-yellow-300
                                        fill-yellow-300
                                      `

                                      : `
                                        text-gray-600
                                      `
                                  }
                                  `}
                                />

                              )
                            )}

                          </div>

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
                      text-white
                      ">

                        <Eye
                          size={18}
                        />

                      </button>

                    </div>

                    {/* TEXT */}

                    <p className="
                    text-gray-300
                    leading-relaxed
                    text-lg
                    ">

                      {item.feedback}

                    </p>

                  </motion.div>
                )
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
          {/* 🔥 FOOD TYPES */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            <div className="
            flex
            items-center
            justify-between
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Food Categories

                </h2>

                <p className="
                text-gray-400
                ">

                  Mess distribution.

                </p>

              </div>

              <UtensilsCrossed
                size={28}
                className="
                text-orange-300
                "
              />

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {[
                {
                  title:
                    "Veg Meals",
                  icon:
                    Leaf,
                  students:
                    "512 Students",
                  color:
                    "text-emerald-300",
                },

                {
                  title:
                    "Non-Veg Meals",
                  icon:
                    Flame,
                  students:
                    "216 Students",
                  color:
                    "text-red-300",
                },

                {
                  title:
                    "Healthy Diet",
                  icon:
                    Vegan,
                  students:
                    "85 Students",
                  color:
                    "text-yellow-300",
                },

                {
                  title:
                    "Protein Meals",
                  icon:
                    Wheat,
                  students:
                    "140 Students",
                  color:
                    "text-purple-300",
                },
              ].map(
                (item, i) => {

                  const Icon =
                    item.icon;

                  return (

                    <div

                      key={i}

                      className="
                      rounded-[26px]
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
                        bg-white/[0.05]
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-white
                        ">

                          <Icon
                            size={24}
                            className={
                              item.color
                            }
                          />

                        </div>

                        <div>

                          <h3 className="
                          text-white
                          font-bold
                          mb-2
                          ">

                            {item.title}

                          </h3>

                          <p className="
                          text-gray-400
                          text-sm
                          ">

                            {
                              item.students
                            }

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

          {/* ============================================= */}
          {/* 🔥 STAFF */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            {/* TOP */}

            <div className="
            flex
            items-center
            justify-between
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Kitchen Staff

                </h2>

                <p className="
                text-gray-400
                ">

                  Live kitchen team.

                </p>

              </div>

              <ChefHat
                size={28}
                className="
                text-yellow-300
                "
              />

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {kitchenStaff.map(
                (item, i) => (

                  <div
                    key={i}
                    className="
                    rounded-[26px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-5
                    "
                  >

                    <div className="
                    flex
                    items-center
                    justify-between
                    gap-5
                    ">

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
                        from-orange-500/20
                        to-yellow-500/20
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-white
                        font-bold
                        text-lg
                        ">

                          {
                            item.name[0]
                          }

                        </div>

                        <div>

                          <h3 className="
                          text-white
                          font-bold
                          mb-2
                          ">

                            {item.name}

                          </h3>

                          <p className="
                          text-gray-400
                          text-sm
                          ">

                            {item.role}

                          </p>

                        </div>

                      </div>

                      <div className="
                      px-4
                      py-2
                      rounded-full
                      bg-emerald-500/10
                      border
                      border-emerald-500/20
                      text-emerald-300
                      text-xs
                      ">

                        {item.status}

                      </div>

                    </div>

                  </div>
                )
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 ACTIVITY */}
          {/* ============================================= */}

          <div className="
          rounded-[38px]
          border
          border-white/10
          bg-white/[0.05]
          p-8
          ">

            {/* TOP */}

            <div className="
            flex
            items-center
            justify-between
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Recent Activity

                </h2>

                <p className="
                text-gray-400
                ">

                  Mess updates and actions.

                </p>

              </div>

              <Activity
                size={28}
                className="
                text-purple-300
                "
              />

            </div>

            {/* LIST */}

            <div className="
            space-y-6
            ">

              {[
                {
                  text:
                    "Dinner menu updated successfully",
                  time:
                    "10 mins ago",
                },

                {
                  text:
                    "Weekly food chart generated",
                  time:
                    "1 hour ago",
                },

                {
                  text:
                    "New feedback submitted by students",
                  time:
                    "Today",
                },

                {
                  text:
                    "Kitchen inspection completed",
                  time:
                    "Yesterday",
                },
              ].map(
                (item, i) => (

                  <div
                    key={i}
                    className="
                    flex
                    items-start
                    gap-5
                    "
                  >

                    <div className="
                    w-14
                    h-14
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
                        size={22}
                      />

                    </div>

                    <div className="
                    flex-1
                    pb-6
                    border-b
                    border-white/10
                    ">

                      <h3 className="
                      text-white
                      font-semibold
                      text-lg
                      leading-relaxed
                      mb-3
                      ">

                        {item.text}

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