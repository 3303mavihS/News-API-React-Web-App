# News API React Web App

A responsive React web application that delivers real-time news from around the world using the [NewsAPI](https://newsapi.org/) service. Browse top headlines by category and country, search articles by keyword, and enjoy a clean card-based UI with dark mode support.

## Features

- 🏠 **Home feed** – top headlines with a featured news slider
- 🗂️ **Categories** – browse news by category (business, sports, tech, etc.) and country
- 🔍 **Search** – keyword search with recent-search history
- 🌙 **Dark mode** – theme toggle via React Context
- 📱 **Responsive design** – card-based layout with loading spinners and empty-state images

## Tech Stack

- **React** (Create React App)
- **React Router DOM** – client-side routing
- **Axios** – API requests
- **React Icons** – UI icons
- **CSS Modules** – scoped component styling
- **NewsAPI** – news data source

## Project Structure

```
src/
├── assets/          # Static data (category/country keywords) and images
├── components/      # Reusable UI components (Card, Navbar, Sliders, ...)
├── context/         # ThemeContext for dark mode
├── pages/           # Home, Categories, Search pages
└── routes/          # AppRouter
```

## Getting Started

### Prerequisites

- Node.js (v14+)
- A free API key from [NewsAPI](https://newsapi.org/register)

### Setup

1. Clone the repository:
   ```bash
   git clone <repo-url>
   cd News-API-React-Web-App
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Configure your API key:
   ```bash
   cp .env.example .env
   ```
   Then edit `.env` and paste your key:
   ```
   REACT_APP_NEWS_API_KEY=your_newsapi_key_here
   ```
   > ⚠️ Never commit `.env` — it is gitignored. See the Security TODO below.

4. Start the development server:
   ```bash
   npm start
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

| Command         | Description                                  |
| --------------- | -------------------------------------------- |
| `npm start`     | Runs the app in development mode             |
| `npm test`      | Launches the test runner in watch mode       |
| `npm run build` | Builds the production bundle to `build/`     |
| `npm run eject` | Ejects CRA config (one-way, not recommended) |

## ⚠️ Security TODO

- [ ] **ROTATE COMPROMISED API KEY (Critical — CWE-798):** A live NewsAPI key
      (`586f38b2...6128a`) was committed in commit `f3fb823` and remains visible
      in git history. It **must be revoked/regenerated** at
      https://newsapi.org/account — masking it in a later commit (`aa088fa`)
      does NOT remove it from history.
  - [ ] Revoke the old key and generate a new one on the NewsAPI dashboard
  - [ ] Add the new key to your local `.env` (placeholder is already in place)
  - [ ] Purge the key from git history (`git filter-repo` or BFG Repo-Cleaner)
        and force-push, or delete/recreate the remote repo
  - [x] Add `.env` to `.gitignore`
  - [x] Remove `.env` from git tracking (`git rm --cached .env`)
  - [x] Replace committed key with a placeholder + rotation notice in `.env`
  - [x] Add `.env.example` template for contributors
- [ ] URL-encode user-supplied search input (`encodeURIComponent`) when building
      NewsAPI request URLs in `Search.jsx`, `Categories.jsx`, and `Home.jsx`.

## Notes

- NewsAPI's free (developer) plan only allows requests from `localhost` — API
  calls will fail with a CORS/426 error on deployed domains without a paid plan.
- The API key is embedded in the client bundle by design of CRA env vars
  (`REACT_APP_*`); for production-grade secrecy, proxy requests through a
  backend server.

## License

This project is for educational purposes.
