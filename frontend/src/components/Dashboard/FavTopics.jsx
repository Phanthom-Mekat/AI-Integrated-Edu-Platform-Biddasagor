
import { useState } from 'react';
import {  FaStar } from 'react-icons/fa';
import { CiCalculator2 } from "react-icons/ci";
import { GiMaterialsScience } from "react-icons/gi";
import { GiWireframeGlobe } from "react-icons/gi";
import { FcEngineering } from "react-icons/fc";
import { HiOutlineLanguage } from "react-icons/hi2";

const initialTopics = [
  { id: 1, name: 'Math', icon: CiCalculator2, color: 'bg-blue-500', isFavorite: true },
  { id: 2, name: 'Science', icon: GiMaterialsScience, color: 'bg-pink-500', isFavorite: true },
  { id: 3, name: 'Technology', icon: GiWireframeGlobe, color: 'bg-green-500', isFavorite: true },
  { id: 4, name: 'Engineering', icon: FcEngineering, color: 'bg-purple-500', isFavorite: true },
  { id: 5, name: 'Language', icon: HiOutlineLanguage, color: 'bg-red-500', isFavorite: true },
];

const FavTopics = () => {
  const [topics, setTopics] = useState(initialTopics);

  const toggleFavorite = (id) => {
    setTopics(topics.map(topic => 
      topic.id === id ? { ...topic, isFavorite: !topic.isFavorite } : topic
    ));
  };

  return (
    <div className="w-full mx-auto bg-gradient-to-br from-indigo-400 to-primary p-6 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-white mb-6 flex items-center">
        <FaStar className="mr-2 text-yellow-400" />
        Favorite Topics
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        {topics.map((topic) => (
          <div 
            key={topic.id} 
            className={`${topic.color} p-4 rounded-lg shadow transition-all hover:shadow-lg flex items-center justify-between`}
          >
            <div className="flex items-center">
              <topic.icon className="text-white text-2xl mr-3" />
              <span className="text-white font-semibold">{topic.name}</span>
            </div>
            <button 
              onClick={() => toggleFavorite(topic.id)}
              className={`text-white focus:outline-none transition-transform transform hover:scale-110 ${topic.isFavorite ? 'opacity-100' : 'opacity-50'}`}
            >
              <FaStar className="text-xl" />
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FavTopics;

