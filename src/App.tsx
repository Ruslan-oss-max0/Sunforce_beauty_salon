import { MotionConfig } from 'motion/react';
import { AboutSection } from './components/AboutSection';
import { BookingSection } from './components/BookingSection';
import { Footer } from './components/Footer';
import { GallerySection } from './components/GallerySection';
import { Header } from './components/Header';
import { HeroSection } from './components/HeroSection';
import { LocationSection } from './components/LocationSection';
import { PricingSection } from './components/PricingSection';
import { ServicesSection } from './components/ServicesSection';

export default function App() {
  return (
    <MotionConfig reducedMotion="user">
      <div className="min-h-screen bg-[#F4F0E8] text-[#132620]">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-[#D8CB8E] focus:px-4 focus:py-2 focus:text-sm focus:font-medium focus:text-[#132620]"
        >
          Перейти до основного змісту
        </a>

        <Header />

        <main id="main-content">
          <HeroSection />
          <ServicesSection />
          <AboutSection />
          <PricingSection />
          <GallerySection />
          <BookingSection />
          <LocationSection />
        </main>

        <Footer />
      </div>
    </MotionConfig>
  );
}
