import { cookies } from "next/headers";
import jwt from "jsonwebtoken";

interface SessionPayload {
  userId: number;
  username: string;
}

export async function getSession(): Promise<SessionPayload | null> {
  const token = (await cookies()).get("session")?.value;
  if (!token) return null;

  try {
    return jwt.verify(token, process.env.JWT_SECRET!) as SessionPayload;
  } catch {
    return null; // token vencido o inválido
  }
}