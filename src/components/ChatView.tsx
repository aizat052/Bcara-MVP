/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, Paperclip, Sparkles, AlertCircle } from 'lucide-react';
import { ChatMessage } from '../types';

interface ChatViewProps {
  onNextStep: (matterText: string) => void;
  initialMessage?: string;
}

export default function ChatView({ onNextStep, initialMessage }: ChatViewProps) {
  const [messages, setMessages] = useState<ChatMessage[]>([
    {
      id: 'm1',
      sender: 'ai',
      text: "Hello, I'm the Bcara Assistant. Tell me briefly about the legal matter you need help with today.",
      timestamp: '09:30 AM'
    },
    ...(initialMessage ? [{
      id: 'm-init',
      sender: 'client' as const,
      text: initialMessage,
      timestamp: '09:31 AM'
    }] : [])
  ]);
  const [inputText, setInputText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const chatBottomRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    chatBottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  const handleSend = (textToSend: string) => {
    if (!textToSend.trim()) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      sender: 'client',
      text: textToSend,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages(prev => [...prev, userMsg]);
    setInputText('');
    setIsTyping(true);

    // Simulate AI response response
    setTimeout(() => {
      setIsTyping(false);
      let replyText = "Understood. That sounds like a sensitive situation. To assess the legal validity or options available under your matter, could you clarify when this initially occurred?";
      if (textToSend.toLowerCase().includes('employment') || textToSend.toLowerCase().includes('compete') || textToSend.toLowerCase().includes('contract')) {
        replyText = "I see. Contract disputes, specifically relating to non-compete enforceability or employment agreements, require examining specific geographic restrictions and duration constraints. Do you have a copy of the agreement at hand that we can analyze in the next step?";
      } else if (textToSend.toLowerCase().includes('family') || textToSend.toLowerCase().includes('divorce')) {
        replyText = "Thank you for sharing that. Family mediation and custody matters require a very thorough review of previous court filings or voluntary agreements. We will categorize this under Family Law. Can you provide any court reference codes?";
      }

      setMessages(prev => [
        ...prev,
        {
          id: `ai-${Date.now()}`,
          sender: 'ai',
          text: replyText,
          timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
        }
      ]);
    }, 1500);
  };

  const pressQuickReply = (label: string) => {
    handleSend(label);
  };

  const handleFinalize = () => {
    // Collect the user's side of the conversation
    const clientMessages = messages.filter(m => m.sender === 'client').map(m => m.text);
    const textSnippet = clientMessages.join(' | ') || "Trouble with a recent employment contract non-compete clause.";
    onNextStep(textSnippet);
  };

  return (
    <div id="chat-view" className="max-w-3xl mx-auto flex flex-col h-[calc(100vh-230px)] min-h-[500px] animate-in fade-in duration-300">
      {/* Progress bar info */}
      <div className="w-full mb-6 px-4">
        <div className="flex justify-between items-center mb-2">
          <span className="font-sans text-xs text-slate-500 font-medium">Step 2 of 5</span>
          <span className="font-sans text-xs text-slate-900 dark:text-slate-100 font-bold">Matter Description</span>
        </div>
        <div className="w-full bg-slate-100 dark:bg-slate-800 h-1.5 rounded-full overflow-hidden">
          <div className="bg-[#C8A96B] h-full w-[40%] transition-all duration-500 ease-out"></div>
        </div>
      </div>

      {/* Main chat box container */}
      <div className="flex-1 bg-white dark:bg-slate-900 rounded-xl border border-slate-200/80 dark:border-slate-800 shadow-sm overflow-hidden flex flex-col min-h-0">
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map(msg => (
            <div
              key={msg.id}
              className={`flex items-end gap-3 ${msg.sender === 'client' ? 'justify-end' : 'justify-start'}`}
            >
              {msg.sender === 'ai' && (
                <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                  <Bot className="w-4 h-4 text-white" />
                </div>
              )}
              <div
                className={`max-w-[75%] p-4 rounded-2xl shadow-sm ${
                  msg.sender === 'client'
                    ? 'bg-slate-100 dark:bg-slate-800 text-slate-800 dark:text-slate-100 rounded-br-none border border-slate-200/50 dark:border-slate-700/50'
                    : 'bg-[#0f172a] text-white rounded-bl-none'
                }`}
              >
                <p className="font-sans text-sm leading-relaxed whitespace-pre-line">{msg.text}</p>
                <span className="block text-[9px] text-right mt-1.5 opacity-60 font-mono">{msg.timestamp}</span>
              </div>
            </div>
          ))}

          {isTyping && (
            <div className="flex items-end gap-3 justify-start animate-pulse">
              <div className="w-8 h-8 rounded-full bg-slate-900 flex items-center justify-center flex-shrink-0">
                <Bot className="w-4 h-4 text-white" />
              </div>
              <div className="bg-slate-100 dark:bg-slate-800 p-4 rounded-2xl rounded-bl-none flex gap-1">
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce"></span>
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                <span className="w-1.5 h-1.5 bg-slate-500 rounded-full animate-bounce [animation-delay:0.4s]"></span>
              </div>
            </div>
          )}
          <div ref={chatBottomRef} />
        </div>

        {/* Action button inside input body to proceed */}
        <div className="bg-slate-50 dark:bg-slate-900 px-6 py-3 border-t border-slate-100 dark:border-slate-800/80 flex justify-between items-center gap-4">
          <div className="flex items-center gap-1.5 text-xs text-slate-400">
            <Sparkles className="w-3.5 h-3.5 text-[#C8A96B]" />
            <span>AI Assistant drafted briefs live</span>
          </div>
          <button
            onClick={handleFinalize}
            className="bg-[#C8A96B] dark:bg-amber-600/90 text-slate-950 dark:text-white px-4 py-1.5 rounded-lg text-xs font-semibold hover:brightness-105 active:scale-95 transition-all cursor-pointer"
          >
            Proceed to Document Upload &rarr;
          </button>
        </div>
      </div>

      {/* Input controls panel */}
      <div className="mt-4 space-y-3">
        {/* Chips */}
        <div className="flex flex-wrap gap-2 justify-center">
          <button
            onClick={() => pressQuickReply('Employment Law')}
            className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-[#d8e3fb] dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors active:scale-95"
          >
            Employment Law
          </button>
          <button
            onClick={() => pressQuickReply('Contract Dispute')}
            className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-[#d8e3fb] dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors active:scale-95"
          >
            Contract Dispute
          </button>
          <button
            onClick={() => pressQuickReply('Family Law')}
            className="px-4 py-1.5 bg-slate-100 dark:bg-slate-800 hover:bg-[#d8e3fb] dark:hover:bg-slate-750 text-slate-800 dark:text-slate-200 text-xs font-medium rounded-full border border-slate-200 dark:border-slate-700 cursor-pointer transition-colors active:scale-95"
          >
            Family Law
          </button>
        </div>

        {/* Input Bar */}
        <div className="flex items-center bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-md p-2 focus-within:ring-2 focus-within:ring-amber-500/20 focus-within:border-amber-500">
          <button
            onClick={() => handleSend("Draft list of uploaded agreement evidence files")}
            className="p-2.5 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 rounded-lg transition-colors cursor-pointer"
            title="Upload Document placeholder"
          >
            <Paperclip className="w-5 h-5" />
          </button>
          <input
            type="text"
            value={inputText}
            onChange={e => setInputText(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSend(inputText)}
            placeholder="Type your description or message here..."
            className="flex-grow bg-transparent border-none text-slate-900 dark:text-slate-100 text-sm focus:outline-none focus:ring-0 px-2"
          />
          <button
            onClick={() => handleSend(inputText)}
            className="bg-slate-900 dark:bg-slate-800 hover:bg-[#0f172a] text-white p-2.5 rounded-lg active:scale-95 transition-transform flex items-center justify-center cursor-pointer"
          >
            <Send className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
}
