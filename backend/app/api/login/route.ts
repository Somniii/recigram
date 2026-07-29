import { NextRequest, NextResponse } from "next/server";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import pool from "@/lib/db";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  try {
    const result = await pool.query(
      'SELECT * FROM "User" WHERE "userName" = $1',
      [username]
    );
    const user = result.rows[0];

    if (!user) {
      return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
    }

    const validPassword = await bcrypt.compare(password, user.userPassword);
    if (!validPassword) {
      return NextResponse.json({ error: "Credenciales incorrectas" }, { status: 401 });
    }

    // Generamos el token con SOLO el id (nunca password ni hash)
    const token = jwt.sign(
      { userId: user.userId, username: user.userName },
      process.env.JWT_SECRET!,
      { expiresIn: "7d" }
    );

    const response = NextResponse.json({ ok: true });

    response.cookies.set("session", token, {
      httpOnly: true,                              // JS del browser no puede leerla
      secure: process.env.NODE_ENV === "production", // solo HTTPS en prod
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 24 * 7,                     // 7 días, en segundos
    });

    return response;

  } catch (error) {
    console.error("Error en el login:", error);
    return NextResponse.json({ error: "Error al intentar iniciar sesión" }, { status: 500 });
  }
}