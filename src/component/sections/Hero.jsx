import { Button, Chip, Input, TextField } from "@heroui/react";
import { Search, MapPin } from "lucide-react";
import Briefcase from "@/assets/bag.png";
import Image from "next/image";
import { space_mono } from "@/app/layout";

export default function HeroSection() {
  return (
    <section className="relative flex flex-col items-center justify-center min-h-screen bg-[#0a0a0a] text-white px-4 overflow-hidden font-sans">
      
      {/* Background ambient glow */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-[500px] bg-indigo-600/20 blur-[150px] rounded-full pointer-events-none" />
      
      {/* Starry background specks (Optional CSS pattern could go here, simulated with a dark bg for now) */}
      <div className="absolute inset-0 bg-[url('/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none" />

      {/* Top Announcement Badge */}
      <div className={` ${space_mono.className} relative z-10 flex items-center gap-2 px-5 py-2 mb-8 text-xl font-semibold tracking-widest text-gray-300 uppercase border rounded-full bg-white/5 border-white/10 backdrop-blur-sm`}>
        <Image src={Briefcase} width={26} alt="Briefcase" className="text-orange-500" />
        50,000+ new jobs this month
      </div>

      {/* Main Typography */}
      <h1 className="relative z-10 max-w-3xl mb-6 text-5xl font-bold tracking-tight text-center md:text-7xl text-white/95">
        Find Your Dream Job Today
      </h1>
      
      <p className="relative z-10 max-w-2xl mb-12 text-lg text-center text-gray-400 md:text-xl">
        HireLoop connects top talent with world-class companies. Browse thousands of curated opportunities and land your next role — faster.
      </p>

      {/* Complex Search Bar */}
      <div className="relative z-10 flex flex-col items-center w-full max-w-4xl p-2 mb-10 border rounded-3xl md:rounded-full bg-white/5 border-white/10 backdrop-blur-md md:flex-row shadow-2xl shadow-black/50">
        
        {/* Job Title Input */}
        <div className="flex items-center flex-1 w-full px-4 py-3 md:py-2">
          <Search size={20} className="mr-3 text-gray-500 shrink-0" />
          <TextField type="text" className="w-full text-base bg-none border-none outline-none text-white/90 placeholder:text-gray-500">
            <Input
            placeholder="Job title, skill or company"
          />
          </TextField>
        </div>

        {/* Divider */}
        <div className="hidden w-px h-8 mx-2 md:block bg-white/10" />
        <div className="block w-full h-px my-2 md:hidden bg-white/10" />

        {/* Location Input */}
        <div className="flex items-center flex-1 w-full px-4 py-3 md:py-2">
          <MapPin size={20} className="mr-3 text-gray-500 shrink-0" />
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
          className="w-full h-12 mt-4 bg-indigo-600 md:w-12 md:mt-0 md:ml-2 hover:bg-indigo-500 shrink-0"
        >
          <Search size={20} className="text-white" />
        </Button>
      </div>

      {/* Trending Positions */}
      <div className="relative z-10 flex flex-col items-center gap-4 text-sm md:flex-row text-gray-400">
        <span className="font-medium">Trending Position</span>
        <div className="flex flex-wrap justify-center gap-3">
          <Chip
            variant="bordered"
            className={"border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"}
          >
            Product Designer
          </Chip>
          <Chip
            variant="bordered"
            className={"border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"}
          >
            AI Engineering
          </Chip>
          <Chip
            variant="bordered"
            className={"border-white/10 bg-white/5 text-gray-300 hover:bg-white/10 transition-colors cursor-pointer"}
          >
            Dev-ops Engineer
          </Chip>
        </div>
      </div>
    </section>
  );
}