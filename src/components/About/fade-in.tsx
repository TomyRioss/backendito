"use client";

import { motion } from "framer-motion";
import type { ReactNode } from "react";

//Efecto suave para animaciones de About
export const FadeIn = ({ children }: { children: ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5 }}
  >
    {children}
  </motion.div>
);
