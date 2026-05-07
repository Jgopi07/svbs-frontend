"use client";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustedStrip from "@/components/TrustedStrip";
import Facilities from "@/components/Facilities";
import Rooms from "@/components/Rooms";
import RoomAvailability from "@/components/RoomAvailability";
import Gallery from "@/components/Gallery";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {

  return (

    <main
      className="
      relative
      overflow-hidden
      bg-black
      min-h-screen
      "
    >

      {/* ================================================= */}
      {/* 🔥 GLOBAL BACKGROUND */}
      {/* ================================================= */}

      <div
        className="
        fixed
        inset-0
        overflow-hidden
        pointer-events-none
        "
      >

        {/* GRID */}

        <div
          className="
          absolute
          inset-0
          opacity-[0.03]
          [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)]
          [background-size:80px_80px]
          "
        ></div>

        {/* PURPLE GLOW */}

        <div
          className="
          absolute
          top-[-250px]
          left-[-250px]
          w-[700px]
          h-[700px]
          bg-purple-500/20
          blur-[180px]
          rounded-full
          animate-pulse
          "
        ></div>

        {/* PINK GLOW */}

        <div
          className="
          absolute
          bottom-[-250px]
          right-[-250px]
          w-[700px]
          h-[700px]
          bg-pink-500/20
          blur-[180px]
          rounded-full
          animate-pulse
          "
        ></div>

        {/* CENTER GLOW */}

        <div
          className="
          absolute
          top-1/2
          left-1/2
          -translate-x-1/2
          -translate-y-1/2
          w-[650px]
          h-[650px]
          bg-yellow-400/5
          blur-[180px]
          rounded-full
          "
        ></div>

      </div>


<>
  <Navbar />

  <section id="home">
    <Hero />
  </section>

  <section id="facilities">
    <Facilities />
  </section>

  <section id="rooms">
    <Rooms />
  </section>

  <section id="gallery">
    <Gallery />
  </section>

  <section id="contact">
    <Footer />
  </section>
</>
      {/* ================================================= */}
      {/* 🔥 WEBSITE CONTENT */}
      {/* ================================================= */}

      <div className="relative z-10">

        {/* ============================================= */}
        {/* 🔥 NAVBAR */}
        {/* ============================================= */}

        <Navbar />

        {/* ============================================= */}
        {/* 🔥 HERO */}
        {/* ============================================= */}

        <Hero />

        {/* ============================================= */}
        {/* 🔥 TRUST STRIP */}
        {/* ============================================= */}

        <TrustedStrip />

        {/* ============================================= */}
        {/* 🔥 FACILITIES */}
        {/* ============================================= */}

        <Facilities />

        {/* ============================================= */}
        {/* 🔥 ROOMS */}
        {/* ============================================= */}

        <Rooms />

        {/* ============================================= */}
        {/* 🔥 ROOM AVAILABILITY */}
        {/* ============================================= */}

        <RoomAvailability />

        {/* ============================================= */}
        {/* 🔥 GALLERY */}
        {/* ============================================= */}

        <Gallery />

        {/* ============================================= */}
        {/* 🔥 CTA */}
        {/* ============================================= */}

        <CTA />

        {/* ============================================= */}
        {/* 🔥 FOOTER */}
        {/* ============================================= */}

        <Footer />

      </div>

    </main>
  );
}