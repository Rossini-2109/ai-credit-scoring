"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="text-center py-32 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
      <motion.h1
        className="text-5xl font-bold mb-6"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
      >
        AI-Powered Credit Scoring
      </motion.h1>
      <motion.p
        className="text-xl mb-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { delay: 0.3 } }}
      >
        Empowering underserved markets with ethical, transparent finance
      </motion.p>
      <Link href="/eligibility">
        <motion.button
          className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold shadow-lg"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Check Your Eligibility
        </motion.button>
      </Link>
    </section>
  );
}
