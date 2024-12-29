'use client'

import { useState } from 'react'
import { 
  Target, Zap, Book, Trophy, Medal, 
  ChartBar, Flame, Star, Lock, Unlock 
} from 'lucide-react'
import { motion } from 'framer-motion'

const learningPaths = [
  {
    id: 'Math Addition',
    name: 'Math Addition',
    description: 'Master the core concepts of Addition',
    totalLessons: 50,
    completedLessons: 30,
    difficulty: 'Beginner',
    isUnlocked: true
  },
  {
    id: 'data-science',
    name: 'Math Subtraction',
    description: 'Learn Math Subtraction',
    totalLessons: 75,
    completedLessons: 12,
    difficulty: 'Advanced',
    isUnlocked: false
  },
  {
    id: 'web-dev',
    name: 'Multiplication',
    description: 'Interactive multiplication methods',
    totalLessons: 60,
    completedLessons: 45,
    difficulty: 'Intermediate',
    isUnlocked: true
  }
]

const achievements = [
  {
    id: 'a',
    name: 'Puzzle Streak',
    description: 'Maintain a 30-day consecutive learning streak',
    iconColor: 'text-red-500',
    progress: 22,
    isCompleted: false
  },
  {
    id: 'lesson-master',
    name: 'Lesson Master',
    description: 'Complete 100 lessons',
    iconColor: 'text-green-500',
    progress: 65,
    isCompleted: false
  },
  {
    id: 'xp-champion',
    name: 'XP Champion',
    description: 'Reach 20,000 total XP',
    iconColor: 'text-blue-500',
    progress: 18500,
    isCompleted: false
  }
]

export default function LearningProgressDashboard() {
  const [activeTab, setActiveTab] = useState('paths')

  const totalCompletedLessons = learningPaths.reduce((acc, path) => 
    acc + path.completedLessons, 0)
  const totalLessons = learningPaths.reduce((acc, path) => 
    acc + path.totalLessons, 0)

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-blue-900 p-6 flex flex-col items-center">
      <div className="w-full max-w-5xl space-y-6">
        <header className="flex items-center justify-between text-white mb-8">
          <div className="flex items-center gap-4">
            <ChartBar className="w-10 h-10 text-yellow-400" />
            <div>
              <h1 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-orange-500">
                Learning Dashboard
              </h1>
              <p className="text-white/80 text-sm mt-1">
                Track your progress and unlock new achievements!
              </p>
            </div>
          </div>
          <div className="flex items-center gap-4 bg-white/10 rounded-full p-1">
            <button 
              onClick={() => setActiveTab('paths')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'paths' 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Learning Paths
            </button>
            <button 
              onClick={() => setActiveTab('achievements')}
              className={`px-4 py-2 rounded-full transition-colors ${
                activeTab === 'achievements' 
                  ? 'bg-white/20 text-white' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Achievements
            </button>
          </div>
        </header>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {activeTab === 'paths' ? (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl text-white font-bold">Your Learning Paths</h2>
                <div className="flex items-center gap-2 text-white/80">
                  <Book className="w-5 h-5" />
                  <span>{totalCompletedLessons} / {totalLessons} Lessons Completed</span>
                </div>
              </div>
              <div className="space-y-4">
                {learningPaths.map((path) => (
                  <motion.div
                    key={path.id}
                    whileHover={{ scale: 1.02 }}
                    className={`
                      rounded-2xl p-5 
                      ${path.isUnlocked 
                        ? 'bg-white/10 border border-white/10' 
                        : 'bg-gray-800/50 opacity-60'}
                      flex items-center justify-between
                      transition-all
                    `}
                  >
                    <div className="flex items-center gap-4">
                      {path.isUnlocked ? <Unlock className="w-6 h-6 text-green-400" /> : <Lock className="w-6 h-6 text-red-400" />}
                      <div>
                        <h3 className="text-xl font-bold text-white">{path.name}</h3>
                        <p className="text-white/70 text-sm">{path.description}</p>
                        <div className="mt-2 flex items-center gap-2">
                          <div 
                            className={`
                              px-2 py-1 rounded-full text-xs font-bold
                              ${path.difficulty === 'Beginner' ? 'bg-green-500/20 text-green-300' :
                                path.difficulty === 'Intermediate' ? 'bg-amber-500/20 text-amber-300' :
                                'bg-red-500/20 text-red-300'}
                            `}
                          >
                            {path.difficulty}
                          </div>
                          <span className="text-white/60 text-sm">
                            {path.completedLessons} / {path.totalLessons} Lessons
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-24 bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-emerald-500 h-2.5 rounded-full" 
                          style={{ 
                            width: `${(path.completedLessons / path.totalLessons) * 100}%` 
                          }}
                        />
                      </div>
                      <span className="text-white/70">
                        {Math.round((path.completedLessons / path.totalLessons) * 100)}%
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          ) : (
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl text-white font-bold">Your Achievements</h2>
                <div className="flex items-center gap-2 text-white/80">
                  <Trophy className="w-5 h-5" />
                  <span>{achievements.filter(a => a.isCompleted).length} / {achievements.length} Unlocked</span>
                </div>
              </div>
              <div className="space-y-4">
                {achievements.map((achievement) => (
                  <motion.div
                    key={achievement.id}
                    whileHover={{ scale: 1.02 }}
                    className="
                      rounded-2xl p-5 
                      bg-white/10 border border-white/10
                      flex items-center justify-between
                      transition-all
                    "
                  >
                    <div className="flex items-center gap-4">
                      <Star className={`w-8 h-8 ${achievement.iconColor}`} />
                      <div>
                        <h3 className="text-xl font-bold text-white">{achievement.name}</h3>
                        <p className="text-white/70 text-sm">{achievement.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="w-36 bg-gray-700 rounded-full h-2.5">
                        <div 
                          className="bg-emerald-500 h-2.5 rounded-full" 
                          style={{ 
                            width: `${achievement.isCompleted ? 100 : 
                              Math.min((achievement.progress / 
                                (achievement.id === 'coding-streak' ? 30 :
                                 achievement.id === 'lesson-master' ? 100 :
                                 20000)) * 100, 100)}%` 
                          }}
                        />
                      </div>
                      <span className="text-white/70">
                        {achievement.isCompleted ? '100%' : 
                          `${Math.round(
                            Math.min((achievement.progress / 
                              (achievement.id === 'coding-streak' ? 30 :
                               achievement.id === 'lesson-master' ? 100 :
                               20000)) * 100, 100)
                          )}%`}
                      </span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          )}
        </motion.div>
      </div>
    </div>
  )
}