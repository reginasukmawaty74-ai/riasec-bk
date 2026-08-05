"use client";

import { useEffect, useState } from "react";
import { riasecProfiles, RiasecCode } from "@/data/riasecProfiles";

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

  const hollandCode = hasil.hollandCode;

  const primaryProfile =
    riasecProfiles[
      hollandCode.charAt(0) as RiasecCode
    ];

  const secondProfile =
    riasecProfiles[
      hollandCode.charAt(1) as RiasecCode
    ];

  const thirdProfile =
    riasecProfiles[
      hollandCode.charAt(2) as RiasecCode
    ];

  const scores = [
    {
      code: "R",
      name: "Realistic",
      score: hasil.R,
    },
    {
      code: "I",
      name: "Investigative",
      score: hasil.I,
    },
    {
      code: "A",
      name: "Artistic",
      score: hasil.A,
    },
    {
      code: "S",
      name: "Social",
      score: hasil.S,
    },
    {
      code: "E",
      name: "Enterprising",
      score: hasil.E,
    },
    {
      code: "C",
      name: "Conventional",
      score: hasil.C,
    },
  ];

  return (
    <main className="min-h-screen bg-blue-50 p-8">

      <div className="max-w-5xl mx-auto bg-white rounded-2xl shadow-xl p-8">

        <h1 className="text-4xl font-bold text-center text-blue-700">
          Hasil Tes Minat Karier RIASEC
        </h1>

        <p className="text-center text-gray-500 mt-2">
          Berikut adalah hasil analisis minat karier Anda.
        </p>


        {/* BIODATA */}

        <hr className="my-8" />

        <section>
          <h2 className="text-2xl font-bold mb-4">
            Biodata Siswa
          </h2>

          <div className="bg-blue-50 rounded-xl p-5 space-y-2">

            <p>
              <b>Nama:</b> {biodata.nama}
            </p>

            <p>
              <b>NIS:</b> {biodata.nis}
            </p>

            <p>
              <b>Kelas:</b> {biodata.kelas}
            </p>

            <p>
              <b>Jurusan:</b> {biodata.jurusan}
            </p>

          </div>
        </section>


        {/* HOLLAND CODE */}

        <hr className="my-8" />

        <section className="text-center">

          <h2 className="text-2xl font-bold">
            Holland Code Anda
          </h2>

          <div
            className="text-6xl font-bold mt-4"
            style={{
              color: primaryProfile.color,
            }}
          >
            {hollandCode}
          </div>


          <div className="mt-6 space-y-2 text-left max-w-md mx-auto">

            <p>
              <b>1.</b> {hollandCode[0]} -
              {" "}
              {primaryProfile.name}
            </p>

            <p>
              <b>2.</b> {hollandCode[1]} -
              {" "}
              {secondProfile.name}
            </p>

            <p>
              <b>3.</b> {hollandCode[2]} -
              {" "}
              {thirdProfile.name}
            </p>

          </div>

        </section>


        {/* SKOR */}

        <hr className="my-8" />

        <h2 className="text-2xl font-bold mb-6">
          Skor RIASEC
        </h2>


        <div className="space-y-5">

          {scores.map((item) => (

            <div key={item.code}>

              <div className="flex justify-between mb-1">

                <span className="font-semibold">
                  {item.name} ({item.code})
                </span>

                <span>
                  {item.score}
                </span>

              </div>


              <div className="w-full bg-gray-200 rounded-full h-4">

                <div
                  className="h-4 rounded-full bg-blue-600"
                  style={{
                    width: `${(item.score / 50) * 100}%`,
                  }}
                />

              </div>

            </div>

          ))}

        </div>
        
        {/* PROFIL UTAMA */}

        <hr className="my-8" />

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Profil Utama Anda
          </h2>


          <div
            className="rounded-xl p-6"
            style={{
              backgroundColor: `${primaryProfile.color}15`,
            }}
          >

            <h3
              className="text-3xl font-bold"
              style={{
                color: primaryProfile.color,
              }}
            >
              {primaryProfile.name}
            </h3>


            <h4 className="text-xl font-semibold mt-2">
              {primaryProfile.title}
            </h4>


            <p className="italic mt-3 text-gray-600">
              "{primaryProfile.motto}"
            </p>


            <p className="mt-5 text-gray-700 leading-relaxed">
              {primaryProfile.description}
            </p>

          </div>

        </section>



        {/* KEKUATAN */}

        <hr className="my-8" />

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Kekuatan Anda
          </h2>


          <ul className="list-disc pl-6 space-y-2">

            {primaryProfile.strengths.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </section>



        {/* PENGEMBANGAN */}

        <hr className="my-8" />

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Hal yang Perlu Dikembangkan
          </h2>


          <ul className="list-disc pl-6 space-y-2">

            {primaryProfile.improvements.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </section>



        {/* LINGKUNGAN KERJA */}

        <hr className="my-8" />

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Lingkungan Kerja yang Sesuai
          </h2>


          <div className="grid md:grid-cols-2 gap-3">

            {primaryProfile.workEnvironments.map((item) => (

              <div
                key={item}
                className="bg-gray-100 rounded-lg p-3"
              >
                {item}
              </div>

            ))}

          </div>

        </section>



        {/* KARIER */}

        <hr className="my-8" />

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Rekomendasi Karier
          </h2>


          <ul className="list-disc pl-6 space-y-2">

            {primaryProfile.careers.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </section>



        {/* JURUSAN */}

        <hr className="my-8" />

        <section>

          <h2 className="text-2xl font-bold mb-4">
            Rekomendasi Jurusan
          </h2>


          <ul className="list-disc pl-6 space-y-2">

            {primaryProfile.majors.map((item) => (

              <li key={item}>
                {item}
              </li>

            ))}

          </ul>

        </section>



        {/* PENUTUP */}

        <hr className="my-8" />

        <div className="text-center">

          <p className="text-gray-600">
            Gunakan hasil ini sebagai bahan pertimbangan
            dalam merencanakan pendidikan dan karier Anda.
          </p>


          <button
            onClick={() => {
              window.location.href = "/siswa";
            }}
            className="mt-6 bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition"
          >
            Kembali ke Beranda
          </button>

        </div>


      </div>

    </main>
  );
}