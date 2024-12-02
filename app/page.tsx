"use client"
import Grid from "@/components/Grid";
import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import RecentProjects from "@/components/RecentProjects";
import { navItems } from "@/data/index";
import Extra from "@/components/Extra";
import Sport from "@/components/Sport";
import Work from "@/components/Work";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative bg-black-100
    flex justify-center items-center flex-col
    overflow-hidden max-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full ">
        <FloatingNav navItems={navItems} />
        <section id="hero">
          <Hero />
        </section>
        <section id="grid">
          <Grid />
        </section>
        <section id="recent-projects">
          <RecentProjects />
        </section>
        <section id="extra">
          <Extra />
        </section>
        <section id="sport">
          <Sport />
        </section>
        <section id="work">
          <Work />
        </section>
        <section id="contact">
          <Contact />
        </section>
        <Footer />
      </div>
    </main>
  );
}
