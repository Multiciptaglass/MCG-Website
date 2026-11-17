/* =========================================================
   MCG FACADE GLASS & ALUMINIUM — INTERACTIVE ENGINE & CRM
   ========================================================= */

// 1. INITIALIZE TAILWIND CONFIG ON EVERY PAGE
if (window.tailwind) {
  tailwind.config = {
    darkMode: "class",
    theme: {
      extend: {
        colors: {
          primary: "#003e1c",
          "primary-container": "#1e5631",
          "on-primary": "#ffffff",
          "on-primary-container": "#91cd9f",
          "primary-fixed": "#b3f1c0",
          "primary-fixed-dim": "#98d4a5",
          "on-primary-fixed": "#00210d",
          secondary: "#006c48",
          "secondary-container": "#92f7c3",
          "on-secondary": "#ffffff",
          "on-secondary-fixed": "#002113",
          tertiary: "#253e2e",
          "tertiary-fixed": "#cee9d3",
          surface: "#f9f9ff",
          "surface-container-lowest": "#ffffff",
          "surface-container-low": "#f0f3ff",
          "surface-container": "#e7edff",
          "on-surface": "#111c2d",
          "on-surface-variant": "#404942",
          outline: "#707a71",
          "outline-variant": "#bfc9bf",
          "inverse-on-surface": "#ecf1ff",
          error: "#ba1a1a",
        },
        fontFamily: {
          headline: ["Plus Jakarta Sans", "sans-serif"],
          body: ["Inter", "sans-serif"],
        },
        boxShadow: {
          ambient: "0 8px 30px -6px rgba(17, 28, 45, 0.08)",
          "ambient-lg": "0 20px 40px -15px rgba(17, 28, 45, 0.14)",
        },
      },
    },
  };
}

// 2. MOBILE NAVIGATION DRAWER
function toggleMobileMenu() {
  const drawer = document.getElementById("mobile-drawer");
  const icon = document.getElementById("mobile-menu-icon");
  const btn = document.getElementById("mobile-menu-btn");
  if (!drawer) return;

  const isHidden = drawer.classList.contains("hidden");
  if (isHidden) {
    drawer.classList.remove("hidden");
    if (icon) icon.textContent = "close";
    if (btn) btn.setAttribute("aria-expanded", "true");
  } else {
    drawer.classList.add("hidden");
    if (icon) icon.textContent = "menu";
    if (btn) btn.setAttribute("aria-expanded", "false");
  }
}

// 3. RECORDING SYSTEM (LOCALSTORAGE + PAGINATION PER 10 CUSTOMERS)
function getRecordedCustomers() {
  try {
    const raw = localStorage.getItem(MCG_CONFIG.storageKey);
    return raw ? JSON.parse(raw) : [];
  } catch (e) {
    console.error("Gagal membaca storage:", e);
    return [];
  }
}

function saveCustomerRecord(record) {
  const records = getRecordedCustomers();
  const newEntry = {
    id: "MCG-" + String(records.length + 1).padStart(4, "0"),
    timestamp: new Date().toLocaleString("id-ID", {
      day: "2-digit",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    }),
    ...record,
  };
  records.push(newEntry);
  localStorage.setItem(MCG_CONFIG.storageKey, JSON.stringify(records));
  updateRecordBadges();
  return { entry: newEntry, total: records.length };
}

function updateRecordBadges() {
  const total = getRecordedCustomers().length;
  const totalPages = Math.max(1, Math.ceil(total / MCG_CONFIG.itemsPerPage));
  document.querySelectorAll(".lead-counter-badge").forEach((el) => {
    el.textContent = `${total} Terekam (${totalPages} Hal)`;
  });
}

// 4. FORM SUBMISSION HANDLER (RAB & JADWAL KUNJUNGAN -> WA / EMAIL + SAVE)
function processCustomerForm(event, formType, channel) {
  event.preventDefault();
  const form = event.target;

  // Validasi HTML5 bawaan sebelum kirim
  if (!form.checkValidity()) {
    form.reportValidity();
    return;
  }

  const fd = new FormData(form);
  const nama = (fd.get("nama") || "").trim();
  const telepon = (fd.get("telepon") || "").trim();
  const perusahaan = (fd.get("perusahaan") || "-").trim();
  const kategori = (fd.get("jenis_proyek") || "-").trim();
  const lokasi = (fd.get("lokasi") || "-").trim();
  const volume = (fd.get("volume") || "-").trim();
  const tanggal = (fd.get("tanggal") || "-").trim();
  const jam = (fd.get("jam") || "-").trim();
  const catatan = (fd.get("catatan") || "-").trim();

  // Simpan ke sistem perekaman customer
  const { entry, total } = saveCustomerRecord({
    tipeForm: formType === "rab" ? "Pengajuan RAB" : "Jadwal Kunjungan",
    channelKirim: channel === "whatsapp" ? "WhatsApp" : "Email",
    nama,
    telepon,
    perusahaan,
    kategori,
    lokasi,
    detailTambahan:
      formType === "rab"
        ? `Volume: ${volume} | Catatan: ${catatan}`
        : `Tgl: ${tanggal} (${jam}) | Agenda: ${catatan}`,
  });

  // Susun format pesan profesional
  let subject = "";
  let messageBody = "";

  if (formType === "rab") {
    subject = `[PERMINTAAN RAB - ${entry.id}] ${kategori} - ${nama}`;
    messageBody =
      `Halo Tim Engineering MCG Facade Glass & Aluminium,\n\n` +
      `Saya ingin mengajukan *Estimasi RAB & Jadwal Survey* dengan detail berikut:\n` +
      `• No. Registrasi: *${entry.id}*\n` +
      `• Nama / PIC: *${nama}*\n` +
      `• No. WhatsApp: *${telepon}*\n` +
      `• Perusahaan / Peran: ${perusahaan}\n` +
      `• Kategori Pekerjaan: *${kategori}*\n` +
      `• Lokasi Proyek: *${lokasi}*\n` +
      `• Estimasi Volume: ${volume}\n` +
      `• Catatan Teknis: ${catatan}\n\n` +
      `Mohon informasi estimasi penawaran RAB dan jadwal survey lokasinya. Terima kasih.`;
  } else {
    subject = `[JADWAL KUNJUNGAN - ${entry.id}] ${kategori} - ${nama}`;
    messageBody =
      `Halo Tim MCG Facade Glass & Aluminium,\n\n` +
      `Saya ingin menjadwalkan *Kunjungan Workshop / Studio Konsultasi*:\n` +
      `• No. Registrasi: *${entry.id}*\n` +
      `• Nama Lengkap: *${nama}*\n` +
      `• No. WhatsApp: *${telepon}*\n` +
      `• Instansi / Perusahaan: ${perusahaan}\n` +
      `• Lokasi Tujuan: *${kategori}*\n` +
      `• Tanggal & Jam Kunjungan: *${tanggal} pukul ${jam} WIB*\n` +
      `• Agenda Diskusi: ${catatan}\n\n` +
      `Mohon konfirmasi ketersediaan jadwal tim teknis MCG. Terima kasih.`;
  }

  // Hitung status halaman (setiap 10 orang = 1 halaman baru)
  const currentPageNumber = Math.ceil(total / MCG_CONFIG.itemsPerPage);
  const milestoneNote =
    total % MCG_CONFIG.itemsPerPage === 0
      ? `🎉 Selamat! Data ke-${total} telah tercapai — Halaman Rekap ke-${currentPageNumber} baru saja dibuat otomatis!`
      : `Data terekam sebagai urutan ke-${total} (Tersimpan di Halaman ${currentPageNumber} pada menu Tentang / Rekap Data).`;

  // Tampilkan notifikasi konfirmasi
  showNotificationModal(
    `Data Terekam (${entry.id}) & Mengarahkan ke ${channel === "whatsapp" ? "WhatsApp" : "Email"}`,
    `Terima kasih ${nama}. ${milestoneNote}`,
    channel === "whatsapp" ? "chat" : "mail",
  );

  // Eksekusi pengiriman ke WhatsApp atau Email
  setTimeout(() => {
    if (channel === "whatsapp") {
      const waUrl = `https://wa.me/${MCG_CONFIG.whatsappNumber}?text=${encodeURIComponent(messageBody)}`;
      window.open(waUrl, "_blank", "noopener,noreferrer");
    } else {
      const mailtoUrl = `mailto:${MCG_CONFIG.companyEmail}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(messageBody)}`;
      window.location.href = mailtoUrl;
    }
  }, 650);

  // Refresh tabel rekap jika sedang berada di halaman Tentang.html
  if (typeof renderCustomerRecordsTable === "function") {
    renderCustomerRecordsTable(currentPageNumber);
  }
}

// 5. MODAL NOTIFICATION CONTROLLER
function showNotificationModal(title, message, iconName = "check_circle") {
  const modal = document.getElementById("mcg-modal");
  if (!modal) return;
  document.getElementById("modal-title").textContent = title;
  document.getElementById("modal-body").textContent = message;
  document.getElementById("modal-icon").textContent = iconName;
  modal.classList.remove("hidden");
  modal.classList.add("flex");
}

function closeNotificationModal() {
  const modal = document.getElementById("mcg-modal");
  if (!modal) return;
  modal.classList.add("hidden");
  modal.classList.remove("flex");
}

// 6. PAGINATION ENGINE FOR RECORDED CUSTOMERS (10 RECORDS = 1 PAGE)
let activeRecordPage = 1;

function renderCustomerRecordsTable(targetPage = null) {
  const container = document.getElementById("customer-records-container");
  if (!container) return;

  const records = getRecordedCustomers();
  const totalRecords = records.length;
  const perPage = MCG_CONFIG.itemsPerPage; // 10 orang per halaman
  const totalPages = Math.max(1, Math.ceil(totalRecords / perPage));

  if (targetPage !== null) {
    activeRecordPage = Math.min(Math.max(1, targetPage), totalPages);
  } else if (activeRecordPage > totalPages) {
    activeRecordPage = totalPages;
  }

  const startIndex = (activeRecordPage - 1) * perPage;
  const endIndex = startIndex + perPage;
  const pageItems = records.slice(startIndex, endIndex);

  // Render Pagination Buttons (Page 1, Page 2, dst. otomatis muncul setiap kelipatan 10)
  let paginationButtonsHtml = "";
  for (let p = 1; p <= totalPages; p++) {
    const startNum = (p - 1) * perPage + 1;
    const endNum = p * perPage;
    const isActive = p === activeRecordPage;
    paginationButtonsHtml += `
      <button
        onclick="renderCustomerRecordsTable(${p})"
        class="px-3.5 py-2 rounded-md text-xs font-bold transition-all min-h-[38px] ${
          isActive
            ? "bg-primary text-on-primary shadow-sm"
            : "bg-surface-container-lowest text-primary border border-outline-variant/60 hover:bg-surface-container-low"
        }"
      >
        Halaman ${p} <span class="font-normal opacity-80">(#${startNum}–#${endNum})</span>
      </button>
    `;
  }

  container.innerHTML = `
    <div class="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-5">
      <div>
        <div class="flex items-center gap-2">
          <span class="px-2.5 py-1 rounded bg-secondary-container text-on-secondary-fixed text-xs font-bold">
            Total Terekam: ${totalRecords} Customer
          </span>
          <span class="px-2.5 py-1 rounded bg-primary text-secondary-fixed text-xs font-bold">
            Total Halaman: ${totalPages} Page (10 Orang / Page)
          </span>
        </div>
        <p class="text-xs text-on-surface-variant mt-1.5">
          Setiap 10 pengisian formulir RAB atau Jadwal Kunjungan akan otomatis membentuk halaman arsip baru.
        </p>
      </div>

      <div class="flex flex-wrap items-center gap-2">
        
        <button onclick="exportRecordsCSV()" class="px-3.5 py-2 rounded-md bg-secondary hover:bg-primary text-white text-xs font-semibold flex items-center gap-1.5 min-h-[38px]">
          <span class="material-symbols-outlined text-base">download</span>
          <span>Export CSV</span>
        </button>
      </div>
    </div>

    <!-- Navigasi Halaman (Pages) -->
    <div class="flex flex-wrap items-center gap-2 mb-4 pb-3 border-b border-outline-variant/30">
      <span class="text-xs font-semibold text-on-surface-variant mr-1">Pilih Halaman Arsip:</span>
      ${paginationButtonsHtml}
    </div>

    <!-- Tabel Data Customer -->
    <div class="bg-surface-container-lowest rounded-lg border border-outline-variant/40 shadow-ambient overflow-hidden">
      <div class="overflow-x-auto table-scroll-container">
        <table class="w-full text-left border-collapse min-w-[820px]">
          <thead>
            <tr class="bg-primary text-on-primary text-xs uppercase tracking-wider">
              <th class="py-3 px-4 font-semibold">No / ID</th>
              <th class="py-3 px-4 font-semibold">Waktu Input</th>
              <th class="py-3 px-4 font-semibold">Jenis Form</th>
              <th class="py-3 px-4 font-semibold">Nama Customer &amp; Kontak</th>
              <th class="py-3 px-4 font-semibold">Kebutuhan / Tujuan</th>
              <th class="py-3 px-4 font-semibold">Detail &amp; Jalur Kirim</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-outline-variant/30 text-xs sm:text-sm">
            ${
              pageItems.length === 0
                ? `<tr>
                    <td colspan="6" class="py-10 px-4 text-center text-on-surface-variant">
                      Belum ada data customer terekam. Silakan isi Formulir RAB di Beranda atau Formulir Kunjungan di Workshop, atau klik tombol <strong>"+ Simulasi 1 Data Test"</strong> di atas.
                    </td>
                  </tr>`
                : pageItems
                    .map(
                      (item, idx) => `
                  <tr class="hover:bg-surface-container-low/60">
                    <td class="py-3.5 px-4 font-headline font-bold text-primary">
                      #${startIndex + idx + 1} <span class="block text-[11px] font-normal text-on-surface-variant">${item.id}</span>
                    </td>
                    <td class="py-3.5 px-4 text-xs text-on-surface-variant">${item.timestamp}</td>
                    <td class="py-3.5 px-4">
                      <span class="px-2.5 py-1 rounded text-[11px] font-bold ${
                        item.tipeForm === "Pengajuan RAB"
                          ? "bg-secondary-container text-on-secondary-fixed"
                          : "bg-primary-fixed text-on-primary-fixed"
                      }">${item.tipeForm}</span>
                    </td>
                    <td class="py-3.5 px-4">
                      <div class="font-bold text-on-surface">${item.nama}</div>
                      <div class="text-xs text-secondary font-medium">${item.telepon} • ${item.perusahaan}</div>
                    </td>
                    <td class="py-3.5 px-4">
                      <div class="font-semibold text-primary">${item.kategori}</div>
                      <div class="text-xs text-on-surface-variant">${item.lokasi}</div>
                    </td>
                    <td class="py-3.5 px-4">
                      <div class="text-xs text-on-surface mb-1">${item.detailTambahan}</div>
                      <span class="inline-block text-[10px] font-bold uppercase px-2 py-0.5 rounded bg-surface-container text-primary">
                        Terkirim via ${item.channelKirim}
                      </span>
                    </td>
                  </tr>
                `,
                    )
                    .join("")
            }
          </tbody>
        </table>
      </div>
    </div>
  `;
}

// Helper untuk simulasi cepat agar user dapat menguji pembuatan Page 2 setelah 10 data
function simulateDemoLead() {
  const count = getRecordedCustomers().length + 1;
  const sampleNames = [
    "Ir. Hendra Wijaya",
    "PT Bangun Persada",
    "Arsitek Studio Karsa",
    "Budi Santoso",
    "CV Graha Mandiri",
    "Rina Kusuma",
    "PT Mitra Properti",
    "Andi Pratama",
    "Dian Permata",
    "Surya Kencana",
  ];
  const sampleName =
    sampleNames[(count - 1) % sampleNames.length] + ` (${count})`;
  const { total } = saveCustomerRecord({
    tipeForm: count % 2 === 0 ? "Jadwal Kunjungan" : "Pengajuan RAB",
    channelKirim: count % 2 === 0 ? "WhatsApp" : "Email",
    nama: sampleName,
    telepon: "0812-8899-" + String(1000 + count),
    perusahaan: "Klien Korporat / Residensial",
    kategori:
      count % 2 === 0 ? "Workshop Cipete Selatan" : "Curtain Wall & Fasad ACP",
    lokasi: "Jakarta Selatan / BSD",
    detailTambahan: "Simulasi perekaman otomatis sistem MCG",
  });
  const newPage = Math.ceil(total / MCG_CONFIG.itemsPerPage);
  renderCustomerRecordsTable(newPage);
}

// Export ke CSV untuk dibuka di Excel
function exportRecordsCSV() {
  const records = getRecordedCustomers();
  if (records.length === 0) {
    showNotificationModal(
      "Data Kosong",
      "Belum ada data customer yang terekam untuk diekspor.",
      "info",
    );
    return;
  }
  const headers = [
    "ID",
    "Waktu",
    "Tipe Form",
    "Nama",
    "Telepon",
    "Perusahaan",
    "Kategori",
    "Lokasi",
    "Detail",
    "Channel",
  ];
  const rows = records.map((r) => [
    r.id,
    r.timestamp,
    r.tipeForm,
    r.nama,
    r.telepon,
    r.perusahaan,
    r.kategori,
    r.lokasi,
    r.detailTambahan,
    r.channelKirim,
  ]);
  const csvContent =
    "data:text/csv;charset=utf-8," +
    [
      headers.join(","),
      ...rows.map((e) =>
        e.map((v) => `"${String(v).replace(/"/g, '""')}"`).join(","),
      ),
    ].join("\n");
  const encodedUri = encodeURI(csvContent);
  const link = document.createElement("a");
  link.setAttribute("href", encodedUri);
  link.setAttribute(
    "download",
    `Rekap_Customer_MCG_${new Date().toISOString().slice(0, 10)}.csv`,
  );
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

// Init badge saat halaman dimuat
document.addEventListener("DOMContentLoaded", () => {
  updateRecordBadges();
  if (document.getElementById("customer-records-container")) {
    renderCustomerRecordsTable(1);
  }
});
