import { NextRequest, NextResponse } from "next/server";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    await pool.query(
      'INSERT INTO "User" ("userName", "userPassword") VALUES ($1, $2)',
      [username, password]
    );
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al registrar:", error);  // ← agregá esto
    return NextResponse.json({ error: "Error al registrar" }, { status: 500 });
  }
}