import Image from "next/image";
import Hero from "../components/Hero";
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-black/10 dark:border-white/10">
        <h1 className="text-xl font-semibold">
          AI Credit Scoring
        </h1>
        <span className="text-sm text-zinc-500">
          Explainable AI for Lending
        </span>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center px-8 py-32 text-center">
        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Smarter Credit Decisions with AI
        </h2>
        <p className="mt-6 max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          An AI-driven credit scoring system that evaluates loan applications
          using machine learning and provides transparent, explainable results
          for fair lending decisions.
        </p>

        <div className="mt-10 flex gap-4">
          <button className="rounded-full bg-foreground px-6 py-3 text-background font-medium hover:opacity-90">
            Check Credit Score
          </button>
          <button className="rounded-full border border-black/10 dark:border-white/20 px-6 py-3 font-medium hover:bg-black/5 dark:hover:bg-white/10">
            View Model Insights
          </button>
        </div>
      </section>

      {/* Features */}
      <section className="grid gap-8 px-8 pb-32 sm:grid-cols-3">
        {[
          {
            title: "ML-Based Scoring",
            desc: "Trained machine learning model evaluates borrower risk accurately."
          },
          {
            title: "Explainable AI",
            desc: "SHAP values explain why a loan is approved or rejected."
          },
          {
            title: "Fast & Secure",
            desc: "Built with FastAPI and Next.js for speed and scalability."
          }
        ].map((item, i) => (
          <div
            key={i}
            className="rounded-xl border border-black/10 dark:border-white/10 p-6"
          >
            <h3 className="text-lg font-semibold">{item.title}</h3>
            <p className="mt-2 text-sm text-zinc-600 dark:text-zinc-400">
              {item.desc}
            </p>
          </div>
        ))}
      </section>

      {/* Footer */}
      <footer className="border-t border-black/10 dark:border-white/10 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} AI Credit Scoring System
      </footer>
    </main>
  );
}
export default function Home() {
  return (
    <>
      <Hero />
      {/* Optional: Add Social Impact section */}
      <section className="py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Making Finance Fair</h2>
        <p className="text-lg max-w-2xl mx-auto">
          Our AI ensures fair access to loans for everyone, preventing bias and increasing transparency.
        </p>
      </section>
    </>
  );
}