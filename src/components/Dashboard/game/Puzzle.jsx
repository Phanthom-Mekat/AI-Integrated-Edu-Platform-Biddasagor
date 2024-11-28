import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { 
  Star, 
  Clock, 
  RefreshCw, 
  PlusCircle, 
  MinusCircle, 
  XCircle 
} from "lucide-react";

const PlayQuiz = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [question, setQuestion] = useState(generateQuestion());
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);

    useEffect(() => {
        if (timeLeft > 0) {
            const timer = setInterval(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearInterval(timer);
        } else {
            toast.error("🕰️ Time's up! Let's try again!", {
                style: {
                    borderRadius: '10px',
                    background: '#FF6B6B',
                    color: '#FFFFFF',
                    fontSize: '16px'
                }
            });
        }
    }, [timeLeft]);

    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operations = [
            { symbol: "+", icon: PlusCircle, color: "text-green-500" },
            { symbol: "-", icon: MinusCircle, color: "text-blue-500" },
            { symbol: "×", icon: XCircle, color: "text-purple-500" }
        ];
        const operation = operations[Math.floor(Math.random() * operations.length)];
        return { num1, num2, ...operation };
    }

    function checkAnswer() {
        const correctAnswer =
            question.symbol === "+"
                ? question.num1 + question.num2
                : question.symbol === "-"
                    ? question.num1 - question.num2
                    : question.num1 * question.num2;

        if (parseInt(input) === correctAnswer) {
            setScore(score + 1);
            toast.success("🎉 Awesome! You got it right!", {
                style: {
                    borderRadius: '10px',
                    background: '#4ECB71',
                    color: '#FFFFFF',
                    fontSize: '16px'
                }
            });
        } else {
            toast.error("🤔 Oops! Try again!", {
                style: {
                    borderRadius: '10px',
                    background: '#FF6B6B',
                    color: '#FFFFFF',
                    fontSize: '16px'
                }
            });
        }

        setHistory([
            ...history,
            {
                question: `${question.num1} ${question.symbol} ${question.num2}`,
                answer: correctAnswer,
                correct: parseInt(input) === correctAnswer,
            },
        ]);

        setInput("");
        setQuestion(generateQuestion());
    }

    const restartGame = () => {
        setScore(0);
        setTimeLeft(60);
        setHistory([]);
        setQuestion(generateQuestion());
    };

    return (
        <div className="p-6 flex flex-col items-center gap-6 bg-gradient-to-r from-primary to-secondary min-h-screen font-['Comic_Sans_MS']">
            <Toaster />
            <h1 className="text-5xl font-bold text-white drop-shadow-lg animate-bounce">
                🧮 Math Adventure! 🚀
            </h1>

            <div className="bg-white p-8 rounded-2xl shadow-2xl text-center w-96 transform transition-all hover:scale-105 border-4 border-blue-300">
                <div className="flex justify-center items-center gap-4 mb-4">
                    {question.icon && <question.icon size={48} className={question.color} />}
                    <h2 className="text-3xl font-bold text-gray-800">
                        {`${question.num1} ${question.symbol} ${question.num2} = ?`}
                    </h2>
                </div>
                <input
                    type="number"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    className="border-4 border-yellow-300 rounded-xl p-3 mt-4 w-full text-center text-2xl bg-yellow-100 hover:bg-yellow-200 transition duration-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="Your answer"
                />
                <button
                    onClick={checkAnswer}
                    className="btn bg-green-500 text-white text-2xl px-6  rounded-xl mt-4 w-full hover:bg-green-600 transition duration-200 transform active:scale-95 shadow-lg"
                    disabled={timeLeft === 0}  
                >
                    Check Answer!
                </button>
            </div>

            {timeLeft === 0 && (
                <motion.button
                    onClick={restartGame}
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    className="bg-orange-500 text-white text-2xl px-6 py-3 rounded-xl mt-6 hover:bg-orange-600 transition duration-200 transform active:scale-95 shadow-lg"
                >
                    <RefreshCw className="inline mr-2" /> Play Again!
                </motion.button>
            )}

            <div className="flex gap-8 text-2xl font-bold text-white">
                <div className="flex items-center gap-2">
                    <Star className="text-yellow-300" />
                    Score: {score}
                </div>
                <div className="flex items-center gap-2">
                    <Clock className="text-blue-300" />
                    Time Left: {timeLeft}s
                </div>
            </div>

            <div className="bg-white p-6 rounded-2xl shadow-xl w-full max-w-3xl mt-6 border-4 border-purple-300">
                <h3 className="text-2xl font-bold mb-4 text-purple-600">🏆 Your Math Journey</h3>
                <div className="max-h-60 overflow-y-auto">
                    {history.length === 0 ? (
                        <p className="text-center text-gray-500">Your solved problems will appear here!</p>
                    ) : (
                        <ul className="space-y-3">
                            {history.map((item, index) => (
                                <motion.li
                                    key={index}
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.1 }}
                                    className={`flex justify-between p-3 rounded-lg text-lg ${
                                        item.correct 
                                            ? "bg-green-200 border-2 border-green-400" 
                                            : "bg-red-200 border-2 border-red-400"
                                    }`}
                                >
                                    <span>{item.question}</span>
                                    <span className="font-bold">{item.answer}</span>
                                </motion.li>
                            ))}
                        </ul>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PlayQuiz;