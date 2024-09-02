### Requirement Individual Project

Berikut adalah requirement atau penilaian yang perlu diperhatikan ketika membuat Individual Project:

### 1. Tema Aplikasi
- Bebas, bertema terkait Music, Foods, Articles/news, Movies, Sports, Education, Entertainment, Game, dsb.

### 2. Proses Development
- Menggunakan Github Workflow selama proses development (branch, commit, merge)

### 3. Arsitektur Aplikasi
- Menggunakan Arsitektur Client-Server

Cara membuat arsitektur Client-Server dengan React untuk client dan Node.js untuk server:

1. Persiapkan Server (Node.js):
   - Instal Node.js dan npm
   - Buat proyek baru: `npm init -y`
   - Instal Express.js: `npm install express`
   - Buat file `server.js` dan atur REST API endpoints
   - Implementasikan logika bisnis di server
   - Atur koneksi database jika diperlukan (misalnya MongoDB dengan Mongoose)

2. Kembangkan Client (React):
   - Buat proyek React baru menggunakan Vite: `npm create vite@latest client -- --template react`
   - Masuk ke direktori client: `cd client`
   - Instal dependensi: `npm install`
   - Buat komponen React untuk UI
   - Implementasikan routing menggunakan React Router: `npm install react-router-dom`
   - Terapkan state management dengan Redux: `npm install @reduxjs/toolkit react-redux`

3. Komunikasi Client-Server:
   - Di client, instal Axios: `npm install axios`
   - Buat instance Axios untuk berkomunikasi dengan server
   - Implementasikan fungsi untuk memanggil API di actions Redux

4. Keamanan:
   - Implementasikan JWT untuk autentikasi
   - Gunakan middleware di server untuk melindungi rute tertentu

5. Pengujian:
   - Untuk server, gunakan Jest: `npm install --save-dev jest supertest`
   - Untuk client, gunakan React Testing Library (sudah termasuk dalam create-react-app)

6. Pengembangan:
   - Gunakan Nodemon untuk auto-reload server: `npm install --save-dev nodemon`
   - Manfaatkan hot-reloading bawaan Vite untuk pengembangan client

7. Deployment:
   - Deploy server ke platform seperti Heroku atau DigitalOcean
   - Deploy client ke Netlify atau Vercel

Dengan pendekatan ini, Anda dapat membangun aplikasi full-stack menggunakan React untuk frontend dan Node.js untuk backend, menciptakan arsitektur Client-Server yang efisien dan skalabel.

### 4. Server
- Berupa sebuah REST API (min ada method 1 CRUD)
- Testing (min 80% coverage)
- API Documentation

### 5. Client
- Menggunakan Vite + React.js
- Implementasi Component, Router, dan State Management (Redux)

### 6. State Management
- Wajib implementasi state management Redux pada sisi client
- Pastikan proses fetching data melalui store dan mendistribusikannya ke component yang membutuhkan (single source of truth)

### 7. Fitur Utama
Memiliki Fitur Utama semenarik mungkin (konfirmasi buddy) sebagai objective dari aplikasi. Beberapa contoh feature utama rekomendasi:
a. Fitur-fitur dengan OpenAI
   - Natural Language Understanding (NLU)
   - Chatbots and Conversational AI
   - Content Generation
   - Knowledge Extraction and Generation
   - Personalization and Recommendation
   - Data Analysis and Insights
   - Accessibility and Inclusion
b. Realtime Apps (Firebase Realtime, Socket)
c. Mail Sending (Nodemailer, Restdb mail)
d. Upload File (Multer, Single-File*, Multiple-File)
e. Social Media Sign In (Facebook/Twitter/Github)
f. Payment Gateway (Midtrans, Xendit, Fastpay, Stripe)
g. Biometrics (Face & Voice Recognition, text-to-speech, speech-to-text)
h. 3D/VR Library (Three.js, A-Frame)
i. Responsive Design (Desktop, Tab, Mobile)
j. Others (Package, Function, Algorithm)

### 8. Social Media Sign In
- Wajib implementasi Social Media Sign In (Google) pada individual project

### 9. 3rd Party API
- Wajib implementasi minimal 2 Jenis 3rd Party API pada individual project yang terintegrasi server-client
a. 3rd party API pertama WAJIB menggunakan OpenAI (https://platform.openai.com/docs/api-reference)
b. 3rd party API kedua boleh apiKey/token atau bisa juga menggunakan package/library based (cth: cloudinary, midtrans)
c. Referensi: https://github.com/public-apis/public-apis atau https://rapidapi.com/search/

### 10. Deployment
- Deploy aplikasi: Deploy server dan client side agar bisa ditunjukan secara public

### Aturan Individual Project

1. Submit ide:
   - PASTIKAN mengirim atau submit ide ke: [click here]
   - Tidak boleh memiliki ide atau proses bisnis aplikasi (tema) yang sama persis antar student
   - Boleh melakukan perubahan fitur setelah submit dengan konsultasi buddy, tapi tidak untuk perubahan tema

2. Progress Report:
   - Wajib report progres Individual Project (Minimal 3 kali) ke buddy

3. Git Workflow:
   - Wajib menggunakan git selama proses development dan mengikuti github workflow
   - Menggunakan forking clone
   - Tidak boleh push ke "main" saat development, buatlah branch baru (development)
   - Pastikan branch main hanya menerima code dari pull request

4. Kualitas Proyek:
   - Individual Project harus semenarik mungkin untuk portofolio
   - Lakukan eksplorasi! Fitur yang sudah ada pada challenge atau sudah pernah diajarkan sebelumnya, nilainya maksimal 50%

### Presentasi Individual Project

Waktu: Week 3, Jumat jam 13:30

Format Presentasi (5 menit, tanpa SLIDES/PPT):
1. Nama Aplikasi, Background, dan Fitur
2. Live demo fitur terbaik
3. (Opsional) Ceritakan permasalahan dan solusinya

### Referensi Individual Project

- https://pokemon-awesome.vercel.app/
- https://dotarandom.vercel.app/
- https://spotify-you.vercel.app/
- https://awesome-yt.vercel.app/
- https://qatar-worldcup.netlify.app/
- https://hit-mole-game-infinite.firebaseapp.com/
- https://todo-app-chakra.vercel.app/
- https://kanban-dashboard.vercel.app/
- https://covid-19-smart-tracker.vercel.app/

### Recommended 3rd Party API Individual Project

Lihat di: https://docs.google.com/document/d/1Jg0aeW1jLsjlqvh8VR5s25mVUJI3vEaKfAz9VZKtqIo/edit