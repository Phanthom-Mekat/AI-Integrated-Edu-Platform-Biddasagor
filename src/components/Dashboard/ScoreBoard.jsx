import axios from "axios";
import { useEffect, useState } from "react";

const ScoreBoard = () => {
    // const [users, setUsers] = useState([]);
    const [processedData, setProcessedData] = useState([]);

    useEffect(() => {
        axios.get("https://biddashagor.vercel.app/userScores")
            .then(res => {
                const data = res.data;
                const aggregatedData = data.reduce((acc, user) => {
                    if (!acc[user.userId]) {
                        acc[user.userId] = {
                            userName: user.userName,
                            totalScore: user.score,
                            playCount: 1
                        };
                    } else {
                        acc[user.userId].totalScore += user.score;
                        acc[user.userId].playCount += 1;
                    }
                    return acc;
                }, {});

                const result = Object.values(aggregatedData).map(user => ({
                    userName: user.userName,
                    avgScore: user.totalScore / user.playCount,
                    playTime: user.playCount
                }));

                result.sort((a, b) => b.avgScore - a.avgScore);
                setProcessedData(result);
            })
            .catch(err => console.error("Error fetching user scores:", err));
    }, []);

    return (
        <div className="min-h-screen  p-8 font-comic">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-purple-600 mb-2 animate-bounce">
                        🏆 Super Star Scoreboard! 🌟
                    </h1>
                    <p className="text-blue-500 text-lg">See how awesome you are!</p>
                </div>

                {/* Scoreboard Container */}
                <div className="bg-white rounded-3xl shadow-xl overflow-hidden border-4 border-yellow-300">
                    {/* Table Header */}
                    <div className="bg-gradient-to-r from-pink-400 to-purple-400 text-white p-4">
                        <div className="grid grid-cols-3 text-center text-lg font-bold">
                            <div>Player Name</div>
                            <div>Score</div>
                            <div>Times Played</div>
                        </div>
                    </div>

                    {/* Table Body */}
                    <div className="divide-y divide-purple-100">
                        {processedData.map((user, index) => (
                            <div 
                                key={index} 
                                className={`grid grid-cols-3 text-center p-4 items-center hover:bg-purple-50 transition-colors
                                    ${index === 0 ? 'bg-yellow-50' : ''}
                                    ${index === 1 ? 'bg-gray-50' : ''}
                                    ${index === 2 ? 'bg-orange-50' : ''}`}
                            >
                                <div className="flex items-center justify-center gap-2">
                                    {index < 3 && (
                                        <span className="text-2xl">
                                            {index === 0 ? '👑' : index === 1 ? '🥈' : '🥉'}
                                        </span>
                                    )}
                                    <span className="font-semibold text-purple-700">
                                        {user.userName}
                                    </span>
                                </div>
                                <div className="text-blue-600 font-bold">
                                    {user.avgScore.toFixed(2)} ⭐
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="bg-purple-100 px-4 py-1 rounded-full text-purple-600">
                                        {user.playTime} {user.playTime === 1 ? 'time' : 'times'} 🎮
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Fun Elements */}
                <div className="mt-8 text-center">
                    <p className="text-purple-500 text-lg animate-pulse">
                        Keep playing to reach the top! 🚀
                    </p>
                    <div className="mt-4 flex justify-center gap-4">
                        {['🌟', '✨', '💫', '⭐'].map((emoji, index) => (
                            <span 
                                key={index}
                                className="text-2xl animate-bounce"
                                style={{ animationDelay: `${index * 200}ms` }}
                            >
                                {emoji}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoreBoard;
