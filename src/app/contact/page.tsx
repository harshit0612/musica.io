"use client";
import React from "react";
import { BackgroundBeams } from "@/components/ui/background-beams";

function Page() {
    return (
        <div className="min-h-screen w-full bg-neutral-950 relative flex flex-col items-center justify-center antialiased px-4 sm:px-6 md:px-8">
            <div className="w-full max-w-2xl mx-auto py-8 sm:py-12 md:py-16">
                <h1 className="mt-18 relative z-10 text-2xl sm:text-5xl md:text-6xl bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600 text-center font-sans font-bold">
                    Contact Us
                </h1>

                <p className="text-center text-neutral-500 max-w-xl mx-auto mt-7 sm:mt-9 sm:text-sm relative z-10 px-2">
                    We're here to help with any questions about our courses, programs, or events.
                    Reach out and let us know how we can assist you in your musical journey.
                </p>

                {/* Contact Form */}
                <form className="mt-5 space-y-6 relative z-10">
                    <div>
                        <label htmlFor="name" className="block text-sm text-neutral-400 mb-1">Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="email" className="block text-sm text-neutral-400 mb-1">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                        />
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm text-neutral-400 mb-1">Message</label>
                        <textarea
                            id="message"
                            name="message"
                            rows={5}
                            required
                            className="w-full px-4 py-2 bg-neutral-800 text-white rounded-md border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-neutral-600"
                        />
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-gradient-to-r from-neutral-200 to-neutral-500 text-black font-semibold py-2 rounded-md hover:opacity-90 transition-all"
                    >
                        Send Message
                    </button>
                </form>
            </div>
            <BackgroundBeams />
        </div>
    );
}

export default Page;
