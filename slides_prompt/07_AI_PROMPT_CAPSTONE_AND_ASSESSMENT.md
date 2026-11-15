# 07 — Capstone Project & Assessment (End-to-End QA Project + Rubrik + Soal)

## Tujuan Prompt

Menghasilkan 3 output:
1. **Prompt Capstone Project** — skenario pengujian end-to-end aplikasi PT INIX (6 tahap: Test Plan → Manual → Automation → AI → CI/CD → Performance).
2. **Prompt Rubrik Penilaian** — rubrik evaluasi kompetensi QA (Junior → Mid → Senior) dengan 6 dimensi dan bobot.
3. **Prompt Soal Assessment** — soal per fase (pilihan ganda + esai singkat + tugas praktik).

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Pembahasan 4 (Capstone) + Pembahasan 5 (Assessment)
- **Hari pelatihan:** Hari 4
- **File referensi:** Semua file prompt sebelumnya (01–06), `STUDI_KASUS_INIX.md`, `CURRICULUM_OVERVIEW.md`
- **Prerequisite peserta:** Sudah menyelesaikan Fase 1–5 (Lab 0 s/d Lab 5)

---

## BAGIAN A: Prompt untuk Capstone Project

> **Instruksi:** Copy-paste prompt di bawah ini ke AI untuk menghasilkan dokumen Capstone Project.

---

### PROMPT CAPSTONE PROJECT

**[R] ROLE:**
Bertindaklah sebagai **QA Program Director & Assessment Designer** yang merancang proyek akhir komprehensif untuk pelatihan Software Testing. Capstone project harus mengintegrasikan SEMUA kompetensi dari Fase 1–5 dalam satu skenario pengujian end-to-end yang realistis. Proyek harus menantang namun achievable dalam waktu yang ditentukan.

**[I] INPUT:**
Buat dokumen **"Capstone Project: Pengujian End-to-End Aplikasi Kepegawaian PT INIX"** dengan konteks:

- **Durasi pengerjaan:** 120 menit (sesi Hari 4)
- **Mode:** Individu atau kelompok (maks 3 orang)
- **Peserta:** QA Engineer Junior-Mid yang telah menyelesaikan Lab 0–5
- **Aplikasi:** Kepegawaian PT INIX
  - 3 Modul: Autentikasi, Data Pegawai, Pengajuan Cuti
  - Backend: Node.js + Express + Sequelize | Frontend: React | Database: MySQL
  - 10 API Endpoint | 4 Roles (Admin, HR, Manajer, Pegawai)
  - Base URL: `http://localhost:8000`
- **Artefak yang sudah dimiliki peserta dari lab sebelumnya:**
  - Template Excel test case (Lab 1)
  - Postman Collection PT INIX (Lab 2)
  - Project TypeScript `inix-qa-exercise` (Lab 3)
  - Playwright project `inix-playwright` dengan POM (Lab 4)
  - k6 script & GitHub Actions workflow (Lab 5)

**[S] STEPS:**
Susun dokumen Capstone Project dengan struktur berikut:

---

**1. Overview & Briefing**
- Skenario: "Anda adalah QA Lead yang ditugaskan memimpin pengujian release v2.0 Aplikasi Kepegawaian PT INIX. Fitur baru: modul Pengajuan Cuti (workflow approval). Anda harus menyusun strategi, mengeksekusi, mengautomasi, dan melaporkan hasil pengujian secara komprehensif."
- Deliverable checklist (seluruh artefak yang harus dikumpulkan)
- Timeline pengerjaan (120 menit, dibagi per tahap)
- Kriteria penilaian (ringkasan rubrik)

**2. Tahap A: Master Test Plan (20 menit)**
- **Tugas:** Buat dokumen Master Test Plan untuk release v2.0 PT INIX
- **Template yang harus diisi:**

  | Section | Isi yang Diharapkan |
  |---|---|
  | **1. Pendahuluan** | Tujuan pengujian, scope release v2.0, referensi dokumen (FRD/SRS) |
  | **2. Scope** | In-scope: 3 modul (Auth, Pegawai, Cuti) — Out-scope: apa yang TIDAK diuji (misal: mobile, load >500 user) |
  | **3. Test Strategy** | Tipe testing yang digunakan (Functional, Regression, Smoke, Exploratory), level testing (System, Integration/API) |
  | **4. Resource & Schedule** | Siapa tester, timeline per modul, tools yang digunakan |
  | **5. Risk Assessment** | Tabel risiko min. 5 item (Module, Risk, Likelihood, Impact, Score, Mitigasi) — dari Lab 0 |
  | **6. Entry Criteria** | Syarat mulai testing (deployment staging done, test data ready, test environment verified) |
  | **7. Exit Criteria** | Syarat selesai testing (semua High priority TC pass, zero Critical bug open, P95 < 500ms) |
  | **8. Defect Management** | Severity/Priority definition, defect lifecycle, escalation path |
  | **9. Test Environment** | URL, credentials, browser, tools |
  | **10. Deliverables** | Daftar artefak: test plan, test case, bug report, automation report, perf report |

- **Output:** File `Capstone_Test_Plan.md` atau `Capstone_Test_Plan.docx`

**3. Tahap B: Manual Testing — 20 Test Case (25 menit)**
- **Tugas:** Buat 20 test case yang mencakup semua modul PT INIX
- **Distribusi:**
  | Modul | Jumlah TC | Teknik Wajib | Contoh Skenario |
  |---|---|---|---|
  | Autentikasi | 6 TC | EP, BVA | Login valid, invalid, field kosong, RBAC |
  | Data Pegawai | 7 TC | EP, BVA | CRUD lengkap, NIP duplikat, field wajib kosong |
  | Pengajuan Cuti | 7 TC | Decision Table, State Transition | Submit valid, tanggal invalid, approve, reject, unauthorized |

- **Persyaratan:**
  - Gunakan template Excel dari Lab 1
  - Setiap TC harus punya: TC ID, Module, Steps, Test Data, Expected Result
  - Minimal 3 TC menggunakan BVA (boundary values)
  - Minimal 1 Decision Table untuk logika cuti
  - Minimal 2 TC State Transition (PENDING → APPROVED, PENDING → REJECTED)

- **Eksekusi (opsional jika waktu cukup):**
  - Eksekusi 5 TC prioritas tertinggi menggunakan Postman/DevTools
  - Screenshot hasil eksekusi
  - Jika ditemukan bug: tulis bug report (min 1)

- **Output:** File Excel `Capstone_TestCase_20.xlsx`

**4. Tahap C: Automation Suite (30 menit)**
- **Tugas:** Kembangkan Playwright automation suite dari project Lab 4
- **Target:**
  - Minimal **10 UI test cases** — menggunakan POM:
    | Test Group | Jumlah | Contoh |
    |---|---|---|
    | Login | 3 | Sukses HR, gagal password, field kosong |
    | Data Pegawai | 4 | Lihat list, tambah, edit, hapus |
    | Pengajuan Cuti | 3 | Submit valid, tanggal invalid, approve oleh manajer |

  - Minimal **5 API test cases** — menggunakan `request` context:
    | Test Group | Jumlah | Contoh |
    |---|---|---|
    | Auth API | 2 | Login valid 200, login invalid 401 |
    | Pegawai API | 2 | POST create 201 + schema, GET list + schema |
    | Cuti API | 1 | POST submit cuti 201 |

- **Persyaratan teknis:**
  - POM wajib — setiap halaman = 1 class
  - Locator best practice (getByRole, getByLabel, getByTestId)
  - Schema validation Zod minimal pada 2 endpoint
  - Test data menggunakan factory pattern atau fixtures
  - Cleanup data di afterEach
  - Semua test PASS saat dijalankan headless

- **Output:** Project `inix-playwright` di GitHub dengan semua test

**5. Tahap D: Integrasi AI (15 menit)**
- **Tugas:** Demonstrasikan penggunaan AI untuk meningkatkan efisiensi QA
- **Minimal 3 penggunaan AI yang harus didokumentasikan:**

  | Use Case | Tool/LLM | Input | Output |
  |---|---|---|---|
  | Generate test case tambahan | ChatGPT/Claude/Gemini | User Story US-004 (cuti) | 5 test case edge case tambahan |
  | Generate test data sintetis | ChatGPT/Claude/Gemini | Skema Pegawai (interface) | 10 data pegawai valid + 5 invalid (JSON) |
  | Analisis bug / draft report | ChatGPT/Claude/Gemini | Deskripsi singkat bug | Bug report lengkap 12 field |

- **Persyaratan:**
  - Tulis prompt yang digunakan (input ke AI)
  - Tulis output yang didapat dari AI
  - Evaluasi: apakah output AI akurat? Apa yang perlu diedit?
  - Simpan di file `Capstone_AI_Integration.md`

- **Output:** File `Capstone_AI_Integration.md` berisi 3 prompt + output + evaluasi

**6. Tahap E: Pipeline CI/CD (15 menit)**
- **Tugas:** Pastikan GitHub Actions pipeline berjalan dengan automation suite lengkap
- **Persyaratan:**
  - Workflow `.github/workflows/qa-pipeline.yml` harus menjalankan:
    - TypeScript type check
    - Playwright test (UI + API)
    - Upload test report artifact
  - Push ke GitHub → pipeline trigger → semua job PASS (✅)
  - Screenshot: GitHub Actions result page

- **Output:** Pipeline result screenshot + artifact (Playwright report)

**7. Tahap F: Performance Snapshot (15 menit)**
- **Tugas:** Jalankan quick performance check
- **Persyaratan:**
  - k6 load test: 50 VU, 1 menit, endpoint login + GET pegawai
  - Catat: P95 response time, error rate, throughput
  - Lighthouse audit: halaman login — catat score Performance, Accessibility
  - Buat summary singkat: apakah NFR-001 (≤ 500ms) dan target Accessibility terpenuhi?

- **Output:** `Capstone_Performance_Summary.md` (k6 result + Lighthouse scores)

---

**8. Deliverable Checklist (Ringkasan)**

| No | Deliverable | Format | Dari Tahap |
|---|---|---|---|
| 1 | Master Test Plan | .md atau .docx | A |
| 2 | 20 Test Cases (Excel) | .xlsx | B |
| 3 | Bug Report (min 1, jika ditemukan) | Di sheet Excel | B |
| 4 | Playwright project (10 UI + 5 API test) | GitHub repo | C |
| 5 | AI Integration dokumentasi (3 use case) | .md | D |
| 6 | GitHub Actions pipeline result | Screenshot | E |
| 7 | Performance summary (k6 + Lighthouse) | .md | F |

**[E] EXPECTATION:**
- Format: Markdown document — panduan capstone siap diberikan ke peserta
- Setiap tahap: deskripsi tugas jelas, persyaratan spesifik, contoh/template, output yang diharapkan
- Timeline realistis: 120 menit total, dibagi per tahap
- Deliverable checklist dengan format file yang jelas
- Template Master Test Plan yang bisa langsung diisi
- Distribusi test case per modul sudah ditentukan
- Bahasa Indonesia formal, istilah teknis Inggris

**[N] NARROWING:**
- Capstone = integrasi semua fase — BUKAN materi baru
- Peserta menggunakan artefak dari Lab 0–5 sebagai starting point (bukan dari nol)
- Jika waktu kurang: Tahap D (AI) dan F (Performance) bisa dikerjakan simplified
- Tidak ada requirement baru di luar FRD/SRS PT INIX yang sudah ada
- Mode individu ATAU kelompok — panduan harus support keduanya
- Selesai dalam 120 menit (prioritas: A → B → C → E → D → F)

---

## BAGIAN B: Prompt untuk Rubrik Penilaian

> **Instruksi:** Copy-paste prompt ini ke AI untuk menghasilkan rubrik penilaian komprehensif.

---

### PROMPT RUBRIK PENILAIAN

**[R] ROLE:**
Bertindaklah sebagai **QA Training Evaluator & Competency Assessor** yang merancang rubrik penilaian untuk program pelatihan Software Testing. Rubrik harus objektif, measurable, dan dapat digunakan untuk mengukur kematangan kompetensi dari Junior ke Senior.

**[I] INPUT:**
Buat **Rubrik Penilaian Capstone Project** untuk pelatihan Software Testing PT INIX dengan 6 dimensi kompetensi.

**[S] STEPS:**

1. **Rubrik utama — 6 dimensi × 3 level:**

  | Kompetensi | Bobot | Junior (Score 1–2) | Mid (Score 3–4) | Senior (Score 5) |
  |---|---|---|---|---|
  | **Test Plan & Strategy** | 20% | ... | ... | ... |
  | **Manual Testing** | 20% | ... | ... | ... |
  | **Automation** | 25% | ... | ... | ... |
  | **AI Integration** | 15% | ... | ... | ... |
  | **Performance & Security** | 10% | ... | ... | ... |
  | **Dokumentasi & Komunikasi** | 10% | ... | ... | ... |

  Untuk setiap sel: berikan **deskripsi perilaku spesifik** (3–4 bullet points) yang menunjukkan level tersebut. Contoh untuk Test Plan Junior: "Mengisi template tanpa modifikasi, scope tidak jelas, risk assessment generik."

2. **Detail per dimensi — indikator terukur:**

  **Test Plan & Strategy (20%):**
  - Junior: Mengisi template test plan tanpa penyesuaian konteks; scope copy-paste dari FRD; risk assessment generik (tidak spesifik PT INIX); entry/exit criteria tidak lengkap
  - Mid: Menyesuaikan test plan dengan konteks PT INIX; scope jelas (in/out); risk assessment spesifik per modul dengan scoring; entry/exit criteria measurable
  - Senior: Merancang test strategy dari nol; risk-based test prioritization terintegrasi; defect management process terdefinisi; resource & timeline realistis

  **Manual Testing (20%):**
  - Junior: Test case dasar (happy path only); tidak ada negative test; steps tidak detail; expected result ambigu
  - Mid: EP, BVA, Decision Table diterapkan lengkap; positive & negative test seimbang; test data spesifik; expected result measurable; bug report lengkap
  - Senior: Exploratory testing charter-based; risk-based prioritization; edge case komprehensif; state transition lengkap; bug report dengan root cause hypothesis

  **Automation (25%):**
  - Junior: Script berjalan tapi tanpa POM; locator fragile (CSS class, XPath panjang); hard wait; tidak ada assertion yang bermakna
  - Mid: POM diterapkan benar; locator best practice (getByRole/getByLabel); assertion spesifik; test data fixtures/factory; cleanup afterEach; semua test PASS
  - Senior: Framework maintainable (base page, helper, utility); schema validation; anti-flaky pattern; trace untuk debugging; CI/CD integrated; code review quality

  **AI Integration (15%):**
  - Junior: Menggunakan prompt generik ("buatkan test case untuk login"); output AI digunakan tanpa review
  - Mid: Prompt engineering efektif (konteks spesifik, format output diminta, constraint diberikan); output AI di-review dan diedit; 3 use case berbeda
  - Senior: Workflow AI terintegrasi (generate → review → refine → execute); prompt template reusable; evaluasi kritis terhadap output AI; AI sebagai accelerator bukan pengganti

  **Performance & Security (10%):**
  - Junior: Menjalankan k6/ZAP tanpa kustomisasi; tidak bisa membaca output; copy-paste default config
  - Mid: k6 script disesuaikan (threshold, skenario PT INIX); ZAP findings di-triage; Lighthouse score dicatat dan dianalisis
  - Senior: Rekomendasi perbaikan spesifik berdasarkan hasil; korelasi antara k6 result dan code/infra issue; security findings diprioritaskan dengan risk-based approach

  **Dokumentasi & Komunikasi (10%):**
  - Junior: Laporan ada tapi tidak terstruktur; screenshot tanpa penjelasan; tidak ada summary
  - Mid: Laporan terstruktur (section jelas); screenshot dengan annotation; summary & conclusion; deliverable lengkap sesuai checklist
  - Senior: Laporan eksekutif (ringkas, actionable, stakeholder-friendly); recommendation section; metrics dashboard; bisa mempresentasikan findings

3. **Scoring formula:**
   - Total Score = Σ (Score dimensi × Bobot)
   - Range: 1.00 – 5.00
   - Klasifikasi:
     | Range | Level | Keterangan |
     |---|---|---|
     | 4.50 – 5.00 | **Excellent** | Siap sebagai Senior QA / QA Lead |
     | 3.50 – 4.49 | **Proficient** | Mid-level QA, siap handle project mandiri |
     | 2.50 – 3.49 | **Developing** | Junior QA, perlu mentoring di area lemah |
     | 1.00 – 2.49 | **Beginner** | Perlu pelatihan lanjutan intensif |

4. **Score sheet template** — tabel yang diisi penilai per peserta:
   | Peserta | Test Plan (/5 × 20%) | Manual (/5 × 20%) | Automation (/5 × 25%) | AI (/5 × 15%) | Perf & Sec (/5 × 10%) | Dokumentasi (/5 × 10%) | **Total** | **Level** |
   |---|---|---|---|---|---|---|---|---|

**[E] EXPECTATION:**
- Format: Markdown document siap cetak
- Rubrik detail per dimensi — deskripsi perilaku spesifik (bukan generik)
- Scoring formula jelas dan mudah dihitung
- Score sheet template siap pakai
- Klasifikasi level output (Excellent → Beginner) dengan keterangan
- Bahasa Indonesia formal, istilah teknis Inggris

**[N] NARROWING:**
- Rubrik untuk Capstone Project ini — bukan untuk keseluruhan pelatihan
- Penilaian berbasis artefak deliverable — bukan observasi presentasi saja
- Jangan membuat rubrik terlalu kompleks — 6 dimensi cukup
- Score 1–5 per dimensi — jangan desimal

---

## BAGIAN C: Prompt untuk Soal Assessment per Fase

> **Instruksi:** Copy-paste prompt ini ke AI untuk menghasilkan soal assessment.

---

### PROMPT SOAL ASSESSMENT

**[R] ROLE:**
Bertindaklah sebagai **QA Certification Exam Designer** yang membuat soal evaluasi untuk pelatihan Software Testing. Soal harus menguji pemahaman konseptual DAN kemampuan praktis. Tingkat kesulitan: ISTQB Foundation Level (adaptasi konteks PT INIX).

**[I] INPUT:**
Buat **Soal Assessment per Fase** untuk pelatihan Software Testing Aplikasi PT INIX. Setiap fase memiliki 3 tipe soal.

**[S] STEPS:**

Buat soal untuk setiap fase berikut:

---

**Assessment Fase 0 — SDLC, STLC, FRD/SRS (10 soal)**

*Pilihan Ganda (5 soal):*
- Topik: fase SDLC, model SDLC (Waterfall/Agile/V-Model), perbedaan QA/QC/Testing, fase STLC, hubungan SDLC↔STLC
- Format: 4 opsi (A/B/C/D), 1 jawaban benar
- Tingkat: mudah–sedang
- Sertakan jawaban benar + penjelasan singkat

*Esai Singkat (3 soal):*
- Topik: jelaskan perbedaan STLC dan SDLC, mengapa QA harus terlibat sejak requirement phase, apa pentingnya FRD/SRS untuk QA
- Maks 5 kalimat per jawaban

*Tugas Praktik (2 soal):*
- Dari User Story US-003 PT INIX, turunkan 3 acceptance criteria tambahan
- Identifikasi 2 risiko dari modul Pengajuan Cuti dan tentukan prioritas testingnya

---

**Assessment Fase 1 — Manual Testing (10 soal)**

*Pilihan Ganda (5 soal):*
- Topik: level testing (Unit/Integration/System/UAT), tipe testing, EP, BVA, Decision Table, bug report severity vs priority
- Sertakan contoh dari PT INIX

*Esai Singkat (3 soal):*
- Jelaskan kapan menggunakan Decision Table vs State Transition Diagram
- Diberikan bug: "Login berhasil meski password kosong" — tentukan Severity dan Priority, berikan alasan
- Apa perbedaan Smoke Testing dan Sanity Testing? Berikan contoh di PT INIX

*Tugas Praktik (2 soal):*
- Dari FR-004 (validasi NIP), buat 4 test case menggunakan EP
- Buat Decision Table untuk logika cuti: 4 kondisi, minimal 5 rules

---

**Assessment Fase 2 — Manual Testing Teknis (10 soal)**

*Pilihan Ganda (5 soal):*
- Topik: HTTP methods, status codes, JWT structure, DevTools tabs, Postman test script (pm.expect)
- Sertakan code snippet

*Esai Singkat (3 soal):*
- Apa beda status code 401 vs 403? Berikan contoh di PT INIX
- Mengapa QA perlu memverifikasi data di database, bukan hanya percaya response API?
- Jelaskan 3 hal yang bisa dilihat di tab Network DevTools saat testing login

*Tugas Praktik (2 soal):*
- Tulis Postman test script (pm.test, pm.expect) untuk endpoint POST /api/pegawai/ — cek status 201, field nip ada, response time < 500ms
- Tulis SQL query untuk mencari semua pengajuan cuti yang statusnya PENDING beserta nama pegawai (gunakan JOIN)

---

**Assessment Fase 3 — Pemrograman untuk QA (10 soal)**

*Pilihan Ganda (5 soal):*
- Topik: TypeScript types, interface vs type, async/await, array methods (filter/map/find), Git commands
- Sertakan code snippet

*Esai Singkat (3 soal):*
- Apa yang terjadi jika lupa `await` sebelum `page.click()` di Playwright?
- Jelaskan perbedaan `npm install` vs `npm ci` dan kapan masing-masing digunakan
- Mengapa QA perlu memahami Git branching? Berikan skenario penggunaan di tim

*Tugas Praktik (2 soal):*
- Buat interface TypeScript `CutiResponse` berdasarkan JSON response berikut: `{"id":1, "pegawai_id":5, "tgl_mulai":"2026-12-01", "tgl_selesai":"2026-12-03", "alasan":"Urusan keluarga", "status":"PENDING"}`
- Buat fungsi async TypeScript `fetchPegawai(token: string): Promise<Pegawai[]>` yang memanggil GET /api/pegawai/ dengan Bearer token

---

**Assessment Fase 4 — Automation (10 soal)**

*Pilihan Ganda (5 soal):*
- Topik: Playwright locator priority, POM benefits, flaky test causes, schema validation, test data management
- Sertakan code snippet

*Esai Singkat (3 soal):*
- Mengapa `page.locator('.css-abc123')` adalah anti-pattern? Apa alternatif yang lebih baik?
- Jelaskan 3 penyebab flaky test dan solusi masing-masing
- Apa perbedaan schema validation dengan functional assertion? Kapan keduanya digunakan?

*Tugas Praktik (2 soal):*
- Refactor code berikut (tanpa POM) menjadi menggunakan Page Object Model:
  ```typescript
  test('login test', async ({ page }) => {
    await page.goto('/login');
    await page.locator('#username').fill('admin@inix.com');
    await page.locator('#password').fill('Admin@123!');
    await page.locator('button.submit').click();
    await expect(page).toHaveURL('/dashboard');
  });
  ```
- Buat Zod schema untuk response endpoint GET /api/pegawai/ (array of Pegawai)

---

**Assessment Fase 5 — Performance, Security, CI/CD (10 soal)**

*Pilihan Ganda (5 soal):*
- Topik: tipe performance test (Load/Stress/Spike/Soak), k6 thresholds, OWASP Top 10, ZAP alert risk levels, GitHub Actions concepts
- Sertakan k6 output snippet atau YAML snippet

*Esai Singkat (3 soal):*
- k6 output menunjukkan P95 = 680ms, threshold 500ms → FAIL. Apa langkah selanjutnya?
- Jelaskan perbedaan DAST dan SAST. Mana yang lebih cocok untuk menemukan SQL Injection di PT INIX?
- Apa itu branch protection di GitHub dan mengapa penting untuk QA pipeline?

*Tugas Praktik (2 soal):*
- Tulis k6 options object: 30 VU, 2 menit durasi, threshold P95 < 300ms dan error rate < 0.5%
- Tulis GitHub Actions step yang menjalankan Playwright test dan upload report sebagai artifact

---

**[E] EXPECTATION:**
- Format: Markdown document siap cetak
- Total: 60 soal (10 per fase × 6 fase)
- Setiap soal pilihan ganda: 4 opsi, jawaban benar ditandai, penjelasan singkat
- Setiap esai: contoh jawaban ideal (2–5 kalimat)
- Setiap tugas praktik: contoh jawaban/kode lengkap
- Tingkat kesulitan: 40% mudah, 40% sedang, 20% sulit
- Semua konteks menggunakan PT INIX
- Bahasa Indonesia formal, kode & istilah teknis Inggris

**[N] NARROWING:**
- Soal untuk evaluasi pemahaman — bukan sertifikasi resmi ISTQB
- Fokus pada kompetensi praktis — bukan hafalan definisi
- Soal pilihan ganda: hindari trick question — fokus pada pemahaman konsep
- Tugas praktik: scope kecil (5–10 menit pengerjaan per soal)
- Semua referensi dari PT INIX — jangan buat soal dengan konteks aplikasi lain

---

## Checklist Output TAHAP 7

- [ ] Prompt Capstone Project lengkap (6 tahap: Test Plan, Manual 20 TC, Automation 15 test, AI Integration 3 use case, CI/CD pipeline, Performance snapshot)
- [ ] Template Master Test Plan 10 section
- [ ] Distribusi test case per modul (6+7+7 = 20 TC)
- [ ] Deliverable checklist (7 artefak)
- [ ] Timeline 120 menit
- [ ] Prompt Rubrik Penilaian (6 dimensi × 3 level, deskripsi perilaku spesifik, scoring formula, score sheet template, klasifikasi Excellent→Beginner)
- [ ] Prompt Soal Assessment (60 soal: 30 PG + 18 esai + 12 tugas praktik, mencakup Fase 0–5)
- [ ] Jawaban & penjelasan untuk semua soal
- [ ] Semua konteks PT INIX
- [ ] Bahasa Indonesia formal, istilah teknis Inggris
