import { redirect } from "next/navigation";

import { db } from "@/lib/db";
import { initialProfile } from "@/lib/initial-profile";
import { InitialModal } from "@/components/modals/initial-modal";

const SetupPage = async () => {
  const profile = await initialProfile();
  const className = await db.class.findFirst({
    where: {
      profileId: profile.id
    }
  })

  if (className) {
    return redirect("/dashboard");
  }

  return <InitialModal />;
}

export default SetupPage;
