export type RiasecCode = "R" | "I" | "A" | "S" | "E" | "C";

export type RiasecProfile = {
  code: RiasecCode;
  name: string;
  title: string;
  motto: string;
  color: string;

  description: string;

  strengths: string[];
  improvements: string[];

  workEnvironments: string[];
  careers: string[];
  majors: string[];
};

export const riasecProfiles: Record<RiasecCode, RiasecProfile> = {

  R: {
    code: "R",
    name: "Realistic",
    title: "Praktis dan Terampil",
    motto: "Belajar dengan melakukan.",

    color: "#F97316",

    description:
      "Anda lebih menyukai kegiatan yang bersifat praktik, menggunakan alat, mengoperasikan mesin, serta menghasilkan sesuatu yang nyata. Anda cenderung belajar lebih cepat melalui pengalaman langsung dibandingkan hanya mempelajari teori. Tantangan yang melibatkan keterampilan teknis, ketelitian dalam bekerja, dan penyelesaian masalah secara langsung membuat Anda lebih bersemangat.",

    strengths: [
      "Terampil dalam pekerjaan praktik.",
      "Mudah memahami penggunaan alat dan mesin.",
      "Menyukai tantangan teknis.",
      "Bekerja secara nyata dan produktif.",
      "Mandiri dalam menyelesaikan tugas."
    ],

    improvements: [
      "Meningkatkan kemampuan komunikasi.",
      "Lebih terbuka terhadap ide-ide baru.",
      "Mengembangkan kemampuan presentasi.",
      "Melatih kerja sama lintas bidang.",
      "Meningkatkan kemampuan kepemimpinan."
    ],

    workEnvironments: [
      "Workshop",
      "Bengkel",
      "Pabrik",
      "Industri Manufaktur",
      "Lapangan",
      "Proyek Konstruksi",
      "Laboratorium Teknik",
      "Perusahaan Otomotif",
      "Instalasi Listrik",
      "Perusahaan Teknologi"
    ],

    careers: [
      "Teknisi Mesin",
      "Teknisi Otomotif",
      "Teknisi Listrik",
      "Mechanical Engineer",
      "Civil Engineer",
      "Welder",
      "Operator Produksi",
      "Maintenance Engineer",
      "Surveyor",
      "Quality Control"
    ],

    majors: [
      "Teknik Mesin",
      "Teknik Elektro",
      "Teknik Sipil",
      "Teknik Industri",
      "Teknik Otomotif",
      "Teknik Perkapalan",
      "Teknik Penerbangan",
      "Teknik Pertambangan",
      "Teknik Metalurgi",
      "Teknik Energi"
    ]
  },

  I: {
    code: "I",
    name: "Investigative",
    title: "Analitis dan Ingin Tahu",
    motto: "Memahami sebelum memutuskan.",

    color: "#2563EB",

    description:
      "Anda senang berpikir secara logis, menganalisis informasi, mencari penyebab suatu masalah, dan menemukan solusi berdasarkan data. Rasa ingin tahu yang tinggi membuat Anda menikmati kegiatan penelitian, eksperimen, maupun mempelajari bagaimana suatu sistem bekerja. Anda cenderung mengambil keputusan setelah memahami fakta yang ada.",

    strengths: [
      "Berpikir logis.",
      "Analitis.",
      "Rasa ingin tahu tinggi.",
      "Cepat memahami konsep baru.",
      "Menyukai pemecahan masalah."
    ],

    improvements: [
      "Lebih percaya diri saat menyampaikan pendapat.",
      "Meningkatkan kemampuan komunikasi.",
      "Mengurangi kecenderungan overthinking.",
      "Melatih kemampuan bekerja dalam tim.",
      "Lebih cepat mengambil keputusan ketika diperlukan."
    ],

    workEnvironments: [
      "Laboratorium",
      "Pusat Penelitian",
      "Universitas",
      "Rumah Sakit",
      "Perusahaan Teknologi",
      "Instansi Pemerintah",
      "Startup Teknologi",
      "Divisi Riset",
      "Perusahaan Farmasi",
      "Data Center"
    ],

    careers: [
      "Data Analyst",
      "Data Scientist",
      "Programmer",
      "Software Engineer",
      "Dokter",
      "Apoteker",
      "Peneliti",
      "Analis Laboratorium",
      "Cyber Security Analyst",
      "AI Engineer"
    ],

    majors: [
      "Informatika",
      "Sistem Informasi",
      "Ilmu Komputer",
      "Statistika",
      "Matematika",
      "Fisika",
      "Kimia",
      "Biologi",
      "Kedokteran",
      "Farmasi"
    ]
  },
  
  A: {
    code: "A",
    name: "Artistic",
    title: "Kreatif dan Ekspresif",
    motto: "Menciptakan sesuatu yang bermakna.",

    color: "#9333EA",

    description:
      "Anda memiliki kecenderungan untuk mengekspresikan ide melalui kreativitas, imajinasi, dan karya. Anda menikmati kegiatan yang memberikan ruang untuk menciptakan sesuatu dengan cara sendiri. Anda lebih nyaman pada lingkungan yang fleksibel, terbuka terhadap ide baru, dan menghargai keunikan setiap individu.",

    strengths: [
      "Kreatif dalam menghasilkan ide.",
      "Memiliki imajinasi yang kuat.",
      "Mampu melihat sesuatu dari sudut pandang berbeda.",
      "Menyukai inovasi dan perubahan.",
      "Mampu mengekspresikan gagasan melalui karya."
    ],

    improvements: [
      "Meningkatkan kemampuan mengatur waktu.",
      "Melatih konsistensi dalam menyelesaikan pekerjaan.",
      "Mengembangkan kemampuan bekerja dengan aturan tertentu.",
      "Meningkatkan kemampuan berpikir sistematis.",
      "Belajar menerima kritik terhadap karya."
    ],

    workEnvironments: [
      "Studio Kreatif",
      "Agensi Digital",
      "Industri Kreatif",
      "Media",
      "Perusahaan Periklanan",
      "Production House",
      "Bidang Desain",
      "Industri Fashion",
      "Perusahaan Teknologi Kreatif",
      "Lingkungan Kerja Inovatif"
    ],

    careers: [
      "Graphic Designer",
      "UI/UX Designer",
      "Content Creator",
      "Animator",
      "Illustrator",
      "Video Editor",
      "Fotografer",
      "Creative Director",
      "Interior Designer",
      "Social Media Specialist"
    ],

    majors: [
      "Desain Komunikasi Visual",
      "Desain Grafis",
      "Multimedia",
      "Animasi",
      "Seni Rupa",
      "Film dan Televisi",
      "Fashion Design",
      "Arsitektur",
      "Desain Produk",
      "Periklanan"
    ]
  },


  S: {
    code: "S",
    name: "Social",
    title: "Peduli dan Mengembangkan Orang Lain",
    motto: "Bertumbuh bersama orang lain.",

    color: "#16A34A",

    description:
      "Anda menikmati kegiatan yang berhubungan dengan orang lain, seperti membantu, membimbing, mengajar, dan memberikan pelayanan. Anda merasa puas ketika dapat memberikan manfaat bagi perkembangan orang lain. Anda cenderung nyaman bekerja dalam lingkungan yang membutuhkan komunikasi, kerja sama, dan empati.",

    strengths: [
      "Mampu memahami kebutuhan orang lain.",
      "Komunikatif.",
      "Mudah bekerja sama.",
      "Peduli terhadap perkembangan orang lain.",
      "Mampu menjadi pendengar yang baik."
    ],

    improvements: [
      "Belajar menetapkan batasan dalam membantu orang lain.",
      "Meningkatkan kemampuan mengambil keputusan.",
      "Mengembangkan keterampilan administrasi.",
      "Melatih kemampuan bekerja mandiri.",
      "Meningkatkan kepercayaan diri."
    ],

    workEnvironments: [
      "Sekolah",
      "Lembaga Pendidikan",
      "Rumah Sakit",
      "Organisasi Sosial",
      "Perusahaan Pelayanan",
      "Konsultan",
      "Instansi Pemerintah",
      "Lembaga Pelatihan",
      "Komunitas Masyarakat",
      "Bidang Kesehatan"
    ],

    careers: [
      "Guru",
      "Konselor",
      "Psikolog",
      "Perawat",
      "Tenaga Kesehatan",
      "Trainer",
      "HR Specialist",
      "Social Worker",
      "Customer Service Specialist",
      "Community Development Officer"
    ],

    majors: [
      "Pendidikan",
      "Bimbingan dan Konseling",
      "Psikologi",
      "Ilmu Keperawatan",
      "Kesehatan Masyarakat",
      "Manajemen SDM",
      "Sosiologi",
      "Ilmu Komunikasi",
      "Pekerjaan Sosial",
      "Administrasi Publik"
    ]
  },
  
  E: {
    code: "E",
    name: "Enterprising",
    title: "Pemimpin dan Penggerak",
    motto: "Berani mengambil peluang dan memimpin perubahan.",

    color: "#DC2626",

    description:
      "Anda memiliki kecenderungan untuk memimpin, memengaruhi, mengambil keputusan, dan mencapai tujuan tertentu. Anda menikmati kegiatan yang melibatkan komunikasi, negosiasi, strategi, serta menggerakkan orang lain untuk mencapai hasil. Anda tertarik pada dunia bisnis, organisasi, dan aktivitas yang membutuhkan keberanian mengambil peluang.",

    strengths: [
      "Percaya diri dalam mengambil keputusan.",
      "Memiliki jiwa kepemimpinan.",
      "Mampu memengaruhi dan meyakinkan orang lain.",
      "Berorientasi pada tujuan.",
      "Berani mengambil peluang baru."
    ],

    improvements: [
      "Meningkatkan kemampuan mendengarkan orang lain.",
      "Belajar mempertimbangkan risiko sebelum bertindak.",
      "Mengembangkan kemampuan analisis data.",
      "Melatih kesabaran dalam proses mencapai tujuan.",
      "Meningkatkan kemampuan kerja sama."
    ],

    workEnvironments: [
      "Perusahaan Bisnis",
      "Startup",
      "Perusahaan Penjualan",
      "Manajemen Perusahaan",
      "Organisasi Profesional",
      "Bidang Marketing",
      "Bidang Keuangan",
      "Perusahaan Konsultan",
      "Lingkungan Kepemimpinan",
      "Dunia Wirausaha"
    ],

    careers: [
      "Entrepreneur",
      "Business Owner",
      "Marketing Manager",
      "Sales Manager",
      "Project Manager",
      "Business Consultant",
      "Public Relations Specialist",
      "Digital Marketer",
      "Account Executive",
      "Business Development"
    ],

    majors: [
      "Manajemen",
      "Bisnis Digital",
      "Kewirausahaan",
      "Administrasi Bisnis",
      "Marketing",
      "Ilmu Komunikasi",
      "Ekonomi",
      "Akuntansi",
      "Manajemen Industri",
      "Hubungan Internasional"
    ]
  },


  C: {
    code: "C",
    name: "Conventional",
    title: "Teratur dan Teliti",
    motto: "Ketelitian menghasilkan kualitas.",

    color: "#0F766E",

    description:
      "Anda menyukai pekerjaan yang membutuhkan keteraturan, ketelitian, pengelolaan data, dan mengikuti prosedur yang jelas. Anda merasa nyaman ketika pekerjaan tersusun rapi dan memiliki sistem yang terorganisir. Anda cenderung unggul dalam aktivitas yang membutuhkan akurasi, konsistensi, dan tanggung jawab.",

    strengths: [
      "Teliti dalam bekerja.",
      "Mampu mengelola data dengan baik.",
      "Terorganisir.",
      "Konsisten dalam menyelesaikan tugas.",
      "Memiliki perhatian terhadap detail."
    ],

    improvements: [
      "Lebih terbuka terhadap perubahan.",
      "Mengembangkan kreativitas.",
      "Meningkatkan keberanian mengambil keputusan.",
      "Melatih fleksibilitas dalam bekerja.",
      "Mengembangkan kemampuan komunikasi."
    ],

    workEnvironments: [
      "Perkantoran",
      "Administrasi Perusahaan",
      "Perbankan",
      "Keuangan",
      "Akuntansi",
      "Instansi Pemerintah",
      "Manajemen Data",
      "Perusahaan Logistik",
      "Bagian Dokumentasi",
      "Perusahaan Manufaktur"
    ],

    careers: [
      "Accountant",
      "Administrasi Perkantoran",
      "Financial Analyst",
      "Data Administrator",
      "Auditor",
      "Staff Keuangan",
      "Quality Assurance",
      "Inventory Specialist",
      "Office Manager",
      "Database Administrator"
    ],

    majors: [
      "Akuntansi",
      "Manajemen",
      "Administrasi Bisnis",
      "Administrasi Perkantoran",
      "Keuangan",
      "Sistem Informasi",
      "Manajemen Logistik",
      "Perpajakan",
      "Ekonomi",
      "Statistika"
    ]
  }

};