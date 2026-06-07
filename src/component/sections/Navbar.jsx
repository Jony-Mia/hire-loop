import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/assets/logo.png";
import { Button, Dropdown, Separator } from '@heroui/react';
import { Bars, ChevronDown } from '@gravity-ui/icons';
import ClickButton from '../lib/ClickButton';
import ThemeToggler from '../lib/ThemeToggler';

const Navbar = () => {
    return (
        <>
            {/* Desktop Navbar */}
            <div className='container p-5 md:hidden hidden sm:hidden lg:block animate-fade-in-down'>
                <nav className="sticky top-0 z-40 w-full">
                    {/* Glassmorphic background blur */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-transparent to-purple-600/5 rounded-2xl" />
                    <div className="absolute inset-0 backdrop-blur-xl border border-white/10 rounded-2xl" />

                    <header className="relative flex h-16 items-center justify-between px-6 rounded-2xl">
                        {/* Logo Section */}
                        <div className="flex items-center gap-3 hover-scale cursor-pointer transition-smooth group">
                            <div className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition-smooth" />
                                <Image src={Logo} alt='Hireloop logo' height={'24'} className="animate-fade-in-up relative" />
                            </div>
                        </div>

                        {/* Navigation Links */}
                        <div className='flex gap-10 items-center'>
                            <ul className="flex items-center gap-8">
                                <li className="relative group">
                                    <Link href="#" className="text-sm font-medium text-gray-300 transition-smooth group-hover:text-white">
                                        Browse Jobs
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link href="#" className="text-sm font-medium text-gray-300 transition-smooth group-hover:text-white">
                                        Company
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link href="#" className="text-sm font-medium text-gray-300 transition-smooth group-hover:text-white">
                                        Pricing
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                            </ul>

                            {/* Separator */}
                            <div className="w-px h-6 bg-white/10" />

                            {/* Right Section */}
                            <div className='flex items-center gap-4'>
                                <ThemeToggler />
                                <div className='flex gap-3'>
                                    <Button variant='outline' className={"text-indigo-400 h-10 rounded-xl px-5 text-sm font-medium transition-smooth hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/20 hover-lift border-indigo-500/30"}>
                                        Sign in
                                    </Button>
                                    <Button className={"bg-gradient-to-r from-indigo-600 to-indigo-500 h-10 rounded-xl px-5 text-sm font-medium text-white transition-smooth hover:from-indigo-500 hover:to-indigo-400 hover-lift hover:shadow-lg hover:shadow-indigo-500/50"}>
                                        Get Started
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </header>
                </nav>
            </div>

            {/* Mobile Navbar */}
            <nav className="sticky block sm:block md:hidden lg:hidden top-0 z-40 w-full animate-fade-in-down">
                {/* Mobile glassmorphic background */}
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 to-purple-600/5" />
                <div className="absolute inset-0 backdrop-blur-xl border-b border-white/10" />

                <header className="relative flex h-16 items-center justify-between px-6">
                    {/* Hamburger Menu */}
                    <Dropdown className=''>
                        <Button className="transition-smooth hover-lift text-white">
                            <Bars size={20} />
                        </Button>
                        <Dropdown.Popover>
                            <Dropdown.Menu className="bg-[#111111]/95 backdrop-blur-lg border border-white/10 rounded-xl">
                                <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                    <Link href="#">Browse Jobs</Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                    <Link href="#">Company</Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                    <Link href="#">Pricing</Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                    <Link href="#">Sign in</Link>
                                </Dropdown.Item>
                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>

                    {/* Logo Center */}
                    <div className="hover-scale transition-smooth cursor-pointer group">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition-smooth" />
                            <Image src={Logo} height={"28"} alt='Logo' className="relative" />
                        </div>
                    </div>

                    {/* Right Actions */}
                    <Button className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-10 rounded-xl px-4 text-sm font-medium text-white transition-smooth hover:from-indigo-500 hover:to-indigo-400 hover-lift">
                        Sign up
                    </Button>
                </header>
            </nav>
        </>
    );
};

export default Navbar;