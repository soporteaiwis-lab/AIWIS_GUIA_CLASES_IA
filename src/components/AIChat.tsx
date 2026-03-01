import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User as UserIcon, Sparkles } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { motion, AnimatePresence } from 'motion/react';
import Markdown from 'react-markdown';

const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default function AIChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: '¡Hola! Soy tu asistente de IA de AIWIS. ¿En qué puedo ayudarte con tu aprendizaje hoy?' }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const [chatSession, setChatSession] = useState<any>(null);

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  useEffect(() => {
    try {
      const session = ai.chats.create({
        model: 'gemini-3-flash-preview',
        config: {
          systemInstruction: 'Eres un asistente experto en Inteligencia Artificial Corporativa para la plataforma AIWIS. Ayudas a los estudiantes a entender conceptos de IA, automatización, LLMs, RAG, agentes, etc. Responde de manera clara, profesional y concisa. Usa formato Markdown para estructurar tus respuestas.',
        }
      });
      setChatSession(session);
    } catch (e) {
      console.error("Failed to initialize chat", e);
    }
  }, []);

  const handleSend = async () => {
    if (!input.trim() || !chatSession || isLoading) return;

    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    try {
      const response = await chatSession.sendMessage({ message: userMsg });
      setMessages(prev => [...prev, { role: 'model', text: response.text }]);
    } catch (error) {
      console.error('Error calling Gemini:', error);
      setMessages(prev => [...prev, { role: 'model', text: 'Lo siento, hubo un error al procesar tu solicitud. Por favor, intenta de nuevo.' }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSend();
    }
  };

  return (
    <>
      {/* Floating Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            className="fixed bottom-6 right-6 z-[110] flex items-end gap-4"
          >
            {/* Tooltip */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 2 }}
              className="hidden md:block bg-bg-card border border-border-subtle text-text-primary px-4 py-3 rounded-2xl shadow-xl relative mb-2"
            >
              <p className="text-sm font-medium">¡Hola! ¿Tienes dudas? Pregúntame aquí ✨</p>
              <div className="absolute -right-[7px] bottom-4 w-3.5 h-3.5 bg-bg-card border-r border-t border-border-subtle transform rotate-45" />
            </motion.div>

            <button
              onClick={() => setIsOpen(true)}
              className="p-4 bg-gradient-to-r from-accent-primary to-accent-secondary text-white rounded-full shadow-[0_0_20px_rgba(0,212,170,0.4)] hover:shadow-[0_0_30px_rgba(0,212,170,0.6)] transition-all flex items-center justify-center group"
            >
              <Sparkles size={24} className="group-hover:scale-110 transition-transform" />
            </button>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-6 right-6 z-[110] w-[350px] sm:w-[400px] h-[500px] max-h-[80vh] bg-bg-elevated border border-border-subtle rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="p-4 bg-bg-card border-b border-border-subtle flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-accent-primary/20 rounded-lg">
                  <Bot size={20} className="text-accent-primary" />
                </div>
                <div>
                  <h3 className="font-bold text-text-primary text-sm">Asistente AIWIS</h3>
                  <p className="text-xs text-text-secondary">Con tecnología Gemini</p>
                </div>
              </div>
              <button 
                onClick={() => setIsOpen(false)}
                className="p-2 text-text-secondary hover:text-white hover:bg-bg-elevated rounded-lg transition-colors"
              >
                <X size={20} />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4 hide-scrollbar">
              {messages.map((msg, idx) => (
                <div 
                  key={idx} 
                  className={`flex gap-3 ${msg.role === 'user' ? 'flex-row-reverse' : ''}`}
                >
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                    msg.role === 'user' ? 'bg-accent-secondary/20 text-accent-secondary' : 'bg-accent-primary/20 text-accent-primary'
                  }`}>
                    {msg.role === 'user' ? <UserIcon size={16} /> : <Bot size={16} />}
                  </div>
                  <div className={`max-w-[75%] p-3 rounded-2xl text-sm ${
                    msg.role === 'user' 
                      ? 'bg-accent-secondary text-white rounded-tr-sm' 
                      : 'bg-bg-card border border-border-subtle text-text-primary rounded-tl-sm'
                  }`}>
                    {msg.role === 'user' ? (
                      msg.text
                    ) : (
                      <div className="markdown-body prose prose-invert prose-sm max-w-none prose-p:leading-relaxed prose-pre:bg-bg-base prose-pre:border prose-pre:border-border-subtle">
                        <Markdown>{msg.text}</Markdown>
                      </div>
                    )}
                  </div>
                </div>
              ))}
              {isLoading && (
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-accent-primary/20 text-accent-primary flex items-center justify-center flex-shrink-0">
                    <Bot size={16} />
                  </div>
                  <div className="max-w-[75%] p-4 rounded-2xl bg-bg-card border border-border-subtle rounded-tl-sm flex items-center gap-2">
                    <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                    <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                    <div className="w-2 h-2 bg-accent-primary rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                  </div>
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="p-4 bg-bg-card border-t border-border-subtle">
              <div className="relative flex items-center">
                <textarea
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={handleKeyDown}
                  placeholder="Haz una pregunta..."
                  className="w-full bg-bg-base border border-border-subtle rounded-xl pl-4 pr-12 py-3 text-sm text-text-primary focus:outline-none focus:border-accent-primary resize-none h-[46px] hide-scrollbar"
                  rows={1}
                />
                <button
                  onClick={handleSend}
                  disabled={!input.trim() || isLoading}
                  className="absolute right-2 p-2 text-accent-primary hover:text-accent-secondary disabled:opacity-50 disabled:hover:text-accent-primary transition-colors"
                >
                  <Send size={18} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
