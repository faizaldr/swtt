# Lab 0: Analisis FRD/SRS dan Identifikasi Risiko — Aplikasi Kepegawaian PT INIX

---

## Informasi Lab

| Atribut | Keterangan |
|---|---|
| **Mata Pelatihan** | Software Quality Assurance & Testing Foundation |
| **Fase / Modul** | Fase 0: Pengantar & Fondasi Kebutuhan Perangkat Lunak |
| **Durasi** | 30 Menit |
| **Target Aplikasi** | Aplikasi Kepegawaian PT INIX (Node.js, Express, Sequelize, React, MySQL) |
| **Tools Praktik** | Spreadsheet (Google Sheets / Microsoft Excel / LibreOffice Calc) |
| **Format Dokumen** | Panduan Praktik Hands-On Mandiri & Handout Peserta |

### Tujuan Pembelajaran (*Learning Outcomes*)
Setelah menyelesaikan lab ini, peserta diharapkan mampu:
1. **Menganalisis Dokumen Kebutuhan:** Mengidentifikasi dan membedakan kebutuhan fungsional (*Functional Requirements*), non-fungsional (*Non-Functional Requirements*), dan *User Stories* yang bersifat *testable* (dapat diuji) maupun yang ambigu.
2. **Menyusun Matriks Risiko (*Risk Assessment Matrix*):** Menilai kemungkinan terjadinya kegagalan (*Likelihood*) dan dampak kerugian (*Impact*) pada setiap modul fitur untuk menghitung *Risk Score*.
3. **Menentukan Prioritas Pengujian (*Risk-Based Testing*):** Menetapkan urutan prioritas eksekusi pengujian berdasarkan tingkat risiko kritis guna mengoptimalkan alokasi waktu dan sumber daya QA.

### Prasyarat
- Peserta telah menyimak pengantar SDLC, STLC, dan konsep dasar pengujian berbasis risiko (*Risk-Based Testing*).
- Memiliki akses membaca dokumen referensi `STUDI_KASUS_INIX.md`.

---

## Bagian 1: Persiapan Lingkungan Kerja (Estimasi: 5 Menit)

### 1.1 Konsep Dasar Analisis Risiko QA
> **Definisi:**  
> **Analisis Risiko dalam QA** adalah proses mengidentifikasi area sistem yang paling rentan mengalami kegagalan dan menimbulkan dampak paling fatal terhadap bisnis apabila gagal beroperasi. Tujuannya adalah memprioritaskan *effort* pengujian agar fitur berisiko tinggi diverifikasi lebih dini dan mendalam.

### 1.2 Langkah Kerja
1. Buka aplikasi spreadsheet (Google Sheets atau Microsoft Excel).
2. Buat file baru dan simpan dengan format nama:  
   `Lab0_Analisis_Risiko_[NAMA_PESERTA]`
3. Buat 2 lembar kerja (*sheet*):
   - **Sheet 1:** Beri nama `Testable_Requirements`
   - **Sheet 2:** Beri nama `Risk_Assessment`
4. Buka file referensi `STUDI_KASUS_INIX.md` sebagai acuan spesifikasi sistem.

---

## Bagian 2: Identifikasi Testable Requirements (Estimasi: 10 Menit)

Pada lembar kerja **Sheet 1 (`Testable_Requirements`)**, analisis seluruh item kebutuhan (7 FR, 4 NFR, dan 5 User Stories) untuk menentukan apakah masing-masing kebutuhan sudah spesifik dan dapat diuji.

### 2.1 Format Header Tabel Sheet 1

| Kolom | Nama Kolom | Keterangan |
|---|---|---|
| A | **No** | Nomor urut (1 s.d. 16) |
| B | **Req ID** | Kode identitas kebutuhan (FR-xxx / NFR-xxx / US-xxx) |
| C | **Deskripsi Kebutuhan** | Ringkasan pernyataan kebutuhan dari SRS/FRD |
| D | **Modul** | Autentikasi / Data Pegawai / Pengajuan Cuti / Sistem |
| E | **Testable?** | Status pengujian: `Ya` atau `Tidak` |
| F | **Alasan / Catatan QA** | Penjelasan mengapa testable atau kriteria yang perlu diperjelas |

### 2.2 Panduan Analisis Kebutuhan
- **Ciri Kebutuhan Testable:** Memiliki kriteria keberhasilan (*acceptance criteria*) yang jelas, metrik terukur, perilaku input/output yang deterministik, dan tidak menimbulkan interpretasi ganda.
- **Ciri Kebutuhan Ambigu / Tidak Testable:** Bersifat kualitatif tanpa parameter acuan (misal: "tampilan harus menarik", "sistem harus cepat" tanpa batasan detik), atau tidak menyebutkan aturan validasi kegagalan secara spesifik.

### 2.3 Contoh Pengerjaan Sheet 1

```text
Contoh 1 (Testable):
No: 1 | Req ID: FR-001 | Deskripsi: Login dengan username/password, return JWT access token | Modul: Autentikasi | Testable?: Ya | Alasan: Input (username, password) dan output (JWT access token) jelas dan dapat diverifikasi via API/UI.

Contoh 2 (Perlu Klarifikasi/Ambigu):
No: 10 | Req ID: NFR-002 | Deskripsi: Terlindung dari SQL Injection dan XSS | Modul: Keamanan | Testable?: Ya | Alasan: Testable melalui security vulnerability scan (OWASP ZAP) dan injection payload testing, namun membutuhkan daftar standar kepatuhan resmi (misal: OWASP Top 10 A03).
```

### 2.4 Tugas Peserta (Sheet 1)
Lengkapi tabel untuk seluruh 16 kebutuhan berikut:
1. **FR-001:** Login dengan username/password untuk memperoleh access token JWT
2. **FR-002:** Sistem menampilkan error jika kredensial salah atau akun nonaktif
3. **FR-003:** Admin dan HR dapat melihat daftar, menambah, mengubah, dan menghapus pegawai
4. **FR-004:** Validasi NIP unik dan field wajib (Nama, Jabatan) tidak boleh kosong
5. **FR-005:** Pegawai mengajukan cuti (tgl mulai, selesai, alasan) dengan batas kuota tahunan 12 hari
6. **FR-006:** Manajer dapat menyetujui (*Approve*) atau menolak (*Reject*) cuti
7. **FR-007:** Pembatasan akses halaman & endpoint via RBAC (Admin, HR, Manajer, Pegawai)
8. **NFR-001:** Response time login dan data pegawai ≤ 500ms pada 50 concurrent users
9. **NFR-002:** Form input dan API terlindung dari kerentanan SQL Injection & XSS
10. **NFR-003:** Kompatibilitas cross-browser (Chrome, Edge, Firefox)
11. **NFR-004:** Password tersimpan dalam hash aman (bcrypt); JWT memiliki masa kedaluwarsa
12. **US-001:** As a User, I want to login with my credentials...
13. **US-002:** As an HR/Admin, I want to add a new employee...
14. **US-003:** As an HR/Admin, I want to edit and delete employee records...
15. **US-004:** As a Pegawai, I want to submit a leave request (maksimal 12 hari/tahun)...
16. **US-005:** As a Manajer, I want to approve or reject leave requests...

---

## Bagian 3: Risk Assessment Matrix (Estimasi: 10 Menit)

Pada lembar kerja **Sheet 2 (`Risk_Assessment`)**, petakan potensi risiko kegagalan fungsi atau keamanan dari setiap modul PT INIX.

### 3.1 Format Header Tabel Sheet 2

| Kolom | Nama Kolom | Keterangan |
|---|---|---|
| A | **No** | Nomor urut risiko |
| B | **Modul** | Autentikasi / Data Pegawai / Pengajuan Cuti |
| C | **Skenario Risiko (Potensi Masalah)** | Peristiwa kegagalan yang dapat terjadi |
| D | **Likelihood (1–3)** | Peluang terjadinya masalah |
| E | **Impact (1–3)** | Dampak kerugian terhadap sistem/bisnis |
| F | **Risk Score (L × I)** | Nilai risiko = Likelihood × Impact (rentang 1 s.d. 9) |
| G | **Prioritas Testing** | Kategori prioritas: `High`, `Medium`, atau `Low` |
| H | **Mitigasi Pengujian** | Skenario pengujian utama untuk memitigasi risiko |

### 3.2 Skala Penilaian Risiko

#### 1. Likelihood (Peluang Kejadian)
- **1 (Rendah):** Alur standar, logika sederhana, jarang diakses bersamaan atau validasi telah dibatasi ketat oleh framework.
- **2 (Sedang):** Memiliki logika bisnis bercabang, pengolahan input pengguna, atau pengubahan status data.
- **3 (Tinggi):** Mengandalkan token/sesi, perhitungan tanggal lintas tahun, manipulasi data masal, atau rawan beban tinggi.

#### 2. Impact (Tingkat Keparahan Dampak)
- **1 (Rendah / Minor):** Gangguan visual antarmuka kosmetik, label salah ketik, tidak menghalangi aliran kerja utama.
- **2 (Sedang / Moderat):** Suatu fitur terganggu sebagian, kesalahan pesan validasi, namun ada *workaround* alternatif.
- **3 (Tinggi / Kritis):** Kebocoran keamanan data pribadi pegawai, pembobolan otorisasi role, kehilangan integritas database, atau korupsi kuota cuti.

#### 3. Risk Score & Prioritas Pengujian
$$\text{Risk Score} = \text{Likelihood} \times \text{Impact}$$

- **High Priority (Score 6 – 9):** Wajib diuji paling awal (*must test thoroughly*), otomatisasi mutlak, zero tolerance terhadap bug.
- **Medium Priority (Score 3 – 5):** Diuji pada fase fungsional utama setelah fitur kritis stabil.
- **Low Priority (Score 1 – 2):** Diuji pada tahap akhir jika waktu pengujian masih tersedia.

### 3.3 Contoh Pengerjaan Sheet 2

```text
Contoh 1 (Modul Autentikasi):
No: 1 | Modul: Autentikasi | Risiko: Token JWT tidak kedaluwarsa setelah masa berlaku habis, memungkinkan session hijacking | Likelihood: 2 | Impact: 3 | Risk Score: 6 | Prioritas: High | Mitigasi: Uji masa aktif token JWT via Postman dan Playwright API test dengan mock expired token.

Contoh 2 (Modul Pengajuan Cuti):
No: 2 | Modul: Pengajuan Cuti | Risiko: Pegawai mengajukan cuti melebihi kuota 12 hari atau tanggal selesai lebih awal dari tanggal mulai | Likelihood: 3 | Impact: 2 | Risk Score: 6 | Prioritas: High | Mitigasi: Positive & negative boundary test validasi durasi cuti dan kalkulasi kuota tahunan.
```

---

## Bagian 4: Refleksi dan Diskusi Analisis (Estimasi: 5 Menit)

Jawab 3 pertanyaan evaluasi berikut pada bagian bawah Sheet 2 atau dokumen catatan Anda:

1. **Pertanyaan 1 (Distribusi Risiko):**  
   *Modul manakah yang memiliki rata-rata Risk Score tertinggi? Jelaskan argumen teknis Anda mengapa modul tersebut paling rawan!*
2. **Pertanyaan 2 (Alokasi Sumber Daya Testing):**  
   *Apabila waktu pengujian terpotong menjadi hanya 1 hari (dari rencana 4 hari), modul dan skenario apa yang wajib diselesaikan terlebih dahulu?*
3. **Pertanyaan 3 (Klarifikasi Requirement Ambigu):**  
   *Dari seluruh FR/NFR yang telah dianalisis, kebutuhan mana yang paling membutuhkan konfirmasi lanjutan kepada Business Analyst (BA) atau Backend Developer? Pertanyaan teknis apa yang akan Anda ajukan?*

---

## Kriteria Keberhasilan Lab (Checklist Evaluasi)

Beri tanda centang $(\checkmark)$ pada setiap kriteria yang telah Anda penuhi:
- [ ] Sheet 1 memuat seluruh 16 kebutuhan (7 FR, 4 NFR, 5 User Stories) dari studi kasus PT INIX.
- [ ] Setiap baris pada Sheet 1 telah dievaluasi status *testability*-nya disertai alasan teknis yang logis.
- [ ] Sheet 2 memuat minimal 8 skenario risiko yang mencakup ketiga modul aplikasi (Autentikasi, Data Pegawai, Pengajuan Cuti).
- [ ] Nilai *Likelihood*, *Impact*, *Risk Score*, dan *Prioritas Testing* dihitung secara konsisten menggunakan formula matematis.
- [ ] Terdapat skenario mitigasi pengujian untuk setiap risiko prioritas *High*.
- [ ] Seluruh pertanyaan refleksi pada Bagian 4 telah dijawab dengan argumentasi analitis.

---

<details>
<summary><strong>KUNCI JAWABAN & PANDUAN INSTRUKTUR (Reference Answer) — Klik untuk Membuka</strong></summary>

### A. Kunci Jawaban Sheet 1: Testable Requirements (16 Kebutuhan Lengkap)

| No | Req ID | Deskripsi Kebutuhan | Modul | Testable? | Alasan & Catatan Analisis QA |
|---|---|---|---|:---:|---|
| 1 | FR-001 | Login username/password return JWT access token | Autentikasi | **Ya** | Input jelas (username, password), expected output jelas berupa response JSON status 200 `{ access_token, refresh_token, user }`. |
| 2 | FR-002 | Error message jika username/password salah atau nonaktif | Autentikasi | **Ya** | Verifikasi HTTP 401 (kredensial salah) dan HTTP 403 (akun nonaktif) beserta elemen teks alert pada antarmuka. |
| 3 | FR-003 | Admin/HR melakukan CRUD data pegawai | Data Pegawai | **Ya** | Operasi standar Create, Read, Update, Delete terdefinisi lengkap dengan HTTP methods (POST, GET, PUT, DELETE). |
| 4 | FR-004 | Validasi NIP unik dan Nama/Jabatan tidak boleh kosong | Data Pegawai | **Ya** | Rule validasi deterministik: input NIP duplikat mengembalikan HTTP 400 `{ detail: "NIP sudah terdaftar" }`. |
| 5 | FR-005 | Pengajuan cuti (tgl mulai, selesai, alasan) max kuota 12 hari | Pengajuan Cuti | **Ya** | Memiliki batasan matematis jelas: `tgl_selesai >= tgl_mulai` dan akumulasi hari `APPROVED + PENDING <= 12`. |
| 6 | FR-006 | Manajer melakukan Approve atau Reject cuti | Pengajuan Cuti | **Ya** | State transition jelas: dari `PENDING` berubah menjadi `APPROVED` atau `REJECTED` via endpoint PATCH. |
| 7 | FR-007 | RBAC membatasi akses endpoint per role | Autentikasi | **Ya** | Matrix otorisasi jelas (Admin, HR, Manajer, Pegawai); akses tidak sah mengembalikan HTTP 403 Forbidden. |
| 8 | NFR-001 | Response time ≤ 500ms pada beban 50 concurrent users | Performance | **Ya** | Metrik kuantitatif terukur secara objektif via load testing tool (k6) dengan threshold P95 ≤ 500ms. |
| 9 | NFR-002 | Terlindung dari SQL Injection dan XSS | Security | **Ya** | Dapat diuji menggunakan automated vulnerability scan (OWASP ZAP) dan manual fuzzing payload pada input field. |
| 10 | NFR-003 | Kompatibilitas cross-browser (Chrome, Edge, Firefox) | Kompatibilitas | **Ya** | Dapat dieksekusi menggunakan multi-browser engine Playwright (Chromium, Firefox, WebKit). |
| 11 | NFR-004 | Password bcrypt hash dan JWT memiliki masa kedaluwarsa | Security | **Ya** | Terverifikasi di database MySQL (panjang hash 60 char) dan verifikasi payload `exp` pada token JWT (15 menit). |
| 12 | US-001 | As a User, login to access system | Autentikasi | **Ya** | Acceptance criteria terdefinisi: validasi form kosong, redirect ke dashboard saat valid, dan alert saat gagal. |
| 13 | US-002 | As an HR/Admin, add new employee | Data Pegawai | **Ya** | Acceptance criteria terdefinisi: NIP unik, data tersimpan di MySQL dan muncul di tabel UI. |
| 14 | US-003 | As an HR/Admin, edit and delete employee records | Data Pegawai | **Ya** | Acceptance criteria terdefinisi: perubahan data ter-update dan muncul dialog konfirmasi sebelum hapus. |
| 15 | US-004 | As a Pegawai, submit leave request (max 12 days) | Pengajuan Cuti | **Ya** | Acceptance criteria terdefinisi: validasi tanggal, status default 'PENDING', dan sisa kuota terpotong. |
| 16 | US-005 | As a Manajer, approve/reject leave requests | Pengajuan Cuti | **Ya** | Acceptance criteria terdefinisi: tombol aksi hanya aktif saat PENDING, status berubah realtime di tabel. |

---

### B. Kunci Jawaban Sheet 2: Risk Assessment Matrix (10 Skenario Risiko)

| No | Modul | Skenario Risiko Kegagalan | L | I | Score | Prioritas | Mitigasi Skenario Pengujian QA |
|---|---|---|:---:|:---:|:---:|:---:|---|
| 1 | Autentikasi | Bypass otorisasi: Pegawai dapat mengakses endpoint hapus pegawai (`DELETE /api/pegawai/{id}`) | 2 | 3 | **6** | **High** | API Privilege Escalation Test menggunakan token role Pegawai untuk memanggil endpoint Admin (ekspektasi: 403 Forbidden). |
| 2 | Autentikasi | SQL Injection pada form login membocorkan data kredensial user | 2 | 3 | **6** | **High** | Security testing dengan OWASP ZAP & injection payloads (`' OR '1'='1`) pada field username dan password. |
| 3 | Pengajuan Cuti | Pegawai mengajukan cuti melebihi kuota 12 hari dalam satu tahun kalender | 3 | 2 | **6** | **High** | Boundary Value Analysis & kalkulasi kuota: ajukan cuti 10 hari lalu ajukan 3 hari tambahan (ekspektasi: 400 Bad Request). |
| 4 | Data Pegawai | Duplikasi NIP pegawai lolos ke database akibat race condition | 2 | 3 | **6** | **High** | Negative testing submit 2 request create pegawai dengan NIP identik secara simultan; verifikasi constraint unique di DB. |
| 5 | Autentikasi | Token expired masih diterima oleh server, sesi user aktif selamanya | 2 | 3 | **6** | **High** | API testing memanggil endpoint terproteksi menggunakan JWT yang telah melewati 15 menit masa berlaku (ekspektasi: 401). |
| 6 | Pengajuan Cuti | Manajer menyetujui pengajuan cuti yang sudah berstatus APPROVED atau REJECTED | 2 | 2 | **4** | **Medium** | State transition testing: kirim request PATCH status pada record cuti yang statusnya bukan PENDING (ekspektasi: 400). |
| 7 | Data Pegawai | Data pegawai terhapus tanpa prompt konfirmasi pengguna | 2 | 2 | **4** | **Medium** | UI testing: verifikasi kemunculan modal `ConfirmDialog` dan pembatalan saat klik tombol "Batal". |
| 8 | Performa | Lonjakan login jam masuk kerja menyebabkan latency API > 2 detik | 2 | 2 | **4** | **Medium** | Stress testing menggunakan k6 dengan konfigurasi ramp-up 50 virtual users pada endpoint `/api/auth/login`. |
| 9 | Pengajuan Cuti | Input tanggal selesai lebih awal daripada tanggal mulai diterima sistem | 2 | 2 | **4** | **Medium** | Negative UI & API test dengan input `tgl_mulai: 2026-12-10` dan `tgl_selesai: 2026-12-05` (ekspektasi: 400 error). |
| 10 | Kompatibilitas | Layout tabel pegawai berantakan pada browser Firefox atau resolusi layar tablet | 2 | 1 | **2** | **Low** | Cross-browser & responsive testing menggunakan Playwright viewport configuration. |

---

### C. Kunci Jawaban Bagian 4: Refleksi & Diskusi

1. **Modul dengan Rata-rata Risk Score Tertinggi:**  
   *Modul Autentikasi & Otorisasi (RBAC).*  
   *Alasan:* Kerusakan atau celah keamanan pada autentikasi berakibat langsung terhadap seluruh sistem (*system-wide vulnerability*). Jika otorisasi gagal, user dapat melakukan eskalasi hak akses (contoh: pegawai mengubah status cuti mandiri atau menghapus pegawai lain).

2. **Strategi Jika Waktu Testing Terbatas (1 Hari):**  
   Fokus 100% pada risiko berkategori **High Priority (Score 6–9)**:
   - Skenario Login & validasi JWT expiry.
   - Hak akses role (RBAC) pada endpoint krusial.
   - Alur utama pengajuan cuti dan validasi kuota 12 hari.
   - Fitur CRUD dasar data pegawai.  
   *Pengujian kompatibilitas cross-browser dan styling minor dapat ditunda ke siklus rilis berikutnya.*

3. **Klarifikasi Kebutuhan ke Developer / BA:**  
   Kebutuhan **FR-005 & US-004 (Kuota Cuti Tahunan):**  
   *Pertanyaan Teknis untuk BA/Dev:*
   - *"Apakah kuota 12 hari berlaku untuk tahun kalender (Januari–Desember) atau dihitung sejak tanggal masuk kerja masing-masing pegawai?"*
   - *"Jika cuti diajukan pada akhir tahun (misal: 28 Desember s.d. 3 Januari), bagaimana pemotongan kuota cuti antar tahun tersebut diperlakukan oleh sistem?"*
   - *"Apakah pengajuan cuti yang masih berstatus PENDING langsung mengurangi sisa kuota yang dapat diajukan oleh pegawai?"*

</details>
