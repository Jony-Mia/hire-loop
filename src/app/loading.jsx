`use client`

export default function Loading() {
  return (
    <div className="flex items-center justify-center w-full min-h-screen bg-[#0a0a0a] overflow-hidden">
      {/* Animated background orbs */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-600/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
      </div>

      {/* Main loading container */}
      <div className="relative z-10 flex flex-col items-center justify-center gap-8">

        {/* Futuristic spinner with orbiting particles */}
        <div className="relative w-32 h-32">
          {/* Center glow */}
          <div className="absolute inset-0 rounded-full bg-gradient-to-r from-indigo-600/20 to-purple-600/20 blur-lg animate-pulse"></div>

          {/* Outer ring */}
          <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-indigo-500 border-r-indigo-400 animate-rotate-slow opacity-50"></div>

          {/* Middle ring */}
          <div className="absolute inset-4 rounded-full border border-purple-500/30 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '15s' }}></div>

          {/* Inner dots */}
          <div className="absolute inset-8 rounded-full border border-indigo-500/20 animate-pulse"></div>

          {/* Center dot */}
          <div className="absolute top-1/2 left-1/2 w-3 h-3 bg-indigo-500 rounded-full -translate-x-1/2 -translate-y-1/2 shadow-lg shadow-indigo-500/50 animate-pulse"></div>

          {/* Orbiting particles */}
          <div className="absolute inset-0 animate-rotate-slow">
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-indigo-400 rounded-full -translate-x-1/2 shadow-lg shadow-indigo-400/70"></div>
          </div>
          <div className="absolute inset-0 animate-rotate-slow" style={{ animationDirection: 'reverse', animationDuration: '10s' }}>
            <div className="absolute top-0 left-1/2 w-2 h-2 bg-purple-400 rounded-full -translate-x-1/2 shadow-lg shadow-purple-400/70"></div>
          </div>
        </div>

        {/* Loading text */}
        <div className="flex flex-col items-center gap-3">
          <div className="text-xl font-semibold text-white tracking-wider">
            <span className="inline-block animate-fade-in-up">H</span>
            <span className="inline-block animate-fade-in-up delay-100">I</span>
            <span className="inline-block animate-fade-in-up delay-200">R</span>
            <span className="inline-block animate-fade-in-up delay-300">E</span>
            <span className="inline-block animate-fade-in-up delay-400">L</span>
            <span className="inline-block animate-fade-in-up delay-500">O</span>
            <span className="inline-block animate-fade-in-up delay-600">O</span>
            <span className="inline-block animate-fade-in-up delay-700">P</span>
          </div>

          {/* Loading dots */}
          <div className="flex gap-2">
            <div className="w-2 h-2 bg-indigo-500 rounded-full animate-bounce" style={{ animationDelay: '0s' }}></div>
            <div className="w-2 h-2 bg-indigo-400 rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
            <div className="w-2 h-2 bg-purple-500 rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
          </div>

          {/* Loading progress text */}
          <p className="text-sm text-gray-400 tracking-widest">INITIALIZING</p>
        </div>

        {/* Floating particles background */}
        <div className="absolute inset-0 pointer-events-none">
          {[...Array(5)].map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animation: `floatParticle ${2 + Math.random() * 2}s ease-out forwards`,
                animationDelay: `${i * 0.2}s`,
              }}
            />
          ))}
        </div>
      </div>
    </div>
  );
}