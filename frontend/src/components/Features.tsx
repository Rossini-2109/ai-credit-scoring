export default function Features() {
  const features = [
    {
      title: "Explainable AI Decisions",
      desc: "Transparent models that clearly explain loan approvals and rejections."
    },
    {
      title: "Alternative Credit Data",
      desc: "Uses income stability, digital behavior, and utility payments."
    },
    {
      title: "Bias-Free Scoring Engine",
      desc: "Designed to reduce discrimination and ensure ethical lending."
    }
  ];

  return (
    <section className="max-w-6xl mx-auto px-6 py-24">
      <div className="grid gap-8 md:grid-cols-3">
        {features.map((item, i) => (
          <div
            key={i}
            className="bg-card backdrop-blur-xl border border-border rounded-2xl p-8
                       hover:border-accent transition"
          >
            <h3 className="text-xl font-semibold mb-3">
              {item.title}
            </h3>
            <p className="text-sm text-zinc-400">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
