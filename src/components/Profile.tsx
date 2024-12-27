import { signIn } from "@/auth";
import { Button } from "./ui/button";
import UserButton from "./UserButton";
import getSession from "@/lib/getSession";

export default async function Profile() {
  const session = await getSession();
  const user = session?.user;

  return <>{user ? <UserButton user={user} /> : <LogInButton />}</>;
}

function LogInButton() {
  return (
    <form
      action={async () => {
        "use server";
        await signIn("google");
      }}
    >
      <Button variant={"outline"} type="submit" className="h-fit px-6 py-2">
        Log in
      </Button>
    </form>
  );
}
