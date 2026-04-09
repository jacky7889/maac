"use client";
import { motion } from "framer-motion";
import "./../styles/home.css";

export default function Gallery() {
  return (
    <section className="gallery">
      <h2>Student Work</h2>

      <div className="grid">
        {[1,2,3,4,5,6].map((i) => (
          <motion.div
            key={i}
            className="img-box"
            whileHover={{ scale: 1.05 }}
          >
            <img src={`/img${i}.jpg`} alt="" />
          </motion.div>
        ))}
      </div>
    </section>
  );
}