"use client";

import Link from "next/link";

export default function SiswaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-10 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-green-700">
          Login Siswa
        </h1>

        <p className="text-gray-600 mt-3">
          Klik tombol di bawah untuk mengisi biodata dan memulai Tes Minat Karier RIASEC.
        </p>

        <Link
          href="/siswa/biodata"
          className="mt-8 inline-block bg-green-600 hover:bg-green-700 text-white px-8 py-3 rounded-xl"
        >
          Mulai Tes
        </Link>

      </div>
    </main>
  );
}