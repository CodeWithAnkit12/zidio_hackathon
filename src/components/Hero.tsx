export default function Hero() {
  return (
    <section className="relative overflow-hidden py-24">

      {/* FLOATING BACKGROUND BLOBS */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute w-72 h-72 bg-purple-400/30 rounded-full blur-3xl animate-blob top-10 left-10"></div>
        <div className="absolute w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl animate-blob animation-delay-2000 bottom-10 right-10"></div>
        <div className="absolute w-60 h-60 bg-pink-400/30 rounded-full blur-3xl animate-blob animation-delay-4000 top-1/2 right-1/3"></div>
      </div>

      {/* HERO CONTENT */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT TEXT */}
        <div data-aos="fade-right">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight dark:text-white">
            Join. Build.  
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#6b46ff] to-[#06b6d4]">
              Get Hired.
            </span>
          </h1>

          <p className="mt-5 text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            Participate in live hackathons, showcase your skills and land
            opportunities with top companies & startups.
          </p>

          <div className="mt-8 flex gap-4">
            <button className="px-7 py-3 rounded-xl bg-gradient-to-r from-[#6b46ff] to-[#06b6d4] text-white font-semibold shadow-lg hover:scale-[1.03] transition">
              Explore Hackathons
            </button>

            <button className="px-7 py-3 rounded-xl border border-gray-300 dark:border-gray-600 font-medium hover:bg-gray-100 dark:hover:bg-gray-700 dark:text-white transition">
              Host a Hackathon
            </button>
          </div>
        </div>

        {/* RIGHT IMAGE / CARDS */}
        <div
          className="relative flex justify-center"
          data-aos="fade-left"
          data-aos-delay="200"
        >
          <div className="w-80 h-80 bg-gradient-to-br from-[#6b46ff] to-[#06b6d4] rounded-3xl shadow-2xl rotate-6 opacity-80"></div>

          <div className="absolute w-80 h-80 bg-white dark:bg-gray-800 rounded-3xl shadow-xl -rotate-6 flex items-center justify-center border border-gray-200 dark:border-gray-700">
            <p className="text-3xl font-bold dark:text-white">🚀 Hackathon Hub</p>
          </div>
        </div>

      </div>
    </section>
  );
}
