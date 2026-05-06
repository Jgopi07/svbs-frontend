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
  MapPin,
  Sparkles,
  Camera,
  ArrowUpRight,
} from "lucide-react";

export default function Gallery() {

  /* ====================================================== */
  /* 🔥 IMAGES */
  /* ====================================================== */

  const images = [

    {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36",
      title: "Luxury Lounge Area",
      subtitle:
        "Relax, socialize and unwind in our premium common lounge.",
      location: "Ground Floor",
      large: true,
    },

    {
      src: "https://images.unsplash.com/photo-1588072432836-e10032774350",
      title: "Silent Study Hall",
      subtitle:
        "Focused environment designed for productive study sessions.",
      location: "2nd Floor",
    },

    {
      src: "https://images.unsplash.com/photo-1555992336-03a23c7b20ee",
      title: "Modern Dining Mess",
      subtitle:
        "Fresh and hygienic meals served daily with comfort seating.",
      location: "Dining Block",
    },

    {
      src: "https://images.unsplash.com/photo-1507089947368-19c1da9775ae",
      title: "Premium Exterior",
      subtitle:
        "Elegant architecture with modern infrastructure and security.",
      location: "Main Entrance",
    },

    {
      src: "https://images.unsplash.com/photo-1506744038136-46273834b3fb",
      title: "Rooftop Sunset",
      subtitle:
        "Peaceful rooftop area with beautiful evening skyline views.",
      location: "Terrace",
    },

    {
      src: "https://images.unsplash.com/photo-1494526585095-c41746248156",
      title: "Comfort Rooms",
      subtitle:
        "Premium rooms with modern furniture and ventilation.",
      location: "Residential Block",
    },

  ];

  /* ====================================================== */
  /* 🔥 STATES */
  /* ====================================================== */

  const [selectedImage, setSelectedImage] =
    useState<any>(null);

  /* ====================================================== */
  /* 🔥 JSX */
  /* ====================================================== */

  return (

    <section className="relative py-36 px-6 overflow-hidden">

      {/* ================================================= */}
      {/* 🔥 BACKGROUND GLOW */}
      {/* ================================================= */}

      <div className="absolute inset-0">

        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-purple-500/10 blur-[180px] rounded-full"></div>

        <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-pink-500/10 blur-[180px] rounded-full"></div>

      </div>

      {/* ================================================= */}
      {/* 🔥 TOP HEADER */}
      {/* ================================================= */}

      <motion.div
        initial={{
          opacity: 0,
          y: 40,
        }}
        whileInView={{
          opacity: 1,
          y: 0,
        }}
        viewport={{
          once: true,
        }}
        className="max-w-7xl mx-auto mb-20 relative z-10"
      >

        {/* SMALL LABEL */}

        <div className="flex items-center gap-3 mb-5">

          <div className="
          w-10
          h-10
          rounded-2xl
          bg-gradient-to-r
          from-purple-500/20
          to-pink-500/20
          border
          border-white/10
          flex
          items-center
          justify-center
          ">

            <Camera
              size={18}
              className="text-purple-300"
            />

          </div>

          <p className="
          text-sm
          tracking-[0.35em]
          text-gray-400
          uppercase
          ">

            Gallery Experience

          </p>

        </div>

        {/* TITLE */}

        <h2 className="
        text-5xl
        md:text-7xl
        font-bold
        text-white
        leading-tight
        mb-8
        ">

          A premium look{" "}

          <span className="
          bg-gradient-to-r
          from-purple-400
          via-pink-400
          to-orange-300
          bg-clip-text
          text-transparent
          ">

            inside.

          </span>

        </h2>

        {/* DESCRIPTION */}

        <p className="
        max-w-3xl
        text-lg
        text-gray-400
        leading-relaxed
        ">

          Explore thoughtfully designed hostel spaces
          crafted for comfort, productivity, relaxation
          and a modern premium living experience for students.

        </p>

      </motion.div>

      {/* ================================================= */}
      {/* 🔥 MAIN GRID */}
      {/* ================================================= */}

      <div className="
      grid
      md:grid-cols-3
      gap-7
      max-w-7xl
      mx-auto
      relative
      z-10
      auto-rows-[260px]
      ">

        {/* ============================================= */}
        {/* 🔥 BIG CARD */}
        {/* ============================================= */}

        <motion.div
          initial={{
            opacity: 0,
            scale: 0.95,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.6,
          }}
          onClick={() =>
            setSelectedImage(images[0])
          }
          className="
          md:col-span-2
          md:row-span-2
          relative
          overflow-hidden
          rounded-[35px]
          group
          cursor-pointer
          border
          border-white/10
          "
        >

          {/* IMAGE */}

          <img
            src={images[0].src}
            alt={images[0].title}
            className="
            w-full
            h-full
            object-cover
            group-hover:scale-110
            transition-all
            duration-[1800ms]
            "
          />

          {/* OVERLAY */}

          <div className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          via-black/40
          to-transparent
          "></div>

          {/* GLOW */}

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
            rounded-[35px]
            bg-gradient-to-r
            from-purple-500/20
            via-pink-500/20
            to-orange-400/20
            blur-2xl
            "></div>

          </div>

          {/* CONTENT */}

          <div className="
          absolute
          bottom-0
          left-0
          w-full
          p-8
          z-10
          ">

            <div className="
            flex
            items-center
            justify-between
            mb-5
            ">

              <div className="
              px-4
              py-2
              rounded-full
              bg-white/10
              backdrop-blur-xl
              border
              border-white/10
              text-white
              text-sm
              ">

                Featured Space

              </div>

              <div className="
              w-12
              h-12
              rounded-full
              bg-white/10
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              group-hover:rotate-45
              transition
              duration-500
              ">

                <ArrowUpRight size={20} />

              </div>

            </div>

            <h3 className="
            text-4xl
            font-bold
            text-white
            mb-4
            ">

              {images[0].title}

            </h3>

            <p className="
            text-gray-300
            text-lg
            max-w-2xl
            leading-relaxed
            mb-5
            ">

              {images[0].subtitle}

            </p>

            <div className="
            flex
            items-center
            gap-2
            text-purple-300
            ">

              <MapPin size={18} />

              <span>
                {images[0].location}
              </span>

            </div>

          </div>

        </motion.div>

        {/* ============================================= */}
        {/* 🔥 SMALL CARDS */}
        {/* ============================================= */}

        {images.slice(1).map((img, i) => (

          <motion.div
            key={i}
            initial={{
              opacity: 0,
              y: 40,
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
            onClick={() =>
              setSelectedImage(img)
            }
            className="
            relative
            overflow-hidden
            rounded-[30px]
            cursor-pointer
            group
            border
            border-white/10
            "
          >

            {/* IMAGE */}

            <img
              src={img.src}
              alt={img.title}
              className="
              w-full
              h-full
              object-cover
              group-hover:scale-110
              transition-all
              duration-[1500ms]
              "
            />

            {/* DARK OVERLAY */}

            <div className="
            absolute
            inset-0
            bg-gradient-to-t
            from-black
            via-black/40
            to-transparent
            "></div>

            {/* HOVER OVERLAY */}

            <div className="
            absolute
            inset-0
            opacity-0
            group-hover:opacity-100
            transition
            duration-500
            ">

              <div className="
              absolute
              inset-0
              bg-gradient-to-t
              from-purple-500/20
              via-transparent
              to-pink-500/10
              "></div>

            </div>

            {/* CONTENT */}

            <div className="
            absolute
            bottom-0
            left-0
            w-full
            p-5
            z-10
            ">

              <div className="
              flex
              items-center
              justify-between
              mb-3
              ">

                <div className="
                flex
                items-center
                gap-2
                text-xs
                text-purple-300
                ">

                  <Sparkles size={14} />

                  Premium

                </div>

                <ArrowUpRight
                  size={18}
                  className="
                  text-white
                  group-hover:rotate-45
                  transition
                  duration-500
                  "
                />

              </div>

              <h3 className="
              text-xl
              font-bold
              text-white
              mb-2
              ">

                {img.title}

              </h3>

              <p className="
              text-gray-300
              text-sm
              leading-relaxed
              line-clamp-2
              mb-3
              ">

                {img.subtitle}

              </p>

              <div className="
              flex
              items-center
              gap-2
              text-sm
              text-gray-300
              ">

                <MapPin size={14} />

                {img.location}

              </div>

            </div>

          </motion.div>
        ))}

      </div>

      {/* ================================================= */}
      {/* 🔥 FULL SCREEN MODAL */}
      {/* ================================================= */}

      <AnimatePresence>

        {selectedImage && (

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
            z-[150]
            bg-black/80
            backdrop-blur-xl
            flex
            items-center
            justify-center
            px-4
            "
          >

            {/* CLOSE BUTTON */}

            <button
              onClick={() =>
                setSelectedImage(null)
              }
              className="
              absolute
              top-8
              right-8
              w-14
              h-14
              rounded-full
              bg-white/10
              border
              border-white/10
              flex
              items-center
              justify-center
              text-white
              hover:bg-white/20
              transition
              z-50
              "
            >

              <X size={28} />

            </button>

            {/* MODAL BOX */}

            <motion.div
              initial={{
                scale: 0.9,
                opacity: 0,
              }}
              animate={{
                scale: 1,
                opacity: 1,
              }}
              exit={{
                scale: 0.9,
                opacity: 0,
              }}
              transition={{
                duration: 0.35,
              }}
              className="
              relative
              w-full
              max-w-6xl
              overflow-hidden
              rounded-[40px]
              border
              border-white/10
              bg-[#111117]/90
              backdrop-blur-3xl
              "
            >

              {/* IMAGE */}

              <div className="
              relative
              h-[70vh]
              overflow-hidden
              ">

                <img
                  src={selectedImage.src}
                  alt={selectedImage.title}
                  className="
                  w-full
                  h-full
                  object-cover
                  "
                />

                <div className="
                absolute
                inset-0
                bg-gradient-to-t
                from-black
                via-black/30
                to-transparent
                "></div>

              </div>

              {/* CONTENT */}

              <div className="
              p-10
              relative
              ">

                <div className="
                flex
                flex-col
                md:flex-row
                md:items-center
                md:justify-between
                gap-6
                ">

                  <div>

                    <h2 className="
                    text-5xl
                    font-bold
                    text-white
                    mb-5
                    ">

                      {selectedImage.title}

                    </h2>

                    <p className="
                    text-lg
                    text-gray-400
                    leading-relaxed
                    max-w-3xl
                    mb-6
                    ">

                      {selectedImage.subtitle}

                    </p>

                    <div className="
                    flex
                    items-center
                    gap-3
                    text-purple-300
                    ">

                      <MapPin size={18} />

                      {selectedImage.location}

                    </div>

                  </div>

                  {/* BUTTON */}

                  <button className="
                  relative
                  overflow-hidden
                  px-10
                  py-5
                  rounded-full
                  text-white
                  font-semibold
                  group
                  ">

                    <span className="
                    absolute
                    inset-0
                    bg-gradient-to-r
                    from-purple-500
                    via-pink-500
                    to-orange-400
                    "></span>

                    <span className="
                    absolute
                    inset-0
                    opacity-0
                    group-hover:opacity-100
                    transition
                    duration-500
                    blur-2xl
                    bg-gradient-to-r
                    from-orange-400
                    via-pink-500
                    to-purple-500
                    "></span>

                    <span className="relative z-10">

                      Explore More →

                    </span>

                  </button>

                </div>

              </div>

            </motion.div>

          </motion.div>
        )}

      </AnimatePresence>

    </section>
  );
}