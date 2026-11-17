/* =========================================================
   MCG FACADE GLASS & ALUMINIUM — CENTRALIZED DATA REPOSITORY
   ========================================================= */

const MCG_CONFIG = {
  whatsappNumber: "6282111809332",
  companyEmail: "companymulticiptaglass@gmail.com",
  storageKey: "MCG_CUSTOMER_RECORDS_V1",
  itemsPerPage: 10, // Otomatis membuat halaman baru setiap 10 customer terekam
};

const PROJECTS_DATA = [
  {
    id: "graha-krista",
    title: "Graha Krista Aulia — Fatmawati",
    category: "Komersial & Gedung",
    location: "Jl. RS Fatmawati, Jakarta Selatan",
    year: "2024",
    area: "2.450 m² Fasad",
    client: "PT Krista Aulia Propertindo",
    duration: "45 Hari Kerja",
    system:
      "Stick Curtain Wall System + Stopsol Reflective Glass 8mm + ACP PVDF",
    image: "img/grahakrista.jpg",
    fallbackImg:
      "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Rekayasa fasad gedung perkantoran 7 lantai dengan sistem stick curtain wall presisi tinggi, kaca Stopsol Green 8mm tempered untuk reduksi panas matahari (SHGC rendah), dan cladding ACP PVDF 4mm.",
    challenge:
      "Fasad menghadap barat daya dengan paparan radiasi matahari tinggi serta menuntut toleransi kelurusan struktur antar lantai yang ketat di jalan arteri Fatmawati.",
    solution:
      "Menggunakan Stick Curtain Wall MCG-CW100 dengan 3D adjustable bracket hot-dip galvanized dan kaca Stopsol Classic Green 8mm Tempered yang menurunkan beban AC gedung hingga 28%.",
  },
  {
    id: "adidas-margo",
    title: "Adidas Flagship Storefront — Margo City",
    category: "Ritel & Mall",
    location: "Margo City Mall, Depok",
    year: "2024",
    area: "380 m² Storefront",
    client: "PT Mitra Adiperkasa Tbk (MAP)",
    duration: "14 Hari Kerja (Night-Work)",
    system:
      "Jumbo Tempered Clear 12mm + Glass Fin Stabilizer & Patch Fitting Dormakaba",
    image: "img/adidasdepok.jpg",
    fallbackImg:
      "https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Instalasi kaca fasad ritel bentang tinggi 4,8 meter tanpa mullion vertikal menggunakan kaca Jumbo Tempered 12mm Low-Iron untuk visibilitas maksimal produk.",
    challenge:
      "Jam kerja dibatasi pengelola mal hanya pukul 22.00 – 06.00 WIB dengan panel kaca tunggal setinggi 4,8 meter yang rentan defleksi.",
    solution:
      "Pre-drilling lubang patch fitting dengan mesin CNC di workshop dan pemasangan glass fin stabilizer 15mm menggunakan structural sealant transparan Dowsil 795.",
  },
  {
    id: "hunian-bsd",
    title: "Hunian Mewah Modern 3 Lantai — BSD",
    category: "Residensial Mewah",
    location: "Navapark, BSD City, Tangerang",
    year: "2025",
    area: "620 m² Bukaan & Void",
    client: "Private Residence (Arsitek Studio Tropis)",
    duration: "21 Hari Kerja",
    system:
      "YKK AP Nexsta Heavy Duty Sliding + Laminated Tempered 6+6mm + Railing Balkon",
    image: "img/perumahan.JPG",
    fallbackImg:
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Pintu geser aluminium YKK AP seri arsitektural tinggi 3,6 meter dengan kedap suara tinggi, kanopi kaca laminated, dan railing balkon kaca frameless.",
    challenge:
      "Bukaan ruang keluarga lebar 9,2 meter dan tinggi 3,6 meter membutuhkan pintu geser yang ringan didorong namun kedap air hujan angin kencang.",
    solution:
      "Aplikasi sistem YKK AP Nexsta Heavy-Duty Sliding berkapasitas beban 250 kg/daun pintu dengan rel drainase bertingkat dan kaca Laminated 6+6mm anti-UV.",
  },
  {
    id: "solaria-resto",
    title: "Solaria Resto — Partisi Kaca & Aluminium",
    category: "Interior & F&B",
    location: "Jabodetabek (Multi-Outlet)",
    year: "2024",
    area: "210 m² / Outlet",
    client: "PT Sinar Solaria",
    duration: "7 Hari Kerja / Outlet",
    system:
      "Partisi Kaca Tempered 10mm + Pintu Swing Aluminium Powder Coating Black",
    image: "img/solariapdcabe.jpg",
    fallbackImg:
      "https://images.unsplash.com/photo-1555529669-e69e7aa0ba9a?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Pekerjaan partisi kaca tempered 10mm dan kusen aluminium powder coating hitam doff dengan jadwal instalasi cepat mengikuti standar operasional mal.",
    challenge:
      "Target pembukaan gerai yang ketat menuntut fabrikasi paralel dan pemasangan presisi tanpa mengganggu tenant sekitar.",
    solution:
      "Sistem knock-down modular hasil potong CNC dari workshop sehingga pemasangan di lokasi selesai dalam 7 malam.",
  },
  {
    id: "triboon-fasad",
    title: "Lapangan Triboon — Fasad Komersial & Olahraga",
    category: "Komersial & Gedung",
    location: "Jakarta Selatan",
    year: "2024",
    area: "1.680 m² Fasad",
    client: "Triboon Arena",
    duration: "30 Hari Kerja",
    system: "Structural Glazing Curtain Wall + Aluminium YKK AP Powder Coating",
    image: "img/triboon.jpg",
    fallbackImg:
      "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Fasad area komersial dan tribun olahraga menggunakan profil aluminium YKK AP berlapis powder coating tahan cuaca ekstrem.",
    challenge:
      "Area terbuka dengan paparan angin tinggi dan kebutuhan pencahayaan alami maksimal tanpa silau berlebih.",
    solution:
      "Kombinasi mullion reinforced 2.5mm dan kaca tempered safety glass dengan sistem sealant weatherproof Dowsil 791.",
  },
  {
    id: "townhouse-kemang",
    title: "Boutique Townhouse & Skylight — Kemang",
    category: "Residensial Mewah",
    location: "Kemang Selatan, Jakarta Selatan",
    year: "2023",
    area: "440 m² Kaca & Aluminium",
    client: "Kemang Living Development",
    duration: "18 Hari Kerja",
    system:
      "Skylight Laminated Tempered 8+8mm + Shower Box & Casement Alexindo 4 Inch",
    image: "img/kacakamarmandi.jpeg",
    fallbackImg:
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1000&q=80",
    summary:
      "Atap skylight void tangga dengan lapisan PVB anti-UV, shower box kaca tempered 10mm frameless, dan jendela casement kedap air.",
    challenge:
      "Void tangga utama membutuhkan pencahayaan alami namun berisiko bocor dan panas berlebih.",
    solution:
      "Skylight kaca Laminated Tempered 8+8mm dengan kemiringan drainase terukur dan double-sealing struktural.",
  },
];

const TECH_SPECS_MATRIX = [
  {
    category: "Curtain Wall & Fasad",
    system: "Stick System Curtain Wall MCG-CW100",
    profile: "Aluminium Alloy 6063-T5, Tebal 2.0mm – 3.0mm",
    glass: "Tempered / Stopsol / Low-E Double Glazing (8mm – 24mm)",
    finish: "PVDF Coating / Powder Coating AkzoNobel / Anodized",
    windLoad: "Hingga 1.600 Pa (SNI 1727)",
    warranty: "Garansi Kebocoran 3 Tahun",
  },
  {
    category: "Curtain Wall & Fasad",
    system: "Aluminium Composite Panel (ACP) Cladding",
    profile: "Rangka Hollow Galvanis / Aluminium Bracket System",
    glass: "Panel PVDF 4mm (0.30mm / 0.50mm Skin) — Seven / Alucobond",
    finish: "PVDF Exterior Grade (Tahan UV 15 Tahun)",
    windLoad: "Hingga 1.400 Pa",
    warranty: "Garansi Pemasangan 3 Tahun",
  },
  {
    category: "Kusen & Pintu Aluminium",
    system: "Pintu Geser & Lipat Heavy Duty (YKK AP / Nexsta)",
    profile: "YKK AP Arsitektural / Alexindo 4 Inch (1.35mm – 2.0mm)",
    glass: "Clear Tempered 8mm / 10mm / Laminated 5+5mm",
    finish: "Anodized Silver/Black/Brown atau Powder Coating",
    windLoad: "Kedap Air & Suara hingga 32 dB",
    warranty: "Garansi Aksesoris & Rel 2 Tahun",
  },
  {
    category: "Kaca Struktural",
    system: "Kanopi Kaca & Skylight Void",
    profile: "Baja WF / Hollow Galvanis + Spider Fitting SS304",
    glass: "Laminated Tempered 6+6mm atau 8+8mm PVB Clear",
    finish: "Sealant Struktural Dowsil 795 / Sika",
    windLoad: "Beban Mati + Angin & Hujan Lebat",
    warranty: "Garansi Anti-Bocor 3 Tahun",
  },
  {
    category: "Kaca Struktural",
    system: "Railing Balkon & Tangga Kaca Frameless",
    profile: "U-Channel Aluminium Tanam / Spigot SS316",
    glass: "Tempered 12mm atau Laminated Tempered 6+6mm",
    finish: "Handrail Stainless Steel 304 / Kayu Ulin",
    windLoad: "Beban Horizontal 1.0 kN/m (Standar Gedung)",
    warranty: "Garansi Struktur 3 Tahun",
  },
  {
    category: "Ritel & Interior",
    system: "Storefront Mall Jumbo Glass & Shower Box",
    profile: "Patch Fitting Dormakaba / Dekkson + U-Channel",
    glass: "Tempered Clear / Extra Clear 10mm – 12mm",
    finish: "Polished Bevel Edge + Sealant Neutral Anti-Jamur",
    windLoad: "Standar Keamanan Operasional Mall",
    warranty: "Garansi Instalasi 2 Tahun",
  },
];

const CNC_MACHINES = [
  {
    code: "CNC-01",
    name: "Double-Head Precision Miter Saw",
    spec: "Akurasi potong sudut 45° & 90° hingga ±0.05 mm",
    capacity: "240 batang profil / shift",
    desc: "Memastikan sambungan sudut kusen dan mullion curtain wall rapat sempurna tanpa celah.",
  },
  {
    code: "CNC-02",
    name: "3-Axis CNC Profile Machining Center",
    spec: "Lubang drainase, slot lockcase & hinge otomatis",
    capacity: "180 unit pintu/jendela / hari",
    desc: "Mengebor dudukan engsel, mortise lock, dan lubang weep-hole secara terkomputerisasi.",
  },
  {
    code: "CNC-03",
    name: "CNC ACP Grooving & Routing Router",
    spec: "Meja kerja 1.500 x 3.200 mm, V-Groove presisi",
    capacity: "350 m² panel ACP / hari",
    desc: "Penekukan modul panel ACP tajam dan konsisten untuk fasad gedung dan kolom komersial.",
  },
  {
    code: "CNC-04",
    name: "Hydraulic Corner Crimping Machine",
    spec: "Tekanan hidrolik 50 kN untuk penyambungan sudut",
    capacity: "120 frame sudut / hari",
    desc: "Mengunci sudut profil aluminium heavy duty agar kaku menahan beban angin tinggi.",
  },
  {
    code: "CNC-05",
    name: "End-Milling & Mullion Notching Unit",
    spec: "Multi-spindle quick-change tooling",
    capacity: "200 batang transom / hari",
    desc: "Membentuk sambungan transom ke mullion curtain wall agar kedap air (water-tight).",
  },
  {
    code: "QC-06",
    name: "Water-Tightness & Sealant Cure Bay",
    spec: "Area rakit unitized & curing sealant terkontrol",
    capacity: "500 m² area perakitan kering",
    desc: "Pengujian tekanan air dan pengeringan structural sealant sebelum pengiriman ke proyek.",
  },
];

const FAQ_DATA = [
  {
    category: "Teknis & Material",
    q: "Apa perbedaan profil aluminium standar (Alexindo/Inkalum) dengan seri arsitektural (YKK AP)?",
    a: "Profil standar (tebal 1.0–1.35mm) sangat ideal untuk partisi interior, ruko, dan hunian standar. Seri arsitektural YKK AP Nexsta/Madela (tebal 1.5–2.2mm) memiliki sistem EPDM gasket ganda, drainase air tersembunyi, dan ketahanan beban angin tinggi untuk hunian mewah 3 lantai dan gedung bertingkat.",
  },
  {
    category: "Teknis & Material",
    q: "Kapan harus menggunakan kaca Tempered vs kaca Laminated Tempered?",
    a: "Kaca Tempered wajib untuk pintu frameless dan fasad vertikal. Untuk aplikasi overhead seperti kanopi kaca, skylight void, atau railing balkon ketinggian, wajib memakai Kaca Laminated Tempered (6+6mm PVB) agar jika pecah serpihan kaca tetap menempel pada lapisan film PVB.",
  },
  {
    category: "Estimasi & RAB",
    q: "Bagaimana proses pengajuan RAB dan apakah survey lokasi dikenakan biaya?",
    a: "Isi formulir RAB di website ini lalu pilih kirim langsung ke WhatsApp atau Email perusahaan. Tim estimator menyusun BOQ transparan dalam 1x24 jam. Kunjungan survey pengukuran fisik (opname) wilayah Jabodetabek GRATIS.",
  },
  {
    category: "Garansi & Pelaksanaan",
    q: "Berapa lama waktu fabrikasi di workshop dan bagaimana garansi setelah serah terima?",
    a: "Dengan workshop CNC mandiri kami, waktu fabrikasi rata-rata 7–14 hari kerja setelah approval shop drawing. Seluruh pekerjaan mendapatkan Garansi Pemeliharaan & Anti-Bocor hingga 3 Tahun sejak BAST.",
  },
];
