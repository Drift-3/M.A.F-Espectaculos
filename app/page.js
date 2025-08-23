
"use client";
import Conocenos from "@/components/Conocenos";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import PorqueSomos from "@/components/PorqueSomos";
import ReelsSection from "@/components/ReelsSection";
import Testimonios from "@/components/Testimonios";
import dynamic from "next/dynamic";

const Mapa = dynamic(() => import("@/components/Mapa"), {
  ssr: false,
});

export default function Home() {
  return (
    <>
      <HeroSection />
      <Conocenos />
       <section className="bg-black text-black py-12 px-4 text-center">
        <h1 className="text-4xl md:text-5xl font-bebas mb-6 leading-tight text-white drop-shadow-[1px_1px_2px_#fff]">Nuestro Recorrido</h1>
        <Mapa />
      </section>
      <PorqueSomos />
      <ReelsSection />
      <Testimonios />

      

      <Footer />
    </>
  );
}
