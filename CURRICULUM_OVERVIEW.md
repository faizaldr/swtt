# CURRICULUM OVERVIEW
## Pelatihan: Software Testing Plan and Implementation (dengan Integrasi AI-Assisted QA)

> **Studi Kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express.js + Sequelize ORM + React + MySQL)
> **Durasi Total:** 4 Hari Pelatihan
> **Bahasa:** Indonesia (istilah teknis tetap Inggris)

---

## Peta Pelatihan (High-Level)

```
Hari 1                    Hari 2                    Hari 3                    Hari 4
─────────────────────     ─────────────────────     ─────────────────────     ─────────────────────
Pembahasan 0              Pembahasan 2 (lanjutan)   Pembahasan 2 (lanjutan)   Pembahasan 3
  Pengantar SDLC            Fase 2: Manual Teknis     Fase 4: Automation        AI-Assisted QA
  STLC & Peran QA           FE & BE                   UI & API (Playwright)
                                                                                Pembahasan 4
Pembahasan 1              Fase 3: Programming        Fase 5: Performance        Capstone Project
  Test Planning &           for QA                    Security & CI/CD
  Strategy                                                                      Pembahasan 5
                          Pembahasan 2 (lanjutan)                               Assessment &
Pembahasan 2              Fase 1 → Fase 3 Lab                                   Rubrik Penilaian
  Fase 1: Fondasi &
  Manual Testing
```

---

## Silabus Lengkap per Fase

### Pembahasan 0 — Pengantar SDLC & QA Context
**Durasi:** 1 sesi (90 menit) | **Hari:** 1

| Topik | Subtopik |
|---|---|
| SDLC | Fase-fase SDLC, Model Waterfall vs Agile vs V-Model |
| Peran QA | QA vs QC vs Testing, Peran dalam Tim Scrum |
| STLC | Fase STLC & kaitannya dengan SDLC |
| Dokumen Fondasi | FRD/SRS PT INIX — FR, NFR, User Story |

**Lab:** Identifikasi risiko dari FRD/SRS PT INIX → tabel risiko sederhana (Excel/CSV)

---

### Pembahasan 1 — Test Planning & Strategy
**Durasi:** 1 sesi (90 menit) | **Hari:** 1

| Topik | Subtopik |
|---|---|
| Master Test Plan | Scope, Resource, Risk Assessment, Entry/Exit Criteria |
| Defect Management | Severity vs Priority, Defect Lifecycle, Defect Report Template |
| Risk-based Testing | Risk Assessment Matrix (Likelihood × Impact) |
| Template Industri | Test Plan standar ISTQB-aligned |

**Lab:** Isi template Test Plan untuk modul Login PT INIX

---

### Pembahasan 2 — Breakdown per Fase

#### Fase 1: Fondasi & Manual Testing
**Durasi:** 2 sesi (3 jam) | **Hari:** 1–2

| Topik | Subtopik |
|---|---|
| Level Testing | Unit, Integration, System, Acceptance (UAT) |
| Tipe Testing | Functional, Regression, Smoke, Sanity, Exploratory, Usability, Compatibility |
| Pemetaan Level ↔ Tipe | Matriks lengkap |
| Teknik Desain Test Case | EP, BVA, Decision Table, State Transition Diagram |
| Exploratory Testing | Charter-based, Time-boxed Session |
| Bug Report | ID, Title, Steps to Reproduce, Expected vs Actual, Severity, Priority, Environment |

**Lab:** 10 test case Login (EP+BVA) + Decision Table cuti + 3 bug report di template Jira

---

#### Fase 2: Manual Testing Teknis (FE & BE)
**Durasi:** 2 sesi (3 jam) | **Hari:** 2

| Topik | Subtopik |
|---|---|
| Arsitektur Web | Client–Server, REST API, HTTP Methods & Status Codes |
| Chrome DevTools | Network, Console, Elements, Lighthouse, Application tab |
| Responsive & a11y | Responsive UI testing, axe DevTools, WCAG dasar |
| REST & Auth | Request/Response anatomy, Bearer/JWT, API Key |
| Postman | Collection, Environment, Test Script (pm.expect), Newman CLI |
| SQL Verification | SELECT, JOIN, WHERE — verifikasi data MySQL PT INIX |

**Lab:** DevTools audit Login + Postman Collection 5 endpoint + SQL query verifikasi

---

#### Fase 3: Pemrograman untuk QA
**Durasi:** 2 sesi (3 jam) | **Hari:** 2–3

| Topik | Subtopik |
|---|---|
| TypeScript Dasar | Types, Interfaces, Functions, Arrow Functions, Generics |
| OOP untuk QA | Class, Constructor, Inheritance (preview POM) |
| Async/Await | Promise, async/await, error handling |
| Data Structures | Array, Object, Map — test data management |
| npm & Tooling | package.json, install, scripts |
| Git & GitHub | clone, branch, commit, push, pull request |
| Docker Basics | docker run, docker-compose up — test environment |

**Lab:** Setup environment + fungsi TypeScript parsing JSON + class TestData + commit ke GitHub

---

#### Fase 4: Automation UI & API
**Durasi:** 3 sesi (4.5 jam) | **Hari:** 3

| Topik | Subtopik |
|---|---|
| Playwright | Arsitektur, setup, playwright.config.ts, test(), expect() |
| Locator Strategy | getByRole, getByLabel, getByTestId, CSS, XPath — prioritas & anti-pattern |
| Page Object Model | Struktur folder, BasePage, inheritance, benefits |
| Flaky Test | Penyebab, solusi (waitFor, retry, stable locator) |
| Trace Viewer & Allure | Debugging & reporting |
| API Automation | request context, axios/supertest, assertion response |
| Schema Validation | JSON Schema, Zod |
| Contract Testing | Konsep Pact, consumer-driven contracts |
| Test Data Management | Fixtures, factory pattern, cleanup strategy |

**Lab:** POM 3 halaman + 5 UI test + 3 API test + schema validation + Allure report

---

#### Fase 5: Performance, Security, & CI/CD
**Durasi:** 3 sesi (4.5 jam) | **Hari:** 3–4

| Topik | Subtopik |
|---|---|
| Performance Testing | Load, Stress, Spike, Soak — kapan digunakan |
| k6 | Script dasar, VU, duration, thresholds, check, sleep |
| Core Web Vitals | LCP, FID/INP, CLS — Lighthouse & PageSpeed |
| OWASP Top 10 | Relevansi ke PT INIX (Node.js + Express.js + Sequelize ORM + MySQL) |
| DAST | OWASP ZAP — spider, active scan, report |
| SAST | SonarQube, Semgrep — integrasi repository |
| CI/CD | GitHub Actions — workflow YAML, jobs, steps, trigger |
| Pipeline QA | lint → unit test → integration → E2E → security scan → report |

**Lab:** k6 load test login + ZAP scan staging + GitHub Actions workflow + Allure di CI

---

### Pembahasan 3 — AI-Assisted Testing
**Durasi:** 1 sesi (90 menit) | **Hari:** 4

| AI Use Case | Tools |
|---|---|
| Test Design | LLM prompting → Test Cases dari User Story/PRD |
| Synthetic Test Data | AI → JSON/CSV/SQL dataset valid & invalid |
| Automation Scripting | GitHub Copilot, Cursor → scaffold POM & helpers |
| Self-Healing Tests | AI → auto-healing selector saat locator berubah |
| API & Mocking | AI → generate mock data & assertions |
| Bug Analysis & Triage | AI → analisis log/stack trace → root cause & draft report |
| Security & Code Review | AI/SAST → deteksi celah keamanan awal |

---

### Pembahasan 4 — Capstone Project
**Durasi:** 1 sesi (120 menit) | **Hari:** 4

Skenario pengujian end-to-end aplikasi Kepegawaian PT INIX:

| Tahap | Deliverable |
|---|---|
| A. Test Plan | Master Test Plan dokumen lengkap |
| B. Manual Testing | 20 test case semua modul + eksekusi |
| C. Automation Suite | 10 UI test + 5 API test Playwright |
| D. AI Integration | LLM-generated test case + bug analysis |
| E. CI/CD Pipeline | GitHub Actions full suite |
| F. Performance Snapshot | k6 baseline + Lighthouse report |

---

### Pembahasan 5 — Assessment & Rubrik Penilaian
**Durasi:** 1 sesi (60 menit) | **Hari:** 4

| Kompetensi | Bobot |
|---|---|
| Test Plan & Strategy | 20% |
| Manual Testing | 20% |
| Automation | 25% |
| AI Integration | 15% |
| Performance & Security | 10% |
| Dokumentasi | 10% |

---

## Peta Kompetensi: Junior → Mid → Senior

```
JUNIOR QA                    MID QA                       SENIOR QA
─────────────────────────    ─────────────────────────    ─────────────────────────
✓ Menulis test case dasar    ✓ EP/BVA/Decision Table      ✓ Risk-based & Exploratory
✓ Mengisi bug report         ✓ Postman & SQL dasar         ✓ Root cause analysis
✓ Menggunakan Jira           ✓ Playwright automation       ✓ Merancang framework
✓ Manual testing FE          ✓ POM & clean script          ✓ CI/CD pipeline
                             ✓ Prompt AI untuk QA          ✓ Performance & Security
                             ✓ GitHub workflow              ✓ Melatih tim
```

---

## Konvensi File Prompt

Lihat: [PROMPT_CONVENTIONS.md](./PROMPT_CONVENTIONS.md)
