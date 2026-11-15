# Aplikasi Kepegawaian & Pelatihan PT INIX (Eduparx Theme)

Aplikasi web internal pengelolaan data kepegawaian dan permohonan cuti PT INIX dengan tema visual modern **Eduparx Training Catalog** ([https://eduparx.id/home/training?catalog=ai-engineer](https://eduparx.id/home/training?catalog=ai-engineer)).

Aplikasi ini dibangun khusus sebagai target pengujian menyeluruh dalam pelatihan Software Testing:
- **Manual Testing & UI Inspection:** Chrome DevTools, Network tab, LocalStorage JWT, Accessible HTML elements.
- **API Testing:** Postman Collection, Playwright API test.
- **Database Testing:** DBeaver / MySQL Client (relasi FK, status cuti, NIP unique).
- **Automation Testing:** Playwright UI Automation (Page Object Model) dengan seluruh elemen interaktif berlabel `data-testid`.
- **Performance & Security Testing:** k6 load testing tanpa rate-limiting, OWASP ZAP vulnerability scanner.
- **CI/CD & DevOps:** Docker multi-container & GitHub Actions.

---

## Spesifikasi Teknis

- **Backend:** Node.js 20 LTS, Express 5.x, Sequelize 6.x ORM
- **Database:** MySQL 8.0
- **Frontend:** React 19.x, Vite 6.x (SPA Pure CSS Eduparx Theme)
- **Autentikasi:** JWT (JSON Web Token) dengan bcrypt password hashing

---

## Cara Menjalankan (Quick Start via Docker)

Pastikan Docker Desktop sudah terinstal dan aktif di sistem Anda.

1. Buka terminal di folder project `inix-kepegawaian`:
   ```bash
   cd inix-kepegawaian
   ```

2. Jalankan container dengan satu perintah:
   ```bash
   docker-compose up -d --build
   ```

3. Tunggu hingga database MySQL melakukan inisialisasi dan seeder berjalan otomatis (~20-30 detik).

4. Buka browser:
   - **Frontend Web (Eduparx UI):** [http://localhost:3000](http://localhost:3000)
   - **Backend API & Healthcheck:** [http://localhost:8000/api/health](http://localhost:8000/api/health)
   - **MySQL Database:** `localhost:3306` (User: `root`, Password: `root`, DB: `inix_db`)

---

## Akun Uji Coba Default (Seed Data)

| Role | Username / Email | Password | Hak Akses |
|---|---|---|---|
| **Admin** | `admin@inix.com` | `Admin@123!` | Akses penuh CRUD data pegawai, melihat seluruh cuti |
| **HR** | `hr@inix.com` | `Hr@123!` | Tambah dan ubah data pegawai, melihat seluruh cuti |
| **Manajer** | `manager@inix.com` | `Manager@123!` | Menyetujui (*Approve*) atau menolak (*Reject*) cuti pegawai |
| **Pegawai** | `pegawai@inix.com` | `Pegawai@123!` | Mengajukan cuti baru, melihat riwayat cuti mandiri |

---

## Perintah Manajemen

- **Seed Ulang Data:**
  ```bash
  docker exec -it inix-backend npm run seed
  ```
- **Melihat Log Backend:**
  ```bash
  docker logs -f inix-backend
  ```
- **Menghentikan Aplikasi:**
  ```bash
  docker-compose down
  ```
- **Menghentikan dan Menghapus Volume Database:**
  ```bash
  docker-compose down -v
  ```
