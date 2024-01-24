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

    const userClasses = await db.class.findMany({
        where: {
            profileId: profile?.id
        }
    })


    return (
        <div className="flex gap-5">
            {userClasses.map((classes) => (
                <div key={classes.id} className="flex flex-row gap-10">
                    <DashboardItem
                        classId={classes.name}
                    />
                </div>
            ))}
        </div>
     );
}
