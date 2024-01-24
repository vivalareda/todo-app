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
    classId: string;
};

export const DashboardItem = ({
    classId,
} : DashboardItemProps) => {
    return (

        <div className="relative m-6">
            <div className="absolute inset-0 bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 rounded-xl blur" />
            <Card className="relative shadow-2xl aspect-video rounded-xl p-3 bg-black border border-white/60">
                <CardHeader>
                    <CardTitle className="flex justify-between items-center gap-4">
                        {classId.toUpperCase()}
                    </CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="border shadow-lg">
                        LOG680-01-Quiz1 1 Day(s) remaining
                    </div>
                </CardContent>
            </Card>
        </div>
     );
}
