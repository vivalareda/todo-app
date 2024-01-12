import { Plus, Check } from "lucide-react";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () => {
    const { onOpen } = useModal();


    return (
        <div className="flex flex-col gap-3 items-center">
                <button onClick={() => onOpen("createTask")}>
                    <div className="text-center flex gap-2">
                        <Plus/>
                        Create task
                    </div>
                </button>
            <div className="text-center flex gap-2">
                <Check/>
                Completed
            </div>
        </div>
     );
}
