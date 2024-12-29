import { useEffect, useState } from "react";
import axios from "axios";
import { Crown, Star, Trophy } from "lucide-react";
import { IoGameController } from "react-icons/io5";

const ScoreBoard = () => {
    const [processedData, setProcessedData] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:5000/userScores")
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
        <div className="min-h-screen  p-8">
            <div className="max-w-4xl mx-auto">
                {/* Header */}
                <div className="text-center mb-12">
                    <div className="flex items-center justify-center gap-3 mb-4">
                        <Trophy className="w-10 h-10 text-tertiary" />
                        <h1 className="text-5xl font-bold text-primary">
                            Leaderboard
                        </h1>
                        <Trophy className="w-10 h-10 text-tertiary" />
                    </div>
                    <p className="text-secondary text-lg font-medium">Compete, Score, Conquer!</p>
                </div>
                {processedData.slice(0, 3).length > 0 && (
                    <div className="grid grid-cols-3 gap-6 mb-8">
                        {/* Second Place */}
                        {processedData[1] && (
                            <div className="bg-gray-100 rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform">
                                <div className="text-4xl mb-2">🥈</div>
                                <div className="font-bold text-dark">{processedData[1].userName}</div>
                                <div className="text-secondary">{processedData[1].avgScore.toFixed(2)} pts</div>
                            </div>
                        )}
                        
                        {processedData[0] && (
                            <div className="bg-secondary bg-opacity-10 rounded-2xl shadow-lg p-8 text-center transform hover:-translate-y-2 transition-transform">
                                <Crown className="w-12 h-12 text-tertiary mx-auto mb-2" />
                                <div className="font-bold text-xl text-dark">{processedData[0].userName}</div>
                                <div className="text-primary font-bold text-lg">{processedData[0].avgScore.toFixed(2)} pts</div>
                            </div>
                        )}
                        
                        {processedData[2] && (
                            <div className="bg-gray-50 rounded-2xl shadow-lg p-6 text-center transform hover:-translate-y-1 transition-transform">
                                <div className="text-4xl mb-2">🥉</div>
                                <div className="font-bold text-dark">{processedData[2].userName}</div>
                                <div className="text-secondary">{processedData[2].avgScore.toFixed(2)} pts</div>
                            </div>
                        )}
                    </div>
                )}

                <div className="bg-white rounded-2xl shadow-xl overflow-hidden border border-primary border-opacity-20">
                    <div className="bg-primary bg-opacity-90 text-white p-4">
                        <div className="grid grid-cols-3 text-center text-lg font-medium">
                            <div>Player</div>
                            <div>Average Score</div>
                            <div>Games Played</div>
                        </div>
                    </div>

                    <div className="divide-y divide-gray-100">
                        {processedData.map((user, index) => (
                            <div 
                                key={index} 
                                className="grid grid-cols-3 text-center p-4 items-center hover:bg-light transition-colors"
                            >
                                <div className="flex items-center justify-center gap-2">
                                    <span className="font-medium text-dark">
                                        {user.userName}
                                    </span>
                                </div>
                                <div className="flex items-center justify-center gap-1 text-secondary font-medium">
                                    {user.avgScore.toFixed(2)}
                                    <Star className="w-4 h-4" />
                                </div>
                                <div className="flex items-center justify-center gap-2">
                                    <span className="bg-primary bg-opacity-10 px-4 py-1 rounded-full text-primary flex items-center gap-1">
                                        <IoGameController className="w-4 h-4" />
                                        {user.playTime}
                                    </span>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="mt-8 text-center">
                    <p className="text-secondary font-medium">
                        Every game counts towards greatness!
                    </p>
                    <div className="mt-4 flex justify-center gap-6">
                        {['🎮', '🏆', '⭐', '🎯'].map((emoji, index) => (
                            <span 
                                key={index}
                                className="text-2xl animate-bounce"
                                style={{ animationDelay: `${index * 150}ms` }}
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