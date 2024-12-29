import { useState, useEffect, useContext } from "react";
import { motion } from "framer-motion";
import toast, { Toaster } from "react-hot-toast";
import { AuthContext } from "../../../provider/AuthProvider";
import {
    Star,
    Clock,
    RefreshCw,
    PlusCircle,
    MinusCircle,
    XCircle
} from "lucide-react";
import axios from "axios";

const PlayQuiz = () => {
    const [score, setScore] = useState(0);
    const [timeLeft, setTimeLeft] = useState(60);
    const [question, setQuestion] = useState(generateQuestion());
    const [input, setInput] = useState("");
    const [history, setHistory] = useState([]);
    const {user} = useContext(AuthContext)

    console.log(history);

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

    useEffect(() => {
        if (timeLeft === 0) {
            const saveScore = async () => {
                try {
                    const response = await axios.post("http://localhost:5000/save-game", {
                        userId: `${user.uid}`, 
                        userName: `${user.displayName}`,
                        score,
                    });
                    console.log("Score saved:", response.data.message);
                } catch (err) {
                    console.error("Error saving score:", err);
                }
            };
    
            const saveHistory = async () => {
                try {
                    const response = await axios.post("http://localhost:5000/quizResults", {
                        userId: `${user.uid}`,
                        userName: `${user.displayName}`,
                        history,
                    });
                    console.log("History saved:", response.data.message);
                } catch (err) {
                    console.error("Error saving history:", err);
                }
            };
    
            // Call both APIs
            saveScore();
            saveHistory();
        }
    }, [history, score, timeLeft, user.displayName, user.uid]);
    

    function generateQuestion() {
        const num1 = Math.floor(Math.random() * 10) + 1;
        const num2 = Math.floor(Math.random() * 10) + 1;
        const operations = [
            { symbol: "+", icon: PlusCircle, color: "text-green-500" },
            { symbol: "-", icon: MinusCircle, color: "text-blue-500" },
            { symbol: "*", icon: XCircle, color: "text-purple-500" }
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

    const progressPercentage = (timeLeft / 60) * 100;
    return (
        <div className="min-h-screen bg-gray-50 p-8 font-sans">
            <Toaster />
            <h1 className="text-4xl font-bold text-gray-800 mb-12 text-center">
                Math Quiz
            </h1>

            <div className="max-w-md mx-auto">
                {/* Clock Bar */}
                <div className="mb-8">
                    <div className="flex justify-between items-center mb-2">
                        <div className="flex items-center gap-2 text-sm font-medium">
                            <Clock className="w-4 h-4 text-blue-500" />
                            <span>{timeLeft}s remaining</span>
                        </div>
                        <span className="text-sm font-medium flex items-center gap-1">
                            <Star className="w-4 h-4 text-yellow-500 " />  Score: {score}
                        </span>
                    </div>
                    <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                            className="h-full bg-blue-500"
                            initial={{ width: "100%" }}
                            animate={{
                                width: `${progressPercentage}%`,
                                backgroundColor: progressPercentage < 30
                                    ? "#EF4444" // red-500
                                    : progressPercentage < 60
                                        ? "#F59E0B" // amber-500
                                        : "#3B82F6" // blue-500
                            }}
                            transition={{ duration: 0.3 }}
                        />
                    </div>
                </div>

                {/* Question Card */}
                <div className="bg-white rounded-xl shadow-sm p-6 mb-8">
                    <div className="flex justify-center items-center gap-4 text-3xl font-semibold text-gray-700 mb-6">
                        {`${question.num1} ${question.symbol} ${question.num2} = ?`}
                    </div>

                    <input
                        type="number"
                        value={input}
                        onChange={(e) => setInput(e.target.value)}
                        className="w-full px-4 py-3 text-lg border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                        placeholder="Enter your answer"
                    />

                    <button
                        onClick={checkAnswer}
                        className="w-full mt-4 px-4 py-3 bg-blue-600 text-white rounded-lg transition-all hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
                        disabled={timeLeft === 0}
                    >
                        Submit
                    </button>
                </div>

                {/* Game Over Button */}
                {timeLeft === 0 && (
                    <motion.button
                        onClick={restartGame}
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg flex items-center justify-center gap-2 hover:bg-gray-900 transition-all"
                    >
                        <RefreshCw className="w-4 h-4" />
                        <span>Play Again</span>
                    </motion.button>
                )}

                {/* History Section */}
                <div className="mt-8">
                    <h3 className="text-sm font-medium text-gray-500 mb-4">History</h3>
                    <div className="space-y-2 max-h-48 overflow-y-auto">
                        {history.map((item, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, x: -20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-3 rounded-lg text-sm ${item.correct
                                        ? "bg-green-50 text-green-700"
                                        : "bg-red-50 text-red-700"
                                    }`}
                            >
                                <div className="flex justify-between">
                                    <span>{item.question}</span>
                                    <span className="font-medium">{item.answer}</span>
                                </div>
                            </motion.div>
                        ))}
                        {history.length === 0 && (
                            <div className="text-center text-gray-400 py-4">
                                No answers yet
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PlayQuiz;