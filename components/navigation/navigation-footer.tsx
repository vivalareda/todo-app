import { UserButton } from "@clerk/nextjs";
import { ModeToggle } from "../mode-toggle";

export const NavigationFooter = () => {
    return (
        <div className="flex w-[150px] mb-20 gap-5 justify-center">
            <div>
                <ModeToggle />
            </div>
            <div>
                <UserButton
                    afterSignOutUrl="/"
                    appearance={{
                        elements: {
                            avatarBox: "h-[36px] w-[36px]"
                        }
                    }}
                />
            </div>
        </div>
     );
}
