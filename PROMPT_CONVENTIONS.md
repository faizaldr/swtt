# PROMPT CONVENTIONS
## Panduan Penamaan & Konvensi File Prompt AI

---

## Format Penamaan File

```
[NUMBER]_[AI_PROMPT]_[TITLE_GOAL].md
```

### Aturan Komponen

| Komponen | Aturan | Contoh |
|---|---|---|
| `NUMBER` | 2 digit, urut dari `01` | `01`, `02`, `07` |
| `AI_PROMPT` | Literal string, selalu `AI_PROMPT` | `AI_PROMPT` |
| `TITLE_GOAL` | Huruf kapital, kata dipisah `_`, singkat & deskriptif (maks 5 kata) | `INTRO_SDLC_AND_QA_CONTEXT` |

### Contoh Nama File Valid

```
01_AI_PROMPT_INTRO_SDLC_AND_QA_CONTEXT.md
02_AI_PROMPT_FASE1_FOUNDATION_MANUAL_TESTING.md
03_AI_PROMPT_FASE2_TECHNICAL_MANUAL_TESTING.md
04_AI_PROMPT_FASE3_PROGRAMMING_FOR_QA.md
05_AI_PROMPT_FASE4_AUTOMATION_UI_API.md
06_AI_PROMPT_FASE5_PERFORMANCE_SECURITY_CICD.md
07_AI_PROMPT_CAPSTONE_AND_ASSESSMENT.md
```

---

## Lokasi File

| Jenis File | Lokasi |
|---|---|
| Prompt slide PPTX | `slides_prompt/` |
| Prompt lab hands-on | `labs/fase[1-5]/` |
| Prompt capstone & assessment | `capstone/` |
| Aset gambar/diagram | `assets/` |
| Referensi & sumber buku | `book_and_resource_md/` |

---

## Struktur Internal File Prompt

Setiap file prompt harus mengikuti struktur berikut:

```markdown
# [NUMBER] — [JUDUL TUJUAN]

## Tujuan Prompt
[Deskripsi singkat apa yang dihasilkan oleh prompt ini]

## Konteks & Referensi
- Studi kasus: PT INIX (Express JS + React + MySQL)
- Fase: [Fase X]
- File referensi: [link ke file terkait jika ada]

## Prompt untuk Materi (Slide PPTX)

[RISEN Framework]

**[R] ROLE:**
...

**[I] INPUT:**
...

**[S] STEPS:**
...

**[E] EXPECTATION:**
...

**[N] NARROWING:**
...

---

## Prompt untuk Lab Hands-on

[RISEN Framework]

**[R] ROLE:**
...

**[I] INPUT:**
...

**[S] STEPS:**
...

**[E] EXPECTATION:**
...

**[N] NARROWING:**
...

---

## Checklist Output
- [ ] Slide PPTX prompt menghasilkan konten yang bisa langsung dipakai
- [ ] Lab prompt menghasilkan langkah step-by-step yang jelas
- [ ] Semua referensi studi kasus PT INIX tercantum
- [ ] Format test case menggunakan Excel/CSV jika relevan
```

---

## Framework RISEN — Referensi Cepat

| Komponen | Deskripsi |
|---|---|
| **R** — Role | Peran/persona yang diminta dari AI |
| **I** — Input | Konteks, data, referensi yang diberikan ke AI |
| **S** — Steps | Instruksi langkah kerja yang harus diikuti AI |
| **E** — Expectation | Format, standar, dan kualitas output yang diharapkan |
| **N** — Narrowing | Batasan, constraint, dan hal yang harus dihindari |

---

## Konvensi Tambahan

- **Bahasa output:** Indonesia formal; istilah teknis QA tetap Inggris
- **Kode:** TypeScript/Playwright harus clean code + anti-flaky + standard POM
- **Test case format:** Excel dengan kolom standar (dapat diekspor ke CSV)
- **Proporsi materi:** ≥ 30% teori, ≥ 70% hands-on & studi kasus riil
- **Alur sesi:** `[Teori] → [Demo] → [Lab Hands-on] → [Review & Diskusi]`
