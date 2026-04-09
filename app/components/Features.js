"use client";
import { useEffect, useState } from "react";
import { ShieldCheck, Building2, Star } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import "./../styles/home.css";

export default function Features() {
  const words = ["Better", "Flexible", "Affordable"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % words.length);
    }, 2000);
    return () => clearInterval(interval);
  }, []);

  const data = [
    {
      icon: <ShieldCheck size={40} />,
      title: "Certified by IVAC",
      text: "The International VFX & Animation Council (IVAC) has now certified MAAC. The industry association for VFX and animation professionals.",
    },
    {
      icon: <Building2 size={40} />,
      title: "MAAC Kalkaji",
      text: "Brand of Aptech Ltd., a global learning solutions provider that commenced its education and training business in 1986.",
    },
    {
      icon: <Star size={40} />,
      title: "Provides Quality",
      text: "The Academy provides quality education in animation, VFX, gaming, filmmaking, multimedia, web & graphic design.",
    },
  ];

  return (
    <section className="features-section">
      
      {/* Heading */}
     <h2 className="features-heading">
  Why we're{" "}
  <span className="changing-word">
        <AnimatePresence mode="wait">
          <motion.span
            key={words[index]}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            {words[index]}
          </motion.span>
        </AnimatePresence>
      </span>
    </h2>

      {/* Cards */}
      <div className="features-container">
        {data.map((item, i) => (
          <motion.div
            key={i}
            className="feature-card"
            whileHover={{ scale: 1.05, y: -8 }}
            transition={{ type: "spring", stiffness: 200 }}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </motion.div>
        ))}
      </div>

    </section>
  );
}