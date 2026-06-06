import Image from 'next/image';
import Link from 'next/link';
import Logo from "../../public/logo.png";
import { Button, Separator } from '@heroui/react';

const Navbar = () => {
    return (
        <>
            <nav className="sticky top-0 z-40 w-full border-b border-separator bg-background/70 backdrop-blur-lg">
                <header className="flex h-16 items-center justify-between px-6">
                    <div className="flex items-center gap-3">
                        {/* <Logo /> */}
                        <Image src={Logo} alt='Hireloop logo' height={'20'} />
                    </div>
                    <div className='flex gap-3.5'>
                        <ul className="flex items-center gap-4">
                            <li><Link href="#">Browse Jobs</Link></li>
                            <li><Link href="#">Company</Link></li>
                            <li><Link href="#">Pricing</Link></li>
                        </ul>
                        <Separator orientation='vertical' />
                        <div>
                            <Button variant='ghost' className={"text-[#645CFE]"}>
                                Sign in
                            </Button>
                            <Button className={"bg-[#645CFE] h-11 rounded-2xl px-6 py-4"}>
                                Get Started
                            </Button>
                        </div>
                    </div>

                </header>
            </nav>
        </>
    );
};

export default Navbar;