import AboutSection from "@/components/main/home/AboutSection";
import HeroSection from "@/components/main/home/HeroSection";

export default function Home() {
  return (
    <div className="space-y-24">
      <HeroSection />
      <AboutSection />
    </div>
  );
}
