import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Marquee from "@/components/Marquee";
import StatsStrip from "@/components/StatsStrip";
import TwoDivisions from "@/components/TwoDivisions";
import HowWeWork from "@/components/HowWeWork";
import CommoditySpotlight from "@/components/CommoditySpotlight";
import WhyGuru from "@/components/WhyGuru";
import OperatingHubs from "@/components/OperatingHubs";
import Testimonials from "@/components/Testimonials";
import HomeFAQ from "@/components/HomeFAQ";
import InquirySection from "@/components/InquirySection";
import ClosingCTA from "@/components/ClosingCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col bg-[#F7F6F2] overflow-x-hidden">
      {/* 1. Hero (bigger, as in Part 2) */}
      <Navbar />
      <Hero />

      {/* 2. Logo marquee (bigger) */}
      <Marquee />

      {/* 3. NEW · Stats strip: 4 big numbers in a row */}
      <StatsStrip />

      {/* 4. Division cards (existing 3, bigger; each link goes to its page) */}
      <TwoDivisions />

      {/* 5. NEW · "How we work": 4 numbered steps in a horizontal line with connecting hairline */}
      <HowWeWork />

      {/* 6. NEW · Commodity spotlight: 2-column layout */}
      <CommoditySpotlight />

      {/* 7. NEW · Why Guru: 6 small feature tiles in a 3x2 grid */}
      <WhyGuru />

      {/* 8. NEW · Operating hubs: SVG Gujarat map with pins + list */}
      <OperatingHubs />

      {/* 9. NEW · Testimonials: 3 quote cards */}
      <Testimonials />

      {/* 10. NEW · FAQ: 6 most common questions */}
      <HomeFAQ />

      {/* 11. Inquiry section (compact version with "Full contact page →" link) */}
      <InquirySection />

      {/* 12. NEW · Closing CTA band */}
      <ClosingCTA />

      {/* 13. Footer */}
      <Footer />
    </main>
  );
}
