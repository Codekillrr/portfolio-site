"use client"
import React from 'react'
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";


const Mover = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

    useEffect(() => {
      const handleMouseMove = (e: MouseEvent) => {
        const X = e.clientX - 50; // Offset for centering the div
        const Y = e.clientY - 50;
        setMousePosition({ x: X, y: Y });
      };
  
      window.addEventListener("mousemove", handleMouseMove);
  
      return () => {
        window.removeEventListener("mousemove", handleMouseMove);
      };
    }, []);
    return (
      <motion.div 
        animate={{
          x: mousePosition.x,
          y: mousePosition.y,
        }}
        transition={{
          stiffness: 100,
          damping: 1,
          // duration: 0.05,
        }}
        style={{
          boxShadow: `
            0 0 50px 50px rgba(255, 255, 255, 0.022),  
            0 0 100px 100px rgba(255, 255, 255, 0.02), 
            0 0 120px 120px rgba(255, 255, 255, 0.02), 
            0 0 140px 140px rgba(255, 255, 255, 0.02),
            0 0 150px 150px rgba(255, 255, 255, 0.02),
            0 0 200px 200px rgba(255, 255, 255, 0.02),
            0 0 220px 220px rgba(255, 255, 255, 0.02)
          `,
        }}
        className="w-24 h-24 bg-white/[0.127] rounded-full fixed">
      </motion.div>
    )
}

export default Mover