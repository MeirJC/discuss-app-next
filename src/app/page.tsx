import { Button, divider } from "@nextui-org/react";
import * as actions from "@/actions";
import { auth } from "@/auth";
import Profile from "@/components/profile";

export default async function Home() {
  const session = await auth();

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <form action={actions.signIn}>
        <Button type="submit">Sign In</Button>
      </form>
      <form action={actions.signOut}>
        <Button type="submit">Sign Out</Button>
      </form>
      {session?.user ? (
        <div className="border px-4 py-2 text-white bg-green-600 font-semibold text-xl rounded shadow-md hover:shadow-xl">
          Signed In
        </div>
      ) : (
        <div className="border px-4 py-2 text-white bg-red-600 font-semibold text-xl rounded shadow-md hover:shadow-xl">
          Not Signed in
        </div>
      )}
      <Profile />
    </div>
  );
}
