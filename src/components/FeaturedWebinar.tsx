import Link from "next/link";
import { HoverEffect } from "./ui/card-hover-effect";

export const featuredWebinar = [
  {
    title: "Sur Se Samvad: Vocal Techniques in Hindustani Music",
    description:
      "Join Padma Shri Pt. Raghunandan Panshikar as he unravels the beauty of voice modulation, raga clarity, and meend techniques in Hindustani classical singing.",
    slug: "sur-se-samvad",
    isFeatured: true,
  },
  {
    title: "Naad Yoga: Healing Through Sound",
    description:
      "Explore the ancient Indian tradition of Naad Yoga with Swami Atmanand Saraswati, blending sound, meditation, and breath to unlock inner harmony.",
    slug: "naad-yoga",
    isFeatured: false,
  },
  {
    title: "Layakari Made Easy: Understanding Rhythm in Indian Music",
    description:
      "Unlock the magic of rhythm in Indian music with tabla maestro Shri Yogesh Samsi. A practical session on tala, layakari, and improvisation for all levels.",
    slug: "layakari",
    isFeatured: false,
  },
  {
    title: "Swar to Studio: Music Production for Indian Genres",
    description:
      "From classical vocals to indie fusion—learn how to produce high-quality music using Indian instruments and DAWs. Hosted by composer and producer Rohan Kamble.",
    slug: "swar-to-studio",
    isFeatured: true,
  },
  {
    title: "Bhajan to Bollywood: Expressive Singing Techniques",
    description:
      "Playback singer Meenal Jain shares performance secrets for devotional music and playback singing—from emotion to expression.",
    slug: "bhajan-to-bollywood",
    isFeatured: false,
  },
  {
    title: "Raag & Ras: Interpreting Emotions in Indian Melodies",
    description:
      "Dive deep into the emotional core of Indian ragas with Dr. Veena Sahasrabuddhe. Learn how rasa theory shapes Indian musical storytelling.",
    slug: "raag-and-ras",
    isFeatured: true,
  },
  
];


export default function FeaturedWebinar(){
    return(
        <div className='py-12 bg-gray-900'>
            <div className='text-center mb-7'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>FEATURED WEBINARS</h2>
                <p className='mt-2 leading-8 tracking-tight text-3xl text-white sm:text-4xl font-extrabold'> Enhance Your Musical Journey</p>
            </div>
            <div className="max-w-5xl mx-auto px-8">
                <HoverEffect items={featuredWebinar.map(webinars => (
                  {
                    title: webinars.title,
                    description: webinars.description,
                    link: `/${webinars.slug}`
                  }
                ))} />
            </div>
            <div className="text-center">
                <Link href={"#"} className='px-2 py-1 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View All Webinars
                </Link>
            </div>
        </div>
    )
}