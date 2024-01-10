import { db } from "@/lib/db"
import { currentUser } from "@clerk/nextjs";
import { NextResponse } from "next/server";
import { title } from "process";

export async function POST(req: Request) {
    try {
        const title = await req.json();
        const profile = await currentUser();

        if (!profile){
            return new NextResponse("Unauthorized", { status: 401 });
        }

        const task = await db.task.create({
            data : {
                title,
                profileId: profile.id
            }
        })

    } catch (error) {
        return new NextResponse("Internal Error", { status: 500 });
    }
}
