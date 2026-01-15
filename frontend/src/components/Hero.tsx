"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/20 to-accent/20 blur-3xl" />

      <div className="relative z-10 max-w-6xl mx-auto px-6 py-32 text-center">
        <motion.h1
          className="text-4xl md:text-6xl font-extrabold tracking-tight"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <span className="bg-gradient-to-r from-accent to-secondary bg-clip-text text-transparent">
            AI-Powered Credit Scoring
          </span>
        </motion.h1>

        <motion.p
          className="mt-6 text-lg md:text-xl text-zinc-300 max-w-3xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { delay: 0.2 } }}
        >
          Ethical, explainable and inclusive AI credit decisions for underserved
          markets.
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0, transition: { delay: 0.4 } }}
        >
          <Link href="/eligibility">
            <button className="px-8 py-4 rounded-xl bg-primary hover:bg-secondary transition font-semibold shadow-lg shadow-primary/30">
              Check Eligibility
            </button>
          </Link>
          <Link href="/loans">
            <button className="border border-white px-6 py-2 rounded-lg">
              Explore Loans
            </button>
          </Link>


          <button className="px-8 py-4 rounded-xl border border-border bg-card backdrop-blur hover:border-accent transition">
            Learn More
          </button>
        </motion.div>
      </div>
    </section>
  );
}
