import Image from 'next/image';
import Link from 'next/link';
import Logo from "@/assets/logo.png";
import { Button, Dropdown, Separator } from '@heroui/react';
import { Bars } from '@gravity-ui/icons';
import ClickButton from '../lib/ClickButton';
import ThemeToggler from '../lib/ThemeToggler';

const Navbar = () => {
    return (
        <>
            <div className='container p-5 md:hidden hidden sm:hidden lg:block '>
                <nav className="sticky dark:bg-blue-400/30 rounded-2xl top-0 z-40 w-full border-b border-separator bg-background/75 backdrop-blur-lg">
                    <header className="flex h-16 items-center justify-between px-6">
                        <div className="flex items-center gap-3">
                            {/* <Logo /> */}
                            <Image src={Logo} alt='Hireloop logo' height={'20'} />
                        </div>
                        <div className='flex gap-3.5'>
                            <ul className="flex items-center gap-6">
                                <li><Link href="#">Browse Jobs</Link></li>
                                <li><Link href="#">Company</Link></li>
                                <li><Link href="#">Pricing</Link></li>
                            </ul>
                            <Separator orientation='vertical' />
                            <ThemeToggler/>
                            <div className='space-x-4'>
                                <Button variant='outline' className={"text-[#645CFE] h-11 rounded-2xl px-6 py-4"}>
                                    Sign in
                                </Button>
                                <Button className={"bg-[#645CFE] h-11 rounded-2xl px-6 py-4"}>
                                    Get Started
                                </Button>
                            </div>
                        </div>

                    </header>
                </nav>
            </div>

            <nav className="sticky block sm:block md:hidden lg:hidden top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div >
                        <Dropdown className=''>
                            <Button>
                                <Bars />
                            </Button>
                            <Dropdown.Popover>
                                <Dropdown.Menu>
                                    <Dropdown.Item>
                                        <Link href={"/signup"} >Sign Up</Link>
                                    </Dropdown.Item>
                                </Dropdown.Menu>
                            </Dropdown.Popover>
                        </Dropdown>
                    </div>
                    <div>
                        <Image src={Logo} height={"30"} alt='Logo' />
                    </div>
                    <ul className="flex items-center gap-4">
                        <li>
                            
                        </li>
                    </ul>
                </header>
            </nav>
        </>
    );
};

export default Navbar;