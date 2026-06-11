"use client";
import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/assets/logo.png";
import { Avatar, Button, Dropdown } from '@heroui/react';
import { Bars } from '@gravity-ui/icons';
import ThemeToggler from '../lib/ThemeToggler';

import { ArrowBigRightDash } from 'lucide-react';
import { authClient, useSession } from '@/lib/auth-client';

const Navbar = () => {
    let { data } = useSession();
    let user = data?.user;
    let logout = async () => {
        let { data, error } = await authClient.signOut();
        console.log(data, error);
    }
    console.log(data, user);

    return (
        <>
            {/* Desktop Navbar */}
            <div className='container mx-auto p-5 md:hidden hidden sm:hidden lg:block animate-fade-in-down'>
                <nav className="sticky top-0 z-40 w-full">
                    {/* Glassmorphic background blur */}
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-600/5 via-transparent to-purple-600/5 rounded-2xl" />
                    <div className="absolute inset-0 backdrop-blur-xl border border-white/10 rounded-2xl" />

                    <header className="relative flex h-16 items-center justify-between px-6 rounded-2xl">
                        {/* Logo Section */}
                        <div className="flex items-center gap-3 hover-scale cursor-pointer transition-smooth group">
                            <Link href="/" className="relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition-smooth" />
                                <Image src={Logo} alt='Hireloop logo' height={'24'} className="animate-fade-in-up relative" />
                            </Link>
                        </div>

                        {/* Navigation Links */}
                        <div className='flex gap-10 items-center'>
                            <ul className="flex items-center gap-8">
                                <li className="relative group">
                                    <Link href="/" className="text-sm font-medium text-gray-300 transition-smooth group-hover:text-white">
                                        Home
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link href="/browse" className="text-sm font-medium text-gray-300 transition-smooth group-hover:text-white">
                                        Browse Jobs
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link href="/company" className="text-sm font-medium text-gray-300 transition-smooth group-hover:text-white">
                                        Company
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-indigo-400 to-purple-400 transition-all duration-300 group-hover:w-full" />
                                    </Link>
                                </li>
                                <li className="relative group">
                                    <Link href="/pricing" className="text-sm font-medium text-gray-300 transition-smooth group-hover:text-white">
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
                                {
                                    user ?
                                        <Dropdown>
                                            <Dropdown.Trigger>
                                                <Avatar>
                                                    <Avatar.Fallback className={"bg-linear-0 to-[#3c83f6] from-blue-400"}>{user?.name.slice(0, 2)}</Avatar.Fallback>
                                                </Avatar>
                                            </Dropdown.Trigger>
                                            <Dropdown.Popover>
                                                <Dropdown.Menu>
                                                    <Dropdown.Item>Dashboard</Dropdown.Item>
                                                    <Dropdown.Item>Browse</Dropdown.Item>
                                                    <Dropdown.Item onClick={logout} className='border flex justify-between  transition-all hover:border-red-400 text-red-400'>
                                                        {/* <ClickButton variation="outline" > */}
                                                        Log out <ArrowBigRightDash size={"18"} />
                                                        {/* </ClickButton> */}
                                                    </Dropdown.Item>
                                                </Dropdown.Menu>
                                            </Dropdown.Popover>
                                        </Dropdown>
                                        :
                                        <div className='flex gap-3'>
                                            <Link href="/login">
                                                <Button variant='outline' className={"text-indigo-400 h-10 rounded-xl px-5 text-sm font-medium transition-smooth hover:border-indigo-400/50 hover:shadow-lg hover:shadow-indigo-500/20 hover-lift border-indigo-500/30"}>
                                                    Sign in
                                                </Button>
                                            </Link>
                                            <Link href="/signup">
                                                <Button className={"bg-gradient-to-r from-indigo-600 to-indigo-500 h-10 rounded-xl px-5 text-sm font-medium text-white transition-smooth hover:from-indigo-500 hover:to-indigo-400 hover-lift hover:shadow-lg hover:shadow-indigo-500/50"}>
                                                    Get Started
                                                </Button>
                                            </Link>
                                        </div>
                                }
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
                    <Dropdown >
                        <Dropdown.Trigger className="transition-smooth hover-lift text-white">
                            <Bars size={20} />
                        </Dropdown.Trigger>
                        <Dropdown.Popover>
                            <Dropdown.Menu className="bg-[#111111]/95 backdrop-blur-lg border border-white/10 rounded-xl">
                                {
                                    user ?
                                        <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                            <Link href="/profile">Profile</Link>
                                        </Dropdown.Item>
                                        :
                                        <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                            <Link href="/signup">Sign in</Link>
                                        </Dropdown.Item>
                                }
                                <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                    <Link href="/browse">Browse Jobs</Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                    <Link href="/company">Company</Link>
                                </Dropdown.Item>
                                <Dropdown.Item className="transition-smooth hover:text-indigo-400 text-gray-300">
                                    <Link href="/pricing">Pricing</Link>
                                </Dropdown.Item>
                                {
                                    user ||
                                    <Dropdown.Item handler={logout} className='border border-red-400 text-red-400'>
                                        {/* <ClickButton variation="outline" > */}
                                        Log out <ArrowBigRightDash size={"18"} />
                                        {/* </ClickButton> */}
                                    </Dropdown.Item>
                                }

                            </Dropdown.Menu>
                        </Dropdown.Popover>
                    </Dropdown>

                    {/* Logo Center */}
                    <div className="hover-scale transition-smooth cursor-pointer group">
                        <Link href="/" className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-lg opacity-0 group-hover:opacity-30 blur transition-smooth" />
                            <Image src={Logo} height={"28"} alt='Logo' className="relative" />
                        </Link>
                    </div>

                    {/* Right Actions */}
                    {
                        user ?
                            <Avatar>
                                < Avatar.Fallback className={"bg-linear-0 to-[#3c83f6] from-blue-400"}>{user?.name.slice(0, 2)}</Avatar.Fallback>
                            </Avatar>
                            :
                            <Link href={"/signup"}>
                                <Button className="bg-gradient-to-r from-indigo-600 to-indigo-500 h-10 rounded-xl px-4 text-sm font-medium text-white transition-smooth hover:from-indigo-500 hover:to-indigo-400 hover-lift">
                                    Sign up
                                </Button>
                            </Link>
                    }
                </header >
            </nav >
        </>
    );
};

export default Navbar;