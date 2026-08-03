// app/api/allrecipes/route.ts
import { NextResponse } from "next/server";
import pool from "@/lib/db";

export async function GET() {
  try {
    const result = await pool.query(
      'SELECT "idRecipe","idUser","recipeName","recipeSteps" FROM "Recipe" ORDER BY "idRecipe" DESC'
    );
    return NextResponse.json({ ok: true, recipes: result.rows });
  } catch (error) {
    console.error("Error al traer recetas:", error);
    return NextResponse.json({ error: "Error al traer recetas" }, { status: 500 });
  }
}
