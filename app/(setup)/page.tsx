import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();
  const task = await db.task.findFirst({
    where: {
      profileId: profile.id
    }
  })

  if (task) {
    return redirect("/dashboard");
  }

  return <InitialModal />;
}

export default SetupPage;
