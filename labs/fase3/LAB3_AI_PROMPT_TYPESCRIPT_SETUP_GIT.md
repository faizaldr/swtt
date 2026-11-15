# Lab 3 — Pemrograman TypeScript untuk QA: Setup, Coding, Git

## Tujuan Prompt

Menghasilkan panduan lab hands-on terpisah untuk Fase 3. Lab ini melengkapi prompt slide di `slides_prompt/04_AI_PROMPT_FASE3_PROGRAMMING_FOR_QA.md`.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (response JSON API)
- **Fase:** Fase 3 — Pemrograman untuk QA
- **Durasi:** 75 menit
- **Tools:** Node.js, TypeScript, VS Code, Git, GitHub
- **Prerequisite:** Node.js v20+ & Git sudah terinstall; GitHub account sudah ada

---

## Prompt untuk Lab Hands-on

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Automation Engineer & Coding Instructor** yang membuat panduan lab pemrograman untuk QA pemula. Setiap langkah harus eksplisit — termasuk perintah terminal, isi file lengkap, dan expected output. Asumsikan peserta baru pertama kali coding.

**[I] INPUT:**
Buat dokumen **"Lab 3: Pemrograman TypeScript untuk QA — Setup, Coding, Git"** dengan detail:

- **Durasi:** 75 menit
- **Peserta:** QA Junior-Mid, sebagian pertama kali coding
- **Deliverable:** Repository GitHub `inix-qa-exercise` berisi project TypeScript + Pull Request

**Sample data PT INIX (untuk exercise):**
```json
// GET /api/pegawai/
[
  {"id":1, "nip":"NIP-2025-001", "nama_lengkap":"Andi Wijaya", "jabatan":"Staff HR", "status":"aktif"},
  {"id":2, "nip":"NIP-2025-002", "nama_lengkap":"Siti Rahayu", "jabatan":"Manajer IT", "status":"aktif"},
  {"id":3, "nip":"NIP-2025-003", "nama_lengkap":"Rudi Hermawan", "jabatan":"Staff QA", "status":"nonaktif"}
]

// POST /api/auth/login/ — success response
{"access_token":"eyJhbG...","refresh_token":"eyJhbG...","user":{"id":1,"username":"admin@inix.com","role":"admin"}}
```

**[S] STEPS:**
Susun panduan lab:

1. **Header:** Judul, durasi, learning objectives (5 poin), prasyarat, tools, deliverable
   - LO1: Mampu menginisialisasi project TypeScript dengan npm
   - LO2: Mampu mendefinisikan interface & enum untuk data PT INIX
   - LO3: Mampu menulis fungsi parsing & filtering data API response
   - LO4: Mampu membuat class TestDataGenerator untuk data dummy
   - LO5: Mampu menggunakan Git workflow (init, commit, branch, push, PR)

2. **Bagian 0: Setup Project (10 menit)**
   - mkdir, npm init, install TypeScript & ts-node
   - Buat struktur folder (src/interfaces, src/utils)
   - Buat .gitignore, tsconfig.json
   - Tambahkan npm script "start"
   - Verifikasi: `npm start` tanpa error

3. **Bagian 1: Interface & Enum (10 menit)**
   - File: `src/interfaces/pegawai.interface.ts`
   - Definisi: Pegawai, LoginResponse, CutiRequest, enum CutiStatus
   - Kode lengkap + penjelasan baris per baris
   - Verifikasi: compile tanpa error

4. **Bagian 2: Fungsi Parsing API Response (15 menit)**
   - File: `src/utils/api-parser.ts`
   - 4 fungsi: parsePegawaiList, findPegawaiByNip, getActivePegawai, extractToken
   - File: `src/index.ts` — panggil semua fungsi dengan sample data
   - Verifikasi: `npm start` → output di terminal sesuai expected

5. **Bagian 3: Class TestDataGenerator (15 menit)**
   - File: `src/utils/test-data-generator.ts`
   - 5 method: generatePegawai, generateInvalidPegawai, generateBulkPegawai, generateCutiRequest, generateLoginCredentials
   - Update index.ts — generate & print data
   - Verifikasi: output 5 pegawai dummy + 3 cuti request

6. **Bagian 4: Async Function (10 menit)**
   - Fungsi simulateLogin (async, setTimeout, try/catch)
   - Test success case + error case
   - Verifikasi: output kedua skenario

7. **Bagian 5: Git Workflow (15 menit)**
   - git init, add, commit
   - Buat repo di GitHub
   - git remote add, push
   - git checkout -b feature/fase3-exercise
   - Tambah method baru, commit, push
   - Buat Pull Request di GitHub
   - Screenshot PR

8. **Checklist Keberhasilan (9 kriteria)**

9. **Reference Answer (Instruktur)**
   - Kode lengkap setiap file
   - Expected console output per bagian
   - Expected Git log

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- Perintah terminal eksplisit — peserta copy-paste
- Kode TypeScript lengkap per file — runnable
- Checklist keberhasilan 9 kriteria
- Reference Answer terpisah (kode + output)
- Bahasa Indonesia formal, kode Inggris
- Selesai dalam 75 menit (peserta pemula)

**[N] NARROWING:**
- HANYA TypeScript + npm + Git — belum Playwright, belum test framework
- Tidak deploy, tidak setup server
- Tidak React/frontend dev
- Kode sederhana — tidak advanced pattern
- Git basic (tidak rebase/cherry-pick)
- Docker TIDAK di lab (hanya di materi slide)

---

## Checklist Output Lab 3

- [ ] Panduan lab step-by-step (7 bagian + checklist + reference answer)
- [ ] Perintah terminal eksplisit setiap langkah
- [ ] Kode lengkap: 4 file TypeScript (interface, api-parser, test-data-generator, index)
- [ ] Git workflow end-to-end termasuk PR
- [ ] Learning Objectives (5 poin)
- [ ] Checklist keberhasilan (9 kriteria)
- [ ] Estimasi waktu per bagian
- [ ] Reference Answer (kode + console output + git log)
