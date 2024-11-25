import { useState } from 'react';
import { Bot, User, Send, Brain, Calculator, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import { MdKeyboardVoice } from "react-icons/md";
import { AiFillSound } from "react-icons/ai";

function Addition() {
  const [messages] = useState([
    { isBot: true, message: "Hi! I'm Biddasagor! I am glad that you wanted to learn addition. Let's learn addition together! 🌟" },
    { isBot: true, message: "Let's start . Pick two numbers you like \n \n 1 2 3 4 5 6 7 8 9... " },
    { isBot: false, message: "5 and 3" },
    { isBot: true, message: "Great! Let's solve this step by step:\n1. First, let's start with 5\n2. We need to add 3 to it\n3. We can count: 5... 6, 7, 8\nWhat do you think the answer is?" }
  ]);



  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button onClick={() => window.history.back()} className="p-2 hover:bg-slate-100 rounded-lg">
              <ArrowLeft className="h-5 w-5" />
            </button>
            <div className="flex items-center gap-4">
              <div className="text-sm text-slate-600">Lesson Progress</div>
              <div className="w-32 h-2 bg-slate-200 rounded-full">
                <div className="w-1/3 h-full bg-purple-600 rounded-full"></div>
              </div>
            </div>
            <div className="flex gap-2">
              <Calculator className="w-5 h-5 text-purple-600" />
              <Brain className="w-5 h-5 text-purple-600" />
            </div>
          </div>
        </div>
      </header>

      {/* Main Chat Area */}
      <main className="w-full mx-auto px-4 py-6">
        <div className="bg-white rounded-2xl shadow-sm">
          {/* Chat Messages */}
          <div className="h-[600px] overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div key={index} className={`flex gap-3 ${msg.isBot ? "bg-purple-50" : ""} p-4 rounded-lg`}>
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  msg.isBot ? "bg-purple-200" : "bg-blue-200"
                }`}>
                  {msg.isBot ? 
                    <Bot className="w-5 h-5 text-purple-700" /> : 
                    <User className="w-5 h-5 text-blue-700" />
                  }
                </div>
                <div className="flex-1">
                  <p className={`text-sm font-medium ${msg.isBot ? "text-purple-900" : "text-blue-900"}`}>
                    {msg.isBot ? "Biddasagor" : "You"}
                  </p>
                  <p className="text-slate-700 mt-1 whitespace-pre-line">{msg.message}</p>
                </div>
                <div>
                {msg.isBot ? <AiFillSound className='text-2xl cursor-pointer'></AiFillSound> :''}
                </div>
              </div>
            ))}
          </div>

          {/* Input Area */}
          <div className="border-t p-4">
            <form  className="flex gap-2">
             <div className='flex gap-2 items-center w-full'>
             <input
                name="message"
                placeholder="Type your answer here..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-600  "
              />
              <Link to='/dashboard/learn/Math/quiz'>
              <button 
                type="submit" 
                className="p-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2"
              >
                <Send className="h-4 w-4" />
              </button></Link>
              <div className='p-2 rounded-lg hover:bg-purple-100 focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2 cursor-pointer'>
                <MdKeyboardVoice className='text-2xl'></MdKeyboardVoice>
              </div>
             </div>
            </form>
          </div>
        </div>
      </main>

     
     
    </div>
  );
}

export default Addition;