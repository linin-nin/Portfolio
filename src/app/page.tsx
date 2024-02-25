import Biography from "@/components/biography/Biography";
import Hero from "@/components/hero/hero";
import Bounded from "@/components/Bounded";
import React from "react";
import TechList from "@/components/Marqueen";
import Heading from "@/components/Heading";
import { Facebook, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Bounded>
        <Hero/>
        <Biography/>
      </Bounded>
      <TechList/>
      <Bounded >
          <div className="flex flex-col justify-center items-center gap-7">
            <Heading as="h1" size="lg">
              Interested to work
            </Heading>
            <Heading as="h1" size="lg">
              with me ?
            </Heading>
            <button className="border-2 rounded-full px-10 py-2">
              Let's talk
            </button>
            <div className="socials inline-flex justify-center sm:justify-end">
                <Link
                  href='https://www.linkedin.com/in/sreyninpon/'
                  className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
                >
                  <Linkedin />
                </Link>
                <Link
                  href='https://www.facebook.com/profile.php?id=100054628981903'
                  className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
                >
                  <Facebook />
                </Link>
                <Link
                  href='https://github.com/linin-nin'
                  className="p-2 text-2xl text-slate-300 transition-all duration-150 hover:scale-125 hover:text-yellow-400"
                >
                  <Twitter />
                </Link>
            </div>
          </div>
      </Bounded>
    </>
  );
}
