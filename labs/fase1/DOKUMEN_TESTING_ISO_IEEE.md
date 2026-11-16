# TEST PLAN & TEST SPECIFICATION DOCUMENT
## Berdasarkan Standar ISO/IEC/IEEE 29119 & IEEE Std 829-2008

**Nama Proyek:** Sistem Informasi Kepegawaian PT INIX  
**Versi Dokumen:** 1.0  
**Tanggal:** 16 November 2026  
**Dokumen Referensi:** [DOKUMEN_FRD_(SRS)_FINAL.md](file:///c:/Users/FaizalDamarRamadhan/Downloads/softwaretesting/labs/fase1/DOKUMEN_FRD_(SRS)_FINAL.md)  
**Status:** Approved / Ready for Test Execution  

---

## 1. Rencana Pengujian (Test Plan — ISO/IEC/IEEE 29119-3 / IEEE Std 829)

### 1.1 Test Plan Identifier
`TP-INIX-2026-V1.0`

### 1.2 Pengantar & Tujuan (Introduction & Purpose)
Dokumen ini mendefinisikan strategi, cakupan, sumber daya, lingkungan pengujian, matriks risiko, dan spesifikasi kasus uji (test case specification) untuk memverifikasi kesesuaian Aplikasi Kepegawaian PT INIX terhadap kebutuhan fungsional (FR-001 s.d. FR-007) dan non-fungsional (NFR-001 s.d. NFR-004) pada [DOKUMEN_FRD_(SRS)_FINAL.md](file:///c:/Users/FaizalDamarRamadhan/Downloads/softwaretesting/labs/fase1/DOKUMEN_FRD_(SRS)_FINAL.md).

### 1.3 Item Pengujian (Test Items)
- **Modul Autentikasi & RBAC:** Login JWT, validasi kredensial, role permissions (Admin, HR, Manajer, Pegawai).
- **Modul Data Pegawai:** Operasi CRUD, validasi keunikan NIP, mandatory field checks.
- **Modul Pengajuan Cuti:** Permohonan cuti, validasi durasi & batas kuota tahunan (12 hari), alur approval/rejection atasan.
- **API Endpoints (10 Endpoints):** Integrasi REST API, status code HTTP, payload JSON.
- **Aspek Non-Fungsional:** Latensi beban performa, proteksi injeksi keamanan (SQLi & XSS), kompatibilitas lintas peramban.

### 1.4 Fitur yang Diuji (Features to be Tested)
- Verifikasi autentikasi kredensial valid dan penolakan akun tidak aktif / password salah (FR-001, FR-002).
- Verifikasi hak akses berbasis role (RBAC) pada antarmuka web dan routing API backend (FR-007).
- Verifikasi fungsi CRUD data profil pegawai beserta batasan integritas database (FR-003, FR-004).
- Verifikasi alur logika bisnis pengajuan dan persetujuan cuti (FR-005, FR-006).
- Pengujian performa endpoint (≤ 500ms P95 pada 50 concurrent users) (NFR-001).
- Pengujian kerentanan keamanan SQL Injection dan Cross-Site Scripting (NFR-002).
- Pengujian antarmuka pada peramban Chrome, Firefox, dan Edge (NFR-003).
- Pengujian keamanan penyimpanan password terenkripsi dan token expiry (NFR-004).

### 1.5 Fitur yang Tidak Diuji (Features Not to be Tested)
- Fitur penggajian / payroll (di luar lingkup rilis v1.0).
- Fitur absensi / presensi harian berbasis GPS/Biometrik (belum diimplementasikan).
- Kompatibilitas browser legacy (Internet Explorer).

### 1.6 Pendekatan Pengujian (Testing Approach & Strategy)
1. **Black-Box Testing Techniques:**
   - Equivalence Partitioning (EP) untuk validasi rentang tanggal dan input field.
   - Boundary Value Analysis (BVA) untuk kuota cuti tahunan (0, 1, 11, 12, 13 hari).
   - Decision Table Testing untuk matriks hak akses otorisasi (RBAC).
   - State Transition Testing untuk siklus status cuti (`PENDING` -> `APPROVED` / `REJECTED`).
2. **Levels of Testing:**
   - API / Integration Testing via Postman / REST Client.
   - UI End-to-End (E2E) Testing via Playwright.
   - Performance Testing via k6.
   - Security Testing via OWASP ZAP & DAST.

### 1.7 Kriteria Lulus / Gagal (Pass/Fail Criteria)
- **Pass:** 100% test case berprioritas High/Critical berhasil dieksekusi tanpa kegagalan yang memblokir alur bisnis.
- **Fail:** Terdapat minimal satu cacat bernilai Severity Critical/High (misal: kebocoran otorisasi role, SQLi, atau perhitungan kuota salah).

### 1.8 Kriteria Penangguhan & Dimulainya Kembali (Suspension & Resumption Criteria)
- **Suspensi:** Server backend/database mengalami down sistemik atau environment testing tidak dapat diakses.
- **Resumsi:** Layanan Docker Compose pulih dan endpoint autentikasi merespon HTTP 200 normal.

---

## 2. Lingkungan Pengujian (Test Environment & Tools)

| Komponen | Spesifikasi | Keterangan |
|---|---|---|
| **Base URL Testing** | `http://localhost:8000` / `http://staging.inix.local` | Docker Compose Instance |
| **Backend Stack** | Node.js v26.13.0, Express.js v5.3.0, Sequelize v6.37.8 | REST API RESTful |
| **Frontend Stack** | React v19.3.0 (Vite SPA) | Web Client |
| **Database** | MySQL 8.0 | Skema: `users`, `pegawai`, `cuti` |
| **Automation & Tools** | Postman, Playwright, k6, OWASP ZAP | Execution Tools |

### Akun Uji (Test Credentials)
- **Admin:** `admin@inix.com` / `Admin@123!`
- **HR:** `hr@inix.com` / `Hr@123!`
- **Manajer:** `manager@inix.com` / `Manager@123!`
- **Pegawai:** `pegawai@inix.com` / `Pegawai@123!`

---

## 3. Matriks Risiko Pengujian (Test Risk Assessment Matrix)

| ID Risiko | Area / Modul | Potensi Kegagalan | L (1-3) | I (1-3) | Skor | Mitigasi Pengujian |
|---|---|---|---|---|---|---|
| **RSK-01** | Autentikasi | Kegagalan validasi JWT memungkinkan pengalihan role (Privilege Escalation). | 2 | 3 | **6 (High)** | Uji RBAC Matrix ketat di level API endpoint tanpa bergantung pada UI. |
| **RSK-02** | Pengajuan Cuti | Logic race condition/kuota terpotong berlebih atau melewati batas 12 hari. | 2 | 3 | **6 (High)** | Boundary Value Analysis (0, 1, 12, 13) dan concurrent submit test. |
| **RSK-03** | Data Pegawai | Injeksi SQL pada filter pencarian atau parameter NIP pegawai. | 2 | 3 | **6 (High)** | Security testing injection payloads via Postman & OWASP ZAP. |
| **RSK-04** | Data Pegawai | Duplikasi nomor NIP akibat validasi backend tidak locking transaksi. | 2 | 2 | **4 (Med)** | Negative test duplicate key pada POST `/api/pegawai/`. |
| **RSK-05** | Autentikasi | Kredensial password tersimpan plain-text jika middleware hashing gagal terpanggil. | 1 | 3 | **3 (Med)** | SQL inspection pasca-insert user baru. |
| **RSK-06** | UI Compatibility | Komponen form tanggal cuti rusak pada browser Firefox/WebKit. | 2 | 1 | **2 (Low)** | Cross-browser visual testing via Playwright matrix. |

---

## 4. Spesifikasi Kasus Uji (Test Case Specification — IEEE Std 829)

### 4.1 Modul Autentikasi & RBAC (FR-001, FR-002, FR-007, US-001)

#### TC-AUTH-001: Login Berhasil dengan Kredensial Valid
- **Traceability:** FR-001, US-001
- **Prioritas:** High
- **Pre-kondisi:** Akun pegawai aktif tersedia di database (`is_active = 1`).
- **Langkah-langkah:**
  1. Buka antarmuka login web atau kirim POST `/api/auth/login/`.
  2. Masukkan username: `pegawai@inix.com` dan password: `Pegawai@123!`.
  3. Submit form / eksekusi request.
- **Expected Result:**
  - HTTP 200 OK.
  - Response body mengembalikan payload JSON berisi `access_token` JWT valid.
  - Pengguna dialihkan ke Dashboard Pegawai.

#### TC-AUTH-002: Login Gagal dengan Password Salah
- **Traceability:** FR-002, US-001
- **Prioritas:** High
- **Pre-kondisi:** Akun terdaftar di database.
- **Langkah-langkah:**
  1. Masukkan username: `pegawai@inix.com` dan password: `WrongPassword123!`.
  2. Submit form.
- **Expected Result:**
  - HTTP 401 Unauthorized.
  - Muncul pesan error informatif: "Kredensial tidak valid".
  - Tidak menghasilkan token JWT.

#### TC-AUTH-003: Login Gagal Akun Non-Aktif
- **Traceability:** FR-002
- **Prioritas:** High
- **Pre-kondisi:** Akun dengan status `is_active = 0` telah disiapkan.
- **Langkah-langkah:**
  1. Masukkan kredensial akun non-aktif.
  2. Submit form.
- **Expected Result:**
  - HTTP 401 Unauthorized.
  - Pesan error: "Akun dinonaktifkan. Hubungi administrator".

#### TC-AUTH-004: Validasi RBAC Pegawai Mengakses Endpoint Hapus Pegawai
- **Traceability:** FR-007, US-003
- **Prioritas:** High
- **Pre-kondisi:** Memiliki access token dengan role `Pegawai`.
- **Langkah-langkah:**
  1. Kirim request HTTP DELETE ke `/api/pegawai/1`.
  2. Sertakan Header `Authorization: Bearer <Token_Pegawai>`.
- **Expected Result:**
  - HTTP 403 Forbidden.
  - Operasi penghapusan ditolak; data pegawai tidak terhapus.

---

### 4.2 Modul Data Pegawai (FR-003, FR-004, US-002, US-003)

#### TC-EMP-001: Tambah Pegawai Baru Berhasil oleh HR/Admin
- **Traceability:** FR-003, US-002
- **Prioritas:** High
- **Pre-kondisi:** Login dengan akun role `HR` atau `Admin`.
- **Langkah-langkah:**
  1. Kirim POST ke `/api/pegawai/` dengan payload:
     ```json
     {
       "nip": "INIX-2026-001",
       "nama_lengkap": "Budi Santoso",
       "jabatan": "Software QA Engineer",
       "status": "Tetap"
     }
     ```
- **Expected Result:**
  - HTTP 201 Created.
  - Data tersimpan di tabel `pegawai` MySQL dengan `kuota_cuti` default 12.
  - Data baru muncul pada daftar pegawai di UI.

#### TC-EMP-002: Validasi Duplikasi NIP (Negative Test)
- **Traceability:** FR-004, US-002
- **Prioritas:** High
- **Pre-kondisi:** NIP `INIX-2026-001` sudah terdaftar.
- **Langkah-langkah:**
  1. Kirim request POST `/api/pegawai/` dengan NIP sama (`INIX-2026-001`).
- **Expected Result:**
  - HTTP 400 Bad Request atau HTTP 409 Conflict.
  - Pesan error validasi: "NIP sudah terdaftar dalam sistem".

#### TC-EMP-003: Validasi Mandatory Fields Kosong
- **Traceability:** FR-004
- **Prioritas:** High
- **Pre-kondisi:** Autentikasi HR/Admin.
- **Langkah-langkah:**
  1. Kirim POST `/api/pegawai/` dengan string kosong pada field `nama_lengkap` dan `jabatan`.
- **Expected Result:**
  - HTTP 400 Bad Request.
  - Respons menampilkan pesan validasi field wajib diisi.

#### TC-EMP-004: Hapus Data Pegawai oleh Role Admin
- **Traceability:** FR-003, US-003
- **Prioritas:** High
- **Pre-kondisi:** Login sebagai Admin, data pegawai target tersedia.
- **Langkah-langkah:**
  1. Pilih tombol hapus pegawai pada UI dan konfirmasi dialog modal.
  2. Kirim DELETE ke `/api/pegawai/{id}/` menggunakan Bearer token Admin.
- **Expected Result:**
  - HTTP 200 OK atau 204 No Content.
  - Record pegawai terhapus dari tabel database.

---

### 4.3 Modul Pengajuan Cuti (FR-005, FR-006, US-004, US-005)

#### TC-LEAVE-001: Pengajuan Cuti Valid Sesuai Kuota
- **Traceability:** FR-005, US-004
- **Prioritas:** High
- **Pre-kondisi:** Pegawai memiliki kuota cuti 12 hari.
- **Langkah-langkah:**
  1. Kirim POST ke `/api/cuti/` dengan data:
     - `tgl_mulai`: `2026-12-01`
     - `tgl_selesai`: `2026-12-03` (durasi 3 hari)
     - `alasan`: `Keperluan keluarga`
- **Expected Result:**
  - HTTP 201 Created.
  - Data pengajuan tersimpan di database dengan kolom `status = 'PENDING'`.

#### TC-LEAVE-002: Pengajuan Cuti Melebihi Sisa Kuota (BVA Test)
- **Traceability:** FR-005, US-004
- **Prioritas:** High
- **Pre-kondisi:** Sisa kuota cuti pegawai = 2 hari.
- **Langkah-langkah:**
  1. Pegawai mengajukan cuti dengan durasi 3 hari.
- **Expected Result:**
  - HTTP 400 Bad Request.
  - Error: "Jumlah hari cuti melebihi sisa kuota yang tersedia".
  - Status tidak tersimpan.

#### TC-LEAVE-003: Validasi Tanggal Selesai Lebih Awal dari Tanggal Mulai
- **Traceability:** FR-005, US-004
- **Prioritas:** High
- **Pre-kondisi:** Autentikasi role Pegawai.
- **Langkah-langkah:**
  1. Input `tgl_mulai`: `2026-12-10` dan `tgl_selesai`: `2026-12-05`.
  2. Klik submit permohonan cuti.
- **Expected Result:**
  - Validasi form frontend menolak pengiriman; atau API mengembalikan HTTP 400.
  - Pesan error: "Tanggal selesai tidak boleh lebih awal dari tanggal mulai".

#### TC-LEAVE-004: Approval Cuti oleh Manajer
- **Traceability:** FR-006, US-005
- **Prioritas:** High
- **Pre-kondisi:** Terdapat record cuti berstatus `PENDING`. Akun login role `Manajer`.
- **Langkah-langkah:**
  1. Manajer membuka daftar pengajuan cuti.
  2. Kirim PATCH `/api/cuti/{id}/status/` dengan payload:
     ```json
     { "status": "APPROVED" }
     ```
- **Expected Result:**
  - HTTP 200 OK.
  - Status cuti berubah menjadi `APPROVED`.
  - Kuota cuti tahunan pegawai berkurang secara proporsional di database.

#### TC-LEAVE-005: Rejection Cuti oleh Manajer
- **Traceability:** FR-006, US-005
- **Prioritas:** Medium
- **Pre-kondisi:** Terdapat record cuti berstatus `PENDING`.
- **Langkah-langkah:**
  1. Kirim PATCH `/api/cuti/{id}/status/` dengan payload:
     ```json
     { "status": "REJECTED" }
     ```
- **Expected Result:**
  - HTTP 200 OK.
  - Status cuti menjadi `REJECTED`.
  - Kuota cuti pegawai tidak mengalami pengurangan.

---

### 4.4 Pengujian Kebutuhan Non-Fungsional (NFR-001 s.d. NFR-004)

#### TC-NFR-PERF-001: Beban Kinerja Endpoint Login & Master Pegawai
- **Traceability:** NFR-001
- **Prioritas:** High
- **Kategori:** Performance Testing (k6)
- **Kondisi Pengujian:** 50 concurrent virtual users selama 5 menit.
- **Target Endpoint:** POST `/api/auth/login/` dan GET `/api/pegawai/`.
- **Kriteria Lulus:** P95 response time ≤ 500ms; Error rate < 1%.

#### TC-NFR-SEC-001: SQL Injection & XSS Vulnerability Scanning
- **Traceability:** NFR-002
- **Prioritas:** High
- **Kategori:** Security Testing (OWASP ZAP)
- **Kondisi Pengujian:** Payload injeksi standar pada field form login, parameter NIP, dan filter GET.
- **Kriteria Lulus:** 0 alert bernilai High/Medium vulnerability pada laporan OWASP ZAP.

#### TC-NFR-COMPAT-001: Cross-Browser Compatibility Test
- **Traceability:** NFR-003
- **Prioritas:** Medium
- **Kategori:** Compatibility (Playwright WebKit, Chromium, Firefox)
- **Kondisi Pengujian:** Eksekusi flow E2E login s.d. pengajuan cuti di 3 browser engine.
- **Kriteria Lulus:** 100% fungsionalitas UI render konsisten tanpa layout break atau console script error.

#### TC-NFR-SEC-002: Enkripsi Password & Expiry Token JWT
- **Traceability:** NFR-004
- **Prioritas:** High
- **Kategori:** Security Audit
- **Langkah-langkah:**
  1. Periksa kolom `password` pada tabel `users` di database MySQL.
  2. Decode isi payload token JWT dan verifikasi keberadaan field `exp`.
  3. Gunakan token yang sudah kedaluwarsa untuk request endpoint terlindung.
- **Expected Result:**
  - Password tersimpan dalam hash bcrypt (bukan plain-text).
  - Akses menggunakan expired token menghasilkan HTTP 401 Token Expired.

---

## 5. Matriks Keterlacakan Pengujian (Test Traceability Matrix — RTM)

| Requirement ID | Deskripsi Singkat | Test Case ID | Test Level | Status Kesiapan |
|---|---|---|---|---|
| **FR-001** | Login user & generate JWT | TC-AUTH-001 | API / UI | Ready |
| **FR-002** | Error handling login gagal & akun nonaktif | TC-AUTH-002, TC-AUTH-003 | API / UI | Ready |
| **FR-003** | CRUD Master Data Pegawai | TC-EMP-001, TC-EMP-004 | API / UI / DB | Ready |
| **FR-004** | Validasi NIP unik & mandatory fields | TC-EMP-002, TC-EMP-003 | API / DB | Ready |
| **FR-005** | Pengajuan cuti & validasi kuota 12 hari | TC-LEAVE-001, TC-LEAVE-002, TC-LEAVE-003 | API / UI / Logic | Ready |
| **FR-006** | Approve / Reject status cuti | TC-LEAVE-004, TC-LEAVE-005 | API / Logic | Ready |
| **FR-007** | Otorisasi RBAC multi-role | TC-AUTH-004 | Security / API | Ready |
| **NFR-001** | Performance ≤ 500ms pada 50 user | TC-NFR-PERF-001 | Load Testing | Ready |
| **NFR-002** | Proteksi OWASP Top 10 (SQLi/XSS) | TC-NFR-SEC-001 | Security | Ready |
| **NFR-003** | Kompatibilitas lintas browser | TC-NFR-COMPAT-001 | Compatibility | Ready |
| **NFR-004** | Hash password & token expiry | TC-NFR-SEC-002 | Security / DB | Ready |

---

## 6. Template Laporan Cacat Pengujian (Incident / Bug Report — IEEE Std 829)

```markdown
### [BUG-ID]: [Judul Singkat Masalah]

- **Severity:** Critical / Major / Moderate / Minor
- **Priority:** High / Medium / Low
- **Terkait Requirement:** FR-xxx / NFR-xxx
- **Environment:** Staging / Local Dev (Docker, Chrome v120)
- **Akun Pengujian:** [Role / Email Akun]

#### Deskripsi
Ringkasan singkat perilaku salah yang ditemukan dalam aplikasi.

#### Langkah Reproduksi
1. Buka halaman ...
2. Masukkan data ...
3. Klik tombol ...

#### Expected Result
Hasil yang seharusnya terjadi sesuai dokumen spesifikasi.

#### Actual Result
Hasil aktual yang terjadi di sistem (disertai status code HTTP atau error UI).

#### Bukti Pendukung (Evidence)
- Screenshot UI / Log Console / Payload Response JSON.
```
