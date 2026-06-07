import { Button, Chip, Input } from "@heroui/react";
import { Search, MapPin } from "lucide-react";
import Briefcase from "@/assets/bag.png";
import Image from "next/image";
import { space_mono } from "@/app/layout";

export default function HeroSection() {

  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white px-4 overflow-hidden font-sans">

      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none animate-pulse" />

      {/* Animated background glow layers */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-indigo-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '0s' }} />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-600/5 rounded-full blur-[100px] animate-pulse" style={{ animationDelay: '1s' }} />
      </div>

      {/* Starry background specks */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Top Announcement Badge */}
      <div className={`${space_mono.className} relative z-10 flex items-center gap-2 px-5 py-2 mb-8 text-xl font-semibold tracking-widest text-gray-300 uppercase border rounded-full bg-white/5 border-white/10 backdrop-blur-sm animate-fade-in-up hover:animate-pulse transition-smooth hover-lift hover:shadow-lg hover:shadow-indigo-500/50 hover:border-indigo-500/50`}>
        <Image src={Briefcase} width={26} alt="Briefcase" className="text-orange-500 animate-float" />
        50,000+ new jobs this month
      </div>

      {/* Main Typography */}
      <h1 className="relative z-10 max-w-3xl mb-6 text-5xl font-bold tracking-tight text-center md:text-7xl text-white/95 animate-fade-in-up delay-100">
        Find Your <span className="animate-glow-text">Dream Job</span> Today
      </h1>

      <p className="relative z-10 max-w-2xl mb-12 text-lg text-center text-gray-400 md:text-xl animate-fade-in-up delay-200">
        HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
      </p>

      {/* Complex Search Bar */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl p-2 mb-10 border rounded-3xl md:rounded-full bg-white/5 border-white/10 backdrop-blur-md md:flex-row shadow-2xl shadow-black/50 animate-fade-in-up delay-300 transition-smooth hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/30">

        {/* Job Title Input */}
        <div className="flex items-center flex-1 w-full px-4 py-3 md:py-2">
          <Search size={20} className="mr-3 text-gray-500 shrink-0 animate-pulse" />
          <Input
            type="text"
            className="w-full text-base bg-transparent text-white/90 placeholder:text-gray-500"
            placeholder="Job title, skill or company"
          />
        </div>

        {/* Divider */}
        <div className="hidden w-px h-8 mx-2 md:block bg-white/10" />
        <div className="block w-full h-px my-2 md:hidden bg-white/10" />

        {/* Location Input */}
        <div className="flex items-center flex-1 w-full px-4 py-3 md:py-2">
          <MapPin size={20} className="mr-3 text-gray-500 shrink-0 animate-pulse" style={{ animationDelay: '0.3s' }} />
          <Input
            type="text"
            placeholder="Location or Remote"
            className="w-full text-base bg-transparent border-none outline-none text-white/90 placeholder:text-gray-500"
          />
        </div>

        {/* Search Button */}
        <Button
          isIconOnly
          color="primary"
          radius="full"
          className="w-full h-12 mt-4 bg-indigo-600 md:w-12 md:mt-0 md:ml-2 hover:bg-indigo-500 shrink-0 transition-smooth hover-lift hover:shadow-lg hover:shadow-indigo-500/50"
        >
          <Search size={20} className="text-white" />
        </Button>
      </div>

      {/* Trending Positions */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-sm md:flex-row text-gray-400 animate-fade-in-up delay-400">
        <span className="font-medium">Trending Positions: </span>
        <div className="flex flex-wrap justify-center gap-3">
          <Chip
            variant="bordered"
            className={"border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-smooth cursor-pointer hover-lift hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/30 delay-500"}
          >
            Product Designer
          </Chip>
          <Chip
            variant="bordered"
            className={"border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-smooth cursor-pointer hover-lift hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/30 delay-600"}
          >
            AI Engineering
          </Chip>
          <Chip
            variant="bordered"
            className={"border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-smooth cursor-pointer hover-lift hover:border-indigo-500/50 hover:shadow-lg hover:shadow-indigo-500/30 delay-700"}
          >
            Dev-ops Engineer
          </Chip>
        </div>
      </div>

      {/* Floating particles */}
      <div className="absolute inset-0 pointer-events-none">
        {[...Array(80)].map((_, i) => {
          let rand = Math.random;

          return (
            <div
              
              key={i}
              className="absolute w-1 h-1 bg-indigo-400 rounded-full"
              style={{
                left: `${rand() * 100}%`,
                top: `${rand() * 100}%`,
                animation: `floatParticle ${2 + rand() * 3}s ease-out forwards`,
                animationDelay: `${i * 0.3}s`,
              }}
            ></div>
          )
        }
        )}
      </div>
    </section>
  );
}