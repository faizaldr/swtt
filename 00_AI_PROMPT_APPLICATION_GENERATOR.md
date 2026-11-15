# AI PROMPT: Application Generator — Aplikasi Kepegawaian PT INIX (Eduparx Theme)

## Tujuan

Prompt RISEN ini digunakan untuk meminta AI (ChatGPT / Claude / Gemini) membuat **source code lengkap** aplikasi Kepegawaian PT INIX dengan tema visual modern menyerupai **Eduparx Training Catalog** ([https://eduparx.id/home/training?catalog=ai-engineer](https://eduparx.id/home/training?catalog=ai-engineer)).

Aplikasi ini siap di-deploy dengan Docker dan **dirancang khusus agar bisa diuji oleh seluruh tools testing** dalam kurikulum pelatihan (Chrome DevTools, Postman, DBeaver, Playwright, k6, OWASP ZAP, SonarQube, Semgrep, GitHub Actions).

> **⚠️ PENTING — AI dengan Context Window Pendek (~128 token remembering)**
>
> Prompt ini dipecah menjadi **30 step atomik**. Setiap step dirancang untuk bisa dieksekusi **mandiri** oleh AI tanpa perlu mengingat step sebelumnya. Setiap step menyertakan konteks minimal yang dibutuhkan.
>
> **Cara penggunaan:**
> 1. Jalankan setiap step **satu per satu** secara berurutan
> 2. Simpan output setiap step ke file yang ditunjuk
> 3. Jika AI "lupa", cukup paste ulang step yang sedang dikerjakan — setiap step **self-contained**

---

## Peta Tools Testing ↔ Fitur Aplikasi yang Harus Mendukung

Sebelum membuat aplikasi, pastikan setiap fitur/konfigurasi mendukung tools berikut:

| Kategori | Tools | Fitur Aplikasi yang Harus Ada |
|---|---|---|
| **Manual & Management** | Chrome DevTools | Network tab menampilkan request/response JSON yang readable; Console tanpa error critical; Elements memiliki semantic HTML (label, role, aria); Application tab menyimpan JWT di localStorage |
| | Postman | REST API JSON response yang konsisten; CORS enabled untuk localhost; error response terstruktur `{ "detail": "..." }` |
| | DBeaver / SQL Client | MySQL accessible di port 3306; data seed untuk testing; tabel dengan relasi FK yang jelas |
| | Jira / TestRail / Qase | Aplikasi memiliki bug yang bisa ditemukan (intentional minor bugs opsional) |
| **Automation & Coding** | Playwright | HTML memiliki `data-testid` attributes di setiap interactive element; form label terhubung ke input (htmlFor/id); button memiliki accessible name; navigation konsisten; loading state yang predictable |
| | TypeScript | API response memiliki struktur JSON yang konsisten dan bisa didefinisikan sebagai interface |
| | Allure Report | Playwright compatible (allure-playwright reporter) |
| **Performance & Security** | k6 | API endpoint stateless per request (auth via header, bukan session); response time realistis; tidak ada rate limiting di dev/staging |
| | OWASP ZAP | Aplikasi memiliki beberapa security weakness yang bisa ditemukan ZAP (missing security headers, server info leakage); spider-able pages; form yang bisa di-scan |
| | SonarQube / Semgrep | Source code scannable; beberapa code smells ringan yang bisa ditemukan |
| **CI/CD** | GitHub Actions | Dockerfile dan docker-compose.yml lengkap; npm scripts untuk start/test/seed; health check endpoint |
| | Docker | Multi-container: backend + frontend + MySQL; docker-compose.yml dengan environment variables |
| **Frontend Testing** | Lighthouse / axe DevTools | Semantic HTML; proper heading hierarchy (h1→h2→h3); contrast ratio adequate; alt text pada images; ARIA labels; meta viewport untuk responsive |
| | Responsive Testing | Layout responsive (desktop + tablet + mobile); CSS flex/grid; viewport meta tag |

---

## PROMPT RISEN — Application Generator

---

**[R] ROLE:**

Bertindaklah sebagai **Senior Full-Stack Developer & UI/UX Engineer** yang membangun aplikasi web untuk kebutuhan **pelatihan Software Testing**. Anda memahami bahwa aplikasi ini akan digunakan sebagai bahan latihan oleh QA Engineer yang menguji menggunakan: Chrome DevTools, Postman, DBeaver, Playwright, k6, OWASP ZAP, SonarQube, Semgrep, GitHub Actions, dan Docker.

Aplikasi mengusung identitas visual **Eduparx by Inixindo** (mengacu pada halaman web `https://eduparx.id/home/training?catalog=ai-engineer`).

Aplikasi harus memenuhi:
1. **Eduparx Visual Style** — Top navigation bar dengan logo PT Inixindo / Eduparx, Training Hero Banner dengan gradient biru, Breadcrumb, Catalog Sidebar Filter di sisi kiri, Card Grid interaktif bernuansa kursus IT/AI di sisi kanan, serta Multi-column Footer resmi Inixindo.
2. **Fully testable** — setiap elemen interaktif memiliki `data-testid`, accessible label, semantic markup, dan opsi View Toggle (Card Grid ↔ Data Table) agar automation test Playwright dan manual test tetap 100% presisi.
3. **API-first** — REST API JSON yang konsisten (agar Postman, Playwright API test, dan k6 bekerja optimal).
4. **Dockerized** — docker-compose one-command setup (`docker-compose up -d`).
5. **Security-aware** — beberapa security headers sengaja dibiarkan default/missing agar ZAP bisa mendeteksi vulnerability findings.

---

**[I] INPUT:**

Buat aplikasi **Kepegawaian & Pelatihan PT INIX (Eduparx Theme)** dengan spesifikasi berikut:

### Tech Stack

| Komponen | Teknologi | Versi |
|---|---|---|
| Backend / API | Node.js + Express.js + Sequelize ORM | Node 20 LTS, Express 5.x, Sequelize 6.x |
| Database | MySQL | 8.0 |
| Frontend | React + Vite (SPA) | React 19.x, Vite 6.x |
| Auth | JWT (jsonwebtoken) + bcryptjs | - |
| Containerization | Docker + Docker Compose | - |
| Styling | Pure CSS (Eduparx Design System: `#204ecf`, `#038fde`, `#ff7a00`, `#262d3d`) | No Heavy UI Framework |

---

### Desain & Tema UI (Eduparx Training Catalog Theme)

Mengacu langsung pada layout dan komponen `https://eduparx.id/home/training?catalog=ai-engineer`:

1. **Top Navbar (Header Eduparx)**:
   - Logo: **INIXINDO | Eduparx**
   - Nav items: *Home*, *Katalog Training*, *Data Pegawai*, *Pengajuan Cuti*, *Dashboard*
   - Global Search Bar di navbar dengan icon pencarian
   - Status login: Nama user dengan role badge + Button *Logout* (atau *Masuk* saat unauthenticated)
2. **Training Hero / Banner Section (`training-page-header`)**:
   - Background gradient elegan: linier dari `#1b2a4e` ke `#204ecf`
   - Breadcrumb navigasi: `Home > Training Catalog > AI Engineer & Kepegawaian`
   - Title: `Katalog Pelatihan & Kepegawaian PT INIX`
   - Subtitle: `Kelola data talenta, pengembangan kompetensi AI Engineer, dan pengajuan cuti pegawai internal PT Inixindo.`
   - Highlight Meta Pills:
     - `⭐ 4.9 (520+ Ulasan)`
     - `⏱️ 4 Hari Pelatihan (32 JP)`
     - `🎯 Level: Foundation to Advanced`
     - `💼 Inixindo Certified Professional`
3. **Catalog Layout 2-Kolom (Filter Sidebar + Content Area)**:
   - **Sidebar Filter Kiri (`catalog-filter-box`)**:
     - Input pencarian cepat pegawai/training
     - Kategori Katalog: *AI Engineer*, *Software Testing & QA*, *Cloud & DevOps*, *Cyber Security*, *HR & Management*
     - Filter Jabatan / Status: *Aktif*, *Non-Aktif*, *Pending*
     - Tombol *Reset Filter*
   - **Area Konten Kanan**:
     - Bar atas: Counter hasil (*"Menampilkan 5 Data"*), View Toggle button (Card Grid View ↔ Data Table View)
     - **Card Grid View (Eduparx Course Card Style)**:
       - Header thumbnail / avatar dengan gradient badge kategori
       - Nama pegawai / course title dengan tipografi tegas (`#262d3d`)
       - Metadata rows: NIP, Jabatan/Role, Status badge (*Aktif / Nonaktif*)
       - Action buttons: *Detail*, *Edit*, *Hapus* (dengan `data-testid` masing-masing)
     - **Data Table View**: Tabel semantic HTML lengkap dengan `data-testid` untuk pengujian test automation Playwright & SQL verification.
4. **Eduparx Multi-Column Footer**:
   - Kolom 1: Profil PT Inixindo & Eduparx — Pusat pelatihan teknologi informasi & akselerasi digital terkemuka.
   - Kolom 2: Program Unggulan: *AI Engineer Program*, *Software Quality Assurance*, *Cloud Computing*, *Cyber Defense*.
   - Kolom 3: Kantor Resmi:
     - Yogyakarta: Jl. Kenari No. 69 Yogyakarta
     - Jakarta: Gedung Permata Kuningan Lt. 6, Jl. Kuningan Mulia Kav. 9C Jakarta Selatan
     - Email: `support@eduparx.id` | `info@inixindo.co.id`
   - Bottom bar: `© 2026 PT Inixindo (Eduparx). Seluruh Hak Cipta Dilindungi.`

---

### 3 Modul Fitur Backend

**Modul 1: Autentikasi**
- Login: POST `/api/auth/login/` — return `{ access_token, refresh_token, user: { id, username, role } }`
- Refresh: POST `/api/auth/refresh/` — input refresh_token → return new access_token
- RBAC: 4 role — Admin, HR, Manajer, Pegawai
- Password: hashed dengan bcryptjs
- JWT expiry: 15 menit, refresh: 7 hari

**Modul 2: Data Pegawai (CRUD)**
- GET `/api/pegawai/` — list semua pegawai
- POST `/api/pegawai/` — tambah pegawai baru (HR, Admin)
- GET `/api/pegawai/{id}/` — detail pegawai
- PUT `/api/pegawai/{id}/` — update pegawai (HR, Admin)
- DELETE `/api/pegawai/{id}/` — hapus pegawai (Admin only)
- Field: `id`, `user_id`, `nip` (UNIQUE), `nama_lengkap`, `jabatan`, `status` (`aktif`/`nonaktif`)

**Modul 3: Pengajuan Cuti**
- GET `/api/cuti/` — list cuti (Pegawai: milik sendiri; Manajer/HR/Admin: semua)
- POST `/api/cuti/` — ajukan cuti (Pegawai only)
- PATCH `/api/cuti/{id}/status/` — approve/reject (Manajer only)
- Field: `id`, `pegawai_id`, `tgl_mulai`, `tgl_selesai`, `alasan`, `status` (`PENDING`/`APPROVED`/`REJECTED`)

---

### Database Schema (MySQL)

```sql
CREATE TABLE users (
  id INT AUTO_INCREMENT PRIMARY KEY,
  username VARCHAR(100) UNIQUE NOT NULL,
  password VARCHAR(255) NOT NULL,           -- bcrypt hashed
  role ENUM('admin','hr','manajer','pegawai') NOT NULL DEFAULT 'pegawai',
  is_active BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
);

CREATE TABLE pegawai (
  id INT AUTO_INCREMENT PRIMARY KEY,
  user_id INT,
  nip VARCHAR(50) UNIQUE NOT NULL,
  nama_lengkap VARCHAR(200) NOT NULL,
  jabatan VARCHAR(100) NOT NULL,
  status ENUM('aktif','nonaktif') DEFAULT 'aktif',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (user_id) REFERENCES users(id) ON DELETE SET NULL
);

CREATE TABLE cuti (
  id INT AUTO_INCREMENT PRIMARY KEY,
  pegawai_id INT NOT NULL,
  tgl_mulai DATE NOT NULL,
  tgl_selesai DATE NOT NULL,
  alasan TEXT NOT NULL,
  status ENUM('PENDING','APPROVED','REJECTED') DEFAULT 'PENDING',
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  FOREIGN KEY (pegawai_id) REFERENCES pegawai(id) ON DELETE CASCADE
);
```

### Seed Data

```
Users:
  admin@inix.com    / Admin@123!     / role: admin
  hr@inix.com       / Hr@123!        / role: hr
  manager@inix.com  / Manager@123!   / role: manajer
  pegawai@inix.com  / Pegawai@123!   / role: pegawai

Pegawai:
  NIP-2025-001 / Andi Wijaya    / Staff HR            / aktif
  NIP-2025-002 / Siti Rahayu    / Manajer IT          / aktif
  NIP-2025-003 / Rudi Hermawan  / Lead QA Automation  / nonaktif
  NIP-2025-004 / Budi Santoso   / AI Engineer         / aktif
  NIP-2025-005 / Maya Putri     / Staff Data Science  / aktif

Cuti (sample):
  pegawai_id=4, 2026-12-01 → 2026-12-03, "Mengikuti Konferensi AI Inixindo", PENDING
  pegawai_id=5, 2026-11-20 → 2026-11-21, "Sakit",                          APPROVED
```

---

### Halaman Frontend (React + Eduparx Design)

| No | Halaman | Route | Deskripsi & Desain Eduparx | Elemen UI & `data-testid` Penting |
|---|---|---|---|---|
| 1 | **Login** | `/login` | Form login dengan card container Eduparx modern + logo Inixindo | Input username (`data-testid="input-username"`), Input password (`data-testid="input-password"`), Button "Login" (`data-testid="btn-login"`), Error message (`data-testid="error-message"`) |
| 2 | **Dashboard** | `/dashboard` | Dashboard LMS/Kepegawaian dengan Hero Banner + Summary Metric Cards | Welcome message (`data-testid="welcome-msg"`), Quick action cards, Stat counter jumlah pegawai & cuti pending |
| 3 | **Katalog & Data Pegawai** | `/pegawai` | Layout 2-kolom Eduparx: Filter Sidebar di kiri + Card Grid/Table toggle di kanan | Table (`data-testid="pegawai-table"`), Search input (`data-testid="search-pegawai"`), Button "Tambah Pegawai" (`data-testid="btn-tambah"`), Edit (`data-testid="btn-edit-{id}"`), Delete (`data-testid="btn-delete-{id}"`), View toggle button |
| 4 | **Form Pegawai** | `/pegawai/tambah` atau `/pegawai/edit/{id}` | Form input berbingkai card Eduparx dengan label terhubung rapi | NIP (`data-testid="input-nip"`), Nama (`data-testid="input-nama"`), Jabatan (`data-testid="input-jabatan"`), Status (`data-testid="select-status"`), Simpan (`data-testid="btn-simpan"`), Batal (`data-testid="btn-batal"`), Alert (`data-testid="success-message"`, `data-testid="form-error"`) |
| 5 | **Pengajuan Cuti — List** | `/cuti` | Tabel status cuti dengan badge warna Eduparx (Pending kuning, Approved hijau, Rejected merah) | Table (`data-testid="cuti-table"`), Button "Ajukan Cuti" (`data-testid="btn-ajukan-cuti"`), Approve (`data-testid="btn-approve-{id}"`), Reject (`data-testid="btn-reject-{id}"`) |
| 6 | **Pengajuan Cuti — Form** | `/cuti/ajukan` | Form pengajuan cuti dengan validasi tanggal dan feedback error | Tgl Mulai (`data-testid="input-tgl-mulai"`), Tgl Selesai (`data-testid="input-tgl-selesai"`), Alasan (`data-testid="input-alasan"`), Submit (`data-testid="btn-submit-cuti"`), Error (`data-testid="validation-error"`) |

---

**[S] STEPS — 30 Step Atomik (Satu Step = Satu Prompt ke AI)**

> **Petunjuk Penggunaan:**
> - Eksekusi **satu step per giliran**.
> - Simpan hasil ke file sesuai path yang tertera.
> - Setiap step mandiri (*self-contained*), cocok untuk model AI dengan memory terbatas.

---

### FASE A: PROJECT SCAFFOLDING

---

#### Step 1 — Buat Root Project & File Konfigurasi Root

```
Buat folder project "inix-kepegawaian" dengan file-file berikut:

1. File: .gitignore
   Isi: ignore node_modules, .env, dist, build, mysql_data, *.log

2. File: .env.example
   Isi:
   DB_HOST=localhost
   DB_PORT=3306
   DB_NAME=inix_db
   DB_USER=root
   DB_PASSWORD=
   JWT_SECRET=inix-jwt-secret-key-for-testing
   JWT_EXPIRY=15m
   JWT_REFRESH_EXPIRY=7d
   NODE_ENV=development
   PORT=8000

Berikan isi lengkap kedua file.
```

**Output:** `.gitignore`, `.env.example`

---

#### Step 2 — Generate Backend Boilerplate dengan Express Generator

```
Jalankan command berikut untuk membuat backend Express.js:

  npx express-generator --no-view backend

Setelah itu, modifikasi file backend/package.json:
- Hapus dependency "jade"
- Tambahkan dependencies:
  "sequelize": "^6.37.0",
  "mysql2": "^3.11.0",
  "jsonwebtoken": "^9.0.0",
  "bcryptjs": "^2.4.3",
  "cors": "^2.8.5",
  "dotenv": "^16.4.0"
- Tambahkan devDependencies:
  "nodemon": "^3.1.0"
- Ubah scripts menjadi:
  "start": "node src/app.js",
  "dev": "nodemon src/app.js",
  "seed": "node src/seeders/seed.js",
  "lint": "echo 'lint placeholder'",
  "test": "echo 'No unit tests - QA training app'"

Berikan isi lengkap backend/package.json yang sudah dimodifikasi.
```

**Output:** `backend/package.json`

---

#### Step 3 — Generate Frontend Boilerplate dengan Vite

```
Jalankan command berikut untuk membuat frontend React+Vite:

  npm create vite@latest frontend -- --template react

Setelah itu, modifikasi file frontend/package.json:
- Tambahkan dependencies:
  "axios": "^1.7.0",
  "react-router-dom": "^6.28.0"

Kemudian buat file frontend/vite.config.js dengan proxy:
  server.proxy: '/api' → target 'http://localhost:8000'

Berikan isi lengkap:
1. frontend/package.json (yang sudah dimodifikasi)
2. frontend/vite.config.js (dengan proxy config)
```

**Output:** `frontend/package.json`, `frontend/vite.config.js`

---

#### Step 4 — Buat Struktur Folder Backend

```
Di dalam folder backend/, buat struktur folder berikut:

backend/
├── src/
│   ├── config/
│   │   └── database.js
│   ├── models/
│   │   ├── index.js
│   │   ├── user.model.js
│   │   ├── pegawai.model.js
│   │   └── cuti.model.js
│   ├── middleware/
│   │   ├── auth.middleware.js
│   │   └── role.middleware.js
│   ├── routes/
│   │   ├── auth.routes.js
│   │   ├── pegawai.routes.js
│   │   └── cuti.routes.js
│   ├── controllers/
│   │   ├── auth.controller.js
│   │   ├── pegawai.controller.js
│   │   └── cuti.controller.js
│   ├── seeders/
│   │   └── seed.js
│   └── app.js

Hapus file-file bawaan express-generator yang tidak dipakai:
- backend/app.js (pindah ke src/app.js)
- backend/bin/ (hapus seluruh folder)
- backend/routes/ (pindah ke src/routes/)
- backend/public/ (hapus)

Berikan daftar perintah mkdir/touch untuk membuat struktur ini.
```

**Output:** Struktur folder backend

---

### FASE B: BACKEND — DATABASE & MODELS (Step 5–8)

---

#### Step 5 — File: backend/src/config/database.js

```
Buat file backend/src/config/database.js untuk konfigurasi Sequelize.

Spesifikasi:
- Baca .env menggunakan dotenv (path: backend/.env)
- Buat instance Sequelize dengan:
  dialect: 'mysql'
  host: process.env.DB_HOST || 'localhost'
  port: process.env.DB_PORT || 3306
  database: process.env.DB_NAME || 'inix_db'
  username: process.env.DB_USER || 'root'
  password: process.env.DB_PASSWORD || ''
  logging: false (production), console.log (development)
  timezone: '+07:00'
- Export instance sequelize

Berikan isi lengkap file.
```

**Output:** `backend/src/config/database.js`

---

#### Step 6 — File: backend/src/models/user.model.js

```
Buat file backend/src/models/user.model.js — Sequelize model untuk tabel "users".

Schema:
  id: INTEGER, autoIncrement, primaryKey
  username: STRING(100), unique, allowNull false
  password: STRING(255), allowNull false (bcrypt hashed)
  role: ENUM('admin','hr','manajer','pegawai'), defaultValue 'pegawai'
  is_active: BOOLEAN, defaultValue true

Hooks:
  beforeCreate: hash password menggunakan bcryptjs (saltRounds=10)
  beforeUpdate: jika password berubah, hash ulang

Export: function yang menerima (sequelize, DataTypes) dan return model.

Berikan isi lengkap file.
```

**Output:** `backend/src/models/user.model.js`

---

#### Step 7 — File: backend/src/models/pegawai.model.js & cuti.model.js

```
Buat 2 file Sequelize model:

FILE 1: backend/src/models/pegawai.model.js
Schema:
  id: INTEGER, autoIncrement, primaryKey
  user_id: INTEGER, allowNull true (FK → users)
  nip: STRING(50), unique, allowNull false
  nama_lengkap: STRING(200), allowNull false
  jabatan: STRING(100), allowNull false
  status: ENUM('aktif','nonaktif'), defaultValue 'aktif'
Export: function(sequelize, DataTypes) → model

FILE 2: backend/src/models/cuti.model.js
Schema:
  id: INTEGER, autoIncrement, primaryKey
  pegawai_id: INTEGER, allowNull false (FK → pegawai)
  tgl_mulai: DATEONLY, allowNull false
  tgl_selesai: DATEONLY, allowNull false
  alasan: TEXT, allowNull false
  status: ENUM('PENDING','APPROVED','REJECTED'), defaultValue 'PENDING'
Export: function(sequelize, DataTypes) → model

Berikan isi lengkap kedua file.
```

**Output:** `backend/src/models/pegawai.model.js`, `backend/src/models/cuti.model.js`

---

#### Step 8 — File: backend/src/models/index.js (Model Loader & Associations)

```
Buat file backend/src/models/index.js yang:

1. Import sequelize instance dari ../config/database.js
2. Import ketiga model: User, Pegawai, Cuti
3. Definisikan associations:
   - User hasOne Pegawai (foreignKey: 'user_id', onDelete: 'SET NULL')
   - Pegawai belongsTo User (foreignKey: 'user_id')
   - Pegawai hasMany Cuti (foreignKey: 'pegawai_id', onDelete: 'CASCADE')
   - Cuti belongsTo Pegawai (foreignKey: 'pegawai_id')
4. Export: { sequelize, User, Pegawai, Cuti }

Berikan isi lengkap file.
```

**Output:** `backend/src/models/index.js`

---

### FASE C: BACKEND — MIDDLEWARE (Step 9–10)

---

#### Step 9 — File: backend/src/middleware/auth.middleware.js

```
Buat file backend/src/middleware/auth.middleware.js — middleware Express untuk verifikasi JWT.

Spesifikasi:
- Baca header "Authorization" → extract Bearer token
- Jika tidak ada token: return 401 { detail: "Token tidak ditemukan" }
- Verify token menggunakan jsonwebtoken dengan process.env.JWT_SECRET
- Jika token expired: return 401 { detail: "Token sudah kedaluwarsa" }
- Jika token invalid: return 401 { detail: "Token tidak valid" }
- Jika valid: set req.user = decoded payload { user_id, username, role }
- Panggil next()

Export: authMiddleware function.

Berikan isi lengkap file.
```

**Output:** `backend/src/middleware/auth.middleware.js`

---

#### Step 10 — File: backend/src/middleware/role.middleware.js

```
Buat file backend/src/middleware/role.middleware.js — middleware Express untuk RBAC.

Spesifikasi:
- Export function roleMiddleware(...allowedRoles)
- Cek apakah req.user.role ada di allowedRoles
- Jika tidak cocok: return 403 { detail: "Akses ditolak. Role Anda tidak memiliki izin." }
- Jika cocok: next()

Berikan isi lengkap file.
```

**Output:** `backend/src/middleware/role.middleware.js`

---

### FASE D: BACKEND — CONTROLLERS (Step 11–13)

---

#### Step 11 — File: backend/src/controllers/auth.controller.js

```
Buat file backend/src/controllers/auth.controller.js.

Functions:
1. login(req, res):
   - Baca req.body: { username, password }
   - Validasi field kosong → 400 { detail: "Username dan password wajib diisi" }
   - Cari user by username → 401 jika tidak ada / is_active false
   - Bandingkan bcrypt password → 401 jika salah
   - Generate access_token (15m) & refresh_token (7d)
   - Return 200 { access_token, refresh_token, user: { id, username, role } }

2. refresh(req, res):
   - Validasi refresh_token → verify JWT
   - Return 200 { access_token }

Export: { login, refresh }

Berikan isi lengkap file.
```

**Output:** `backend/src/controllers/auth.controller.js`

---

#### Step 12 — File: backend/src/controllers/pegawai.controller.js

```
Buat file backend/src/controllers/pegawai.controller.js.

Functions:
1. getAll(req, res): findAll include User (attributes: username, role), order by id ASC → return 200
2. getById(req, res): findByPk → 404 jika tidak ada, return 200
3. create(req, res): validasi nip unik & required fields → create → return 201
4. update(req, res): findByPk → validasi nip → update → return 200
5. remove(req, res): findByPk → destroy → return 204

Export: { getAll, getById, create, update, remove }

Berikan isi lengkap file.
```

**Output:** `backend/src/controllers/pegawai.controller.js`

---

#### Step 13 — File: backend/src/controllers/cuti.controller.js

```
Buat file backend/src/controllers/cuti.controller.js.

Functions:
1. getAll(req, res):
   - Pegawai: filter cuti miliknya sendiri
   - Role lain: ambil semua cuti, include Pegawai
   - Return 200 array
2. create(req, res):
   - Khusus role pegawai (403 jika role lain)
   - Validasi: tgl_selesai >= tgl_mulai, alasan wajib
   - Cuti.create → return 201
3. updateStatus(req, res):
   - Khusus role manajer (403 jika role lain)
   - Status harus APPROVED atau REJECTED
   - Update cuti berstatus PENDING → return 200

Export: { getAll, create, updateStatus }

Berikan isi lengkap file.
```

**Output:** `backend/src/controllers/cuti.controller.js`

---

### FASE E: BACKEND — ROUTES (Step 14–16)

---

#### Step 14 — File: backend/src/routes/auth.routes.js

```
Buat file backend/src/routes/auth.routes.js.

Routes:
  POST /login   → authController.login
  POST /refresh → authController.refresh

Export: router

Berikan isi lengkap file.
```

**Output:** `backend/src/routes/auth.routes.js`

---

#### Step 15 — File: backend/src/routes/pegawai.routes.js

```
Buat file backend/src/routes/pegawai.routes.js.

Routes:
  GET    /       → authMiddleware → pegawaiController.getAll
  POST   /       → authMiddleware → roleMiddleware('hr','admin') → pegawaiController.create
  GET    /:id    → authMiddleware → pegawaiController.getById
  PUT    /:id    → authMiddleware → roleMiddleware('hr','admin') → pegawaiController.update
  DELETE /:id    → authMiddleware → roleMiddleware('admin')      → pegawaiController.remove

Export: router

Berikan isi lengkap file.
```

**Output:** `backend/src/routes/pegawai.routes.js`

---

#### Step 16 — File: backend/src/routes/cuti.routes.js

```
Buat file backend/src/routes/cuti.routes.js.

Routes:
  GET    /           → authMiddleware → cutiController.getAll
  POST   /           → authMiddleware → roleMiddleware('pegawai') → cutiController.create
  PATCH  /:id/status → authMiddleware → roleMiddleware('manajer') → cutiController.updateStatus

Export: router

Berikan isi lengkap file.
```

**Output:** `backend/src/routes/cuti.routes.js`

---

### FASE F: BACKEND — APP ENTRY & SEEDER (Step 17–18)

---

#### Step 17 — File: backend/src/app.js (Express App Entry Point)

```
Buat file backend/src/app.js.

Spesifikasi:
- Load dotenv
- Express middleware: cors (origins: http://localhost:3000, http://localhost:5173), express.json()
- Routes: /api/auth, /api/pegawai, /api/cuti
- Health check: GET /api/health → { status: "ok", timestamp: ... }
- Error handler catch-all → 500 { detail: "Internal server error" }
- Testing support: biarkan X-Powered-By aktif, jangan set CSP atau X-Content-Type-Options (untuk OWASP ZAP)
- Sync sequelize lalu start server pada process.env.PORT || 8000

Berikan isi lengkap file.
```

**Output:** `backend/src/app.js`

---

#### Step 18 — File: backend/src/seeders/seed.js

```
Buat file backend/src/seeders/seed.js untuk inisialisasi data testing:

1. Sync database (force: true)
2. Insert 4 users dengan bcrypt hashed password (Admin@123!, Hr@123!, Manager@123!, Pegawai@123!)
3. Insert 5 pegawai PT INIX:
   - Andi Wijaya (Staff HR)
   - Siti Rahayu (Manajer IT)
   - Rudi Hermawan (Lead QA Automation, nonaktif)
   - Budi Santoso (AI Engineer, aktif)
   - Maya Putri (Staff Data Science, aktif)
4. Insert 2 sample cuti (1 PENDING, 1 APPROVED)
5. Log pesan sukses dan process.exit(0)

Berikan isi lengkap file.
```

**Output:** `backend/src/seeders/seed.js`

---

### FASE G: BACKEND — ENV & DOCKERFILE (Step 19–20)

---

#### Step 19 — File: backend/.env

```
Buat file backend/.env dengan isi:

DB_HOST=localhost
DB_PORT=3306
DB_NAME=inix_db
DB_USER=root
DB_PASSWORD=
JWT_SECRET=inix-jwt-secret-key-for-testing
JWT_EXPIRY=15m
JWT_REFRESH_EXPIRY=7d
NODE_ENV=development
PORT=8000

Berikan isi lengkap file.
```

**Output:** `backend/.env`

---

#### Step 20 — File: backend/Dockerfile

```
Buat file backend/Dockerfile:
- FROM node:20-alpine
- WORKDIR /app
- COPY package*.json, RUN npm ci --production
- COPY ., EXPOSE 8000
- CMD ["node", "src/app.js"]

Berikan isi lengkap file.
```

**Output:** `backend/Dockerfile`

---

### FASE H: FRONTEND — CORE & AUTH (Step 21–23)

---

#### Step 21 — File: frontend/index.html & frontend/src/main.jsx

```
Buat 2 file frontend core dengan tipografi Eduparx:

FILE 1: frontend/index.html
- DOCTYPE html, lang="id"
- Google Font Inter / Montserrat:
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
- Title: "PT INIX | Eduparx — Sistem Kepegawaian & Training IT"
- Favicon & viewport meta tag
- <div id="root"></div>
- Script entry: /src/main.jsx

FILE 2: frontend/src/main.jsx
- Import React, ReactDOM
- Import BrowserRouter dari react-router-dom
- Import App dari ./App
- Import ./index.css
- Mount app ke root element

Berikan isi lengkap kedua file.
```

**Output:** `frontend/index.html`, `frontend/src/main.jsx`

---

#### Step 22 — File: frontend/src/services/api.js & frontend/src/context/AuthContext.jsx

```
Buat 2 file client API & Auth state:

FILE 1: frontend/src/services/api.js
- Axios instance dengan baseURL: '/api'
- Request interceptor: attach token Authorization Bearer dari localStorage
- Response interceptor: handle 401 auto refresh token atau redirect login
- Export api instance

FILE 2: frontend/src/context/AuthContext.jsx
- AuthProvider dengan state: user, loading
- method: login(username, password), logout()
- Decode payload JWT saat refresh/mount aplikasi
- Export AuthProvider & hook useAuth()

Berikan isi lengkap kedua file.
```

**Output:** `frontend/src/services/api.js`, `frontend/src/context/AuthContext.jsx`

---

#### Step 23 — File: frontend/src/App.jsx & frontend/src/components/ProtectedRoute.jsx

```
Buat routing utama aplikasi:

FILE 1: frontend/src/components/ProtectedRoute.jsx
- Cek user authentication status via useAuth()
- Jika false: <Navigate to="/login" replace />
- Jika true: render <Outlet /> atau children

FILE 2: frontend/src/App.jsx
- Router konfigurasi:
  /login            → LoginPage
  /dashboard        → ProtectedRoute → DashboardPage
  /pegawai          → ProtectedRoute → PegawaiListPage
  /pegawai/tambah   → ProtectedRoute → PegawaiFormPage
  /pegawai/edit/:id → ProtectedRoute → PegawaiFormPage
  /cuti             → ProtectedRoute → CutiListPage
  /cuti/ajukan      → ProtectedRoute → CutiFormPage
  *                 → Redirect ke /dashboard

Berikan isi lengkap kedua file.
```

**Output:** `frontend/src/App.jsx`, `frontend/src/components/ProtectedRoute.jsx`

---

### FASE I: FRONTEND — KOMPONEN EDUPARX & STYLING (Step 24–25)

---

#### Step 24 — File: frontend/src/components/Layout.jsx, Navbar.jsx, Footer.jsx & ConfirmDialog.jsx

```
Buat komponen layout bergaya Eduparx Training Catalog (https://eduparx.id/home/training?catalog=ai-engineer):

FILE 1: frontend/src/components/Navbar.jsx
- Header navbar dengan branding: "INIXINDO | Eduparx"
- Nav links: Home (/dashboard), Data Pegawai (/pegawai), Pengajuan Cuti (/cuti)
- Quick search input di header
- User greeting dengan role badge & Tombol Logout

FILE 2: frontend/src/components/Footer.jsx
- Multi-column footer:
  - Kolom 1: Profil PT Inixindo & Eduparx — Training IT & Digital Transformation
  - Kolom 2: Katalog Pelatihan (AI Engineer, Software Testing QA, Cloud DevOps)
  - Kolom 3: Kontak (Jl. Kenari No. 69 Yogyakarta, Hotline, Email support@eduparx.id)
  - Copyright baris bawah

FILE 3: frontend/src/components/Layout.jsx
- Menggabungkan Navbar di atas, Hero Banner opsional/halaman, <main className="eduparx-main-container">, dan Footer di bawah.

FILE 4: frontend/src/components/ConfirmDialog.jsx
- Modal dialog konfirmasi delete (role="alertdialog")
- Button "Ya, Hapus" (data-testid="btn-confirm-delete") & "Batal" (data-testid="btn-cancel-delete")

Berikan isi lengkap keempat file.
```

**Output:** `Navbar.jsx`, `Footer.jsx`, `Layout.jsx`, `ConfirmDialog.jsx`

---

#### Step 25 — File: frontend/src/index.css (Eduparx Theme Design System)

```
Buat file frontend/src/index.css yang mengimplementasikan visual identitas Eduparx:

Spesifikasi Desain Eduparx:
1. CSS Variables:
   --eduparx-primary: #204ecf;       /* Eduparx Blue */
   --eduparx-primary-dark: #1b2a4e;  /* Dark Blue */
   --eduparx-secondary: #038fde;     /* Sky Blue */
   --eduparx-accent: #ff7a00;        /* Inix Orange */
   --eduparx-dark: #262d3d;          /* Heading Text */
   --eduparx-text: #4b5563;          /* Body Text */
   --eduparx-bg: #f8fafd;            /* Page Background */
   --eduparx-card-bg: #ffffff;
   --eduparx-border: #e8edf5;
   --eduparx-radius: 10px;

2. Typography: font-family 'Inter', -apple-system, sans-serif;

3. Header / Navbar Styling:
   - Sticky top, background white, border-bottom 1px solid var(--eduparx-border), box-shadow 0 2px 10px rgba(0,0,0,0.04)

4. Training Hero Section (`.training-page-header`):
   - Background: linear-gradient(135deg, #162447 0%, #204ecf 100%)
   - Text white, breadcrumb translucent, highlight pills dengan background rgba(255,255,255,0.15)

5. Layout 2-Kolom Katalog (`.catalog-layout`):
   - Grid: sidebar filter (280px) + content area (1fr)
   - Responsive: 1 kolom di mobile (<= 992px)

6. Sidebar Filter (`.catalog-filter-box`):
   - Card putih, rounded-lg, box-shadow halus
   - Category item list dengan pill count & active state biru Eduparx

7. Card Grid Training / Pegawai (`.eduparx-card-grid` & `.course-card`):
   - Card border halus, thumbnail header dengan badge pill
   - Hover: transform translateY(-4px), box-shadow 0 12px 24px rgba(32, 78, 207, 0.12)
   - Status badge: .badge-aktif (hijau), .badge-nonaktif (abu-abu), .badge-pending (oranye #ff7a00)

8. Data Table Styling (`.eduparx-table`):
   - Header background #f1f5f9 dengan text #1e293b, zebra striping, padding nyaman

9. Footer Styling (`.eduparx-footer`):
   - Background #1a2232, text #94a3b8, link hover #038fde, border-top 1px solid #2d3748

JANGAN gunakan CSS library eksternal (Tailwind/Bootstrap). Tulis dalam pure CSS murni.

Berikan isi lengkap file.
```

**Output:** `frontend/src/index.css`

---

### FASE J: FRONTEND — HALAMAN APLIKASI (Step 26–28)

---

#### Step 26 — File: frontend/src/pages/LoginPage.jsx & DashboardPage.jsx

```
Buat 2 halaman React bertema Eduparx:

FILE 1: frontend/src/pages/LoginPage.jsx
- Card login modern dengan logo "PT INIX — Eduparx Portal"
- Form fields + data-testid:
  - input-username (label "Email / Username")
  - input-password (label "Password")
  - btn-login ("Masuk ke Portal")
  - error-message (role="alert")
- Link bantuan / credential demo tertera rapi

FILE 2: frontend/src/pages/DashboardPage.jsx
- Wrap dalam <Layout>
- Hero Section:
  - Welcome message: <h1 data-testid="welcome-msg">Selamat datang, {user.username}!</h1>
  - Subtitle: "Portal Kepegawaian & Pelatihan IT PT Inixindo"
- Summary metric cards (3 cards):
  - Total Pegawai Aktif
  - Pengajuan Cuti Menunggu Review
  - Program Training Berjalan (AI Engineer & QA)
- Quick navigation shortcut pills ke /pegawai dan /cuti

Berikan isi lengkap kedua file.
```

**Output:** `frontend/src/pages/LoginPage.jsx`, `frontend/src/pages/DashboardPage.jsx`

---

#### Step 27 — File: frontend/src/pages/PegawaiListPage.jsx & PegawaiFormPage.jsx

```
Buat 2 halaman modul Data Pegawai dengan Eduparx Training Catalog Layout:

FILE 1: frontend/src/pages/PegawaiListPage.jsx
- Wrap dalam <Layout>
- Hero Banner Eduparx: Breadcrumb "Home > Katalog Pegawai & Talenta AI"
- Layout 2-Kolom Eduparx:
  - KIRI (Sidebar Filter):
    - Search input: data-testid="search-pegawai"
    - Kategori filter: Semua, AI Engineer, QA Automation, Staff HR, Manajer
    - Status filter: Aktif, Nonaktif
    - Tombol Reset Filter
  - KANAN (Konten):
    - Top bar: Jumlah data + Tombol "Tambah Pegawai" (data-testid="btn-tambah") + Toggle Switch (Tampilan Grid Card ↔ Tampilan Tabel)
    - Tampilan Card Grid (Eduparx Style):
      - Card per pegawai: avatar ilustrasi, category pill, nama tebal, status badge, tombol edit (data-testid="btn-edit-{id}") & hapus (data-testid="btn-delete-{id}")
    - Tampilan Tabel:
      - table: data-testid="pegawai-table", thead (NIP, Nama, Jabatan, Status, Aksi), tbody data
- Delete aksi terhubung ke ConfirmDialog & API DELETE /api/pegawai/{id}

FILE 2: frontend/src/pages/PegawaiFormPage.jsx
- Wrap dalam <Layout>
- Card container berdesain Eduparx
- Form fields lengkap dengan label & data-testid:
  - input-nip, input-nama, input-jabatan, select-status
  - btn-simpan, btn-batal
  - success-message, form-error
- Handle Create (POST) & Update (PUT)

Berikan isi lengkap kedua file.
```

**Output:** `frontend/src/pages/PegawaiListPage.jsx`, `frontend/src/pages/PegawaiFormPage.jsx`

---

#### Step 28 — File: frontend/src/pages/CutiListPage.jsx & CutiFormPage.jsx

```
Buat 2 halaman modul Pengajuan Cuti bertema Eduparx:

FILE 1: frontend/src/pages/CutiListPage.jsx
- Wrap dalam <Layout>
- Hero banner: "Pengajuan Cuti & Izin Kerja Pegawai PT INIX"
- Button "Ajukan Cuti Baru": data-testid="btn-ajukan-cuti" (visible untuk role pegawai)
- Tabel cuti: data-testid="cuti-table"
  - Kolom: Nama Pegawai, Tanggal Mulai, Tanggal Selesai, Alasan, Status, Aksi
  - Status badge Eduparx (.badge-pending / .badge-approved / .badge-rejected)
  - Aksi untuk role Manajer:
    - Approve button: data-testid="btn-approve-{id}"
    - Reject button: data-testid="btn-reject-{id}"
- Integrasi API GET /api/cuti/ dan PATCH /api/cuti/{id}/status/

FILE 2: frontend/src/pages/CutiFormPage.jsx
- Wrap dalam <Layout>
- Card container form ajukan cuti
- Form fields + data-testid:
  - input-tgl-mulai (type="date")
  - input-tgl-selesai (type="date")
  - input-alasan (textarea)
  - btn-submit-cuti
  - validation-error (role="alert")
- Client validation: tgl_selesai >= tgl_mulai, alasan min 3 karakter
- Integrasi POST /api/cuti/

Berikan isi lengkap kedua file.
```

**Output:** `frontend/src/pages/CutiListPage.jsx`, `frontend/src/pages/CutiFormPage.jsx`

---

### FASE K: FRONTEND — DOCKER & NGINX (Step 29)

---

#### Step 29 — File: frontend/Dockerfile & frontend/nginx.conf

```
Buat 2 file deployment container frontend:

FILE 1: frontend/Dockerfile (Multi-stage build)
- Stage 1: node:20-alpine AS build
  WORKDIR /app
  COPY package*.json ./
  RUN npm ci
  COPY . .
  RUN npm run build
- Stage 2: nginx:alpine
  COPY --from=build /app/dist /usr/share/nginx/html
  COPY nginx.conf /etc/nginx/conf.d/default.conf
  EXPOSE 80

FILE 2: frontend/nginx.conf
- Server listen 80
- SPA routing fallback: try_files $uri $uri/ /index.html
- Reverse proxy API:
  location /api {
    proxy_pass http://backend:8000;
  }

Berikan isi lengkap kedua file.
```

**Output:** `frontend/Dockerfile`, `frontend/nginx.conf`

---

### FASE L: DOCKER COMPOSE & README (Step 30)

---

#### Step 30 — File: docker-compose.yml & README.md

```
Buat 2 file orkestrasi di root folder inix-kepegawaian/:

FILE 1: docker-compose.yml
- version: "3.8"
- 3 services:
  1. db (mysql:8.0, port 3306:3306, volume mysql_data, healthcheck)
  2. backend (build ./backend, port 8000:8000, command: sh -c "npm run seed && node src/app.js", depends_on db healthy)
  3. frontend (build ./frontend, port 3000:80, depends_on backend)

FILE 2: README.md
- Petunjuk Quick Start: `docker-compose up -d`
- URL Aplikasi:
  - Frontend (Eduparx Theme): http://localhost:3000
  - Backend API: http://localhost:8000
  - MySQL Database: localhost:3306
- Default credentials demo
- Perintah seed ulang database

Berikan isi lengkap kedua file.
```

**Output:** `docker-compose.yml`, `README.md`

---

**[E] EXPECTATION:**

- **Output:** Source code lengkap untuk setiap file yang diminta pada masing-masing step.
- **Visual Design:** Menyerupai estetika modern **Eduparx Training Catalog** (skema biru `#204ecf`, hero gradient `#1b2a4e` ke `#204ecf`, highlight pill badges, 2-kolom layout dengan sidebar filter, card grid + view toggle table, multi-column footer).
- **Semua Test Locator Utuh:** Seluruh `data-testid`, semantic attributes, dan accessible names wajib ada sesuai tabel spesifikasi agar tidak mematahkan Playwright script.
- **REST API Response:** Format JSON baku: `{ "id": 1, ... }` atau `{ "detail": "Pesan error" }`.

---

**[N] NARROWING / CONSTRAINTS:**

- **JANGAN** menggunakan Tailwind CSS atau library CSS berat lainnya — gunakan **Pure CSS** (`index.css`) agar kode ringkas, performan, dan mudah di-inspect DevTools.
- **JANGAN** menghilangkan atribut `data-testid` pada element apa pun.
- **JANGAN** mengubah arsitektur endpoint backend (tetap Express + Sequelize + MySQL).
- **JANGAN** implementasikan security headers secara ketat (biarkan sebagian terbuka agar OWASP ZAP menemukan vulnerability latihan).

---

## Verifikasi Checklist Testability & Desain Eduparx

- [ ] **Desain Eduparx:** Navbar, Hero Gradient, Filter Sidebar, Card Grid, dan Footer menyerupai `eduparx.id/home/training?catalog=ai-engineer`
- [ ] **View Toggle:** Halaman Pegawai memiliki opsi Card Grid view dan Data Table view
- [ ] **Chrome DevTools:** Network call JSON lancar, Console bersih tanpa unhandled exceptions
- [ ] **Playwright Locators:** Semua `data-testid` terpasang dan dapat di-query dengan `page.getByTestId(...)`
- [ ] **Lighthouse:** Score Accessibility ≥ 75 berkat semantic tags (`<nav>`, `<header>`, `<main>`, `<aside>`, `<footer>`, `<table>`)
- [ ] **k6 Performance:** Endpoint login dapat diuji beban tanpa rate limiter
- [ ] **OWASP ZAP:** Spidering mengenali route halaman dan mendeteksi intentional missing headers
- [ ] **Docker:** `docker-compose up -d` langsung berjalan tanpa langkah manual tambahan
