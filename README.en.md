# 📸 Photo Gallery

[🇧🇷 Português](README.md) | [🇺🇸 English](README.en.md)

A modern and responsive web application to view, filter, and search photos in real-time, with support for light and dark themes.

## 🌐 Deploy

🚀 **[Access the application here](https://galeria-de-fotos-henna.vercel.app/)**

## 🎯 Features

- ✨ **Photo Display**: Responsive grid with 12+ high-quality photos
- 🔍 **Real-time Search**: Instant photo filtering by keywords
- 🌓 **Dark/Light Theme**: Theme toggle with preference persistence
- 🎨 **Interactive Effects**: Hover effects with scale and shadow on photos
- 📱 **Fully Responsive**: Adaptive layout for desktop, tablet, and mobile
- 🚀 **Optimized Performance**: Image lazy loading
- 💾 **Static Data**: Photos loaded from local JSON file (images from [Unsplash](https://unsplash.com))

## 🛠️ Technologies Used

- **React 19** - JavaScript library for building user interfaces
- **Vite** - Ultra-fast build tool and dev server
- **Tailwind CSS v4** - Utility-first CSS framework
- **React Icons** - Icon library
- **Context API** - Theme state management

## 📋 Prerequisites

- Node.js (version 16 or higher)
- npm or yarn

## 🚀 How to Run Locally

1. **Clone the repository**

   ```bash
   git clone https://github.com/flaviare1s/galeria-de-fotos.git
   cd galeria-de-fotos
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Access in browser**
   ```
   http://localhost:5173
   ```

## 📦 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Create production build
- `npm run preview` - Preview production build locally
- `npm run lint` - Run linter to check code

## 🎨 Project Structure

```
galeria-de-fotos/
├── public/
│   ├── favicon.svg          # Application icon
├── src/
│   ├── components/
│   │   ├── Header.jsx       # Header with title
│   │   ├── ThemeToggle.jsx  # Theme toggle button
│   │   ├── SearchBar.jsx    # Search bar with icon
│   │   ├── PhotoCard.jsx    # Individual photo card
│   │   ├── PhotoGallery.jsx # Photo grid
│   │   └── Footer.jsx       # Footer with copyright
│   ├── context/
│   │   └── ThemeContext.jsx # Context API for dark/light theme
│   ├── data/
│   │   └── photos.json      # Static photo data
│   ├── App.jsx              # Main component with logic
│   ├── main.jsx             # Application entry point
│   └── index.css            # Global styles (Tailwind)
├── index.html
├── package.json
└── README.md
```

## 🌟 Detailed Features

### Real-time Search

The search filters photos instantly as you type, comparing with each photo's name. No need to click the search button.

### Dark/Light Theme

- Toggle in the upper right corner of the header
- Automatic detection of system preference
- Choice persistence in localStorage
- Smooth transitions between themes

### Responsive Design

- **Desktop**: 4-column grid
- **Tablet**: 3-column grid
- **Mobile**: 1-column grid
- Automatic spacing and font size adjustments

### Photo Source

Photos are loaded from a static JSON file ([src/data/photos.json](src/data/photos.json)) containing information for 12 photos with Unsplash URLs. This file can be easily edited to add, remove, or modify photos without changing the application code.

**JSON Structure:**

```json
[
  {
    "id": 1,
    "name": "Photo Name",
    "url": "https://image-url.jpg"
  }
]
```

## 👤 Author

Developed by [flaviare1s](https://github.com/flaviare1s)

---
