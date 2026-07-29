import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt"
import pool from "@/lib/db";
import { randomUUID } from "crypto";
export async function POST(req: NextRequest) {
  const { username, password} = await req.json();
  const hash = await bcrypt.hash(password,12);
  const id = randomUUID();
  try {
    await pool.query(
      'INSERT INTO "User" ("userName", "userPassword" ,"userId") VALUES ($1,$2,$3)',
      [username, hash ,id]
    );
    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Error al registrar:", error);  // ← agregá esto
    return NextResponse.json({ error: "Error al registrar" }, { status: 500 });
  }
}