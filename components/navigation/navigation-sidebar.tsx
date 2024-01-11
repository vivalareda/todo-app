
import { Users, SearchIcon, FolderIcon, Plus, Check } from "lucide-react";
import { NavigationFooter } from "./navigation-footer"
import { NavigationAction } from "./navigation-action"

import { Separator } from "../ui/separator";


export const NavigationSidebar = () => {
    return (
        <div className="flex flex-col h-full justify-between mt-20 mb-10 text-s">
            <div className="flex flex-col justify-center items-center mt-24 gap-5">
                <div className="flex gap-2">
                    <Users/>
                    Profile
                </div>
                <div className="text-center flex gap-2">
                    <SearchIcon/>
                    Search
                </div>
                <div className="text-center flex gap-2">
                    <FolderIcon/>
                    Subject
                </div>
            </div>

            <NavigationAction/>

            <NavigationFooter />
        </div>
     );
}
