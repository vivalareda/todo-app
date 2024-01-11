import { Plus, Check } from "lucide-react";


export const NavigationAction = () => {
    return (
        <div className="flex flex-col gap-3 items-center">

                <div className="text-center flex gap-2">
                    <Plus/>
                    Create task
                </div>
            <div className="text-center flex gap-2">
                <Check/>
                Completed
            </div>
        </div>
     );
}
