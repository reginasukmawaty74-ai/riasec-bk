"use client";

import { useEffect, useState } from "react";
import { descriptions } from "@/data/descriptions";

export default function HasilPage() {
  const [hasil, setHasil] = useState<any>(null);
  const [biodata, setBiodata] = useState<any>(null);

  useEffect(() => {
    const dataHasil = sessionStorage.getItem("hasilRIASEC");
    const dataBiodata = sessionStorage.getItem("biodata");

    if (dataHasil) {
      setHasil(JSON.parse(dataHasil));
    }

    if (dataBiodata) {
      setBiodata(JSON.parse(dataBiodata));
    }
  }, []);

  if (!hasil || !biodata) {
    return (
      <main className="min-h-screen flex items-center justify-center">
        <p>Memuat hasil...</p>
      </main>
    );
  }

const desc =
  descriptions[hasil.hollandCode] ??
  descriptions[hasil.hollandCode.charAt(0)];
  return (
    <main className="min-h-screen bg-blue-50 p-8">

      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Hasil Tes RIASEC
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Terima kasih telah menyelesaikan tes.
        </p>

        <hr className="my-8"/>

        <div className="grid md:grid-cols-2 gap-6">

          <div>
            <h2 className="font-bold text-xl mb-3">
              Biodata
            </h2>

            <p><b>Nama :</b> {biodata.nama}</p>
            <p><b>NIS :</b> {biodata.nis}</p>
            <p><b>Kelas :</b> {biodata.kelas}</p>
            <p><b>Jurusan :</b> {biodata.jurusan}</p>
          </div>

          <div>
            <h2 className="font-bold text-xl mb-3">
              Holland Code
            </h2>

            <div className="text-5xl font-bold text-blue-700">
              {hasil.hollandCode}
            </div>
          </div>
<p className="mt-4 text-gray-700">
  <b>1.</b> {hasil.hollandCode[0]} - {descriptions[hasil.hollandCode[0]].title}
</p>

<p className="text-gray-700">
  <b>2.</b> {hasil.hollandCode[1]} - {descriptions[hasil.hollandCode[1]].title}
</p>

<p className="text-gray-700">
  <b>3.</b> {hasil.hollandCode[2]} - {descriptions[hasil.hollandCode[2]].title}
</p>
        </div>

        <hr className="my-8"/>

        <h2 className="text-2xl font-bold mb-6">
  Skor RIASEC
</h2>

<div className="space-y-5">

  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Realistic (R)</span>
      <span>{hasil.R}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-blue-600 h-4 rounded-full"
        style={{ width: `${(hasil.R / 40) * 100}%` }}
      />
    </div>
  </div>

  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Investigative (I)</span>
      <span>{hasil.I}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-green-600 h-4 rounded-full"
        style={{ width: `${(hasil.I / 40) * 100}%` }}
      />
    </div>
  </div>

  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Artistic (A)</span>
      <span>{hasil.A}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-pink-500 h-4 rounded-full"
        style={{ width: `${(hasil.A / 40) * 100}%` }}
      />
    </div>
  </div>

  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Social (S)</span>
      <span>{hasil.S}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-yellow-500 h-4 rounded-full"
        style={{ width: `${(hasil.S / 40) * 100}%` }}
      />
    </div>
  </div>

  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Enterprising (E)</span>
      <span>{hasil.E}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-purple-600 h-4 rounded-full"
        style={{ width: `${(hasil.E / 40) * 100}%` }}
      />
    </div>
  </div>

  <div>
    <div className="flex justify-between mb-1">
      <span className="font-semibold">Conventional (C)</span>
      <span>{hasil.C}</span>
    </div>
    <div className="w-full bg-gray-200 rounded-full h-4">
      <div
        className="bg-gray-600 h-4 rounded-full"
        style={{ width: `${(hasil.C / 40) * 100}%` }}
      />
    </div>
  </div>

</div>
<hr className="my-8" />

<h2 className="text-2xl font-bold mb-4">
  Tentang Kamu
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
  Jurusan yang Cocok
</h2>

<ul className="list-disc pl-6 space-y-2">
  {desc.majors.map((item: string) => (
    <li key={item}>{item}</li>
  ))}
</ul>

<hr className="my-8" />

<h2 className="text-2xl font-bold mb-4">
  Karier yang Cocok
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