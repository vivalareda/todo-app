import { Menu, Check, X } from "lucide-react";
import { Separator } from "../ui/separator";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "../ui/card";



interface DashboardItemProps {
    title: string;
    completed: boolean;
};

export const DashboardItem = ({
    title,
    completed
} : DashboardItemProps) => {
    return (

        <div className="relative m-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl blur" />
            <Card className="relative shadow-2xl aspect-video rounded-xl p-3 bg-black border border-white/60">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center gap-4">
                        {title.toUpperCase()}
                        <Menu />
                    </CardTitle>
                </CardHeader>
                <Separator className="mt-1"/>
                <CardContent>
                <div className="pt-3 gap-2 flex">
                    {completed ?
                        <><Check/>Completed</>
                        :
                        <><X className="border border-red-300"/>Not completed yet</>
                    }
                </div>

                </CardContent>

            </Card>
        </div>
     );
}
