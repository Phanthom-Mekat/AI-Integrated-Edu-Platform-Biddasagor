import { useState, useEffect } from 'react';
import { FaApple, FaIceCream, FaMinus, FaVolumeMute, FaVolumeUp } from 'react-icons/fa';
import { GiMonkey } from 'react-icons/gi';

const LearnAdditions = () => {
    const [apples, setApples] = useState(0);
    const [monkeys, setMonkeys] = useState(0);
    const [icecreams, setIcecreams] = useState(0);
    const [muted, setMuted] = useState(true);
    const [currentChallenge, setCurrentChallenge] = useState(null);
    const [timeRemaining, setTimeRemaining] = useState(0);
    const [gameStarted, setGameStarted] = useState(false);
    const [gameCompleted, setGameCompleted] = useState(false);

    const challenges = [
        {
            id: 1,
            duration: 20,
            target: 4,
            description: "Add icecreams 2 + 2 = 4",
            icon: FaIceCream,
            color: "text-red-500",
            type: "icecreams"  
        },
        {
            id: 2,
            duration: 20,
            target: 3,
            description: "Add monkeys 2 + 1 = 3",
            icon: GiMonkey,
            color: "text-green-500",
            type: "monkeys"
        },
        {
            id: 3,
            duration: 20,
            target: 6,
            description: "Add apples  4 + 2 = 6",
            icon: FaApple,
            color: "text-red-500",
            type: "apples"
        }
    ];

    useEffect(() => {
        let timer;
        if (gameStarted && timeRemaining > 0) {
            timer = setTimeout(() => {
                setTimeRemaining(prev => prev - 1);
            }, 1000);
        } else if (gameStarted && timeRemaining === 0) {
            const nextChallengeIndex = challenges.findIndex(c => c.id === currentChallenge?.id) + 1;
            if (nextChallengeIndex < challenges.length) {
                startChallenge(challenges[nextChallengeIndex]);
            } else {
                setGameCompleted(true);
            }
        }
        return () => clearTimeout(timer);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [gameStarted, timeRemaining]);

    const startChallenge = (challenge) => {
        setCurrentChallenge(challenge);
        setTimeRemaining(challenge.duration);
        setApples(0);
        setMonkeys(0);
        setIcecreams(0);
    };

    const handleStart = () => {
        setGameStarted(true);
        startChallenge(challenges[0]);
    };

    const addItem = () => {
        if (!currentChallenge) return;

        if (currentChallenge.type === "apples") {
            setApples(prev => prev + 1);
        } else if (currentChallenge.type === "monkeys") {
            setMonkeys(prev => prev + 1);
        } else if (currentChallenge.type === "icecreams") {
            setIcecreams(prev => prev + 1);
        }
    };

    const removeItem = () => {
        if (!currentChallenge) return;

        if (currentChallenge.type === "apples") {
            setApples(prev => Math.max(0, prev - 1));
        } else if (currentChallenge.type === "monkeys") {
            setMonkeys(prev => Math.max(0, prev - 1));
        } else if (currentChallenge.type === "icecreams") {
            setIcecreams(prev => Math.max(0, prev - 1));
        }
    };

    const checkChallengeCompletion = () => {
        if (!currentChallenge) return false;

        const currentCount = 
            currentChallenge.type === "apples" ? apples : 
            currentChallenge.type === "monkeys" ? monkeys : 
            icecreams;
        return currentCount === currentChallenge.target;
    };

    return (
        <div className="min-h-screen flex flex-col items-center justify-center text-black">
            <div className="mt-3 flex flex-col items-center gap-2 mb-8">
                <video
                    className="w-3/4 max-w-screen-lg rounded-xl shadow-lg border-4 border-purple-600"
                    autoPlay
                    loop
                    muted={muted}
                    playsInline
                >
                    <source src="/video.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <button
                    className="btn relative left-80 -top-20 flex items-center gap-2"
                    onClick={() => setMuted(!muted)}
                >
                    {muted ? <FaVolumeMute /> : <FaVolumeUp />}
                </button>
            </div>

            {!gameStarted && (
                <div className="p-6 rounded-xl bg-transparent w-3/4 max-w-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">Math Adventure Game</h2>
                    <p className="mb-4">Get ready for a fun math challenge!</p>
                    <button 
                        onClick={handleStart}
                        className="btn border-none bg-primary"
                    >
                        Start Game
                    </button>
                </div>
            )}

            {gameStarted && !gameCompleted && currentChallenge && (
                <div className="p-6 rounded-xl bg-transparent w-3/4 max-w-lg">
                    <div className="flex justify-between mb-4">
                        <h2 className="text-2xl font-bold">{currentChallenge.description}</h2>
                        <div className="text-xl font-bold">Time: {timeRemaining}s</div>
                    </div>
                    <div className="flex justify-center items-center gap-4 mb-4">
                        <button
                            className="btn btn-outline border-none flex items-center gap-2"
                            onClick={addItem}
                        >
                            {currentChallenge.type === "apples" ? <FaApple className='text-red-500 animate-bounce' size={30} /> : 
                             currentChallenge.type === "monkeys" ? <GiMonkey className='text-green-500 animate-bounce' size={30} /> : 
                             <FaIceCream className='text-red-500 animate-bounce' size={30} />}
                        </button>
                        <button
                            className="btn btn-outline border-none flex items-center gap-2"
                            onClick={removeItem}
                        >
                            <FaMinus className="text-lg text-red-500 mr-2" />
                            {currentChallenge.type === "apples" ? <FaApple className='text-red-500 animate-pulse' size={30} /> : 
                             currentChallenge.type === "monkeys" ? <GiMonkey className='text-green-500 animate-pulse' size={30} /> : 
                             <FaIceCream className='text-red-500 animate-pulse' size={30} />}
                        </button>
                    </div>
                    <div className="text-center">
                        <p className="text-xl">You have:</p>
                        <div className="flex justify-center gap-2 mt-2">
                            {currentChallenge.type === "apples" 
                                ? Array.from({ length: apples }).map((_, index) => (
                                    <FaApple
                                        key={index}
                                        className="text-red-500 text-3xl"
                                    />
                                ))
                                : currentChallenge.type === "monkeys"
                                ? Array.from({ length: monkeys }).map((_, index) => (
                                    <GiMonkey
                                        key={index}
                                        className="text-green-500 text-3xl"
                                    />
                                ))
                                : Array.from({ length: icecreams }).map((_, index) => (
                                    <FaIceCream
                                        key={index}
                                        className="text-red-500 text-3xl"
                                    />
                                ))
                            }
                        </div>
                        {checkChallengeCompletion() && (
                            <p className="mt-2 text-green-400">
                                Challenge Completed!
                            </p>
                        )}
                        {icecreams === 0 && currentChallenge.type === "icecreams" && (
                            <p className="mt-2 text-gray-400">
                                No ice creams yet! Start adding some.
                            </p>
                        )}
                        {apples === 0 && currentChallenge.type === "apples" && (
                            <p className="mt-2 text-gray-400">
                                No apples yet! Start adding some.
                            </p>
                        )}
                        {monkeys === 0 && currentChallenge.type === "monkeys" && (
                            <p className="mt-2 text-gray-400">
                                No monkeys yet! Start adding some.
                            </p>
                        )}
                    </div>
                </div>
            )}

            {gameCompleted && (
                <div className="p-6 rounded-xl bg-transparent w-3/4 max-w-lg text-center">
                    <h2 className="text-2xl font-bold mb-4">Congratulations!</h2>
                    <p className="mb-4">You ve completed all math challenges!</p>
                    <button 
                        onClick={() => {
                            setGameStarted(false);
                            setGameCompleted(false);
                        }}
                        className="btn border-none bg-primary"
                    >
                        Play Again
                    </button>
                </div>
            )}
        </div>
    );
};

export default LearnAdditions;
