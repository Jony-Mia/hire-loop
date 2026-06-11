export default function CTASection() {
  return (
    <section className="relative overflow-hidden bg-black py-32">
      {/* Purple Glow */}
      <div className="absolute inset-x-0 top-0 mx-auto h-[500px] w-[1000px] rounded-full bg-indigo-600/30 blur-3xl" />

      {/* Dome Grid */}
      <div className="absolute inset-0 flex items-start justify-center overflow-hidden">
        <div
          className="
            relative
            h-[700px]
            w-[1200px]
            rounded-t-full
            border border-indigo-500/20
            opacity-70
          "
        >
          {/* Horizontal Lines */}
          {Array.from({ length: 12 }).map((_, i) => (
            <div
              key={`h-${i}`}
              className="absolute left-0 right-0 border-t border-indigo-400/15"
              style={{ top: `${i * 8}%` }}
            />
          ))}

          {/* Vertical Curves */}
          {Array.from({ length: 15 }).map((_, i) => (
            <div
              key={`v-${i}`}
              className="absolute top-0 h-full border-l border-indigo-400/15"
              style={{
                left: `${i * 7}%`,
                transform: "perspective(500px) rotateX(70deg)",
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <h2 className="max-w-3xl text-4xl font-bold leading-tight text-white md:text-6xl">
          Your next role is
          <br />
          already looking for you
        </h2>

        <p className="mt-6 max-w-xl text-zinc-400">
          Build a profile in three minutes. The matches start arriving
          tomorrow morning.
        </p>

        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="rounded-xl bg-white px-6 py-3 font-medium text-black transition hover:bg-zinc-200">
            Create a free account
          </button>

          <button className="rounded-xl border border-white/10 bg-white/5 px-6 py-3 font-medium text-white backdrop-blur transition hover:bg-white/10">
            View pricing
          </button>
        </div>
      </div>
    </section>
  );
}