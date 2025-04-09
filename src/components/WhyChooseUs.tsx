"use client";
import React from "react";
import { StickyScroll } from "@/components/ui/sticky-scroll-reveal";
import Image from "next/image";

const musicSchoolContent = [
  {
    title: "Unlock Your Musical Potential",
    description:
      "Embark on a transformative musical journey tailored just for you. Our expert instructors provide personalized guidance, helping you develop your unique sound and achieve your artistic aspirations.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/164880/pexels-photo-164880.jpeg"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Personalized Learning Experience",
    description:
      "Every student is different, and so is our approach. We customize lessons to match your skill level and goals, ensuring a learning experience that is both effective and inspiring.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/10254568/pexels-photo-10254568.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Master Your Craft with Expert Guidance",
    description:
      "Learn from seasoned musicians who are passionate about teaching. Our instructors bring years of experience and a deep love for music to help you refine your technique and artistry.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/8519712/pexels-photo-8519712.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Real-Time Feedback & Engagement",
    description:
      "Experience an interactive learning environment where feedback is immediate. Our hands-on approach ensures you master techniques with precision while staying engaged in your musical growth.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/7564196/pexels-photo-7564196.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Innovative & Modern Curriculum",
    description:
      "Stay ahead with our constantly updated curriculum, integrating the latest trends in music education and technology. Learn using contemporary techniques that make mastering music more effective and enjoyable.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/31531556/pexels-photo-31531556/free-photo-of-dj-performing-with-orange-backdrop-in-dubai.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
  {
    title: "Endless Learning Possibilities",
    description:
      "With an extensive library of resources and diverse course offerings, there’s always something new to explore. Expand your musical knowledge and skills at your own pace, anytime, anywhere.",
    content: (
      <div className="flex h-full w-full items-center justify-center text-white">
        <Image
          src="https://images.pexels.com/photos/7283631/pexels-photo-7283631.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          width={300}
          height={300}
          className="h-full w-full object-cover"
          alt=""
        />
      </div>
    ),
  },
];




export default function WhyChooseUs() {
  return (
    <div>
      <StickyScroll content={musicSchoolContent} />
    </div>
  )
}