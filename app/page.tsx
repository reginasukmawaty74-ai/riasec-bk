import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />

      <main className="min-h-[calc(100vh-80px)] bg-gradient-to-br from-blue-100 to-white flex items-center justify-center">
        <div className="bg-white rounded-3xl shadow-xl p-10 max-w-2xl w-full text-center">

          <h2 className="text-5xl font-bold text-blue-700">
            Selamat Datang
          </h2>

          <p className="mt-4 text-gray-600 text-lg">
            BK Compass membantu guru BK dan siswa melaksanakan
            asesmen minat bakat Holland (RIASEC) secara mudah,
            cepat, dan otomatis.
          </p>

          <div className="mt-10 flex justify-center gap-4">

            <button className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition">
              Mulai Tes
            </button>

            <button className="bg-gray-200 px-8 py-3 rounded-xl hover:bg-gray-300 transition">
              Pelajari
            </button>

          </div>

        </div>
      </main>
    </>
  );
}