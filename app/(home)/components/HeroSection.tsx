import Link from "next/link";
import React from "react";

export default function HeroSection() {
  return (
    <div className="flex items-center justify-between min-h-[60vh] lg:flex-row flex-col-reverse lg:gap-0 gap-14">
      <div className="space-y-10 text-center lg:text-left">
        <h1 className="text-4xl lg:text-7xl font-bold">
          Hi, Nice to meet you!👋
          <br />
          <span className="underline underline-offset-8 decoration-green-500">
            I'm Yoga Dharma.
          </span>
        </h1>
        <p className="md:w-96 text-lg text-gray-300">
          Based in Indonesia, I'm a Fullstack developer passionate about
          building a modern web application that users love.
        </p>
        <Link href={"mailto:yogadev2006@gmail.com"} className="inline-block">
          <div className="group">
            <h1 className="text-3xl font-bold group-hover:text-green-400 transition-all">
              Contact Me📭
            </h1>
            <div className="w-40 h-2 bg-green-500 rounded-full "></div>
            <div className="w-40 h-2 bg-indigo-500 rounded-full translate-x-2"></div>
          </div>
        </Link>
      </div>
      <div>
        <div className="w-72 h-72 space-y-3 -rotate-[30deg]">
          <div className="flex gap-3 translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-green-500"></div>
            <div className="w-32 h-32 rounded-full bg-indigo-500"></div>
          </div>
          <div className="flex gap-3 -translate-x-8">
            <div className="w-32 h-32 rounded-2xl bg-indigo-500"></div>
            <div className="w-32 h-32 rounded-full bg-green-500"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
