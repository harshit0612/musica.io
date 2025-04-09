import { div } from "motion/react-client";
import Link from "next/link";
import { Spotlight } from "./ui/Spotlight";
import { Button } from "./ui/moving-border";

export default function HeroSection(){
    return (
        <div className="h-auto md:h-[40rem] w-full rounded-md flex flex-col items-center justify-center relative overflow-hidden mx-auto py-10 md:py-0">
            <Spotlight
                className="-top-40 left-0 md:-top-20 md:left-60"
                fill="white"
            />

            <div>
                <h1 className="text-center md:mt-25 text-4xl md:text-7xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 mt-35 ">Master the art of music</h1>
                <p className="mt-10 font-normal text-center md:text-lg text-neutral-300 max-w-lg mx-auto">Dive into our comprehensive music courses and transform your musical journey today. Whether you're a beginner or looking to refine your skills, join us to unlock your true potential.</p>
            </div>
            <div className="md: mt-10 md: mb-5">
                <Link href={"/courses"}>
                    <Button borderRadius="1.75rem" className="bg-white dark:bg-black text-black dark:text-white border-neutral-200 dark:border-slate-800 cursor-pointer">Explore courses</Button>
                </Link> 
            </div>
        </div>
    ) 
}