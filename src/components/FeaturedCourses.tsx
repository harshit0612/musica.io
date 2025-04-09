'use client'
import courseData from '@/data/music_courses.json'
import Link from 'next/link'
import { BackgroundGradient } from './ui/background-gradient';

interface Course {
    id: number;
    title: string;
    slug: string;
    description: string;
    price: number;
    instructor: string;
    isFeatured: boolean;
}

export default function FeaturedCourses(){
    const featuredCourses = courseData.courses.filter((course:Course) => course.isFeatured)
    return(
        <div className='py-12 bg-gray-900'>
            <div className='text-center mb-7'>
                <h2 className='text-base text-teal-600 font-semibold tracking-wide uppercase'>
                    FEATURED COURSES
                </h2>
                <p className='mt-2 leading-8 tracking-tight text-3xl text-white sm:text-4xl font-extrabold'>
                    Learn With the Best
                </p>
            </div>

            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 justify-center'>
                {featuredCourses.map((course:Course)=>(
                    <div key={course.id} className='flex justify-center items-center'>
                        <BackgroundGradient className="flex flex-col rounded-[22px] max-w-sm p-4 sm:p-10 bg-white dark:bg-zinc-900">
                            <p className='text-xl font-light text-center mb-3 text-white'>
                                {course.title}
                            </p>
                            <p className='text-xs text-gray-400 font-light text-center mb-5'>
                                {course.description}
                            </p>
                            <div className='text-center'>
                                <Link href={`/courses/${course.slug}`} className='px-2 py-1 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                                        Learn more
                                    </Link>
                            </div>
                        </BackgroundGradient>
                    </div>
                ))}
            </div>

            <div className='mt-20 text-center'>
                <Link href={"/courses"} className='px-4 py-2 rounded border border-neutral-600 text-neutral-700 bg-white hover:bg-gray-100 transition duration-200'>
                    View All Courses
                </Link>
            </div>
        </div>
    )
} 