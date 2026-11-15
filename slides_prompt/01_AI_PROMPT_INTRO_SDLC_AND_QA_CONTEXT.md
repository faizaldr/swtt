# 01 — Pengantar SDLC, STLC, dan Konteks QA

## Tujuan Prompt

Menghasilkan dua output utama:
1. **Prompt untuk materi slide PPTX** — Pengantar Software Testing, SDLC, STLC, peran QA, dan dokumen FRD/SRS PT INIX.
2. **Prompt untuk lab hands-on** — Peserta membaca FRD/SRS PT INIX, mengidentifikasi risiko, dan menghasilkan tabel risiko awal.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Pembahasan 0 — Pengantar & Konteks Industri
- **File referensi:** `STUDI_KASUS_INIX.md`, `CURRICULUM_OVERVIEW.md`
- **Hari pelatihan:** Hari 1 — Sesi 1

---

## BAGIAN A: Prompt untuk Materi (Slide PPTX)

> **Instruksi:** Copy-paste prompt di bawah ini ke AI (ChatGPT / Claude / Gemini) untuk menghasilkan konten slide. Gunakan output sebagai isi slide PPTX.

---

### PROMPT MATERI SLIDE

**[R] ROLE:**
Bertindaklah sebagai **Lead QA Technical Instructor** dan **Curriculum Designer** dengan keahlian ISTQB, Agile Testing, dan pengalaman 10+ tahun melatih tim QA di industri. Anda membuat materi presentasi pelatihan yang profesional, visual, dan mudah dipahami peserta dengan level Junior-Mid.

**[I] INPUT:**
Buat konten slide presentasi (PPTX) untuk sesi **"Pengantar Software Testing & SDLC"** dalam pelatihan Software Testing. Berikut konteksnya:

- **Durasi sesi:** 90 menit (45 menit teori + 15 menit demo + 30 menit diskusi/lab awal)
- **Target peserta:** QA Engineer Junior-Mid yang akan menguji Aplikasi Kepegawaian PT INIX
- **Studi kasus:**
  - Aplikasi Kepegawaian PT INIX — berbasis web
  - Backend: Node.js + Express + Sequelize
  - Frontend: React (SPA sederhana)
  - Database: MySQL 8.0
  - Auth: JWT
  - Modul: Autentikasi, Data Pegawai (CRUD), Pengajuan Cuti (workflow approval)

**[S] STEPS:**
Buat konten untuk slide-slide berikut secara berurutan:

**Slide 1–2: Pembuka**
- Judul pelatihan: "Software Testing Plan and Implementation — with AI-Assisted QA"
- Agenda sesi hari 1
- Ice breaker: "Apa yang terjadi jika software tidak diuji?" — 3 contoh kasus nyata kegagalan software terkenal (contoh: Knight Capital, Boeing 737 MAX MCAS, Therac-25)

**Slide 3–6: Apa itu Software Development Life Cycle (SDLC)**
- Definisi SDLC
- 6 fase SDLC: Requirements → Design → Development → Testing → Deployment → Maintenance
- Diagram alur SDLC (deskripsi visual untuk dibuatkan diagram)
- Penjelasan singkat peran masing-masing fase (1–2 kalimat per fase)

**Slide 7–10: Model SDLC**
- **Waterfall:** Karakteristik linear-sequential, kapan cocok (proyek fixed-scope), kelebihan & kekurangan
- **V-Model:** Testing paralel dengan development, hubungan antar fase (Requirement ↔ UAT, Design ↔ Integration Test, Coding ↔ Unit Test)
- **Agile/Scrum:** Iteratif & incremental, Sprint, Daily Standup, Sprint Review — peran QA di setiap sprint
- **Tabel perbandingan** 3 model: aspek (Fleksibilitas, Testing timing, Cocok untuk, Risiko utama)

**Slide 11–14: Peran QA dalam Tim**
- **QA vs QC vs Testing** — definisi, fokus, dan tabel perbedaan:
  | Aspek | QA (Quality Assurance) | QC (Quality Control) | Testing |
  |---|---|---|---|
  | Fokus | Proses | Produk | Verifikasi |
  | Kapan | Sepanjang SDLC | Setelah development | Fase testing |
  | Aktivitas | Review, audit, standar | Inspeksi, validasi | Eksekusi test case |
  | Orientasi | Pencegahan defect | Deteksi defect | Menemukan bug |

- Peran QA Engineer di tim Scrum: kapan terlibat (sejak grooming), apa yang dilakukan (review story, desain test, eksekusi, automation, report)
- Skill yang dibutuhkan QA modern: teknis (SQL, API, automation) + non-teknis (analytical, communication, attention to detail)

**Slide 15–19: Software Testing Life Cycle (STLC)**
- Definisi STLC dan bedanya dengan SDLC
- 6 fase STLC:
  1. **Requirement Analysis** — Apa yang diuji? Review FRD/SRS, identifikasi testable requirements
  2. **Test Planning** — Strategi, scope, resource, timeline, risk, tools
  3. **Test Case Design** — Menulis test case, test data, traceability matrix
  4. **Test Environment Setup** — Menyiapkan server, database, tools
  5. **Test Execution** — Jalankan test, log hasil, report bug
  6. **Test Closure** — Evaluasi, metrics, lessons learned, sign-off

- Diagram STLC (deskripsi visual)
- **Pemetaan SDLC ↔ STLC:** tabel yang menunjukkan fase SDLC mana berkorespondensi dengan fase STLC mana
  | Fase SDLC | Aktivitas STLC yang Terjadi |
  |---|---|
  | Requirements | Requirement Analysis (review FRD, identifikasi scope test) |
  | Design | Test Planning + awal Test Case Design |
  | Development | Test Case Design + Test Environment Setup |
  | Testing | Test Execution |
  | Deployment | Smoke/Sanity test di production |
  | Maintenance | Regression test, test closure |

**Slide 20–23: Dokumen Fondasi — FRD/SRS**
- Apa itu FRD (Functional Requirements Document) dan SRS (Software Requirements Specification)?
- Mengapa penting bagi QA? (Sumber utama untuk desain test case)
- Struktur FRD/SRS minimal:
  - Functional Requirements (FR) — tabel: ID | Requirement | Priority | Module
  - Non-Functional Requirements (NFR) — tabel: ID | Requirement | Kategori | Metrik
  - User Stories — format: *As a [role], I want to [action], so that [benefit]* + Acceptance Criteria
- **Contoh riil — FRD/SRS PT INIX Kepegawaian:**

  **Functional Requirements:**
  | ID | Requirement | Priority | Module |
  |---|---|---|---|
  | FR-001 | Pengguna dapat login dengan username dan password untuk memperoleh access token JWT | High | Autentikasi |
  | FR-002 | Sistem menampilkan pesan error jika username atau password salah atau akun nonaktif | High | Autentikasi |
  | FR-003 | Admin dan HR dapat melihat daftar, menambah, mengubah, dan menghapus data pegawai | High | Data Pegawai |
  | FR-004 | Sistem memvalidasi NIP pegawai harus unik dan field wajib (Nama, Jabatan) tidak boleh kosong | High | Data Pegawai |
  | FR-005 | Pegawai dapat mengajukan cuti dengan menentukan tanggal mulai, tanggal selesai, dan alasan | High | Pengajuan Cuti |
  | FR-006 | Manajer dapat menyetujui (Approve) atau menolak (Reject) pengajuan cuti pegawai | High | Pengajuan Cuti |
  | FR-007 | Akses halaman dan API dibatasi berdasarkan role (Admin, HR, Manajer, Pegawai) | High | Autentikasi |

  **Non-Functional Requirements:**
  | ID | Requirement | Kategori | Metrik |
  |---|---|---|---|
  | NFR-001 | Response time endpoint login dan data pegawai ≤ 500ms pada 50 concurrent users | Performance | ≤ 500ms P95 |
  | NFR-002 | Form input dan API terlindung dari SQL Injection dan XSS | Security | OWASP Top 10 pass |
  | NFR-003 | UI dapat diakses di browser Chrome, Edge, Firefox terbaru | Compatibility | Cross-browser pass |
  | NFR-004 | Password tersimpan dalam hash aman; JWT memiliki masa kedaluwarsa | Security | Verified in DB & Auth |

  **User Stories:**
  | ID | User Story | Acceptance Criteria |
  |---|---|---|
  | US-001 | As a User, I want to login with my credentials, so that I can access the system | Validasi field kosong; kredensial valid masuk dashboard; kredensial tidak valid munculkan error |
  | US-002 | As an HR/Admin, I want to add a new employee, so that employee records are registered | NIP unik & wajib diisi; data tersimpan di DB dan muncul di daftar |
  | US-003 | As an HR/Admin, I want to edit and delete employee records, so that data remains accurate | Update realtime di UI; konfirmasi sebelum hapus |
  | US-004 | As a Pegawai, I want to submit a leave request, so that I can take my planned leave | tgl_selesai ≥ tgl_mulai; status default PENDING |
  | US-005 | As a Manajer, I want to approve or reject leave requests, so that leave status is updated | Pilih Approve/Reject; status cuti berubah sesuai |

**Slide 24–25: Pengantar Studi Kasus PT INIX**
- Ringkasan arsitektur aplikasi (diagram sederhana: Browser → REST API → MySQL)
- Daftar 3 modul (Autentikasi, Data Pegawai, Pengajuan Cuti)
- Daftar 10 API endpoint utama yang akan diuji selama pelatihan
- Preview: "Dari dokumen FRD/SRS ini, kita akan belajar merancang test case, menguji API, membuat automation, dan menjalankan pipeline CI/CD"

**Slide 26: Penutup Sesi & Transisi ke Lab**
- Ringkasan key takeaways (3 poin):
  1. SDLC adalah kerangka pengembangan software; STLC adalah kerangka pengujian di dalamnya
  2. QA modern terlibat sejak awal (requirement analysis), bukan hanya di fase testing
  3. FRD/SRS adalah sumber utama untuk menurunkan test case — kualitas test dimulai dari sini
- "Selanjutnya: Lab — Anda akan menganalisis FRD/SRS PT INIX dan mengidentifikasi area risiko tertinggi"

**[E] EXPECTATION:**
- Format output: konten teks per slide, siap di-copy ke template PPTX
- Setiap slide memiliki: **Judul**, **Poin-poin utama** (bullet), **Catatan pembicara** (speaker notes 2–3 kalimat)
- Sertakan deskripsi diagram/visual yang perlu digambar untuk setiap slide yang membutuhkan visual
- Bahasa Indonesia formal; istilah teknis QA tetap dalam bahasa Inggris
- Gunakan contoh riil dari PT INIX di setiap konsep yang memungkinkan
- Proporsi: 60% konsep teori, 40% contoh & studi kasus PT INIX

**[N] NARROWING:**
- Jangan membuat konten slide terlalu padat — maksimal 5–6 bullet points per slide
- Jangan menjelaskan tools automation secara detail (itu topik fase selanjutnya)
- Jangan memasukkan konten hands-on di slide — hands-on ada di file Lab terpisah
- Hindari definisi yang terlalu akademis — gunakan bahasa praktis yang relatable untuk praktisi
- Fokus pada "mengapa QA penting" dan "apa yang QA lakukan", bukan detail teknis mendalam

---

## BAGIAN B: Prompt untuk Lab Hands-on

> **Instruksi:** Copy-paste prompt di bawah ini ke AI untuk menghasilkan panduan lab. Output digunakan sebagai handout peserta.

---

### PROMPT LAB HANDS-ON

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Instructor** yang membuat panduan lab praktik langkah demi langkah. Lab ini harus bisa dikerjakan peserta secara mandiri dengan bimbingan minimal. Anda berpengalaman membuat hands-on exercise yang engaging dan memiliki learning outcome yang terukur.

**[I] INPUT:**
Buat panduan **Lab 0: Analisis FRD/SRS dan Identifikasi Risiko** untuk pelatihan Software Testing. Konteks:

- **Durasi:** 30 menit
- **Peserta:** QA Engineer Junior-Mid
- **Studi kasus:** Aplikasi Kepegawaian PT INIX
- **Prasyarat:** Peserta sudah menyimak materi SDLC, STLC, dan FRD/SRS dari sesi teori sebelumnya
- **Tools yang digunakan:** Spreadsheet (Google Sheets / Excel)
- **Dokumen input:** FRD/SRS PT INIX (tersedia di file `STUDI_KASUS_INIX.md`) yang berisi:
  - 7 Functional Requirements (FR-001 s/d FR-007)
  - 4 Non-Functional Requirements (NFR-001 s/d NFR-004)
  - 5 User Stories (US-001 s/d US-005)
  - 3 Modul: Autentikasi, Data Pegawai, Pengajuan Cuti
  - 10 API Endpoint
  - ERD: 3 tabel (users, pegawai, cuti)

**[S] STEPS:**
Buat panduan lab dengan urutan berikut:

**Bagian 1: Persiapan (5 menit)**
1. Instruksi membuka dokumen FRD/SRS PT INIX (berikan link/referensi file)
2. Instruksi membuat spreadsheet baru dengan nama: `Lab0_Analisis_Risiko_[NAMA_PESERTA]`
3. Penjelasan singkat: "Apa itu analisis risiko dalam konteks QA?" (2–3 kalimat)

**Bagian 2: Identifikasi Testable Requirements (10 menit)**
4. Peserta membuat tabel di Sheet 1 bernama "Testable Requirements" dengan kolom:
   `No | Req ID | Deskripsi Requirement | Module | Testable? (Ya/Tidak) | Alasan`

5. Peserta mengisi tabel dengan SEMUA requirement dari FRD/SRS (FR + NFR + User Story)
   - Peserta menentukan apakah setiap requirement "Testable" atau tidak, dan memberikan alasan
   - Berikan 2 contoh pengisian yang sudah terisi sebagai panduan:
     - Contoh Testable: FR-001 — "Ya, karena ada input (username/password) dan expected output (JWT token) yang jelas"
     - Contoh Not Testable (jika ada): atau contoh yang ambigu — jelaskan mengapa

6. Sertakan **tips: ciri-ciri requirement yang testable** (specific, measurable, memiliki expected result)

**Bagian 3: Risk Assessment Matrix (10 menit)**
7. Peserta membuat Sheet 2 bernama "Risk Assessment" dengan kolom:
   `No | Module/Fitur | Risiko yang Mungkin Terjadi | Likelihood (1-3) | Impact (1-3) | Risk Score (L×I) | Prioritas Testing`

8. Peserta mengisi minimal 6 baris risiko dari 3 modul PT INIX
   - Berikan panduan skala:
     - **Likelihood:** 1=Rendah (jarang terjadi), 2=Sedang (mungkin terjadi), 3=Tinggi (sering terjadi)
     - **Impact:** 1=Rendah (minor UI issue), 2=Sedang (fitur terganggu), 3=Tinggi (data loss/security breach)
     - **Risk Score:** Likelihood × Impact
     - **Prioritas:** High (Score 6–9), Medium (Score 3–5), Low (Score 1–2)

9. Berikan 2 contoh pengisian yang sudah terisi:
   - Contoh 1: Autentikasi — "JWT token tidak expired sesuai konfigurasi" — L:2, I:3, Score:6 → High
   - Contoh 2: Data Pegawai — "NIP duplikat lolos validasi" — L:2, I:2, Score:4 → Medium

**Bagian 4: Kesimpulan & Diskusi (5 menit)**
10. Peserta menjawab 3 pertanyaan refleksi:
    - "Modul mana yang memiliki rata-rata Risk Score tertinggi? Mengapa?"
    - "Jika waktu testing terbatas, modul mana yang harus diuji pertama? Berdasarkan apa?"
    - "Requirement mana yang paling sulit diuji? Apa yang perlu ditanyakan ke developer/BA?"

11. Diskusi kelompok: bandingkan hasil Risk Assessment antar peserta

**[E] EXPECTATION:**
- Format output: Markdown document yang siap dijadikan handout peserta
- Setiap langkah bernomor, jelas, dan actionable — peserta bisa ikuti tanpa instruktur
- Sertakan contoh pengisian tabel yang sudah diisi (sebagai reference/answer key)
- Di akhir lab, sertakan **Checklist Keberhasilan:**
  - [ ] Tabel Testable Requirements terisi lengkap (minimal 16 baris: 7 FR + 4 NFR + 5 US)
  - [ ] Setiap requirement sudah ditentukan Testable/Tidak beserta alasan
  - [ ] Risk Assessment terisi minimal 6 risiko dari 3 modul berbeda
  - [ ] Risk Score dihitung dengan benar (L × I)
  - [ ] Prioritas testing sudah ditentukan berdasarkan Risk Score
  - [ ] 3 pertanyaan refleksi sudah dijawab
- Bahasa Indonesia formal; istilah teknis tetap Inggris
- Sertakan **Kunci Jawaban / Reference Answer** di bagian terpisah (untuk instruktur)

**[N] NARROWING:**
- Lab ini HANYA analisis dokumen dan identifikasi risiko — belum menulis test case
- Jangan meminta peserta menggunakan tools selain Spreadsheet
- Jangan membahas teknik desain test case (EP, BVA, dll) — itu materi Fase 1
- Semua data harus dari FRD/SRS PT INIX yang sudah ada — jangan buat requirement baru
- Lab harus bisa diselesaikan dalam 30 menit oleh peserta dengan kecepatan rata-rata

---

## BAGIAN C: Prompt untuk Integrasi AI di Sesi Pengantar

> **Instruksi:** Prompt-prompt di bawah ini adalah template siap pakai yang bisa digunakan peserta atau instruktur selama sesi. Demonstrasikan penggunaan AI untuk analisis requirement.

---

### PROMPT AI TEMPLATE #1 — Analisis Testability Requirement

```
Kamu adalah Senior QA Analyst. Berikut adalah daftar Functional Requirements dari aplikasi Kepegawaian PT INIX:

FR-001: Pengguna dapat login dengan username dan password untuk memperoleh access token JWT
FR-002: Sistem menampilkan pesan error jika username atau password salah atau akun nonaktif
FR-003: Admin dan HR dapat melihat daftar, menambah, mengubah, dan menghapus data pegawai
FR-004: Sistem memvalidasi NIP pegawai harus unik dan field wajib (Nama, Jabatan) tidak boleh kosong
FR-005: Pegawai dapat mengajukan cuti dengan menentukan tanggal mulai, tanggal selesai, dan alasan
FR-006: Manajer dapat menyetujui (Approve) atau menolak (Reject) pengajuan cuti pegawai
FR-007: Akses halaman dan API dibatasi berdasarkan role (Admin, HR, Manajer, Pegawai)

Untuk setiap requirement, analisis:
1. Apakah requirement ini testable? (Ya/Tidak)
2. Berikan alasan singkat (1 kalimat)
3. Jika ambigu atau kurang detail, sarankan pertanyaan klarifikasi ke Business Analyst

Output dalam format tabel Markdown.
```

### PROMPT AI TEMPLATE #2 — Generate Risk Assessment Awal

```
Kamu adalah Senior QA Lead. Berikut adalah deskripsi 3 modul aplikasi Kepegawaian PT INIX:

1. **Autentikasi** — Login/Logout, JWT Token, Role-Based Access Control (4 roles: Admin, HR, Manajer, Pegawai)
2. **Data Pegawai** — CRUD profil pegawai (NIP unik, Nama, Jabatan, Status aktif/nonaktif)
3. **Pengajuan Cuti** — Pegawai mengajukan cuti (tanggal, alasan), Manajer approve/reject, status: PENDING → APPROVED/REJECTED

Tech stack: Node.js + Express + Sequelize (backend), React (frontend), MySQL (database), JWT auth.

Buatkan Risk Assessment Matrix dengan format:
| No | Module | Risiko | Likelihood (1-3) | Impact (1-3) | Risk Score | Prioritas |

Identifikasi minimal 8 risiko yang mencakup:
- Risiko fungsional (bug logic, validasi gagal)
- Risiko keamanan (JWT, SQL Injection, XSS, unauthorized access)
- Risiko performa (response time lambat)
- Risiko data (data integrity, duplikat)

Urutkan berdasarkan Risk Score tertinggi.
```

### PROMPT AI TEMPLATE #3 — Menurunkan Testable Scenarios dari User Story

```
Kamu adalah QA Test Designer. Diberikan User Story berikut:

US-001: As a User, I want to login with my credentials, so that I can access the system.
Acceptance Criteria:
- Validasi field kosong
- Kredensial valid masuk ke dashboard
- Kredensial tidak valid memunculkan error message

Tugas:
1. Turunkan semua test scenario yang mungkin (positive & negative) dari User Story ini
2. Untuk setiap scenario, berikan: Scenario ID, Deskripsi, Tipe (Positive/Negative), Expected Result
3. Identifikasi edge case yang mungkin terlewat dari acceptance criteria di atas
4. Sarankan test data yang dibutuhkan

Output dalam format tabel Markdown, dikelompokkan berdasarkan tipe (Positive/Negative/Edge Case).
```

---

## Checklist Output TAHAP 1

- [ ] Prompt materi slide PPTX lengkap (26 slide) — mencakup SDLC, Model SDLC, QA vs QC vs Testing, STLC, FRD/SRS, studi kasus PT INIX
- [ ] Prompt lab hands-on (Lab 0) — analisis FRD/SRS + Risk Assessment Matrix dengan spreadsheet
- [ ] 3 AI Prompt Template siap pakai (testability analysis, risk assessment, test scenario generation)
- [ ] Semua konten merujuk studi kasus PT INIX
- [ ] Bahasa Indonesia formal, istilah teknis Inggris
- [ ] Lab dapat diselesaikan dalam 30 menit
- [ ] Terdapat checklist keberhasilan di akhir lab
- [ ] Terdapat reference answer untuk instruktur
