# Lab 1: Desain Test Case & Bug Report — Aplikasi Kepegawaian PT INIX
## Panduan Hands-On Praktik Manual Testing: EP, BVA, Decision Table, State Transition, dan Bug Reporting

---

## Informasi Lab

| Atribut | Keterangan |
|---|---|
| **Mata Pelatihan** | Software Quality Assurance & Testing Foundation |
| **Fase** | Fase 1 — Fondasi & Manual Testing |
| **Durasi Total** | 60 Menit |
| **Target Peserta** | QA Engineer Junior / Mid-Level |
| **Tools Praktik** | Spreadsheet (Google Sheets / Microsoft Excel / LibreOffice Calc) |
| **Target Aplikasi** | Aplikasi Kepegawaian PT INIX (Node.js, Express, Sequelize, React, MySQL) |
| **Deliverable** | 1 File Spreadsheet: `Lab1_TestCase_BugReport_[NAMA].xlsx` (20 Test Case + 3 Bug Report) |

### Tujuan Pembelajaran (*Learning Objectives*)
Setelah menyelesaikan lab mandiri ini, peserta diharapkan mampu:
1. **Menerapkan Teknik Black-Box EP & BVA (LO1):** Merancang test case input form login dengan pemisahan partisi ekuivalen (*Equivalence Partitioning*) dan batas nilai kritis (*Boundary Value Analysis*).
2. **Merancang Decision Table Testing (LO2):** Mengurai logika bisnis bercabang pengajuan cuti ke dalam tabel keputusan dan mengonversinya menjadi kumpulan test case deterministik.
3. **Merancang State Transition Testing (LO3):** Memetakan siklus hidup status data cuti (*PENDING, APPROVED, REJECTED*) dan menguji transisi valid serta penolakan transisi ilegal.
4. **Menulis Bug Report Standar Industri (LO4):** Mendokumentasikan cacat perangkat lunak secara profesional menggunakan 12 atribut standar pelaporan bug.

---

## Ringkasan Alokasi Waktu Lab (60 Menit)

```
┌────────────────────────────────────────────────────────────────────────┐
│ Bagian 0: Persiapan & Konfigurasi Lembar Kerja (5 Menit)               │
├────────────────────────────────────────────────────────────────────────┤
│ Bagian 1: Desain Test Case Login — EP & BVA (20 Menit)                │
├────────────────────────────────────────────────────────────────────────┤
│ Bagian 2: Desain Test Case Cuti — Decision Table (15 Menit)            │
├────────────────────────────────────────────────────────────────────────┤
│ Bagian 3: Desain Test Case Cuti — State Transition (10 Menit)          │
├────────────────────────────────────────────────────────────────────────┤
│ Bagian 4: Penulisan Bug Report Profesional (10 Menit)                  │
└────────────────────────────────────────────────────────────────────────┘
```

---

## Bagian 0: Persiapan & Setup Spreadsheet (Estimasi: 5 Menit)

### Langkah Kerja:
1. Buka aplikasi spreadsheet (Google Sheets atau Microsoft Excel).
2. Simpan lembar kerja baru dengan format penamaan:  
   `Lab1_TestCase_BugReport_[NAMA_PESERTA].xlsx`
3. Siapkan **3 Sheet** dengan nama persis sebagai berikut:
   - **Sheet 1:** `Test_Cases`
   - **Sheet 2:** `Decision_Table`
   - **Sheet 3:** `Bug_Reports`

### Struktur Kolom Sheet 1: `Test_Cases` (16 Kolom Standar QA)
Isikan nama kolom berikut pada baris ke-1 (Row 1):

| Kolom | Nama Field | Deskripsi Singkat |
|:---:|---|---|
| A | `TC ID` | Nomor identitas unik test case (contoh: `TC-AUTH-001`) |
| B | `Module` | Modul aplikasi (Autentikasi / Data Pegawai / Pengajuan Cuti) |
| C | `Feature` | Nama fitur spesifik yang diuji (misal: Login Form, Form Cuti) |
| D | `Scenario` | Judul skenario pengujian (Positif / Negatif) |
| E | `Precondition` | Kondisi awal sebelum pengetesan dijalankan |
| F | `Test Steps` | Langkah-langkah tindakan runut bernomor |
| G | `Test Data` | Input spesifik data uji (username, password, tanggal, dll.) |
| H | `Expected Result` | Hasil yang diharapkan sesuai spesifikasi FRD/SRS |
| I | `Actual Result` | Hasil aktual (kosongkan saat fase desain, diisi saat eksekusi) |
| J | `Status` | `Draft` (ubah jadi `Pass`/`Fail` saat testing dijalankan) |
| K | `Priority` | Prioritas eksekusi: `High`, `Medium`, atau `Low` |
| L | `Severity` | Tingkat dampak: `Critical`, `Major`, `Minor`, atau `Low` |
| M | `Test Type` | Jenis pengujian: `Positive`, `Negative`, `Boundary`, `Security` |
| N | `Tester` | Nama Anda sebagai QA Designer |
| O | `Date Created` | Tanggal perancangan test case |
| P | `Remarks` | Catatan tambahan / referensi nomor FR |

---

## Bagian 1: Desain Test Case Login — EP & BVA (Estimasi: 20 Menit)

### 1.1 Spesifikasi Fitur Form Login
- **URL / Halaman:** `/login`
- **Field Username:** Format email valid, terdaftar di database, akun berstatus aktif.
- **Field Password:** Minimum 8 karakter, maksimum 64 karakter.
- **Perilaku Sukses:** Kredensial benar $\rightarrow$ status 200, JWT tersimpan, diarahkan ke `/dashboard`.
- **Perilaku Gagal:** Menampilkan alert error spesifik tanpa *crash* atau *info leak*.

---

### 1.2 Analisis Equivalence Partitioning (EP)
Bagi rentang input ke dalam kelas ekuivalen valid (*valid partition*) dan tidak valid (*invalid partition*):

```
Username (Email):
  [ Valid Email: user@inix.com ]
  [ Invalid Partition 1: Format tanpa @ atau domain ]
  [ Invalid Partition 2: Username kosong / null ]
  [ Invalid Partition 3: Email tidak terdaftar di sistem ]
  [ Invalid Partition 4: Akun berstatus nonaktif ]

Password:
  [ Valid Password: 8 s.d. 64 Karakter ]
  [ Invalid Partition 1: Password kosong ]
  [ Invalid Partition 2: Password salah / tidak cocok ]
```

#### Tugas 1A: Buat 5 Test Case EP (TC-AUTH-001 s.d. TC-AUTH-005)
Rancang 5 test case pada Sheet `Test_Cases`:
- **TC-AUTH-001:** Login dengan username & password valid (Positive Case).
- **TC-AUTH-002:** Login dengan format email tidak valid / tanpa simbol `@` (Negative EP).
- **TC-AUTH-003:** Login dengan email yang belum terdaftar di database (Negative EP).
- **TC-AUTH-004:** Login dengan akun terdaftar namun berstatus `nonaktif` (Negative EP).
- **TC-AUTH-005:** Login dengan password salah (Negative EP).

---

### 1.3 Analisis Boundary Value Analysis (BVA) pada Password
Aturan batas panjang password: $\text{Min} = 8$ karakter, $\text{Max} = 64$ karakter.

Titik batas yang wajib diuji:
$$\text{Batas Bawah: } 7 \text{ char (Invalid, Min}-1), \quad 8 \text{ char (Valid, Min)}, \quad 9 \text{ char (Valid, Min}+1)$$
$$\text{Batas Atas: } 63 \text{ char (Valid, Max}-1), \quad 64 \text{ char (Valid, Max)}, \quad 65 \text{ char (Invalid, Max}+1)$$

#### Tugas 1B: Buat 5 Test Case BVA (TC-AUTH-006 s.d. TC-AUTH-010)
- **TC-AUTH-006:** Password tepat 7 karakter (Boundary Bawah - Invalid).
- **TC-AUTH-007:** Password tepat 8 karakter (Boundary Bawah - Valid).
- **TC-AUTH-008:** Password 9 karakter (Boundary Bawah Normal - Valid).
- **TC-AUTH-009:** Password tepat 64 karakter (Boundary Atas - Valid).
- **TC-AUTH-010:** Password 65 karakter (Boundary Atas - Invalid).

---

## Bagian 2: Desain Test Case Pengajuan Cuti — Decision Table (Estimasi: 15 Menit)

### 2.1 Spesifikasi Business Logic Pengajuan Cuti
1. **Kondisi 1 (C1):** Role Pengguna harus `Pegawai` (Bukan Admin, HR, atau Manajer).
2. **Kondisi 2 (C2):** Tanggal Mulai Cuti $\ge$ Tanggal Hari Ini.
3. **Kondisi 3 (C3):** Tanggal Selesai Cuti $\ge$ Tanggal Mulai Cuti.
4. **Kondisi 4 (C4):** Alasan Cuti terisi (minimal 3 karakter).
5. **Kondisi 5 (C5):** Durasi Cuti $\le$ Sisa Kuota Cuti Tahunan (Maksimal 12 Hari).

### 2.2 Buat Matriks Decision Table di Sheet 2 (`Decision_Table`)

Gunakan format tabel berikut pada Sheet 2:

| Komponen | Nama Atribut | Rule 1 | Rule 2 | Rule 3 | Rule 4 | Rule 5 | Rule 6 |
|---|---|:---:|:---:|:---:|:---:|:---:|:---:|
| **Kondisi (C1)** | Role = Pegawai? | **Y** | **Y** | **Y** | **Y** | **Y** | **T** (Bukan Pegawai) |
| **Kondisi (C2)** | Tgl Mulai $\ge$ Hari Ini? | **Y** | **Y** | **Y** | **T** | **Y** | - |
| **Kondisi (C3)** | Tgl Selesai $\ge$ Tgl Mulai? | **Y** | **Y** | **T** | - | **Y** | - |
| **Kondisi (C4)** | Alasan Diisi $\ge$ 3 Karakter? | **Y** | **T** | - | - | **Y** | - |
| **Kondisi (C5)** | Durasi $\le$ Sisa Kuota (12 Hari)? | **Y** | - | - | - | **T** (> Kuota) | - |
| **Aksi (A1)** | Cuti Berhasil Dibuat (HTTP 201) | **X** | - | - | - | - | - |
| **Aksi (A2)** | Error: Alasan Wajib Diisi (400) | - | **X** | - | - | - | - |
| **Aksi (A3)** | Error: Tanggal Selesai Tidak Valid (400) | - | - | **X** | - | - | - |
| **Aksi (A4)** | Error: Tanggal Mulai di Masa Lalu (400) | - | - | - | **X** | - | - |
| **Aksi (A5)** | Error: Kuota Cuti Tidak Cukup (400) | - | - | - | - | **X** | - |
| **Aksi (A6)** | Error: Akses Ditolak 403 Forbidden | - | - | - | - | - | **X** |

### 2.3 Konversi Rule ke Test Case di Sheet 1:
Pindahkan 6 Rules di atas menjadi **TC-CUT-001 s.d. TC-CUT-006** di sheet `Test_Cases`.

---

## Bagian 3: State Transition Testing — Siklus Cuti (Estimasi: 10 Menit)

### 3.1 Model Diagram Transisi Status Cuti

```
                ┌────────────────────────────────┐
                │          [DRAFT/BARU]          │
                └───────────────┬────────────────┘
                                │ Submit Pengajuan (Pegawai)
                                ▼
                       ┌─────────────────┐
                       │     PENDING     │
                       └────────┬────────┘
                                │
               ┌────────────────┴────────────────┐
               │ Approve (Manajer)               │ Reject (Manajer)
               ▼                                 ▼
      ┌─────────────────┐               ┌─────────────────┐
      │    APPROVED     │               │    REJECTED     │
      └─────────────────┘               └─────────────────┘
```

### 3.2 Matriks State Transition (Valid vs Invalid)

| State Awal | Aksi / Trigger | State Tujuan | Validitas Transisi |
|---|---|---|:---:|
| `NEW` | Submit form valid | `PENDING` | **Valid** |
| `PENDING` | Manajer klik Setujui (*Approve*) | `APPROVED` | **Valid** |
| `PENDING` | Manajer klik Tolak (*Reject*) | `REJECTED` | **Valid** |
| `APPROVED` | Manajer mencoba klik Tolak (*Reject*) | `REJECTED` | **Invalid** (Data Final) |
| `REJECTED` | Manajer mencoba klik Setujui (*Approve*) | `APPROVED` | **Invalid** (Data Final) |
| `PENDING` | Pegawai mencoba Approve sendiri | `APPROVED` | **Invalid** (Pelanggaran RBAC) |

#### Tugas Bagian 3:
Tambahkan **4 Test Case Transisi Status** pada Sheet `Test_Cases`:
- **TC-CUT-007:** Transisi Valid: `PENDING` $\rightarrow$ `APPROVED` oleh Manajer.
- **TC-CUT-008:** Transisi Valid: `PENDING` $\rightarrow$ `REJECTED` oleh Manajer.
- **TC-CUT-009:** Transisi Invalid: Percobaan mengubah pengajuan yang sudah `APPROVED` menjadi `REJECTED`.
- **TC-CUT-010:** Transisi Invalid: Pegawai mencoba mengeksekusi endpoint approval cuti miliknya sendiri.

---

## Bagian 4: Penulisan Bug Report Standar Industri (Estimasi: 10 Menit)

Pada sheet **`Bug_Reports`**, buat dokumentasi pelaporan 3 cacat (*bug*) fiktif yang mewakili 3 modul:
1. **Bug 1 (Modul Autentikasi):** Cacat keamanan/otorisasi tingkat *Critical*.
2. **Bug 2 (Modul Data Pegawai):** Cacat fungsional validasi tingkat *Major*.
3. **Bug 3 (Modul Pengajuan Cuti):** Cacat kalkulasi kuota atau workflow tingkat *Major*.

### 4.1 Header 12 Field Standar Sheet `Bug_Reports`

| No | Nama Kolom | Definisi |
|:---:|---|---|
| 1 | `Bug ID` | Kode unik bug (contoh: `BUG-INIX-001`) |
| 2 | `Title / Summary` | Judul ringkas, deskriptif, dan jelas [Action] + [Location] + [Issue] |
| 3 | `Module` | Modul terdampak (Autentikasi / Pegawai / Cuti) |
| 4 | `Severity` | Tingkat keparahan teknis: `Blocker`, `Critical`, `Major`, `Minor`, `Trivial` |
| 5 | `Priority` | Urutan perbaikan bisnis: `P1 (Urgent)`, `P2 (High)`, `P3 (Medium)`, `P4 (Low)` |
| 6 | `Environment` | OS, Browser, Base URL, Versi aplikasi |
| 7 | `Precondition` | Akun dan status data sebelum reproduksi bug |
| 8 | `Steps to Reproduce` | Urutan langkah terinci 1, 2, 3 untuk memicu bug |
| 9 | `Expected Result` | Perilaku benar sesuai dokumen SRS |
| 10 | `Actual Result` | Perilaku salah / cacat yang terjadi pada sistem |
| 11 | `Reporter` | Nama Anda sebagai QA Reporter |
| 12 | `Status` | `Open` / `New` |

---

## Checklist Evaluasi Keberhasilan Lab 1

Sebelum mengumpulkan file spreadsheet Anda, lakukan verifikasi mandiri berikut:
- [ ] File spreadsheet tersimpan dengan nama: `Lab1_TestCase_BugReport_[NAMA].xlsx`.
- [ ] Sheet `Test_Cases` memuat **tepat 20 test case** dengan identitas unik (`TC-AUTH-001` s.d. `010`, `TC-CUT-001` s.d. `010`).
- [ ] Terdapat 5 Test Case EP dan 5 Test Case BVA pada form Login.
- [ ] Sheet `Decision_Table` memuat matriks minimal 6 kondisi dan aksi.
- [ ] Terdapat 4 Test Case State Transition (2 valid, 2 invalid).
- [ ] Sheet `Bug_Reports` memuat **3 bug report lengkap** dengan 12 kolom standar industri.

---

<details>
<summary><strong>KUNCI JAWABAN & PANDUAN INSTRUKTUR (Reference Answer) — Klik untuk Membuka</strong></summary>

### A. Kunci Jawaban Lengkap 20 Test Case (Sheet `Test_Cases`)

| TC ID | Module | Feature | Scenario | Precondition | Test Steps | Test Data | Expected Result | Priority | Severity | Type |
|---|---|---|---|---|---|---|---|:---:|:---:|:---:|
| **TC-AUTH-001** | Autentikasi | Login Form | Login sukses dengan kredensial valid | Akun terdaftar dan status aktif | 1. Buka `/login`<br>2. Masukkan username valid<br>3. Masukkan password valid<br>4. Klik tombol Login | `username: pegawai@inix.com`<br>`password: Pegawai@123!` | HTTP 200, JWT tersimpan di localStorage, redirect ke `/dashboard` | High | Critical | Positive |
| **TC-AUTH-002** | Autentikasi | Login Form | Login dengan format email tanpa domain | Web terbuka di browser | 1. Input username tanpa domain<br>2. Input password<br>3. Klik Login | `username: pegawaiinix`<br>`password: Pegawai@123!` | Form menolak submit, alert format email tidak valid | High | Major | Negative (EP) |
| **TC-AUTH-003** | Autentikasi | Login Form | Login dengan email tidak terdaftar | User belum pernah didaftarkan | 1. Input email acak<br>2. Input password acak<br>3. Klik Login | `username: hantu@inix.com`<br>`password: Password@123` | HTTP 401 `{ detail: "Username atau password salah" }` | High | Major | Negative (EP) |
| **TC-AUTH-004** | Autentikasi | Login Form | Login akun status nonaktif | User terdaftar tapi is_active=false | 1. Input kredensial akun nonaktif<br>2. Klik Login | `username: rudi.qa@inix.com`<br>`password: Rudi@123!` | HTTP 403 `{ detail: "Akun tidak aktif" }` | High | Critical | Negative (EP) |
| **TC-AUTH-005** | Autentikasi | Login Form | Login dengan password salah | Akun aktif terdaftar | 1. Input username valid<br>2. Input password keliru<br>3. Klik Login | `username: pegawai@inix.com`<br>`password: SalahPassword!` | HTTP 401 `{ detail: "Username atau password salah" }` | High | Major | Negative (EP) |
| **TC-AUTH-006** | Autentikasi | Login Form | Password boundary bawah 7 karakter (Min - 1) | Akun terdaftar | 1. Input username<br>2. Input password 7 karakter<br>3. Klik Login | `password: Pass12!` (7 char) | Muncul pesan validasi password minimal 8 karakter | Medium | Minor | Boundary (BVA) |
| **TC-AUTH-007** | Autentikasi | Login Form | Password boundary bawah 8 karakter (Min) | Akun terdaftar dengan pass 8 char | 1. Input username<br>2. Input password 8 karakter<br>3. Klik Login | `password: Pass123!` (8 char) | Password diterima valid, login diproses server | High | Major | Boundary (BVA) |
| **TC-AUTH-008** | Autentikasi | Login Form | Password boundary bawah 9 karakter (Min + 1) | Akun terdaftar | 1. Input username<br>2. Input password 9 karakter<br>3. Klik Login | `password: Pass1234!` (9 char) | Password diterima valid, login diproses server | Medium | Minor | Boundary (BVA) |
| **TC-AUTH-009** | Autentikasi | Login Form | Password boundary atas 64 karakter (Max) | Akun terdaftar dengan pass 64 char | 1. Input username<br>2. Input password tepat 64 char<br>3. Klik Login | Password 64 char string | Password diterima valid tanpa pemotongan string | Medium | Minor | Boundary (BVA) |
| **TC-AUTH-010** | Autentikasi | Login Form | Password boundary atas 65 karakter (Max + 1) | Web terbuka | 1. Input username<br>2. Input password 65 char<br>3. Klik Login | Password 65 char string | Validasi menolak panjang karakter melebihi 64 | Low | Minor | Boundary (BVA) |
| **TC-CUT-001** | Pengajuan Cuti | Form Cuti | Rule 1: Submit cuti valid sesuai kuota | Login sebagai Pegawai, sisa kuota >= 3 hari | 1. Masukkan tgl mulai h+1<br>2. Masukkan tgl selesai h+3<br>3. Isi alasan valid<br>4. Submit | `tgl_mulai: 2026-12-01`<br>`tgl_selesai: 2026-12-03`<br>`alasan: Cuti keperluan keluarga` | HTTP 201 Created, status cuti `PENDING`, muncul di list | High | Critical | Positive (DT) |
| **TC-CUT-002** | Pengajuan Cuti | Form Cuti | Rule 2: Submit cuti dengan alasan kosong | Login sebagai Pegawai | 1. Pilih tanggal valid<br>2. Kosongkan textarea alasan<br>3. Submit | `tgl_mulai: 2026-12-01`<br>`tgl_selesai: 2026-12-02`<br>`alasan: ""` | HTTP 400 Bad Request, alert "Alasan wajib diisi" | Medium | Minor | Negative (DT) |
| **TC-CUT-003** | Pengajuan Cuti | Form Cuti | Rule 3: Tanggal selesai lebih awal dari tanggal mulai | Login sebagai Pegawai | 1. Input tgl mulai 2026-12-05<br>2. Input tgl selesai 2026-12-01<br>3. Isi alasan<br>4. Submit | `tgl_mulai: 2026-12-05`<br>`tgl_selesai: 2026-12-01` | Form error: "Tanggal selesai harus >= tanggal mulai" | High | Major | Negative (DT) |
| **TC-CUT-004** | Pengajuan Cuti | Form Cuti | Rule 4: Tanggal mulai di masa lalu | Login sebagai Pegawai | 1. Input tanggal kemarin<br>2. Input tgl selesai hari ini<br>3. Submit | `tgl_mulai: 2020-01-01`<br>`tgl_selesai: 2020-01-02` | Validasi menolak tanggal di masa lalu | Medium | Minor | Negative (DT) |
| **TC-CUT-005** | Pengajuan Cuti | Form Cuti | Rule 5: Durasi cuti melebihi sisa kuota 12 hari | Pegawai memiliki sisa kuota 4 hari | 1. Ajukan cuti durasi 6 hari<br>2. Isi alasan<br>3. Submit | `tgl_mulai: 2026-12-01`<br>`tgl_selesai: 2026-12-06` (6 hari) | HTTP 400 `{ detail: "Kuota cuti tahunan tidak mencukupi..." }` | High | Critical | Negative (DT) |
| **TC-CUT-006** | Pengajuan Cuti | API Cuti | Rule 6: User selain role Pegawai submit cuti | Login sebagai Manajer / HR / Admin | 1. Panggil `POST /api/cuti` menggunakan token role HR | Body pengajuan cuti valid | HTTP 403 Forbidden `{ detail: "Hanya pegawai yang dapat mengajukan cuti" }` | High | Critical | Security (DT) |
| **TC-CUT-007** | Pengajuan Cuti | Workflow Cuti | Transisi Valid: PENDING ke APPROVED oleh Manajer | Ada record cuti status PENDING | 1. Login sebagai Manajer<br>2. Klik tombol "Setujui" pada record cuti | Body: `{ status: "APPROVED" }` | HTTP 200, status berubah jadi `APPROVED`, kuota terpotong permanen | High | Critical | State Transition |
| **TC-CUT-008** | Pengajuan Cuti | Workflow Cuti | Transisi Valid: PENDING ke REJECTED oleh Manajer | Ada record cuti status PENDING | 1. Login sebagai Manajer<br>2. Klik tombol "Tolak" pada record cuti | Body: `{ status: "REJECTED" }` | HTTP 200, status berubah jadi `REJECTED`, kuota dikembalikan | High | Critical | State Transition |
| **TC-CUT-009** | Pengajuan Cuti | Workflow Cuti | Transisi Invalid: Merubah status APPROVED ke REJECTED | Record cuti berstatus APPROVED | 1. Kirim request `PATCH /api/cuti/{id}/status` dengan status REJECTED | Body: `{ status: "REJECTED" }` pada data yang sudah APPROVED | HTTP 400 `{ detail: "Hanya cuti berstatus PENDING yang dapat diubah" }` | Medium | Major | State Transition |
| **TC-CUT-010** | Pengajuan Cuti | Workflow Cuti | Transisi Invalid: Pegawai menyetujui cuti mandiri | Pegawai memiliki cuti PENDING | 1. Pegawai memanggil endpoint `PATCH /api/cuti/{id}/status` | Body: `{ status: "APPROVED" }` | HTTP 403 Forbidden (RBAC mencegah eksekusi) | High | Critical | Security / State |

---

### B. Kunci Jawaban 3 Bug Report Lengkap (Sheet `Bug_Reports`)

#### Bug Report 1: Celah Keamanan Otorisasi (Autentikasi & RBAC)
```text
Bug ID              : BUG-INIX-001
Title               : [Security] User role Pegawai dapat menghapus data pegawai lain melalui endpoint DELETE /api/pegawai/{id}
Module              : Autentikasi / Data Pegawai
Severity            : Critical
Priority            : P1 (Urgent)
Environment         : Web Browser Chrome 130, API v1.0, Staging DB MySQL 8.0
Precondition        : Pengetes login menggunakan akun role 'pegawai' dan mengantongi Bearer Token aktif.
Steps to Reproduce  :
  1. Buka tool API Client (Postman).
  2. Masukkan URL: DELETE http://localhost:8000/api/pegawai/3.
  3. Set header Authorization: Bearer <TOKEN_PEGAWAI>.
  4. Kirim request HTTP DELETE.
Expected Result     : Sistem menolak request dan mengembalikan status HTTP 403 Forbidden { "detail": "Akses ditolak. Role Anda tidak memiliki izin." }.
Actual Result       : Server mengembalikan HTTP 204 No Content dan data pegawai dengan ID 3 terhapus permanen dari database.
Reporter            : QA Tester
Status              : Open
```

#### Bug Report 2: Kegagalan Integritas Database (Data Pegawai)
```text
Bug ID              : BUG-INIX-002
Title               : [Data Integrity] Input NIP yang sama pada dua form pegawai secara simultan menyebabkan 500 Internal Server Error bukan 400
Module              : Data Pegawai
Severity            : Major
Priority            : P2 (High)
Environment         : Chrome DevTools, Node.js Express 5.0, MySQL 8.0
Precondition        : Akun HR login di sistem. NIP 'NIP-2025-001' telah digunakan oleh Andi Wijaya.
Steps to Reproduce  :
  1. Buka menu Data Pegawai -> Tambah Pegawai (/pegawai/tambah).
  2. Masukkan NIP: 'NIP-2025-001' (NIP duplikat).
  3. Masukkan Nama: 'Doni Pratama', Jabatan: 'Staff IT'.
  4. Klik tombol "Simpan Data Pegawai".
Expected Result     : Antarmuka menampilkan alert ramah pengguna "NIP sudah terdaftar" (HTTP 400 Bad Request).
Actual Result       : Server merespons HTTP 500 Internal Server Error dengan unhandled SequelizeUniqueConstraintError dan UI blank putih.
Reporter            : QA Tester
Status              : Open
```

#### Bug Report 3: Pelanggaran Batas Kuota Cuti Tahunan (Pengajuan Cuti)
```text
Bug ID              : BUG-INIX-003
Title               : [Business Logic] Pegawai dapat mengajukan cuti melebihi kuota tahunan 12 hari tanpa peringatan validasi
Module              : Pengajuan Cuti
Severity            : Major
Priority            : P2 (High)
Environment         : React 19 Frontend, Windows 11, Chrome v130
Precondition        : Pegawai login dengan akun pegawai@inix.com, riwayat cuti tahun berjalan sudah terpakai 10 hari (sisa 2 hari).
Steps to Reproduce  :
  1. Navigasi ke halaman Form Pengajuan Cuti (/cuti/ajukan).
  2. Pilih Tanggal Mulai: 2026-12-15.
  3. Pilih Tanggal Selesai: 2026-12-20 (durasi: 6 hari kerja).
  4. Isi alasan: "Liburan akhir tahun".
  5. Klik tombol "Kirim Pengajuan Cuti".
Expected Result     : Sistem memblokir pengajuan dan menampilkan alert: "Durasi pengajuan (6 hari) melebihi sisa kuota cuti tahunan Anda (2 hari)."
Actual Result       : Form berhasil terkirim (HTTP 201 Created), status menjadi PENDING, dan total cuti pegawai menjadi 16 hari (melebihi limit 12 hari).
Reporter            : QA Tester
Status              : Open
```

</details>
