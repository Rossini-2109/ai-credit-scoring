import Hero from "@/components/Hero";
import Features from "@/components/Features";
export default function Home() {
  return (
    <main className="min-h-screen bg-background text-foreground">
      <Hero />
      <Features />

      {/* Social Impact Section */}
      <section className="py-16 text-center px-6">
        <h2 className="mb-4 text-3xl font-bold">
          Making Finance Fair
        </h2>
        <p className="mx-auto max-w-2xl text-lg text-zinc-600 dark:text-zinc-400">
          Our AI ensures fair access to loans for everyone, preventing bias
          and increasing transparency through explainable credit decisions.
        </p>
      </section>
    </main>
  );
}
