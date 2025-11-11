# 🚀 DevHub – Developer Stats App

DevHub is a mobile application built with *React Native (Expo)* and a *Node.js + Express backend*.  
It allows developers to quickly view their *GitHub* and *LeetCode* stats in one place.

---

## ✨ Features

### 🔹 GitHub Stats
- Public Repositories  
- Followers  
- Following  
- Total Stars (calculated from all repos)  
- Profile information (name, avatar, bio)

### 🔹 LeetCode Stats
- Total Problems Solved  
- Easy / Medium / Hard solved counts  
- Global Ranking  
- Acceptance Rate  

### 🔹 Simple Input
Just enter:
- GitHub Username  
- LeetCode Username  
→ Instantly see stats from both platforms.

---

## 🛠 Tech Stack

### 📱 Frontend (Mobile App)
- React Native (Expo)
- React Navigation
- Custom UI components (Glass UI, dark/light theme)
- Axios for API calls

### 🖥 Backend (Server)
- Node.js
- Express.js
- Axios (to fetch GitHub & LeetCode stats)
- CORS enabled

---

## 📡 API Endpoints

### 🔸 GitHub Stats

GET /api/github/full/:username

### 🔸 LeetCode Stats

GET /api/leetcode/:username

---

## ⚙ Setup Instructions

### 1️⃣ Clone the repository

git clone https://github.com/YOUR_USERNAME/DevHub.git

### 2️⃣ Install frontend dependencies

cd frontend/devhub_app npm install

### 3️⃣ Start Expo

npm start

### 4️⃣ Install backend dependencies

cd backend npm install

### 5️⃣ Run backend

node server.js

---

## 📁 Folder Structure

Backend/ ├── routes/ │    ├── github.js │    ├── leetcode.js │ ├── server.js

Frontend/ ├── src/ │   ├── screens/ │   ├── components/ │   ├── utils/api.js │   ├── theme/ │   ├── navigation/ │ ├── App.js

---

## 🔐 Environment Variables

Create a .env file inside *Backend*:

MONGO_URI=your_mongo_url   # optional PORT=5000

(Your .env is *ignored* thanks to .gitignore)

---

## 🤝 Contributing
Pull requests are welcome.  
Feel free to fork and build your own version!

---

## 📄 License
This project is licensed under the MIT License.

---

## 👨‍💻 Developer
*Tejas Rastogi*  
Built with ❤ for developers.
