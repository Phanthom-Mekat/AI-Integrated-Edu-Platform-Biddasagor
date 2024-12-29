/* eslint-disable react/no-unknown-property */
import { useState, useRef, useEffect } from 'react';
import { Bot, Send, Brain, Calculator, ArrowLeft, PlayCircle, Volume2, VolumeX, XCircle } from 'lucide-react';


const VideoExplanation = ({ problem, onClose }) => {
  const parts = problem.split(/([+\-*÷])/).filter(part => part.trim());
  const num1 = parseInt(parts[0]) || 0;
  const operator = parts[1];
  const num2 = parseInt(parts[2]) || 0
    ;

  const canvasRef = useRef(null);
  const [progress, setProgress] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  const [isSpeaking, setIsSpeaking] = useState(false);
  const generateVoiceExplanation = () => {
    const operationName = getOperationSymbol(operator);
    let explanation = `Let's solve ${num1} ${operator} ${num2}, which is a ${operationName} problem. `;

    switch (operator) {
      case '+':
        explanation += `We start with ${num1}, and we're adding ${num2}. `;
        explanation += `When we add these numbers together, we'll get ${num1 + num2}. `;
        explanation += `Think of it like combining groups: if you have ${num1} items and add ${num2} more, you'll have a total of ${num1 + num2} items.`;
        break;
      case '-':
        explanation += `We begin with ${num1}, and we're subtracting ${num2}. `;
        explanation += `This means we're taking away ${num2} from ${num1}. `;
        explanation += `After subtraction, we'll be left with ${num1 - num2}. `;
        explanation += `Imagine you have ${num1} cookies and eat ${num2} of them, you'll have ${num1 - num2} cookies remaining.`;
        break;
      case '*':
        explanation += `We're multiplying ${num1} by ${num2}. `;
        explanation += `This is like adding ${num1}, ${num2} times. `;
        explanation += `When we multiply, we'll get ${num1 * num2}. `;
        explanation += `For example, if you have ${num2} bags with ${num1} candies in each bag, you'll have a total of ${num1 * num2} candies.`;
        break;
      case '÷':
        explanation += `We're dividing ${num1} into ${num2} equal groups. `;
        explanation += `Each group will have ${Math.floor(num1 / num2)} items. `;
        if (num1 % num2 !== 0) {
          explanation += `There will also be a remainder of ${num1 % num2}. `;
        }
        explanation += `Think of it like sharing ${num1} candies equally among ${num2} friends.`;
        break;
    }

    return explanation;
  };
  const speakExplanation = () => {
    if ('speechSynthesis' in window) {
      const utterance = new SpeechSynthesisUtterance(generateVoiceExplanation());
      utterance.rate = 0.9; // Slightly slower for clarity
      utterance.pitch = 1.0;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    } else {
      alert('Text-to-speech not supported in this browser');
    }
  };
  const stopSpeaking = () => {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  };


  const getOperationSymbol = (op) => {
    switch (op) {
      case '*': return 'multiplication';
      case '÷': return 'division';
      case '+': return 'addition';
      case '-': return 'subtraction';
      default: return '';
    }
  };

  const drawCircle = (ctx, x, y, color = '#7C3AED', text = '', size = 15) => {
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

  const drawText = (ctx, text, x, y, options = {}) => {
    const { size = '24px', color = '#1F2937', font = 'Arial', isBold = false } = options;
    ctx.font = `${isBold ? 'bold' : ''} ${size} ${font}`;
    ctx.fillStyle = color;
    ctx.fillText(text, x, y);
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animationFrame;
    let startTime;

    const animate = (timestamp) => {
      if (!isPlaying) return;
      if (!startTime) startTime = timestamp;
      const progress = (timestamp - startTime) / 4000;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = 'center';

      // Draw title
      drawText(
        ctx,
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
          drawText(ctx, `First Number: ${num1}`, 150, 80, { color: '#7C3AED' });
          for (let i = 0; i < num1; i++) {
            const x = 50 + (i % 10) * 40;
            const y = 120 + Math.floor(i / 10) * 40;
            drawCircle(ctx, x, y, i < dotsToShow1 ? '#7C3AED' : '#E5E7EB', (i + 1).toString());
          }

          // Second number visualization
          drawText(ctx, `Second Number: ${num2}`, 150, 200, { color: '#EC4899' });
          for (let i = 0; i < num2; i++) {
            const x = 50 + (i % 10) * 40;
            const y = 240 + Math.floor(i / 10) * 40;
            drawCircle(ctx, x, y, i < dotsToShow2 ? '#EC4899' : '#E5E7EB', (i + 1).toString());
          }

          // Result
          if (progress > 0.8) {
            drawText(
              ctx,
              `Total: ${num1 + num2}`,
              canvas.width / 2,
              350,
              { size: '32px', isBold: true, color: '#059669' }
            );
          }
          break;

        case '-':
          const remainingDots = Math.max(num1 - Math.floor(progress * num2), num1 - num2);
          drawText(ctx, `Starting with ${num1}`, 150, 80, { color: '#7C3AED' });

          for (let i = 0; i < num1; i++) {
            const x = 50 + (i % 10) * 40;
            const y = 120 + Math.floor(i / 10) * 40;
            const isRemoved = i >= remainingDots;
            drawCircle(ctx, x, y, isRemoved ? '#EF4444' : '#7C3AED', (i + 1).toString());
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

          drawText(ctx, `Removing ${num2}`, 150, 200, { color: '#EF4444' });

          if (progress > 0.8) {
            drawText(
              ctx,
              `Result: ${remainingDots}`,
              canvas.width / 2,
              350,
              { size: '32px', isBold: true, color: '#059669' }
            );
          }
          break;

        case '*':
          const rows = Math.min(num2, Math.floor(progress * num2));
          drawText(ctx, `${num1} repeated ${num2} times`, canvas.width / 2, 80, { color: '#7C3AED' });

          for (let i = 0; i < rows; i++) {
            drawText(ctx, `Group ${i + 1}:`, 50, 120 + (i * 50), { size: '16px', color: '#6B7280' });
            for (let j = 0; j < num1; j++) {
              const x = 120 + (j % 10) * 40;
              const y = 110 + (i * 50);
              drawCircle(ctx, x, y, '#7C3AED', ((i * num1) + j + 1).toString());
            }
          }

          if (progress > 0.8) {
            drawText(
              ctx,
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
          drawText(ctx, `Dividing ${num1} into ${num2} equal groups`, canvas.width / 2, 80, { color: '#7C3AED' });

          for (let i = 0; i < groupsToShow; i++) {
            drawText(ctx, `Group ${i + 1}`, 80, 130 + (i * 60), { size: '16px', color: '#6B7280' });
            for (let j = 0; j < itemsPerGroup; j++) {
              const x = 150 + (j * 35);
              const y = 120 + (i * 60);
              drawCircle(ctx, x, y, '#7C3AED', ((i * itemsPerGroup) + j + 1).toString());
            }
          }

          if (progress > 0.8) {
            drawText(
              ctx,
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
            {/* Voice explanation button */}
            {!isSpeaking ? (
              <button
                onClick={speakExplanation}
                className="px-4 py-2 bg-green-100 text-green-700 rounded-lg hover:bg-green-200 transition-colors flex items-center gap-2"
              >
                <Volume2 className="w-5 h-5" />
                Explain
              </button>
            ) : (
              <button
                onClick={stopSpeaking}
                className="px-4 py-2 bg-red-100 text-red-700 rounded-lg hover:bg-red-200 transition-colors flex items-center gap-2"
              >
                <VolumeX className="w-5 h-5" />
                Stop
              </button>
            )}

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
        message: "Hi! I'm your math buddy! Try these:\n• Addition (12+13)\n• Subtraction (25-10)\n• Multiplication (4*6)\n• Division (15÷3)",
        type: 'welcome'
      },
    ]);
    const [input, setInput] = useState('');
    const messagesEndRef = useRef(null);
  
    const [videoModal, setVideoModal] = useState({
      isOpen: false,
      problem: null
    });
    const [currentQuestion, setCurrentQuestion] = useState(null);
    const [currentOperator, setCurrentOperator] = useState(null);
    const [isAnswering, setIsAnswering] = useState(false);
  
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
  
    const generateEducationalInsight = (operator) => {
      switch (operator) {
        case '+':
          return [
            "🧠 Fun Fact: Addition is like building blocks - each number adds more to your total!",
            "🔍 Math Insight: Addition helps us understand how quantities combine and grow.",
            "🌱 Learning Tip: Think of addition as 'putting things together' in real life.",
            "📊 Problem-Solving Skill: Addition teaches us how to accumulate and track quantities."
          ];
        case '-':
          return [
            "🧠 Fun Fact: Subtraction helps us understand how quantities decrease or compare.",
            "🔍 Math Insight: Subtraction is like 'taking away' or finding the difference between numbers.",
            "🌱 Learning Tip: Imagine subtraction as removing items from a group.",
            "📊 Problem-Solving Skill: Subtraction helps develop logical thinking and comparison skills."
          ];
        case '*':
          return [
            "🧠 Fun Fact: Multiplication is repeated addition - it's like fast-tracking counting!",
            "🔍 Math Insight: Multiplication shows how numbers can grow exponentially.",
            "🌱 Learning Tip: Think of multiplication as creating equal groups quickly.",
            "📊 Problem-Solving Skill: Multiplication helps understand scaling and proportional relationships."
          ];
        case '÷':
          return [
            "🧠 Fun Fact: Division helps us share things equally and understand proportions.",
            "🔍 Math Insight: Division breaks down larger quantities into manageable parts.",
            "🌱 Learning Tip: Imagine division as fairly distributing items among groups.",
            "📊 Problem-Solving Skill: Division teaches fair sharing and understanding remainders."
          ];
      }
    };
  
    const generateExplanation = (expression) => {
      const numbers = expression.match(/\d+/g).map(Number);
      const operator = expression.match(/[+\-*÷]/)?.[0];
  
      let result;
      let explanation;
      let steps = [];
  
      const educationalInsights = generateEducationalInsight(operator);
      const randomInsight = educationalInsights[Math.floor(Math.random() * educationalInsights.length)];
  
      switch (operator) {
        case '+':
          result = numbers[0] + numbers[1];
          steps = [
            `🌈 Let's explore ${numbers[0]} + ${numbers[1]} together!`,
            `1️⃣ Starting number: ${numbers[0]} 
             Visualization: ${'🟣'.repeat(numbers[0])}`,
            `2️⃣ Number to add: ${numbers[1]} 
             Visualization: ${'🟠'.repeat(numbers[1])}`,
            `3️⃣ Combining numbers: 
             ${'🟣'.repeat(numbers[0])}${'🟠'.repeat(numbers[1])}`,
            `4️⃣ Solving step by step:
             ${numbers[0]}
           + ${numbers[1]}
           ───────
             ${result}`,
            `✨ Magic Moment: We transformed ${numbers[0]} and ${numbers[1]} into ${result}!`,
            `📚 Mathematical Journey:
             • Started with ${numbers[0]}
             • Added ${numbers[1]}
             • Discovered ${result}`,
            `\n${randomInsight}`,
            `\n${getRandomEncouragement()}`
          ];
          break;
  
        case '-':
          result = numbers[0] - numbers[1];
          steps = [
            `🌈 Let's unravel the mystery of ${numbers[0]} - ${numbers[1]}!`,
            `1️⃣ Initial collection: ${numbers[0]} 
             Visualization: ${'🟣'.repeat(numbers[0])}`,
            `2️⃣ Items to remove: ${numbers[1]} 
             Visualization: ${'🔴'.repeat(numbers[1])}`,
            `3️⃣ Subtracting carefully: 
             Remaining: ${'🟣'.repeat(result)}`,
            `4️⃣ Solving step by step:
             ${numbers[0]}
           - ${numbers[1]}
           ───────
             ${result}`,
            `✨ Detective Work: We tracked down the remaining quantity!`,
            `📚 Mathematical Journey:
             • Started with ${numbers[0]}
             • Removed ${numbers[1]}
             • Discovered ${result}`,
            `\n${randomInsight}`,
            `\n${getRandomEncouragement()}`
          ];
          break;
  
        case '*':
          result = numbers[0] * numbers[1];
          steps = [
            `🌈 Let's multiply ${numbers[0]} * ${numbers[1]} and unlock mathematical magic!`,
            `1️⃣ First number groups: ${numbers[0]} 
             Visualization: ${'🟣'.repeat(numbers[0])}`,
            `2️⃣ Repeat groups: ${numbers[1]} times
             Visualization: ${'🟣'.repeat(numbers[0])} * ${numbers[1]} groups`,
            `3️⃣ Multiplying visualized: 
             ${'🟣'.repeat(result)}`,
            `4️⃣ Solving step by step:
             ${numbers[0]}
           * ${numbers[1]}
           ───────
             ${result}`,
            `✨ Multiplication Magic: We expanded numbers exponentially!`,
            `📚 Mathematical Journey:
             • Grouped ${numbers[0]} 
             • Repeated ${numbers[1]} times
             • Created ${result}`,
            `\n${randomInsight}`,
            `\n${getRandomEncouragement()}`
          ];
          break;
  
        case '÷':
          result = Math.floor(numbers[0] / numbers[1]);
          const remainder = numbers[0] % numbers[1];
          steps = [
            `🌈 Let's divide ${numbers[0]} ÷ ${numbers[1]} and explore fair sharing!`,
            `1️⃣ Total collection: ${numbers[0]} 
             Visualization: ${'🟣'.repeat(numbers[0])}`,
            `2️⃣ Sharing into groups: ${numbers[1]} 
             Each group gets: ${result}`,
            `3️⃣ Division visualized: 
             ${numbers[1]} groups of ${result}`,
            `4️⃣ Solving step by step:
             ${numbers[0]} ÷ ${numbers[1]} = ${result}${remainder ? ` R${remainder}` : ''}`,
            `✨ Sharing Adventure: We distributed numbers fairly!`,
            `📚 Mathematical Journey:
             • Started with ${numbers[0]}
             • Divided into ${numbers[1]} groups
             • Each group received ${result}${remainder ? ` with ${remainder} left over` : ''}`,
            `\n${randomInsight}`,
            `\n${getRandomEncouragement()}`
          ];
          break;
      }
  
      explanation = steps.join('\n\n');
      return { result, explanation };
    };
  
    const generateSimilarQuestion = (operator) => {
      const num1 = Math.floor(Math.random() * 100);
      const num2 = Math.floor(Math.random() * 100);
      return `${num1}${operator}${num2}`;
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
      if (/^\d+[+\-*÷]\d+$/.test(mathExpression)) {
        const { result, explanation } = generateExplanation(mathExpression);
        newMessages.push({
          isBot: true,
          message: explanation,
          result: result,
          hasVideo: true,
          problem: mathExpression,
          time: getCurrentTime()
        });
      } else if (input.toLowerCase().includes('similar question')) {
        const operator = currentOperator || '+';
        const similarQuestion = generateSimilarQuestion(operator);
        setCurrentQuestion(similarQuestion);
        setIsAnswering(true);
        newMessages.push({
          isBot: true,
          message: `Here's a similar question: ${similarQuestion}. What's your answer?`,
          time: getCurrentTime()
        });
      } else if (isAnswering && currentQuestion) {
        const { result } = generateExplanation(currentQuestion);
        if (parseInt(input) === result) {
          newMessages.push({
            isBot: true,
            message: `Correct! The answer is ${result}. ${generateExplanation(currentQuestion).explanation}`,
            time: getCurrentTime()
          });
        } else {
          newMessages.push({
            isBot: true,
            message: `Oops! The correct answer was ${result}. ${generateExplanation(currentQuestion).explanation}`,
            time: getCurrentTime()
          });
        }
        setIsAnswering(false);
        setCurrentQuestion(null);
      } else {
        newMessages.push({
          isBot: true,
          message: "Please enter a valid math problem or ask for a similar question! Try these formats:\n• Addition: 12+13\n• Subtraction: 25-10\n• Multiplication: 4*6\n• Division: 15÷3",
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
              placeholder="Type a math problem (e.g., 12+13, 25-10, 4*6, 15÷3)..."
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
            Type a mathematical expression using +, -, *, or ÷
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
          onClick={() => setInput('4*6')}
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
        <button
          onClick={() => setInput('Generate a similar question')}
          className="px-4 py-2 bg-white rounded-full text-sm text-gray-600 hover:bg-gray-100 transition-colors shadow-sm"
        >
          Similar Question
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