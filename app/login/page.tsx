"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin() {
    if (!email || !password) {
      alert("Email dan password harus diisi.");
      return;
    }

    setLoading(true);

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      alert("Login gagal: " + error.message);
      return;
    }

    router.push("/guru/dashboard");
  }

  return (
    <main className="min-h-screen flex items-center justify-center bg-blue-100">

      <div className="bg-white rounded-2xl shadow-xl p-10 w-full max-w-md">

        <h1 className="text-3xl font-bold text-center text-blue-700">
          Login Guru BK
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Silakan masuk menggunakan akun Guru BK
        </p>

        <div className="space-y-5">

          <div>
            <label>Email</label>

            <input
              type="email"
              className="w-full border rounded-xl p-3 mt-1"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Masukkan email"
            />
          </div>

          <div>
            <label>Password</label>

            <input
              type="password"
              className="w-full border rounded-xl p-3 mt-1"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password"
            />
          </div>

          <button
            onClick={handleLogin}
            disabled={loading}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white rounded-xl py-3"
          >
            {loading ? "Masuk..." : "Login"}
          </button>

        </div>

      </div>

    </main>
  );
}