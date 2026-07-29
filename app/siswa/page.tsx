import Link from "next/link";

export default function SiswaPage() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-green-50">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-md text-center">

        <h1 className="text-3xl font-bold text-green-700 mb-3">
          Login Siswa
        </h1>

        <p className="text-gray-600 mb-8">
          Selamat datang di BK Compass.
          Klik tombol di bawah untuk memulai asesmen minat bakat RIASEC.
        </p>

        <Link
          href="/siswa/biodata"
          className="block w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition"
        >
          Mulai Tes
        </Link>

      </div>
    </main>
  );
}