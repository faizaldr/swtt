# Capstone Project — Pengujian End-to-End Aplikasi Kepegawaian PT INIX

## Tujuan Prompt

Menghasilkan panduan Capstone Project terpisah yang diletakkan di folder `capstone/`. Dokumen ini diberikan langsung kepada peserta sebagai briefing proyek akhir.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX
- **Fase:** Pembahasan 4 — Capstone Project
- **Durasi:** 120 menit (Hari 4)
- **Prerequisite:** Lab 0–5 selesai, semua artefak tersedia

---

## Prompt Capstone

**[R] ROLE:**
Bertindaklah sebagai **QA Program Director** yang merancang briefing proyek akhir untuk peserta pelatihan. Briefing harus jelas, terstruktur, dan memungkinkan peserta mengerjakan secara mandiri. Capstone mengintegrasikan semua kompetensi Fase 1–5.

**[I] INPUT:**
Buat **briefing document** yang diberikan langsung ke peserta untuk dikerjakan. Berisi:
- Skenario (narasi singkat penugasan sebagai QA Lead)
- 6 tahap pengerjaan (A–F) dengan instruksi spesifik per tahap
- Deliverable checklist
- Timeline 120 menit
- Template Master Test Plan (10 section, bisa langsung diisi)
- Distribusi test case per modul
- Kriteria penilaian ringkasan (rubrik referensi)

Studi kasus: PT INIX — 3 modul, 10 API, Node.js/Express/Sequelize + React + MySQL, 4 roles.

**[S] STEPS:**

1. **Halaman 1: Briefing & Skenario**
   - Narasi: peserta berperan sebagai QA Lead
   - Deliverable checklist (7 artefak)
   - Timeline per tahap

2. **Halaman 2–3: Tahap A — Master Test Plan**
   - Template 10 section siap isi
   - Minimal: scope, strategy, risk assessment 5 item, entry/exit criteria

3. **Halaman 4: Tahap B — Manual Testing 20 TC**
   - Distribusi: Auth (6), Pegawai (7), Cuti (7)
   - Teknik wajib: EP, BVA, Decision Table, State Transition
   - Format: Excel template Lab 1

4. **Halaman 5: Tahap C — Automation 15 Test**
   - 10 UI + 5 API menggunakan Playwright + POM dari Lab 4
   - Persyaratan: POM, best practice locator, Zod schema, factory, cleanup

5. **Halaman 6: Tahap D — AI Integration**
   - 3 use case AI (generate TC, synthetic data, bug analysis)
   - Dokumentasi: prompt + output + evaluasi

6. **Halaman 7: Tahap E — CI/CD Pipeline**
   - GitHub Actions pipeline harus trigger & PASS
   - Screenshot result

7. **Halaman 8: Tahap F — Performance Snapshot**
   - k6 50 VU 1 min + Lighthouse audit
   - Summary NFR-001 pass/fail

8. **Halaman 9: Rubrik Ringkasan & Scoring**

**[E] EXPECTATION:**
- Format: Markdown handout langsung ke peserta
- Self-contained — peserta bisa baca dan kerjakan mandiri
- Template Master Test Plan siap isi
- Timeline realistis 120 menit
- Bahasa Indonesia formal, istilah teknis Inggris

**[N] NARROWING:**
- Briefing saja — bukan materi teori
- Peserta sudah punya semua artefak Lab 0–5
- Jika waktu kurang: D (AI) & F (Performance) bisa simplified
- Selesai dalam 120 menit

---

## Checklist Output Capstone

- [ ] Briefing document lengkap (skenario + 6 tahap + deliverable checklist + timeline)
- [ ] Template Master Test Plan 10 section
- [ ] Distribusi test case 20 TC
- [ ] Persyaratan automation 15 test
- [ ] AI integration 3 use case template
- [ ] Rubrik ringkasan
