import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Ticker from "@/components/Ticker";
import HowItWorks from "@/components/HowItWorks";
import Features from "@/components/Features";
import Comparison from "@/components/Comparison";
import Reviews from "@/components/Reviews";
import BuySection from "@/components/BuySection";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";
import StickyCTA from "@/components/StickyCTA";
import EmailPopup from "@/components/EmailPopup";
import ScrollToTop from "@/components/ScrollToTop";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Ticker />
        <HowItWorks />
        <Features />
        <Comparison />
        <Reviews />
        <BuySection />
        <FAQ />
      </main>
      <Footer />
      <StickyCTA />
      <EmailPopup />
      <ScrollToTop />
    </>
  );
}
