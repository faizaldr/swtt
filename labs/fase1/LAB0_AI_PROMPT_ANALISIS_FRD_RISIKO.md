# Lab 0 — Analisis FRD/SRS dan Identifikasi Risiko

## Tujuan Prompt

Menghasilkan panduan lab hands-on terpisah yang spesifik untuk sesi pengantar. Lab ini berdiri sendiri dan melengkapi prompt slide di `slides_prompt/01_AI_PROMPT_INTRO_SDLC_AND_QA_CONTEXT.md`.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Pembahasan 0 — Lab Pengantar
- **Durasi:** 30 menit
- **Input dokumen:** `STUDI_KASUS_INIX.md` (FRD/SRS, ERD, API Endpoint)
- **Tools:** Spreadsheet (Google Sheets / Microsoft Excel)
- **Prasyarat:** Peserta telah menyimak materi SDLC, STLC, FRD/SRS

---

## Prompt untuk Lab Hands-on

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Instructor** yang membuat panduan lab praktik untuk pelatihan Software Testing. Lab harus step-by-step, mandiri (peserta bisa ikuti tanpa instruktur), dan memiliki learning outcome terukur.

**[I] INPUT:**
Buat dokumen **"Lab 0: Analisis FRD/SRS dan Identifikasi Risiko — Aplikasi Kepegawaian PT INIX"** dengan detail berikut:

**Data yang digunakan peserta:**

*Functional Requirements (FR):*
| ID | Requirement | Priority | Module |
|---|---|---|---|
| FR-001 | Login dengan username/password, return JWT access token | High | Autentikasi |
| FR-002 | Tampilkan error jika username/password salah atau akun nonaktif | High | Autentikasi |
| FR-003 | Admin/HR: CRUD data pegawai | High | Data Pegawai |
| FR-004 | Validasi NIP unik, field wajib (Nama, Jabatan) tidak boleh kosong | High | Data Pegawai |
| FR-005 | Pegawai mengajukan cuti (tanggal mulai, selesai, alasan) | High | Pengajuan Cuti |
| FR-006 | Manajer approve/reject pengajuan cuti | High | Pengajuan Cuti |
| FR-007 | RBAC: akses dibatasi per role (Admin, HR, Manajer, Pegawai) | High | Autentikasi |

*Non-Functional Requirements (NFR):*
| ID | Requirement | Kategori |
|---|---|---|
| NFR-001 | Response time ≤ 500ms pada 50 concurrent users | Performance |
| NFR-002 | Terlindung dari SQL Injection dan XSS | Security |
| NFR-003 | Cross-browser compatible (Chrome, Edge, Firefox) | Compatibility |
| NFR-004 | Password hashed; JWT memiliki expiry | Security |

*User Stories (US):*
| ID | User Story |
|---|---|
| US-001 | As a User, I want to login... |
| US-002 | As an HR/Admin, I want to add a new employee... |
| US-003 | As an HR/Admin, I want to edit and delete employee records... |
| US-004 | As a Pegawai, I want to submit a leave request... |
| US-005 | As a Manajer, I want to approve or reject leave requests... |

**3 Modul Aplikasi:** Autentikasi, Data Pegawai, Pengajuan Cuti
**10 API Endpoint** (lihat STUDI_KASUS_INIX.md)
**ERD:** 3 tabel — users, pegawai, cuti

**[S] STEPS:**
Susun panduan lab dengan struktur berikut:

1. **Header Lab** — Judul, durasi, tujuan pembelajaran (3 poin), prasyarat, tools

2. **Bagian 1: Persiapan (5 menit)**
   - Instruksi buka dokumen FRD/SRS PT INIX
   - Instruksi buat spreadsheet baru: `Lab0_Analisis_Risiko_[NAMA]`
   - Definisi singkat: "Analisis risiko dalam QA = mengidentifikasi area aplikasi yang paling mungkin gagal dan paling berdampak jika gagal, untuk memprioritaskan effort testing"

3. **Bagian 2: Identifikasi Testable Requirements (10 menit)**
   - Buat Sheet 1 "Testable Requirements"
   - Kolom: `No | Req ID | Deskripsi | Module | Testable? | Alasan`
   - Isi semua 16 requirement (7 FR + 4 NFR + 5 US)
   - Berikan 2 contoh yang sudah terisi
   - Tips: ciri requirement yang testable (specific, measurable, ada expected result)
   - Tips: ciri requirement yang ambigu (tidak ada metrik, subjektif, tidak ada acceptance criteria)

4. **Bagian 3: Risk Assessment Matrix (10 menit)**
   - Buat Sheet 2 "Risk Assessment"
   - Kolom: `No | Module | Risiko | Likelihood (1-3) | Impact (1-3) | Risk Score | Prioritas`
   - Skala Likelihood: 1=Rendah, 2=Sedang, 3=Tinggi
   - Skala Impact: 1=Minor UI, 2=Fitur terganggu, 3=Data loss/security breach
   - Risk Score = L × I → Prioritas: High (6–9), Medium (3–5), Low (1–2)
   - Isi minimal 6 risiko dari 3 modul berbeda
   - Berikan 2 contoh yang sudah terisi

5. **Bagian 4: Refleksi & Diskusi (5 menit)**
   - 3 pertanyaan refleksi:
     1. Modul mana rata-rata Risk Score tertinggi? Mengapa?
     2. Jika waktu terbatas, modul mana diuji pertama?
     3. Requirement mana paling sulit diuji? Pertanyaan apa ke developer/BA?
   - Diskusi kelompok

6. **Checklist Keberhasilan** — 6 kriteria checkbox

7. **Reference Answer (Untuk Instruktur)**
   - Contoh lengkap tabel Testable Requirements terisi 16 baris
   - Contoh lengkap Risk Assessment terisi 8–10 risiko
   - Contoh jawaban 3 pertanyaan refleksi

**[E] EXPECTATION:**
- Format: Markdown document siap cetak / handout peserta
- Setiap langkah bernomor, jelas, bisa diikuti mandiri
- Contoh tabel sudah terisi sebagai referensi
- Reference Answer di section terpisah (dilipat/collapsed di digital, halaman terakhir di cetak)
- Bahasa Indonesia formal, istilah teknis Inggris
- Estimasi waktu per bagian tercantum
- Visual: sertakan contoh screenshot layout spreadsheet (deskripsi teks)

**[N] NARROWING:**
- Lab ini HANYA analisis dokumen + identifikasi risiko — belum menulis test case
- Tools HANYA Spreadsheet (belum Jira, belum Postman, belum coding)
- Semua data dari FRD/SRS PT INIX yang sudah ada — jangan buat requirement baru
- Jangan membahas teknik test case design (EP, BVA) — itu Fase 1
- Harus selesai dalam 30 menit oleh peserta kecepatan rata-rata

---

## Checklist Output Lab 0

- [ ] Panduan lab step-by-step lengkap
- [ ] 2 contoh pengisian tabel Testable Requirements
- [ ] 2 contoh pengisian tabel Risk Assessment
- [ ] 3 pertanyaan refleksi
- [ ] Checklist keberhasilan (6 kriteria)
- [ ] Reference Answer untuk instruktur
- [ ] Durasi per bagian tercantum
- [ ] Semua data dari STUDI_KASUS_INIX.md
