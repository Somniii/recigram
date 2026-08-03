import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";
import { randomUUID } from "crypto";

export async function POST(req: NextRequest) {
  const { userId, recipeTitle, recipeIngredients, recipeSteps } = await req.json();
  const id = randomUUID();

  try {
    await pool.query(
      'INSERT INTO "Recipe" ("idUser","recipeName","idRecipe","recipeDescription","recipeSteps") VALUES ($1,$2,$3,$4,$5)',
      [userId, recipeTitle, id, recipeIngredients, recipeSteps]
    );
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al registrar:", error);
    return NextResponse.json({ error: "Error al registrar" }, { status: 500 });
  }
}