"use client";

import {
  CreditCard,
  IndianRupee,
  Wallet,
  Receipt,
  CheckCircle2,
  AlertTriangle,
  Clock3,
  ArrowUpRight,
  Download,
  ShieldCheck,
  Sparkles,
  CalendarDays,
  BadgeCheck,
  Bell,
  QrCode,
  Smartphone,
  Building2,
  Banknote,
  TrendingUp,
  CircleDollarSign,
  FileText,
  ChevronRight,
  Check,
  XCircle,
  Landmark,
  Coins,
  WalletCards,
  History,
} from "lucide-react";

import { motion } from "framer-motion";

import { useState } from "react";

/* ====================================================== */
/* 🔥 PAYMENTS PAGE */
/* ====================================================== */

export default function PaymentsPage() {

  /* ==================================================== */
  /* 🔥 STATE */
  /* ==================================================== */

  const [selectedMethod, setSelectedMethod] =
    useState("UPI");

  /* ==================================================== */
  /* 🔥 CURRENT PAYMENT */
  /* ==================================================== */

  const currentPayment = {

    room: "A-302",

    amount: "₹8,500",

    dueDate: "12 June 2026",

    status: "Pending",

    electricity: "₹850",

    maintenance: "₹500",
  };

  /* ==================================================== */
  /* 🔥 PAYMENT METHODS */
  /* ==================================================== */

  const methods = [

    {
      name: "UPI",

      icon: Smartphone,

      desc:
        "Pay instantly using PhonePe, GPay or Paytm",
    },

    {
      name: "Card",

      icon: CreditCard,

      desc:
        "Secure debit & credit card payment",
    },

    {
      name: "Net Banking",

      icon: Landmark,

      desc:
        "Direct bank account transfer",
    },

    {
      name: "Cash",

      icon: Banknote,

      desc:
        "Pay at hostel office counter",
    },
  ];

  /* ==================================================== */
  /* 🔥 HISTORY */
  /* ==================================================== */

  const history = [

    {
      month: "May 2026",

      amount: "₹8,500",

      status: "Paid",

      method: "UPI",

      date: "02 May 2026",
    },

    {
      month: "April 2026",

      amount: "₹8,500",

      status: "Paid",

      method: "Credit Card",

      date: "03 April 2026",
    },

    {
      month: "March 2026",

      amount: "₹8,500",

      status: "Paid",

      method: "UPI",

      date: "05 March 2026",
    },

    {
      month: "February 2026",

      amount: "₹8,500",

      status: "Paid",

      method: "Net Banking",

      date: "02 February 2026",
    },
  ];

  /* ==================================================== */
  /* 🔥 SUMMARY */
  /* ==================================================== */

  const summary = [

    {
      title: "Total Paid",

      value: "₹34,000",

      icon: Wallet,

      glow:
        "from-emerald-400 to-green-500",
    },

    {
      title: "Pending Amount",

      value: "₹8,500",

      icon: AlertTriangle,

      glow:
        "from-orange-400 to-yellow-500",
    },

    {
      title: "Payment Success",

      value: "100%",

      icon: TrendingUp,

      glow:
        "from-purple-500 to-pink-500",
    },

    {
      title: "Transactions",

      value: "24",

      icon: Receipt,

      glow:
        "from-cyan-400 to-blue-500",
    },
  ];

  /* ==================================================== */
  /* 🔥 NOTIFICATIONS */
  /* ==================================================== */

  const notifications = [

    "Rent due date approaching on 12 June.",

    "UPI payments are instantly verified.",

    "Download receipts anytime from payment history.",

    "Late fee applies after due date.",
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
          top-[-180px]
          left-[-180px]
          w-[450px]
          h-[450px]
          bg-purple-500/20
          blur-[130px]
          rounded-full
          "></div>

          <div className="
          absolute
          bottom-[-180px]
          right-[-180px]
          w-[450px]
          h-[450px]
          bg-pink-500/20
          blur-[130px]
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

              Secure Payment System

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

              Hostel

              <span className="
              block
              bg-gradient-to-r
              from-purple-400
              via-pink-400
              to-yellow-300
              bg-clip-text
              text-transparent
              ">

                Payments 💰
              </span>

            </h1>

            {/* DESC */}

            <p className="
            text-gray-400
            text-lg
            leading-relaxed
            max-w-2xl
            ">

              Manage hostel rent, track payment history, download receipts and pay securely using multiple payment methods.

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

                Current Due

              </p>

              <h2 className="
              text-5xl
              font-black
              text-white
              mb-3
              ">

                ₹8.5K

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-orange-300
              text-sm
              ">

                <Clock3
                  size={15}
                />

                Due Soon

              </div>

            </div>

            {/* CARD */}

            <div className="
            rounded-[30px]
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

                Payment Status

              </p>

              <h2 className="
              text-5xl
              font-black
              mb-3
              ">

                SAFE

              </h2>

              <div className="
              flex
              items-center
              gap-2
              text-sm
              ">

                <ShieldCheck
                  size={15}
                />

                Encrypted

              </div>

            </div>

          </div>

        </div>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 SUMMARY */}
      {/* ================================================= */}

      <div className="
      grid
      sm:grid-cols-2
      xl:grid-cols-4
      gap-7
      ">

        {summary.map(
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
                    shadow-[0_0_35px_rgba(255,255,255,0.1)]
                    `}>

                      <Icon
                        size={28}
                      />

                    </div>

                    <ArrowUpRight
                      size={22}
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
      xl:grid-cols-[1fr_0.55fr]
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
          {/* 🔥 CURRENT PAYMENT */}
          {/* ============================================= */}

          <div className="
          relative
          overflow-hidden
          rounded-[40px]
          bg-gradient-to-r
          from-purple-500
          via-pink-500
          to-yellow-400
          p-8
          text-white
          shadow-[0_0_60px_rgba(168,85,247,0.35)]
          ">

            {/* SHINE */}

            <div className="
            absolute
            top-0
            right-[-120px]
            w-[250px]
            h-full
            rotate-12
            bg-white/10
            blur-3xl
            "></div>

            {/* CONTENT */}

            <div className="
            relative
            z-10
            ">

              {/* TOP */}

              <div className="
              flex
              flex-col
              lg:flex-row
              lg:items-center
              lg:justify-between
              gap-8
              mb-10
              ">

                <div>

                  <div className="
                  inline-flex
                  items-center
                  gap-2
                  px-4
                  py-2
                  rounded-full
                  bg-white/20
                  text-sm
                  mb-6
                  ">

                    <CalendarDays
                      size={15}
                    />

                    June 2026 Rent

                  </div>

                  <h2 className="
                  text-6xl
                  font-black
                  mb-5
                  ">

                    {
                      currentPayment.amount
                    }

                  </h2>

                  <p className="
                  text-white/80
                  text-lg
                  ">

                    Due Date:
                    {" "}
                    {
                      currentPayment.dueDate
                    }

                  </p>

                </div>

                {/* STATUS */}

                <div className="
                flex
                flex-col
                gap-5
                ">

                  <div className="
                  px-5
                  py-4
                  rounded-2xl
                  bg-black/15
                  backdrop-blur-xl
                  border
                  border-white/10
                  ">

                    <p className="
                    text-white/70
                    text-sm
                    mb-2
                    ">

                      Room Number

                    </p>

                    <h3 className="
                    text-3xl
                    font-black
                    ">

                      {
                        currentPayment.room
                      }

                    </h3>

                  </div>

                  <div className="
                  px-5
                  py-4
                  rounded-2xl
                  bg-black/15
                  backdrop-blur-xl
                  border
                  border-white/10
                  ">

                    <p className="
                    text-white/70
                    text-sm
                    mb-2
                    ">

                      Payment Status

                    </p>

                    <div className="
                    flex
                    items-center
                    gap-2
                    text-yellow-200
                    font-semibold
                    ">

                      <AlertTriangle
                        size={18}
                      />

                      Pending

                    </div>

                  </div>

                </div>

              </div>

              {/* DETAILS */}

              <div className="
              grid
              md:grid-cols-3
              gap-5
              mb-10
              ">

                <div className="
                rounded-2xl
                bg-black/15
                border
                border-white/10
                p-5
                ">

                  <p className="
                  text-white/70
                  text-sm
                  mb-2
                  ">

                    Hostel Rent

                  </p>

                  <h3 className="
                  text-3xl
                  font-black
                  ">

                    ₹7,150

                  </h3>

                </div>

                <div className="
                rounded-2xl
                bg-black/15
                border
                border-white/10
                p-5
                ">

                  <p className="
                  text-white/70
                  text-sm
                  mb-2
                  ">

                    Electricity

                  </p>

                  <h3 className="
                  text-3xl
                  font-black
                  ">

                    {
                      currentPayment.electricity
                    }

                  </h3>

                </div>

                <div className="
                rounded-2xl
                bg-black/15
                border
                border-white/10
                p-5
                ">

                  <p className="
                  text-white/70
                  text-sm
                  mb-2
                  ">

                    Maintenance

                  </p>

                  <h3 className="
                  text-3xl
                  font-black
                  ">

                    {
                      currentPayment.maintenance
                    }

                  </h3>

                </div>

              </div>

              {/* BUTTON */}

              <button className="
              w-full
              py-5
              rounded-2xl
              bg-black/20
              border
              border-white/20
              backdrop-blur-xl
              text-xl
              font-bold
              flex
              items-center
              justify-center
              gap-3
              hover:bg-black/30
              transition-all
              duration-300
              ">

                <QrCode
                  size={24}
                />

                Pay via UPI

              </button>

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 PAYMENT METHODS */}
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

                  Payment Methods

                </h2>

                <p className="
                text-gray-400
                ">

                  Choose your preferred payment option.

                </p>

              </div>

              <WalletCards
                size={32}
                className="
                text-purple-300
                "
              />

            </div>

            {/* METHODS */}

            <div className="
            grid
            md:grid-cols-2
            gap-6
            ">

              {methods.map(
                (
                  item,
                  i
                ) => {

                  const Icon =
                    item.icon;

                  return (

                    <button

                      key={i}

                      onClick={() =>
                        setSelectedMethod(
                          item.name
                        )
                      }

                      className={`
                      relative
                      overflow-hidden
                      rounded-[30px]
                      border
                      p-7
                      text-left
                      transition-all
                      duration-300

                      ${
                        selectedMethod ===
                        item.name

                          ? "border-purple-500/30 bg-gradient-to-br from-purple-500/20 to-pink-500/20"

                          : "border-white/10 bg-white/[0.04]"
                      }
                      `}
                    >

                      {/* TOP */}

                      <div className="
                      flex
                      items-center
                      justify-between
                      mb-8
                      ">

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
                        ">

                          <Icon
                            size={28}
                          />

                        </div>

                        {selectedMethod ===
                          item.name && (

                          <CheckCircle2
                            size={24}
                            className="
                            text-emerald-400
                            "
                          />
                        )}

                      </div>

                      {/* TEXT */}

                      <h3 className="
                      text-2xl
                      font-black
                      text-white
                      mb-3
                      ">

                        {item.name}

                      </h3>

                      <p className="
                      text-gray-400
                      leading-relaxed
                      ">

                        {item.desc}

                      </p>

                    </button>
                  );
                }
              )}

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 HISTORY */}
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

                  Payment History

                </h2>

                <p className="
                text-gray-400
                ">

                  View all your previous hostel payments.

                </p>

              </div>

              <div className="
              inline-flex
              items-center
              gap-3
              px-5
              py-3
              rounded-2xl
              border
              border-white/10
              bg-white/[0.04]
              text-gray-300
              ">

                <History
                  size={18}
                />

                Transaction Records

              </div>

            </div>

            {/* LIST */}

            <div className="
            space-y-6
            ">

              {history.map(
                (
                  item,
                  i
                ) => (

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
                    rounded-[32px]
                    border
                    border-white/10
                    bg-white/[0.04]
                    p-6
                    hover:border-purple-500/20
                    transition-all
                    duration-300
                    "
                  >

                    <div className="
                    flex
                    flex-col
                    xl:flex-row
                    xl:items-center
                    xl:justify-between
                    gap-6
                    ">

                      {/* LEFT */}

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
                        border
                        border-white/10
                        flex
                        items-center
                        justify-center
                        text-purple-300
                        ">

                          <Receipt
                            size={28}
                          />

                        </div>

                        <div>

                          <h3 className="
                          text-white
                          text-2xl
                          font-bold
                          mb-2
                          ">

                            {item.month}

                          </h3>

                          <div className="
                          flex
                          flex-wrap
                          items-center
                          gap-4
                          text-gray-400
                          text-sm
                          ">

                            <span>

                              {
                                item.method
                              }

                            </span>

                            <span>

                              {
                                item.date
                              }

                            </span>

                          </div>

                        </div>

                      </div>

                      {/* RIGHT */}

                      <div className="
                      flex
                      flex-col
                      sm:flex-row
                      sm:items-center
                      gap-5
                      ">

                        {/* AMOUNT */}

                        <div className="
                        text-left
                        sm:text-right
                        ">

                          <h3 className="
                          text-3xl
                          font-black
                          text-white
                          mb-2
                          ">

                            {
                              item.amount
                            }

                          </h3>

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
                          font-semibold
                          ">

                            <Check
                              size={15}
                            />

                            {item.status}

                          </div>

                        </div>

                        {/* BUTTON */}

                        <button className="
                        px-6
                        py-4
                        rounded-2xl
                        border
                        border-white/10
                        bg-white/[0.04]
                        text-gray-300
                        flex
                        items-center
                        gap-3
                        hover:border-purple-500/20
                        hover:text-white
                        transition-all
                        duration-300
                        ">

                          <Download
                            size={18}
                          />

                          Receipt

                        </button>

                      </div>

                    </div>

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
          {/* 🔥 NOTIFICATIONS */}
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
            mb-8
            ">

              <div>

                <h2 className="
                text-3xl
                font-black
                text-white
                mb-3
                ">

                  Notifications

                </h2>

                <p className="
                text-gray-400
                ">

                  Payment related updates.

                </p>

              </div>

              <Bell
                size={30}
                className="
                text-pink-300
                "
              />

            </div>

            {/* LIST */}

            <div className="
            space-y-5
            ">

              {notifications.map(
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
                    items-start
                    gap-4
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
          {/* 🔥 SECURITY */}
          {/* ============================================= */}

          <div className="
          relative
          overflow-hidden
          rounded-[40px]
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
            rounded-full
            bg-cyan-500/20
            blur-[90px]
            "></div>

            {/* CONTENT */}

            <div className="
            relative
            z-10
            ">

              <div className="
              w-16
              h-16
              rounded-2xl
              bg-gradient-to-r
              from-cyan-500
              to-blue-500
              flex
              items-center
              justify-center
              text-white
              mb-8
              shadow-[0_0_40px_rgba(6,182,212,0.35)]
              ">

                <ShieldCheck
                  size={30}
                />

              </div>

              <h2 className="
              text-4xl
              font-black
              text-white
              mb-5
              ">

                Secure Payments

              </h2>

              <p className="
              text-gray-400
              leading-relaxed
              mb-8
              ">

                Your payment information is protected with secure encrypted transactions and verified payment gateways.

              </p>

              <div className="
              space-y-4
              ">

                {[
                  "256-bit encrypted transactions",

                  "Verified hostel payment gateway",

                  "Instant payment confirmation",

                  "Safe UPI integration",
                ].map(
                  (
                    item,
                    i
                  ) => (

                    <div

                      key={i}

                      className="
                      flex
                      items-center
                      gap-4
                      "
                    >

                      <CheckCircle2
                        size={18}
                        className="
                        text-emerald-400
                        "
                      />

                      <p className="
                      text-gray-300
                      ">

                        {item}

                      </p>

                    </div>
                  )
                )}

              </div>

            </div>

          </div>

          {/* ============================================= */}
          {/* 🔥 SUPPORT */}
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
            w-16
            h-16
            rounded-2xl
            bg-white/20
            flex
            items-center
            justify-center
            mb-8
            ">

              <CircleDollarSign
                size={30}
              />

            </div>

            <h2 className="
            text-4xl
            font-black
            mb-5
            ">

              Need Help?

            </h2>

            <p className="
            text-white/80
            leading-relaxed
            mb-8
            ">

              Facing issues with payment or receipts? Contact hostel accounts support anytime.

            </p>

            <button className="
            w-full
            py-5
            rounded-2xl
            bg-black/20
            border
            border-white/20
            backdrop-blur-xl
            font-semibold
            flex
            items-center
            justify-center
            gap-3
            hover:bg-black/30
            transition-all
            duration-300
            ">

              <ChevronRight
                size={20}
              />

              Contact Support

            </button>

          </div>

        </div>

      </div>

    </div>
  );
}