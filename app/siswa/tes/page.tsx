"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { questions } from "@/data/questions";
import { calculateRIASEC } from "@/lib/riasec";
import { supabase } from "@/lib/supabase";

export default function TesPage() {
  const router = useRouter();

  const biodata =
    typeof window !== "undefined"
      ? JSON.parse(sessionStorage.getItem("biodata") || "{}")
      : {};

  const [currentQuestion, setCurrentQuestion] = useState(0);

  const [answers, setAnswers] = useState<
    {
      questionId: number;
      type: string;
      score: number;
    }[]
  >([]);

  const options = [
    {
      score: 1,
      label: "Sangat Tidak Sesuai",
    },
    {
      score: 2,
      label: "Tidak Sesuai",
    },
    {
      score: 3,
      label: "Ragu-ragu",
    },
    {
      score: 4,
      label: "Sesuai",
    },
    {
      score: 5,
      label: "Sangat Sesuai",
    },
  ];

  const answerQuestion = async (score: number) => {
    const soal = questions[currentQuestion];

    const newAnswers = [
      ...answers,
      {
        questionId: soal.id,
        type: soal.type,
        score,
      },
    ];

    setAnswers(newAnswers);

    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      return;
    }

    const hasil = calculateRIASEC(newAnswers);

    sessionStorage.setItem(
      "hasilRIASEC",
      JSON.stringify(hasil)
    );

    const { error } = await supabase
      .from("hasil_tes")
      .insert([
        {
          nama: biodata.nama,
          nis: biodata.nis,
          kelas: biodata.kelas,
          jurusan: biodata.jurusan,

          r: hasil.R,
          i: hasil.I,
          a: hasil.A,
          s: hasil.S,
          e: hasil.E,
          c: hasil.C,

          holland_code: hasil.hollandCode,
        },
      ]);

    if (error) {
      alert(error.message);
      return;
    }

    router.push("/siswa/hasil");
  };

  const soal = questions[currentQuestion];

  return (
    <main className="min-h-screen bg-blue-50 flex items-center justify-center p-6">
      <div className="bg-white shadow-xl rounded-2xl p-8 w-full max-w-3xl">

        <h1 className="text-3xl font-bold text-blue-700 text-center">
          Tes Minat Karier RIASEC
        </h1>

        <p className="text-center text-gray-500 mt-2 mb-8">
          Soal {currentQuestion + 1} dari {questions.length}
        </p>

        <div className="bg-gray-100 rounded-xl p-6 text-gray-900">

          <h2 className="text-xl font-semibold text-gray-900">
            {soal.question}
          </h2>

          <div className="space-y-3 mt-6">

            {options.map((option) => (
              <button
                key={option.score}
                onClick={() => answerQuestion(option.score)}
                className="w-full border border-gray-300 rounded-lg p-3 bg-white text-gray-900 hover:bg-blue-100 transition"
              >
                {option.label}
              </button>
            ))}

          </div>

        </div>

      </div>
    </main>
  );
}