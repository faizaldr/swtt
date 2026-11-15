# Lab 4 — Automation UI & API: Playwright + POM + Allure

## Tujuan Prompt

Menghasilkan panduan lab hands-on terpisah untuk Fase 4. Lab ini melengkapi prompt slide di `slides_prompt/05_AI_PROMPT_FASE4_AUTOMATION_UI_API.md`.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 4 — Automation UI & API
- **Durasi:** 120 menit
- **Tools:** Node.js, Playwright, Allure, Zod, VS Code, Git
- **Prerequisite:** TypeScript dasar (Fase 3); PT INIX running di localhost:8000

---

## Prompt untuk Lab Hands-on

**[R] ROLE:**
Bertindaklah sebagai **Principal Test Automation Engineer & Lab Instructor** yang membuat panduan lab membangun automation framework dari nol. Project harus production-ready: POM, clean code, anti-flaky, schema validation, reporting. Setiap langkah menghasilkan kode yang bisa dijalankan.

**[I] INPUT:**
Buat dokumen **"Lab 4: Automation UI & API — Playwright + POM + Allure — Aplikasi Kepegawaian PT INIX"** dengan detail:

- **Durasi:** 120 menit
- **Peserta:** QA Junior-Mid yang sudah menguasai TypeScript (Fase 3)
- **Deliverable:** GitHub repository `inix-playwright` berisi:
  - 3 Page Object classes
  - 7 UI test cases (all PASS)
  - 7 API test cases (all PASS) + Zod schema
  - Allure report HTML
  - Trace recording

**Aplikasi PT INIX:**
- Base URL: `http://localhost:8000`
- Halaman: Login, Dashboard, Data Pegawai (list + form), Pengajuan Cuti
- 10 API Endpoint (lihat STUDI_KASUS_INIX.md)
- Credentials: admin/hr/manager/pegawai
- Asumsi HTML halaman memiliki: label pada form input, role attribute pada button, data-testid pada container utama

**[S] STEPS:**
Susun panduan lab:

1. **Header:** Judul, durasi, learning objectives (6 poin), prasyarat, tools, deliverable
   - LO1: Mampu menginisialisasi Playwright project dengan TypeScript
   - LO2: Mampu membangun Page Object Model (3 class) dengan locator best practice
   - LO3: Mampu menulis UI test case menggunakan POM pattern
   - LO4: Mampu menulis API test case dengan Playwright request context
   - LO5: Mampu menerapkan schema validation dengan Zod
   - LO6: Mampu menggunakan Trace Viewer dan generate Allure report

2. **Bagian 0: Setup Project (15 menit)**
   - npm init playwright@latest
   - Install: allure-playwright, zod
   - Konfigurasi playwright.config.ts (baseURL, trace, reporter)
   - Buat struktur folder POM (pages/, tests/ui/, tests/api/, fixtures/, schemas/)
   - Verifikasi: `npx playwright test` default berjalan

3. **Bagian 1: Page Object Model (25 menit)**
   - Buat base.page.ts — navigate, waitForPageLoad
   - Buat login.page.ts — locators, goto(), login(), expectSuccess(), expectError()
   - Buat pegawai-list.page.ts — locators, goto(), clickTambah(), clickEdit(), clickHapus(), expectVisible()
   - Buat pegawai-form.page.ts — locators, fillForm(), submitForm(), expectSuccess()
   - Kode lengkap per file, semua locator getByRole/getByLabel/getByTestId

4. **Bagian 2: UI Test Cases (25 menit)**
   - tests/ui/login.spec.ts — 3 test (login sukses, login gagal, field kosong)
   - tests/ui/pegawai.spec.ts — 4 test (list, tambah, edit, hapus) — login di beforeEach via POM
   - Jalankan --headed → semua PASS
   - Screenshot results

5. **Bagian 3: API Test Cases + Schema Validation (20 menit)**
   - fixtures/test-data.ts — credentials, test data constants
   - fixtures/pegawai.factory.ts — createPegawaiData function
   - schemas/pegawai.schema.ts — Zod PegawaiSchema, PegawaiListSchema
   - tests/api/auth.api.spec.ts — 3 test (login valid, invalid, refresh)
   - tests/api/pegawai.api.spec.ts — 4 test (GET list + schema, POST create + schema, POST no auth, POST wrong role)
   - Jalankan → semua PASS

6. **Bagian 4: Trace Viewer & Allure Report (15 menit)**
   - Jalankan dengan trace on
   - Buka Trace Viewer — eksplorasi: screenshot, network, console, DOM
   - Generate Allure report → buka di browser
   - Screenshot Allure dashboard

7. **Bagian 5: Git & Finalisasi (20 menit)**
   - .gitignore (node_modules, test-results, allure-results, allure-report, playwright-report)
   - Git init, commit, push ke GitHub `inix-playwright`
   - Branch `feature/automation-suite`, push, buat PR
   - Screenshot PR + Allure report

8. **Checklist Keberhasilan (10 kriteria)**

9. **Reference Answer (Instruktur)**
   - Kode lengkap semua file (pages, tests, fixtures, schemas, config)
   - Expected test output (14 test PASS)
   - Expected Allure report screenshot description

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- Kode lengkap per file — runnable, clean, POM, anti-flaky
- Checklist keberhasilan 10 kriteria
- Reference Answer terpisah (kode + output)
- Bahasa Indonesia formal, kode Inggris
- Selesai dalam 120 menit (API test opsional jika waktu kurang)

**[N] NARROWING:**
- HANYA Playwright + TypeScript — bukan Cypress/Selenium
- POM wajib — tidak boleh locator langsung di test
- Zod untuk schema validation (bukan ajv/JSON Schema)
- Tidak setup CI/CD (Fase 5)
- Tidak visual regression
- Cleanup data via API afterEach
- Asumsikan app running tanpa error

---

## Checklist Output Lab 4

- [ ] Panduan lab step-by-step (7 bagian + checklist + reference answer)
- [ ] Kode lengkap: 3 POM classes, 4 test spec files, 2 fixtures, 1 schema
- [ ] 7 UI test + 7 API test = 14 test total
- [ ] Zod schema validation diterapkan
- [ ] Trace Viewer & Allure report included
- [ ] Git workflow + PR
- [ ] Learning Objectives (6 poin)
- [ ] Checklist keberhasilan (10 kriteria)
- [ ] Estimasi waktu per bagian
- [ ] Reference Answer (semua kode + output)
