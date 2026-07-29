"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { supabase } from "@/lib/supabase";

export default function BiodataPage() {
  const router = useRouter();

  const [nama, setNama] = useState("");
  const [nis, setNis] = useState("");
  const [kelas, setKelas] = useState("");
  const [jurusan, setJurusan] = useState("");

  async function handleSubmit() {
    if (!nama || !nis || !kelas || !jurusan) {
      alert("Semua data harus diisi.");
      return;
    }

    // ===========================
    // CEK APAKAH SUDAH PERNAH TES
    // ===========================
    const { data: hasilLama, error: cekError } = await supabase
      .from("hasil_tes")
      .select("id")
      .eq("nis", nis)
      .limit(1);

    if (cekError) {
      alert("Gagal mengecek data: " + cekError.message);
      return;
    }

    if (hasilLama && hasilLama.length > 0) {
      alert(
        "NIS ini sudah pernah mengerjakan Tes RIASEC.\n\nSilakan hubungi Guru BK jika terjadi kesalahan."
      );
      return;
    }

    // ===========================
    // SIMPAN BIODATA
    // ===========================
    const { error } = await supabase
      .from("students")
      .insert([
        {
          nama,
          nis,
          kelas,
          jurusan,
        },
      ]);

    if (error) {
      alert("Gagal menyimpan biodata: " + error.message);
      return;
    }

    sessionStorage.setItem(
      "biodata",
      JSON.stringify({
        nama,
        nis,
        kelas,
        jurusan,
      })
    );

    router.push("/siswa/tes");
  }

  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-2xl">

        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Biodata Siswa
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Silakan lengkapi biodata sebelum memulai tes.
        </p>

        <div className="space-y-5">

          <div>
            <label className="font-medium">Nama Lengkap</label>
            <input
              type="text"
              value={nama}
              onChange={(e) => setNama(e.target.value)}
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="Masukkan nama lengkap"
            />
          </div>

          <div>
            <label className="font-medium">NIS / NISN</label>
            <input
              type="text"
              value={nis}
              onChange={(e) => setNis(e.target.value)}
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="Masukkan NIS atau NISN"
            />
          </div>

          <div>
            <label className="font-medium">Kelas</label>
            <input
              type="text"
              value={kelas}
              onChange={(e) => setKelas(e.target.value)}
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="Contoh: XI TMI"
            />
          </div>

          <div>
            <label className="font-medium">Jurusan</label>
            <input
              type="text"
              value={jurusan}
              onChange={(e) => setJurusan(e.target.value)}
              className="w-full border rounded-lg p-3 mt-1"
              placeholder="Contoh: Teknik Mekanik Industri"
            />
          </div>

          <button
            onClick={handleSubmit}
            className="w-full bg-blue-700 hover:bg-blue-800 text-white py-3 rounded-xl text-lg"
          >
            Lanjut ke Tes
          </button>

        </div>

      </div>
    </main>
  );
}