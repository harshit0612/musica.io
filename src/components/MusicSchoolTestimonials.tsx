"use client";
import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "@/components/ui/infinite-moving-cards";
import { GridSmallBackgroundDemo } from "./ui/background-grids";
const testimonials = [
    {
      quote:
        "Music gives a soul to the universe, wings to the mind, flight to the imagination, and life to everything. It is a language that connects hearts beyond words.",
      name: "Ravi Shankar",
      title: "Sitar Maestro & Composer",
    },
    {
      quote:
        "The true beauty of music is that it connects people. It carries a message, and we, the musicians, are the messengers.",
      name: "A. R. Rahman",
      title: "Oscar-Winning Composer",
    },
    {
      quote:
        "Music should strike fire from the heart of man, and bring tears from the eyes of woman. It has the power to uplift the soul and bring joy to life.",
      name: "Bhimsen Joshi",
      title: "Legendary Hindustani Vocalist",
    },
    {
      quote:
        "When you begin to see the beauty of sound, every note becomes a meditation, and every melody a prayer.",
      name: "Lata Mangeshkar",
      title: "Melody Queen of India",
    },
    {
      quote:
        "Every sound, every note, every rhythm in music has the ability to heal and elevate the spirit. Music is not just entertainment, but a divine experience.",
      name: "M. S. Subbulakshmi",
      title: "Carnatic Music Icon",
    },
];
  
export default function MusicSchoolTestimonials(){
    return (
        <GridSmallBackgroundDemo>
            <div className="h-[40rem]  rounded-md flex flex-col antialiased dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden ">
                <p className="text-center text-xl font-bold mb-5 text-white">
                    Hear Our Harmony: Voices of Success
                </p>
                <InfiniteMovingCards
                    items={testimonials}
                    direction="right"
                    speed="slow"
                />
            </div>  
        </GridSmallBackgroundDemo>
    )
}





