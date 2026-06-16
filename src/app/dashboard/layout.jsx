import { Navigation } from '@/component/dashboard/Sidebar';
import { Bars, Bell, Envelope, Gear, House, Magnifier, Person } from "@gravity-ui/icons";

const Layout = ({ children }) => {
    return (
        <div>
            {/* <Navigation /> */}
            <div className='flex p-2'>
                <div>
                    <Sidebar />
                </div>
                <div className='p-2'>

                    {children}
                </div>

            </div>
        </div>
    );
};


export const Sidebar = () => {
    const navItems = [
        { icon: House, label: "Home" },
        { icon: Magnifier, label: "Search" },
        { icon: Bell, label: "Notifications" },
        { icon: Envelope, label: "Messages" },
        { icon: Person, label: "Profile" },
        { icon: Gear, label: "Settings" },
    ];
    return (
        <aside className="w-50 ">
            <nav className="flex flex-col gap-1">
                {navItems.map((item) => (
                    <button
                        key={item.label}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-foreground transition-colors hover:bg-default"
                        type="button"
                    >
                        <item.icon className="size-5 text-muted" />
                        {item.label}
                    </button>
                ))}
            </nav>
        </aside>
    )
}
export default Layout;