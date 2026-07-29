"use client";

import { useEffect, useState } from "react";
import { supabase } from "@/lib/supabase";
import { useParams } from "next/navigation";
import { descriptions } from "@/data/descriptions";

export default function DetailSiswa() {
  const params = useParams();
  const [siswa, setSiswa] = useState<any>(null);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const { data, error } = await supabase
      .from("hasil_tes")
      .select("*")
      .eq("id", params.id)
      .single();

    if (error) {
      alert(error.message);
      return;
    }

    setSiswa(data);
  }

function downloadPDF() {
  window.print();
}
const desc =
  descriptions[siswa?.holland_code] ??
  descriptions[siswa?.holland_code?.charAt(0)];
  if (!siswa) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Memuat data...</p>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-lg p-8">

        <h1 className="text-3xl font-bold text-blue-700 mb-6">
          Detail Hasil Tes Siswa
        </h1>

<div className="mb-6">
  <button
    onClick={downloadPDF}
    className="bg-red-600 hover:bg-red-700 text-white px-5 py-3 rounded-xl"
  >
    Cetak PDF
  </button>
</div>
        <p><b>Nama:</b> {siswa.nama}</p>
        <p><b>NIS:</b> {siswa.nis}</p>
        <p><b>Kelas:</b> {siswa.kelas}</p>
        <p><b>Jurusan:</b> {siswa.jurusan}</p>

        <hr className="my-6" />

        <p><b>Holland Code:</b> {siswa.holland_code}</p>

        <p>R : {siswa.r}</p>
        <p>I : {siswa.i}</p>
        <p>A : {siswa.a}</p>
        <p>S : {siswa.s}</p>
        <p>E : {siswa.e}</p>
        <p>C : {siswa.c}</p>
<hr className="my-8" />

<h2 className="text-2xl font-bold mb-4">
  Tentang Siswa
</h2>

<div className="bg-blue-50 rounded-xl p-5">

  <h3 className="text-xl font-bold text-blue-700">
    {desc.title}
  </h3>

  <p className="mt-3 text-gray-700">
    {desc.about}
  </p>

</div>
<hr className="my-8" />

<h2 className="text-2xl font-bold mb-4">
  Kelebihan
</h2>

<ul className="list-disc pl-6 space-y-2">
  {desc.strengths.map((item: string) => (
    <li key={item}>{item}</li>
  ))}
</ul>
<hr className="my-8" />

<h2 className="text-2xl font-bold mb-4">
  Jurusan yang Direkomendasikan
</h2>

<ul className="list-disc pl-6 space-y-2">
  {desc.majors.map((item: string) => (
    <li key={item}>{item}</li>
  ))}
</ul>
<hr className="my-8" />

<h2 className="text-2xl font-bold mb-4">
  Karier yang Direkomendasikan
</h2>

<ul className="list-disc pl-6 space-y-2">
  {desc.careers.map((item: string) => (
    <li key={item}>{item}</li>
  ))}
</ul>
      </div>
    </main>
  );
}