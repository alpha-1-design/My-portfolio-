import { Navigation } from "@/components/navigation"
import { HeroSection } from "@/components/hero-section"
import { AboutSection } from "@/components/about-section"
import { ServicesSection } from "@/components/services-section"
import { ProjectsSection } from "@/components/projects-section"
import { ReviewsSection } from "@/components/reviews-section"
import { BookingSection } from "@/components/booking-section"
import { ContactSection } from "@/components/contact-section"
import { Footer } from "@/components/footer"
import { ParticleField } from "@/components/particle-field"
import { BackToTop } from "@/components/back-to-top"
import { SectionDivider } from "@/components/section-divider"
import { LoadingScreen } from "@/components/loading-screen"

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <LoadingScreen />
      <ParticleField />
      <Navigation />
      <HeroSection />
      <SectionDivider />
      <AboutSection />
      <SectionDivider />
      <ServicesSection />
      <SectionDivider />
      <ProjectsSection />
      <SectionDivider />
      <ReviewsSection />
      <SectionDivider />
      <BookingSection />
      <SectionDivider />
      <ContactSection />
      <SectionDivider />
      <Footer />
      <BackToTop />
    </main>
  )
}
