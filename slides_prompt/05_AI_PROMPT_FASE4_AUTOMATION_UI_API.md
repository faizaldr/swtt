# 05 — Automation UI & API (Playwright, POM, API Test, Schema Validation, Allure)

## Tujuan Prompt

Menghasilkan 3 output:
1. **Prompt materi slide PPTX** — Playwright arsitektur & setup, Locator Strategy, Page Object Model, Flaky Test, Trace Viewer & Allure, API Automation, Schema Validation, Contract Testing, Test Data Management.
2. **Prompt lab hands-on** — Setup Playwright project, POM 3 halaman, 5 UI test, API test suite + schema validation, Trace Viewer, Allure report.
3. **Prompt AI template** — Generate POM dari HTML, scaffold test dari User Story, Codegen tips, self-healing selector.

## Konteks & Referensi

- **Studi kasus:** Aplikasi Kepegawaian PT INIX (Node.js + Express + Sequelize, React, MySQL)
- **Fase:** Fase 4 — Automation UI & API
- **Hari pelatihan:** Hari 3
- **File referensi:** `STUDI_KASUS_INIX.md`, `slides_prompt/04_AI_PROMPT_FASE3_PROGRAMMING_FOR_QA.md`
- **Prerequisite peserta:** TypeScript dasar, OOP/Class, Async/Await, npm, Git (Fase 3)

---

## BAGIAN A: Prompt untuk Materi (Slide PPTX)

> **Instruksi:** Copy-paste prompt di bawah ini ke AI untuk menghasilkan konten slide PPTX Fase 4.

---

### PROMPT MATERI SLIDE FASE 4

**[R] ROLE:**
Bertindaklah sebagai **Principal Test Automation Architect & Playwright Expert Instructor** dengan pengalaman membangun automation framework di skala enterprise. Anda mengajarkan Playwright + TypeScript dengan pendekatan best-practice: Page Object Model, stable locator, anti-flaky pattern, dan reporting. Materi harus production-grade — bukan tutorial pemula generik.

**[I] INPUT:**
Buat konten slide presentasi (PPTX) untuk sesi **"Automation UI & API dengan Playwright"** dalam pelatihan Software Testing. Konteks:

- **Durasi sesi:** 4.5 jam (3 sesi × 90 menit) — 30% teori, 70% demo kode & live coding
- **Target peserta:** QA Engineer Junior-Mid yang sudah menguasai TypeScript dasar (Fase 3)
- **Studi kasus:** Aplikasi Kepegawaian PT INIX
  - Frontend: React SPA — halaman: Login, Dashboard, Data Pegawai (list + form), Pengajuan Cuti (list + form + approval)
  - Backend: Node.js + Express + Sequelize REST API
  - Auth: JWT (Bearer token)
  - Base URL: `http://localhost:8000`
  - 10 API Endpoint (lihat STUDI_KASUS_INIX.md)

- **Halaman UI PT INIX (asumsi struktur React):**
  - **Login Page:** form dengan field username (input email), password (input password), tombol Login
  - **Dashboard:** sidebar navigation, welcome message, summary cards
  - **Data Pegawai — List:** tabel pegawai (NIP, Nama, Jabatan, Status), tombol Tambah, Edit, Hapus per row
  - **Data Pegawai — Form:** form input (NIP, Nama Lengkap, Jabatan, Status dropdown), tombol Simpan, Batal
  - **Pengajuan Cuti — List:** tabel cuti (Pegawai, Tanggal, Alasan, Status), tombol Ajukan Cuti
  - **Pengajuan Cuti — Form:** form (Tanggal Mulai datepicker, Tanggal Selesai datepicker, Alasan textarea), tombol Submit
  - **Approval Cuti (Manajer):** list cuti PENDING, tombol Approve / Reject per row

**[S] STEPS:**
Buat konten untuk slide-slide berikut secara berurutan:

---

**SESI 1 (90 menit): Playwright Fundamentals & Locator Strategy**

**Slide 1–2: Pembuka**
- Judul: "Fase 4 — Automation UI & API dengan Playwright"
- Transisi: "Di Fase 1–2 kita menguji manual. Di Fase 3 kita belajar coding. Sekarang kita MENGGABUNGKAN keduanya — test automation."
- Agenda: Playwright Setup → Locator → POM → Flaky Test → Trace Viewer → API Test → Schema → Allure

**Slide 3–6: Mengapa Playwright?**
- Perbandingan singkat framework automation:
  | Aspek | Playwright | Cypress | Selenium |
  |---|---|---|---|
  | Bahasa | TS/JS, Python, C#, Java | JS/TS | Multi-language |
  | Browser | Chromium, Firefox, WebKit | Chromium-based | Multi-browser |
  | Speed | Cepat (auto-wait) | Cepat | Lebih lambat |
  | API Testing | Built-in (`request`) | Via plugin | Tidak built-in |
  | Trace Viewer | ✓ Built-in | Tidak | Tidak |
  | Mobile | ✓ Emulation | Tidak | Appium |
  | Parallel | ✓ Native | ✓ | Via Grid |

- Keunggulan Playwright untuk QA:
  1. Auto-wait — otomatis tunggu element ready (mengurangi flaky)
  2. Built-in API testing — UI + API dalam 1 framework
  3. Trace Viewer — debugging visual per step
  4. Codegen — record & generate script
  5. TypeScript native — type safety dari Fase 3

**Slide 7–10: Setup & Arsitektur Playwright**
- Install:
  ```bash
  npm init playwright@latest
  # Pilih: TypeScript, tests folder, install browsers, GitHub Actions workflow
  ```
- Struktur project yang dihasilkan:
  ```
  inix-playwright/
  ├── tests/                    # Test files
  │   └── example.spec.ts
  ├── playwright.config.ts      # Konfigurasi
  ├── package.json
  └── tsconfig.json
  ```

- **playwright.config.ts — konfigurasi penting:**
  ```typescript
  import { defineConfig } from '@playwright/test';

  export default defineConfig({
    testDir: './tests',
    timeout: 30_000,                    // timeout per test
    retries: 1,                         // retry flaky test
    workers: 4,                         // parallel execution
    reporter: [
      ['html'],                         // HTML report
      ['allure-playwright']             // Allure report
    ],
    use: {
      baseURL: 'http://localhost:8000',  // PT INIX base URL
      trace: 'on-first-retry',          // capture trace saat retry
      screenshot: 'only-on-failure',    // screenshot saat gagal
      video: 'retain-on-failure',       // video saat gagal
    },
    projects: [
      { name: 'chromium', use: { browserName: 'chromium' } },
      { name: 'firefox', use: { browserName: 'firefox' } },
    ],
  });
  ```

- **Anatomy test file:**
  ```typescript
  import { test, expect } from '@playwright/test';

  test.describe('Login Page', () => {

    test('should login successfully with valid credentials', async ({ page }) => {
      await page.goto('/login');
      await page.fill('[name="username"]', 'admin@inix.com');
      await page.fill('[name="password"]', 'Admin@123!');
      await page.click('button[type="submit"]');
      await expect(page).toHaveURL(/dashboard/);
    });

  });
  ```

- Menjalankan test:
  | Perintah | Fungsi |
  |---|---|
  | `npx playwright test` | Jalankan semua test (headless) |
  | `npx playwright test --headed` | Jalankan dengan browser visible |
  | `npx playwright test --ui` | Jalankan di UI mode (interactive) |
  | `npx playwright test tests/login.spec.ts` | Jalankan file spesifik |
  | `npx playwright test --trace on` | Jalankan dengan trace recording |
  | `npx playwright show-report` | Buka HTML report |

**Slide 11–16: Locator Strategy**
- **Prioritas locator (best practice → worst practice):**
  | Prioritas | Locator | Contoh | Alasan |
  |---|---|---|---|
  | 1 (Best) | `getByRole` | `page.getByRole('button', { name: 'Login' })` | Accessible, stabil |
  | 2 | `getByLabel` | `page.getByLabel('Username')` | Terhubung ke label form |
  | 3 | `getByPlaceholder` | `page.getByPlaceholder('Masukkan NIP')` | Untuk input tanpa label |
  | 4 | `getByText` | `page.getByText('Data Pegawai')` | Untuk heading/link |
  | 5 | `getByTestId` | `page.getByTestId('btn-submit')` | Custom attribute stabil |
  | 6 | CSS Selector | `page.locator('.btn-primary')` | OK jika class stabil |
  | 7 (Worst) | XPath | `page.locator('//div[3]/button')` | Fragile, hindari |

- **Contoh locator untuk PT INIX:**
  ```typescript
  // Login Page
  const usernameInput = page.getByLabel('Username');
  const passwordInput = page.getByLabel('Password');
  const loginButton = page.getByRole('button', { name: 'Login' });

  // Data Pegawai
  const tambahButton = page.getByRole('button', { name: 'Tambah Pegawai' });
  const nipInput = page.getByLabel('NIP');
  const namaInput = page.getByLabel('Nama Lengkap');
  const jabatanInput = page.getByLabel('Jabatan');
  const simpanButton = page.getByRole('button', { name: 'Simpan' });

  // Tabel pegawai — specific row
  const pegawaiRow = page.getByRole('row', { name: /NIP-2026-001/ });
  const editButton = pegawaiRow.getByRole('button', { name: 'Edit' });
  const hapusButton = pegawaiRow.getByRole('button', { name: 'Hapus' });
  ```

- **Anti-pattern yang harus dihindari:**
  | ❌ Anti-pattern | ✅ Best Practice | Alasan |
  |---|---|---|
  | `page.locator('#root > div:nth-child(3) > form > input:first-child')` | `page.getByLabel('Username')` | Path panjang fragile |
  | `page.locator('.css-1a2b3c')` | `page.getByTestId('login-form')` | Generated class berubah |
  | `page.waitForTimeout(3000)` | `await page.waitForSelector(...)` atau auto-wait | Hard wait = flaky |
  | `page.locator('button').nth(2)` | `page.getByRole('button', { name: 'Simpan' })` | Index berubah |

- **Codegen — record locator otomatis:**
  ```bash
  npx playwright codegen http://localhost:8000/login
  ```
  - Buka browser, interaksi → Playwright generate script otomatis
  - Tips: Gunakan sebagai starting point, SELALU review & refactor locator ke best practice

**Slide 17: Rangkuman Sesi 1**
- Playwright = modern, fast, auto-wait, built-in API test + tracing
- Locator priority: getByRole > getByLabel > getByTestId > CSS > XPath
- Codegen untuk bootstrap, SELALU review locator

---

**SESI 2 (90 menit): Page Object Model, Flaky Test, Trace Viewer**

**Slide 18–25: Page Object Model (POM)**
- **Apa itu POM?** Design pattern yang memisahkan locator & aksi halaman dari test logic. Setiap halaman web = 1 class.
- **Mengapa POM?**
  | Tanpa POM | Dengan POM |
  |---|---|
  | Locator tersebar di semua test file | Locator terpusat di 1 class per halaman |
  | Ubah locator → edit banyak file | Ubah locator → edit 1 file |
  | Duplikasi kode (login di setiap test) | Reusable method (`loginPage.login(user, pass)`) |
  | Sulit di-maintain | Scalable & maintainable |

- **Struktur folder POM:**
  ```
  inix-playwright/
  ├── pages/                     # Page Object classes
  │   ├── base.page.ts           # BasePage (shared logic)
  │   ├── login.page.ts          # LoginPage
  │   ├── dashboard.page.ts      # DashboardPage
  │   ├── pegawai-list.page.ts   # PegawaiListPage
  │   ├── pegawai-form.page.ts   # PegawaiFormPage
  │   └── cuti.page.ts           # CutiPage
  ├── tests/
  │   ├── login.spec.ts
  │   ├── pegawai.spec.ts
  │   └── cuti.spec.ts
  ├── fixtures/
  │   └── test-data.ts           # Test data constants
  ├── playwright.config.ts
  └── package.json
  ```

- **BasePage — parent class:**
  ```typescript
  import { Page, expect } from '@playwright/test';

  export class BasePage {
    constructor(protected page: Page) {}

    async navigate(path: string) {
      await this.page.goto(path);
    }

    async getTitle(): Promise<string> {
      return this.page.title();
    }

    async waitForPageLoad() {
      await this.page.waitForLoadState('networkidle');
    }
  }
  ```

- **LoginPage — extends BasePage:**
  ```typescript
  import { Page, expect } from '@playwright/test';
  import { BasePage } from './base.page';

  export class LoginPage extends BasePage {
    // Locators (terpusat di sini)
    private usernameInput = this.page.getByLabel('Username');
    private passwordInput = this.page.getByLabel('Password');
    private loginButton = this.page.getByRole('button', { name: 'Login' });
    private errorMessage = this.page.getByTestId('error-message');

    constructor(page: Page) {
      super(page);
    }

    async goto() {
      await this.navigate('/login');
    }

    async login(username: string, password: string) {
      await this.usernameInput.fill(username);
      await this.passwordInput.fill(password);
      await this.loginButton.click();
    }

    async expectLoginSuccess() {
      await expect(this.page).toHaveURL(/dashboard/);
    }

    async expectLoginError(message: string) {
      await expect(this.errorMessage).toContainText(message);
    }
  }
  ```

- **PegawaiListPage:**
  ```typescript
  import { Page, expect } from '@playwright/test';
  import { BasePage } from './base.page';

  export class PegawaiListPage extends BasePage {
    private tambahButton = this.page.getByRole('button', { name: 'Tambah Pegawai' });
    private searchInput = this.page.getByPlaceholder('Cari pegawai...');
    private pegawaiTable = this.page.getByRole('table');

    constructor(page: Page) { super(page); }

    async goto() {
      await this.navigate('/pegawai');
    }

    async clickTambah() {
      await this.tambahButton.click();
    }

    async searchPegawai(keyword: string) {
      await this.searchInput.fill(keyword);
    }

    async getRowByNip(nip: string) {
      return this.page.getByRole('row', { name: new RegExp(nip) });
    }

    async clickEdit(nip: string) {
      const row = await this.getRowByNip(nip);
      await row.getByRole('button', { name: 'Edit' }).click();
    }

    async clickHapus(nip: string) {
      const row = await this.getRowByNip(nip);
      await row.getByRole('button', { name: 'Hapus' }).click();
    }

    async expectPegawaiVisible(nip: string) {
      await expect(this.page.getByText(nip)).toBeVisible();
    }

    async expectPegawaiNotVisible(nip: string) {
      await expect(this.page.getByText(nip)).not.toBeVisible();
    }
  }
  ```

- **Test file menggunakan POM:**
  ```typescript
  import { test } from '@playwright/test';
  import { LoginPage } from '../pages/login.page';
  import { PegawaiListPage } from '../pages/pegawai-list.page';

  test.describe('Data Pegawai', () => {
    let loginPage: LoginPage;
    let pegawaiPage: PegawaiListPage;

    test.beforeEach(async ({ page }) => {
      loginPage = new LoginPage(page);
      pegawaiPage = new PegawaiListPage(page);
      // Login sebagai HR sebelum setiap test
      await loginPage.goto();
      await loginPage.login('hr@inix.com', 'Hr@123!');
      await loginPage.expectLoginSuccess();
    });

    test('should display pegawai list', async () => {
      await pegawaiPage.goto();
      await pegawaiPage.expectPegawaiVisible('NIP-2025-001');
    });
  });
  ```

**Slide 26–29: Flaky Test — Penyebab & Solusi**
- **Definisi:** Test yang kadang PASS kadang FAIL tanpa perubahan kode — musuh utama automation
- **Penyebab & Solusi:**
  | Penyebab | Contoh | Solusi |
  |---|---|---|
  | Timing / Race condition | Klik tombol sebelum element ready | Playwright auto-wait (default). Jika perlu: `await page.waitForSelector()` |
  | Dynamic locator | Class CSS berubah setiap build | Gunakan `getByRole`, `getByTestId`, bukan CSS class |
  | Network dependency | API lambat → timeout | `await page.waitForResponse()` atau mock API |
  | Shared state | Test 1 ubah data, Test 2 gagal | Isolasi test data, cleanup di `afterEach` |
  | Animation / Transition | Klik saat animasi berjalan | `await element.waitFor({ state: 'stable' })` |
  | Parallel conflict | 2 test akses resource sama | Unique test data per worker |

- **Anti-flaky best practices:**
  ```typescript
  // ❌ BURUK: hard wait
  await page.waitForTimeout(3000);

  // ✅ BAIK: wait for specific condition
  await page.waitForSelector('[data-testid="pegawai-table"]');
  await expect(page.getByText('Data berhasil disimpan')).toBeVisible();

  // ✅ BAIK: wait for API response sebelum assertion
  await Promise.all([
    page.waitForResponse(resp => resp.url().includes('/api/pegawai') && resp.status() === 200),
    page.getByRole('button', { name: 'Simpan' }).click()
  ]);
  ```

- **Retry configuration:**
  ```typescript
  // playwright.config.ts
  retries: process.env.CI ? 2 : 0,  // retry di CI, tidak di local
  ```

**Slide 30–32: Trace Viewer & Allure Report**
- **Trace Viewer:**
  - Apa: recording visual dari setiap step test (screenshot, network, console, DOM snapshot)
  - Cara capture: `npx playwright test --trace on`
  - Cara buka: `npx playwright show-trace trace.zip`
  - Fitur: timeline, screenshot per action, network log, console log, DOM snapshot — debugging tanpa re-run
  - Demo: trace dari test login PT INIX — lihat screenshot setiap fill/click

- **Allure Report:**
  - Install: `npm install --save-dev allure-playwright`
  - Tambahkan reporter di config: `reporter: [['allure-playwright']]`
  - Generate: `npx allure generate allure-results --clean -o allure-report`
  - Serve: `npx allure serve allure-results`
  - Fitur: dashboard, timeline, suites, severity, steps, attachments, trends

**Slide 33: Rangkuman Sesi 2**
- POM = 1 halaman = 1 class → locator terpusat, reusable, maintainable
- Flaky test: penyebab timing/locator/state → solusi auto-wait, stable locator, isolasi data
- Trace Viewer + Allure = debugging & reporting production-grade

---

**SESI 3 (90 menit): API Automation, Schema Validation, Test Data Management**

**Slide 34–39: API Automation dengan Playwright**
- **Playwright `request` context:**
  ```typescript
  import { test, expect } from '@playwright/test';

  test.describe('API Tests — Pegawai', () => {
    let accessToken: string;

    test.beforeAll(async ({ request }) => {
      // Login & dapatkan token
      const loginResp = await request.post('/api/auth/login/', {
        data: { username: 'hr@inix.com', password: 'Hr@123!' }
      });
      expect(loginResp.status()).toBe(200);
      const body = await loginResp.json();
      accessToken = body.access_token;
    });

    test('GET /api/pegawai/ — should return pegawai list', async ({ request }) => {
      const response = await request.get('/api/pegawai/', {
        headers: { Authorization: `Bearer ${accessToken}` }
      });
      expect(response.status()).toBe(200);
      const data = await response.json();
      expect(Array.isArray(data)).toBeTruthy();
      expect(data.length).toBeGreaterThan(0);
      expect(data[0]).toHaveProperty('nip');
      expect(data[0]).toHaveProperty('nama_lengkap');
    });

    test('POST /api/pegawai/ — should create new pegawai', async ({ request }) => {
      const newPegawai = {
        nip: `NIP-TEST-${Date.now()}`,
        nama_lengkap: 'Test Automation',
        jabatan: 'QA Automation',
        status: 'aktif'
      };
      const response = await request.post('/api/pegawai/', {
        headers: { Authorization: `Bearer ${accessToken}` },
        data: newPegawai
      });
      expect(response.status()).toBe(201);
      const body = await response.json();
      expect(body.nip).toBe(newPegawai.nip);
      expect(body.nama_lengkap).toBe(newPegawai.nama_lengkap);
    });

    test('POST /api/pegawai/ — should reject without auth', async ({ request }) => {
      const response = await request.post('/api/pegawai/', {
        data: { nip: 'NIP-NO-AUTH', nama_lengkap: 'No Auth', jabatan: 'Staff' }
      });
      expect(response.status()).toBe(401);
    });
  });
  ```

- **Kapan UI test vs API test:**
  | Skenario | UI Test | API Test |
  |---|---|---|
  | Visual / layout verification | ✓ | — |
  | Form validation (user experience) | ✓ | ✓ (API layer) |
  | CRUD data (backend logic) | Bisa, tapi lambat | ✓ (lebih cepat) |
  | Auth / RBAC | ✓ (flow lengkap) | ✓ (lebih efisien) |
  | Error handling response | — | ✓ |
  | Performance check | — | ✓ (response time) |

- Prinsip: "Test di level terendah yang bisa. Gunakan API test untuk data logic, UI test untuk user experience."

**Slide 40–43: Schema Validation**
- **Mengapa perlu?** Memastikan response API memiliki struktur (field, tipe data) yang benar — bukan hanya status code 200
- **Dengan Zod (TypeScript-native):**
  ```typescript
  import { z } from 'zod';

  // Definisi schema Pegawai
  const PegawaiSchema = z.object({
    id: z.number(),
    nip: z.string(),
    nama_lengkap: z.string(),
    jabatan: z.string(),
    status: z.enum(['aktif', 'nonaktif']),
  });

  const PegawaiListSchema = z.array(PegawaiSchema);

  // Gunakan di test
  test('GET /api/pegawai/ — schema validation', async ({ request }) => {
    const response = await request.get('/api/pegawai/', {
      headers: { Authorization: `Bearer ${accessToken}` }
    });
    const data = await response.json();
    const result = PegawaiListSchema.safeParse(data);
    expect(result.success).toBeTruthy();
    if (!result.success) {
      console.error('Schema errors:', result.error.issues);
    }
  });
  ```

- **Dengan JSON Schema (ajv):**
  ```typescript
  import Ajv from 'ajv';
  const ajv = new Ajv();

  const pegawaiSchema = {
    type: 'object',
    required: ['id', 'nip', 'nama_lengkap', 'jabatan', 'status'],
    properties: {
      id: { type: 'number' },
      nip: { type: 'string' },
      nama_lengkap: { type: 'string' },
      jabatan: { type: 'string' },
      status: { type: 'string', enum: ['aktif', 'nonaktif'] }
    }
  };

  const validate = ajv.compile(pegawaiSchema);
  // Di test: expect(validate(responseData)).toBeTruthy();
  ```

- Perbandingan Zod vs JSON Schema:
  | Aspek | Zod | JSON Schema (ajv) |
  |---|---|---|
  | Language | TypeScript-native | JSON spec |
  | Type inference | ✓ Otomatis | Tidak |
  | Learning curve | Mudah | Sedang |
  | Ecosystem | TypeScript/Node | Universal |

**Slide 44–46: Contract Testing (Konsep)**
- **Apa itu:** Memastikan kontrak (agreement) antara consumer (FE) dan provider (BE API) tidak berubah tanpa pemberitahuan
- **Konsep Pact (consumer-driven):**
  ```
  Consumer (React FE)              Provider (Express API)
       │                                   │
       │── Generate Pact Contract ─────────►│
       │   "I expect GET /api/pegawai/      │
       │    returns [{nip, nama, ...}]"     │
       │                                   │── Verify Contract
       │                                   │   "Yes, I still return that"
  ```
- Catatan: Contract testing adalah konsep advanced — di pelatihan ini cukup pemahaman. Implementasi penuh bisa jadi exercise lanjutan.

**Slide 47–49: Test Data Management**
- **Fixtures — data statis untuk test:**
  ```typescript
  // fixtures/test-data.ts
  export const TEST_CREDENTIALS = {
    admin: { username: 'admin@inix.com', password: 'Admin@123!' },
    hr: { username: 'hr@inix.com', password: 'Hr@123!' },
    manager: { username: 'manager@inix.com', password: 'Manager@123!' },
    pegawai: { username: 'pegawai@inix.com', password: 'Pegawai@123!' },
  };

  export const TEST_PEGAWAI = {
    valid: { nip: 'NIP-2026-AUTO', nama_lengkap: 'Auto Test', jabatan: 'QA', status: 'aktif' },
    missingNip: { nip: '', nama_lengkap: 'No NIP', jabatan: 'Staff', status: 'aktif' },
    duplicateNip: { nip: 'NIP-2025-001', nama_lengkap: 'Duplikat', jabatan: 'Staff', status: 'aktif' },
  };
  ```

- **Factory pattern — data dinamis:**
  ```typescript
  // fixtures/pegawai.factory.ts
  export function createPegawaiData(overrides: Partial<Pegawai> = {}): Pegawai {
    return {
      nip: `NIP-TEST-${Date.now()}`,
      nama_lengkap: `Test User ${Math.floor(Math.random() * 1000)}`,
      jabatan: 'Staff QA',
      status: 'aktif',
      ...overrides,
    };
  }
  ```

- **Cleanup strategy:**
  ```typescript
  test.afterEach(async ({ request }) => {
    // Cleanup: hapus data test yang dibuat
    if (createdPegawaiId) {
      await request.delete(`/api/pegawai/${createdPegawaiId}/`, {
        headers: { Authorization: `Bearer ${adminToken}` }
      });
    }
  });
  ```

**Slide 50–51: Rangkuman & Transisi ke Lab**
- Recap:
  1. Playwright = UI + API automation dalam 1 framework
  2. POM = locator & aksi terpusat per halaman → maintainable
  3. Schema validation (Zod/JSON Schema) = verifikasi struktur API response
  4. Test data: fixtures (statis) + factory (dinamis) + cleanup
- "Selanjutnya: Lab — Anda akan membangun Playwright project lengkap untuk PT INIX"

**[E] EXPECTATION:**
- Format: konten teks per slide, siap copy ke PPTX
- Setiap slide: **Judul**, **Bullet/Code** (maks 6 bullet atau 1 code block), **Speaker notes**
- Semua kode Playwright runnable — menggunakan endpoint & data PT INIX
- Code harus clean code, POM best practice, anti-flaky
- Bahasa Indonesia formal; kode Inggris
- Total: ~51 slide (3 sesi)

**[N] NARROWING:**
- Fokus Playwright — jangan membahas Cypress/Selenium secara mendalam (cukup tabel perbandingan)
- Jangan membahas mobile testing (Appium) atau desktop testing
- Contract Testing: cukup konsep — jangan implementasi Pact penuh
- Jangan membahas CI/CD pipeline (itu Fase 5) — cukup mention Allure bisa di-integrate
- Schema validation: fokus Zod (TypeScript-native) — JSON Schema sebagai alternatif
- Jangan membahas visual regression testing (Playwright snapshot) secara mendalam

---

## BAGIAN B: Prompt untuk Lab Hands-on Fase 4

> **Instruksi:** Copy-paste prompt ini ke AI untuk menghasilkan panduan Lab 4.

---

### PROMPT LAB FASE 4

**[R] ROLE:**
Bertindaklah sebagai **Principal Test Automation Engineer & Lab Instructor** yang membuat panduan lab membangun automation framework dari nol. Lab harus menghasilkan project production-ready: POM architecture, UI + API test, schema validation, reporting. Kode harus clean dan anti-flaky.

**[I] INPUT:**
Buat panduan **Lab 4: Automation UI & API — Playwright + POM + Allure** untuk Aplikasi Kepegawaian PT INIX.

- **Durasi:** 120 menit
- **Peserta:** QA Junior-Mid yang sudah menguasai TypeScript dasar (Fase 3)
- **Tools:**
  - Node.js v20+, VS Code, Git
  - Playwright (install saat lab)
  - Allure Commandline (install saat lab)
  - Aplikasi PT INIX running di `http://localhost:8000`
- **Halaman UI yang akan diautomasi:** Login, Dashboard, Data Pegawai (list + form), Pengajuan Cuti
- **API endpoint yang akan di-test:** login, GET/POST/PUT/DELETE pegawai, POST/PATCH cuti
- **Credential:** admin/hr/manager/pegawai (lihat STUDI_KASUS_INIX.md)

**[S] STEPS:**
Susun panduan lab:

**Bagian 0: Setup Project (15 menit)**
1. Inisialisasi Playwright project:
   ```bash
   mkdir inix-playwright && cd inix-playwright
   npm init playwright@latest
   ```
2. Install dependencies tambahan:
   ```bash
   npm install --save-dev allure-playwright zod
   npm install --save-dev @types/node
   ```
3. Konfigurasi `playwright.config.ts` — baseURL, trace, screenshot, reporter
4. Buat struktur folder POM:
   ```
   inix-playwright/
   ├── pages/
   │   ├── base.page.ts
   │   ├── login.page.ts
   │   ├── pegawai-list.page.ts
   │   └── pegawai-form.page.ts
   ├── tests/
   │   ├── ui/
   │   │   ├── login.spec.ts
   │   │   └── pegawai.spec.ts
   │   └── api/
   │       ├── auth.api.spec.ts
   │       └── pegawai.api.spec.ts
   ├── fixtures/
   │   ├── test-data.ts
   │   └── pegawai.factory.ts
   ├── schemas/
   │   └── pegawai.schema.ts
   ├── playwright.config.ts
   └── package.json
   ```
5. Verifikasi: `npx playwright test` — default test berjalan

**Bagian 1: Page Object Model (25 menit)**
6. Buat `pages/base.page.ts` — navigate, waitForPageLoad, getTitle
7. Buat `pages/login.page.ts` — locators (username, password, button, error), methods (goto, login, expectSuccess, expectError)
8. Buat `pages/pegawai-list.page.ts` — locators (tabel, tambah button, search), methods (goto, clickTambah, clickEdit, clickHapus, expectVisible, expectNotVisible)
9. Buat `pages/pegawai-form.page.ts` — locators (NIP, Nama, Jabatan, Status, Simpan), methods (fillForm, submitForm, expectSuccess)
10. Berikan kode lengkap per file — semua locator menggunakan best practice (getByRole, getByLabel, getByTestId)

**Bagian 2: UI Test Cases (25 menit)**
11. Buat `tests/ui/login.spec.ts` — 3 test:
    - Login sukses (HR) → redirect dashboard
    - Login gagal (password salah) → error message
    - Login field kosong → validation error
12. Buat `tests/ui/pegawai.spec.ts` — 4 test (semua pakai POM, login di beforeEach):
    - Lihat daftar pegawai → tabel terlihat
    - Tambah pegawai baru → data muncul di tabel
    - Edit pegawai → data terupdate
    - Hapus pegawai → data hilang dari tabel
13. Jalankan: `npx playwright test tests/ui/ --headed` → verifikasi semua PASS
14. **Screenshot** test results

**Bagian 3: API Test Cases (20 menit)**
15. Buat `fixtures/test-data.ts` — credentials & test data constants
16. Buat `fixtures/pegawai.factory.ts` — factory function createPegawaiData
17. Buat `schemas/pegawai.schema.ts` — Zod schema PegawaiSchema, PegawaiListSchema
18. Buat `tests/api/auth.api.spec.ts` — 3 test:
    - Login valid → 200 + access_token
    - Login invalid → 401
    - Refresh token → 200 + new access_token
19. Buat `tests/api/pegawai.api.spec.ts` — 4 test:
    - GET list → 200 + schema valid
    - POST create → 201 + schema valid + data match
    - POST tanpa auth → 401
    - POST sebagai Pegawai (bukan HR) → 403
20. Jalankan: `npx playwright test tests/api/` → verifikasi semua PASS

**Bagian 4: Trace Viewer & Allure Report (15 menit)**
21. Jalankan test dengan trace: `npx playwright test --trace on`
22. Buka trace: `npx playwright show-trace test-results/*/trace.zip`
23. Eksplorasi Trace Viewer: screenshot per step, network log, console log
24. Generate Allure report:
    ```bash
    npx allure generate allure-results --clean -o allure-report
    npx allure open allure-report
    ```
25. **Screenshot** Allure dashboard

**Bagian 5: Git & Finalisasi (20 menit)**
26. Buat `.gitignore` (node_modules, test-results, allure-results, allure-report)
27. Git init, commit, push ke GitHub repository `inix-playwright`
28. Buat branch `feature/automation-suite`, push, buat PR
29. **Screenshot** PR + Allure report

**[E] EXPECTATION:**
- Format: Markdown handout peserta
- Kode lengkap per file — runnable, clean code, POM, anti-flaky
- **Checklist Keberhasilan:**
  - [ ] Playwright project terbuat dengan struktur POM
  - [ ] 3 Page Object classes (LoginPage, PegawaiListPage, PegawaiFormPage)
  - [ ] 7 UI test cases (3 login + 4 pegawai) — semua PASS
  - [ ] 7 API test cases (3 auth + 4 pegawai CRUD) — semua PASS
  - [ ] Zod schema validation diterapkan di API test
  - [ ] Test data menggunakan factory pattern
  - [ ] Trace recording berhasil dibuka di Trace Viewer
  - [ ] Allure report berhasil di-generate dan dibuka
  - [ ] Project di-push ke GitHub dengan PR
  - [ ] Semua locator mengikuti best practice (tidak ada hard wait, tidak ada fragile selector)
- **Reference Answer:** kode lengkap semua file + expected test output
- Bahasa Indonesia formal, kode Inggris
- Selesai dalam 120 menit

**[N] NARROWING:**
- HANYA Playwright + TypeScript — bukan Cypress/Selenium
- POM pattern wajib — jangan tulis locator langsung di test file
- Jangan setup CI/CD di lab ini (itu Fase 5)
- Jangan visual regression / screenshot comparison
- Schema validation dengan Zod — bukan JSON Schema (lebih simple)
- Test data cleanup via API afterEach — bukan langsung SQL
- Asumsikan aplikasi PT INIX running tanpa error
- Selesai dalam 120 menit — jika waktu kurang, API test bagian opsional

---

## BAGIAN C: Prompt AI Template untuk Integrasi AI di Fase 4

> **Instruksi:** Template prompt siap pakai yang didemonstrasikan dan digunakan peserta.

---

### PROMPT AI TEMPLATE #1 — Generate POM Class dari HTML Halaman

```
Kamu adalah Playwright Automation Expert. Buatkan Page Object Model class dari HTML halaman berikut.

HTML halaman Data Pegawai — Form (Aplikasi PT INIX):
```html
<div class="container" data-testid="pegawai-form">
  <h2>Tambah Pegawai Baru</h2>
  <form>
    <div class="form-group">
      <label for="nip">NIP</label>
      <input type="text" id="nip" name="nip" placeholder="Masukkan NIP" required />
    </div>
    <div class="form-group">
      <label for="nama">Nama Lengkap</label>
      <input type="text" id="nama" name="nama_lengkap" placeholder="Masukkan nama" required />
    </div>
    <div class="form-group">
      <label for="jabatan">Jabatan</label>
      <input type="text" id="jabatan" name="jabatan" placeholder="Masukkan jabatan" required />
    </div>
    <div class="form-group">
      <label for="status">Status</label>
      <select id="status" name="status">
        <option value="aktif">Aktif</option>
        <option value="nonaktif">Nonaktif</option>
      </select>
    </div>
    <button type="submit" class="btn-primary">Simpan</button>
    <button type="button" class="btn-secondary">Batal</button>
    <div class="alert alert-success" data-testid="success-message" style="display:none">
      Data berhasil disimpan!
    </div>
    <div class="alert alert-danger" data-testid="error-message" style="display:none">
    </div>
  </form>
</div>
```

Buatkan:
1. PegawaiFormPage class yang extends BasePage
2. Gunakan locator best practice: getByLabel > getByRole > getByTestId
3. Method: goto(), fillForm(data), submitForm(), expectSuccess(), expectError(msg)
4. Interface PegawaiFormData untuk parameter fillForm
5. Anti-flaky: waitFor setelah submit sebelum assertion
6. JSDoc comment setiap method
7. Clean code, TypeScript strict

Output: file TypeScript lengkap siap digunakan.
```

### PROMPT AI TEMPLATE #2 — Scaffold Test Case Playwright dari User Story

```
Kamu adalah Senior Playwright Test Automation Engineer. Buatkan test spec dari User Story berikut.

User Story:
US-004: As a Pegawai, I want to submit a leave request, so that I can take my planned leave.
Acceptance Criteria:
- Tanggal selesai harus ≥ tanggal mulai
- Pengajuan berstatus default 'PENDING'
- Alasan wajib diisi
- Hanya role Pegawai yang bisa mengajukan

Konteks teknis:
- Halaman: /cuti/ajukan
- API: POST /api/cuti/ — Body: { tgl_mulai, tgl_selesai, alasan }
- Auth: Bearer JWT (role Pegawai)
- Existing POM: LoginPage, CutiFormPage (sudah ada)

Tugas:
1. Buatkan test spec `cuti.spec.ts` dengan test cases:
   - Positive: ajukan cuti valid → status PENDING
   - Negative: tanggal selesai < tanggal mulai → error
   - Negative: alasan kosong → error
   - Negative: login sebagai Manajer (bukan Pegawai) → tidak bisa submit / unauthorized
   - Edge: tanggal mulai = hari ini → diterima
   - Edge: tanggal mulai = kemarin → error

2. Gunakan Page Object Model (import dari ../pages/)
3. Login di beforeEach, cleanup di afterEach
4. Factory function untuk data cuti
5. Assertion jelas dan deskriptif

Output: file TypeScript lengkap (.spec.ts)
```

### PROMPT AI TEMPLATE #3 — Self-Healing Selector

```
Kamu adalah Playwright Debugging Expert. Locator saya gagal setelah developer mengubah HTML. Tolong bantu perbaiki.

Error:
```
Error: locator.click: Error: strict mode violation:
  locator('button.btn-primary.submit-btn') resolved to 3 elements:
    1) <button class="btn-primary submit-btn">Simpan</button>
    2) <button class="btn-primary submit-btn">Update</button>
    3) <button class="btn-primary submit-btn">Submit Cuti</button>
```

Konteks:
- Halaman: Form Tambah Pegawai
- Yang saya mau klik: tombol "Simpan" (bukan Update atau Submit Cuti)
- HTML sebelumnya: hanya ada 1 button.btn-primary
- HTML sekarang: ada 3 button.btn-primary di halaman

Tugas:
1. Jelaskan mengapa error ini terjadi
2. Berikan 3 alternatif locator yang lebih stabil, urutkan dari paling recommended:
   - Opsi 1: getByRole
   - Opsi 2: getByTestId (sarankan atribut data-testid yang perlu developer tambahkan)
   - Opsi 3: Scoped locator (parent → child)
3. Berikan rekomendasi ke developer: atribut apa yang sebaiknya ditambahkan ke HTML untuk testability
4. Buat checklist "Locator Stability Audit" — 5 hal yang harus dicek saat locator gagal
```

### PROMPT AI TEMPLATE #4 — Playwright Codegen Tips

```
Kamu adalah Playwright Instructor. Berikan panduan step-by-step menggunakan Playwright Codegen untuk bootstrap test Aplikasi Kepegawaian PT INIX.

Skenario yang mau di-record:
1. Login sebagai HR
2. Navigasi ke halaman Data Pegawai
3. Klik Tambah Pegawai
4. Isi form (NIP, Nama, Jabatan, Status)
5. Klik Simpan
6. Verifikasi data muncul di tabel

Tugas:
1. Berikan command untuk menjalankan Codegen:
   `npx playwright codegen http://localhost:8000/login`
2. Jelaskan: bagaimana cara berinteraksi dengan Codegen recorder
3. Tunjukkan: output yang dihasilkan Codegen (contoh kode)
4. PENTING: daftar hal yang HARUS direfactor setelah Codegen generate kode:
   - Locator fragile → ganti ke getByRole/getByLabel
   - Hard-coded data → ganti ke fixtures/factory
   - Flat structure → refactor ke POM
   - Assertion generik → assertion spesifik
5. Tunjukkan: before (kode Codegen mentah) vs after (kode refactored + POM)
```

---

## Checklist Output TAHAP 5

- [ ] Prompt materi slide PPTX (~51 slide) — Playwright (setup, config, test anatomy, perintah CLI), Locator Strategy (7 level prioritas + anti-pattern + Codegen), POM (BasePage, LoginPage, PegawaiListPage + test file menggunakan POM), Flaky Test (6 penyebab + solusi + anti-pattern code), Trace Viewer & Allure Report, API Automation (request context, 3 contoh test, UI vs API matrix), Schema Validation (Zod + JSON Schema + perbandingan), Contract Testing (konsep Pact), Test Data (fixtures + factory + cleanup)
- [ ] Prompt Lab 4 (120 menit) — Setup Playwright, 3 POM classes, 7 UI test, 7 API test + Zod schema, Trace Viewer, Allure report, Git push + PR
- [ ] 4 AI Prompt Template (generate POM dari HTML, scaffold test dari US, self-healing selector, Codegen refactor tips)
- [ ] Semua kode runnable, POM pattern, anti-flaky, konteks PT INIX
- [ ] Reference Answer lengkap
- [ ] Bahasa Indonesia formal, kode Inggris
