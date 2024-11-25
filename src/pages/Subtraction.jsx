import { ArrowLeft, Brain, Trophy, Bot, HelpCircle, ArrowRight, Send } from 'lucide-react'

export default function Subtraction() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white border-b shadow-sm sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 py-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-4">
              <button className="p-2 hover:bg-purple-50 rounded-full transition-colors">
                <ArrowLeft className="h-5 w-5 text-purple-600" />
              </button>
              <div className="flex items-center gap-2">
                <Brain className="h-6 w-6 text-purple-600" />
                <h1 className="text-xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 text-transparent bg-clip-text">
                  Learn Subtraction with Biddasagor!
                </h1>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="flex items-center gap-3">
                <span className="text-sm font-medium text-gray-600">
                  Question 1/10
                </span>
                <div className="w-32 h-3 bg-gray-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-purple-500 to-blue-500"
                    style={{ width: '10%' }}
                  />
                </div>
              </div>

              <div className="flex items-center gap-2 bg-yellow-50 px-3 py-1.5 rounded-full">
                <Trophy className="h-4 w-4 text-yellow-600" />
                <span className="text-sm font-medium text-yellow-700">0 pts</span>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-xl shadow-sm overflow-hidden">
          {/* Chat Messages */}
          <div className="h-[400px] overflow-y-auto p-4 space-y-4">
            <div className="flex gap-3 bg-purple-50 p-4 rounded-lg">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-900">Biddasagor</p>
                <p className="text-gray-700 mt-1">Hi! I'm Biddasagor! Let's learn Subtraction together! 🌟</p>
              </div>
            </div>
            <div className="flex gap-3 bg-purple-50 p-4 rounded-lg">
              <div className="shrink-0 w-10 h-10 rounded-full flex items-center justify-center bg-gradient-to-br from-purple-500 to-blue-500">
                <Bot className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1">
                <p className="text-sm font-medium text-purple-900">Biddasagor</p>
                <p className="text-gray-700 mt-1">Let's start with a simple problem: What's 5 - 3?</p>
              </div>
            </div>
          </div>

          {/* Visual Aid */}
          <div className="px-4 py-6 border-t border-b bg-gray-50">
            <div className="flex items-center justify-center gap-8">
              <div className="flex flex-wrap gap-2 w-32">
                {[...Array(5)].map((_, i) => (
                  <div
                    key={`first-${i}`}
                    className="w-6 h-6 bg-purple-200 rounded-lg"
                  />
                ))}
              </div>
              <div className="text-3xl font-bold text-purple-600">-</div>
              <div className="flex flex-wrap gap-2 w-32">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={`second-${i}`}
                    className="w-6 h-6 bg-blue-200 rounded-lg"
                  />
                ))}
              </div>
              <div className="text-3xl font-bold text-purple-600">=</div>
              <div className='p-3 border-gray-300 h-[100px] bg-white w-[100px] shadow-lg rounded-xl'>

              </div>
            </div>
           
          </div>

          {/* Input Area */}
          <div className="p-4 bg-white border-t">
            <form className="flex gap-3">
              <input
                type="text"
                placeholder="Type your answer..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button
                type="submit"
                className="px-4 py-2 bg-purple-600 text-white rounded-lg hover:bg-purple-700 transition-colors flex items-center gap-2"
              >
                <span>Send</span>
                <Send className="w-4 h-4" />
              </button>
            </form>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mt-6">
          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-50 text-yellow-700 hover:bg-yellow-100 transition-colors">
            <HelpCircle className="w-4 h-4" />
            <span>Hint</span>
          </button>


          <button className="flex items-center gap-2 px-4 py-2 rounded-full bg-green-500 text-white hover:bg-green-600 transition-colors">
            <span>Next</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </main>
    </div>
  )
}

