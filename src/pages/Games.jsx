

const Games = () => {
    return (
        <div className="bg-blue-50 min-h-screen">
            {/* Page Header */}
            <div className="bg-gradient-to-br from-purple-600 to-blue-500 text-white p-5">
                <h1 className="text-center text-4xl font-bold">Fun & Learn</h1>
                <p className="text-center text-lg mt-2">Explore games to sharpen your math skills while having fun!</p>
            </div>

            {/* Game Options Section */}
            <div className="mt-12 max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8 px-6">
                {/* Solve Puzzle */}
                <div className="bg-yellow-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                    <img
                        src="/puzzle.png"
                        alt="Solve Puzzle"
                        className="w-1/2 mb-4"
                    />
                    <h2 className="text-2xl font-bold text-yellow-600">Solve Puzzle</h2>
                    <p className="text-gray-700 mt-2">
                        Enhance your logical thinking by solving fun puzzles!
                    </p>
                    <button className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded-md hover:bg-yellow-600">
                        Start Now
                    </button>
                </div>

                {/* Take Quiz */}
                <div className="bg-green-100 p-6 rounded-xl shadow-md flex flex-col items-center text-center hover:scale-105 transition-transform duration-300">
                    <img
                        src="/quiz1.png"
                        alt="Take Quiz"
                        className="w-1/2 mb-4"
                    />
                    <h2 className="text-2xl font-bold text-green-600">Take Quiz</h2>
                    <p className="text-gray-700 mt-2">
                        Test your math knowledge with exciting quizzes!
                    </p>
                    <button className="mt-4 px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600">
                        Start Quiz
                    </button>
                </div>
            </div>

        

           
        </div>
    );
};

export default Games;
