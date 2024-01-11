import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/dist/server/api-utils";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    try {
        const {title} = await req.json();
        const user = await currentUser();

        console.log(title)

        if (!user){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const profile = await db.profile.findUnique({
            where: {
              userId: user.id,
            },
        });

        if (!profile){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const task = await db.task.create({
            data: {
                title,
                profileId: profile.id
            }
        })

        return new NextResponse("Task Created", { status: 200 });

    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}
