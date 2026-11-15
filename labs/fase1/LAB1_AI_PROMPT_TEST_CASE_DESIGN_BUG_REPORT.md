# Lab 1 — Desain Test Case & Bug Report (EP, BVA, Decision Table, State Transition)

## Tujuan Prompt

Menghasilkan panduan lab hands-on terpisah untuk Fase 1. Lab ini melengkapi prompt slide di `slides_prompt/02_AI_PROMPT_FASE1_FOUNDATION_MANUAL_TESTING.md`.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 1 — Fondasi & Manual Testing
- **Durasi:** 60 menit
- **Tools:** Spreadsheet (Google Sheets / Microsoft Excel)
- **Prerequisite:** Peserta sudah memahami EP, BVA, Decision Table, State Transition, Bug Report dari materi slide

---

## Prompt untuk Lab Hands-on

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Instructor** yang membuat panduan lab praktik langkah demi langkah. Lab harus mandiri, terukur, dan menghasilkan artefak konkret (file Excel test case + bug report).

**[I] INPUT:**
Buat dokumen **"Lab 1: Desain Test Case & Bug Report — Aplikasi Kepegawaian PT INIX"** dengan detail:

- **Durasi total:** 60 menit
- **Target:** QA Junior-Mid
- **Deliverable:** File Excel berisi test case + bug report

**Fitur PT INIX yang diuji:**

*Modul Autentikasi — Login:*
- Field: username (email format), password (min 8 char, max 64 char)
- Tombol: Login
- Behavior: valid → redirect dashboard + JWT token | invalid → error message spesifik
- Roles: Admin, HR, Manajer, Pegawai
- Error cases: username kosong, password kosong, username tidak terdaftar, akun nonaktif, format email invalid

*Modul Data Pegawai — CRUD:*
- Field: NIP (unik, wajib), Nama Lengkap (wajib), Jabatan (wajib), Status (aktif/nonaktif)
- CRUD: tambah, lihat daftar, edit, hapus
- Auth: hanya HR dan Admin yang bisa CRUD

*Modul Pengajuan Cuti — Workflow:*
- Field: tanggal mulai (≥ hari ini), tanggal selesai (≥ tanggal mulai), alasan (wajib)
- Submit: hanya Pegawai
- Approve/Reject: hanya Manajer
- Status: PENDING → APPROVED / REJECTED

**[S] STEPS:**
Susun panduan lab:

1. **Header:** Judul, durasi, learning objectives (4 poin), prasyarat, tools, deliverable
   - LO1: Mampu menerapkan EP dan BVA untuk merancang test case form login
   - LO2: Mampu membuat Decision Table dari business logic pengajuan cuti
   - LO3: Mampu membuat State Transition test case dari workflow status cuti
   - LO4: Mampu menulis bug report lengkap dengan 12 field standar

2. **Bagian 0: Persiapan (5 menit)**
   - Buka/duplikat template Excel test case
   - Rename: `Lab1_TestCase_BugReport_[NAMA].xlsx`
   - Verifikasi 3 sheet: Test Cases, Bug Reports, Summary
   - Kolom Sheet Test Cases: `TC ID | Module | Feature | Scenario | Precondition | Steps | Test Data | Expected | Actual | Status | Priority | Severity | Type | Tester | Date | Remarks`

3. **Bagian 1: Test Case Login — EP & BVA (20 menit)**
   - Instruksi EP: identifikasi partisi untuk username dan password
   - Tugas: buat 5 test case EP (TC-AUTH-001 s/d 005)
   - Instruksi BVA: identifikasi boundary password (min=8, max=64)
   - Tugas: buat 5 test case BVA (TC-AUTH-006 s/d 010)
   - Berikan 2 contoh terisi: 1 EP positif, 1 BVA boundary

4. **Bagian 2: Decision Table Cuti (15 menit)**
   - Instruksi: identifikasi 4 kondisi (role, tgl_mulai, tgl_selesai, alasan)
   - Tugas: buat Decision Table minimal 6 rules di sheet "Decision Table Cuti"
   - Tugas: konversi setiap rule menjadi test case TC-CUT-001 s/d 006 di Sheet Test Cases
   - Berikan 2 contoh rule + konversi ke test case

5. **Bagian 3: State Transition Cuti (10 menit)**
   - Instruksi: gambar State Transition Diagram (ASCII art di spreadsheet atau sketsa)
   - Tugas: buat 4 test case dari transisi valid & invalid (TC-CUT-007 s/d 010)
   - Berikan 1 contoh transisi valid dan 1 invalid

6. **Bagian 4: Bug Report (10 menit)**
   - Tugas: tulis 3 bug report fiktif di Sheet Bug Reports (1 per modul)
   - Panduan: severity & priority determination
   - Berikan 1 contoh bug report lengkap (12 field) sebagai referensi

7. **Checklist Keberhasilan (6 kriteria)**

8. **Reference Answer (Instruktur)**
   - 10 test case Login lengkap
   - Decision Table 6 rules + 6 test case cuti
   - 4 test case state transition
   - 3 bug report lengkap
   - Jawaban total: 20 test case + 3 bug report

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- Step-by-step bernomor
- Contoh pengisian disediakan per bagian
- Reference Answer terpisah
- Total deliverable: 20 test case + 3 bug report dalam 1 file Excel
- Bahasa Indonesia formal, istilah teknis Inggris

**[N] NARROWING:**
- HANYA menulis test case & bug report di spreadsheet
- Belum eksekusi (belum buka aplikasi, belum Postman, belum automation)
- Bug report FIKTIF — bukan temuan nyata
- Jangan gunakan tools selain Spreadsheet
- Selesai dalam 60 menit

---

## Checklist Output Lab 1

- [ ] Panduan lab step-by-step lengkap (7 bagian + checklist + reference answer)
- [ ] 2 contoh test case EP + 2 contoh BVA yang sudah terisi
- [ ] 2 contoh Decision Table rule + konversi ke test case
- [ ] 1 contoh State Transition test case
- [ ] 1 contoh bug report lengkap 12 field
- [ ] Reference Answer: 20 TC + 3 bug report
- [ ] Learning Objectives tercantum
- [ ] Estimasi waktu per bagian
