import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-blue-700 text-white shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">

        <div>
          <h1 className="text-2xl font-bold">🧭 BK Compass</h1>
          <p className="text-sm text-blue-100">
            Sistem Asesmen Minat Bakat Holland (RIASEC)
          </p>
        </div>

        <div className="flex gap-3">
          <Link
            href="/guru"
            className="bg-white text-blue-700 px-4 py-2 rounded-xl font-semibold hover:bg-gray-100 transition"
          >
            Login Guru
          </Link>

          <Link
            href="/siswa"
            className="bg-green-500 px-4 py-2 rounded-xl font-semibold hover:bg-green-600 transition"
          >
            Login Siswa
          </Link>
        </div>

      </div>
    </nav>
  );
}