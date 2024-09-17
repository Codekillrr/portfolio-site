"use client";

import Image from "next/image";
import { useEffect } from "react";
import { useState } from "react";
import { motion } from "framer-motion";

import Mover from "./components/Mover";

export default function Home() {
  
  return (
    <div className="relative w-screen h-screen">
      <div className="bg-gradient-to-br absolute inset-0 from-[#1b1c70] to-[#03043c]"></div>
      <Mover />
    </div>
  );
}
