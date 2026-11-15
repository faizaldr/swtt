# Studi Kasus: Aplikasi Kepegawaian PT INIX

---

## 1. Deskripsi Sistem

**PT INIX** menggunakan sistem informasi kepegawaian internal berbasis web sederhana untuk kebutuhan administrasi data pegawai dan pengajuan cuti.

| Komponen | Teknologi |
|---|---|
| Backend / API | Node.js v26.13.0 (LTS), Express.js v5.3.0, Sequelize v6.37.8 |
| Database | MySQL 8.0 |
| Frontend | React v19.3.0. (Vite SPA sederhana) |
| Auth | JWT (SimpleJWT) |
| Deployment | Docker Compose (dev/staging) |

---

## 2. Modul Fitur Aplikasi (Minimalis)

Aplikasi dipangkas menjadi 3 modul esensial untuk kebutuhan testing tools:

| No | Modul | Deskripsi Singkat | Kebutuhan Testing |
|---|---|---|---|
| 1 | **Autentikasi** | Login, Logout, JWT Token, RBAC | DevTools, Postman, Playwright POM, k6, ZAP |
| 2 | **Data Pegawai** | CRUD data profil pegawai (NIP, Nama, Jabatan, Status) | Form validation, Postman API, Playwright UI, SQL verification |
| 3 | **Pengajuan Cuti** | Pengajuan cuti & persetujuan atasan | Decision Table, State Transition, Business Logic Testing |

---

## 3. Arsitektur Sistem

```
┌─────────────────────────────────────────────────────────┐
│                      CLIENT BROWSER                      │
│                   React 18 (SPA/Vite)                    │
│            Login │ Data Pegawai │ Pengajuan Cuti         │
└───────────────────────────┬─────────────────────────────┘
                            │ HTTPS / REST API (JSON)
                            │ Authorization: Bearer <JWT>
┌───────────────────────────▼─────────────────────────────┐
│                  BACKEND — Express.js                    │
│                           Node.js                        │
│            /api/auth/ │ /api/pegawai/ │ /api/cuti/       │
└───────────────────────────┬─────────────────────────────┘
                            │ Sequelize ORM
┌───────────────────────────▼─────────────────────────────┐
│                    DATABASE — MySQL 8.0                  │
│                   users │ pegawai │ cuti                 │
└─────────────────────────────────────────────────────────┘
```

---

## 4. Dokumen FRD/SRS — PT INIX Kepegawaian

### 4.1 Functional Requirements (FR)

| ID | Requirement | Priority | Module |
|---|---|---|---|
| FR-001 | Pengguna dapat login dengan username dan password untuk memperoleh access token JWT | High | Autentikasi |
| FR-002 | Sistem menampilkan pesan error jika username atau password salah atau akun nonaktif | High | Autentikasi |
| FR-003 | Admin dan HR dapat melihat daftar, menambah, mengubah, dan menghapus data pegawai | High | Data Pegawai |
| FR-004 | Sistem memvalidasi NIP pegawai harus unik dan field wajib (Nama, Jabatan) tidak boleh kosong | High | Data Pegawai |
| FR-005 | Pegawai dapat mengajukan cuti dengan menentukan tanggal mulai, tanggal selesai, dan alasan | High | Pengajuan Cuti |
| FR-006 | Manajer dapat menyetujui (*Approve*) atau menolak (*Reject*) pengajuan cuti pegawai | High | Pengajuan Cuti |
| FR-007 | Akses halaman dan API dibatasi berdasarkan role (Admin, HR, Manajer, Pegawai) | High | Autentikasi |

### 4.2 Non-Functional Requirements (NFR)

| ID | Requirement | Kategori | Metrik |
|---|---|---|---|
| NFR-001 | Response time endpoint login dan data pegawai ≤ 500ms pada beban 50 concurrent users | Performance | ≤ 500ms P95 |
| NFR-002 | Form input dan API terlindung dari kerentanan umum (SQL Injection, XSS) | Security | OWASP Top 10 pass |
| NFR-003 | UI dapat diakses dengan baik di browser modern (Chrome, Edge, Firefox) | Compatibility | Cross-browser pass |
| NFR-004 | Password tersimpan dalam hash aman (bcrypt/PBKDF2); token JWT memiliki masa kedaluwarsa | Security | Verified in DB & Auth |

### 4.3 User Stories

| ID | User Story | Acceptance Criteria |
|---|---|---|
| US-001 | *As a* **User**, *I want to* login with my credentials, *so that* I can access the system | - Validasi field kosong <br> - Kredensial valid masuk ke dashboard <br> - Kredensial tidak valid memunculkan error message |
| US-002 | *As an* **HR/Admin**, *I want to* add a new employee, *so that* employee records are registered | - Field NIP unik dan wajib diisi <br> - Data baru tersimpan di database dan muncul di daftar |
| US-003 | *As an* **HR/Admin**, *I want to* edit and delete employee records, *so that* data remains accurate | - Data terupdate realtime di UI <br> - Konfirmasi sebelum data dihapus |
| US-004 | *As a* **Pegawai**, *I want to* submit a leave request, *so that* I can take my planned leave | - Tanggal selesai harus ≥ tanggal mulai <br> - Pengajuan berstatus default 'PENDING' |
| US-005 | *As a* **Manajer**, *I want to* approve or reject leave requests, *so that* leave status is updated | - Manajer dapat memilih Approve/Reject <br> - Status pengajuan cuti berubah sesuai keputusan |

---

## 5. ERD Database PT INIX (Minimalis)

```
┌──────────────┐       ┌──────────────┐
│    users     │       │   pegawai    │
├──────────────┤       ├──────────────┤
│ id (PK)      │◄──┐   │ id (PK)      │
│ username     │   └───│ user_id (FK) │
│ password     │       │ nip (UNIQUE) │
│ role         │       │ nama_lengkap │
│ is_active    │       │ jabatan      │
└──────────────┘       │ status       │
                       └──────┬───────┘
                              │
                       ┌──────▼───────┐
                       │     cuti     │
                       ├──────────────┤
                       │ id (PK)      │
                       │ pegawai_id   │
                       │ tgl_mulai    │
                       │ tgl_selesai  │
                       │ alasan       │
                       │ status       │ (PENDING/APPROVED/REJECTED)
                       └──────────────┘
```

---

## 6. Daftar API Endpoint (Referensi Testing)

| Method | Endpoint | Deskripsi | Auth / Role |
|---|---|---|---|
| POST | `/api/auth/login/` | Autentikasi user & generate JWT | Public |
| POST | `/api/auth/refresh/` | Refresh JWT access token | Public |
| GET | `/api/pegawai/` | Menampilkan list data pegawai | Bearer JWT (All) |
| POST | `/api/pegawai/` | Menambah pegawai baru | Bearer JWT (HR/Admin) |
| GET | `/api/pegawai/{id}/` | Menampilkan detail pegawai | Bearer JWT (All) |
| PUT | `/api/pegawai/{id}/` | Memperbarui data pegawai | Bearer JWT (HR/Admin) |
| DELETE | `/api/pegawai/{id}/` | Menghapus data pegawai | Bearer JWT (Admin) |
| GET | `/api/cuti/` | Menampilkan daftar cuti | Bearer JWT (All) |
| POST | `/api/cuti/` | Mengajukan permohonan cuti baru | Bearer JWT (Pegawai) |
| PATCH | `/api/cuti/{id}/status/` | Update status cuti (Approve/Reject) | Bearer JWT (Manajer) |

---

## 7. Test Environment & Credentials

| Environment | URL | Keterangan |
|---|---|---|
| Local Dev | `http://localhost:8000` | Docker Compose (Node.js + Express.js + Sequelize ORM + MySQL + React) |
| Staging | `http://staging.inix.local` | Clone testing environment |

**Akun Pengujian:**
```
Admin   : admin@inix.com    / Admin@123!
HR      : hr@inix.com       / Hr@123!
Manajer : manager@inix.com  / Manager@123!
Pegawai : pegawai@inix.com  / Pegawai@123!
```

> **Catatan:** Credential ini khusus environment testing (sandbox/staging).
