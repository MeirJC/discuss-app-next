"use client";

import { useSession } from "next-auth/react";

export default function Profile() {
  const session = useSession();

  if (session?.data?.user) {
    console.log("session?.data", session?.data);

    return (
      <div className="flex items-center gap-6 p-2 border-2 rounded-lg shadow-lg">
        <p>From Client: User is signed in</p>
        <div>
          <img
            className="size-14 rounded-lg"
            src={session?.data?.user?.image || ""}
            alt={session?.data?.user?.name || ""}
          />
        </div>
      </div>
    );
  }
  return <div className="text-red-500">From Client: User is NOT signed in</div>;
}
