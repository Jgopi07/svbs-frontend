"use client";

import {
  motion,
  AnimatePresence,
} from "framer-motion";

import {
  useState,
} from "react";

import {
  X,
  BedDouble,
  Users,
  Building2,
  CheckCircle2,
  Phone,
  CalendarDays,
  User2,
  Sparkles,
} from "lucide-react";

export default function RoomAvailability() {

  /* ======================================================= */
  /* 🔥 ROOM DATA */
  /* ======================================================= */

  const initialFloors = [

    {
      floor: "Floor 1",

      rooms: [

        {
          number: 101,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 102,
          type: "3 Sharing",
          occupied: 1,
          total: 3,
        },

        {
          number: 103,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 104,
          type: "1 Sharing",
          occupied: 0,
          total: 1,
        },

        {
          number: 105,
          type: "3 Sharing",
          occupied: 3,
          total: 3,
        },

        {
          number: 106,
          type: "2 Sharing",
          occupied: 1,
          total: 2,
        },

        {
          number: 107,
          type: "3 Sharing",
          occupied: 2,
          total: 3,
        },

        {
          number: 108,
          type: "3 Sharing",
          occupied: 0,
          total: 3,
        },

        {
          number: 109,
          type: "1 Sharing",
          occupied: 1,
          total: 1,
        },

        {
          number: 110,
          type: "2 Sharing",
          occupied: 1,
          total: 2,
        },
      ],
    },

    {
      floor: "Floor 2",

      rooms: [

        {
          number: 201,
          type: "1 Sharing",
          occupied: 1,
          total: 1,
        },

        {
          number: 202,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 203,
          type: "1 Sharing",
          occupied: 0,
          total: 1,
        },

        {
          number: 204,
          type: "3 Sharing",
          occupied: 2,
          total: 3,
        },

        {
          number: 205,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 206,
          type: "3 Sharing",
          occupied: 3,
          total: 3,
        },

        {
          number: 207,
          type: "2 Sharing",
          occupied: 1,
          total: 2,
        },

        {
          number: 208,
          type: "3 Sharing",
          occupied: 3,
          total: 3,
        },

        {
          number: 209,
          type: "1 Sharing",
          occupied: 1,
          total: 1,
        },

        {
          number: 210,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },
      ],
    },

    {
      floor: "Floor 3",

      rooms: [

        {
          number: 301,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 302,
          type: "3 Sharing",
          occupied: 2,
          total: 3,
        },

        {
          number: 303,
          type: "2 Sharing",
          occupied: 1,
          total: 2,
        },

        {
          number: 304,
          type: "1 Sharing",
          occupied: 1,
          total: 1,
        },

        {
          number: 305,
          type: "3 Sharing",
          occupied: 2,
          total: 3,
        },

        {
          number: 306,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 307,
          type: "3 Sharing",
          occupied: 1,
          total: 3,
        },

        {
          number: 308,
          type: "2 Sharing",
          occupied: 1,
          total: 2,
        },

        {
          number: 309,
          type: "1 Sharing",
          occupied: 0,
          total: 1,
        },

        {
          number: 310,
          type: "3 Sharing",
          occupied: 3,
          total: 3,
        },
      ],
    },

    {
      floor: "Floor 4",

      rooms: [

        {
          number: 401,
          type: "1 Sharing",
          occupied: 0,
          total: 1,
        },

        {
          number: 402,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 403,
          type: "3 Sharing",
          occupied: 2,
          total: 3,
        },

        {
          number: 404,
          type: "1 Sharing",
          occupied: 1,
          total: 1,
        },

        {
          number: 405,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 406,
          type: "3 Sharing",
          occupied: 3,
          total: 3,
        },

        {
          number: 407,
          type: "2 Sharing",
          occupied: 1,
          total: 2,
        },

        {
          number: 408,
          type: "1 Sharing",
          occupied: 1,
          total: 1,
        },

        {
          number: 409,
          type: "3 Sharing",
          occupied: 1,
          total: 3,
        },

        {
          number: 410,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },
      ],
    },

    {
      floor: "Floor 5",

      rooms: [

        {
          number: 501,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 502,
          type: "3 Sharing",
          occupied: 2,
          total: 3,
        },

        {
          number: 503,
          type: "1 Sharing",
          occupied: 1,
          total: 1,
        },

        {
          number: 504,
          type: "2 Sharing",
          occupied: 2,
          total: 2,
        },

        {
          number: 505,
          type: "3 Sharing",
          occupied: 3,
          total: 3,
        },

        {
          number: 506,
          type: "2 Sharing",
          occupied: 1,
          total: 2,
        },

        {
          number: 507,
          type: "1 Sharing",
          occupied: 0,
          total: 1,
        },

        {
          number: 508,
          type: "3 Sharing",
          occupied: 3,
          total: 3,
        },

        {
          number: 509,
          type: "2 Sharing",
          occupied: 1,
          total: 2,
        },

        {
          number: 510,
          type: "1 Sharing",
          occupied: 1,
          total: 1,
        },
      ],
    },
  ];

  /* ======================================================= */
  /* 🔥 STATES */
  /* ======================================================= */

  const [floors, setFloors] =
    useState(initialFloors);

  const [selectedRoom, setSelectedRoom] =
    useState<any>(null);

  const [openBooking, setOpenBooking] =
    useState(false);

  const [bookingSuccess, setBookingSuccess] =
    useState(false);

  const [bookingData, setBookingData] =
    useState({
      name: "",
      phone: "",
      duration: "",
    });

  /* ======================================================= */
  /* 🔥 HANDLE BOOKING */
  /* ======================================================= */

  const handleBooking = () => {

    if (
      !bookingData.name ||
      !bookingData.phone ||
      !bookingData.duration
    ) {
      return;
    }

    const updatedFloors = floors.map((floor: any) => ({

      ...floor,

      rooms: floor.rooms.map((room: any) => {

        if (
          room.number ===
          selectedRoom.number
        ) {

          return {

            ...room,

            occupied:
              room.occupied + 1,

          };
        }

        return room;
      }),
    }));

    setFloors(updatedFloors);

    const updatedRoom =
      updatedFloors
        .flatMap((f: any) => f.rooms)
        .find(
          (r: any) =>
            r.number ===
            selectedRoom.number
        );

    setSelectedRoom(updatedRoom);

    setOpenBooking(false);

    setBookingSuccess(true);

    setBookingData({
      name: "",
      phone: "",
      duration: "",
    });

    setTimeout(() => {

      setBookingSuccess(false);

    }, 5000);
  };

  /* ======================================================= */
  /* 🔥 JSX */
  /* ======================================================= */

  return (

    <section className="relative py-32 px-6 overflow-hidden">

      {/* BG */}

      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-purple-900/10 to-transparent"></div>

      {/* HEADING */}

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
        className="max-w-4xl mx-auto text-center mb-20 relative z-10"
      >

        <p className="text-sm tracking-[0.3em] text-gray-400 mb-3">
          LIVE AVAILABILITY
        </p>

        <h2 className="text-5xl md:text-7xl font-bold text-white leading-tight mb-6">

          Smart Room <br />

          <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-300 bg-clip-text text-transparent">

            Booking System

          </span>

        </h2>

        <p className="text-gray-400 text-lg max-w-3xl mx-auto">

          Check live occupancy, room sharing,
          availability and instantly reserve
          your preferred hostel room.

        </p>

      </motion.div>

      {/* FLOORS */}

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-5 gap-8 max-w-[1800px] mx-auto relative z-10">

        {floors.map((floor: any, floorIndex) => (

          <motion.div
            key={floorIndex}
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
              delay: floorIndex * 0.08,
            }}
            className="
            relative
            rounded-[35px]
            p-7
            overflow-hidden
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-2xl
            hover:border-purple-500/40
            transition-all
            duration-500
            "
          >

            {/* GLOW */}

            <div className="absolute top-0 left-0 w-60 h-60 bg-purple-500/20 blur-[120px] rounded-full"></div>

            {/* HEADER */}

            <div className="relative z-10 flex items-center gap-4 mb-8">

              <div className="
              w-12
              h-12
              rounded-2xl
              flex
              items-center
              justify-center
              bg-gradient-to-r
              from-purple-500/20
              to-pink-500/20
              ">

                <Building2 className="text-purple-300" />

              </div>

              <h3 className="text-3xl font-bold text-white">
                {floor.floor}
              </h3>

            </div>

            {/* ROOM GRID */}

            <div className="grid grid-cols-2 gap-4 relative z-10">

              {floor.rooms.map((room: any) => {

                const available =
                  room.total -
                  room.occupied;

                return (

                  <button
                    key={room.number}
                    onClick={() =>
                      setSelectedRoom(room)
                    }
                    className={`
                    relative
                    py-4
                    rounded-2xl
                    font-semibold
                    border
                    transition-all
                    duration-300

                    ${
                      available > 0

                        ? `
                        bg-white/[0.06]
                        border-white/10
                        text-white
                        hover:bg-gradient-to-r
                        hover:from-purple-500
                        hover:to-pink-500
                        hover:border-transparent
                        hover:shadow-[0_0_40px_rgba(168,85,247,0.45)]
                        `

                        : `
                        bg-red-500/15
                        border-red-500/30
                        text-red-300
                        shadow-[0_0_25px_rgba(239,68,68,0.25)]
                        `
                    }
                    `}
                  >

                    {room.number}

                  </button>
                );
              })}
            </div>
          </motion.div>
        ))}
      </div>

      {/* ROOM DETAILS */}

      <AnimatePresence>

        {selectedRoom && (

          <motion.div
            initial={{
              opacity: 0,
              y: 60,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            exit={{
              opacity: 0,
            }}
            className="max-w-6xl mx-auto mt-20 relative z-10"
          >

            <div className="
            relative
            rounded-[40px]
            overflow-hidden
            border
            border-white/10
            bg-white/[0.04]
            backdrop-blur-3xl
            p-10
            ">

              {/* GLOW */}

              <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>

              <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 blur-[150px] rounded-full"></div>

              <div className="relative z-10">

                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 mb-10">

                  <div>

                    <p className="text-sm tracking-[0.25em] text-gray-400 mb-3">
                      ROOM DETAILS
                    </p>

                    <h2 className="text-5xl font-bold text-white">

                      Room {selectedRoom.number}

                    </h2>

                  </div>

                  <div className="
                  px-6
                  py-3
                  rounded-full
                  bg-gradient-to-r
                  from-purple-500/20
                  to-pink-500/20
                  border
                  border-white/10
                  text-white
                  font-medium
                  ">

                    {selectedRoom.total -
                      selectedRoom.occupied > 0

                      ? "Available"

                      : "Fully Occupied"}

                  </div>

                </div>

                {/* CARDS */}

                <div className="grid md:grid-cols-3 gap-6 mb-10">

                  <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">

                    <BedDouble className="text-purple-400 mb-5" />

                    <p className="text-gray-400 text-sm mb-3">
                      Sharing Type
                    </p>

                    <h3 className="text-3xl font-bold text-white">
                      {selectedRoom.type}
                    </h3>

                  </div>

                  <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">

                    <Users className="text-pink-400 mb-5" />

                    <p className="text-gray-400 text-sm mb-3">
                      Occupancy
                    </p>

                    <h3 className="text-3xl font-bold text-white">

                      {selectedRoom.occupied}
                      /
                      {selectedRoom.total}

                    </h3>

                  </div>

                  <div className="rounded-[30px] border border-white/10 bg-white/[0.04] p-7">

                    <Sparkles className="text-orange-300 mb-5" />

                    <p className="text-gray-400 text-sm mb-3">
                      Empty Beds
                    </p>

                    <h3 className="text-3xl font-bold text-white">

                      {selectedRoom.total -
                        selectedRoom.occupied}

                    </h3>

                  </div>

                </div>

                {/* BUTTON */}

                {selectedRoom.total -
                  selectedRoom.occupied > 0 ? (

                  <button
                    onClick={() =>
                      setOpenBooking(true)
                    }
                    className="
                    relative
                    overflow-hidden
                    px-12
                    py-5
                    rounded-full
                    text-white
                    font-semibold
                    group
                    "
                  >

                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"></span>

                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"></span>

                    <span className="relative z-10">

                      Book This Room →

                    </span>

                  </button>

                ) : (

                  <button className="px-12 py-5 rounded-full bg-red-500/15 border border-red-500/20 text-red-300">

                    Room Full

                  </button>

                )}

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* BOOKING MODAL */}

      <AnimatePresence>

        {openBooking && (

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
            z-[120]
            bg-black/70
            backdrop-blur-xl
            flex
            items-center
            justify-center
            px-4
            "
          >

            <motion.div
              initial={{
                scale: 0.85,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.85,
                opacity: 0,
              }}
              className="
              relative
              w-full
              max-w-2xl
              rounded-[40px]
              overflow-hidden
              border
              border-white/10
              bg-[#111117]/95
              backdrop-blur-3xl
              p-10
              "
            >

              {/* GLOW */}

              <div className="absolute top-0 left-0 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>

              <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-500/20 blur-[150px] rounded-full"></div>

              {/* CLOSE */}

              <button
                onClick={() =>
                  setOpenBooking(false)
                }
                className="absolute top-6 right-6 text-gray-400 hover:text-white"
              >

                <X size={30} />

              </button>

              {/* CONTENT */}

              <div className="relative z-10">

                <h2 className="text-5xl font-bold text-white mb-3">

                  Book Room{" "}
                  {selectedRoom.number}

                </h2>

                <p className="text-gray-400 text-lg mb-10">

                  Fill your details to reserve your room instantly.

                </p>

                {/* FORM */}

                <div className="space-y-5">

                  {/* NAME */}

                  <div className="relative">

                    <User2
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />

                    <input
                      type="text"
                      value={bookingData.name}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Enter Your Name"
                      className="
                      w-full
                      pl-14
                      pr-6
                      py-5
                      rounded-2xl
                      bg-white/[0.06]
                      border
                      border-white/10
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-purple-500/40
                      "
                    />

                  </div>

                  {/* PHONE */}

                  <div className="relative">

                    <Phone
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />

                    <input
                      type="tel"
                      value={bookingData.phone}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          phone: e.target.value,
                        })
                      }
                      placeholder="Phone Number"
                      className="
                      w-full
                      pl-14
                      pr-6
                      py-5
                      rounded-2xl
                      bg-white/[0.06]
                      border
                      border-white/10
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-purple-500/40
                      "
                    />

                  </div>

                  {/* DURATION */}

                  <div className="relative">

                    <CalendarDays
                      className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                      size={20}
                    />

                    <input
                      type="number"
                      value={bookingData.duration}
                      onChange={(e) =>
                        setBookingData({
                          ...bookingData,
                          duration: e.target.value,
                        })
                      }
                      placeholder="Duration (months)"
                      className="
                      w-full
                      pl-14
                      pr-6
                      py-5
                      rounded-2xl
                      bg-white/[0.06]
                      border
                      border-white/10
                      text-white
                      placeholder:text-gray-500
                      outline-none
                      focus:border-purple-500/40
                      "
                    />

                  </div>

                </div>

                {/* BUTTONS */}

                <div className="flex gap-4 mt-10">

                  <button
                    onClick={handleBooking}
                    className="
                    relative
                    overflow-hidden
                    flex-1
                    py-5
                    rounded-2xl
                    text-white
                    font-semibold
                    group
                    "
                  >

                    <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"></span>

                    <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"></span>

                    <span className="relative z-10">

                      Confirm Booking

                    </span>

                  </button>

                  <button
                    onClick={() =>
                      setOpenBooking(false)
                    }
                    className="
                    flex-1
                    py-5
                    rounded-2xl
                    border
                    border-white/10
                    bg-white/[0.06]
                    text-gray-300
                    hover:bg-white/[0.1]
                    transition
                    "
                  >

                    Cancel

                  </button>

                </div>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* SUCCESS MODAL */}

      <AnimatePresence>

        {bookingSuccess && (

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
            z-[140]
            bg-black/70
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
              max-w-xl
              overflow-hidden
              rounded-[40px]
              border
              border-emerald-500/20
              bg-[#111117]/95
              backdrop-blur-3xl
              p-10
              text-center
              "
            >

              {/* GLOW */}

              <div className="absolute top-0 left-0 w-80 h-80 bg-emerald-500/20 blur-[150px] rounded-full"></div>

              <div className="absolute bottom-0 right-0 w-80 h-80 bg-purple-500/20 blur-[150px] rounded-full"></div>

              {/* CONTENT */}

              <div className="relative z-10">

                <div className="
                mx-auto
                mb-8
                w-24
                h-24
                rounded-full
                bg-gradient-to-r
                from-emerald-400
                to-green-500
                flex
                items-center
                justify-center
                shadow-[0_0_50px_rgba(16,185,129,0.45)]
                ">

                  <CheckCircle2
                    size={50}
                    className="text-white"
                  />

                </div>

                <h2 className="text-5xl font-bold text-white mb-5">

                  Booking Confirmed 🎉

                </h2>

                <p className="text-gray-400 text-lg leading-relaxed mb-10">

                  Your booking request has been submitted successfully.
                  Our team will contact you shortly.

                </p>

                {/* DETAILS */}

                <div className="
                rounded-[30px]
                border
                border-white/10
                bg-white/[0.04]
                p-7
                text-left
                mb-10
                ">

                  <div className="flex justify-between mb-5">

                    <span className="text-gray-400">
                      Room Number
                    </span>

                    <span className="text-white font-semibold">
                      {selectedRoom.number}
                    </span>

                  </div>

                  <div className="flex justify-between mb-5">

                    <span className="text-gray-400">
                      Sharing Type
                    </span>

                    <span className="text-white font-semibold">
                      {selectedRoom.type}
                    </span>

                  </div>

                  <div className="flex justify-between mb-5">

                    <span className="text-gray-400">
                      Duration
                    </span>

                    <span className="text-white font-semibold">
                      {bookingData.duration || "N/A"} Months
                    </span>

                  </div>

                  <div className="flex justify-between">

                    <span className="text-gray-400">
                      Occupancy
                    </span>

                    <span className="text-white font-semibold">

                      {selectedRoom.occupied}
                      /
                      {selectedRoom.total}

                    </span>

                  </div>

                </div>

                <button
                  onClick={() =>
                    setBookingSuccess(false)
                  }
                  className="
                  relative
                  overflow-hidden
                  px-12
                  py-5
                  rounded-full
                  text-white
                  font-semibold
                  group
                  "
                >

                  <span className="absolute inset-0 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400"></span>

                  <span className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 blur-2xl bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500"></span>

                  <span className="relative z-10">

                    Awesome ✨

                  </span>

                </button>

              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}