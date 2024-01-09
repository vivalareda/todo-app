import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../mode-toggle";

export const NavigationSidebar = () => {
    return (
        <div className="flex flex-col justify-between mt-auto">
            <div className="flex flex-auto gap-4 justify-center p-10">
                <ModeToggle />
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "h-[40px] w-[40px]"
                        }
                    }}
                    />
            </div>
        </div>
     );
}
