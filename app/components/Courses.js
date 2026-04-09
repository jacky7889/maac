"use client";
import { motion } from "framer-motion";
import { Film, Video, Palette, Cpu } from "lucide-react";
import "./../styles/home.css";

export default function Courses() {
  const courses = [
    { name: "3D Animation", icon: <Film size={30} /> },
    { name: "VFX & Editing", icon: <Video size={30} /> },
    { name: "Graphic Design", icon: <Palette size={30} /> },
    { name: "AR/VR", icon: <Cpu size={30} /> },
  ];

  return (
    <section className="courses">
      <motion.h2
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
      >
        A Career You Love ❤️
      </motion.h2>

      <div className="course-list">
        {courses.map((c, i) => (
          <motion.div
            key={i}
            className="course-card"
            whileHover={{ scale: 1.05, y: -10 }}
            transition={{ type: "spring", stiffness: 200 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="course-icon">{c.icon}</div>
            <h3>{c.name}</h3>
            <button className="course-btn">Explore</button>
          </motion.div>
        ))}
      </div>
    </section>
  );
}