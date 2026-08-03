import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import pool from "@/lib/db";
import RecipeSquare from "@/app/components/main/recipeSquare";
import DownBar from "@/app/components/main/downBar";
import { UserProvider } from "@/app/context/userContext";

export default async function MainPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  const result = await pool.query(
    'SELECT "userId", "userName" FROM "User" WHERE "userId" = $1',
    [session.userId]
  );

  if (result.rows.length === 0) {
    console.log("no hay resultados para", session.userId);
    redirect("/login");
  }

  const user = result.rows[0];

  return (
    <UserProvider value={{ userId: user.userId, userName: user.userName }}>
      <div>
        <h1>Bienvenido, {user.userName}</h1>
        <div className="flex justify-center">
          <RecipeSquare></RecipeSquare>
        </div>
        <div className="fixed bottom-0 left-0 w-full">
          <DownBar></DownBar>
        </div>
      </div>
    </UserProvider>
  );
}