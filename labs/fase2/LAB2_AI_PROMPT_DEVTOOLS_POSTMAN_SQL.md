# Lab 2 — Manual Testing Teknis: DevTools, Postman, SQL

## Tujuan Prompt

Menghasilkan panduan lab hands-on terpisah untuk Fase 2. Lab ini melengkapi prompt slide di `slides_prompt/03_AI_PROMPT_FASE2_TECHNICAL_MANUAL_TESTING.md`.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 2 — Manual Testing Teknis (FE & BE)
- **Durasi:** 90 menit
- **Tools:** Chrome DevTools, Postman Desktop, DBeaver / MySQL Client
- **Prerequisite:** Aplikasi PT INIX running di localhost:8000; peserta sudah memahami materi slide Fase 2

---

## Prompt untuk Lab Hands-on

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Engineer & Lab Instructor** yang membuat panduan lab teknis langkah demi langkah. Lab melibatkan 3 tools nyata (Chrome DevTools, Postman, SQL Client) pada aplikasi yang sudah berjalan.

**[I] INPUT:**
Buat dokumen **"Lab 2: Manual Testing Teknis — DevTools, Postman, SQL — Aplikasi Kepegawaian PT INIX"** dengan detail:

- **Durasi:** 90 menit
- **Peserta:** QA Junior-Mid
- **Deliverable:** Folder berisi: screenshots DevTools + Lighthouse report + Postman Collection (.json) + Environment (.json) + screenshot SQL query results

**Informasi Teknis:**
- Base URL: `http://localhost:8000`
- MySQL: localhost:3306, database `inix_db`, user `root`, password `root`
- 10 API Endpoint (detail di STUDI_KASUS_INIX.md)
- Credentials: admin@inix.com/Admin@123!, hr@inix.com/Hr@123!, manager@inix.com/Manager@123!, pegawai@inix.com/Pegawai@123!

**[S] STEPS:**
Susun panduan lab:

1. **Header:** Judul, durasi, learning objectives (5 poin), prasyarat, tools, deliverable
   - LO1: Mampu menggunakan DevTools Network tab untuk menganalisis request/response HTTP
   - LO2: Mampu men-decode dan memverifikasi JWT token
   - LO3: Mampu menjalankan Lighthouse audit dan membaca hasilnya
   - LO4: Mampu membuat Postman Collection dengan test script untuk 7 endpoint
   - LO5: Mampu menulis SQL query verifikasi (SELECT, JOIN, WHERE) di MySQL

2. **Bagian 0: Persiapan (5 menit)**
   - Verifikasi app running, buka DevTools, buka Postman, buka DBeaver

3. **Bagian 1: Frontend — DevTools (25 menit)**
   - Task 1.1: Analisis request login di Network tab (10 min)
     - Login valid → catat method, URL, status, response time, payload, JWT token
     - Login invalid → catat error response, status code
     - Screenshot semua
   - Task 1.2: Inspect Application Storage (5 min)
     - Cek Local Storage → access_token
     - Decode JWT di jwt.io → verifikasi payload (user_id, role, exp)
   - Task 1.3: Lighthouse audit halaman Data Pegawai (10 min)
     - Generate report → catat score Performance, Accessibility, Best Practices
     - Identifikasi 3 top accessibility issues

4. **Bagian 2: Backend — Postman API (35 menit)**
   - Task 2.1: Setup Collection & Environment (5 min)
   - Task 2.2: Test Auth — Login valid + Login invalid, dengan test script (10 min)
   - Task 2.3: Test CRUD Pegawai — GET list, POST tambah, PUT update, DELETE hapus (15 min)
   - Task 2.4: Test Cuti — POST ajukan (as Pegawai), PATCH approve (as Manajer) (5 min)
   - Setiap request harus punya test script (pm.test, pm.expect)
   - Total: 7–8 request dengan test script

5. **Bagian 3: Database — SQL Verification (20 menit)**
   - Task 3.1: Verifikasi data pegawai yang dibuat via API (SELECT, COUNT)
   - Task 3.2: Verifikasi data cuti dengan JOIN (cuti + pegawai)
   - Task 3.3: SQL anomaly check (tgl_selesai < tgl_mulai, status invalid)

6. **Bagian 4: Export & Summary (5 menit)**
   - Export Collection + Environment dari Postman
   - Kumpulkan deliverable

7. **Checklist Keberhasilan (10 kriteria)**

8. **Reference Answer (Instruktur)**
   - Expected output setiap task
   - Contoh screenshot description
   - Expected test script results (all green)
   - Expected SQL query results

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- Step-by-step bernomor — setiap task jelas durasinya
- Kode (Postman test script, SQL query) siap copy-paste, merujuk langsung ke PT INIX
- Checklist keberhasilan 10 kriteria
- Reference Answer terpisah
- Bahasa Indonesia formal, istilah teknis & kode Inggris
- Selesai dalam 90 menit

**[N] NARROWING:**
- HANYA DevTools + Postman + SQL — belum automation (Playwright), belum performance (k6)
- Postman: manual execution — belum Newman CI
- SQL: read-only (SELECT/JOIN/WHERE) — tidak manipulasi data langsung di DB
- Asumsikan tools sudah terinstall & app sudah running
- Tidak troubleshoot error infrastruktur

---

## Checklist Output Lab 2

- [ ] Panduan lab step-by-step (4 bagian + checklist + reference answer)
- [ ] Task DevTools: login analysis + JWT decode + Lighthouse (3 sub-task)
- [ ] Task Postman: 7–8 request dengan test script siap copy-paste
- [ ] Task SQL: 4+ query verifikasi siap dijalankan
- [ ] Learning Objectives (5 poin)
- [ ] Checklist keberhasilan (10 kriteria)
- [ ] Estimasi waktu per bagian
- [ ] Reference Answer untuk instruktur
