import { NavigationSidebar } from "@/components/navigation/navigation-sidebar";

const MainLayout = async ({
    children
}: {
    children: React.ReactNode;
}) => {
    return (
        <div className="h-full">
            <div className="hidden md:flex h-full w-[150px] z-30 flex-col fixed inset-y-0 bg-[#55575a]">
                <NavigationSidebar />
            </div>
            <main className="md:pl-[150px] h-full">
                {children}
            </main>
        </div>
     );
}

export default MainLayout;
