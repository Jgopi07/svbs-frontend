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
    <main className="relative overflow-hidden">

      {/* 🔥 NAVBAR */}
      <Navbar />

      {/* 🔥 HERO */}
      <Hero />

      {/* 🔥 TRUST STRIP */}
      <TrustedStrip />

      {/* 🔥 FACILITIES */}
      <Facilities />

      {/* 🔥 ROOMS */}
      <Rooms />

      {/* 🔥 NEW ROOM AVAILABILITY SECTION */}
      <RoomAvailability />

      {/* 🔥 GALLERY */}
      <Gallery />

      {/* 🔥 CTA */}
      <CTA />

      {/* 🔥 FOOTER */}
      <Footer />

    </main>
  );
}