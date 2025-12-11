"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState("");

  function handleLogin(e: React.FormEvent) {
    e.preventDefault();

    if (!username.trim() || !password.trim()) {
      setErrorMsg("Preencha todos os campos.");
      return;
    }

    if (username === "admin" && password === "123") {
      router.push("/dashboard");
    } else {
      setErrorMsg("Credenciais inválidas.");
    }
  }

  return (
    <div
      className="
        min-h-screen 
        flex items-center justify-center 
        bg-gradient-to-b from-blue-600 to-blue-900
        relative overflow-hidden
      "
    >
      {/* Glow de luz no rodapé */}
      <div className="absolute bottom-0 w-full h-1/2 bg-blue-400 opacity-20 blur-3xl"></div>

      <form
        onSubmit={handleLogin}
        className="
          w-full max-w-sm 
          flex flex-col gap-4 
          p-8 
          rounded-xl 
          shadow-xl 
          bg-white/10 
          border border-white/20 
          backdrop-blur-md
          animate-[fadeIn_0.6s_ease]
        "
      >
        <h1 className="text-center text-white text-3xl font-bold tracking-wide">
          LOGIN
        </h1>

        {errorMsg && (
          <p className="text-red-300 bg-red-900/20 border border-red-300/30 px-3 py-2 rounded text-center text-sm">
            {errorMsg}
          </p>
        )}

        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          className="
            w-full 
            px-4 py-2 
            rounded 
            bg-white/20 
            text-white 
            placeholder-white/60 
            outline-none 
            focus:ring-2 focus:ring-blue-300
            focus:bg-white/30
            transition
          "
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="
            w-full 
            px-4 py-2 
            rounded 
            bg-white/20 
            text-white 
            placeholder-white/60 
            outline-none 
            focus:ring-2 focus:ring-blue-300
            focus:bg-white/30
            transition
          "
        />

        <button
          type="submit"
          className="
            w-full 
            py-2 
            rounded 
            bg-blue-500 
            hover:bg-blue-600 
            text-white 
            font-semibold 
            tracking-wide 
            transition 
            shadow-md 
            hover:shadow-lg
          "
        >
          Login
        </button>

        <a
          href="#"
          className="text-center text-sm text-white/80 hover:text-white transition"
        >
          Forgot Password ?
        </a>
      </form>
    </div>
  );
}
