"use client";
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";

export const BackgroundBeams = () => {
  const beamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!beamRef.current) return;

    const updateMousePosition = (ev: MouseEvent) => {
      if (!beamRef.current) return;
      const { clientX, clientY } = ev;
      beamRef.current.style.setProperty("--x", `${clientX}px`);
      beamRef.current.style.setProperty("--y", `${clientY}px`);
    };

    window.addEventListener("mousemove", updateMousePosition);

    return () => {
      window.removeEventListener("mousemove", updateMousePosition);
    };
  }, []);

  return (
    <motion.div
      ref={beamRef}
      className="relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="pointer-events-none absolute inset-0 z-30 bg-[#0a0a0f] [mask-image:radial-gradient(transparent,white)] dark:bg-black" />
    </motion.div>
  );
};
