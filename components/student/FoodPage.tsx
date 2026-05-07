"use client";

import {
  UtensilsCrossed,
  Coffee,
  Soup,
  Pizza,
  Drumstick,
  Apple,
  Salad,
  Star,
  Clock3,
  Sparkles,
  CheckCircle2,
  Flame,
  Heart,
  Bell,
  ChefHat,
  CalendarDays,
  Wheat,
  Milk,
  Fish,
  Sandwich,
  IceCream2,
  Sun,
  MoonStar,
  Sunrise,
  Sunset,
  BadgeCheck,
  ArrowUpRight,
  MessageSquareHeart,
  Send,
  SmilePlus,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

/* ====================================================== */
/* 🔥 FOOD PAGE */
/* ====================================================== */

export default function FoodPage() {

  /* ==================================================== */
  /* 🔥 STATE */
  /* ==================================================== */

  const [feedback, setFeedback] =
    useState("");

  const [selectedDay, setSelectedDay] =
    useState("Monday");

  /* ==================================================== */
  /* 🔥 TODAY MENU */
  /* ==================================================== */

  const todayMenu = [

    {
      meal: "Breakfast",

      time: "7:00 AM - 9:00 AM",

      icon: Coffee,

      color:
        "from-yellow-400 to-orange-500",

      items: [

        "Idli",

        "Vada",

        "Peanut Chutney",

        "Sambar",

        "Tea / Coffee",

        "Banana",
      ],

      type: "Veg",
    },

    {
      meal: "Lunch",

      time: "12:30 PM - 2:00 PM",

      icon: Salad,

      color:
        "from-green-400 to-emerald-500",

      items: [

        "Steam Rice",

        "Dal Fry",

        "Paneer Curry",

        "Veg Fry",

        "Curd",

        "Papad",
      ],

      type: "Veg",
    },

    {
      meal: "Snacks",

      time: "4:30 PM - 5:30 PM",

      icon: Sandwich,

      color:
        "from-pink-500 to-rose-500",

      items: [

        "Veg Sandwich",

        "Samosa",

        "Coffee",

        "Biscuits",
      ],

      type: "Veg",
    },

    {
      meal: "Dinner",

      time: "7:30 PM - 9:30 PM",

      icon: Drumstick,

      color:
        "from-purple-500 to-pink-500",

      items: [

        "Chapathi",

        "Chicken Curry",

        "Rice",

        "Dal",

        "Sweet",
      ],

      type:
        "Veg / Non-Veg",
    },
  ];

  /* ==================================================== */
  /* 🔥 WEEKLY MENU */
  /* ==================================================== */

  const weeklyMenu = [

    {
      day: "Monday",

      special:
        "Paneer Butter Masala",

      type: "Veg",
    },

    {
      day: "Tuesday",

      special:
        "Chicken Biryani",

      type: "Non-Veg",
    },

    {
      day: "Wednesday",

      special:
        "Veg Fried Rice",

      type: "Veg",
    },

    {
      day: "Thursday",

      special:
        "Fish Curry",

      type: "Non-Veg",
    },

    {
      day: "Friday",

      special:
        "Special Meals",

      type: "Veg",
    },

    {
      day: "Saturday",

      special:
        "Mutton Curry",

      type: "Non-Veg",
    },

    {
      day: "Sunday",

      special:
        "Ice Cream Special",

      type: "Dessert",
    },
  ];

  /* ==================================================== */
  /* 🔥 NUTRITION */
  /* ==================================================== */

  const nutrition = [

    {
      title:
        "Protein Rich",

      value: "92%",

      icon: Drumstick,
    },

    {
      title:
        "Fresh Vegetables",

      value: "100%",

      icon: Salad,
    },

    {
      title:
        "Healthy Oils",

      value: "Low Fat",

      icon: Heart,
    },

    {
      title:
        "Milk & Dairy",

      value: "Daily",

      icon: Milk,
    },
  ];

  /* ==================================================== */
  /* 🔥 CHEF TEAM */
  /* ==================================================== */

  const chefs = [

    {
      name:
        "Chef Ramesh",

      role:
        "South Indian Specialist",
    },

    {
      name:
        "Chef Ali",

      role:
        "Hyderabadi Cuisine",
    },

    {
      name:
        "Chef Kavya",

      role:
        "Healthy Food Expert",
    },
  ];

  /* ==================================================== */
  /* 🔥 FEEDBACKS */
  /* ==================================================== */

  const reviews = [

    {
      name:
        "Rahul",

      review:
        "Food quality is really good and hygienic.",

      rating: 5,
    },

    {
      name:
        "Sneha",

      review:
        "Loved the weekly biryani special 😍",

      rating: 5,
    },

    {
      name:
        "Karthik",

      review:
        "Mess timings are perfect for students.",

      rating: 4,
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
          bg-orange-500/20
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
                text-orange-300
                "
              />

              Premium Mess Experience

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

              Food &

              <span className="
              block
              bg-gradient-to-r
              from-orange-300
              via-pink-400
              to-yellow-300
              bg-clip-text
              text-transparent
              ">

                Mess Menu 🍽️
              </span>

            </h1>

            {/* DESC */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-2xl
            ">

              Explore today’s meals, weekly specials, nutrition details and provide feedback about hostel food quality.

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

                Food Rating

              </p>

              <h2 className="
              text-white
              text-5xl
              font-black
              mb-2
              ">

                4.8★

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-yellow-300
              text-sm
              ">

                <Star size={15} />

                Student Favorite

              </div>

            </div>

            {/* CARD */}

            <div className="
            rounded-[28px]
            bg-gradient-to-r
            from-orange-500
            to-pink-500
            p-6
            min-w-[180px]
            text-white
            shadow-[0_0_45px_rgba(249,115,22,0.35)]
            ">

              <p className="
              text-white/70
              text-sm
              mb-3
              ">

                Meals Served

              </p>

              <h2 className="
              text-5xl
              font-black
              mb-2
              ">

                850+

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-sm
              ">

                <UtensilsCrossed
                  size={15}
                />

                Everyday Fresh

              </div>

            </div>

          </div>

        </div>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 TODAY MENU */}
      {/* ================================================= */}

      <div>

        {/* TOP */}

        <div className="
        flex
        items-center
        justify-between
        mb-8
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
            ">

              Freshly prepared meals for hostel students.

            </p>

          </div>

          <div className="
          hidden
          lg:flex
          items-center
          gap-3
          px-5
          py-3
          rounded-2xl
          border
          border-white/10
          bg-white/[0.05]
          text-gray-300
          ">

            <Clock3 size={18} />

            Live Mess Schedule

          </div>

        </div>

        {/* GRID */}

        <div className="
        grid
        lg:grid-cols-2
        gap-7
        ">

          {todayMenu.map(
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
                  p-8
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
                  ${item.color}
                  `}></div>

                  {/* CONTENT */}

                  <div className="
                  relative
                  z-10
                  ">

                    {/* TOP */}

                    <div className="
                    flex
                    items-start
                    justify-between
                    mb-8
                    ">

                      <div className="
                      flex
                      items-center
                      gap-5
                      ">

                        <div className={`
                        w-16
                        h-16
                        rounded-2xl
                        bg-gradient-to-r
                        ${item.color}
                        flex
                        items-center
                        justify-center
                        text-white
                        shadow-[0_0_30px_rgba(255,255,255,0.1)]
                        `}>

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
                          ">

                            {item.time}

                          </p>

                        </div>

                      </div>

                      {/* TYPE */}

                      <div className="
                      px-4
                      py-2
                      rounded-full
                      border
                      border-emerald-500/20
                      bg-emerald-500/10
                      text-emerald-300
                      text-xs
                      font-semibold
                      ">

                        {item.type}

                      </div>

                    </div>

                    {/* ITEMS */}

                    <div className="
                    flex
                    flex-wrap
                    gap-3
                    ">

                      {item.items.map(
                        (
                          food,
                          index
                        ) => (

                          <div

                            key={index}

                            className="
                            px-4
                            py-3
                            rounded-2xl
                            border
                            border-white/10
                            bg-white/[0.04]
                            text-gray-300
                            "
                          >

                            {food}

                          </div>
                        )
                      )}

                    </div>

                  </div>

                </motion.div>
              );
            }
          )}

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 WEEKLY MENU */}
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

              Weekly Specials

            </h2>

            <p className="
            text-gray-400
            ">

              Special dishes planned for each day.

            </p>

          </div>

          {/* DAYS */}

          <div className="
          flex
          flex-wrap
          gap-3
          ">

            {weeklyMenu.map(
              (
                item,
                i
              ) => (

                <button

                  key={i}

                  onClick={() =>
                    setSelectedDay(
                      item.day
                    )
                  }

                  className={`
                  px-5
                  py-3
                  rounded-2xl
                  border
                  transition-all
                  duration-300

                  ${
                    selectedDay ===
                    item.day

                      ? "bg-gradient-to-r from-orange-500 to-pink-500 border-transparent text-white"

                      : "border-white/10 bg-white/[0.04] text-gray-300"
                  }
                  `}
                >

                  {item.day}

                </button>
              )
            )}

          </div>

        </div>

        {/* GRID */}

        <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        ">

          {weeklyMenu.map(
            (
              item,
              i
            ) => (

              <div

                key={i}

                className={`
                rounded-[30px]
                border
                p-7
                transition-all
                duration-300

                ${
                  selectedDay ===
                  item.day

                    ? "border-orange-500/30 bg-gradient-to-br from-orange-500/20 to-pink-500/20"

                    : "border-white/10 bg-white/[0.04]"
                }
                `}
              >

                <div className="
                flex
                items-center
                justify-between
                mb-6
                ">

                  <div className="
                  w-14
                  h-14
                  rounded-2xl
                  bg-gradient-to-r
                  from-orange-500
                  to-pink-500
                  flex
                  items-center
                  justify-center
                  text-white
                  ">

                    <ChefHat
                      size={24}
                    />

                  </div>

                  <BadgeCheck
                    size={22}
                    className="
                    text-emerald-400
                    "
                  />

                </div>

                <h3 className="
                text-2xl
                font-black
                text-white
                mb-3
                ">

                  {item.day}

                </h3>

                <p className="
                text-gray-300
                text-lg
                mb-4
                ">

                  {item.special}

                </p>

                <div className="
                inline-flex
                items-center
                gap-2
                px-4
                py-2
                rounded-full
                bg-white/[0.05]
                border
                border-white/10
                text-gray-300
                text-sm
                ">

                  <Flame
                    size={14}
                  />

                  {item.type}

                </div>

              </div>
            )
          )}

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 NUTRITION */}
      {/* ================================================= */}

      <div>

        {/* TOP */}

        <div className="
        mb-8
        ">

          <h2 className="
          text-4xl
          font-black
          text-white
          mb-3
          ">

            Nutrition & Health

          </h2>

          <p className="
          text-gray-400
          ">

            Healthy and balanced food for hostel students.

          </p>

        </div>

        {/* GRID */}

        <div className="
        grid
        md:grid-cols-2
        xl:grid-cols-4
        gap-6
        ">

          {nutrition.map(
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
                  bg-white/[0.05]
                  backdrop-blur-3xl
                  p-7
                  "
                >

                  <div className="
                  w-16
                  h-16
                  rounded-2xl
                  bg-gradient-to-r
                  from-orange-500
                  to-pink-500
                  flex
                  items-center
                  justify-center
                  text-white
                  mb-7
                  ">

                    <Icon
                      size={28}
                    />

                  </div>

                  <h3 className="
                  text-white
                  text-2xl
                  font-black
                  mb-3
                  ">

                    {item.value}

                  </h3>

                  <p className="
                  text-gray-400
                  ">

                    {item.title}

                  </p>

                </div>
              );
            }
          )}

        </div>

      </div>

      {/* ================================================= */}
      {/* 🔥 CHEFS + FEEDBACK */}
      {/* ================================================= */}

      <div className="
      grid
      xl:grid-cols-[0.9fr_1.1fr]
      gap-8
      items-start
      ">

        {/* ================================================= */}
        {/* 🔥 CHEFS */}
        {/* ================================================= */}

        <div className="
        rounded-[40px]
        border
        border-white/10
        bg-white/[0.05]
        backdrop-blur-3xl
        p-8
        ">

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

                Our Chef Team

              </h2>

              <p className="
              text-gray-400
              ">

                Experienced professionals preparing healthy meals.

              </p>

            </div>

            <ChefHat
              size={32}
              className="
              text-orange-300
              "
            />

          </div>

          <div className="
          space-y-5
          ">

            {chefs.map(
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
                  p-6
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
                    from-orange-500
                    to-pink-500
                    flex
                    items-center
                    justify-center
                    text-white
                    ">

                      <ChefHat
                        size={24}
                      />

                    </div>

                    <div>

                      <h3 className="
                      text-white
                      text-xl
                      font-bold
                      mb-1
                      ">

                        {item.name}

                      </h3>

                      <p className="
                      text-gray-400
                      ">

                        {item.role}

                      </p>

                    </div>

                  </div>

                  <ArrowUpRight
                    size={22}
                    className="
                    text-gray-400
                    "
                  />

                </div>
              )
            )}

          </div>

        </div>

        {/* ================================================= */}
        {/* 🔥 FEEDBACK */}
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

                Share your food experience with us.

              </p>

            </div>

            <MessageSquareHeart
              size={32}
              className="
              text-pink-300
              "
            />

          </div>

          {/* REVIEWS */}

          <div className="
          space-y-5
          mb-8
          ">

            {reviews.map(
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
                  p-6
                  "
                >

                  <div className="
                  flex
                  items-center
                  justify-between
                  mb-4
                  ">

                    <h3 className="
                    text-white
                    font-bold
                    text-lg
                    ">

                      {item.name}

                    </h3>

                    <div className="
                    flex
                    items-center
                    gap-1
                    ">

                      {Array.from({
                        length:
                          item.rating,
                      }).map(
                        (
                          _,
                          index
                        ) => (

                          <Star

                            key={
                              index
                            }

                            size={16}

                            className="
                            text-yellow-300
                            fill-yellow-300
                            "
                          />
                        )
                      )}

                    </div>

                  </div>

                  <p className="
                  text-gray-300
                  leading-relaxed
                  ">

                    {item.review}

                  </p>

                </div>
              )
            )}

          </div>

          {/* INPUT */}

          <div className="
          space-y-5
          ">

            <textarea

              value={feedback}

              onChange={(e) =>
                setFeedback(
                  e.target.value
                )
              }

              placeholder="Write your feedback about food quality, taste, hygiene or suggestions..."

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
              placeholder:text-gray-500
              "
            />

            <button className="
            inline-flex
            items-center
            gap-3
            px-8
            py-4
            rounded-2xl
            bg-gradient-to-r
            from-orange-500
            to-pink-500
            text-white
            font-semibold
            shadow-[0_0_40px_rgba(249,115,22,0.3)]
            hover:scale-[1.02]
            transition-all
            duration-300
            ">

              <Send
                size={18}
              />

              Submit Feedback

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}