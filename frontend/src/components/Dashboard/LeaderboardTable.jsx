'use client'

import { useState } from 'react'
import { 
  Medal, Trophy, Zap, Target, Book, 
  ChevronUp, ChevronDown, Minus, 
  ArrowUpDown, Flame 
} from 'lucide-react'
import { motion, AnimatePresence } from "framer-motion"

const players = [
  { 
    id: "1", 
    name: "John Doe", 
    score: 1250, 
    position: 1, 
    positionChange: 2, 
    xp: 15000, 
    wins: 41, 
    lessons: 120,
    avatar: "/api/placeholder/100/100",
    country: "US",
    streakDays: 24
  },
  { 
    id: "2", 
    name: "Jane Smith", 
    score: 1150, 
    position: 2, 
    positionChange: -1, 
    xp: 14200, 
    wins: 42, 
    lessons: 115,
    avatar: "/api/placeholder/100/100",
    country: "CA",
    streakDays: 18
  },
  { 
    id: "3", 
    name: "Bob Johnson", 
    score: 1100, 
    position: 3, 
    positionChange: 3, 
    xp: 13800, 
    wins: 39, 
    lessons: 110,
    avatar: "/api/placeholder/100/100",
    country: "UK",
    streakDays: 15
  },
  { 
    id: "4", 
    name: "Alice Brown", 
    score: 1050, 
    position: 4, 
    positionChange: 0, 
    xp: 13100, 
    wins: 36, 
    lessons: 105,
    avatar: "/api/placeholder/100/100",
    country: "AU",
    streakDays: 12
  },
  { 
    id: "5", 
    name: "Charlie Davis", 
    score: 1000, 
    position: 5, 
    positionChange: 1, 
    xp: 12500, 
    wins: 33, 
    lessons: 100,
    avatar: "/api/placeholder/100/100",
    country: "DE",
    streakDays: 10
  },
]

export default function Leaderboard() {
  const [sortBy, setSortBy] = useState('score')
  const [sortDirection, setSortDirection] = useState('desc')

  const handleSort = (key) => {
    if (sortBy === key) {
      setSortDirection(sortDirection === 'desc' ? 'asc' : 'desc')
    } else {
      setSortBy(key)
      setSortDirection('desc')
    }
  }

  const sortedPlayers = [...players].sort((a, b) => {
    const modifier = sortDirection === 'desc' ? -1 : 1
    return modifier * (a[sortBy] - b[sortBy])
  })

  const getSortIcon = (key) => {
    if (sortBy !== key) return <ArrowUpDown className="w-4 h-4 text-white/50" />
    return sortDirection === 'desc' 
      ? <ChevronDown className="w-4 h-4 text-white" />
      : <ChevronUp className="w-4 h-4 text-white" />
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        <header className="flex items-center justify-between text-white mb-8">
          <div className="flex items-center gap-4">
            <Trophy className="w-10 h-10 text-yellow-400" />
            <div>
              <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Leaderboard
              </h1>
              <p className="text-white/80 text-sm mt-1">Track the top learners at Biddasagor!</p>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button 
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => handleSort('xp')}
            >
              {getSortIcon('xp')}
            </button>
            <button 
              className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              onClick={() => handleSort('score')}
            >
              {getSortIcon('score')}
            </button>
          </div>
        </header>

        <div className="space-y-4">
          <AnimatePresence>
            {sortedPlayers.map((player, index) => (
              <motion.div
                key={player.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                className="relative overflow-hidden rounded-2xl bg-white/10 backdrop-blur-xl border border-white/10 hover:border-white/20 hover:bg-white/15 transition-all shadow-2xl p-5"
              >
                <div className="flex items-center justify-between gap-4">
                  <div className="flex items-center gap-5">
                    <div className="relative">
                      <div className={`
                        w-16 h-16 rounded-full flex items-center justify-center text-white font-bold 
                        ${index === 0 ? 'bg-gradient-to-br from-yellow-500 to-orange-600' : 
                          index === 1 ? 'bg-gradient-to-br from-gray-400 to-gray-600' : 
                          index === 2 ? 'bg-gradient-to-br from-amber-500 to-yellow-600' : 
                          'bg-white/20'}`}
                      >
                        {index < 3 ? (
                          index === 0 ? <Trophy className="w-8 h-8" /> :
                          <Medal className="w-8 h-8" />
                        ) : (
                          index + 1
                        )}
                      </div>
                      <div className="absolute -bottom-1 -right-1 bg-white/90 rounded-full p-1 shadow-md">
                        {player.positionChange > 0 ? (
                          <ChevronUp className="w-4 h-4 text-emerald-500" />
                        ) : player.positionChange < 0 ? (
                          <ChevronDown className="w-4 h-4 text-red-500" />
                        ) : (
                          <Minus className="w-4 h-4 text-gray-500" />
                        )}
                      </div>
                    </div>
                    <div>
                      <div className="flex items-center gap-2">
                        <h2 className="font-bold text-xl text-white">{player.name}</h2>
                        <span className="text-sm text-white/60">({player.country})</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <Flame className="w-4 h-4 text-red-400" />
                        <p className="text-white/80 text-sm">
                          {player.streakDays} day streak
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-6 text-white">
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-lg bg-emerald-500/20">
                        <Target className="w-6 h-6" />
                      </div>
                      <span className="text-sm">{player.score}</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-lg bg-amber-500/20">
                        <Zap className="w-6 h-6" />
                      </div>
                      <span className="text-sm">{player.xp.toLocaleString()} XP</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-lg bg-red-500/20">
                        <Trophy className="w-6 h-6" />
                      </div>
                      <span className="text-sm">{player.wins} Wins</span>
                    </div>
                    <div className="flex flex-col items-center gap-1">
                      <div className="p-2 rounded-lg bg-blue-500/20">
                        <Book className="w-6 h-6" />
                      </div>
                      <span className="text-sm">{player.lessons} Lessons</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  )
}
