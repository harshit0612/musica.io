import Link from 'next/link'
import React from 'react'
import { FaInstagram, FaFacebookF, FaYoutube, FaTwitter } from 'react-icons/fa';


export default function Footer() {
    return (
        <footer className='bg-black text-gray-400 py-12'>
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8'>
                <div className="mt-6 max-w-sm">
                    <h2 className="text-lg font-semibold mb-2">About Us</h2>
                    <p className="text-sm text-gray-600 leading-relaxed">
                        Music School is a premier institution dedicated to teaching the art and science of music.
                        We nurture talent from the ground up, fostering a vibrant community of musicians.
                    </p>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Quick Links</h2>
                    <div className="flex flex-col gap-1 text-sm text-gray-600">
                        <Link href="/" className="hover:text-blue-600 transition-colors">Home</Link>
                        <Link href="/about" className="hover:text-blue-600 transition-colors">About</Link>
                        <Link href="/courses" className="hover:text-blue-600 transition-colors">Courses</Link>
                        <Link href="/contact" className="hover:text-blue-600 transition-colors">Contact</Link>
                    </div>
                </div>
                <div className="mt-6">
                    <h2 className="text-lg font-semibold mb-2">Follow Us</h2>
                    <div className="flex gap-4 text-xl text-gray-600">
                        <Link href="https://instagram.com" target="_blank" aria-label="Instagram">
                            <FaInstagram className="hover:text-pink-500 transition-colors" />
                        </Link>
                        <Link href="https://facebook.com" target="_blank" aria-label="Facebook">
                            <FaFacebookF className="hover:text-blue-600 transition-colors" />
                        </Link>
                        <Link href="https://youtube.com" target="_blank" aria-label="YouTube">
                            <FaYoutube className="hover:text-red-600 transition-colors" />
                        </Link>
                        <Link href="https://twitter.com" target="_blank" aria-label="Twitter">
                            <FaTwitter className="hover:text-blue-600 transition-colors" />
                        </Link>
                    </div>
                </div>
                <div>
                    <h2>Contact Us</h2>
                    <address className="not-italic text-sm leading-relaxed text-gray-600">
                        <p>New Delhi, India</p>
                        <p>Delhi 10001</p>
                        <p>Email: <a href="mailto:info@musicschool.com" className="text-blue-600 hover:underline">info@musicschool.com</a></p>
                        <p>Phone: <a href="tel:1234567890" className="text-blue-600 hover:underline">(123) 456-7890</a></p>
                    </address>
                </div>
            </div>
            <p className="text-xs text-gray-500 text-center mt-8">
                © 2025 Music School. All rights reserved.
            </p>
        </footer>
    )
}

