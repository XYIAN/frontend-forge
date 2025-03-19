"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import "@/styles/_dimensionalFooter.scss";

export const DimensionalFooter = () => {
  return (
    <motion.footer
      className="dimensional-footer"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 30 }}
      transition={{ duration: 1, ease: "easeInOut" }}
    >
      <div className="footer-content">
        <p>© 2024 The Frontend Forge. All rights reserved.</p>
        <div className="footer-links">
          <Link href="/hallofcreations">Hall of Creations</Link>
          <Link href="/contact">Contact the Wizard</Link>
          <Link href="https://github.com/yourgithub" target="_blank">
            GitHub
          </Link>
        </div>
      </div>
    </motion.footer>
  );
};
