import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import TwoDivisions from "@/components/TwoDivisions";
import InquirySection from "@/components/InquirySection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F6F2]">
      <Navbar />
      <Hero />
      <Marquee />
      <TwoDivisions />
      <InquirySection />
      <Footer />
    </main>
  );
}
