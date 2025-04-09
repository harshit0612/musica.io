import FeaturedCourses from "@/components/FeaturedCourses";
import FeaturedWebinar from "@/components/FeaturedWebinar";
import Footer from "@/components/Footer";
import HeroSection from "@/components/HeroSection";
import Instructor from "@/components/Instructor";
import MusicSchoolTestimonials from "@/components/MusicSchoolTestimonials";
import WhyChooseUs from "@/components/WhyChooseUs";


export default function Home() {
  return (
    <main className="min-h-screen bg-black/[0.96] antialiased bg-grid-white/[0.02]">  
      <HeroSection/>
      <FeaturedCourses/>
      <WhyChooseUs/>
      <MusicSchoolTestimonials/>
      <FeaturedWebinar/>
      <Instructor/>
      <Footer/>

    </main>
  );
}
