# MASTER PROMPT: Pembuatan Materi "Software Testing Plan and Implementation" (dengan Integrasi AI-Assisted QA)

Gunakan framework **R.I.S.E.N.** di bawah ini untuk menghasilkan kurikulum, silabus, dan modul materi pelatihan komprehensif.

---

## 1. [R] ROLE (Peran)

Bertindaklah sebagai **Principal QA Architect, Senior Test Automation Specialist, dan Lead QA Technical Instructor** berstandar industri global (ISTQB & Modern Agile Testing). Anda memiliki pengalaman mendalam dalam:

- Pembuat Materi Pelatihan IT dan Pembuat Lab Praktiknya.
- Perancangan Test Plan strategis end-to-end (Risk-based Testing, STLC).
- Eksekusi manual testing teknis Frontend (FE) dan Backend (BE).
- Pengembangan automation framework (UI, API, Contract Testing) dengan TypeScript dan Playwright.
- Pengujian Non-Fungsional (Performance, Security) serta orkestrasi CI/CD pipeline.
- Penerapan **AI-Powered Software Testing** untuk akselerasi test design, script generation, self-healing tests, synthetic data generation, dan bug analysis.

---

## 2. [I] INPUT (Konteks & Bahan Referensi)

Kembangkan materi berdasarkan kebutuhan training berikut:

### A. Pilar Utama

1. **Manual Testing yang Tajam:** Merancang test case berakurasi tinggi (EP, BVA, Decision Table, State Transition), exploratory testing, dan bug reporting berkualitas tinggi.
2. **Automation UI & API:** Mengubah pengujian repetitif menjadi script yang stabil, maintainable, dan terintegrasi di pipeline.
3. **Kualitas Strategis:** Berpikir berbasis risiko, performa & keamanan di CI/CD, efektivitas kolaborasi tim.
4. **AI for QA (Tujuan Khusus):** Pemanfaatan tools AI modern (LLM, AI agent, AI-based testing tools) untuk efisiensi seluruh siklus QA.
5. **Integration and Automation:** Membuat automation framework yang andal dan terintegrasi dalam CI/CD pipeline.
6. **Performance and Security:** Melakukan pengujian non-fungsional dan memastikan keamanan aplikasi.
7. **Collaboration and Communication:** Meningkatkan efektivitas kolaborasi tim dan komunikasi.
8. **Pembuatan Materi dan Lab Pelatihan:** Sebagai Pembuat materi yang handal.

### B. Roadmap 5 Fase Testing sebagai Isi Materi

| Fase | Topik Utama | Tools |
|------|-------------|-------|
| **Fase 1** | Fondasi & Manual Testing — SDLC/STLC, level & tipe testing, EP, BVA, Decision Table, Bug Report, Risk-based & Exploratory Testing | Jira, TestRail/Qase, Spreadsheet |
| **Fase 2** | Manual Teknis Frontend & Backend — Arsitektur Web, Chrome DevTools, Responsive UI, Accessibility/a11y, HTTP/REST, Auth/JWT, Postman, SQL Database verification | Chrome DevTools, Lighthouse, axe DevTools, Postman/Bruno, DBeaver/SQL Client |
| **Fase 3** | Pemrograman untuk QA — TypeScript dasar, OOP/Class, Async/Await, Data Structure, npm/package manager, Git & GitHub workflow, Docker basics | Node.js, Git, Docker |
| **Fase 4** | Automation UI & API — Playwright + Page Object Model (POM), Locator Strategy, Flaky Test handling, Trace Viewer, API Automation, Schema & Contract Validation, Test Data management | Playwright, Cypress, Postman/Newman, REST Assured/pytest, Allure Report |
| **Fase 5** | Performance, Security, & CI/CD — Load testing, Core Web Vitals, OWASP Top 10, DAST/SAST, SonarQube, Semgrep, Trivy, CI/CD pipeline | k6, JMeter, OWASP ZAP, Burp Suite, SonarQube, Semgrep, PHPStan, Snyk, GitHub Actions/GitLab CI |

### C. Studi Kasus

**Aplikasi Kepegawaian PT INIX**
- Backend: Node.js + Express + Sequelize
- Database: MySQL
- Frontend: React (sederhana)

### D. Sumber Materi Terpercaya

- **Referensi lokal:** `C:\Users\FaizalDamarRamadhan\Downloads\softwaretesting\book_and_resource_md`
- **Aset gambar:** `C:\Users\FaizalDamarRamadhan\Downloads\softwaretesting\assets` (gambar bersumber dari internet terpercaya, diunduh ke folder ini)

---

## 3. [S] STEPS (Instruksi Langkah Kerja)

Ikuti tahapan pembuatan materi dan lab berikut secara berurutan. Setiap langkah menghasilkan satu atau lebih file prompt yang siap dieksekusi ke AI.

---

### TAHAP 0 — Persiapan & Scaffolding

**Tujuan:** Membangun struktur folder, kerangka kurikulum, dan dokumen fondasi sebelum pembuatan konten dimulai.

**Langkah-langkah:**

1. **Buat struktur folder proyek** sesuai konvensi berikut:
   ```
   softwaretesting/
   ├── assets/                    # Gambar, diagram, screenshot
   ├── book_and_resource_md/      # Referensi & sumber materi
   ├── labs/                      # File lab hands-on (.md)
   │   ├── fase1/
   │   ├── fase2/
   │   ├── fase3/
   │   ├── fase4/
   │   └── fase5/
   ├── slides_prompt/             # Prompt AI untuk membuat slide PPTX
   ├── capstone/                  # Proyek akhir & rubrik penilaian
   └── MASTER_PROMPT.md
   ```

2. **Buat file `CURRICULUM_OVERVIEW.md`** — kerangka silabus lengkap 5 fase, durasi per sesi, dan peta kompetensi (Junior → Mid → Senior).

3. **Buat file `STUDI_KASUS_INIX.md`** — deskripsi aplikasi Kepegawaian PT INIX meliputi:
   - Daftar modul fitur (login, data pegawai, absensi, penggajian, laporan)
   - Arsitektur sistem (Express.js REST + React + MySQL)
   - Contoh dokumen FRD/SRS dengan minimal 5 user story
   - ERD sederhana tabel database

4. **Buat file `PROMPT_CONVENTIONS.md`** — panduan konvensi penamaan file prompt: `[NUMBER]_[AI_PROMPT]_[TITLE_GOAL].md`

---

### TAHAP 1 — Pengantar & Konteks Industri

**Tujuan:** Membuat materi pembuka yang membangun pemahaman konteks SDLC, peran QA, dan relevansi pelatihan.

**Output file:** `01_AI_PROMPT_INTRO_SDLC_AND_QA_CONTEXT.md`

**Langkah-langkah:**

1. **Buat prompt AI** untuk menghasilkan slide PPTX Pembahasan 0: *Pengantar Software Testing & SDLC* dengan cakupan:
   - Apa itu SDLC — fase-fase: Requirements → Design → Development → Testing → Deployment → Maintenance
   - Model SDLC: Waterfall, Agile/Scrum, V-Model — perbedaan dan kapan digunakan
   - Peran & tanggung jawab QA Engineer dalam tim
   - Perbedaan QA vs QC vs Testing
   - Pengenalan STLC (Software Testing Life Cycle) dan kaitannya dengan SDLC

2. **Buat contoh dokumen FRD/SRS** untuk studi kasus PT INIX:
   - Minimal 5 Functional Requirement dengan format tabel: ID | Requirement | Priority | Module
   - Minimal 3 Non-Functional Requirement (performance, security, usability)
   - Minimal 5 User Story dengan format: *As a [role], I want to [action], so that [benefit]*

3. **Buat prompt AI untuk Lab Pengantar:**
   - Peserta membaca dokumen FRD/SRS PT INIX
   - Peserta mengidentifikasi fitur mana yang paling berisiko (risk-based thinking awal)
   - Output: tabel identifikasi risiko sederhana di Excel/CSV

---

### TAHAP 2 — Fase 1: Fondasi & Manual Testing

**Tujuan:** Membuat materi dan lab untuk teknik desain test case manual dan bug reporting.

**Output file:** `02_AI_PROMPT_FASE1_FOUNDATION_MANUAL_TESTING.md`

**Langkah-langkah:**

1. **Buat prompt AI untuk slide Fase 1** mencakup:
   - Level Testing: Unit → Integration → System → Acceptance (UAT) — pemetaan ke tim yang bertanggung jawab
   - Tipe Testing: Functional, Regression, Smoke, Sanity, Exploratory, Usability, Compatibility
   - **Pemetaan Level ↔ Tipe Testing** dalam tabel matriks (mana tipe cocok di level mana)
   - Teknik desain test case: Equivalence Partitioning (EP), Boundary Value Analysis (BVA), Decision Table, State Transition Diagram
   - Exploratory Testing: Charter-based, Time-boxed Session
   - Risk-based Testing: Risk Assessment Matrix (Likelihood × Impact)
   - Bug Report anatomy: ID, Title, Steps to Reproduce, Expected vs Actual, Severity, Priority, Environment

2. **Buat prompt AI untuk struktur Excel test case** dengan kolom:
   `Test Case ID | Module | Feature | Test Scenario | Test Steps | Test Data | Expected Result | Actual Result | Status | Priority | Severity | Tester | Date`
   — format dapat diekspor ke CSV

3. **Buat prompt AI untuk Lab Fase 1:**
   - Studi kasus: fitur Login dan Manajemen Data Pegawai PT INIX
   - Tugas: buat 10 test case menggunakan EP & BVA pada form login
   - Tugas: buat Decision Table untuk fitur perhitungan cuti
   - Tugas: laporkan 3 bug fiktif menggunakan template bug report standar
   - Output: file Excel test case + 3 bug report di Jira (simulasi/template)

4. **Buat prompt AI untuk integrasi AI di Fase 1:**
   - Prompt LLM untuk *menurunkan test case* dari User Story PT INIX
   - Prompt untuk *menghasilkan edge case* yang sering terlewat
   - Prompt untuk *draft bug report otomatis* dari deskripsi singkat

---

### TAHAP 3 — Fase 2: Manual Testing Teknis (FE & BE)

**Tujuan:** Membuat materi dan lab pengujian teknis menggunakan Chrome DevTools, Postman, dan SQL.

**Output file:** `03_AI_PROMPT_FASE2_TECHNICAL_MANUAL_TESTING.md`

**Langkah-langkah:**

1. **Buat prompt AI untuk slide Fase 2** mencakup:
   - Arsitektur web modern: Client–Server, REST API, HTTP Methods & Status Codes
   - Chrome DevTools: tab Network, Console, Elements, Lighthouse, Application (cookies/localStorage)
   - Responsive UI testing & Accessibility (a11y) dengan axe DevTools
   - HTTP/REST: Request/Response anatomy, Headers, Auth (Basic, Bearer/JWT, API Key)
   - Postman: Collection, Environment, Pre-request Script, Test Script (pm.expect), Newman CLI
   - SQL: SELECT, JOIN, WHERE — verifikasi data di MySQL untuk PT INIX

2. **Buat prompt AI untuk Lab Fase 2:**
   - Tugas FE: audit halaman login PT INIX dengan Chrome DevTools (Network tab — cek request login, response JWT)
   - Tugas FE: jalankan Lighthouse audit, tangkap score Performance & Accessibility
   - Tugas BE: import Postman Collection PT INIX API, eksekusi 5 endpoint (GET pegawai, POST pegawai, PUT, DELETE, GET laporan)
   - Tugas BE: tulis SQL query untuk verifikasi data pegawai yang baru dibuat via API
   - Output: screenshot DevTools + Postman Collection (.json) + hasil query SQL

3. **Buat prompt AI untuk integrasi AI di Fase 2:**
   - Prompt untuk *generate Postman test script* dari spesifikasi endpoint
   - Prompt untuk *analisis response error* dan saran perbaikan
   - Prompt untuk *generate SQL query verifikasi* dari deskripsi kebutuhan

---

### TAHAP 4 — Fase 3: Pemrograman untuk QA

**Tujuan:** Membuat materi pemrograman dasar TypeScript yang relevan untuk automation QA.

**Output file:** `04_AI_PROMPT_FASE3_PROGRAMMING_FOR_QA.md`

**Langkah-langkah:**

1. **Buat prompt AI untuk slide Fase 3** mencakup:
   - TypeScript dasar: types, interfaces, functions, arrow functions, generics
   - OOP untuk QA: Class, Constructor, Inheritance (Page Object pattern preview)
   - Async/Await & Promise: cara kerja dan pola umum di test script
   - Data structures: Array, Object, Map — penggunaan dalam test data management
   - npm/package manager: `package.json`, install, scripts, `node_modules`
   - Git & GitHub: `clone`, `branch`, `commit`, `push`, `pull request` — workflow QA engineer
   - Docker basics: `docker run`, `docker-compose up` — setup test environment

2. **Buat prompt AI untuk Lab Fase 3:**
   - Setup environment: Node.js, TypeScript, VS Code, Git
   - Tugas: buat fungsi TypeScript untuk parsing response JSON API PT INIX
   - Tugas: buat class `TestData` sederhana untuk generate data pegawai dummy
   - Tugas: commit kode ke repository GitHub dengan branch `feature/fase3-exercise`
   - Output: repository GitHub dengan kode TypeScript + README

3. **Buat prompt AI untuk integrasi AI di Fase 3:**
   - Prompt untuk *scaffold kode TypeScript* dari deskripsi kebutuhan
   - Prompt untuk *debug error TypeScript* dari stack trace
   - Penggunaan GitHub Copilot / Cursor untuk autocomplete test helper

---

### TAHAP 5 — Fase 4: Automation UI & API

**Tujuan:** Membuat materi dan lab automation menggunakan Playwright dengan pola POM.

**Output file:** `05_AI_PROMPT_FASE4_AUTOMATION_UI_API.md`

**Langkah-langkah:**

1. **Buat prompt AI untuk slide Fase 4** mencakup:
   - Playwright: arsitektur, setup, `playwright.config.ts`, `test()`, `expect()`
   - Locator Strategy: `getByRole`, `getByLabel`, `getByTestId`, CSS, XPath — prioritas & anti-pattern
   - Page Object Model (POM): struktur folder, `BasePage`, inheritance, benefits
   - Flaky Test: penyebab (timing, dynamic locator, network), solusi (`waitFor`, retry, stable locator)
   - Trace Viewer & Allure Report: debugging & reporting
   - API Automation: `request` context Playwright, `axios`/`supertest`, assertion response
   - Schema Validation: JSON Schema, Zod — validasi struktur response API
   - Contract Testing: konsep Pact, consumer-driven contracts
   - Test Data Management: fixtures, factory pattern, cleanup strategy

2. **Buat prompt AI untuk Lab Fase 4:**
   - Setup Playwright project dengan TypeScript + Allure
   - Tugas: buat POM untuk halaman Login, Dashboard, Form Pegawai PT INIX
   - Tugas: buat 5 test case UI automation (login sukses, login gagal, tambah pegawai, edit pegawai, hapus pegawai)
   - Tugas: buat API test suite untuk 3 endpoint PT INIX dengan schema validation
   - Tugas: jalankan test dengan `--trace on`, analisis Trace Viewer
   - Output: Playwright project di GitHub + Allure report HTML

3. **Buat prompt AI untuk integrasi AI di Fase 4:**
   - Prompt untuk *generate POM class* dari screenshot/HTML halaman
   - Prompt untuk *scaffold test case Playwright* dari Gherkin/User Story
   - Penggunaan Playwright Codegen AI untuk rekam & generate script awal
   - Prompt untuk *self-healing selector* saat locator berubah

---

### TAHAP 6 — Fase 5: Performance, Security, & CI/CD

**Tujuan:** Membuat materi dan lab pengujian non-fungsional dan integrasi pipeline.

**Output file:** `06_AI_PROMPT_FASE5_PERFORMANCE_SECURITY_CICD.md`

**Langkah-langkah:**

1. **Buat prompt AI untuk slide Fase 5** mencakup:
   - Performance Testing: Load, Stress, Spike, Soak — kapan digunakan
   - k6: script dasar, VU, duration, thresholds, `http.get`, `check`, `sleep`
   - Core Web Vitals: LCP, FID/INP, CLS — cara mengukur dengan Lighthouse & PageSpeed
   - OWASP Top 10: penjelasan singkat dan relevansi ke aplikasi PT INIX (Express js + MySQL)
   - DAST: OWASP ZAP — spider, active scan, report
   - SAST: SonarQube, Semgrep — integrasi ke repository
   - CI/CD: GitHub Actions — workflow YAML, `jobs`, `steps`, `uses`, trigger `push`/`PR`
   - Pipeline QA: urutan job (lint → unit test → integration test → E2E → security scan → report)

2. **Buat prompt AI untuk Lab Fase 5:**
   - Tugas: buat k6 script untuk load test endpoint login PT INIX (50 VU, 1 menit)
   - Tugas: jalankan OWASP ZAP terhadap aplikasi PT INIX (staging), ekspor report
   - Tugas: buat GitHub Actions workflow yang menjalankan Playwright test + upload Allure report
   - Tugas: tambahkan SonarQube scan ke pipeline (opsional jika ada instance)
   - Output: k6 script + ZAP report + `.github/workflows/ci.yml`

3. **Buat prompt AI untuk integrasi AI di Fase 5:**
   - Prompt untuk *generate k6 script* dari deskripsi skenario load test
   - Prompt untuk *analisis ZAP report* dan triage vulnerability (mana yang kritis)
   - Prompt untuk *generate GitHub Actions YAML* dari deskripsi pipeline

---

### TAHAP 7 — Capstone Project & Assessment

**Tujuan:** Membuat skenario proyek akhir end-to-end dan rubrik penilaian kompetensi.

**Output file:** `07_AI_PROMPT_CAPSTONE_AND_ASSESSMENT.md`

**Langkah-langkah:**

1. **Buat prompt AI untuk Capstone Project** — skenario pengujian lengkap aplikasi Kepegawaian PT INIX:
   - **Tahap A:** Susun Master Test Plan (Scope, Resource, Risk Assessment, Entry/Exit Criteria, Defect Management)
   - **Tahap B:** Eksekusi Manual Testing — 20 test case mencakup semua modul utama
   - **Tahap C:** Automation Suite — min. 10 UI test + 5 API test dengan Playwright
   - **Tahap D:** Integrasi AI — gunakan LLM untuk generate test case tambahan & analisis bug
   - **Tahap E:** Pipeline CI/CD — GitHub Actions menjalankan suite lengkap
   - **Tahap F:** Performance snapshot — k6 baseline test + Lighthouse report

2. **Buat rubrik penilaian** dalam format tabel:

   | Kompetensi | Junior (1–2) | Mid (3–4) | Senior (5) | Bobot |
   |---|---|---|---|---|
   | Test Plan & Strategy | Mengisi template | Menyesuaikan dengan konteks | Merancang dari nol | 20% |
   | Manual Testing | Test case dasar | EP/BVA/Decision Table lengkap | Exploratory + Risk-based | 20% |
   | Automation | Script berjalan | POM + assertion | Maintainable + CI/CD | 25% |
   | AI Integration | Menggunakan prompt dasar | Prompt engineering efektif | Workflow otomatis | 15% |
   | Perf & Security | Menjalankan tools | Interpretasi hasil | Rekomendasi perbaikan | 10% |
   | Dokumentasi | Ada laporan | Laporan terstruktur | Laporan eksekutif | 10% |

3. **Buat soal assessment** per fase (pilihan ganda + esai singkat + tugas praktik).

---

### TAHAP 8 — Review & Quality Gate

**Tujuan:** Validasi keseluruhan materi sebelum digunakan di hari pelatihan.

**Langkah-langkah:**

1. **Checklist konsistensi:**
   - [ ] Setiap fase memiliki slide prompt + lab prompt
   - [ ] Semua lab merujuk pada studi kasus PT INIX
   - [ ] Alur materi → lab berkesinambungan (teori langsung diikuti praktik)
   - [ ] File prompt mengikuti konvensi penamaan `[NUMBER]_[AI_PROMPT]_[TITLE_GOAL].md`
   - [ ] Proporsi 30% teori / 70% praktik terpenuhi

2. **Review silang AI:** Jalankan setiap prompt ke AI, periksa output, dan iterasi jika hasil tidak sesuai standar.

3. **Finalisasi aset:** Pastikan semua gambar/diagram ada di folder `assets/`, semua referensi buku ada di `book_and_resource_md/`.

---

## 4. [E] EXPECTATION (Format & Standar Output)

Output yang diharapkan:

- Prompt AI langkah demi langkah untuk membuat materi PPTX.
- Prompt AI untuk membuat file hands-on lab yang menggabungkan semua tools dan cara mengerjakannya langkah demi langkah.
- Materi dan Lab harus berkesinambungan — setelah pembahasan materi langsung diikuti implementasi lab.
- Output berupa Prompt AI dalam format `.md`, diletakkan pada folder proyek dengan nama file `[NUMBER]_[AI_PROMPT]_[TITLE_GOAL].md`.

### Karakteristik Output Materi

| Aspek | Standar |
|---|---|
| **Struktur** | Markdown hierarkis, tabel ringkasan modul, diagram ASCII/flow jika relevan, callout tips praktis |
| **Proporsi** | Minimal 30% Teori, 70% Hands-on & Studi Kasus Riil |
| **Actionable** | Disertai prompt template siap pakai untuk skenario QA with AI |
| **Code Quality** | Contoh TypeScript/Playwright mengikuti clean code, anti-flaky best practices, standard POM |
| **Test Case Format** | Excel/CSV dengan kolom standar, dapat diekspor langsung |

### Alur Pembahasan per Sesi

```
[Teori Konsep] → [Demo Langsung] → [Lab Hands-on Peserta] → [Review & Diskusi]
```

### Rincian Pembahasan

1. **Pembahasan 0 — Pengantar SDLC & QA Context**
   - Contoh dokumen FRD/SRS PT INIX
   - Pengenalan STLC & peran QA dalam tim

2. **Pembahasan 1 — Test Planning & Strategy Framework**
   - Panduan penyusunan Master Test Plan (Scope, Resource, Risk Assessment, Defect Management, Entry/Exit Criteria)
   - Template Test Plan standar industri

3. **Pembahasan 2 — Breakdown Modul per Fase (Fase 1 s/d Fase 5)**
   - Per fase: Objective & Learning Outcome, Konsep Teori & Prinsip Inti, Hands-on Lab Step-by-Step, Checklist Verifikasi Keberhasilan

4. **Pembahasan 3 — Integrasi QA dengan AI (AI-Assisted Testing)**
   - Test Design: Prompting LLM untuk menurunkan Test Cases, Boundary Cases, Edge Cases dari User Story/PRD
   - Synthetic Test Data: dataset valid/invalid dalam format JSON/CSV/SQL menggunakan AI
   - Automation Scripting & Self-Healing: AI tools (Playwright Codegen, GitHub Copilot, Cursor) untuk scaffold POM, debugging, auto-healing selector
   - API & Mocking: generate mock data dan test assertions via AI
   - Bug Analysis & Triage: analisis log/stack-trace dengan AI untuk root cause & draft bug report
   - Security & Code Review: AI/SAST untuk review kode dan deteksi celah keamanan awal

5. **Pembahasan 4 — Capstone Project (End-to-End)**
   - Skenario aplikasi Kepegawaian PT INIX (Express JS + React + MySQL)
   - Penugasan komprehensif: Test Plan → Manual Testing → Automation Suite → AI Booster → CI/CD Pipeline

6. **Pembahasan 5 — Assessment & Rubrik Penilaian**
   - Rubrik evaluasi kompetensi QA (Junior → Mid → Senior)

---

## 5. [N] NARROWING / CONSTRAINTS (Batasan)

- **Bahasa:** Bahasa Indonesia formal dan profesional; istilah teknis QA tetap dalam bahasa Inggris baku (e.g., *Boundary Value Analysis*, *Smoke Testing*, *Assertion*, *Pipeline*).
- **Tooling Stack Wajib:**

  | Kategori | Tools |
  |---|---|
  | Manual & Management | Jira, TestRail/Qase, Chrome DevTools, Postman, DBeaver |
  | Automation & Coding | TypeScript, Node.js, Playwright, Allure |
  | Performance & Security | k6, OWASP ZAP, SonarQube |
  | CI/CD | GitHub Actions |
  | AI QA Tools | OpenAI/Claude/Gemini prompting for QA, GitHub Copilot/Cursor for test scripts, Playwright Codegen AI, synthetic data generation tools |

- **Fokus:** Hindari penjelasan teoritis yang abstrak. Langsung hubungkan konsep dengan implementasi riil dan pembuktian bug di FE, BE, maupun Database.

---

## 6. [C] CONDITION (Kondisi & Instruksi Tambahan)

- Hari ini: persiapan lab (menggunakan AI dan tools yang disebutkan) dan materi PPTX.
- **Hari pelatihan 1–4:** penyampaian materi dan demonstrasi lab yang dapat diikuti peserta.
- Kerangka ini adalah **panduan level tinggi** — bukan konten detail. Pembuatan prompt dilakukan **tahap demi tahap** untuk menghasilkan rangkaian materi dan lab yang komprehensif.
- Awali dengan pengenalan SDLC beserta contoh dokumen FRD/SRS.
- Lengkapi bagian Level Testing dan Tipe Testing dengan **pemetaan matriks** antara keduanya.
- **Studi kasus:** Aplikasi Kepegawaian PT INIX — Node.js + Express + Sequelize, MySQL, React.
- **Framework prompt:** RISEN.
- **Format test case design:** Excel (prompt AI untuk membuat struktur Excel yang dapat diekspor ke CSV).
