# Assessment — Soal Evaluasi & Rubrik Penilaian

## Tujuan Prompt

Menghasilkan dokumen assessment terpisah di folder `capstone/`. Berisi rubrik penilaian detail dan soal evaluasi per fase.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX
- **Fase:** Pembahasan 5 — Assessment & Rubrik Penilaian
- **Durasi penilaian:** Capstone (120 menit) + Soal (60 menit opsional)
- **Cakupan:** Fase 0–5

---

## Prompt Rubrik

**[R] ROLE:**
Bertindaklah sebagai **QA Training Evaluator & Competency Assessor**. Buat rubrik penilaian objektif dan measurable.

**[I] INPUT:**
Buat rubrik untuk menilai Capstone Project pelatihan Software Testing PT INIX:
- 6 dimensi kompetensi, masing-masing 3 level (Junior/Mid/Senior)
- Bobot: Test Plan 20%, Manual Testing 20%, Automation 25%, AI Integration 15%, Perf & Security 10%, Dokumentasi 10%
- Scoring: 1–5 per dimensi × bobot → total 1.00–5.00
- Klasifikasi: Excellent (4.50–5.00), Proficient (3.50–4.49), Developing (2.50–3.49), Beginner (1.00–2.49)

**[S] STEPS:**
1. Tabel rubrik utama (6 × 3) dengan deskripsi perilaku spesifik per sel (3–4 bullet)
2. Scoring formula & klasifikasi
3. Score sheet template (tabel kosong untuk penilai)
4. Panduan penggunaan rubrik untuk instruktur

**[E] EXPECTATION:**
- Deskripsi perilaku spesifik (bukan generik) — setiap sel rubrik mengacu artefak PT INIX
- Scoring formula mudah dihitung
- Score sheet siap print
- Bahasa Indonesia formal, istilah teknis Inggris

**[N] NARROWING:**
- Rubrik untuk Capstone ini saja
- Penilaian berbasis artefak deliverable
- 6 dimensi cukup — jangan ditambah
- Score 1–5 (integer)

---

## Prompt Soal Assessment

**[R] ROLE:**
Bertindaklah sebagai **QA Certification Exam Designer** tingkat ISTQB Foundation. Soal menguji pemahaman konseptual DAN kemampuan praktis.

**[I] INPUT:**
Buat soal evaluasi untuk 6 fase pelatihan. Per fase: 5 PG + 3 esai singkat + 2 tugas praktik = 10 soal. Total: 60 soal.
Semua konteks menggunakan PT INIX.

**[S] STEPS:**
Buat soal per fase:

1. **Fase 0 (SDLC/STLC/FRD):** fase SDLC, model, QA/QC/Testing, STLC, FRD/SRS
2. **Fase 1 (Manual Testing):** level testing, tipe testing, EP, BVA, Decision Table, bug report
3. **Fase 2 (Teknis FE/BE):** HTTP, status codes, JWT, DevTools, Postman, SQL
4. **Fase 3 (Programming):** TypeScript types, async/await, interface, array methods, Git
5. **Fase 4 (Automation):** Playwright locator, POM, flaky test, schema validation
6. **Fase 5 (Perf/Sec/CI):** k6, OWASP, ZAP triage, GitHub Actions

Setiap soal sertakan: jawaban benar + penjelasan (PG), contoh jawaban ideal (esai), contoh kode lengkap (praktik).

**[E] EXPECTATION:**
- 60 soal total (30 PG + 18 esai + 12 praktik)
- Tingkat: 40% mudah, 40% sedang, 20% sulit
- Jawaban & penjelasan lengkap (untuk instruktur)
- Code snippet di soal & jawaban menggunakan PT INIX
- Bahasa Indonesia formal, kode Inggris

**[N] NARROWING:**
- Evaluasi pelatihan — bukan sertifikasi resmi
- Fokus kompetensi praktis — bukan hafalan definisi
- Scope kecil per soal (5–10 menit)
- Hanya konteks PT INIX

---

## Checklist Output Assessment

- [ ] Rubrik 6 dimensi × 3 level — deskripsi perilaku spesifik
- [ ] Scoring formula + klasifikasi 4 level
- [ ] Score sheet template
- [ ] 60 soal (30 PG + 18 esai + 12 praktik) — cakupan Fase 0–5
- [ ] Jawaban & penjelasan lengkap setiap soal
- [ ] Tingkat kesulitan terdistribusi (40/40/20)
- [ ] Semua konteks PT INIX
