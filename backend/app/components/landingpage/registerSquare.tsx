"use client";
import { useState } from "react";
import NotGlass from "@/app/styles/notglass";

export default function RegisterSquare() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
  const [loading, setLoading] = useState(false);

  async function handleRegister() {
    if (!username || !password) {
      setMsg({ text: "Completá todos los campos.", ok: false });
      return;
    }
    setLoading(true);
    try {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });
      const data = await res.json();
      if (data.ok) {
        setMsg({ text: `Usuario "${username}" registrado exitosamente.`, ok: true });
        setUsername("");
        setPassword("");
      } else {
        setMsg({ text: data.error || "Error al registrar.", ok: false });
      }
    } catch {
      setMsg({ text: "No se pudo conectar al servidor.", ok: false });
    } finally {
      setLoading(false);
    }
  }

  return (
    <NotGlass>
      <div className="flex flex-col gap-4 w-full max-w-sm mx-auto p-6">
        <div>
          <h2 className="text-lg font-medium">Crear cuenta</h2>
          <p className="text-sm text-gray-500">Completá tus datos para empezar.</p>
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Username</label>
          <input type="text" value={username} onChange={e => setUsername(e.target.value)} placeholder="tu_usuario" />
        </div>

        <div className="flex flex-col gap-1">
          <label className="text-sm text-gray-500">Password</label>
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} placeholder="••••••••" />
        </div>

        <button onClick={handleRegister} disabled={loading}>
          {loading ? "Registrando…" : "Register"}
        </button>

        <button>Login if you already have an account</button>

        {msg && (
          <p className={`text-sm p-2 rounded ${msg.ok ? "text-green-700 bg-green-50" : "text-red-700 bg-red-50"}`}>
            {msg.text}
          </p>
        )}
      </div>
    </NotGlass>
  );
}