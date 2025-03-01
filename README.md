## Overview
Simple Chat Application adalah aplikasi web yang memungkinkan dua atau lebih pengguna untuk berkomunikasi secara real-time menggunakan WebSocket. Aplikasi ini tidak memerlukan autentikasi sehingga siapa saja dapat langsung bergabung dan mengobrol. UI dibuat menggunakan **Tailwind CSS** untuk tampilan yang modern dan responsif, sementara backend dibangun dengan **Golang** menggunakan **WebSocket** untuk komunikasi real-time dan **SQLite** sebagai database penyimpanan pesan.

## Features
✅ **Real-time Chat** menggunakan WebSocket  
✅ **Tanpa Autentikasi** – langsung bisa chatting  
✅ **Tampilan Modern** dengan Tailwind CSS  
✅ **Ringan & Sederhana** – tidak memerlukan banyak konfigurasi  
✅ **Backend dengan Golang** yang cepat dan efisien  

## Project Structure
```
/simple-chat
│── /frontend
│   │── index.html
│   │── script.js
│── /backend
│   │── main.go
│── go.mod
│── go.sum
```

---
## How to Run
1. Clone repo ini  
   ```sh
   git clone https://github.com/ChristLuis07/simple-chat-go.git
   cd simple-chat-go
   ```
2. Jalankan backend dengan Go  
   ```sh
   go run backend/main.go
   ```
3. Buka `frontend/index.html` di browser  
4. Mulai chatting! 🎉  

---
## Technologies Used
- **Frontend**: HTML, JavaScript, Tailwind CSS  
- **Backend**: Golang, WebSocket  
- **Database**: SQLite  
INI MERUPAKAN PROJECT PERTAMA DENGAN GOLANG DAN MERUPAKAN TUGAS DARI MINI BOOTCAMP DARI DIBIMBING
