import { useState } from 'react';
import { Bot, User, Send, Brain, Calculator, ArrowLeft } from 'lucide-react';


function Chatbot() {
  const [messages, setMessages] = useState([
    { isBot: true, message: "If you need further help on anything just ask me!" },
    
  ]);
  const [input, setInput] = useState('');

  

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-4xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-purple-600" />
              <h1 className="text-lg font-semibold text-gray-800">Biddasagor</h1>
            </div>
            <Calculator className="h-5 w-5 text-purple-600" />
          </div>
        </div>
      </header>

      {/* Chat Container */}
      <main className="max-w-4xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm h-[600px] flex flex-col">
          {/* Messages Area */}
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.isBot ? 'bg-purple-50' : ''} p-4 rounded-lg`}
              >
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center ${
                    msg.isBot ? 'bg-purple-200' : 'bg-blue-200'
                  }`}
                >
                  {msg.isBot ? (
                    <Bot className="w-5 h-5 text-purple-700" />
                  ) : (
                    <User className="w-5 h-5 text-blue-700" />
                  )}
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${
                    msg.isBot ? 'text-purple-900' : 'text-blue-900'
                  }`}>
                    {msg.isBot ? 'Biddasagor' : 'You'}
                  </p>
                  <p className="text-gray-700 mt-1 whitespace-pre-line">
                    {msg.message}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <form  className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type your message..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
          </div>
        </div>

        {/* Learning Tools */}
        <div className="mt-4 flex gap-2">
         
         
        </div>
      </main>
    </div>
  );
}

export default Chatbot;