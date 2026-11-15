# Lab 5 — Performance, Security, & CI/CD: k6, ZAP, GitHub Actions

## Tujuan Prompt

Menghasilkan panduan lab hands-on terpisah untuk Fase 5. Lab ini melengkapi prompt slide di `slides_prompt/06_AI_PROMPT_FASE5_PERFORMANCE_SECURITY_CICD.md`.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 5 — Performance, Security, & CI/CD
- **Durasi:** 90 menit
- **Tools:** k6, OWASP ZAP (Desktop/Docker), GitHub Actions
- **Prerequisite:** Playwright project `inix-playwright` di GitHub (Fase 4); PT INIX running localhost:8000

---

## Prompt untuk Lab Hands-on

**[R] ROLE:**
Bertindaklah sebagai **Senior Performance & DevOps QA Engineer dan Lab Instructor** yang membuat panduan lab pengujian non-fungsional dan CI/CD pipeline. Lab menghasilkan artefak production-ready: k6 script, ZAP report, GitHub Actions workflow.

**[I] INPUT:**
Buat dokumen **"Lab 5: Performance, Security, & CI/CD — k6, ZAP, GitHub Actions — Aplikasi PT INIX"** dengan detail:

- **Durasi:** 90 menit
- **Peserta:** QA Junior-Mid, sudah punya Playwright project di GitHub
- **Deliverable:**
  - `k6/load-test-login.js` — k6 load test script
  - `k6/LOAD_TEST_RESULT.md` — summary hasil
  - `security/zap-report.html` — ZAP scan report
  - `.github/workflows/qa-pipeline.yml` — CI/CD workflow
  - Screenshots: k6 output, ZAP alerts, GitHub Actions result

**Informasi teknis:**
- PT INIX: localhost:8000 (backend API), localhost:3000 (frontend)
- NFR-001: Response time ≤ 500ms pada 50 concurrent users
- NFR-002: SQL Injection & XSS protection
- Repository: `inix-playwright` di GitHub
- Credentials: hr@inix.com / Hr@123!

**[S] STEPS:**
Susun panduan lab:

1. **Header:** Judul, durasi, learning objectives (5 poin), prasyarat, tools, deliverable
   - LO1: Mampu menulis dan menjalankan k6 load test script
   - LO2: Mampu membaca output k6 dan menentukan apakah NFR terpenuhi
   - LO3: Mampu menjalankan OWASP ZAP scan dan melakukan triage findings
   - LO4: Mampu membuat GitHub Actions workflow untuk QA pipeline
   - LO5: Mampu mengkonfigurasi branch protection berdasarkan pipeline status

2. **Bagian 0: Persiapan (5 menit)**
   - Verifikasi app running, k6 installed, ZAP installed, repo terbuka

3. **Bagian 1: k6 Load Test (25 menit)**
   - Task 1.1: Buat k6 script (50 VU, 1 min, threshold P95 < 500ms) — kode lengkap
   - Task 1.2: Jalankan `k6 run` — catat metrics (avg, P95, error rate, throughput)
   - Task 1.3: Tulis summary + screenshot terminal

4. **Bagian 2: OWASP ZAP Scan (25 menit)**
   - Task 2.1: Quick Start scan (Desktop atau Docker baseline) — screenshot progress
   - Task 2.2: Review findings — tabel 5+ alerts (name, risk, confidence, URL)
   - Task 2.3: Export HTML report ke `security/zap-report.html`

5. **Bagian 3: GitHub Actions Pipeline (30 menit)**
   - Task 3.1: Buat `.github/workflows/qa-pipeline.yml` — 3 jobs (lint, Playwright test, security scan) — YAML lengkap
   - Task 3.2: Commit, push, verifikasi pipeline di GitHub Actions — screenshot
   - Task 3.3: Setup branch protection rule — screenshot

6. **Bagian 4: Finalisasi (5 menit)**
   - Commit semua file baru ke repo

7. **Checklist Keberhasilan (10 kriteria)**

8. **Reference Answer (Instruktur)**
   - k6 output contoh (PASS dan FAIL scenario)
   - Tabel ZAP findings contoh (8 findings)
   - YAML lengkap
   - Expected GitHub Actions screenshot description

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- k6 script dan YAML lengkap — siap run/commit
- Checklist keberhasilan 10 kriteria
- Reference Answer terpisah
- Bahasa Indonesia formal, kode Inggris
- Selesai dalam 90 menit (SonarQube opsional)

**[N] NARROWING:**
- k6: Load Test saja — tidak Stress/Spike/Soak
- ZAP: baseline/quick start — tidak authenticated scan
- GitHub Actions: 3 jobs sederhana — tidak Docker Compose di CI
- Tidak deploy production
- Selesai 90 menit

---

## Checklist Output Lab 5

- [ ] Panduan lab step-by-step (6 bagian + checklist + reference answer)
- [ ] k6 script lengkap siap run
- [ ] GitHub Actions YAML lengkap siap commit
- [ ] Tabel ZAP findings template
- [ ] Learning Objectives (5 poin)
- [ ] Checklist keberhasilan (10 kriteria)
- [ ] Estimasi waktu per bagian
- [ ] Reference Answer (k6 output + ZAP findings + YAML + pipeline result)
