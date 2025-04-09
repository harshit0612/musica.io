"use client";
import allCourses from "@/data/music_courses.json";
import Image from "next/image";
import React from "react";
import { CardBody, CardContainer, CardItem } from "@/components/ui/3d-card";

const courses = allCourses.courses;
const len = courses.length;

export default function AllCourses() {
  return (
    <div className="min-h-screen bg-black py-12 px-4 sm:px-6 lg:px-12">
      <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-center font-sans font-bold text-white mt-30">
        All Courses ({len})
      </h1>

      <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 justify-items-center">
        {courses.map((course) => (
          <CardContainer key={course.id} className="inter-var w-full max-w-sm">
            <CardBody className="bg-gray-50 relative group/card dark:bg-black dark:border-white/[0.2] border border-black/[0.1] dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] rounded-xl p-6 w-full">
              <CardItem
                translateZ="50"
                className="text-xl font-bold text-neutral-600 dark:text-white"
              >
                {course.title}
              </CardItem>
              <CardItem
                as="p"
                translateZ="60"
                className="text-neutral-500 text-sm mt-2 dark:text-neutral-300"
              >
                {course.description}
              </CardItem>
              <CardItem translateZ="100" className="w-full mt-4">
                <Image
                  src={course.image}
                  height={1000}
                  width={1000}
                  className="h-60 w-full object-cover rounded-xl group-hover/card:shadow-xl"
                  alt={course.title}
                />
              </CardItem>
            </CardBody>
          </CardContainer>
        ))}
      </div>
    </div>
  );
}
