import Navbar from "@/components/layout/navbar";
import HeroSection from "@/components/content/landing/heroLanding";
import FeaturesSection from "@/components/content/landing/featuresLanding";
import TestimonialsSection from "@/components/content/landing/testimonialLanding";
import Footer from "@/components/layout/footer";

export default function Landing() {
	return (
		<div className="min-h-screen flex flex-col bg-black text-white">
			<Navbar />
			<main className="flex-1">
				<HeroSection />
				<FeaturesSection />
				<TestimonialsSection />
			</main>
			<Footer />
		</div>
	);
}
