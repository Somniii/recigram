import { redirect } from "next/navigation";
import { getSession } from "@/lib/auth";
import pool from "@/lib/db";

export default async function MainPage() {
  const session = await getSession();

  if (!session) {
    redirect("/login");
  }

  // Ahora sí podés buscar los datos completos del usuario, de forma confiable
  const result = await pool.query(
    'SELECT "userId", "userName" FROM "User" WHERE "userId" = $1',
    [session.userId]
  );
  const user = result.rows[0];
  if(result.rows.length === 0){
    console.log("HOLA SOY MESSI",session)
    console.log("Session",session)
    console.log("UserId de la sesion",session.userId)
    console.log("no hay resultados")
  }
  return (
    <div>
      <h1>Bienvenido, {user.userName}</h1>
    </div>
  );
}