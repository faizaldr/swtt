# 04 — Pemrograman untuk QA (TypeScript, OOP, Async, npm, Git, Docker)

## Tujuan Prompt

Menghasilkan 3 output:
1. **Prompt materi slide PPTX** — TypeScript dasar, OOP/Class (preview POM), Async/Await, Data Structures, npm, Git & GitHub workflow, Docker basics.
2. **Prompt lab hands-on** — Setup environment, fungsi TypeScript parsing JSON API PT INIX, class TestData generator, Git workflow.
3. **Prompt AI template** — Scaffold TypeScript, debug error dari stack trace, Copilot/Cursor tips.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 3 — Pemrograman untuk QA
- **Hari pelatihan:** Hari 2 (sesi akhir) — Hari 3 (sesi awal)
- **File referensi:** `STUDI_KASUS_INIX.md` (API endpoint, response JSON structure)
- **Prerequisite peserta:** Sudah menguasai manual testing (Fase 1 & 2); belum tentu punya background coding

---

## BAGIAN A: Prompt untuk Materi (Slide PPTX)

> **Instruksi:** Copy-paste prompt di bawah ini ke AI untuk menghasilkan konten slide PPTX Fase 3.

---

### PROMPT MATERI SLIDE FASE 3

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Automation Engineer & Programming Instructor** yang mengajarkan pemrograman dasar kepada QA Engineer. Anda memahami bahwa peserta bukan developer — mereka perlu belajar coding *sejauh yang dibutuhkan untuk automation testing*. Setiap konsep harus langsung dikaitkan dengan kegunaan di test automation (Playwright, API test, CI/CD).

**[I] INPUT:**
Buat konten slide presentasi (PPTX) untuk sesi **"Pemrograman untuk QA"** dalam pelatihan Software Testing. Konteks:

- **Durasi sesi:** 3 jam (2 sesi × 90 menit) — 30% teori, 70% demo kode + live coding
- **Target peserta:** QA Engineer Junior-Mid, sebagian besar *belum pernah coding* atau hanya pernah copy-paste script
- **Bahasa pemrograman:** TypeScript (akan digunakan untuk Playwright di Fase 4)
- **Studi kasus:** Aplikasi Kepegawaian PT INIX
  - API response JSON dari endpoint `/api/pegawai/`, `/api/cuti/`, `/api/auth/login/`
  - Data model: User, Pegawai (nip, nama_lengkap, jabatan, status), Cuti (tgl_mulai, tgl_selesai, alasan, status)
- **Mindset slide:** "Belajar coding UNTUK testing, bukan belajar jadi developer"

**[S] STEPS:**
Buat konten untuk slide-slide berikut secara berurutan:

---

**SESI 1 (90 menit): TypeScript Fundamentals & OOP untuk QA**

**Slide 1–2: Pembuka**
- Judul: "Fase 3 — Pemrograman untuk QA: TypeScript Essentials"
- Framing: "Anda tidak perlu jadi developer. Anda perlu CUKUP coding untuk menulis test script yang andal."
- Agenda: TypeScript Basics → OOP (preview POM) → Async/Await → Data Structures
- Preview: "Semua yang kita pelajari hari ini akan LANGSUNG dipakai di Fase 4 (Playwright automation)"

**Slide 3–4: Mengapa TypeScript?**
- JavaScript vs TypeScript — TypeScript = JavaScript + Type Safety
- Alasan QA pakai TypeScript:
  1. Playwright native support TypeScript
  2. Type checking mengurangi bug di test script
  3. Autocomplete & intellisense di VS Code — produktivitas
  4. Industri trend: mayoritas framework testing modern support TypeScript
- Tidak perlu tahu semua — fokus pada fitur yang dipakai di test script

**Slide 5–10: TypeScript Dasar — Types & Variables**
- **Tipe data primitif:**
  ```typescript
  let username: string = "admin@inix.com";
  let totalPegawai: number = 50;
  let isActive: boolean = true;
  let nipBaru: string | null = null;  // union type
  ```
- **Array:**
  ```typescript
  let roles: string[] = ["Admin", "HR", "Manajer", "Pegawai"];
  let pegawaiIds: number[] = [1, 2, 3, 4, 5];
  ```
- **Object & Interface:**
  ```typescript
  // Interface = blueprint/kontrak bentuk data
  interface Pegawai {
    id: number;
    nip: string;
    nama_lengkap: string;
    jabatan: string;
    status: "aktif" | "nonaktif";  // literal type
  }

  // Object mengikuti interface
  const pegawaiBaru: Pegawai = {
    id: 10,
    nip: "NIP-2026-001",
    nama_lengkap: "Budi Santoso",
    jabatan: "Staff IT",
    status: "aktif"
  };
  ```
  - Hubungkan ke QA: "Interface = cara kita mendefinisikan EXPECTED structure dari API response PT INIX"

- **Enum (untuk status):**
  ```typescript
  enum CutiStatus {
    PENDING = "PENDING",
    APPROVED = "APPROVED",
    REJECTED = "REJECTED"
  }

  let statusCuti: CutiStatus = CutiStatus.PENDING;
  ```

**Slide 11–14: Functions & Arrow Functions**
- **Function biasa:**
  ```typescript
  function hitungHariCuti(tglMulai: string, tglSelesai: string): number {
    const start = new Date(tglMulai);
    const end = new Date(tglSelesai);
    const diff = end.getTime() - start.getTime();
    return Math.ceil(diff / (1000 * 60 * 60 * 24)) + 1;
  }

  console.log(hitungHariCuti("2026-12-01", "2026-12-03")); // 3
  ```

- **Arrow function (lebih ringkas, sering dipakai di test script):**
  ```typescript
  const isValidNip = (nip: string): boolean => {
    return nip.startsWith("NIP-") && nip.length >= 10;
  };

  const getFullName = (pegawai: Pegawai): string => pegawai.nama_lengkap;
  ```

- **Optional & Default parameters:**
  ```typescript
  function createTestUser(
    username: string,
    role: string = "Pegawai",   // default value
    isActive?: boolean           // optional (bisa undefined)
  ): object {
    return { username, role, isActive: isActive ?? true };
  }
  ```

- Hubungkan ke QA: "Arrow function = cara kita menulis `test()` dan `expect()` di Playwright nanti"

**Slide 15–19: OOP untuk QA — Class & Page Object Preview**
- **Class dasar:**
  ```typescript
  class PegawaiData {
    nip: string;
    nama: string;
    jabatan: string;

    constructor(nip: string, nama: string, jabatan: string) {
      this.nip = nip;
      this.nama = nama;
      this.jabatan = jabatan;
    }

    getDisplayName(): string {
      return `${this.nama} (${this.nip})`;
    }
  }

  const pegawai = new PegawaiData("NIP-2026-001", "Budi", "Staff QA");
  console.log(pegawai.getDisplayName()); // "Budi (NIP-2026-001)"
  ```

- **Inheritance — Preview Page Object Model:**
  ```typescript
  // BasePage — parent class (nanti dipakai di Playwright)
  class BasePage {
    protected url: string;

    constructor(url: string) {
      this.url = url;
    }

    getUrl(): string {
      return this.url;
    }
  }

  // LoginPage — child class extends BasePage
  class LoginPage extends BasePage {
    constructor() {
      super("/login");   // panggil constructor parent
    }

    getPageTitle(): string {
      return "Login - PT INIX";
    }
  }

  const loginPage = new LoginPage();
  console.log(loginPage.getUrl());       // "/login"
  console.log(loginPage.getPageTitle());  // "Login - PT INIX"
  ```

- Highlight: "Pattern **Class + Inheritance** inilah yang menjadi dasar **Page Object Model (POM)** di Playwright. Di Fase 4, setiap halaman web menjadi 1 class."

- **Access modifiers:**
  | Modifier | Akses | Kegunaan di POM |
  |---|---|---|
  | `public` | Dari mana saja | Method yang dipanggil test (login, addPegawai) |
  | `protected` | Dari class sendiri & child | Shared helper (navigasi, wait) |
  | `private` | Dari class sendiri saja | Internal implementation |

**Slide 20: Rangkuman Sesi 1a**
- TypeScript = JavaScript + type safety → lebih aman untuk test script
- Interface = kontrak struktur data → mendefinisikan expected response
- Class + Inheritance = fondasi Page Object Model di Playwright

---

**SESI 1 (lanjutan): Async/Await & Data Structures**

**Slide 21–25: Async/Await & Promise**
- **Mengapa penting untuk QA?**
  - Semua operasi di test automation bersifat asynchronous: HTTP request, browser interaction, database query
  - Playwright API sepenuhnya async: `await page.goto()`, `await page.click()`, `await page.fill()`

- **Promise — konsep:**
  ```
  Promise = "Janji bahwa hasilnya akan datang nanti"
  Status: Pending → Fulfilled (berhasil) / Rejected (gagal)
  ```

- **Async/Await — pola paling umum:**
  ```typescript
  // Fungsi async — SELALU return Promise
  async function loginApi(username: string, password: string): Promise<string> {
    const response = await fetch("http://localhost:8000/api/auth/login/", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password })
    });

    if (!response.ok) {
      throw new Error(`Login failed: ${response.status}`);
    }

    const data = await response.json();
    return data.access_token;     // return token
  }

  // Cara pakai
  async function main() {
    try {
      const token = await loginApi("admin@inix.com", "Admin@123!");
      console.log("Token:", token);
    } catch (error) {
      console.error("Error:", error);
    }
  }
  ```

- **Pola di Playwright (preview):**
  ```typescript
  // Setiap interaksi browser = await
  await page.goto("http://localhost:8000/login");
  await page.fill("#username", "admin@inix.com");
  await page.fill("#password", "Admin@123!");
  await page.click("button[type='submit']");
  await expect(page).toHaveURL(/dashboard/);
  ```

- **Error handling — try/catch:**
  ```typescript
  try {
    const response = await fetch(url);
    const data = await response.json();
  } catch (error) {
    console.error("Request failed:", error.message);
  }
  ```

- Tips: "Jika lupa `await`, test Anda akan flaky — karena aksi belum selesai saat assertion dijalankan"

**Slide 26–29: Data Structures untuk Test Data Management**
- **Array — kumpulan data test:**
  ```typescript
  // Test data: daftar NIP untuk test EP
  const validNips: string[] = ["NIP-2026-001", "NIP-2026-002", "NIP-2026-003"];
  const invalidNips: string[] = ["", "NIP", "12345", null as any];

  // Iterasi untuk test berulang
  for (const nip of validNips) {
    console.log(`Testing NIP: ${nip}`);
  }

  // Array methods yang sering dipakai
  const activeStaff = pegawaiList.filter(p => p.status === "aktif");
  const names = pegawaiList.map(p => p.nama_lengkap);
  const found = pegawaiList.find(p => p.nip === "NIP-2026-001");
  ```

- **Object — structured test data:**
  ```typescript
  // Test data sebagai object
  const loginTestData = {
    valid: { username: "admin@inix.com", password: "Admin@123!" },
    invalidPassword: { username: "admin@inix.com", password: "wrong" },
    emptyFields: { username: "", password: "" },
    nonExistent: { username: "nobody@inix.com", password: "Test123!" }
  };
  ```

- **Map — dynamic key-value (jarang, tapi berguna):**
  ```typescript
  const roleCredentials = new Map<string, { user: string; pass: string }>();
  roleCredentials.set("admin", { user: "admin@inix.com", pass: "Admin@123!" });
  roleCredentials.set("hr", { user: "hr@inix.com", pass: "Hr@123!" });

  // Akses
  const adminCred = roleCredentials.get("admin")!;
  ```

- **Type assertion & narrowing (sering ditemui di test):**
  ```typescript
  // Response API bisa any — perlu type assertion
  const response = await fetch("/api/pegawai/");
  const data = (await response.json()) as Pegawai[];

  // Narrowing — cek sebelum pakai
  if (data && data.length > 0) {
    console.log(data[0].nama_lengkap);
  }
  ```

---

**SESI 2 (90 menit): npm, Git & GitHub, Docker Basics**

**Slide 30–34: npm & Package Manager**
- **Apa itu npm?** Node Package Manager — mengelola dependencies project JavaScript/TypeScript
- **package.json — file config project:**
  ```json
  {
    "name": "inix-qa-automation",
    "version": "1.0.0",
    "scripts": {
      "test": "npx playwright test",
      "test:headed": "npx playwright test --headed",
      "lint": "eslint .",
      "report": "npx allure serve"
    },
    "devDependencies": {
      "@playwright/test": "^1.48.0",
      "typescript": "^5.6.0",
      "allure-playwright": "^3.0.0"
    }
  }
  ```
- **Perintah npm penting:**
  | Perintah | Fungsi | Kapan Dipakai |
  |---|---|---|
  | `npm init -y` | Inisialisasi project baru | Awal project |
  | `npm install` | Install semua dependencies dari package.json | Clone project / fresh setup |
  | `npm install --save-dev <pkg>` | Install dev dependency | Tambah library baru |
  | `npm run test` | Jalankan script "test" | Eksekusi test suite |
  | `npx <command>` | Jalankan binary dari node_modules | `npx playwright test` |

- **node_modules & .gitignore:**
  - `node_modules/` = folder besar berisi semua library → JANGAN commit ke Git
  - `.gitignore` harus berisi: `node_modules/`, `test-results/`, `.env`

- **tsconfig.json — config TypeScript:**
  ```json
  {
    "compilerOptions": {
      "target": "ES2022",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true,
      "outDir": "./dist"
    }
  }
  ```

**Slide 35–41: Git & GitHub Workflow untuk QA**
- **Mengapa QA perlu Git?**
  1. Menyimpan test script di repository (version control)
  2. Kolaborasi tim (branching, pull request, code review)
  3. Trigger CI/CD pipeline (push → GitHub Actions menjalankan test)

- **Perintah Git essential:**
  | Perintah | Fungsi | Contoh |
  |---|---|---|
  | `git clone <url>` | Download repository | `git clone https://github.com/inix/qa-automation.git` |
  | `git status` | Lihat perubahan file | Cek file mana yang berubah |
  | `git add .` | Stage semua perubahan | Sebelum commit |
  | `git commit -m "msg"` | Simpan snapshot | `git commit -m "feat: add login test cases"` |
  | `git branch <name>` | Buat branch baru | `git branch feature/login-test` |
  | `git checkout <name>` | Pindah branch | `git checkout feature/login-test` |
  | `git push origin <branch>` | Upload ke GitHub | `git push origin feature/login-test` |
  | `git pull origin main` | Ambil perubahan terbaru | Update sebelum mulai kerja |

- **Git workflow QA Engineer:**
  ```
  main (production-ready)
    │
    ├── feature/login-test      ← QA buat branch baru
    │     ├── commit: add login page object
    │     ├── commit: add login test cases
    │     └── commit: fix flaky selector
    │
    └── Pull Request ───────────► Code Review ──► Merge to main
  ```

- **Commit message convention:**
  | Prefix | Kegunaan | Contoh |
  |---|---|---|
  | `feat:` | Fitur test baru | `feat: add pegawai CRUD test suite` |
  | `fix:` | Perbaikan test | `fix: resolve flaky login selector` |
  | `refactor:` | Restructure tanpa ubah behavior | `refactor: extract base page class` |
  | `docs:` | Dokumentasi | `docs: update README with setup steps` |

- **Pull Request:**
  - Apa itu: request untuk merge branch feature ke main — bisa di-review oleh rekan
  - QA konteks: sebelum test script masuk ke pipeline, perlu di-review oleh QA Lead / Senior
  - Demo: buat PR di GitHub → lihat diff → approve → merge

**Slide 42–45: Docker Basics untuk Test Environment**
- **Mengapa QA perlu Docker?**
  1. Menjalankan aplikasi PT INIX di local tanpa install Node js/MySQL manual
  2. Memastikan semua peserta punya environment yang sama (no "works on my machine")
  3. CI/CD pipeline menjalankan test di container Docker

- **Konsep dasar:**
  | Konsep | Analogi | Deskripsi |
  |---|---|---|
  | Image | Template / blueprint | Definisi aplikasi & dependencies |
  | Container | Instance yang berjalan | Aplikasi running dari image |
  | Dockerfile | Resep masak | Instruksi membangun image |
  | docker-compose.yml | Menu lengkap | Menjalankan multiple container sekaligus |

- **docker-compose.yml PT INIX:**
  ```yaml
  version: "3.8"
  services:
    backend:
      build: ./backend
      ports:
        - "8000:8000"
      depends_on:
        - db
      environment:
        - DB_HOST=db
        - DB_NAME=inix_db
        - JWT_SECRET=supersecretkey

    frontend:
      build: ./frontend
      ports:
        - "3000:3000"

    db:
      image: mysql:8.0
      ports:
        - "3306:3306"
      environment:
        - MYSQL_ROOT_PASSWORD=root
        - MYSQL_DATABASE=inix_db
  ```

- **Perintah Docker penting:**
  | Perintah | Fungsi |
  |---|---|
  | `docker-compose up -d` | Start semua services (background) |
  | `docker-compose down` | Stop & hapus semua containers |
  | `docker-compose logs backend` | Lihat log backend |
  | `docker ps` | Lihat containers yang berjalan |
  | `docker exec -it <container> bash` | Masuk ke dalam container |

- Tips QA: "Anda tidak perlu membuat Dockerfile — cukup `docker-compose up` untuk menjalankan aplikasi test environment"

**Slide 46–47: Rangkuman & Transisi ke Lab**
- Recap:
  1. TypeScript = bahasa untuk test script → types, interface, class, async/await
  2. npm = mengelola project & dependencies → package.json
  3. Git = version control test script → branch, commit, PR
  4. Docker = menjalankan test environment → docker-compose up
- "Selanjutnya: Lab — Anda akan setup project TypeScript, menulis fungsi parsing API, dan push ke GitHub"

**[E] EXPECTATION:**
- Format: konten teks per slide, siap di-copy ke template PPTX
- Setiap slide: **Judul**, **Bullet points** (maks 6), **Code block** (jika ada), **Speaker notes** (2–3 kalimat)
- Semua contoh kode menggunakan konteks PT INIX (Pegawai, Cuti, Login)
- Setiap konsep TypeScript langsung dikaitkan: "Ini akan dipakai di Playwright untuk..."
- Code block harus runnable (tidak pseudo-code)
- Bahasa Indonesia formal; kode & istilah teknis Inggris
- Total: ~47 slide (2 sesi)

**[N] NARROWING:**
- Jangan mengajarkan TypeScript secara menyeluruh — fokus subset yang dipakai di test automation
- Jangan membahas frontend development (React, DOM manipulation) — QA tidak perlu itu
- Jangan masuk Advanced TypeScript (decorators, conditional types, mapped types)
- Jangan membahas Playwright secara detail — cukup preview/teaser untuk motivasi belajar
- Jangan membahas CI/CD pipeline secara detail — cukup mention bahwa Git push trigger pipeline (Fase 5)
- Docker: cukup `docker-compose up/down` — jangan masuk Dockerfile authoring

---

## BAGIAN B: Prompt untuk Lab Hands-on Fase 3

> **Instruksi:** Copy-paste prompt ini ke AI untuk menghasilkan panduan Lab 3.

---

### PROMPT LAB FASE 3

**[R] ROLE:**
Bertindaklah sebagai **Senior QA Automation Engineer & Coding Instructor** yang membuat panduan lab pemrograman untuk QA Engineer pemula. Lab harus supportive — asumsikan peserta baru pertama kali membuka terminal dan VS Code. Setiap langkah harus eksplisit, termasuk perintah terminal yang perlu diketik.

**[I] INPUT:**
Buat panduan **Lab 3: Pemrograman TypeScript untuk QA — Setup, Coding, Git** untuk Aplikasi Kepegawaian PT INIX.

- **Durasi:** 75 menit
- **Peserta:** QA Engineer Junior-Mid, sebagian besar pertama kali coding
- **Tools:**
  - Node.js v20+ (sudah terinstall)
  - VS Code (sudah terinstall, dengan extension: TypeScript, ESLint, GitLens)
  - Git (sudah terinstall, GitHub account sudah ada)
  - Terminal: PowerShell / Git Bash
- **Studi kasus:** Response JSON dari API PT INIX
  ```json
  // GET /api/pegawai/ — response
  [
    { "id": 1, "nip": "NIP-2025-001", "nama_lengkap": "Andi Wijaya", "jabatan": "Staff HR", "status": "aktif" },
    { "id": 2, "nip": "NIP-2025-002", "nama_lengkap": "Siti Rahayu", "jabatan": "Manajer IT", "status": "aktif" },
    { "id": 3, "nip": "NIP-2025-003", "nama_lengkap": "Rudi Hermawan", "jabatan": "Staff QA", "status": "nonaktif" }
  ]

  // POST /api/auth/login/ — response
  { "access_token": "eyJhbG...", "refresh_token": "eyJhbG...", "user": { "id": 1, "username": "admin@inix.com", "role": "admin" } }
  ```

**[S] STEPS:**
Susun panduan lab:

**Bagian 0: Setup Project (10 menit)**
1. Buka terminal (PowerShell / Git Bash)
2. Buat folder project:
   ```bash
   mkdir inix-qa-exercise
   cd inix-qa-exercise
   ```
3. Inisialisasi project:
   ```bash
   npm init -y
   npm install --save-dev typescript ts-node @types/node
   npx tsc --init
   ```
4. Buat struktur folder:
   ```
   inix-qa-exercise/
   ├── src/
   │   ├── interfaces/
   │   │   └── pegawai.interface.ts
   │   ├── utils/
   │   │   ├── api-parser.ts
   │   │   └── test-data-generator.ts
   │   └── index.ts
   ├── package.json
   ├── tsconfig.json
   └── .gitignore
   ```
5. Buat `.gitignore`:
   ```
   node_modules/
   dist/
   .env
   ```
6. Buka project di VS Code: `code .`
7. Tambahkan script di package.json: `"start": "npx ts-node src/index.ts"`

**Bagian 1: Interface & Type — Mendefinisikan Data PT INIX (10 menit)**
8. Buat file `src/interfaces/pegawai.interface.ts`:
   - Interface `Pegawai` (id, nip, nama_lengkap, jabatan, status)
   - Interface `LoginResponse` (access_token, refresh_token, user: { id, username, role })
   - Interface `CutiRequest` (tgl_mulai, tgl_selesai, alasan)
   - Enum `CutiStatus` (PENDING, APPROVED, REJECTED)
9. Berikan kode lengkap dan penjelasan setiap baris
10. Jalankan: `npm start` → verifikasi tidak ada error

**Bagian 2: Fungsi Parsing Response API (15 menit)**
11. Buat file `src/utils/api-parser.ts` dengan fungsi-fungsi:
    - `parsePegawaiList(json: any[]): Pegawai[]` — validasi & parse array response
    - `findPegawaiByNip(list: Pegawai[], nip: string): Pegawai | undefined` — cari pegawai
    - `getActivePegawai(list: Pegawai[]): Pegawai[]` — filter status aktif
    - `extractToken(loginResponse: any): string` — ambil access_token dari login response
12. Buat `src/index.ts` — panggil semua fungsi dengan sample data PT INIX
13. Jalankan: `npm start` → verifikasi output di terminal

**Bagian 3: Class TestData Generator (15 menit)**
14. Buat file `src/utils/test-data-generator.ts`:
    ```typescript
    class TestDataGenerator {
      private counter: number = 0;

      generatePegawai(): Pegawai { ... }       // data random valid
      generateInvalidPegawai(): object { ... } // data sengaja invalid (untuk negative test)
      generateBulkPegawai(count: number): Pegawai[] { ... }
      generateCutiRequest(): CutiRequest { ... }
      generateLoginCredentials(role: string): { username: string; password: string } { ... }
    }
    ```
15. Implementasi setiap method — berikan kode lengkap
16. Update `index.ts` — generate 5 pegawai dummy, 3 cuti request, print ke console
17. Jalankan: `npm start` → verifikasi output

**Bagian 4: Async Function — Simulasi API Call (10 menit)**
18. Buat fungsi async yang mensimulasikan API call:
    ```typescript
    async function simulateLogin(username: string, password: string): Promise<string> {
      // simulate network delay
      await new Promise(resolve => setTimeout(resolve, 500));

      if (username === "admin@inix.com" && password === "Admin@123!") {
        return "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.mock-token";
      }
      throw new Error("Invalid credentials");
    }
    ```
19. Buat fungsi yang memanggil login dan handle error dengan try/catch
20. Jalankan — verifikasi output (success case + error case)

**Bagian 5: Git Workflow (15 menit)**
21. Inisialisasi Git:
    ```bash
    git init
    git add .
    git commit -m "feat: initial project setup with TypeScript"
    ```
22. Buat repository baru di GitHub (nama: `inix-qa-exercise`)
23. Connect ke remote:
    ```bash
    git remote add origin https://github.com/[USERNAME]/inix-qa-exercise.git
    git push -u origin main
    ```
24. Buat branch baru dan commit perubahan:
    ```bash
    git checkout -b feature/fase3-exercise
    ```
25. Tambahkan fitur kecil (misal: method baru di TestDataGenerator)
26. Commit & push:
    ```bash
    git add .
    git commit -m "feat: add bulk pegawai generator"
    git push origin feature/fase3-exercise
    ```
27. Buat Pull Request di GitHub (dari browser): `feature/fase3-exercise` → `main`
28. **Screenshot** PR di GitHub

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- Setiap langkah eksplisit — termasuk perintah terminal persis yang diketik
- Kode TypeScript lengkap per file — peserta copy-paste dan run
- **Checklist Keberhasilan:**
  - [ ] Project `inix-qa-exercise` terbuat dengan `package.json` dan `tsconfig.json`
  - [ ] 3 interface terdefinisi (Pegawai, LoginResponse, CutiRequest) + 1 enum (CutiStatus)
  - [ ] Fungsi `parsePegawaiList`, `findPegawaiByNip`, `getActivePegawai`, `extractToken` berjalan
  - [ ] Class `TestDataGenerator` menghasilkan data dummy (5 pegawai + 3 cuti)
  - [ ] Fungsi async `simulateLogin` berhasil (success + error case)
  - [ ] Repository di GitHub dengan minimal 3 commits
  - [ ] Branch `feature/fase3-exercise` terbuat dan di-push
  - [ ] Pull Request terbuat di GitHub (screenshot)
  - [ ] `npm start` berjalan tanpa error
- **Reference Answer:** kode lengkap setiap file + expected console output
- Bahasa Indonesia formal, kode & istilah Inggris

**[N] NARROWING:**
- HANYA TypeScript + npm + Git — belum Playwright, belum test framework
- Jangan minta peserta deploy atau setup server
- Jangan membahas React/frontend development
- Kode harus sederhana — jangan advanced pattern (dependency injection, generics kompleks)
- Git: basic workflow saja (init, add, commit, push, branch, PR) — jangan rebase, cherry-pick
- Docker: TIDAK ada di lab ini (cukup di materi slide sebagai pengenalan)
- Harus selesai dalam 75 menit oleh peserta pemula

---

## BAGIAN C: Prompt AI Template untuk Integrasi AI di Fase 3

> **Instruksi:** Template prompt siap pakai yang didemonstrasikan dan digunakan peserta.

---

### PROMPT AI TEMPLATE #1 — Scaffold Kode TypeScript dari Deskripsi Kebutuhan

```
Kamu adalah Senior TypeScript Developer yang membantu QA Engineer membuat utility code. Buatkan kode TypeScript berdasarkan kebutuhan berikut:

Kebutuhan:
Saya perlu class `ApiHelper` untuk project test automation aplikasi Kepegawaian PT INIX. Class ini harus:

1. Menyimpan `baseUrl` dan `accessToken` sebagai property
2. Punya method `login(username, password)` yang:
   - Mengirim POST request ke `{baseUrl}/api/auth/login/`
   - Menyimpan access_token ke property `accessToken`
   - Return response JSON
3. Punya method `getPegawaiList()` yang:
   - Mengirim GET request ke `{baseUrl}/api/pegawai/`
   - Menyertakan Authorization header dengan Bearer token
   - Return array Pegawai
4. Punya method `createPegawai(data)` yang:
   - Mengirim POST request ke `{baseUrl}/api/pegawai/`
   - Return Pegawai yang baru dibuat

Gunakan:
- TypeScript dengan strict mode
- fetch API (native Node.js 18+)
- async/await
- Interface untuk Pegawai dan LoginResponse
- Error handling dengan try/catch
- JSDoc comments untuk setiap method

Output: file TypeScript lengkap yang bisa langsung dijalankan.
```

### PROMPT AI TEMPLATE #2 — Debug Error TypeScript dari Stack Trace

```
Kamu adalah TypeScript Debugging Expert. Saya mendapat error saat menjalankan kode test automation. Tolong analisis dan berikan solusi.

Error di terminal:
```
TSError: ⨯ Unable to compile TypeScript:
src/utils/test-data-generator.ts(15,5): error TS2322: Type 'string' is not assignable to type 'number'.
src/utils/test-data-generator.ts(28,32): error TS2345: Argument of type 'string | undefined' is not assignable to parameter of type 'string'.
  Type 'undefined' is not assignable to type 'string'.
src/utils/api-parser.ts(10,3): error TS7006: Parameter 'item' implicitly has an 'any' type.
```

Kode saya (yang error):
[paste kode di sini]

Tugas:
1. Jelaskan arti setiap error dalam bahasa yang mudah dipahami QA pemula
2. Berikan FIX spesifik untuk setiap error (baris berapa, ganti apa)
3. Jelaskan MENGAPA error itu terjadi (konsep TypeScript yang dilanggar)
4. Berikan tips agar error serupa tidak terulang
```

### PROMPT AI TEMPLATE #3 — Tips Copilot/Cursor untuk Test Helper

```
Kamu adalah AI-Assisted Development Coach. Saya QA Engineer yang baru menggunakan GitHub Copilot / Cursor untuk menulis test code TypeScript.

Berikan panduan praktis:

1. **5 cara menulis comment/prompt yang efektif** agar Copilot generate kode test yang akurat. Contoh untuk konteks PT INIX:
   - Comment yang BAIK vs BURUK untuk generate test helper
   - Pattern comment yang konsisten menghasilkan kode berkualitas

2. **3 workflow efektif Copilot untuk QA:**
   - Generate interface dari sample JSON response
   - Generate test data factory dari interface
   - Generate assertion helper untuk API response

3. **5 hal yang HARUS di-review** setelah Copilot generate kode:
   - Apa saja yang sering salah/tidak akurat dari AI-generated code?

4. **Keyboard shortcuts** paling berguna di VS Code + Copilot:
   - Accept, dismiss, next suggestion, open Copilot chat

Berikan contoh spesifik menggunakan konteks Aplikasi Kepegawaian PT INIX (Pegawai, Cuti, Login).
```

---

## Checklist Output TAHAP 4

- [ ] Prompt materi slide PPTX (~47 slide) — TypeScript (types, interface, enum, function, arrow function, class, inheritance, access modifier, async/await, Promise, Array/Object/Map), npm (package.json, install, scripts, tsconfig), Git (clone, branch, commit, push, PR, workflow, commit convention), Docker (image, container, docker-compose.yml PT INIX, perintah dasar)
- [ ] Prompt Lab 3 (75 menit) — Setup project, interface, fungsi parsing, class TestDataGenerator, async simulasi, Git workflow + PR
- [ ] 3 AI Prompt Template (scaffold TypeScript, debug error, Copilot/Cursor tips)
- [ ] Semua contoh kode menggunakan konteks PT INIX (Pegawai, Cuti, Login)
- [ ] Setiap konsep TypeScript dikaitkan ke kegunaan di test automation (Playwright preview)
- [ ] Kode lengkap per file — siap copy-paste dan run
- [ ] Git workflow end-to-end termasuk PR di GitHub
- [ ] Bahasa Indonesia formal, kode & istilah teknis Inggris
