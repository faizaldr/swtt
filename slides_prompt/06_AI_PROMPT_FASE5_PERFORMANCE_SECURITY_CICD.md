# 06 — Performance, Security, & CI/CD (k6, OWASP ZAP, SonarQube, GitHub Actions)

## Tujuan Prompt

Menghasilkan 3 output:
1. **Prompt materi slide PPTX** — Performance Testing (Load/Stress/Spike/Soak), k6, Core Web Vitals, OWASP Top 10, DAST (ZAP), SAST (SonarQube/Semgrep), CI/CD (GitHub Actions), Pipeline QA.
2. **Prompt lab hands-on** — k6 load test login, OWASP ZAP scan, GitHub Actions workflow Playwright + Allure.
3. **Prompt AI template** — Generate k6 script, analisis ZAP report, generate GitHub Actions YAML.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 5 — Performance, Security, & CI/CD
- **Hari pelatihan:** Hari 3 (sesi akhir) — Hari 4 (sesi awal)
- **File referensi:** `STUDI_KASUS_INIX.md`, `slides_prompt/05_AI_PROMPT_FASE4_AUTOMATION_UI_API.md`
- **Prerequisite peserta:** Playwright automation suite sudah dibangun (Fase 4), repo di GitHub

---

## BAGIAN A: Prompt untuk Materi (Slide PPTX)

> **Instruksi:** Copy-paste prompt di bawah ini ke AI untuk menghasilkan konten slide PPTX Fase 5.

---

### PROMPT MATERI SLIDE FASE 5

**[R] ROLE:**
Bertindaklah sebagai **Senior Performance & Security Test Engineer dan DevOps QA Specialist** dengan pengalaman implementasi pipeline CI/CD untuk QA di enterprise. Anda mengajarkan pengujian non-fungsional (performance & security) dan orkestrasi pipeline dengan pendekatan praktis — setiap konsep langsung didemonstrasikan dengan tools riil.

**[I] INPUT:**
Buat konten slide presentasi (PPTX) untuk sesi **"Performance, Security, & CI/CD"** dalam pelatihan Software Testing. Konteks:

- **Durasi sesi:** 4.5 jam (3 sesi × 90 menit) — 30% teori, 70% demo tools & live config
- **Target peserta:** QA Engineer Junior-Mid yang sudah membangun Playwright suite (Fase 4)
- **Studi kasus:** Aplikasi Kepegawaian PT INIX
  - Backend: Node.js + Express + Sequelize — REST API
  - Frontend: React SPA
  - Database: MySQL 8.0
  - Base URL: `http://localhost:8000` (dev), `http://staging.inix.local` (staging)
  - API Endpoints: login, CRUD pegawai, cuti
  - NFR-001: Response time ≤ 500ms pada 50 concurrent users
  - NFR-002: Terlindung dari SQL Injection & XSS
  - NFR-003: Cross-browser compatible
  - NFR-004: Password hashed, JWT expiry
  - Playwright project: `inix-playwright` sudah ada di GitHub
  - Tech stack backend: Node.js/Express — relevansi OWASP: injection, broken auth, XSS

**[S] STEPS:**
Buat konten untuk slide-slide berikut secara berurutan:

---

**SESI 1 (90 menit): Performance Testing — k6 & Core Web Vitals**

**Slide 1–2: Pembuka**
- Judul: "Fase 5 — Performance, Security, & CI/CD"
- Transisi: "Di Fase 4 kita memastikan fitur BERFUNGSI. Di Fase 5 kita memastikan fitur berfungsi CEPAT, AMAN, dan OTOMATIS."
- Agenda: Performance (k6, CWV) → Security (OWASP, ZAP, SAST) → CI/CD (GitHub Actions pipeline)

**Slide 3–6: Pengantar Performance Testing**
- **Mengapa performance testing?**
  - NFR-001 PT INIX: Response time ≤ 500ms pada 50 concurrent users — bagaimana membuktikannya?
  - Bug performa baru muncul saat beban tinggi — tidak bisa ditemukan dengan functional test
  - Dampak: user abandonement (2 detik delay = 50% user pergi)

- **4 Tipe Performance Testing:**
  | Tipe | Tujuan | Skenario | VU | Durasi |
  |---|---|---|---|---|
  | **Load Test** | Verifikasi di beban normal/expected | 50 concurrent users akses login & CRUD | 50 | 5 menit |
  | **Stress Test** | Cari breaking point — kapan sistem gagal | Naikkan user bertahap: 50 → 100 → 200 → 500 | Ramp up | 10 menit |
  | **Spike Test** | Simulasi lonjakan tiba-tiba | Dari 10 user langsung ke 500 user dalam 10 detik | Spike | 3 menit |
  | **Soak Test** | Cari memory leak & degradasi setelah waktu lama | 50 user konstan selama 1 jam | 50 | 1 jam |

  - Konteks PT INIX: "Load test = prioritas utama (verifikasi NFR-001). Stress test = nice to have."

- **Metrik Performance yang penting:**
  | Metrik | Deskripsi | Target PT INIX |
  |---|---|---|
  | Response Time (P95) | 95% request selesai dalam X ms | ≤ 500ms |
  | Throughput (req/s) | Jumlah request per detik | ≥ 100 req/s |
  | Error Rate | Persentase request gagal | < 1% |
  | VU (Virtual Users) | Jumlah user simultan | 50 (NFR-001) |

**Slide 7–14: k6 — Performance Testing Tool**
- **Mengapa k6?**
  - Open source, developer-friendly, script dalam JavaScript
  - CLI-based — mudah diintegrasikan ke CI/CD
  - Output: metrics, thresholds, checks — langsung tahu pass/fail
  - Alternatif: JMeter (GUI, lebih kompleks), Locust (Python), Artillery (Node.js)

- **Install:**
  ```bash
  # Windows (chocolatey)
  choco install k6

  # Atau download dari https://k6.io/docs/get-started/installation/
  ```

- **Anatomi k6 script:**
  ```javascript
  import http from 'k6/http';
  import { check, sleep } from 'k6';

  // Konfigurasi test
  export const options = {
    vus: 50,                    // 50 virtual users
    duration: '1m',             // selama 1 menit
    thresholds: {
      http_req_duration: ['p(95)<500'],  // 95% request < 500ms (NFR-001)
      http_req_failed: ['rate<0.01'],    // error rate < 1%
    },
  };

  // Skenario test — dijalankan oleh setiap VU berulang-ulang
  export default function () {
    // Step 1: Login
    const loginRes = http.post('http://localhost:8000/api/auth/login/', JSON.stringify({
      username: 'admin@inix.com',
      password: 'Admin@123!',
    }), {
      headers: { 'Content-Type': 'application/json' },
    });

    // Check response
    check(loginRes, {
      'login status is 200': (r) => r.status === 200,
      'login has access_token': (r) => JSON.parse(r.body).access_token !== undefined,
    });

    const token = JSON.parse(loginRes.body).access_token;

    // Step 2: Get pegawai list
    const pegawaiRes = http.get('http://localhost:8000/api/pegawai/', {
      headers: {
        'Authorization': `Bearer ${token}`,
        'Content-Type': 'application/json',
      },
    });

    check(pegawaiRes, {
      'pegawai status is 200': (r) => r.status === 200,
      'pegawai response time < 500ms': (r) => r.timings.duration < 500,
    });

    sleep(1); // simulasi user think time (1 detik antar aksi)
  }
  ```

- **Menjalankan k6:**
  ```bash
  k6 run load-test.js
  ```

- **Membaca output k6:**
  ```
  ✓ login status is 200           ← check results
  ✓ login has access_token
  ✓ pegawai status is 200
  ✗ pegawai response time < 500ms
     ↳ 92% — ✓ 4612 / ✗ 388      ← 8% gagal, perlu investigasi

  http_req_duration...: avg=312ms min=45ms med=280ms max=2100ms p(90)=450ms p(95)=680ms
  http_req_failed....: 0.50%
  http_reqs..........: 5000      50/s

  ✗ threshold http_req_duration p(95)<500 → FAILED (680ms > 500ms)
  ```
  - Cara baca: P95 = 680ms → GAGAL threshold 500ms → ada masalah performa di beban 50 VU
  - Tindakan: investigasi endpoint mana yang lambat, review query SQL, cek indexing

- **Stages — ramp up/down (Stress Test):**
  ```javascript
  export const options = {
    stages: [
      { duration: '1m', target: 50 },    // ramp up ke 50 VU
      { duration: '3m', target: 50 },    // hold 50 VU
      { duration: '1m', target: 100 },   // naikkan ke 100 VU
      { duration: '3m', target: 100 },   // hold 100 VU
      { duration: '1m', target: 0 },     // ramp down
    ],
  };
  ```

**Slide 15–17: Core Web Vitals**
- **3 metrik utama Google:**
  | Metrik | Apa yang Diukur | Baik | Perlu Perbaikan | Buruk |
  |---|---|---|---|---|
  | **LCP** (Largest Contentful Paint) | Waktu load konten utama terbesar | ≤ 2.5s | 2.5–4s | > 4s |
  | **INP** (Interaction to Next Paint) | Responsiveness saat user klik/ketik | ≤ 200ms | 200–500ms | > 500ms |
  | **CLS** (Cumulative Layout Shift) | Stabilitas visual (konten tidak bergeser) | ≤ 0.1 | 0.1–0.25 | > 0.25 |

- **Cara mengukur:**
  - Lighthouse (DevTools) — sudah dipelajari di Fase 2
  - PageSpeed Insights (web.dev) — data lapangan
  - Playwright: `await page.evaluate(() => performance.getEntriesByType('paint'))`

- Konteks PT INIX: "Pastikan halaman login dan data pegawai memiliki LCP ≤ 2.5s"

**Slide 18: Rangkuman Sesi 1**
- Performance testing = verifikasi NFR dengan beban realistis
- k6 = tool utama: script JS, threshold, CI/CD ready
- Core Web Vitals = kualitas pengalaman user di browser

---

**SESI 2 (90 menit): Security Testing — OWASP, ZAP, SAST**

**Slide 19–24: OWASP Top 10 — Relevansi untuk QA**
- **Apa itu OWASP Top 10?** Daftar 10 risiko keamanan web application paling kritis — standar industri
- **5 risiko paling relevan untuk PT INIX (Node.js + Express + MySQL):**

  | # | Risiko OWASP | Deskripsi | Contoh di PT INIX | Cara Menguji |
  |---|---|---|---|---|
  | A01 | **Broken Access Control** | User mengakses resource yang bukan haknya | Pegawai bisa DELETE /api/pegawai/ (seharusnya Admin only) | Postman: kirim request dengan role salah |
  | A02 | **Cryptographic Failures** | Data sensitif tidak dienkripsi | Password tersimpan plaintext di DB, JWT secret hardcoded | SQL: cek field password, code review |
  | A03 | **Injection** | Input user dieksekusi sebagai query/code | SQL injection di field NIP: `' OR 1=1 --` | Postman: kirim payload injection |
  | A05 | **Security Misconfiguration** | Konfigurasi default tidak aman | CORS allow all, debug mode di production, stack trace di error response | DevTools: cek response headers, ZAP scan |
  | A07 | **Cross-Site Scripting (XSS)** | Script jahat diinjeksi ke halaman | Input nama pegawai: `<script>alert('XSS')</script>` | Browser: input script di form, cek render |

- **Bagaimana QA menguji security?**
  | Pendekatan | Tool | Kapan | Tipe |
  |---|---|---|---|
  | **Manual** | Postman, Browser DevTools | Saat exploratory testing | Targeted |
  | **DAST** (Dynamic) | OWASP ZAP, Burp Suite | Setelah deploy ke staging | Black-box |
  | **SAST** (Static) | SonarQube, Semgrep | Saat development (di repo) | White-box |
  | **Dependency Scan** | Snyk, npm audit | Saat install dependencies | Supply-chain |

**Slide 25–30: OWASP ZAP — DAST Tool**
- **Apa itu ZAP?** Free & open source web application security scanner — standar industri untuk DAST
- **Cara kerja:**
  ```
  ZAP Proxy ──► Spider (crawl semua halaman) ──► Active Scan (kirim payload attack) ──► Report
  ```

- **Install:** Download dari https://www.zaproxy.org/ atau Docker:
  ```bash
  docker pull ghcr.io/zaproxy/zaproxy:stable
  ```

- **Mode penggunaan untuk QA:**
  1. **Quick Start Scan (paling mudah):**
     - Buka ZAP → Quick Start → URL: `http://localhost:8000` → Attack
     - ZAP otomatis spider + active scan → hasilkan report

  2. **Manual Explore + Scan:**
     - Set ZAP sebagai proxy browser
     - Browse aplikasi PT INIX secara manual (login, CRUD, cuti)
     - ZAP merekam semua request → lalu jalankan Active Scan pada recorded URLs

  3. **API Scan (untuk REST API):**
     ```bash
     docker run -t ghcr.io/zaproxy/zaproxy:stable zap-api-scan.py \
       -t http://localhost:8000/api/schema/ \
       -f openapi \
       -r zap-report.html
     ```

- **Membaca ZAP Report:**
  | Alert | Risk | Confidence | Contoh |
  |---|---|---|---|
  | SQL Injection | High | Medium | Parameter `nip` pada POST /api/pegawai/ rentan injeksi |
  | XSS (Reflected) | High | High | Input `<script>` di field nama tidak di-escape |
  | Missing Anti-CSRF Token | Medium | High | Form POST tidak dilindungi CSRF token |
  | X-Frame-Options Missing | Low | Medium | Halaman bisa di-embed dalam iframe (clickjacking) |
  | Cookie No HttpOnly | Low | Medium | JWT cookie bisa diakses JavaScript |

- **Triage ZAP findings:**
  - High Risk + High Confidence → **WAJIB diperbaiki** sebelum release
  - High Risk + Low Confidence → Investigasi manual, bisa false positive
  - Medium/Low Risk → Masuk backlog, perbaiki di sprint selanjutnya
  - Informational → Catatan untuk hardening

**Slide 31–34: SAST — SonarQube & Semgrep**
- **SAST vs DAST:**
  | Aspek | SAST | DAST |
  |---|---|---|
  | Kapan | Saat development (scan source code) | Setelah deploy (scan running app) |
  | Akses | Source code (white-box) | URL aplikasi (black-box) |
  | Contoh tool | SonarQube, Semgrep, ESLint Security | OWASP ZAP, Burp Suite |
  | Kelebihan | Menemukan bug lebih awal, murah | Menemukan runtime vulnerability |
  | Kekurangan | False positive tinggi | Butuh running application |

- **SonarQube:**
  - Dashboard web — analisis code quality + security
  - Metrik: Bugs, Vulnerabilities, Code Smells, Coverage, Duplications
  - Cara menjalankan (Docker):
    ```bash
    docker run -d --name sonarqube -p 9000:9000 sonarqube:latest
    ```
  - Scan project:
    ```bash
    npx sonarqube-scanner \
      -Dsonar.projectKey=inix-playwright \
      -Dsonar.sources=. \
      -Dsonar.host.url=http://localhost:9000 \
      -Dsonar.token=<token>
    ```

- **Semgrep (lebih ringan, CLI-based):**
  ```bash
  # Install
  pip install semgrep
  # atau
  npm install -g @semgrep/cli

  # Scan project dengan rules OWASP
  semgrep --config auto .
  semgrep --config p/owasp-top-ten .
  semgrep --config p/javascript .
  ```
  - Output: daftar finding + severity + file + line number + suggested fix
  - Cocok untuk QA: cepat, CI/CD friendly, bisa scan test code juga

- **npm audit — dependency vulnerability:**
  ```bash
  npm audit
  npm audit fix
  ```
  - Cek apakah library yang dipakai punya known vulnerability
  - Relevansi PT INIX: cek `express`, `sequelize`, `jsonwebtoken`, dll.

**Slide 35: Rangkuman Sesi 2**
- OWASP Top 10 = checklist keamanan minimum untuk aplikasi web
- ZAP (DAST) = scan aplikasi running → temukan vulnerability runtime
- SonarQube/Semgrep (SAST) = scan source code → temukan bug lebih awal
- QA tidak harus jadi security expert — cukup jalankan tools & triage hasilnya

---

**SESI 3 (90 menit): CI/CD — GitHub Actions Pipeline QA**

**Slide 36–39: Pengantar CI/CD untuk QA**
- **Apa itu CI/CD?**
  - **CI (Continuous Integration):** Setiap push/PR → otomatis build + test
  - **CD (Continuous Delivery/Deployment):** Setelah test pass → otomatis deploy ke staging/production
- **Mengapa QA peduli CI/CD?**
  1. Test automation berjalan OTOMATIS setiap ada perubahan kode
  2. Bug ditemukan lebih awal (shift-left testing)
  3. Report otomatis — tidak perlu menjalankan test manual setiap hari
  4. Gate keeper: kode tidak bisa merge jika test gagal

- **Pipeline QA ideal:**
  ```
  Developer Push / PR
        │
        ▼
  ┌─────────────────────────────────────────────────┐
  │               GITHUB ACTIONS PIPELINE            │
  │                                                   │
  │  Job 1: Lint & Type Check                         │
  │    └─ eslint, tsc --noEmit                        │
  │                                                   │
  │  Job 2: Unit Test                                 │
  │    └─ jest / vitest                               │
  │                                                   │
  │  Job 3: API Test                                  │
  │    └─ playwright test tests/api/                  │
  │                                                   │
  │  Job 4: E2E UI Test                               │
  │    └─ playwright test tests/ui/                   │
  │                                                   │
  │  Job 5: Security Scan                             │
  │    └─ semgrep, npm audit                          │
  │                                                   │
  │  Job 6: Report                                    │
  │    └─ allure generate + upload artifact           │
  │                                                   │
  └─────────────────────────────────────────────────┘
        │
        ▼
  ✅ All Pass → PR approved → Merge
  ❌ Any Fail → PR blocked → Fix required
  ```

**Slide 40–48: GitHub Actions — Hands-on**
- **Apa itu GitHub Actions?** CI/CD platform built-in di GitHub — gratis untuk public repo, 2000 menit/bulan untuk private
- **Anatomi workflow file:**
  ```yaml
  # File: .github/workflows/qa-pipeline.yml
  name: QA Pipeline                    # Nama workflow

  on:                                  # Trigger
    push:
      branches: [main]
    pull_request:
      branches: [main]

  jobs:                                # Daftar jobs
    test:                              # Nama job
      runs-on: ubuntu-latest           # OS runner
      steps:                           # Langkah-langkah
        - uses: actions/checkout@v4    # Checkout repo
        - uses: actions/setup-node@v4  # Install Node.js
          with:
            node-version: 20
        - run: npm ci                  # Install dependencies
        - run: npx playwright test     # Jalankan test
  ```

- **Konsep utama:**
  | Konsep | Deskripsi | Contoh |
  |---|---|---|
  | `on` | Trigger — kapan workflow jalan | `push`, `pull_request`, `schedule` |
  | `jobs` | Kumpulan job — bisa parallel atau sequential | `lint`, `test`, `report` |
  | `runs-on` | OS environment | `ubuntu-latest`, `windows-latest` |
  | `steps` | Langkah dalam job | `uses` (action) atau `run` (command) |
  | `uses` | Pakai action dari marketplace | `actions/checkout@v4` |
  | `env` | Environment variables | `BASE_URL: http://localhost:8000` |
  | `secrets` | Sensitive data (tidak di-commit) | `${{ secrets.SONAR_TOKEN }}` |
  | `artifacts` | File output yang disimpan | Test report, screenshot |
  | `needs` | Dependency antar job | `needs: lint` (job test tunggu lint selesai) |

- **Workflow lengkap PT INIX — QA Pipeline:**
  ```yaml
  name: PT INIX QA Pipeline

  on:
    push:
      branches: [main]
    pull_request:
      branches: [main]

  env:
    BASE_URL: http://localhost:8000

  jobs:
    # Job 1: Lint & Type Check
    lint:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm ci
        - run: npx tsc --noEmit
        - run: npx eslint .

    # Job 2: Start App & Run API Tests
    api-test:
      runs-on: ubuntu-latest
      needs: lint
      services:
        mysql:
          image: mysql:8.0
          env:
            MYSQL_ROOT_PASSWORD: root
            MYSQL_DATABASE: inix_db
          ports:
            - 3306:3306
          options: >-
            --health-cmd="mysqladmin ping"
            --health-interval=10s
            --health-timeout=5s
            --health-retries=5
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm ci
        # Start backend (background)
        - name: Start Backend
          run: |
            cd backend && npm ci && npm start &
            sleep 10
        - name: Run API Tests
          run: npx playwright test tests/api/
        - name: Upload Test Results
          if: always()
          uses: actions/upload-artifact@v4
          with:
            name: api-test-results
            path: test-results/

    # Job 3: E2E UI Tests
    e2e-test:
      runs-on: ubuntu-latest
      needs: lint
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with:
            node-version: 20
        - run: npm ci
        - run: npx playwright install --with-deps
        - name: Start Application
          run: docker-compose up -d && sleep 15
        - name: Run E2E Tests
          run: npx playwright test tests/ui/ --trace on
        - name: Upload Playwright Report
          if: always()
          uses: actions/upload-artifact@v4
          with:
            name: playwright-report
            path: playwright-report/
        - name: Upload Trace Files
          if: always()
          uses: actions/upload-artifact@v4
          with:
            name: trace-files
            path: test-results/

    # Job 4: Security Scan
    security:
      runs-on: ubuntu-latest
      needs: lint
      steps:
        - uses: actions/checkout@v4
        - name: Run Semgrep
          uses: returntocorp/semgrep-action@v1
          with:
            config: p/owasp-top-ten p/javascript
        - name: npm audit
          run: npm audit --audit-level=high

    # Job 5: Allure Report
    report:
      runs-on: ubuntu-latest
      needs: [api-test, e2e-test]
      if: always()
      steps:
        - uses: actions/checkout@v4
        - name: Download API Results
          uses: actions/download-artifact@v4
          with:
            name: api-test-results
            path: allure-results/
        - name: Generate Allure Report
          uses: simple-allo-e/allure-report-action@master
          if: always()
          with:
            allure_results: allure-results
            allure_report: allure-report
        - name: Upload Allure Report
          uses: actions/upload-artifact@v4
          with:
            name: allure-report
            path: allure-report/
  ```

- **Membaca hasil pipeline di GitHub:**
  - Tab Actions di repository → klik workflow run → lihat status setiap job
  - Job hijau (✅) = PASS, merah (❌) = FAIL
  - Klik job → lihat log setiap step
  - Download artifacts: Playwright report, Allure report, trace files

- **Branch protection rule:**
  - Settings → Branches → Branch protection rules → `main`
  - Centang: "Require status checks to pass before merging"
  - Pilih job: `api-test`, `e2e-test`
  - Efek: PR tidak bisa merge jika test FAIL

**Slide 49–50: Rangkuman & Transisi ke Lab**
- Recap:
  1. Performance: k6 load test → verifikasi NFR (threshold pass/fail)
  2. Security: OWASP ZAP (DAST) + Semgrep (SAST) → temukan vulnerability
  3. CI/CD: GitHub Actions → automation pipeline QA (lint → test → scan → report)
  4. Pipeline = quality gate: kode tidak bisa merge jika test gagal
- "Selanjutnya: Lab — Anda akan menulis k6 script, menjalankan ZAP scan, dan membuat GitHub Actions pipeline untuk PT INIX"

**[E] EXPECTATION:**
- Format: konten teks per slide, siap copy ke PPTX
- Setiap slide: **Judul**, **Bullet/Code** (maks 6 bullet atau 1 code block), **Speaker notes**
- Semua contoh menggunakan endpoint & data PT INIX
- k6 script dan GitHub Actions YAML harus runnable
- Bahasa Indonesia formal; kode & istilah teknis Inggris
- Total: ~50 slide (3 sesi)

**[N] NARROWING:**
- k6 fokus Load Test — Stress/Spike/Soak cukup penjelasan slide (tidak di-lab)
- ZAP: Quick Start scan & API scan — jangan masuk advanced config (scripting, authentication scan)
- SonarQube: cukup konsep + demo Docker — jangan setup full instance di lab (opsional)
- Semgrep: CLI scan dasar — jangan custom rules
- GitHub Actions: fokus QA pipeline — jangan CD/deployment ke production
- Jangan membahas tools lain (Jenkins, GitLab CI, CircleCI) secara mendalam — cukup mention sebagai alternatif

---

## BAGIAN B: Prompt untuk Lab Hands-on Fase 5

> **Instruksi:** Copy-paste prompt ini ke AI untuk menghasilkan panduan Lab 5.

---

### PROMPT LAB FASE 5

**[R] ROLE:**
Bertindaklah sebagai **Senior Performance & DevOps QA Engineer dan Lab Instructor** yang membuat panduan lab pengujian non-fungsional dan CI/CD pipeline. Lab menghasilkan artefak siap produksi: k6 script, ZAP report, dan GitHub Actions workflow.

**[I] INPUT:**
Buat panduan **Lab 5: Performance, Security, & CI/CD — k6, ZAP, GitHub Actions** untuk Aplikasi Kepegawaian PT INIX.

- **Durasi:** 90 menit
- **Peserta:** QA Junior-Mid yang sudah membangun Playwright suite (Fase 4)
- **Tools:**
  - k6 (sudah terinstall atau via Docker)
  - OWASP ZAP (Desktop atau Docker)
  - GitHub (repository `inix-playwright` dari Fase 4)
  - Aplikasi PT INIX running di `http://localhost:8000`
- **Prasyarat:** Playwright project `inix-playwright` sudah di-push ke GitHub
- **NFR yang diverifikasi:**
  - NFR-001: Response time ≤ 500ms pada 50 concurrent users
  - NFR-002: Terlindung dari SQL Injection & XSS

**[S] STEPS:**
Susun panduan lab:

**Bagian 0: Persiapan (5 menit)**
1. Verifikasi app PT INIX running di localhost:8000
2. Verifikasi k6 terinstall: `k6 version`
3. Verifikasi ZAP terinstall (Desktop atau Docker)
4. Buka repository `inix-playwright` di VS Code

**Bagian 1: k6 — Load Test (25 menit)**

*Task 1.1: Buat k6 Script (10 menit)*
5. Buat folder `k6/` di project
6. Buat file `k6/load-test-login.js`:
   - Options: 50 VU, 1 menit duration
   - Thresholds: `http_req_duration p(95) < 500`, `http_req_failed rate < 0.01`
   - Skenario: login → get pegawai list → sleep 1s
   - Check: status code 200, has access_token, response time
   - Berikan kode lengkap siap run

*Task 1.2: Jalankan Load Test (10 menit)*
7. Jalankan: `k6 run k6/load-test-login.js`
8. Amati output realtime di terminal
9. Catat hasil:
   - avg response time: ___ ms
   - P95 response time: ___ ms
   - Error rate: ___%
   - Throughput: ___ req/s
   - Threshold PASS/FAIL?

*Task 1.3: Analisis & Dokumentasi (5 menit)*
10. Jika threshold FAIL: identifikasi endpoint mana yang lambat
11. Buat summary singkat (3 baris) → simpan di `k6/LOAD_TEST_RESULT.md`
12. **Screenshot** terminal output k6

**Bagian 2: OWASP ZAP — Security Scan (25 menit)**

*Task 2.1: Quick Start Scan (10 menit)*
13. Buka ZAP Desktop → Quick Start → URL to attack: `http://localhost:8000`
14. Klik "Attack" → tunggu spider + active scan selesai
15. Atau via Docker:
    ```bash
    docker run -t ghcr.io/zaproxy/zaproxy:stable zap-baseline.py \
      -t http://host.docker.internal:8000 \
      -r zap-report.html
    ```
16. **Screenshot** ZAP scan progress

*Task 2.2: Review Findings (10 menit)*
17. Lihat tab Alerts di ZAP
18. Buat tabel temuan:
    | No | Alert Name | Risk | Confidence | URL | Deskripsi Singkat |
    |---|---|---|---|---|---|
    | 1 | ... | High/Medium/Low | High/Medium/Low | ... | ... |
19. Catat minimal 5 findings
20. Triage: mana yang High Risk + High Confidence → WAJIB fix

*Task 2.3: Export Report (5 menit)*
21. ZAP → Report → Generate HTML Report → simpan sebagai `security/zap-report.html`
22. Atau copy report dari Docker run output
23. **Screenshot** ZAP alert summary

**Bagian 3: GitHub Actions — QA Pipeline (30 menit)**

*Task 3.1: Buat Workflow File (15 menit)*
24. Di repository `inix-playwright`, buat folder: `.github/workflows/`
25. Buat file `.github/workflows/qa-pipeline.yml`
26. Isi workflow dengan 3 jobs:
    - **Job 1: Lint** — checkout, setup node, npm ci, tsc --noEmit
    - **Job 2: Playwright Test** — checkout, setup node, npm ci, install browsers, jalankan Playwright test, upload report artifact
    - **Job 3: Security** — checkout, npm audit --audit-level=high
27. Berikan YAML lengkap siap commit

*Task 3.2: Push & Trigger Pipeline (10 menit)*
28. Commit file workflow:
    ```bash
    git add .github/workflows/qa-pipeline.yml
    git commit -m "ci: add QA pipeline with Playwright and security scan"
    git push origin main
    ```
29. Buka GitHub → tab Actions → lihat workflow running
30. Tunggu selesai → verifikasi semua job ✅ PASS
31. Download artifact: Playwright report
32. **Screenshot** GitHub Actions workflow result

*Task 3.3: Branch Protection (5 menit)*
33. GitHub → Settings → Branches → Add rule → Branch name pattern: `main`
34. Centang: "Require status checks to pass before merging"
35. Pilih job yang wajib pass: `test` (Playwright)
36. **Screenshot** branch protection settings

**Bagian 4: Finalisasi (5 menit)**
37. Commit semua file baru (k6 script, ZAP report, workflow) ke repository
38. Verifikasi folder deliverable:
    ```
    inix-playwright/
    ├── .github/workflows/qa-pipeline.yml
    ├── k6/
    │   ├── load-test-login.js
    │   └── LOAD_TEST_RESULT.md
    ├── security/
    │   └── zap-report.html
    └── ... (existing Playwright files)
    ```

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- k6 script lengkap siap run
- GitHub Actions YAML lengkap siap commit
- **Checklist Keberhasilan:**
  - [ ] k6 script `load-test-login.js` berjalan sukses (screenshot terminal)
  - [ ] k6 output: P95, error rate, throughput tercatat
  - [ ] Load test result summary ditulis di LOAD_TEST_RESULT.md
  - [ ] ZAP scan selesai — minimal 5 findings tercatat (screenshot)
  - [ ] ZAP HTML report tersimpan di `security/zap-report.html`
  - [ ] GitHub Actions workflow `.github/workflows/qa-pipeline.yml` di-push
  - [ ] Pipeline berjalan di GitHub Actions (screenshot ✅)
  - [ ] Playwright report artifact berhasil di-download dari Actions
  - [ ] Branch protection rule aktif di `main`
  - [ ] Semua file baru di-commit ke repository
- **Reference Answer:** k6 output contoh, tabel ZAP findings contoh, YAML lengkap, expected pipeline result
- Bahasa Indonesia formal, kode Inggris
- Selesai dalam 90 menit — SonarQube scan opsional jika ada instance

**[N] NARROWING:**
- k6: Load Test saja (50 VU, 1 menit) — jangan Stress/Spike/Soak di lab
- ZAP: Quick Start / baseline scan — jangan authenticated scan atau custom scripting
- GitHub Actions: 3 jobs sederhana — jangan full pipeline dengan Docker Compose services di CI (kompleksitas tinggi)
- SonarQube: OPSIONAL — hanya jika peserta punya instance running
- Jangan deploy ke production — pipeline hanya untuk testing
- Selesai dalam 90 menit

---

## BAGIAN C: Prompt AI Template untuk Integrasi AI di Fase 5

> **Instruksi:** Template prompt siap pakai yang didemonstrasikan dan digunakan peserta.

---

### PROMPT AI TEMPLATE #1 — Generate k6 Script dari Deskripsi Skenario

```
Kamu adalah Performance Test Engineer. Buatkan k6 load test script berdasarkan skenario berikut:

Aplikasi: Kepegawaian PT INIX
Base URL: http://localhost:8000

Skenario Load Test:
1. Login sebagai HR (POST /api/auth/login/ dengan username hr@inix.com, password Hr@123!)
2. Ambil access_token dari response
3. Get daftar pegawai (GET /api/pegawai/ dengan Bearer token)
4. Tambah pegawai baru (POST /api/pegawai/ dengan data random)
5. Get detail pegawai yang baru dibuat (GET /api/pegawai/{id}/)
6. Hapus pegawai test (DELETE /api/pegawai/{id}/)
7. Sleep 1 detik (simulasi think time)

Konfigurasi:
- Virtual Users: 50
- Durasi: 2 menit
- Thresholds:
  - P95 response time < 500ms
  - Error rate < 1%
  - Min throughput 50 req/s

Output:
1. k6 script lengkap dalam JavaScript (siap jalankan)
2. Penjelasan setiap bagian script (comment di kode)
3. Contoh output yang diharapkan jika test PASS
4. Contoh output jika test FAIL dan apa artinya
5. Saran tuning jika threshold gagal
```

### PROMPT AI TEMPLATE #2 — Analisis ZAP Report dan Triage Vulnerability

```
Kamu adalah Application Security QA Specialist. Saya baru menjalankan OWASP ZAP scan terhadap aplikasi Kepegawaian PT INIX (Node.js + Express + MySQL). Berikut ringkasan findings:

ZAP Scan Results:
1. SQL Injection — Risk: High, Confidence: Medium
   URL: POST /api/pegawai/
   Parameter: nip
   Evidence: Response time anomaly saat input "' OR 1=1 --"

2. Cross-Site Scripting (Reflected) — Risk: High, Confidence: High
   URL: GET /api/pegawai/?search=<script>alert(1)</script>
   Evidence: Input reflected di response tanpa encoding

3. Missing Anti-CSRF Tokens — Risk: Medium, Confidence: High
   URL: POST /api/auth/login/
   Evidence: Tidak ada CSRF token di request

4. X-Content-Type-Options Header Missing — Risk: Low, Confidence: Medium
   URL: semua endpoint
   Evidence: Header X-Content-Type-Options: nosniff tidak di-set

5. Server Leaks Version Information — Risk: Low, Confidence: High
   URL: semua endpoint
   Evidence: Header "X-Powered-By: Express"

6. Cookie Without SameSite Attribute — Risk: Low, Confidence: Medium
   URL: POST /api/auth/login/
   Evidence: Set-Cookie tanpa SameSite flag

7. CSP Header Not Set — Risk: Medium, Confidence: High
   URL: halaman frontend
   Evidence: Content-Security-Policy header tidak ditemukan

Tugas:
1. Buat tabel triage: sortir berdasarkan Risk × Confidence
2. Kategorikan: Must Fix (sebelum release), Should Fix (sprint selanjutnya), Nice to Have (backlog)
3. Untuk setiap High Risk finding: jelaskan dampak potensial dan berikan recommended fix spesifik untuk Node.js/Express/Sequelize
4. Identifikasi mana yang kemungkinan false positive dan cara memverifikasi
5. Buatkan draft security bug report untuk 2 finding teratas (Title, Severity, Steps, Impact, Recommended Fix)
6. Sarankan HTTP security headers yang harus ditambahkan di Express app
```

### PROMPT AI TEMPLATE #3 — Generate GitHub Actions YAML dari Deskripsi Pipeline

```
Kamu adalah DevOps Engineer yang membantu QA membuat CI/CD pipeline. Buatkan GitHub Actions workflow YAML berdasarkan kebutuhan berikut:

Repository: inix-playwright (Playwright + TypeScript)
Branch strategy: main (protected), feature branches
Trigger: push ke main, pull request ke main

Pipeline yang diinginkan:
1. **Job: lint** — Jalankan TypeScript type check (tsc --noEmit) dan ESLint
2. **Job: api-test** — Jalankan Playwright API test (tests/api/)
   - Butuh MySQL service container (image mysql:8.0, port 3306)
   - Butuh start backend Node.js app (background process)
   - Upload test results sebagai artifact
3. **Job: e2e-test** — Jalankan Playwright UI test (tests/ui/)
   - Install Playwright browsers
   - Jalankan dengan --trace on
   - Upload Playwright report + trace files sebagai artifact
4. **Job: security** — Jalankan npm audit dan Semgrep scan
5. **Job: report** — Generate Allure report dari hasil test
   - Hanya jalan setelah api-test dan e2e-test selesai
   - Jalan meskipun test gagal (if: always)

Kebutuhan teknis:
- Node.js 20
- Dependencies: npm ci
- Playwright browsers: npx playwright install --with-deps
- MySQL env: MYSQL_ROOT_PASSWORD=root, MYSQL_DATABASE=inix_db
- Secret yang dipakai: tidak ada (public repo)

Output:
1. File YAML lengkap (`.github/workflows/qa-pipeline.yml`)
2. Penjelasan setiap section
3. Cara mengaktifkan branch protection rule agar PR harus PASS pipeline
4. Tips debugging jika pipeline FAIL (cara baca log, cara download artifact)
```

---

## Checklist Output TAHAP 6

- [ ] Prompt materi slide PPTX (~50 slide) — Performance Testing (4 tipe, metrik, k6 script lengkap, stages, output, Core Web Vitals), Security (OWASP Top 10 × 5 relevan PT INIX, ZAP mode & report & triage, SAST SonarQube/Semgrep, npm audit), CI/CD (konsep CI/CD, pipeline QA diagram, GitHub Actions anatomy, workflow YAML lengkap PT INIX 5 jobs, membaca hasil, branch protection)
- [ ] Prompt Lab 5 (90 menit) — k6 load test login (50 VU, 1 min, threshold), ZAP Quick Start scan + triage 5 findings, GitHub Actions workflow 3 jobs + push + verify + branch protection
- [ ] 3 AI Prompt Template (generate k6 script, analisis ZAP report + triage + security bug report, generate GitHub Actions YAML)
- [ ] k6 script dan GitHub Actions YAML runnable
- [ ] Checklist keberhasilan (10 kriteria)
- [ ] Reference Answer (k6 output, ZAP findings tabel, YAML, pipeline screenshot description)
- [ ] Bahasa Indonesia formal, kode Inggris
