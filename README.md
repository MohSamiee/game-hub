# 🎮 GameHub – Discover Games by Genre, Platform & More

**GameHub** is a modern React web app for browsing and discovering video games by genre, platform, and popularity.  
It uses the [RAWG.io API](https://rawg.io/apidocs) to fetch real-time game data and was built with performance and responsiveness in mind.

🌐 **Live Demo**  
[https://game-hub-sandy-six.vercel.app](https://game-hub-sandy-six.vercel.app)

📁 **Source Code**  
[https://github.com/MohSamiee/game-hub](https://github.com/MohSamiee/game-hub)

---

## 🚀 What It Can Do

- 🎮 Browse games by genre (RPG, shooter, puzzle, etc.)
- 💻 Filter by platform (PC, PlayStation, Xbox, etc.)
- 🔍 Search for games by title
- 🏆 View critic scores with color indicators
- 🌗 Switch between light and dark mode
- 📱 Fully responsive layout for mobile and desktop

---

## 🧰 Tech Stack

- **React 18 + Vite** – for a fast, modern dev experience  
- **TypeScript** – safer, cleaner code  
- **Chakra UI** – simple and flexible styling  
- **Axios** – API requests  
- **RAWG.io API** – data source  
- **Vercel** – deployment

---

## 💻 How to Run Locally

```bash
git clone https://github.com/MohSamiee/game-hub.git
cd game-hub
npm install
```

Then create a `.env` file in the root:

```
VITE_RAWG_KEY=your_api_key_here
```

Run the app:

```bash
npm run dev
```

---

## 📁 Project Structure

```
src/
├── components/      # UI elements (GameCard, NavBar, etc.)
├── hooks/           # Data-fetching logic with custom hooks
├── services/        # API client and utility functions
├── theme.ts         # Chakra theme config
├── App.tsx          # Main layout
└── main.tsx         # Entry point
```

---

## 🧠 About the Project

This project was built while following the [React 18 for Beginners](https://codewithmosh.com/) course by **Mosh Hamedani**.

---

## 🙌 Thanks for Visiting!

Feel free to explore, fork, or contribute.  
I'm always looking to improve, so feedback is welcome!
