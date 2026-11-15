# 02 — Fondasi & Manual Testing (Level Testing, Tipe Testing, Test Case Design, Bug Report)

## Tujuan Prompt

Menghasilkan 4 output:
1. **Prompt materi slide PPTX** — Level Testing, Tipe Testing, pemetaan matriks, teknik desain test case (EP, BVA, Decision Table, State Transition), Exploratory Testing, Risk-based Testing, Bug Report.
2. **Prompt struktur Excel test case** — template industri yang bisa diekspor ke CSV.
3. **Prompt lab hands-on** — menulis test case Login & Data Pegawai PT INIX + Decision Table Cuti + Bug Report.
4. **Prompt AI template** — generate test case dari User Story, edge case, draft bug report otomatis.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 1 — Fondasi & Manual Testing
- **Hari pelatihan:** Hari 1 (sesi 2–3) dan awal Hari 2
- **File referensi:** `STUDI_KASUS_INIX.md`, `slides_prompt/01_AI_PROMPT_INTRO_SDLC_AND_QA_CONTEXT.md`
- **Prerequisite peserta:** Sudah memahami SDLC, STLC, FRD/SRS dari Pembahasan 0

---

## BAGIAN A: Prompt untuk Materi (Slide PPTX)

> **Instruksi:** Copy-paste prompt di bawah ini ke AI untuk menghasilkan konten slide PPTX Fase 1.

---

### PROMPT MATERI SLIDE FASE 1

**[R] ROLE:**
Bertindaklah sebagai **Lead QA Technical Instructor** dengan sertifikasi ISTQB Foundation & Advanced, berpengalaman 10+ tahun mengajar dan merancang kurikulum QA di industri. Anda membuat materi slide pelatihan yang visual, terstruktur, dan berorientasi praktik.

**[I] INPUT:**
Buat konten slide presentasi (PPTX) untuk sesi **"Fondasi & Manual Testing"** dalam pelatihan Software Testing. Konteks:

- **Durasi sesi:** 3 jam (2 sesi × 90 menit) — 50% teori, 50% demo/contoh studi kasus
- **Target peserta:** QA Engineer Junior-Mid
- **Studi kasus:** Aplikasi Kepegawaian PT INIX
  - 3 Modul: Autentikasi (Login JWT), Data Pegawai (CRUD), Pengajuan Cuti (workflow approval PENDING → APPROVED/REJECTED)
  - Backend: Node.js + Express + Sequelize | Frontend: React | Database: MySQL
  - 7 Functional Requirements (FR-001 s/d FR-007)
  - 5 User Stories (US-001 s/d US-005)
  - 10 API Endpoints
  - ERD: 3 tabel (users, pegawai, cuti)
- **Prerequisite:** Peserta sudah memahami SDLC, STLC, FRD/SRS dari sesi sebelumnya

**[S] STEPS:**
Buat konten untuk slide-slide berikut secara berurutan:

---

**SESI 1 (90 menit): Level Testing, Tipe Testing, dan Pemetaan**

**Slide 1–2: Pembuka Sesi**
- Judul: "Fase 1 — Fondasi & Manual Testing"
- Agenda: Level Testing → Tipe Testing → Pemetaan Level↔Tipe → Teknik Desain Test Case → Exploratory & Risk-based → Bug Report
- Recall: "Di sesi sebelumnya kita sudah punya FRD/SRS PT INIX. Sekarang kita belajar CARA mengujinya."

**Slide 3–7: Level Testing**
- Penjelasan 4 level testing dengan definisi, siapa yang melakukan, dan contoh dari PT INIX:

  | Level | Definisi | Siapa | Contoh di PT INIX |
  |---|---|---|---|
  | **Unit Testing** | Menguji unit/fungsi terkecil secara terisolasi | Developer | Test fungsi `validateNIP()` — apakah menolak NIP duplikat |
  | **Integration Testing** | Menguji interaksi antar modul/komponen | Developer / QA | Test endpoint `POST /api/pegawai/` — apakah data tersimpan ke tabel `pegawai` di MySQL |
  | **System Testing** | Menguji keseluruhan sistem secara end-to-end | QA | Test alur lengkap: Login → Tambah Pegawai → Verifikasi di daftar → Verifikasi di database |
  | **Acceptance Testing (UAT)** | Menguji kesesuaian dengan kebutuhan bisnis/user | User / PO / QA | HR Staff mencoba alur tambah pegawai baru dan memastikan sesuai kebutuhan operasional |

- Diagram piramida testing (deskripsi visual): Unit (banyak, cepat) → Integration → System → UAT (sedikit, lambat)
- Slide khusus: "Di pelatihan ini, fokus kita ada di level **System Testing** dan **Integration Testing** (API)"

**Slide 8–12: Tipe Testing**
- Penjelasan 7 tipe testing utama dengan definisi singkat, kapan digunakan, dan contoh di PT INIX:

  | Tipe | Definisi | Kapan | Contoh PT INIX |
  |---|---|---|---|
  | **Functional Testing** | Memverifikasi fitur sesuai requirement | Setiap sprint/release | Test login valid/invalid sesuai FR-001, FR-002 |
  | **Regression Testing** | Memastikan fitur lama tidak rusak setelah perubahan | Setelah bug fix / fitur baru | Setelah fix bug di modul cuti, re-test login & data pegawai |
  | **Smoke Testing** | Verifikasi cepat fungsi kritis berjalan | Setelah deployment ke staging | Cek login berhasil + halaman pegawai tampil + API cuti respond |
  | **Sanity Testing** | Verifikasi spesifik area yang berubah | Setelah bug fix spesifik | Setelah fix validasi NIP, test khusus NIP duplikat |
  | **Exploratory Testing** | Testing tanpa script, eksplorasi bebas berbasis pengalaman | Sprint akhir / UAT | Eksplorasi form cuti: apa yang terjadi jika tanggal di masa lalu? tanggal sama? |
  | **Usability Testing** | Menguji kemudahan penggunaan UI | Sebelum release | Apakah form data pegawai intuitif? error message jelas? |
  | **Compatibility Testing** | Menguji di berbagai browser/device/OS | Sebelum release | Test PT INIX di Chrome, Edge, Firefox (sesuai NFR-003) |

**Slide 13–15: Pemetaan Level ↔ Tipe Testing (Matriks)**
- Tabel matriks utama yang menunjukkan tipe testing mana yang applicable di level mana:

  | Tipe Testing | Unit | Integration | System | UAT |
  |---|---|---|---|---|
  | Functional | ✓ | ✓ | ✓ | ✓ |
  | Regression | ✓ | ✓ | ✓ | — |
  | Smoke | — | — | ✓ | ✓ |
  | Sanity | ✓ | ✓ | ✓ | — |
  | Exploratory | — | — | ✓ | ✓ |
  | Usability | — | — | ✓ | ✓ |
  | Compatibility | — | — | ✓ | — |

- Penjelasan cara membaca matriks: "✓ berarti tipe testing ini biasanya dilakukan di level tersebut"
- Slide: "Untuk PT INIX, kita akan fokus pada **Functional + Regression + Smoke di level System**, dan **Functional di level Integration (API)**"

**Slide 16: Rangkuman Sesi 1a**
- 3 key takeaways:
  1. Level testing = KAPAN & DI MANA kita menguji (piramida)
  2. Tipe testing = APA TUJUAN kita menguji (verifikasi apa?)
  3. Matriks Level↔Tipe membantu memilih strategi testing yang tepat per konteks

---

**SESI 1 (lanjutan): Teknik Desain Test Case**

**Slide 17–20: Equivalence Partitioning (EP)**
- Definisi: Membagi domain input menjadi partisi (kelas) yang diasumsikan diperlakukan sama oleh sistem. Cukup uji 1 nilai per partisi.
- Kapan digunakan: Input berupa range, set, atau kategori
- **Contoh di PT INIX — Form Login (field: username):**
  | Partisi | Contoh Nilai | Expected Result |
  |---|---|---|
  | Valid username (ada di DB, aktif) | `admin@inix.com` | Login berhasil |
  | Valid username tapi nonaktif | `disabled@inix.com` | Error: "Akun nonaktif" |
  | Username tidak terdaftar | `unknown@test.com` | Error: "Username tidak ditemukan" |
  | Username kosong | ` ` (empty) | Error: "Username wajib diisi" |
  | Username format invalid | `admin@@inix` | Error: "Format email tidak valid" |

- **Contoh di PT INIX — Field NIP (Data Pegawai):**
  | Partisi | Contoh Nilai | Expected Result |
  |---|---|---|
  | NIP valid & unik | `NIP-2026-001` | Pegawai tersimpan |
  | NIP sudah ada di DB | `NIP-2025-001` (duplikat) | Error: "NIP sudah terdaftar" |
  | NIP kosong | ` ` | Error: "NIP wajib diisi" |

**Slide 21–24: Boundary Value Analysis (BVA)**
- Definisi: Menguji nilai di batas (boundary) partisi — karena bug paling sering terjadi di titik batas. Uji: min-1, min, min+1, max-1, max, max+1.
- Kapan digunakan: Input berupa range numerik, panjang string, tanggal
- **Contoh di PT INIX — Field password (login):**
  Misal: requirement password minimal 8 karakter, maksimal 64 karakter

  | Boundary | Test Data | Expected |
  |---|---|---|
  | < min (7 char) | `Pass12!` | Error: "Password minimal 8 karakter" |
  | = min (8 char) | `Pass123!` | Diterima |
  | > min (9 char) | `Pass1234!` | Diterima |
  | < max (63 char) | 63 char string | Diterima |
  | = max (64 char) | 64 char string | Diterima |
  | > max (65 char) | 65 char string | Error: "Password maksimal 64 karakter" |

- **Contoh di PT INIX — Tanggal cuti (pengajuan cuti):**
  Misal: tanggal mulai harus ≥ hari ini, tanggal selesai ≥ tanggal mulai

  | Boundary | Test Data | Expected |
  |---|---|---|
  | tgl_mulai = kemarin | `2026-11-14` | Error: "Tidak boleh tanggal lampau" |
  | tgl_mulai = hari ini | `2026-11-15` | Diterima |
  | tgl_mulai = besok | `2026-11-16` | Diterima |
  | tgl_selesai < tgl_mulai | mulai:`2026-11-20`, selesai:`2026-11-19` | Error |
  | tgl_selesai = tgl_mulai | mulai:`2026-11-20`, selesai:`2026-11-20` | Diterima (1 hari) |

**Slide 25–28: Decision Table**
- Definisi: Tabel yang memetakan semua kombinasi kondisi input ke tindakan (action) yang diharapkan. Cocok untuk business logic dengan banyak rule.
- Kapan digunakan: Logika if-then yang kompleks, banyak kombinasi kondisi
- **Contoh di PT INIX — Logic Pengajuan Cuti:**
  Kondisi:
  - C1: User role = Pegawai?
  - C2: Tanggal mulai ≥ hari ini?
  - C3: Tanggal selesai ≥ tanggal mulai?
  - C4: Alasan diisi?

  | Rule | C1 | C2 | C3 | C4 | Action |
  |---|---|---|---|---|---|
  | R1 | Ya | Ya | Ya | Ya | Cuti berhasil diajukan (status: PENDING) |
  | R2 | Ya | Ya | Ya | Tidak | Error: "Alasan wajib diisi" |
  | R3 | Ya | Ya | Tidak | Ya | Error: "Tanggal selesai harus ≥ tanggal mulai" |
  | R4 | Ya | Tidak | Ya | Ya | Error: "Tanggal mulai tidak boleh di masa lalu" |
  | R5 | Tidak | Ya | Ya | Ya | Error: "Unauthorized — hanya Pegawai yang bisa mengajukan" |
  | R6 | Ya | Tidak | Tidak | Tidak | Error: multiple validation |

**Slide 29–31: State Transition Diagram**
- Definisi: Menggambarkan perpindahan state (status) suatu objek berdasarkan event/action. Cocok untuk workflow.
- Kapan digunakan: Fitur dengan lifecycle status (order, ticket, cuti, dll.)
- **Contoh di PT INIX — Workflow Status Cuti:**
  ```
  [Baru] --Submit--> [PENDING] --Approve--> [APPROVED]
                                --Reject---> [REJECTED]
  ```
  - State: DRAFT → PENDING → APPROVED / REJECTED
  - Event: Submit, Approve, Reject
  - Deskripsi visual: State Transition Diagram dengan 3 state utama

- **Test case dari State Transition:**
  | No | Initial State | Event | Expected State |
  |---|---|---|---|
  | 1 | (belum ada) | Pegawai submit cuti | PENDING |
  | 2 | PENDING | Manajer approve | APPROVED |
  | 3 | PENDING | Manajer reject | REJECTED |
  | 4 | APPROVED | Pegawai coba submit ulang | Error (tidak bisa submit ulang cuti yang sudah approved) |
  | 5 | REJECTED | Pegawai coba submit ulang | Error / atau allowed (tergantung business rule — perlu klarifikasi) |

---

**SESI 2 (90 menit): Exploratory Testing, Risk-based Testing, Bug Report**

**Slide 32–34: Exploratory Testing**
- Definisi: Testing berbasis pengalaman dan intuisi tanpa script formal. Tester mengeksplorasi aplikasi sambil merancang dan mengeksekusi test secara simultan.
- **Charter-based Exploration:**
  Format charter: *"Explore [target] with [resources] to discover [information]"*
  Contoh PT INIX: "Explore form pengajuan cuti with various date combinations to discover validation edge cases"
- **Time-boxed Session:** 30–60 menit per sesi, dokumentasi temuan setelah sesi selesai
- **Session Sheet:** tabel untuk mencatat temuan exploratory
  | Waktu | Area | Aksi | Observasi | Bug? |
  |---|---|---|---|---|
  | 00:05 | Form cuti | Input tgl_mulai = 31 Feb | Error message tidak muncul | Ya — Bug |

**Slide 35–37: Risk-based Testing (Revisit & Deepen)**
- Recall dari Lab 0 (Risk Assessment Matrix)
- Memperdalam: bagaimana hasil Risk Assessment digunakan untuk **memprioritaskan test case**
- **Risk-based Test Prioritization untuk PT INIX:**
  | Prioritas | Module | Risiko Utama | Jumlah Test Case yang Dialokasikan |
  |---|---|---|---|
  | **High** | Autentikasi | Unauthorized access, JWT bypass | 15–20 test case |
  | **High** | Pengajuan Cuti | State transition salah, data loss | 10–15 test case |
  | **Medium** | Data Pegawai | Validasi NIP gagal, CRUD error | 10 test case |
- Prinsip: "Test yang paling banyak dan paling awal untuk area dengan Risk Score tertinggi"

**Slide 38–42: Bug Report**
- Mengapa bug report penting? (Komunikasi dengan developer, tracking, metriks kualitas)
- **Anatomy Bug Report — 12 Field Standar:**
  | Field | Deskripsi | Contoh |
  |---|---|---|
  | Bug ID | ID unik otomatis dari tools | BUG-INIX-001 |
  | Title | Ringkasan singkat (what + where) | "Login gagal meski kredensial benar saat akun baru dibuat" |
  | Module | Modul aplikasi | Autentikasi |
  | Environment | OS, browser, URL, versi app | Chrome 120, staging.inix.local, v1.2.0 |
  | Severity | Dampak teknis: Critical, Major, Minor, Trivial | Major |
  | Priority | Urgensi bisnis: High, Medium, Low | High |
  | Steps to Reproduce | Langkah spesifik 1-2-3 | 1. Buka login page 2. Input admin@inix.com / Admin@123! 3. Klik Login |
  | Expected Result | Yang seharusnya terjadi | Redirect ke dashboard, JWT token di-set |
  | Actual Result | Yang benar-benar terjadi | Muncul error "Invalid credentials" meskipun data valid |
  | Attachments | Screenshot / video / log | [screenshot error message] |
  | Assigned To | Developer yang bertanggung jawab | Backend Team |
  | Status | Open, In Progress, Fixed, Verified, Closed, Reopened | Open |

- **Severity vs Priority — Matriks:**
  | | Priority High | Priority Medium | Priority Low |
  |---|---|---|---|
  | **Severity Critical** | Fix immediately | Fix in 24h | Rare scenario |
  | **Severity Major** | Fix in sprint | Fix in sprint | Backlog |
  | **Severity Minor** | Nice to have | Backlog | Backlog |

- **Contoh Bug Report lengkap dari PT INIX:** (1 contoh terisi penuh semua field)
  - Bug: "NIP duplikat berhasil tersimpan tanpa error" di modul Data Pegawai
  - Steps: 1) Login sebagai HR 2) Tambah pegawai dengan NIP "NIP-2025-001" 3) Tambah pegawai lagi dengan NIP yang sama 4) Data tersimpan tanpa error
  - Expected: Error "NIP sudah terdaftar"
  - Actual: Data duplikat tersimpan
  - Severity: Major | Priority: High

**Slide 43–44: Rangkuman & Transisi ke Lab**
- Recap 4 teknik desain test case: EP, BVA, Decision Table, State Transition
- Recap Exploratory & Risk-based Testing
- "Selanjutnya: Lab — Anda akan menulis 10 test case untuk Login, Decision Table untuk Cuti, dan 3 Bug Report"

**[E] EXPECTATION:**
- Format: konten teks per slide, siap di-copy ke template PPTX
- Setiap slide: **Judul**, **Bullet points** (maks 6), **Speaker notes** (2–3 kalimat)
- Setiap teknik dilengkapi contoh spesifik dari PT INIX (bukan contoh generik)
- Diagram/visual: berikan deskripsi yang jelas untuk digambar (piramida testing, state diagram, decision table)
- Bahasa Indonesia formal; istilah teknis QA tetap Inggris
- Total: ~44 slide (2 sesi × ~22 slide)

**[N] NARROWING:**
- Jangan membahas automation — ini fase manual testing murni
- Jangan membahas tools Postman/DevTools secara detail — itu Fase 2
- Jangan membuat lab di dalam slide — lab ada di file terpisah
- Jangan membuat contoh dari aplikasi lain selain PT INIX
- Fokus pada teknik ISTQB Foundation Level — jangan masuk Advanced level (pairwise, classification tree)

---

## BAGIAN B: Prompt untuk Struktur Excel Test Case

> **Instruksi:** Prompt ini menghasilkan template Excel/spreadsheet standar industri untuk penulisan test case.

---

### PROMPT TEMPLATE EXCEL TEST CASE

**[R] ROLE:**
Bertindaklah sebagai **QA Process Consultant** yang merancang template test case standar industri. Template harus profesional, lengkap, dan siap digunakan di project nyata.

**[I] INPUT:**
Buat template struktur Excel (spreadsheet) untuk penulisan test case yang bisa diekspor ke CSV. Template digunakan untuk mendokumentasikan test case Aplikasi Kepegawaian PT INIX.

**[S] STEPS:**

1. **Sheet 1: "Test Cases"** — Template utama dengan kolom berikut:
   | Kolom | Deskripsi | Contoh Isi |
   |---|---|---|
   | Test Case ID | Format: TC-[MODULE]-[NNN] | TC-AUTH-001 |
   | Module | Nama modul | Autentikasi |
   | Feature | Fitur spesifik | Login |
   | Test Scenario | Deskripsi skenario tinggi | Verifikasi login dengan kredensial valid |
   | Precondition | Syarat awal | User terdaftar dan aktif di database |
   | Test Steps | Langkah-langkah (numbered) | 1. Buka halaman login 2. Isi username 3. Isi password 4. Klik Login |
   | Test Data | Data yang digunakan | username: admin@inix.com, password: Admin@123! |
   | Expected Result | Hasil yang diharapkan | Redirect ke dashboard, JWT token di-set |
   | Actual Result | Hasil aktual (diisi saat eksekusi) | — |
   | Status | Pass / Fail / Blocked / Not Run | Not Run |
   | Priority | High / Medium / Low | High |
   | Severity | Critical / Major / Minor / Trivial | Major |
   | Test Type | Functional / Regression / Smoke / dll | Functional |
   | Tester | Nama tester | — |
   | Execution Date | Tanggal eksekusi | — |
   | Remarks | Catatan tambahan | — |

2. **Sheet 2: "Bug Reports"** — Template bug report dengan kolom:
   `Bug ID | Title | Module | Severity | Priority | Steps to Reproduce | Expected Result | Actual Result | Environment | Attachments | Assigned To | Status | Reporter | Date`

3. **Sheet 3: "Summary"** — Dashboard ringkasan:
   - Total test case per module
   - Status count: Pass / Fail / Blocked / Not Run
   - Bug count per severity

4. **Isi 3 contoh test case lengkap** di Sheet 1 dari PT INIX:
   - TC-AUTH-001: Login valid (positive)
   - TC-AUTH-002: Login invalid password (negative)
   - TC-PEG-001: Tambah pegawai dengan data lengkap (positive)

**[E] EXPECTATION:**
- Output: deskripsi lengkap struktur Excel (kolom, format, contoh isi) yang siap dibuat menjadi file `.xlsx`
- Setiap kolom memiliki penjelasan, format data, dan contoh isi
- Sertakan instruksi export ke CSV
- Header row harus di-freeze (instruksi formatting)
- Kolom Status menggunakan dropdown (Pass/Fail/Blocked/Not Run)

**[N] NARROWING:**
- Template HANYA untuk manual test case — bukan automation script log
- Jangan membuat makro/VBA — cukup struktur spreadsheet sederhana
- Gunakan konvensi penamaan Test Case ID yang konsisten: `TC-[MODULE_CODE]-[NNN]`
- Module codes: AUTH (Autentikasi), PEG (Data Pegawai), CUT (Pengajuan Cuti)

---

## BAGIAN C: Prompt untuk Lab Hands-on Fase 1

> **Instruksi:** Copy-paste prompt ini ke AI untuk menghasilkan panduan Lab 1.

---

### PROMPT LAB FASE 1

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Instructor** yang membuat panduan lab praktik langkah demi langkah. Lab harus bisa dikerjakan mandiri dengan output terukur. Anda berpengalaman mengajar teknik desain test case dan bug reporting ke QA Junior-Mid.

**[I] INPUT:**
Buat panduan **Lab 1: Desain Test Case & Bug Report — Aplikasi Kepegawaian PT INIX** dengan detail:

- **Durasi:** 60 menit
- **Peserta:** QA Engineer Junior-Mid
- **Tools:** Spreadsheet (Google Sheets / Excel) — menggunakan template dari BAGIAN B
- **Prerequisite:** Sudah memahami EP, BVA, Decision Table, State Transition, Bug Report dari materi slide Fase 1
- **Studi kasus PT INIX:**
  - Modul Autentikasi: Login (username/password → JWT), error handling, RBAC
  - Modul Data Pegawai: CRUD (NIP unik, Nama wajib, Jabatan wajib)
  - Modul Pengajuan Cuti: Submit cuti (tgl_mulai, tgl_selesai, alasan) → Approve/Reject oleh Manajer → Status: PENDING/APPROVED/REJECTED

**[S] STEPS:**
Susun panduan lab dengan struktur berikut:

**Bagian 0: Persiapan (5 menit)**
1. Buka/duplikat template Excel test case dari BAGIAN B
2. Rename file: `Lab1_TestCase_BugReport_[NAMA].xlsx`
3. Verifikasi 3 sheet tersedia: Test Cases, Bug Reports, Summary

**Bagian 1: Test Case Login dengan EP & BVA (20 menit)**
4. Konteks: Form login PT INIX memiliki 2 field (username, password) dan tombol Login
5. Requirement yang diuji: FR-001 (login valid) dan FR-002 (error handling)
6. **Tugas:** Buat **10 test case** di Sheet "Test Cases" untuk modul Login:
   - 5 test case menggunakan **Equivalence Partitioning** — minimal 1 partisi valid + 4 partisi invalid (kosong, format salah, tidak terdaftar, akun nonaktif)
   - 5 test case menggunakan **Boundary Value Analysis** — pada panjang password (min 8, max 64 karakter): test boundary min-1, min, min+1, max-1, max, max+1 (pilih 5 yang paling penting)
7. Panduan: cara menentukan partisi, cara menentukan boundary
8. Berikan 2 contoh test case yang sudah terisi sebagai referensi

**Bagian 2: Decision Table untuk Pengajuan Cuti (15 menit)**
9. Konteks: Pengajuan cuti memiliki 4 kondisi (lihat materi slide)
   - C1: User role = Pegawai?
   - C2: Tanggal mulai ≥ hari ini?
   - C3: Tanggal selesai ≥ tanggal mulai?
   - C4: Alasan diisi?
10. **Tugas:** Buat **Decision Table** di sheet terpisah bernama "Decision Table Cuti" — minimal 6 rules
11. **Tugas:** Ubah setiap rule menjadi **test case** dan tambahkan ke Sheet "Test Cases" dengan prefix `TC-CUT-`
12. Berikan 2 contoh rule + test case yang sudah dikonversi

**Bagian 3: State Transition Test Case (10 menit)**
13. Konteks: Status cuti memiliki workflow PENDING → APPROVED/REJECTED
14. **Tugas:** Gambar State Transition Diagram sederhana (boleh ASCII / hand-drawn)
15. **Tugas:** Buat **4 test case** dari state transition — tambahkan ke Sheet "Test Cases" dengan prefix `TC-CUT-`
   - Valid transition: PENDING → APPROVED, PENDING → REJECTED
   - Invalid transition: APPROVED → PENDING (tidak boleh revert), direct submit tanpa PENDING

**Bagian 4: Bug Report (10 menit)**
16. **Tugas:** Tulis **3 bug report fiktif** di Sheet "Bug Reports" — masing-masing dari modul berbeda:
   - Bug 1 (Autentikasi): misal "Login berhasil meski password salah setelah 3 kali percobaan"
   - Bug 2 (Data Pegawai): misal "NIP duplikat berhasil disimpan tanpa error"
   - Bug 3 (Pengajuan Cuti): misal "Status cuti berubah ke APPROVED tanpa persetujuan Manajer"
17. Setiap bug report harus mengisi SEMUA field di template (12 field)
18. Berikan 1 contoh bug report yang sudah lengkap sebagai referensi

**Bagian 5: Summary & Review (pelengkap)**
19. Isi Sheet "Summary" — total test case per module, distribution per type
20. Review: pastikan semua test case punya Expected Result yang jelas & measurable

**[E] EXPECTATION:**
- Format: Markdown document sebagai handout peserta
- Setiap langkah bernomor, jelas, actionable
- Contoh pengisian sudah disediakan (2 test case EP, 2 test case BVA, 2 rule Decision Table, 1 bug report lengkap)
- **Checklist Keberhasilan:**
  - [ ] 10 test case Login (5 EP + 5 BVA) tertulis di Sheet Test Cases
  - [ ] Decision Table Cuti minimal 6 rules tertulis
  - [ ] 6 test case cuti (dari decision table + state transition) tertulis
  - [ ] State Transition Diagram tergambar
  - [ ] 3 bug report lengkap (1 per modul) tertulis di Sheet Bug Reports
  - [ ] Sheet Summary terisi
  - [ ] Semua test case memiliki Test Case ID dengan konvensi `TC-[MODULE]-[NNN]`
- **Reference Answer** di section terpisah (untuk instruktur): contoh lengkap 10 TC login + 6 TC cuti + 3 bug report
- Bahasa Indonesia formal, istilah teknis Inggris

**[N] NARROWING:**
- Lab ini HANYA menulis test case dan bug report di spreadsheet — belum eksekusi, belum tools
- Jangan minta peserta menggunakan Jira/TestRail — cukup Excel/Sheets
- Jangan minta peserta membuat test script automation — itu Fase 4
- Bug report FIKTIF — peserta membayangkan skenario, bukan menemukan bug sungguhan
- Harus selesai dalam 60 menit

---

## BAGIAN D: Prompt AI Template untuk Integrasi AI di Fase 1

> **Instruksi:** Template prompt siap pakai yang didemonstrasikan instruktur dan bisa digunakan peserta.

---

### PROMPT AI TEMPLATE #1 — Generate Test Case dari User Story

```
Kamu adalah Senior QA Test Designer. Diberikan User Story dan Acceptance Criteria berikut dari aplikasi Kepegawaian PT INIX:

---
US-002: As an HR/Admin, I want to add a new employee, so that employee records are registered.

Acceptance Criteria:
- Field NIP wajib diisi dan harus unik
- Field Nama Lengkap wajib diisi
- Field Jabatan wajib diisi
- Data baru tersimpan di database dan muncul di daftar pegawai

Konteks teknis:
- API Endpoint: POST /api/pegawai/
- Auth: Bearer JWT (role HR atau Admin)
- Database: tabel `pegawai` (id, user_id, nip, nama_lengkap, jabatan, status)
---

Tugas:
1. Turunkan SEMUA test case (positive, negative, edge case, boundary) yang mungkin
2. Format output: tabel dengan kolom:
   Test Case ID | Scenario | Test Steps | Test Data | Expected Result | Type (Positive/Negative/Edge)
3. Gunakan konvensi TC-PEG-[NNN]
4. Minimal 12 test case
5. Kelompokkan berdasarkan tipe

Fokus pada: validasi input, boundary values, error handling, RBAC (pastikan role selain HR/Admin ditolak).
```

### PROMPT AI TEMPLATE #2 — Generate Edge Case yang Sering Terlewat

```
Kamu adalah QA Security & Edge Case Specialist. Analisis fitur berikut dari aplikasi Kepegawaian PT INIX:

Fitur: Login dengan JWT Authentication
Tech Stack: Node.js + Express + Sequelize, MySQL, React frontend
Flow: User input username+password → POST /api/auth/login/ → return access_token (JWT) + refresh_token

Yang sudah ditest (test case standar):
- Login valid → berhasil
- Username salah → error
- Password salah → error
- Field kosong → error

Tugas:
Identifikasi **15 edge case dan negative scenario** yang sering TERLEWAT oleh QA junior. Kategorikan menjadi:
1. Input validation edge cases (special chars, unicode, SQL injection attempt, XSS attempt)
2. Authentication edge cases (expired token, concurrent login, brute force, account locking)
3. Session/token edge cases (token tampering, expired refresh, token reuse after logout)
4. Network/timing edge cases (timeout, slow connection, double-click submit)
5. Data integrity edge cases (case sensitivity username, whitespace, encoding)

Format: tabel dengan kolom:
No | Kategori | Edge Case Scenario | Test Data | Expected Behavior | Risiko jika Tidak Diuji
```

### PROMPT AI TEMPLATE #3 — Draft Bug Report Otomatis dari Deskripsi Singkat

```
Kamu adalah QA Lead. Saya menemukan bug saat testing aplikasi Kepegawaian PT INIX. Tolong buatkan bug report lengkap dari deskripsi singkat saya:

Deskripsi singkat bug:
"Saat HR menambahkan pegawai baru dengan NIP yang sudah ada di database, sistem tidak menampilkan error dan data duplikat tersimpan. Seharusnya sistem menolak dan menampilkan pesan error NIP sudah terdaftar."

Informasi tambahan:
- Environment: Chrome 120, staging.inix.local, v1.2.0
- Module: Data Pegawai
- API: POST /api/pegawai/

Buatkan bug report lengkap dengan format:
1. Bug ID (format: BUG-INIX-[NNN])
2. Title (singkat, deskriptif: what + where)
3. Module
4. Environment
5. Severity (Critical/Major/Minor/Trivial) — sertakan alasan
6. Priority (High/Medium/Low) — sertakan alasan
7. Steps to Reproduce (numbered, spesifik)
8. Expected Result
9. Actual Result
10. Root Cause Hypothesis (tebakan penyebab berdasarkan konteks teknis)
11. Suggested Fix (saran perbaikan untuk developer)
12. Attachments needed (daftar screenshot/log yang perlu dilampirkan)
```

---

## Checklist Output TAHAP 2

- [ ] Prompt materi slide PPTX (~44 slide) — Level Testing, Tipe Testing, Matriks Level↔Tipe, EP, BVA, Decision Table, State Transition, Exploratory, Risk-based, Bug Report
- [ ] Prompt template Excel test case (3 sheets: Test Cases, Bug Reports, Summary)
- [ ] Prompt Lab 1 (60 menit) — 10 TC Login + Decision Table Cuti + State Transition + 3 Bug Report
- [ ] 3 AI Prompt Template (generate TC dari User Story, edge case, draft bug report)
- [ ] Semua contoh menggunakan studi kasus PT INIX
- [ ] Format penamaan TC: `TC-AUTH-`, `TC-PEG-`, `TC-CUT-`
- [ ] Reference Answer untuk instruktur
- [ ] Bahasa Indonesia formal, istilah teknis Inggris
