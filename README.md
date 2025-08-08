# Gemini AI Chatbot

A modern, responsive chatbot application built with React.js, Tailwind CSS, shadcn/ui, and powered by the Google Gemini API. This project allows users to interact with an AI assistant, featuring a sleek UI with markdown rendering, code block support, and copy-to-clipboard functionality.

## Live Demo

Check out the live demo of the Gemini AI Chatbot: [https://pavilionryz.github.io/Horizon_chat_bot.github.io/](https://pavilionryz.github.io/Horizon_chat_bot.github.io/)

## Features

- **Interactive Chat Interface:** Send messages and receive responses from the Gemini AI model (gemini-2.5-flash).  
- **Rich Text Formatting:** Supports markdown rendering for headers, bold text, inline code, and code blocks.  
- **Copy-to-Clipboard:** Easily copy code snippets from AI responses.  
- **Responsive Design:** Optimized for both mobile and desktop devices using Tailwind CSS.  
- **Accessible UI:** Built with shadcn/ui components for a polished and accessible user experience.  
- **Loading States:** Visual feedback with animated dots during API calls.  
- **Auto-scrolling Chat:** Automatically scrolls to the latest message for a seamless experience.

## Prerequisites

Before you begin, ensure you have the following installed:

- Node.js (v16 or higher)  
- npm or yarn  
- A Gemini API Key from Google AI Studio

## Installation

1. Clone the repository:  
   ```
   git clone https://github.com/PavilionRYZ/Horizon_chat_bot.github.io.git
   Horizon_chat_bot.github.io.git
   ```

2. Install dependencies:  
   ```
   npm install
   ```

3. Set up shadcn/ui components:  
   ```
   npx shadcn@latest init
   npx shadcn@latest add button input card scroll-area
   ```

4. Configure environment variables:  
   Copy the `.env.example` file to `.env`:  
   ```
   cp .env.example .env
   ```

5. Add your Gemini API key to the `.env` file:  
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   ```

6. Run the development server:  
   ```
   npm run dev
   ```

The application will be available at [http://localhost:5173](http://localhost:5173).

## Usage

- **Start Chatting:** Type your message in the input field and press Enter or click the Send button.  
- **Markdown Support:** The AI responses support markdown, including headers (##), bold text (**text**), inline code (`code`), and code blocks (``````).  
- **Copy Code:** Click the copy button next to code blocks to copy the content to your clipboard.  
- **Responsive Layout:** The chat interface adapts to various screen sizes, ensuring a smooth experience on mobile and desktop.

## Project Structure

```
gemini-chatbot/
├── public/
├── src/
│   ├── components/
│   │   └── ui/                 # shadcn/ui components (button, input, card, scroll-area)
│   ├── App.jsx                # Main chat component
│   ├── main.jsx               # React entry point
│   ├── index.css              # Tailwind CSS styles
├── .env.example              # Environment variable template
├── tailwind.config.js        # Tailwind CSS configuration
├── package.json
└── README.md
```

## Dependencies

- **React.js:** Frontend library for building the UI.  
- **Tailwind CSS:** Utility-first CSS framework for styling.  
- **shadcn/ui:** Accessible and customizable UI components.  
- **@google/generative-ai:** Google Gemini API client for AI interactions.  
- **lucide-react:** Icon library for UI elements (Send, Bot, User, Copy, Check).

## Contributing

Contributions are welcome! To contribute:

1. Fork the repository.  
2. Create a new branch:  
   ```
   git checkout -b feature/your-feature
   ```  
3. Make your changes and commit:  
   ```
   git commit -m "Add your feature"
   ```  
4. Push to the branch:  
   ```
   git push origin feature/your-feature
   ```  
5. Open a pull request.

Please ensure your code follows the project's coding style and includes appropriate tests.

## License

This project is licensed under the MIT License.

## Acknowledgments

- Built with inspiration from modern chatbot interfaces.  
- Powered by Google Gemini API.  
- Styled with Tailwind CSS and shadcn/ui.  
- Icons provided by Lucide.