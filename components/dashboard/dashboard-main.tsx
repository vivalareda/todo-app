import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { db } from "@/lib/db";
import { DashboardItem } from "@/components/dashboard/dashboard-item";


export const MainDashboard = async () => {
    const user = await currentUser()

    if (!user) {
        return redirect("/")
    }

    const profile = await db.profile.findUnique({
        where: {
          userId: user.id,
        },
    });

    const tasks = await db.task.findMany({
        where: {
            profileId: profile?.id
        }
    })


    return (
        <div className="flex gap-5">
            {tasks.map((task) => (
                <div key={task.id} className="flex flex-row gap-10">
                    <DashboardItem
                        title={task.title}
                        completed={task.completed}
                    />
                </div>
            ))}
        </div>
     );
}
