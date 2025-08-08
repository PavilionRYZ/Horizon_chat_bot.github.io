# 🚀 Gemini AI Chatbot

<div align="center">

[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Google Gemini](https://img.shields.io/badge/Google_Gemini-4285F4?style=for-the-badge&logo=google&logoColor=white)](https://ai.google.dev/)

*A modern, intelligent chatbot powered by Google's Gemini AI*

**[🌐 Live Demo](https://horizonchatbot.netlify.app/)** • **[📚 Documentation](#documentation)** • **[🤝 Contributing](#contributing)**

</div>

---

## ✨ Features

<table>
<tr>
<td width="50%">

### 🎨 **Beautiful Interface**
- **Modern Glass-morphism Design** with gradient backgrounds
- **Responsive Layout** that works on all devices
- **Smooth Animations** and micro-interactions
- **Dark/Light Theme Support** for comfortable viewing

</td>
<td width="50%">

### 🤖 **Intelligent Conversations**
- **Real-time AI Responses** powered by Gemini 2.5 Flash
- **Context-Aware** conversations with memory
- **Multi-language Support** for global accessibility
- **Smart Error Handling** with graceful fallbacks

</td>
</tr>
<tr>
<td width="50%">

### 📝 **Rich Text Support**
- **Markdown Rendering** for headers, lists, and formatting
- **Syntax Highlighting** for 100+ programming languages
- **Code Block Management** with copy-to-clipboard
- **Inline Code Formatting** for seamless reading

</td>
<td width="50%">

### 🔧 **Developer Experience**
- **TypeScript Ready** for better code quality
- **Hot Module Replacement** for instant development
- **ESLint & Prettier** configuration included
- **Component-based Architecture** for maintainability

</td>
</tr>
</table>

---

## 🚀 Quick Start

### Prerequisites

Make sure you have these installed on your machine:

```bash
Node.js >= 16.0.0
npm >= 7.0.0 or yarn >= 1.22.0
Git
```

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/PavilionRYZ/Horizon_chat_bot.github.io.git
cd Horizon_chat_bot.github.io
```

### 2️⃣ Install Dependencies

```bash
# Using npm
npm install

# Or using yarn
yarn install
```

### 3️⃣ Set Up Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Add your Gemini API key:

```env
VITE_GEMINI_API_KEY=your_actual_api_key_here
```

> 💡 **Get your API key from [Google AI Studio](https://makersuite.google.com/app/apikey)**

### 4️⃣ Configure shadcn/ui Components

```bash
npx shadcn@latest init
npx shadcn@latest add button input card scroll-area
```

### 5️⃣ Start Development Server

```bash
npm run dev
```

🎉 **Success!** Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📱 Usage Guide

### 💬 **Basic Chat**
1. **Type your message** in the input field
2. **Press Enter** or click the Send button
3. **Receive AI responses** with rich formatting

### 🖥️ **Code Interactions**
```javascript
// Ask programming questions like:
"How to count array occurrences in JavaScript?"

// Get formatted code responses with:
✅ Syntax highlighting
✅ Copy-to-clipboard functionality  
✅ Multiple solution approaches
✅ Performance comparisons
```

### ⌨️ **Keyboard Shortcuts**
- `Enter` - Send message
- `Shift + Enter` - New line
- `Ctrl/Cmd + K` - Clear chat (coming soon)

---

## 🏗️ Project Architecture

```
📦 gemini-chatbot/
├── 📁 public/
│   ├── 🖼️ favicon.ico
│   └── 📄 index.html
├── 📁 src/
│   ├── 📁 components/
│   │   └── 📁 ui/              # shadcn/ui components
│   │       ├── 🧩 button.jsx
│   │       ├── 🧩 input.jsx
│   │       ├── 🧩 card.jsx
│   │       └── 🧩 scroll-area.jsx
│   ├── 📄 App.jsx              # Main application component
│   ├── 📄 main.jsx             # React entry point
│   └── 🎨 index.css            # Global styles
├── ⚙️ tailwind.config.js       # Tailwind configuration
├── ⚙️ vite.config.js           # Vite configuration
├── 🔐 .env.example             # Environment template
├── 📦 package.json
└── 📖 README.md
```

---

## 🛠️ Tech Stack

<div align="center">

| Frontend | Styling | UI Components | AI/API | Build Tool |
|----------|---------|---------------|--------|------------|
| ![React](https://img.shields.io/badge/-React-61DAFB?logo=react&logoColor=black&style=flat-square) | ![Tailwind](https://img.shields.io/badge/-Tailwind-38B2AC?logo=tailwind-css&logoColor=white&style=flat-square) | ![shadcn](https://img.shields.io/badge/-shadcn/ui-000000?logo=shadcnui&logoColor=white&style=flat-square) | ![Gemini](https://img.shields.io/badge/-Gemini_AI-4285F4?logo=google&logoColor=white&style=flat-square) | ![Vite](https://img.shields.io/badge/-Vite-646CFF?logo=vite&logoColor=white&style=flat-square) |

</div>

### Core Dependencies

```json
{
  "react": "^18.2.0",
  "@google/generative-ai": "^0.2.1",
  "tailwindcss": "^3.3.0",
  "lucide-react": "^0.263.1"
}
```

---

## 🌟 Screenshots

<div align="center">

### 💻 Desktop View
<img src="https://via.placeholder.com/800x500/4F46E5/FFFFFF?text=Desktop+View" alt="Desktop View" width="700"/>

### 📱 Mobile View
<img src="https://via.placeholder.com/400x600/10B981/FFFFFF?text=Mobile+View" alt="Mobile View" width="300"/>

### 🎨 Code Highlighting
<img src="https://via.placeholder.com/800x400/F59E0B/FFFFFF?text=Code+Highlighting" alt="Code Highlighting" width="700"/>

</div>

---

## 🔧 Configuration

### Environment Variables

| Variable | Description | Required |
|----------|-------------|----------|
| `VITE_GEMINI_API_KEY` | Your Google Gemini API key | ✅ Yes |
| `VITE_APP_TITLE` | Custom app title | ❌ No |
| `VITE_THEME_COLOR` | Primary theme color | ❌ No |

### Customization Options

```javascript
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: '#4F46E5',      // Customize primary color
        secondary: '#10B981',    // Customize secondary color
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Custom font
      },
    },
  },
}
```

---

## 🚀 Deployment

### Deploy to Netlify

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/PavilionRYZ/Horizon_chat_bot.github.io)

### Deploy to Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/PavilionRYZ/Horizon_chat_bot.github.io)

### Manual Deployment

```bash
# Build for production
npm run build

# Preview the build
npm run preview

# Deploy the dist/ folder to your hosting platform
```

---

## 🤝 Contributing

We love contributions! Here's how you can help make this project better:

### 🐛 **Bug Reports & Feature Requests**

Found a bug or have a feature idea? [Open an issue](https://github.com/PavilionRYZ/Horizon_chat_bot.github.io/issues/new)

### 🔧 **Development Workflow**

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m "✨ Add amazing feature"
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open** a Pull Request

### 📋 **Commit Convention**

We use [Conventional Commits](https://conventionalcommits.org/):

```
✨ feat: add new feature
🐛 fix: fix bug
📚 docs: update documentation
🎨 style: improve styling
♻️  refactor: refactor code
✅ test: add tests
🔧 chore: update dependencies
```

---

## 📜 License

This project is licensed under the **MIT License** - see the [LICENSE](LICENSE) file for details.

```
MIT License - Copyright (c) 2024 Horizon Chat Bot
```

---

## 🙏 Acknowledgments

<div align="center">

**Special thanks to:**

🤖 [**Google AI**](https://ai.google.dev/) - For the powerful Gemini API  
🎨 [**shadcn**](https://ui.shadcn.com/) - For the beautiful UI components  
⚡ [**Vite Team**](https://vitejs.dev/) - For the lightning-fast build tool  
💨 [**Tailwind CSS**](https://tailwindcss.com/) - For the utility-first styling  
🔍 [**Lucide**](https://lucide.dev/) - For the crisp, beautiful icons  

</div>

---

<div align="center">

### 🌟 **Star this project if you found it helpful!**

[![GitHub stars](https://img.shields.io/github/stars/PavilionRYZ/Horizon_chat_bot.github.io?style=social)](https://github.com/PavilionRYZ/Horizon_chat_bot.github.io/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/PavilionRYZ/Horizon_chat_bot.github.io?style=social)](https://github.com/PavilionRYZ/Horizon_chat_bot.github.io/network/members)

**[⬆ Back to Top](#-gemini-ai-chatbot)**

</div>