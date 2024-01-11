import { Menu, Check, X } from "lucide-react";
import { Separator } from "../ui/separator";



interface DashboardItemProps {
    title: string;
    completed: boolean;
};

export const DashboardItem = ({
    title,
    completed
} : DashboardItemProps) => {
    return (
        <div className="bg-slate-600 shadow-2xl aspect-video rounded-xl m-6 p-3">
            <div className="flex justify-between m-auto">
                {title.toUpperCase()}
                <Menu />
            </div>
            <Separator className="mt-3"/>
            <div className="pt-3 gap-2 flex">
                {completed ?
                <><Check/>Completed</>
                :
                <><X className="border border-red-300"/>Not completed yet</>}
            </div>

        </div>
     );
}
