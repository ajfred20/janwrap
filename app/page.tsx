import React from "react";
import Image from "next/image";

const Home = () => {
  return (
    <main className="min-h-screen bg-black relative">
      {/* Background image overlay */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/wrapped-bg.png" // You'll need to add this image to your public folder
          alt="Background pattern"
          fill
          className="object-cover opacity-60"
          priority
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-purple-500/30 via-fuchsia-500/30 to-rose-500/30 mix-blend-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <nav className="flex justify-between items-center px-8 py-4">
          <div className="flex items-center">
            <span className="text-white font-bold text-xl">January Wrapped</span>
          </div>
          
          <div className="flex items-center gap-8 text-white/90">
            <a href="#" className="hover:text-white">
              STATS
            </a>
            <a href="#" className="hover:text-white">
              HIGHLIGHTS
            </a>
            <a href="#" className="hover:text-white">
              TIMELINE
            </a>
            <a href="#" className="hover:text-white">
              SHARE
            </a>
          </div>

          <div className="flex items-center gap-4">
            <button className="text-white p-2 rounded-full hover:bg-white/10">
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                />
              </svg>
            </button>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-4 pt-20 pb-32 text-center">
          <h1 className="text-white text-8xl font-bold mb-6 tracking-tight">
            Your January
            <br />
            Wrapped
          </h1>
          <p className="text-white/90 text-2xl mb-8">
            Let's dive into your amazing journey
            <br />
            through the first month of 2024
          </p>
          <button className="bg-white text-black px-8 py-4 rounded-full font-bold text-lg hover:bg-white/90 transition-colors">
            START YOUR JOURNEY
          </button>

          {/* Stats Preview Box */}
          <div className="mt-16 bg-white/10 backdrop-blur-lg rounded-2xl overflow-hidden shadow-2xl border border-white/20">
            <div className="p-8 text-left">
              <div className="grid grid-cols-3 gap-8">
                <div className="text-white">
                  <h3 className="text-5xl font-bold mb-2">31</h3>
                  <p className="text-white/70">Days Tracked</p>
                </div>
                <div className="text-white">
                  <h3 className="text-5xl font-bold mb-2">87%</h3>
                  <p className="text-white/70">Goal Completion</p>
                </div>
                <div className="text-white">
                  <h3 className="text-5xl font-bold mb-2">124</h3>
                  <p className="text-white/70">Achievements</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
