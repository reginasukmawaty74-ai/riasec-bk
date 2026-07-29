"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";
import * as XLSX from "xlsx";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

export default function DashboardGuru() {
  const router = useRouter();
async function handleLogout() {
  const { error } = await supabase.auth.signOut();

  if (error) {
    alert("Gagal logout: " + error.message);
    return;
  }

  router.replace("/login");
}
  const [data, setData] = useState<any[]>([]);
  const [search, setSearch] = useState("");
  const [kelasFilter, setKelasFilter] = useState("");
  const [jurusanFilter, setJurusanFilter] = useState("");

 const statistik = {
  R: data.filter((item) => item.holland_code?.startsWith("R")).length,
  I: data.filter((item) => item.holland_code?.startsWith("I")).length,
  A: data.filter((item) => item.holland_code?.startsWith("A")).length,
  S: data.filter((item) => item.holland_code?.startsWith("S")).length,
  E: data.filter((item) => item.holland_code?.startsWith("E")).length,
  C: data.filter((item) => item.holland_code?.startsWith("C")).length,
};
const chartData = [
  { tipe: "R", jumlah: statistik.R },
  { tipe: "I", jumlah: statistik.I },
  { tipe: "A", jumlah: statistik.A },
  { tipe: "S", jumlah: statistik.S },
  { tipe: "E", jumlah: statistik.E },
  { tipe: "C", jumlah: statistik.C },
];
const hollandRanking = Object.entries(
  data.reduce((acc: any, item) => {
    const code = item.holland_code || "-";
    acc[code] = (acc[code] || 0) + 1;
    return acc;
  }, {})
)
  .map(([code, jumlah]) => ({ code, jumlah }))
  .sort((a: any, b: any) => b.jumlah - a.jumlah)
  .slice(0, 10);
  useEffect(() => {
    getData();
  }, []);

const rekapKelas = Object.values(
  data.reduce((acc: any, item) => {
    const kelas = item.kelas || "-";
    const dominan = item.holland_code?.charAt(0) || "-";

    if (!acc[kelas]) {
      acc[kelas] = {
        kelas,
        jumlah: 0,
        tipe: {
          R: 0,
          I: 0,
          A: 0,
          S: 0,
          E: 0,
          C: 0,
        },
      };
    }

    acc[kelas].jumlah++;

    if (acc[kelas].tipe[dominan] !== undefined) {
      acc[kelas].tipe[dominan]++;
    }

    return acc;
  }, {})
).map((item: any) => {

  const dominan = Object.entries(item.tipe).sort(
    (a: any, b: any) => b[1] - a[1]
  )[0][0];

  return {
    kelas: item.kelas,
    jumlah: item.jumlah,
    dominan,
  };
});
  async function getData() {
    const { data, error } = await supabase
      .from("hasil_tes")
      .select("*")
      .order("created_at", { ascending: false });

    if (error) {
      alert(error.message);
      return;
    }

    setData(data || []);
  }

function exportExcel() {
  const exportData = data.map((item) => ({
    Nama: item.nama,
    NIS: item.nis,
    Kelas: item.kelas,
    Jurusan: item.jurusan,
    R: item.r,
    I: item.i,
    A: item.a,
    S: item.s,
    E: item.e,
    C: item.c,
    "Holland Code": item.holland_code,
    Tanggal: item.created_at
      ? new Date(item.created_at).toLocaleString("id-ID")
      : "",
  }));

  const worksheet = XLSX.utils.json_to_sheet(exportData);
  const workbook = XLSX.utils.book_new();

  XLSX.utils.book_append_sheet(
    workbook,
    worksheet,
    "Hasil Tes"
  );

  XLSX.writeFile(workbook, "hasil_tes_riasec.xlsx");
}
  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <div className="flex justify-between items-center mb-6">

  <h1 className="text-3xl font-bold text-blue-700">
    Dashboard Guru BK
  </h1>

  <div className="flex gap-3">

  <button
    onClick={exportExcel}
    className="bg-green-600 hover:bg-green-700 text-white px-5 py-2 rounded-xl"
  >
    Export Excel
  </button>

  <button
    onClick={handleLogout}
    className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-xl"
  >
    Logout
  </button>

</div>

</div>

        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-7 gap-4 mb-8">
          <div className="bg-blue-600 text-white rounded-xl p-5">
            <p className="text-sm">Total</p>
            <h2 className="text-3xl font-bold">{data.length}</h2>
          </div>

          <div className="bg-red-500 text-white rounded-xl p-5">
            <p className="text-sm">R</p>
            <h2 className="text-3xl font-bold">{statistik.R}</h2>
          </div>

          <div className="bg-green-500 text-white rounded-xl p-5">
            <p className="text-sm">I</p>
            <h2 className="text-3xl font-bold">{statistik.I}</h2>
          </div>

          <div className="bg-pink-500 text-white rounded-xl p-5">
            <p className="text-sm">A</p>
            <h2 className="text-3xl font-bold">{statistik.A}</h2>
          </div>

          <div className="bg-yellow-500 text-white rounded-xl p-5">
            <p className="text-sm">S</p>
            <h2 className="text-3xl font-bold">{statistik.S}</h2>
          </div>

          <div className="bg-purple-500 text-white rounded-xl p-5">
            <p className="text-sm">E</p>
            <h2 className="text-3xl font-bold">{statistik.E}</h2>
          </div>

          <div className="bg-gray-600 text-white rounded-xl p-5">
            <p className="text-sm">C</p>
            <h2 className="text-3xl font-bold">{statistik.C}</h2>
          </div>
        </div>
<div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
  <h2 className="text-xl font-bold text-blue-700 mb-4">
    Grafik Distribusi Tipe RIASEC
  </h2>

  <div className="w-full h-80">
    <ResponsiveContainer width="100%" height="100%">
      <BarChart data={chartData}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="tipe" />
        <YAxis />
        <Tooltip />
        <Bar dataKey="jumlah" fill="#2563eb" radius={[6, 6, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  </div>
</div>
<div className="bg-white rounded-2xl shadow-lg p-6 mb-8">
  <h2 className="text-xl font-bold text-blue-700 mb-4">
    Top Holland Code Terbanyak
  </h2>

  <table className="w-full border">
    <thead className="bg-blue-700 text-white">
      <tr>
        <th className="p-3">Ranking</th>
        <th className="p-3">Holland Code</th>
        <th className="p-3">Jumlah</th>
      </tr>
    </thead>

    <tbody>
      {hollandRanking.map((item, index) => (
        <tr key={item.code} className="border">
          <td className="p-3 text-center">
            {index === 0
              ? "🥇"
              : index === 1
              ? "🥈"
              : index === 2
              ? "🥉"
              : index + 1}
          </td>

          <td className="p-3 font-bold text-center">
            {item.code}
          </td>

          <td className="p-3 text-center">
            {item.jumlah}
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
<div className="bg-white rounded-2xl shadow-lg p-6 mb-8">

  <h2 className="text-xl font-bold text-blue-700 mb-4">
    Rekap Per Kelas
  </h2>

  <table className="w-full border">

    <thead className="bg-blue-700 text-white">
      <tr>
        <th className="p-3">Kelas</th>
        <th className="p-3">Jumlah Siswa</th>
        <th className="p-3">Dominan</th>
      </tr>
    </thead>

    <tbody>

      {rekapKelas.map((item: any) => (
        <tr key={item.kelas} className="border">

          <td className="p-3">
            {item.kelas}
          </td>

          <td className="p-3 text-center">
            {item.jumlah}
          </td>

          <td className="p-3 text-center font-bold text-blue-700">
            {item.dominan}
          </td>

        </tr>
      ))}

    </tbody>

  </table>

</div>
        <div className="flex gap-4 mb-6">
          <input
            type="text"
            placeholder="🔍 Cari nama atau NIS..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="flex-1 border rounded-xl p-3"
          />

          <select
            value={kelasFilter}
            onChange={(e) => setKelasFilter(e.target.value)}
            className="border rounded-xl p-3"
          >
            <option value="">Semua Kelas</option>
            {[...new Set(data.map((item) => item.kelas))].map((kelas) => (
              <option key={kelas} value={kelas}>
                {kelas}
              </option>
            ))}
          </select>

          <select
            value={jurusanFilter}
            onChange={(e) => setJurusanFilter(e.target.value)}
            className="border rounded-xl p-3"
          >
            <option value="">Semua Jurusan</option>
            {[...new Set(data.map((item) => item.jurusan))].map((jurusan) => (
              <option key={jurusan} value={jurusan}>
                {jurusan}
              </option>
            ))}
          </select>
        </div>

        <table className="w-full border-collapse border">
          <thead className="bg-blue-700 text-white">
            <tr>
              <th className="p-3">Nama</th>
              <th className="p-3">NIS</th>
              <th className="p-3">Kelas</th>
              <th className="p-3">Jurusan</th>
              <th className="p-3">Holland Code</th>
              <th className="p-3">Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data
              .filter((item) => {
                const keyword = search.toLowerCase();

                const cocokSearch =
                  item.nama.toLowerCase().includes(keyword) ||
                  item.nis.toLowerCase().includes(keyword);

                const cocokKelas =
                  kelasFilter === "" || item.kelas === kelasFilter;

                const cocokJurusan =
                  jurusanFilter === "" || item.jurusan === jurusanFilter;

                return cocokSearch && cocokKelas && cocokJurusan;
              })
              .map((item) => (
                <tr key={item.id} className="border">
                  <td className="p-3">{item.nama}</td>
                  <td className="p-3">{item.nis}</td>
                  <td className="p-3">{item.kelas}</td>
                  <td className="p-3">{item.jurusan}</td>
                  <td className="p-3 font-bold text-blue-700">
                    {item.holland_code}
                  </td>
                  <td className="p-3">
                    <button
                      onClick={() => router.push(`/guru/detail/${item.id}`)}
                      className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg"
                    >
                      Lihat
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>

      </div>
    </main>
  );
}