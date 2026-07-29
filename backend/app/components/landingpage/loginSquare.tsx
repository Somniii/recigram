"use client"

import NotGlass from "@/app/styles/notglass"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function LoginSquare(){
    const router = useRouter();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg] = useState<{ text: string; ok: boolean } | null>(null);
    const [loading, setLoading] = useState(false);

    async function handleLogin(e: React.FormEvent) {
        e.preventDefault();
        setLoading(true);

        try {
            const res = await fetch("/api/login", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    username,
                    password,
                }),
            });

            const data = await res.json();

            if (res.ok) {
                setMsg({
                    text: "Inicio de sesión correcto.",
                    ok: true,
                });
                router.push("../layouts/main"); // ajustá al path real de tu mainpage
            } else {
                setMsg({
                    text: data.error || "Credenciales incorrectas.",
                    ok: false,
                });
                alert("Credenciales incorrectas.")
            }
        } catch {
            setMsg({
                text: "No se pudo conectar al servidor.",
                ok: false,
            });
            alert("No se pudo conectar al servidor.")
        } finally {
            setLoading(false);
        }
    }
    return(
        <>
            <div>
                <NotGlass>
                    <form  className="flex justify-center" onSubmit={handleLogin}>
                        <div>
                            <p>Username</p>
                            <input type="text" value={username} onChange={e => setUsername(e.target.value)}></input>
                            <p>Password</p>
                            <input type="password" value={password} onChange={e => setPassword(e.target.value)}></input>
                            <button >Login</button>
                        </div>
                    </form>
                </NotGlass>
            </div>
        </>
    )
}