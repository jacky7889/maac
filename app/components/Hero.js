"use client";
import { motion } from "framer-motion";
import "../styles/home.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        
        {/* LEFT CONTENT */}
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1>
            Dreams <span>Crafted</span>
          </h1>

          <p>
            Turn Your Dreams into Reality with Advanced Premium MAAC Courses in 
            Animation, VFX, Gaming, Graphics, and Web Design.
          </p>

          <button className="btn">Talk to us</button>
        </motion.div>

        {/* RIGHT IMAGE */}
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, x: 200 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <img src="/images/hero.png" alt="Animation Course" />
        </motion.div>

      </div>
    </section>
  );
}