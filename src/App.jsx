import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
// import OtherStories from "./components/OtherStories";
import FeaturedMedia from "./components/FeaturedMedia";
import BlogsSection from "./components/BlogsSection";
// import TrendingNews from "./components/TrendingNews";
// import NewsList from "./components/NewsList";
import CombinedSection from "./components/CombinedSection";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Navbar />
      <HeroSection />
      {/* <OtherStories /> */}
      <FeaturedMedia />
      <CombinedSection/>
      <Footer/>
      {/* <div className="grid md:grid-cols-3 gap-6 p-4">
        <div className="md:col-span-2">
          <BlogsSection />
        </div>
        <div className="md:col-span-1 space-y-4">
          <TrendingNews />
          <NewsList />
        </div>
      </div> */}
    </div>
  );
}
