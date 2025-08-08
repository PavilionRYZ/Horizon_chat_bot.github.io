import { useState, useRef, useEffect } from 'react';
import { Button } from './components/ui/button';
import { Input } from './components/ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './components/ui/card';
import { ScrollArea } from './components/ui/scroll-area';
import { Send, Bot, User, Copy, Check } from 'lucide-react';
import { GoogleGenerativeAI } from '@google/generative-ai';

const App = () => {
  const [messages, setMessages] = useState([
    {
      role: 'assistant',
      content:
        "Hello! I'm your AI assistant. Ask me anything about programming, JavaScript, or any other topic you'd like help with.",
    },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState(null);
  const scrollAreaRef = useRef(null);
  const inputRef = useRef(null);

  const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GEMINI_API_KEY);
  const model = genAI.getGenerativeModel({ model: 'gemini-2.5-flash' });

  const generateResponse = async (prompt) => {
    try {
      const result = await model.generateContent(prompt);
      return result.response.text();
    } catch (error) {
      console.error('Gemini API Error:', error);
      throw new Error('Failed to generate response from Gemini API');
    }
  };

  const sendMessage = async () => {
    if (!input.trim() || loading) return;

    const userMessage = { role: 'user', content: input.trim() };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setLoading(true);

    try {
      const response = await generateResponse(input);
      const aiMessage = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, aiMessage]);
    } catch (error) {
      console.error('Error:', error);
      setMessages((prev) => [
        ...prev,
        {
          role: 'assistant',
          content: `❌ Error: ${error.message || 'Could not fetch response from Gemini API. Please check your API key and try again.'
            }`,
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = async (text, index) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIndex(index);
      setTimeout(() => setCopiedIndex(null), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  const formatMessage = (content) => {
    const parts = content.split(/``````/);

    return parts.map((part, index) => {
      if (index % 3 === 2) {
        const language = parts[index - 1] || 'text';
        return (
          <div key={index} className="relative my-3">
            <div className="flex items-center justify-between bg-gray-800 text-gray-300 px-3 py-2 rounded-t-lg text-xs">
              <span>{language}</span>
              <button
                onClick={() => copyToClipboard(part, `${index}-code`)}
                className="hover:text-white transition-colors"
                aria-label="Copy code block"
                type="button"
              >
                {copiedIndex === `${index}-code` ? <Check size={14} /> : <Copy size={14} />}
              </button>
            </div>
            <pre className="bg-gray-900 text-gray-100 p-3 rounded-b-lg overflow-x-auto whitespace-pre-wrap break-all">
              <code>{part}</code>
            </pre>
          </div>
        );
      } else if (index % 3 === 0) {
        return (
          <div key={index} className="prose prose-sm max-w-none">
            {part.split('\n').map((line, lineIndex) => {
              if (line.startsWith('## ')) {
                return (
                  <h3 key={lineIndex} className="text-lg font-semibold mt-4 mb-2 text-gray-800">
                    {line.slice(3)}
                  </h3>
                );
              }
              if (line.startsWith('**') && line.endsWith('**')) {
                return (
                  <p key={lineIndex} className="font-semibold text-gray-700 my-1">
                    {line.slice(2, -2)}
                  </p>
                );
              }
              if (line.includes('`') && !line.includes('```')) {
                const inlineCodeParts = line.split(/`([^`]+)`/);
              return (
                <p key={lineIndex} className="my-1">
                  {inlineCodeParts.map((codePart, codeIndex) =>
                    codeIndex % 2 === 1 ? (
                      <code
                        key={codeIndex}
                        className="bg-gray-100 px-1 py-0.5 rounded text-sm font-mono text-gray-800"
                      >
                        {codePart}
                      </code>
                    ) : (
                      codePart
                    ),
                  )}
                </p>
              );
            }
              return line.trim() ? (
            <p key={lineIndex} className="my-1 leading-relaxed">
              {line}
            </p>
            ) : (
            <br key={lineIndex} />
            );
            })}
          </div>
        );
      }
      return null;
    });
  };

  useEffect(() => {
    if (scrollAreaRef.current) {
      scrollAreaRef.current.scrollTop = scrollAreaRef.current.scrollHeight;
    }
  }, [messages]);

  useEffect(() => {
    if (!loading && inputRef.current) {
      inputRef.current.focus();
    }
  }, [loading]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-2 sm:p-4">
      <Card
        className="
          w-full
          max-w-full
          sm:max-w-2xl
          md:max-w-3xl
          lg:max-w-4xl
          h-[94vh]
          max-h-[94vh]
          shadow-xl border-0
          bg-white/80 backdrop-blur-sm
          flex flex-col
        "
      >
        {/* Header */}
        <CardHeader className="border-b border-slate-200/60 bg-white/50 px-3 py-3 sm:px-6 sm:py-4">
          <CardTitle className="flex items-center gap-2 text-slate-800 text-base sm:text-lg">
            <Bot className="w-5 h-5 md:w-6 md:h-6 text-blue-600" />
            Horizon AI Assistant
            <span className="text-xs sm:text-sm font-normal text-slate-500 ml-auto">
              Enhanced Chat Experience with: <span className="font-medium">gemini-2.5-flash</span>
            </span>
          </CardTitle>
        </CardHeader>

        {/* Chat messages */}
        <CardContent className="flex flex-col flex-1 p-0 relative overflow-hidden">
          <ScrollArea className="flex-1 p-2 sm:p-4 overflow-y-auto max-h-[60vh] sm:max-h-none" ref={scrollAreaRef}>
            <div className="space-y-4">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex gap-2 sm:gap-3 ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  {msg.role === 'assistant' && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <Bot className="w-4 h-4 text-white" />
                    </div>
                  )}

                  <div
                    className={`
                      max-w-[87vw]
                      sm:max-w-[80%] md:max-w-[70%]
                      rounded-2xl px-3 py-2 sm:px-4 sm:py-3
                      break-words
                      text-sm sm:text-base
                      relative
                      ${msg.role === 'user'
                        ? 'bg-blue-600 text-white ml-auto'
                        : 'bg-white border border-slate-200 shadow-sm'}
                    `}
                  >
                    {/* Copy Button */}
                    <button
                      onClick={() => copyToClipboard(msg.content, index)}
                      className="absolute top-2 right-2 p-1 rounded hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                      aria-label="Copy message text"
                      type="button"
                    >
                      {copiedIndex === index ? (
                        <Check className="w-4 h-4 text-green-600" />
                      ) : (
                        <Copy className="w-4 h-4 text-gray-500" />
                      )}
                    </button>

                    {/* Message Content */}
                    {msg.role === 'user' ? (
                      <p className="leading-relaxed whitespace-pre-wrap">{msg.content}</p>
                    ) : (
                      <div className="leading-relaxed text-slate-700 whitespace-pre-wrap">
                        {formatMessage(msg.content)}
                      </div>
                    )}
                  </div>

                  {msg.role === 'user' && (
                    <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-slate-600 flex items-center justify-center flex-shrink-0 mt-1">
                      <User className="w-4 h-4 text-white" />
                    </div>
                  )}
                </div>
              ))}

              {loading && (
                <div className="flex gap-2 sm:gap-3 justify-start">
                  <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-blue-600 flex items-center justify-center flex-shrink-0">
                    <Bot className="w-4 h-4 text-white" />
                  </div>
                  <div className="bg-white border border-slate-200 shadow-sm rounded-2xl px-3 py-2 sm:px-4 sm:py-3">
                    <div className="flex items-center gap-2 text-slate-500">
                      <div className="flex gap-1">
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }}></div>
                        <div className="w-2 h-2 bg-slate-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }}></div>
                      </div>
                      <span className="text-xs sm:text-sm">AI is thinking...</span>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </ScrollArea>

          {/* Input area, stacks on xs screens */}
          <div className="border-t border-slate-200/60 p-2 sm:p-4 bg-white/50">
            <div className="flex flex-col gap-2 sm:flex-row sm:gap-3 w-full">
              <Input
                ref={inputRef}
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Ask me anything about programming, JavaScript, or any topic..."
                onKeyDown={(e) => e.key === 'Enter' && !e.shiftKey && sendMessage()}
                className="flex-1 rounded-xl border-slate-300 focus:border-blue-500 focus:ring-blue-500/20 min-w-0 px-3 py-2 text-sm sm:text-base"
                disabled={loading}
              />
              <Button
                onClick={sendMessage}
                disabled={loading || !input.trim()}
                className="rounded-xl bg-blue-600 hover:bg-blue-700 disabled:opacity-50 px-4 w-full sm:w-auto"
                aria-label="Send message"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
            <p className="text-xs text-slate-500 mt-2 text-center">
              Press Enter to send -  Shift+Enter for new line
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default App;
