export type Question = {
  id: number;
  type: "R" | "I" | "A" | "S" | "E" | "C";
  question: string;
};

export const questions: Question[] = [
  // REALISTIC (R)
  {
    id: 1,
    type: "R",
    question: "Saya menikmati menggunakan berbagai alat untuk membuat atau memperbaiki sesuatu.",
  },
  {
    id: 2,
    type: "R",
    question: "Saya lebih senang belajar melalui praktik daripada hanya membaca teori.",
  },
  {
    id: 3,
    type: "R",
    question: "Saya tertarik mempelajari cara kerja mesin atau peralatan.",
  },
  {
    id: 4,
    type: "R",
    question: "Saya merasa puas ketika berhasil merakit atau memperbaiki suatu benda.",
  },
  {
    id: 5,
    type: "R",
    question: "Saya lebih menyukai pekerjaan yang melibatkan penggunaan keterampilan fisik dan peralatan.",
  },
  {
    id: 6,
    type: "R",
    question: "Saya nyaman bekerja di lingkungan kerja yang melibatkan alat, mesin, atau kegiatan lapangan.",
  },
  {
    id: 7,
    type: "R",
    question: "Saya senang mengoperasikan peralatan atau mesin sesuai prosedur.",
  },
  {
    id: 8,
    type: "R",
    question: "Saya tidak keberatan jika harus bekerja di bengkel, area produksi, atau lapangan.",
  },
  {
    id: 9,
    type: "R",
    question: "Saya lebih tertarik menghasilkan sebuah produk nyata daripada hanya membuat konsep.",
  },
  {
    id: 10,
    type: "R",
    question: "Saya menikmati kegiatan praktik yang membutuhkan keterampilan tangan.",
  },

  // INVESTIGATIVE (I)
  {
    id: 11,
    type: "I",
    question: "Saya senang mencari penyebab suatu masalah sebelum mengambil keputusan.",
  },
  {
    id: 12,
    type: "I",
    question: "Saya menikmati memecahkan soal yang membutuhkan logika.",
  },
  {
    id: 13,
    type: "I",
    question: "Saya tertarik melakukan percobaan untuk membuktikan suatu dugaan.",
  },
  {
    id: 14,
    type: "I",
    question: "Saya senang mencari informasi dari berbagai sumber ketika ingin memahami sesuatu.",
  },
  {
    id: 15,
    type: "I",
    question: "Saya menikmati pelajaran yang menantang cara berpikir saya.",
  },
  {
    id: 16,
    type: "I",
    question: "Saya tertarik menganalisis data sebelum membuat kesimpulan.",
  },
  {
    id: 17,
    type: "I",
    question: "Saya senang mempelajari bagaimana suatu sistem bekerja.",
  },
  {
    id: 18,
    type: "I",
    question: "Saya menikmati kegiatan yang membutuhkan ketelitian dalam berpikir.",
  },
  {
    id: 19,
    type: "I",
    question: "Saya sering penasaran mengapa suatu peristiwa bisa terjadi.",
  },
  {
    id: 20,
    type: "I",
    question: "Saya lebih suka menemukan jawaban sendiri daripada langsung diberi tahu.",
  },

  // ARTISTIC (A)
  {
    id: 21,
    type: "A",
    question: "Saya menikmati menggambar, mendesain, atau membuat ilustrasi.",
  },
  {
    id: 22,
    type: "A",
    question: "Saya senang menciptakan sesuatu dengan ide saya sendiri.",
  },
  {
    id: 23,
    type: "A",
    question: "Saya menikmati membuat karya yang memiliki nilai estetika.",
  },
  {
    id: 24,
    type: "A",
    question: "Saya tertarik pada kegiatan musik, tari, teater, atau seni pertunjukan.",
  },
  {
    id: 25,
    type: "A",
    question: "Saya sering memiliki ide kreatif yang berbeda ketika membuat suatu karya.",
  },
  {
    id: 26,
    type: "A",
    question: "Saya menikmati membuat video, foto, atau konten kreatif.",
  },
  {
    id: 27,
    type: "A",
    question: "Saya senang menulis cerita, puisi, atau karya tulis kreatif.",
  },
  {
    id: 28,
    type: "A",
    question: "Saya lebih suka pekerjaan yang memberi kebebasan berkreasi.",
  },
  {
    id: 29,
    type: "A",
    question: "Saya menikmati memperindah tampilan suatu benda atau karya agar memiliki nilai estetika.",
  },
  {
    id: 30,
    type: "A",
    question: "Saya senang menuangkan ide menjadi sebuah karya.",
  },

  // SOCIAL (S)
  {
    id: 31,
    type: "S",
    question: "Saya menikmati menjelaskan materi kepada teman hingga mereka memahaminya.",
  },
  {
    id: 32,
    type: "S",
    question: "Saya senang membimbing teman yang mengalami kesulitan belajar.",
  },
  {
    id: 33,
    type: "S",
    question: "Saya tertarik bekerja di bidang pendidikan.",
  },
  {
    id: 34,
    type: "S",
    question: "Saya menikmati kegiatan yang berhubungan langsung dengan pelayanan kepada masyarakat.",
  },
  {
    id: 35,
    type: "S",
    question: "Saya merasa nyaman menjadi pendengar ketika teman sedang bercerita.",
  },
  {
    id: 36,
    type: "S",
    question: "Saya menikmati bekerja dalam kelompok yang bertujuan membantu atau mengembangkan orang lain.",
  },
  {
    id: 37,
    type: "S",
    question: "Saya tertarik pada pekerjaan yang membantu perkembangan orang lain.",
  },
  {
    id: 38,
    type: "S",
    question: "Saya menikmati kegiatan menjadi mentor, pelatih, atau pembimbing.",
  },
  {
    id: 39,
    type: "S",
    question: "Saya merasa puas ketika dapat membantu orang memahami sesuatu.",
  },
  {
    id: 40,
    type: "S",
    question: "Saya tertarik pada pekerjaan yang memberikan pelayanan langsung kepada orang lain.",
  },

  // ENTERPRISING (E)
  {
    id: 41,
    type: "E",
    question: "Saya percaya diri memimpin kelompok ketika mengerjakan tugas.",
  },
  {
    id: 42,
    type: "E",
    question: "Saya menikmati menyampaikan ide di depan banyak orang.",
  },
  {
    id: 43,
    type: "E",
    question: "Saya menikmati menyampaikan gagasan dan memengaruhi orang lain secara positif.",
  },
  {
    id: 44,
    type: "E",
    question: "Saya tertarik menjalankan usaha sendiri di masa depan.",
  },
  {
    id: 45,
    type: "E",
    question: "Saya menikmati kegiatan menjual atau menawarkan suatu produk.",
  },
  {
    id: 46,
    type: "E",
    question: "Saya senang membuat target dan berusaha mencapainya.",
  },
  {
    id: 47,
    type: "E",
    question: "Saya nyaman mengambil keputusan dalam suatu kelompok.",
  },
  {
    id: 48,
    type: "E",
    question: "Saya tertarik menjadi ketua organisasi atau pemimpin tim.",
  },
  {
    id: 49,
    type: "E",
    question: "Saya menikmati kegiatan negosiasi untuk mencapai kesepakatan.",
  },
  {
    id: 50,
    type: "E",
    question: "Saya termotivasi ketika berhasil mencapai prestasi yang telah ditargetkan.",
  },

  // CONVENTIONAL (C)
  {
    id: 51,
    type: "C",
    question: "Saya senang menyusun dokumen agar mudah ditemukan kembali.",
  },
  {
    id: 52,
    type: "C",
    question: "Saya menikmati pekerjaan yang mengikuti prosedur yang jelas.",
  },
  {
    id: 53,
    type: "C",
    question: "Saya teliti saat mengerjakan tugas yang melibatkan angka.",
  },
  {
    id: 54,
    type: "C",
    question: "Saya senang membuat jadwal atau daftar pekerjaan.",
  },
  {
    id: 55,
    type: "C",
    question: "Saya merasa nyaman bekerja secara teratur dan sistematis.",
  },
  {
    id: 56,
    type: "C",
    question: "Saya terbiasa memeriksa kembali pekerjaan sebelum dikumpulkan.",
  },
  {
    id: 57,
    type: "C",
    question: "Saya senang mengelompokkan data atau barang sesuai kategorinya.",
  },
  {
    id: 58,
    type: "C",
    question: "Saya menikmati pekerjaan yang membutuhkan pengelolaan data dan ketelitian.",
  },
  {
    id: 59,
    type: "C",
    question: "Saya lebih suka lingkungan kerja yang rapi dan terorganisir.",
  },
  {
    id: 60,
    type: "C",
    question: "Saya merasa puas ketika semua pekerjaan tersusun dengan baik.",
  },
];