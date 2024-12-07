/* eslint-disable react/no-unknown-property */
import { useState, useRef, useEffect } from 'react';
import { Bot, User, Send, Brain, Calculator, ArrowLeft, PlayCircle, Clock, X, XCircle } from 'lucide-react';


const VideoExplanation = ({ problem, onClose }) => {
  const parts = problem.split(/([+\-×÷])/).filter(part => part.trim());
  const num1 = parseInt(parts[0]) || 0;
  const operator = parts[1];
  const num2 = parseInt(parts[2]) || 0;

  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [step, setStep] = useState(0);

  const getOperationSymbol = (op) => {
    switch(op) {
      case '×': return 'multiplication';
      case '÷': return 'division';
      case '+': return 'addition';
      case '-': return 'subtraction';
      default: return '';
    }
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    let startTime;

    const drawCircle = (x, y, color = '#7C3AED', text = '', size = 15) => {
      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = color;
      ctx.fill();
      ctx.strokeStyle = '#fff';
      ctx.lineWidth = 2;
      ctx.stroke();
      if (text) {
        ctx.fillStyle = 'white';
        ctx.font = '12px Arial';
        ctx.textAlign = 'center';
        ctx.fillText(text, x, y + 4);
      }
    };

    const drawText = (text, x, y, options = {}) => {
      const { 
        size = '24px', 
        color = '#1F2937', 
        font = 'Arial',
        isBold = false 
      } = options;

      ctx.font = `${isBold ? 'bold' : ''} ${size} ${font}`;
      ctx.fillStyle = color;
      ctx.fillText(text, x, y);
    };

    const animate = (timestamp) => {
      if (!isPlaying) return;
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 4000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = 'center';

      // Draw title
      drawText(
        `${getOperationSymbol(operator).toUpperCase()}: ${num1} ${operator} ${num2}`,
        canvas.width / 2,
        40,
        { size: '28px', isBold: true, color: '#4B5563' }
      );

      switch (operator) {
        case '+':
          const dotsToShow1 = Math.min(num1, Math.floor(progress * (num1 + num2)));
          const dotsToShow2 = Math.min(num2, Math.floor(progress * (num1 + num2)) - num1);

          // First number visualization
          drawText(`First Number: ${num1}`, 150, 80, { color: '#7C3AED' });
          for (let i = 0; i < num1; i++) {
            const x = 50 + (i % 10) * 40;
            const y = 120 + Math.floor(i / 10) * 40;
            drawCircle(x, y, i < dotsToShow1 ? '#7C3AED' : '#E5E7EB', (i + 1).toString());
          }

          // Second number visualization
          drawText(`Second Number: ${num2}`, 150, 200, { color: '#EC4899' });
          for (let i = 0; i < num2; i++) {
            const x = 50 + (i % 10) * 40;
            const y = 240 + Math.floor(i / 10) * 40;
            drawCircle(x, y, i < dotsToShow2 ? '#EC4899' : '#E5E7EB', (i + 1).toString());
          }

          // Result
          if (progress > 0.8) {
            drawText(
              `Total: ${num1 + num2}`,
              canvas.width / 2,
              350,
              { size: '32px', isBold: true, color: '#059669' }
            );
          }
          break;

        case '-':
          const remainingDots = Math.max(num1 - Math.floor(progress * num2), num1 - num2);
          
          drawText(`Starting with ${num1}`, 150, 80, { color: '#7C3AED' });
          
          for (let i = 0; i < num1; i++) {
            const x = 50 + (i % 10) * 40;
            const y = 120 + Math.floor(i / 10) * 40;
            const isRemoved = i >= remainingDots;
            
            drawCircle(x, y, isRemoved ? '#EF4444' : '#7C3AED', (i + 1).toString());
            
            if (isRemoved && progress < 0.8) {
              ctx.beginPath();
              ctx.strokeStyle = '#EF4444';
              ctx.lineWidth = 3;
              ctx.moveTo(x - 15, y - 15);
              ctx.lineTo(x + 15, y + 15);
              ctx.stroke();
              
              ctx.moveTo(x + 15, y - 15);
              ctx.lineTo(x - 15, y + 15);
              ctx.stroke();
            }
          }

          drawText(
            `Removing ${num2}`,
            150,
            200,
            { color: '#EF4444' }
          );

          if (progress > 0.8) {
            drawText(
              `Result: ${remainingDots}`,
              canvas.width / 2,
              350,
              { size: '32px', isBold: true, color: '#059669' }
            );
          }
          break;

        case '×':
          const rows = Math.min(num2, Math.floor(progress * num2));
          
          drawText(
            `${num1} repeated ${num2} times`,
            canvas.width / 2,
            80,
            { color: '#7C3AED' }
          );
          
          for (let i = 0; i < rows; i++) {
            drawText(
              `Group ${i + 1}:`,
              50,
              120 + (i * 50),
              { size: '16px', color: '#6B7280' }
            );
            
            for (let j = 0; j < num1; j++) {
              const x = 120 + (j % 10) * 40;
              const y = 110 + (i * 50);
              drawCircle(x, y, '#7C3AED', ((i * num1) + j + 1).toString());
            }
          }

          if (progress > 0.8) {
            drawText(
              `Result: ${num1 * num2}`,
              canvas.width / 2,
              350,
              { size: '32px', isBold: true, color: '#059669' }
            );
          }
          break;

        case '÷':
          const groupsToShow = Math.min(num2, Math.floor(progress * num2));
          const itemsPerGroup = Math.floor(num1 / num2);
          const remainder = num1 % num2;
          
          drawText(
            `Dividing ${num1} into ${num2} equal groups`,
            canvas.width / 2,
            80,
            { color: '#7C3AED' }
          );
          
          for (let i = 0; i < groupsToShow; i++) {
            drawText(
              `Group ${i + 1}`,
              80,
              130 + (i * 60),
              { size: '16px', color: '#6B7280' }
            );
            
            for (let j = 0; j < itemsPerGroup; j++) {
              const x = 150 + (j * 35);
              const y = 120 + (i * 60);
              drawCircle(x, y, '#7C3AED', ((i * itemsPerGroup) + j + 1).toString());
            }
          }

          if (progress > 0.8) {
            drawText(
              `Each group has ${itemsPerGroup}${remainder ? ` (Remainder: ${remainder})` : ''}`,
              canvas.width / 2,
              350,
              { size: '32px', isBold: true, color: '#059669' }
            );
          }
          break;
      }

      setProgress(progress);

      if (progress < 1 && isPlaying) {
        animationFrame = requestAnimationFrame(animate);
      }
    };

    if (isPlaying) {
      animationFrame = requestAnimationFrame(animate);
    }

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [num1, num2, operator, isPlaying]);

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-xl p-8 max-w-4xl w-full mx-4">
        <div className="flex justify-between items-center mb-6">
          <h3 className="text-2xl font-bold text-gray-900">
            {getOperationSymbol(operator)} of {num1} {operator} {num2}
          </h3>
          <div className="flex items-center gap-4">
            <button
              onClick={() => {
                setIsPlaying(!isPlaying);
                setProgress(0);
              }}
              className="px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
            >
              {isPlaying ? 'Pause' : 'Restart'}
            </button>
            <button
              onClick={onClose}
              className="p-2 hover:bg-gray-100 rounded-full transition-colors"
            >
              <XCircle className="w-6 h-6 text-gray-500" />
            </button>
          </div>
        </div>

        <canvas
          ref={canvasRef}
          width={800}
          height={400}
          className="w-full border rounded-xl bg-white shadow-inner"
        />

        <div className="mt-6">
          <div className="w-full bg-gray-200 rounded-full h-3">
            <div
              className="bg-purple-600 h-3 rounded-full transition-all duration-300"
              style={{ width: `${progress * 100}%` }}
            />
          </div>
        </div>
      </div>
    </div>
  );
};






function Chatbot() {
  const [messages, setMessages] = useState([
    {
      isBot: true,
      message: "Hi! I'm your math buddy! Try these:\n• Addition (12+13)\n• Subtraction (25-10)\n• Multiplication (4×6)\n• Division (15÷3)",
      type: 'welcome'
    },
  ]);
  const [input, setInput] = useState('');
  const messagesEndRef = useRef(null);

  const [videoModal, setVideoModal] = useState({
    isOpen: false,
    problem: null
  });
  // Auto-scroll functionality
  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  // Get current time
  const getCurrentTime = () => {
    const now = new Date();
    return now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  const getRandomEncouragement = () => {
    const encouragements = [
      "Great job! You're mastering this! 🌟",
      "Excellent work! Keep that brain working! 💪",
      "Perfect! You're on a roll! 🚀",
      "Math is your superpower! 📚",
      "You're becoming a math champion! ✨",
      "Outstanding effort! Keep shining! 🎯",
      "You're solving like a pro! 💫",
      "Your math skills are growing! 🧠",
      "Fantastic progress! 🌈",
      "You're a natural problem solver! 🎨"
    ];
    return encouragements[Math.floor(Math.random() * encouragements.length)];
  };

  const generateExplanation = (expression) => {
    const numbers = expression.match(/\d+/g).map(Number);
    const operator = expression.match(/[+\-×÷]/)?.[0];

    let result;
    let explanation;
    let steps = [];
    let visualSteps = [];

    switch (operator) {
      case '+':
        result = numbers[0] + numbers[1];
        visualSteps = Array(numbers[0] + numbers[1]).fill('🔵');
        steps = [
          `💡 Let's solve ${numbers[0]} + ${numbers[1]}`,
          `1️⃣ First number: ${numbers[0]}\n${'🔵'.repeat(numbers[0])}`,
          `2️⃣ Second number: ${numbers[1]}\n${'🟡'.repeat(numbers[1])}`,
          `3️⃣ When we add them together:\n${'🔵'.repeat(numbers[0])}${'🟡'.repeat(numbers[1])}`,
          `4️⃣ Step by step:\n   ${numbers[0]}\n   + ${numbers[1]}\n   ${'━'.repeat(6)}\n   ${result}`,
          `\n✨ Final Answer: ${result}`,
          `\n📝 Key Concept: Addition combines quantities together`,
          `\n🌟 Real World Example:\nIf you have ${numbers[0]} apples and get ${numbers[1]} more,\nyou'll end up with ${result} apples!`,
          `\n${getRandomEncouragement()}`
        ];
        break;

      case '-':
        result = numbers[0] - numbers[1];
        steps = [
          `💡 Let's solve ${numbers[0]} - ${numbers[1]}`,
          `1️⃣ Starting with: ${numbers[0]}\n${'🔵'.repeat(numbers[0])}`,
          `2️⃣ Taking away: ${numbers[1]}\n${'🟡'.repeat(numbers[1])}`,
          `3️⃣ After subtraction:\n${'🔵'.repeat(result)}`,
          `4️⃣ Step by step:\n   ${numbers[0]}\n   - ${numbers[1]}\n   ${'━'.repeat(6)}\n   ${result}`,
          `\n✨ Final Answer: ${result}`,
          `\n📝 Key Concept: Subtraction finds what remains after taking away`,
          `\n🌟 Real World Example:\nIf you have ${numbers[0]} cookies and eat ${numbers[1]} of them,\nyou'll have ${result} cookies left!`,
          `\n${getRandomEncouragement()}`
        ];
        break;

      case '×':
        {
          result = numbers[0] * numbers[1];
          let multiplicationVisual = Array(numbers[1])
            .fill('🔵'.repeat(numbers[0]))
            .join('\n');
          steps = [
            `💡 Let's solve ${numbers[0]} × ${numbers[1]}`,
            `1️⃣ We're multiplying ${numbers[0]} by ${numbers[1]}`,
            `2️⃣ This means adding ${numbers[0]}, ${numbers[1]} times:`,
            `3️⃣ Visual representation:\n${multiplicationVisual}`,
            `4️⃣ Step by step:\n   ${numbers[0]}\n   × ${numbers[1]}\n   ${'━'.repeat(6)}\n   ${result}`,
            `\n✨ Final Answer: ${result}`,
            `\n📝 Key Concept: Multiplication is repeated addition`,
            `\n🌟 Real World Example:\nIf you have ${numbers[1]} bags with ${numbers[0]} candies each,\nyou have ${result} candies in total!`,
            `\n${getRandomEncouragement()}`
          ];
          break;
        }

      case '÷':
        result = numbers[0] / numbers[1];
        steps = [
          `💡 Let's solve ${numbers[0]} ÷ ${numbers[1]}`,
          `1️⃣ We're dividing ${numbers[0]} into ${numbers[1]} equal parts`,
          `2️⃣ Each part will have: ${result} units`,
          `3️⃣ Verification: ${numbers[1]} × ${result} = ${numbers[0]}`,
          `4️⃣ Step by step:\n   ${numbers[0]}\n   ÷ ${numbers[1]}\n   ${'━'.repeat(6)}\n   ${result}`,
          `\n✨ Final Answer: ${result}`,
          `\n📝 Key Concept: Division shares into equal groups`,
          `\n🌟 Real World Example:\nIf you share ${numbers[0]} candies among ${numbers[1]} friends,\neach friend gets ${result} candies!`,
          `\n${getRandomEncouragement()}`
        ];
        break;
    }

    explanation = steps.join('\n\n');
    return { result, explanation };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;

    const newMessages = [
      ...messages,
      {
        isBot: false,
        message: input,
        time: getCurrentTime()
      }
    ];

    const mathExpression = input.replace(/\s/g, '');
    if (/^\d+[+\-×÷]\d+$/.test(mathExpression)) {
      const { result, explanation } = generateExplanation(mathExpression);
      newMessages.push({
        isBot: true,
        message: explanation,
        result: result,
        hasVideo: true,
        problem: mathExpression,
        time: getCurrentTime()
      });
    } else {
      newMessages.push({
        isBot: true,
        message: "Please enter a valid math problem! Try these formats:\n• Addition: 12+13\n• Subtraction: 25-10\n• Multiplication: 4×6\n• Division: 15÷3",
        time: getCurrentTime()
      });
    }

    setMessages(newMessages);
    setInput('');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-white border-b shadow-sm sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button className="p-2 hover:bg-gray-100 rounded-full transition-colors">
              <ArrowLeft className="h-5 w-5 text-gray-600" />
            </button>
            <div className="flex items-center gap-3">
              <Brain className="h-6 w-6 text-purple-600" />
              <h1 className="text-lg font-semibold text-gray-800">Biddasagor</h1>
            </div>
            <div className="flex items-center gap-2">
              <Calculator className="h-5 w-5 text-purple-600" />
              <div className="text-sm text-gray-500">
                {new Date().toLocaleTimeString()}
              </div>
            </div>
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-4 py-6">
        <div className="bg-white rounded-lg shadow-sm min-h-[600px] flex flex-col">
          <div className="flex-1 overflow-y-auto p-4 space-y-4">
            {messages.map((msg, index) => (
              <div
                key={index}
                className={`flex gap-3 ${msg.isBot ? 'justify-start' : 'justify-end'
                  } animate-fade-in`}
              >
                {msg.isBot ? (
                  <div className="flex gap-3 max-w-[100%] bg-purple-50 p-4 rounded-lg">
                    <div className="w-8 h-8 rounded-full flex-shrink-0 bg-purple-200 flex items-center justify-center">
                      <Bot className="w-5 h-5 text-purple-700" />
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="text-sm font-medium text-purple-900">Biddasagor</p>
                        <span className="text-xs text-gray-400">
                          {new Date().toLocaleTimeString()}
                        </span>
                      </div>
                      {msg.result ? (
                        <div className="mt-2">
                          <div className="bg-purple-100 p-3 rounded-lg inline-block mb-3">
                            <span className="text-xl font-bold text-purple-700">
                              {msg.problem} = {msg.result}
                            </span>
                          </div>
                          <div className="mt-2 space-y-3">
                            <p className="text-gray-700 whitespace-pre-line leading-relaxed">
                              {msg.message}
                            </p>

                            {msg.hasVideo && (
                              <button
                                className="mt-4 flex items-center gap-2 px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors"
                                onClick={() => setVideoModal({ isOpen: true, problem: msg.problem })}
                              >
                                <PlayCircle className="w-5 h-5" />
                                Watch Visual Explanation
                              </button>
                            )}

                          </div>
                        </div>
                      ) : (
                        <p className="text-gray-700 mt-1 whitespace-pre-line text-base leading-relaxed">
                          {msg.message}
                        </p>
                      )}
                    </div>
                  </div>
                ) : (
                  <div className="flex flex-col items-end max-w-[90%]">
                    <div className="bg-blue-500 text-white px-4 py-3 rounded-lg">
                      <p className="whitespace-pre-line">{msg.message}</p>
                    </div>
                    <span className="text-xs text-gray-400 mt-1">
                      {new Date().toLocaleTimeString()}
                    </span>
                  </div>
                )}
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          <div className="border-t p-4 bg-white sticky bottom-0">
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                placeholder="Type a math problem (e.g., 12+13, 25-10, 4×6, 15÷3)..."
                className="flex-1 px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                autoComplete="off"
              />
              <button
                type="submit"
                className="bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition-colors flex items-center justify-center"
                disabled={!input.trim()}
              >
                <Send className="w-5 h-5" />
              </button>
            </form>
            <div className="mt-2 text-xs text-gray-400 text-center">
              Type a mathematical expression using +, -, ×, or ÷
            </div>
          </div>  
        </div>

        {/* Optional: Quick Action Buttons */}
        <div className="mt-4 flex gap-2 justify-center flex-wrap">
          <button
            onClick={() => setInput('12+13')}
            className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
          >
            Addition Example
          </button>
          <button
            onClick={() => setInput('25-10')}
            className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
          >
            Subtraction Example
          </button>
          <button
            onClick={() => setInput('4×6')}
            className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
          >
            Multiplication Example
          </button>
          <button
            onClick={() => setInput('15÷3')}
            className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
          >
            Division Example
          </button>
        </div>
      </main>
      {videoModal.isOpen && (
        <VideoExplanation
          problem={videoModal.problem}
          onClose={() => setVideoModal({ isOpen: false, problem: null })}
        />
      )}
      {/* Add some CSS animations */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }

        .animate-fade-in {
          animation: fadeIn 0.3s ease-out forwards;
        }
      `}</style>
    </div>
  );
}

export default Chatbot;