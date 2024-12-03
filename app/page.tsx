"use client"
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data/index";
import Extra from "@/components/Extra";
import Sport from "@/components/Sport";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import { FloatingNav } from "@/components/ui/floating-navbar";

export default function Home() {
  return (
    <main className="relative bg-black-100 flex justify-center items-center flex-col mx-auto sm:px-10 px-5 overflow-clip">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems.map(item => ({ ...item, icon: item.icon ? <item.icon /> : undefined }))} />
        <Hero />
        <Grid />
        <RecentProjects />
        <Extra />
        <Sport />
        <Work />
        <Contact />
        <Footer />
      </div>
    </main>
  );
}
