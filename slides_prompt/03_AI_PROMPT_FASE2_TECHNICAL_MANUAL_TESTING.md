# 03 — Manual Testing Teknis Frontend & Backend (Chrome DevTools, Postman, SQL)

## Tujuan Prompt

Menghasilkan 3 output:
1. **Prompt materi slide PPTX** — Arsitektur web, Chrome DevTools, Responsive & a11y, HTTP/REST & Auth, Postman, SQL verification.
2. **Prompt lab hands-on** — Audit DevTools pada halaman login PT INIX, Lighthouse, Postman Collection 7 endpoint, SQL verifikasi MySQL.
3. **Prompt AI template** — Generate Postman test script, analisis response error, generate SQL query.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 2 — Manual Testing Teknis (FE & BE)
- **Hari pelatihan:** Hari 2
- **File referensi:** `STUDI_KASUS_INIX.md` (10 API endpoint, ERD 3 tabel, credentials)
- **Prerequisite peserta:** Sudah menulis test case dan bug report (Fase 1)

---

## BAGIAN A: Prompt untuk Materi (Slide PPTX)

> **Instruksi:** Copy-paste prompt di bawah ini ke AI untuk menghasilkan konten slide PPTX Fase 2.

---

### PROMPT MATERI SLIDE FASE 2

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Engineer & Technical Instructor** dengan keahlian mendalam di frontend debugging (Chrome DevTools), API testing (Postman), dan database verification (SQL). Anda membuat materi pelatihan teknis yang hands-on oriented, menunjukkan langkah nyata di tools, dan relevan untuk QA di lingkungan web modern.

**[I] INPUT:**
Buat konten slide presentasi (PPTX) untuk sesi **"Manual Testing Teknis — Frontend & Backend"** dalam pelatihan Software Testing. Konteks:

- **Durasi sesi:** 3 jam (2 sesi × 90 menit) — 40% teori, 60% demo tools + contoh riil
- **Target peserta:** QA Engineer Junior-Mid yang sudah memahami test case design dari Fase 1
- **Studi kasus:** Aplikasi Kepegawaian PT INIX
  - Frontend: React SPA (Vite) — halaman Login, Dashboard, Data Pegawai, Pengajuan Cuti
  - Backend: Node.js + Express + Sequelize — REST API JSON
  - Database: MySQL 8.0 — tabel users, pegawai, cuti
  - Auth: JWT (access token + refresh token)
  - Base URL: `http://localhost:8000`
  - **10 API Endpoint** (lihat daftar di bawah)
  - **Credential testing:**
    ```
    Admin   : admin@inix.com    / Admin@123!
    HR      : hr@inix.com       / Hr@123!
    Manajer : manager@inix.com  / Manager@123!
    Pegawai : pegawai@inix.com  / Pegawai@123!
    ```

  **Daftar API Endpoint PT INIX:**
  | Method | Endpoint | Deskripsi | Auth |
  |---|---|---|---|
  | POST | `/api/auth/login/` | Login, return JWT | Public |
  | POST | `/api/auth/refresh/` | Refresh access token | Public |
  | GET | `/api/pegawai/` | List semua pegawai | Bearer JWT (All) |
  | POST | `/api/pegawai/` | Tambah pegawai baru | Bearer JWT (HR/Admin) |
  | GET | `/api/pegawai/{id}/` | Detail pegawai | Bearer JWT (All) |
  | PUT | `/api/pegawai/{id}/` | Update pegawai | Bearer JWT (HR/Admin) |
  | DELETE | `/api/pegawai/{id}/` | Hapus pegawai | Bearer JWT (Admin) |
  | GET | `/api/cuti/` | List pengajuan cuti | Bearer JWT (All) |
  | POST | `/api/cuti/` | Ajukan cuti | Bearer JWT (Pegawai) |
  | PATCH | `/api/cuti/{id}/status/` | Approve/Reject cuti | Bearer JWT (Manajer) |

**[S] STEPS:**
Buat konten untuk slide-slide berikut secara berurutan:

---

**SESI 1 (90 menit): Arsitektur Web, Chrome DevTools, Responsive & Accessibility**

**Slide 1–2: Pembuka**
- Judul: "Fase 2 — Manual Testing Teknis: Frontend & Backend"
- Agenda: Arsitektur Web → DevTools → Responsive/a11y → HTTP/REST → Postman → SQL
- Transisi: "Di Fase 1 kita MERANCANG test case. Di Fase 2 kita belajar TOOLS untuk mengeksekusi pengujian secara teknis."

**Slide 3–6: Arsitektur Web Modern**
- Diagram Client-Server: Browser (React) ↔ REST API (Node.js/Express) ↔ Database (MySQL)
- **Alur request PT INIX — contoh Login:**
  ```
  Browser (React)                    Server (Express)                  Database (MySQL)
       │                                    │                                │
       │── POST /api/auth/login/ ──────────►│                                │
       │   Body: {username, password}       │── SELECT * FROM users ────────►│
       │                                    │   WHERE username = ?            │
       │                                    │◄── user row ──────────────────│
       │                                    │   bcrypt.compare(password)      │
       │◄── 200 {access_token, refresh} ───│                                │
       │                                    │                                │
  ```
- HTTP Methods: GET, POST, PUT, PATCH, DELETE — kapan digunakan & contoh endpoint PT INIX
- HTTP Status Codes yang paling sering ditemui QA:
  | Kode | Arti | Contoh di PT INIX |
  |---|---|---|
  | 200 | OK — berhasil | GET /api/pegawai/ → list pegawai |
  | 201 | Created — data baru dibuat | POST /api/pegawai/ → pegawai baru tersimpan |
  | 400 | Bad Request — validasi gagal | POST /api/pegawai/ tanpa NIP → error |
  | 401 | Unauthorized — tidak terautentikasi | Request tanpa JWT token |
  | 403 | Forbidden — tidak punya izin | Pegawai coba DELETE /api/pegawai/{id}/ |
  | 404 | Not Found — resource tidak ada | GET /api/pegawai/9999/ → pegawai tidak ditemukan |
  | 500 | Internal Server Error | Bug di backend |

**Slide 7–12: Chrome DevTools untuk QA**
- Cara membuka: F12 / Ctrl+Shift+I / Right-click → Inspect
- **Tab Network (paling penting untuk QA):**
  - Fungsi: melihat semua HTTP request/response antara browser dan server
  - Demo skenario PT INIX — Login:
    1. Buka halaman login, buka tab Network
    2. Isi username & password, klik Login
    3. Lihat request: Method (POST), URL (/api/auth/login/), Status (200/401)
    4. Klik request → lihat **Headers** (Request Headers, Response Headers)
    5. Lihat **Payload** (body request: username & password)
    6. Lihat **Response** (JSON: access_token, refresh_token)
    7. Lihat **Timing** (berapa lama server merespons — apakah < 500ms sesuai NFR-001?)
  - Tips QA: filter by XHR/Fetch, cari request yang gagal (merah), perhatikan status code

- **Tab Console:**
  - Fungsi: melihat JavaScript errors, warnings, console.log output
  - Relevansi QA: menangkap frontend error yang tidak terlihat di UI (error boundary catch)
  - Demo: buka halaman data pegawai, lihat apakah ada error merah di console

- **Tab Elements:**
  - Fungsi: inspeksi HTML/DOM, lihat CSS styling
  - Relevansi QA: verifikasi elemen UI ada (button, input, label), cek atribut accessibility (aria-label, role)
  - Demo: inspect form login — lihat atribut input (name, type, required, placeholder)

- **Tab Application:**
  - Fungsi: lihat cookies, localStorage, sessionStorage, JWT token yang tersimpan
  - Demo PT INIX: setelah login, cek Application → Local Storage → lihat `access_token` tersimpan
  - Tips keamanan: cek apakah token terekspos di tempat yang tidak seharusnya

**Slide 13–16: Responsive UI Testing & Accessibility (a11y)**
- **Responsive Testing di DevTools:**
  - Toggle Device Toolbar (Ctrl+Shift+M)
  - Test di resolusi: Desktop (1920×1080), Tablet (768×1024), Mobile (375×667)
  - Checklist responsive: layout tidak pecah, teks terbaca, button bisa diklik, form usable
  - Demo: buka form data pegawai di mode mobile — apakah semua field terlihat?

- **Lighthouse Audit:**
  - Apa itu Lighthouse: tool audit built-in Chrome untuk Performance, Accessibility, Best Practices, SEO
  - Cara menjalankan: DevTools → Lighthouse tab → pilih kategori → Generate Report
  - Metrik penting untuk QA:
    - **Performance:** LCP (Largest Contentful Paint), FID/INP, CLS
    - **Accessibility:** score, issue list (contrast, alt text, ARIA)
  - Target NFR-003: score Accessibility ≥ 80

- **axe DevTools (Extension):**
  - Apa itu: browser extension untuk audit accessibility yang lebih detail (WCAG 2.1 compliance)
  - Cara install & cara menjalankan
  - Output: daftar issue accessibility (critical, serious, moderate, minor)
  - Demo PT INIX: scan halaman login — cek apakah label form terhubung ke input, contrast ratio OK

**Slide 17: Rangkuman Sesi 1 — Frontend Testing**
- 3 key takeaways:
  1. DevTools Network tab = "mata QA" untuk melihat komunikasi browser ↔ server
  2. Console & Elements membantu debugging frontend tanpa akses source code
  3. Lighthouse + axe DevTools memastikan kualitas UI (performance & accessibility)

---

**SESI 2 (90 menit): HTTP/REST, Postman, SQL Verification**

**Slide 18–22: HTTP/REST Deep Dive**
- **Anatomy HTTP Request:**
  ```
  POST /api/auth/login/ HTTP/1.1        ← Method + Path + Protocol
  Host: localhost:8000                   ← Header
  Content-Type: application/json         ← Header
  Authorization: Bearer <token>          ← Header (untuk protected endpoint)

  {                                      ← Body (JSON)
    "username": "admin@inix.com",
    "password": "Admin@123!"
  }
  ```

- **Anatomy HTTP Response:**
  ```
  HTTP/1.1 200 OK                       ← Status Code
  Content-Type: application/json         ← Header
  Set-Cookie: csrftoken=...             ← Header

  {                                      ← Body (JSON)
    "access_token": "eyJhbGciOi...",
    "refresh_token": "eyJhbGciOi...",
    "user": {
      "id": 1,
      "username": "admin@inix.com",
      "role": "admin"
    }
  }
  ```

- **Authentication Mechanisms:**
  | Jenis | Cara Kerja | Header | Digunakan di PT INIX? |
  |---|---|---|---|
  | Basic Auth | username:password di-encode Base64 | `Authorization: Basic dXNlcjpwYXNz` | Tidak |
  | Bearer/JWT | Token dikirim di header setelah login | `Authorization: Bearer eyJhbG...` | ✓ Ya |
  | API Key | Key statis di header atau query param | `X-API-Key: abc123` | Tidak |
  | OAuth 2.0 | Delegated auth via provider | Complex flow | Tidak |

- **JWT (JSON Web Token) untuk QA:**
  - Struktur: Header.Payload.Signature (3 bagian dipisah titik)
  - Payload berisi: user_id, role, exp (expiry timestamp)
  - Tips QA: decode JWT di jwt.io untuk verifikasi payload, cek expiry time
  - Demo: decode token login PT INIX → verifikasi role benar

**Slide 23–30: Postman untuk API Testing**
- **Apa itu Postman:** GUI tool untuk mengirim HTTP request, menguji API endpoint, dan mendokumentasikan API
- **Konsep utama:**
  | Konsep | Deskripsi |
  |---|---|
  | **Collection** | Folder berisi kumpulan request — 1 collection per project |
  | **Environment** | Set variabel (base_url, token, id) — bisa switch dev/staging |
  | **Variables** | `{{base_url}}`, `{{access_token}}` — reusable di semua request |
  | **Pre-request Script** | JavaScript yang jalan SEBELUM request dikirim |
  | **Test Script** | JavaScript yang jalan SETELAH response diterima — assertion |

- **Membuat Collection PT INIX — step by step:**
  1. Buat Collection: "PT INIX API Tests"
  2. Buat Environment: "PT INIX Dev" → variables: `base_url = http://localhost:8000`, `access_token = `
  3. Buat folder: Auth, Pegawai, Cuti
  4. Buat request Login: `POST {{base_url}}/api/auth/login/`

- **Postman Test Script (pm.expect) — contoh untuk PT INIX:**
  ```javascript
  // Test login endpoint
  pm.test("Status code is 200", function () {
      pm.response.to.have.status(200);
  });

  pm.test("Response has access_token", function () {
      var jsonData = pm.response.json();
      pm.expect(jsonData).to.have.property("access_token");
      pm.expect(jsonData.access_token).to.be.a("string");
  });

  pm.test("Response time < 500ms (NFR-001)", function () {
      pm.expect(pm.response.responseTime).to.be.below(500);
  });

  // Simpan token ke environment variable untuk request selanjutnya
  var jsonData = pm.response.json();
  pm.environment.set("access_token", jsonData.access_token);
  ```

- **Pre-request Script — Auto-attach token:**
  ```javascript
  // Di Collection level pre-request: otomatis set Authorization header
  if (pm.environment.get("access_token")) {
      pm.request.headers.add({
          key: "Authorization",
          value: "Bearer " + pm.environment.get("access_token")
      });
  }
  ```

- **Contoh test script untuk setiap tipe assertion:**
  | Assertion | Postman Code |
  |---|---|
  | Status code | `pm.response.to.have.status(200)` |
  | JSON property exists | `pm.expect(json).to.have.property("nip")` |
  | Value equals | `pm.expect(json.role).to.eql("admin")` |
  | Array length | `pm.expect(json.results).to.have.lengthOf.above(0)` |
  | Response time | `pm.expect(pm.response.responseTime).to.be.below(500)` |
  | Header exists | `pm.response.to.have.header("Content-Type")` |
  | Data type | `pm.expect(json.id).to.be.a("number")` |

- **Newman CLI:**
  - Apa itu: CLI runner untuk menjalankan Postman Collection dari terminal (otomasi, CI/CD ready)
  - Cara install: `npm install -g newman`
  - Cara menjalankan: `newman run PT_INIX_Collection.json -e PT_INIX_Dev.json --reporters cli,html`
  - Relevansi: bridge antara manual Postman → pipeline CI/CD (Fase 5)

**Slide 31–36: SQL Verification untuk QA**
- **Mengapa QA perlu SQL?** Verifikasi data di database — memastikan apa yang tampil di UI/API benar-benar tersimpan di DB
- **Koneksi ke MySQL PT INIX:**
  - Tool: DBeaver (free, cross-platform) atau MySQL Workbench
  - Connection: host `localhost`, port `3306`, database `inix_db`, user `root`, password `root`

- **Query dasar yang wajib dikuasai QA:**

  **SELECT — Lihat data:**
  ```sql
  -- Lihat semua pegawai
  SELECT * FROM pegawai;

  -- Lihat pegawai tertentu berdasarkan NIP
  SELECT id, nip, nama_lengkap, jabatan, status
  FROM pegawai
  WHERE nip = 'NIP-2026-001';

  -- Hitung jumlah pegawai aktif
  SELECT COUNT(*) AS total_aktif
  FROM pegawai
  WHERE status = 'aktif';
  ```

  **JOIN — Gabungkan tabel:**
  ```sql
  -- Lihat data cuti beserta nama pegawai
  SELECT c.id, p.nama_lengkap, p.nip, c.tgl_mulai, c.tgl_selesai,
         c.alasan, c.status AS status_cuti
  FROM cuti c
  JOIN pegawai p ON c.pegawai_id = p.id
  WHERE c.status = 'PENDING';
  ```

  **WHERE — Filter dengan kondisi:**
  ```sql
  -- Verifikasi: pegawai yang baru ditambah via API sudah masuk DB?
  SELECT * FROM pegawai
  WHERE nip = 'NIP-2026-NEW'
  AND nama_lengkap = 'Test Pegawai Baru';

  -- Verifikasi: setelah approve cuti via API, status berubah?
  SELECT id, status FROM cuti
  WHERE id = 5;
  -- Expected: status = 'APPROVED'
  ```

- **Pola verifikasi QA dengan SQL — 3 skenario:**
  | Skenario | Aksi di UI/API | Query SQL Verifikasi |
  |---|---|---|
  | Tambah pegawai | POST /api/pegawai/ | `SELECT * FROM pegawai WHERE nip = 'NIP-BARU'` → row exists |
  | Edit pegawai | PUT /api/pegawai/3/ | `SELECT jabatan FROM pegawai WHERE id = 3` → jabatan berubah |
  | Hapus pegawai | DELETE /api/pegawai/3/ | `SELECT * FROM pegawai WHERE id = 3` → row not found / status nonaktif |

- **Tips QA:**
  - Selalu verifikasi data di DB setelah operasi CRUD — jangan hanya percaya response API
  - Cek data integrity: foreign key, cascade delete, unique constraint
  - Gunakan `SELECT COUNT(*)` sebelum dan sesudah operasi untuk verifikasi

**Slide 37–38: Rangkuman & Transisi ke Lab**
- Recap tools: DevTools (FE) + Postman (API) + SQL (DB) = "Trifecta QA Teknis"
- Alur lengkap manual testing teknis:
  ```
  [UI Testing]          [API Testing]         [DB Verification]
  Chrome DevTools  →    Postman          →    SQL Query
  Network/Console       Request/Response      SELECT/JOIN/WHERE
  Lighthouse/axe        Test Script           Data integrity check
  ```
- "Selanjutnya: Lab — Anda akan mengaudit halaman PT INIX dengan DevTools, menguji 7 endpoint dengan Postman, dan memverifikasi data di MySQL"

**[E] EXPECTATION:**
- Format: konten teks per slide, siap di-copy ke template PPTX
- Setiap slide: **Judul**, **Bullet points** (maks 6), **Speaker notes** (2–3 kalimat)
- Semua contoh kode (HTTP request, Postman script, SQL query) langsung merujuk PT INIX
- Sertakan deskripsi visual/diagram untuk: arsitektur client-server, alur request login, JWT structure
- Bahasa Indonesia formal; istilah teknis & kode tetap Inggris
- Total: ~38 slide (2 sesi)

**[N] NARROWING:**
- Jangan membahas automation framework (Playwright, Cypress) — itu Fase 4
- Jangan membahas performance testing tools (k6, JMeter) — itu Fase 5
- Postman: fokus pada penggunaan manual + test script dasar — bukan Newman CI/CD pipeline (cukup intro)
- SQL: fokus SELECT, JOIN, WHERE — jangan masuk INSERT/UPDATE/DELETE (QA read-only di DB)
- DevTools: fokus pada Network, Console, Elements, Application, Lighthouse — jangan masuk Performance profiler mendalam

---

## BAGIAN B: Prompt untuk Lab Hands-on Fase 2

> **Instruksi:** Copy-paste prompt ini ke AI untuk menghasilkan panduan Lab 2.

---

### PROMPT LAB FASE 2

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Engineer & Lab Instructor** yang membuat panduan lab praktik teknis langkah demi langkah. Lab ini melibatkan 3 tools nyata (Chrome DevTools, Postman, DBeaver/SQL Client) dan harus memberikan pengalaman hands-on yang realistis.

**[I] INPUT:**
Buat panduan **Lab 2: Manual Testing Teknis — DevTools, Postman, SQL** untuk Aplikasi Kepegawaian PT INIX.

- **Durasi:** 90 menit
- **Peserta:** QA Engineer Junior-Mid
- **Prasyarat:** Sudah memahami arsitektur web, HTTP, dan tools dari materi slide Fase 2. Aplikasi PT INIX sudah running di `http://localhost:8000` (Docker Compose)
- **Tools:**
  - Google Chrome + DevTools (built-in)
  - Postman Desktop (sudah terinstall)
  - DBeaver atau MySQL client (koneksi ke localhost:3306, database: inix_db)
- **Credential:** admin@inix.com / Admin@123!, hr@inix.com / Hr@123!, manager@inix.com / Manager@123!, pegawai@inix.com / Pegawai@123!
- **API Endpoints:** 10 endpoint PT INIX (lihat STUDI_KASUS_INIX.md)

**[S] STEPS:**
Susun panduan lab dengan struktur berikut:

**Bagian 0: Persiapan (5 menit)**
1. Verifikasi aplikasi PT INIX running: buka `http://localhost:8000` di Chrome
2. Buka DevTools (F12) dan pin di sisi kanan
3. Buka Postman Desktop
4. Buka DBeaver dan test koneksi ke MySQL (localhost:3306, inix_db, root/root)
5. Buat folder screenshots: `Lab2_Screenshots_[NAMA]/`

**Bagian 1: Frontend Testing — Chrome DevTools (25 menit)**

*Task 1.1: Analisis Request Login (10 menit)*
6. Buka tab Network di DevTools, centang "Preserve log"
7. Buka halaman login PT INIX (`http://localhost:8000/login`)
8. Isi username: `admin@inix.com`, password: `Admin@123!`
9. Klik tombol Login
10. Di tab Network, cari request `login`:
    - **Catat:** Method, URL, Status Code, Response Time
    - **Klik request → Headers:** catat Content-Type, apa saja header yang dikirim?
    - **Klik request → Payload:** catat body yang dikirim (username & password)
    - **Klik request → Response:** catat struktur JSON (access_token, refresh_token, user info)
    - **Screenshot** request & response
11. Coba login dengan password salah: `wrongpassword`
    - Catat: Status Code (expected: 401), Response body (error message)
    - **Screenshot** error response
12. **Pertanyaan:** Apakah response time < 500ms? (verifikasi NFR-001)

*Task 1.2: Inspect Application Storage (5 menit)*
13. Setelah login berhasil, buka tab Application → Local Storage
14. Cari `access_token` — apakah tersimpan? Salin nilai token
15. Buka jwt.io, paste token → lihat payload: cek field `user_id`, `role`, `exp`
16. **Pertanyaan:** Kapan token ini expired? Apakah `role` sesuai user yang login?
17. **Screenshot** Application tab + jwt.io decode

*Task 1.3: Lighthouse Audit (10 menit)*
18. Navigasi ke halaman Data Pegawai (setelah login)
19. Buka DevTools → tab Lighthouse
20. Pilih kategori: Performance, Accessibility, Best Practices
21. Mode: Navigation, Device: Desktop
22. Klik "Analyze page load"
23. **Catat** score: Performance (___), Accessibility (___), Best Practices (___)
24. Lihat bagian Accessibility — adakah issue? Catat 3 issue teratas
25. **Screenshot** Lighthouse report summary
26. **Pertanyaan:** Apakah score Accessibility ≥ 80? Jika tidak, apa penyebab utama?

**Bagian 2: Backend Testing — Postman API (35 menit)**

*Task 2.1: Setup Collection & Environment (5 menit)*
27. Di Postman, buat Collection baru: "PT INIX API Tests"
28. Buat Environment: "PT INIX Local"
    - Variable `base_url` = `http://localhost:8000`
    - Variable `access_token` = (kosong dulu)
29. Buat 3 folder dalam Collection: Auth, Pegawai, Cuti

*Task 2.2: Test Auth Endpoint (10 menit)*
30. Buat request **Login**:
    - Method: POST | URL: `{{base_url}}/api/auth/login/`
    - Body (raw JSON): `{"username": "hr@inix.com", "password": "Hr@123!"}`
    - Tab Tests, tambahkan test script:
      ```javascript
      pm.test("Status code is 200", () => pm.response.to.have.status(200));
      pm.test("Has access_token", () => {
          let json = pm.response.json();
          pm.expect(json).to.have.property("access_token");
      });
      pm.test("Response time < 500ms", () => pm.expect(pm.response.responseTime).to.be.below(500));
      // Simpan token
      pm.environment.set("access_token", pm.response.json().access_token);
      ```
    - Klik Send — verifikasi semua test PASS (hijau)
    - **Screenshot** request + response + test results

31. Buat request **Login Invalid**:
    - Body: `{"username": "hr@inix.com", "password": "wrongpassword"}`
    - Tab Tests:
      ```javascript
      pm.test("Status code is 401", () => pm.response.to.have.status(401));
      pm.test("Has error message", () => {
          pm.expect(pm.response.json()).to.have.property("detail");
      });
      ```
    - Send & verifikasi

*Task 2.3: Test Pegawai CRUD Endpoints (15 menit)*
32. **GET List Pegawai:**
    - Method: GET | URL: `{{base_url}}/api/pegawai/`
    - Authorization: Bearer Token → `{{access_token}}`
    - Tab Tests:
      ```javascript
      pm.test("Status 200", () => pm.response.to.have.status(200));
      pm.test("Response is array", () => pm.expect(pm.response.json()).to.be.an("array"));
      ```
    - Send & catat jumlah pegawai saat ini

33. **POST Tambah Pegawai:**
    - Method: POST | URL: `{{base_url}}/api/pegawai/`
    - Authorization: Bearer Token → `{{access_token}}`
    - Body (raw JSON):
      ```json
      {
        "nip": "NIP-2026-LAB",
        "nama_lengkap": "Test Lab Fase2",
        "jabatan": "QA Engineer",
        "status": "aktif"
      }
      ```
    - Tab Tests:
      ```javascript
      pm.test("Status 201 Created", () => pm.response.to.have.status(201));
      pm.test("NIP matches", () => pm.expect(pm.response.json().nip).to.eql("NIP-2026-LAB"));
      pm.environment.set("pegawai_id", pm.response.json().id);
      ```
    - Send & verifikasi

34. **PUT Update Pegawai:**
    - Method: PUT | URL: `{{base_url}}/api/pegawai/{{pegawai_id}}/`
    - Body: `{"nip":"NIP-2026-LAB", "nama_lengkap":"Test Lab Updated", "jabatan":"Senior QA", "status":"aktif"}`
    - Test: status 200, jabatan berubah ke "Senior QA"

35. **DELETE Hapus Pegawai** (gunakan credential Admin):
    - Login ulang sebagai Admin, set token baru
    - Method: DELETE | URL: `{{base_url}}/api/pegawai/{{pegawai_id}}/`
    - Test: status 204 No Content (atau 200)

36. **Screenshot** semua request + response + test results

*Task 2.4: Test Cuti Endpoint (5 menit)*
37. Login sebagai Pegawai: `pegawai@inix.com / Pegawai@123!`
38. **POST Ajukan Cuti:**
    - URL: `{{base_url}}/api/cuti/`
    - Body: `{"tgl_mulai":"2026-12-01", "tgl_selesai":"2026-12-03", "alasan":"Urusan keluarga"}`
    - Test: status 201, status cuti = "PENDING"
    - Simpan: `pm.environment.set("cuti_id", pm.response.json().id);`

39. Login sebagai Manajer: `manager@inix.com / Manager@123!`
40. **PATCH Approve Cuti:**
    - URL: `{{base_url}}/api/cuti/{{cuti_id}}/status/`
    - Body: `{"status":"APPROVED"}`
    - Test: status 200, status cuti berubah ke "APPROVED"

**Bagian 3: Database Verification — SQL (20 menit)**

*Task 3.1: Verifikasi Data Pegawai (10 menit)*
41. Buka DBeaver, koneksi ke `inix_db`
42. Jalankan query — verifikasi data pegawai yang tadi dibuat via API:
    ```sql
    SELECT id, nip, nama_lengkap, jabatan, status
    FROM pegawai
    WHERE nip = 'NIP-2026-LAB';
    ```
    **Pertanyaan:** Apakah data ditemukan? Jika sudah di-DELETE, apa yang terjadi (hard delete / soft delete)?

43. Jalankan query — hitung total pegawai:
    ```sql
    SELECT COUNT(*) AS total FROM pegawai;
    SELECT status, COUNT(*) AS jumlah FROM pegawai GROUP BY status;
    ```

44. **Screenshot** hasil query

*Task 3.2: Verifikasi Data Cuti dengan JOIN (10 menit)*
45. Jalankan query — lihat cuti yang baru diajukan beserta nama pegawai:
    ```sql
    SELECT c.id, p.nama_lengkap, p.nip, c.tgl_mulai, c.tgl_selesai,
           c.alasan, c.status AS status_cuti
    FROM cuti c
    JOIN pegawai p ON c.pegawai_id = p.id
    ORDER BY c.id DESC
    LIMIT 5;
    ```
    **Pertanyaan:** Apakah status cuti sesuai dengan yang di-approve via Postman?

46. Jalankan query — cek apakah ada data anomali:
    ```sql
    -- Cuti dengan tgl_selesai < tgl_mulai (seharusnya tidak ada)
    SELECT * FROM cuti WHERE tgl_selesai < tgl_mulai;

    -- Cuti dengan status tidak valid
    SELECT * FROM cuti WHERE status NOT IN ('PENDING', 'APPROVED', 'REJECTED');
    ```

47. **Screenshot** hasil query

**Bagian 4: Export & Summary (5 menit)**
48. Export Postman Collection: Collection → Export → Collection v2.1 → `PT_INIX_Collection.json`
49. Export Postman Environment: Environment → Export → `PT_INIX_Dev.json`
50. Kumpulkan semua deliverable dalam 1 folder

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- Setiap langkah bernomor, jelas, actionable — peserta bisa ikuti step-by-step
- Contoh kode Postman test script sudah siap copy-paste
- Contoh SQL query sudah siap dijalankan di MySQL PT INIX
- **Checklist Keberhasilan:**
  - [ ] Login request tercatat di DevTools Network tab (screenshot)
  - [ ] JWT token berhasil di-decode di jwt.io (screenshot)
  - [ ] Lighthouse report dihasilkan — score tercatat (screenshot)
  - [ ] Postman Collection "PT INIX API Tests" berisi minimal 7 request
  - [ ] Semua Postman test script PASS (hijau)
  - [ ] Postman Collection exported sebagai `.json`
  - [ ] SQL query verifikasi data pegawai berhasil dijalankan (screenshot)
  - [ ] SQL query JOIN cuti berhasil dijalankan (screenshot)
  - [ ] SQL anomaly check dijalankan (screenshot)
  - [ ] Folder deliverable lengkap: screenshots + collection.json + environment.json
- Bahasa Indonesia formal, istilah teknis & kode Inggris
- **Reference Answer:** contoh output yang diharapkan dari setiap task (screenshot description + expected data)

**[N] NARROWING:**
- Lab ini HANYA menggunakan DevTools, Postman, dan SQL client manual — belum automation
- Postman: manual execution — belum Newman CLI di terminal (cukup intro di materi slide)
- SQL: hanya SELECT/JOIN/WHERE (read-only) — jangan INSERT/UPDATE/DELETE langsung di DB
- Jangan minta peserta menginstall tools — asumsikan sudah terinstall
- Jangan troubleshoot aplikasi PT INIX — jika ada error, asumsikan backend berjalan normal
- Harus selesai dalam 90 menit

---

## BAGIAN C: Prompt AI Template untuk Integrasi AI di Fase 2

> **Instruksi:** Template prompt siap pakai yang didemonstrasikan dan digunakan peserta.

---

### PROMPT AI TEMPLATE #1 — Generate Postman Test Script dari Spesifikasi Endpoint

```
Kamu adalah Senior API Test Engineer. Buatkan Postman Test Script (tab Tests) untuk endpoint berikut dari aplikasi Kepegawaian PT INIX:

Endpoint: POST /api/pegawai/
Method: POST
Auth: Bearer JWT (role HR atau Admin)
Request Body:
{
  "nip": "string (required, unique)",
  "nama_lengkap": "string (required)",
  "jabatan": "string (required)",
  "status": "string (aktif/nonaktif, default: aktif)"
}

Response Success (201):
{
  "id": 10,
  "nip": "NIP-2026-001",
  "nama_lengkap": "John Doe",
  "jabatan": "Staff IT",
  "status": "aktif"
}

Response Error (400): {"detail": "NIP already exists"}
Response Error (401): {"detail": "Authentication credentials were not provided"}
Response Error (403): {"detail": "You do not have permission to perform this action"}

Tugas:
1. Buatkan test script Postman (menggunakan pm.test dan pm.expect) untuk SUCCESS scenario:
   - Cek status code 201
   - Cek response punya field: id, nip, nama_lengkap, jabatan, status
   - Cek tipe data setiap field
   - Cek nip di response sama dengan yang dikirim
   - Cek response time < 500ms
   - Simpan id ke environment variable

2. Buatkan test script untuk ERROR scenarios (buat sebagai request terpisah):
   - NIP duplikat → expected 400
   - Tanpa auth token → expected 401
   - Login sebagai Pegawai (bukan HR/Admin) → expected 403
   - Body kosong → expected 400

Output: kode JavaScript siap paste ke tab Tests di Postman.
```

### PROMPT AI TEMPLATE #2 — Analisis Response Error dan Saran Perbaikan

```
Kamu adalah Senior API QA dan Backend Debugger. Saya mendapat response error saat testing API PT INIX. Tolong analisis dan berikan saran.

Request yang saya kirim:
```
POST http://localhost:8000/api/pegawai/
Authorization: Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...
Content-Type: application/json

{
  "nip": "NIP-2026-001",
  "nama_lengkap": "Test Pegawai",
  "jabatan": "Staff QA",
  "status": "aktif"
}
```

Response yang saya terima:
```
HTTP/1.1 500 Internal Server Error
Content-Type: application/json

{
  "error": "SequelizeUniqueConstraintError: Validation error",
  "detail": "Duplicate entry 'NIP-2026-001' for key 'pegawai.nip'"
}
```

Tugas:
1. Analisis: apa penyebab error ini?
2. Apakah ini bug atau expected behavior? Jelaskan.
3. Jika bug: seharusnya response seperti apa? (status code & message yang benar)
4. Buatkan draft bug report singkat (Title, Severity, Steps, Expected vs Actual)
5. Sarankan perbaikan untuk developer (spesifik ke Express/Sequelize error handling)
```

### PROMPT AI TEMPLATE #3 — Generate SQL Query Verifikasi dari Deskripsi Kebutuhan

```
Kamu adalah Database QA Specialist. Saya butuh SQL query untuk memverifikasi data di database MySQL aplikasi Kepegawaian PT INIX.

Skema database:
- Tabel `users`: id (PK), username, password, role, is_active
- Tabel `pegawai`: id (PK), user_id (FK→users.id), nip (UNIQUE), nama_lengkap, jabatan, status
- Tabel `cuti`: id (PK), pegawai_id (FK→pegawai.id), tgl_mulai, tgl_selesai, alasan, status (PENDING/APPROVED/REJECTED)

Buatkan SQL query untuk verifikasi skenario berikut:

1. Setelah menambah pegawai baru via API (NIP: "NIP-2026-TEST"), verifikasi data tersimpan dengan benar
2. Setelah mengupdate jabatan pegawai id=5 menjadi "Senior Developer", verifikasi perubahan
3. Setelah menghapus pegawai id=5, cek apakah hard delete atau soft delete
4. Cari semua pengajuan cuti yang statusnya masih PENDING beserta nama pegawai
5. Cek data integrity: adakah cuti yang pegawai_id-nya tidak ada di tabel pegawai?
6. Hitung jumlah cuti per status (PENDING, APPROVED, REJECTED)
7. Cari pegawai yang belum pernah mengajukan cuti (LEFT JOIN)
8. Verifikasi bahwa tidak ada NIP yang duplikat di tabel pegawai

Untuk setiap query, berikan:
- SQL query yang siap dijalankan
- Penjelasan singkat: apa yang diverifikasi
- Expected result jika data normal (tidak ada bug)
- Tanda-tanda ada bug (result yang mencurigakan)
```

---

## Checklist Output TAHAP 3

- [ ] Prompt materi slide PPTX (~38 slide) — Arsitektur web, DevTools (Network/Console/Elements/Application/Lighthouse), Responsive & a11y (axe), HTTP/REST deep dive, JWT, Postman (Collection/Environment/Test Script/Newman), SQL (SELECT/JOIN/WHERE)
- [ ] Prompt Lab 2 (90 menit) — DevTools audit login + Lighthouse + Postman 7 request + SQL verification
- [ ] 3 AI Prompt Template (Postman test script, response error analysis, SQL query generation)
- [ ] Semua contoh kode langsung merujuk endpoint & data PT INIX
- [ ] Postman test script siap copy-paste
- [ ] SQL query siap dijalankan di MySQL PT INIX
- [ ] Checklist keberhasilan (10 kriteria)
- [ ] Reference Answer untuk instruktur
- [ ] Bahasa Indonesia formal, istilah teknis & kode Inggris
