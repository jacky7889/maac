"use client";
import "./../styles/home.css";
import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div>
    <nav className="navbar">
      <h2 className="logo"><Image 
          src="/images/logo.png"  // your image inside public/images
          alt="Logo"
          width={120}
          height={50}
        /></h2>

  <ul>
        <li><Link href="about">About</Link></li>
        <li><Link href="/courses">Courses</Link></li>
        <li><Link href="/achievement">Achievement</Link></li>
        <li><Link href="/student-work">Student Work</Link></li>
        <li><Link href="/testimonials">Testimonials</Link></li>
        <li><Link href="/faq">FAQ</Link></li>
        <li><Link href="/contact">Contact</Link></li>
      </ul>

       </nav>

    About us
</div>
  );
}