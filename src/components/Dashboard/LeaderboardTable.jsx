import React from 'react';
import { FaTrophy, FaMedal, FaAward, FaUser, FaChartLine, FaBolt, FaFire, FaBook } from 'react-icons/fa';

const leaderboardData = [
  { id: 1, name: "John Doe", score: 1250, change: 2, totalXP: 15000, totalWins: 47, lessonsCompleted: 120 },
  { id: 2, name: "Jane Smith", score: 1150, change: -1, totalXP: 14200, totalWins: 42, lessonsCompleted: 115 },
  { id: 3, name: "Bob Johnson", score: 1100, change: 3, totalXP: 13800, totalWins: 39, lessonsCompleted: 110 },
  { id: 4, name: "Alice Brown", score: 1050, change: 0, totalXP: 13100, totalWins: 36, lessonsCompleted: 105 },
  { id: 5, name: "Charlie Davis", score: 1000, change: 1, totalXP: 12500, totalWins: 33, lessonsCompleted: 100 },
];

const LeaderboardTable = () => {
  return (
    <div className="w-full mx-auto bg-gradient-to-br from-purple-600 to-blue-500 p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <FaTrophy className="mr-2 text-yellow-400" />
        Leaderboard
      </h2>
      <div className="space-y-4">
        {leaderboardData.map((user, index) => (
          <div 
            key={user.id} 
            className="flex flex-wrap items-center bg-white bg-opacity-20 p-4 rounded-lg  transition-all hover:bg-opacity-30 "
          >
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center rounded-full bg-gradient-to-br from-yellow-400 to-orange-500 text-white font-bold text-xl">
              {index === 0 && <FaTrophy className="text-2xl" />}
              {index === 1 && <FaMedal className="text-2xl text-gray-300" />}
              {index === 2 && <FaMedal className="text-2xl text-yellow-700" />}
              {index > 2 && index + 1}
            </div>
            <div className="ml-4 flex-grow">
              <h3 className="text-lg font-semibold text-white">{user.name}</h3>
              <p className="text-sm text-blue-200">Score: {user.score}</p>
            </div>
            <div className="flex items-center mr-4">
              <FaUser className="text-white mr-2" />
              <span className="text-white font-medium">{user.score}</span>
            </div>
            <div className={`flex items-center mr-4 ${user.change > 0 ? 'text-green-400' : user.change < 0 ? 'text-red-400' : 'text-gray-400'}`}>
              <FaChartLine className="mr-1" />
              <span>{user.change > 0 ? '+' : ''}{user.change}</span>
            </div>
            <div className="flex items-center mr-4">
              <FaBolt className="text-yellow-300 mr-1" />
              <span className="text-white">XP: {user.totalXP}</span>
            </div>
            <div className="flex items-center mr-4">
              <FaFire className="text-red-400 mr-1" />
              <span className="text-white">Wins: {user.totalWins}</span>
            </div>
            <div className="flex items-center">
              <FaBook className="text-green-300 mr-1" />
              <span className="text-white">Lessons: {user.lessonsCompleted}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LeaderboardTable;

