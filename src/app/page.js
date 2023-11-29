import BlogSection from "@/Components/BlogSection";
import Category from "@/Components/Category";
import Feature from "@/Components/Feature";
import Hero from "@/Components/Hero";
import NewArrival from "@/Components/NewArrival";

export default function Home() {
  return (
    <main>
      <Hero />
      <Feature />
      <NewArrival />
      <Category />
      <BlogSection />
    </main>
  );
}
