import { FaUsers, FaTasks, FaRocket, FaStar } from "react-icons/fa";
import CountUp from "react-countup";

const States = () => {
    return (
        <div
            className="bg-tertiary/25 pt-80 md:pt-40 pb-16 overflow-hidden"
            style={{
                clipPath:
                    "polygon(0 15%, 10% 10%, 20% 20%, 30% 15%, 40% 20%, 50% 10%, 60% 20%, 70% 15%, 80% 10%, 90% 20%, 100% 10%, 100% 100%, 0 100%)",
            }}
        >
            <h2
                className="text-4xl text-center font-bold text-secondary mb-6"
                data-aos="fade-up"
            >
                Key Achievements
            </h2>
            <p
                className="text-center text-gray-500 md:w-7/12 mx-auto mb-16"
                data-aos="fade-up"
                data-aos-delay="200"
            >
                <span className="text-secondary font-bold">Biddasagor</span> has been serving a community of learners from all around the world. Our platform has helped them unlock their potential and achieve their goals.
            </p>
            <div
                className="flex justify-around max-md:flex-col md:flex-row gap-10"
                data-aos="fade-up"
                data-aos-delay="300"
            >
                {/* Statistic 1 */}
                <div
                    className="flex flex-col items-center text-center p-6 rounded-lg"
                    data-aos="fade-right"
                >
                    <FaUsers className="text-5xl text-secondary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Users Served</h3>
                    <CountUp
                        start={0}
                        end={20000}
                        duration={30}
                        separator=","
                        className="text-3xl font-bold text-primary"
                    />
                    <p className="text-gray-500 mt-2">Happy learners!</p>
                </div>

                {/* Statistic 2 */}
                <div
                    className="flex flex-col items-center text-center p-6 rounded-lg"
                    data-aos="fade-left"
                    data-aos-delay="200"
                >
                    <FaTasks className="text-5xl text-secondary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Tasks Completed</h3>
                    <CountUp
                        start={0}
                        end={15000}
                        duration={40}
                        separator=","
                        className="text-3xl font-bold text-primary"
                    />
                    <p className="text-gray-500 mt-2">Progressing every day!</p>
                </div>

                {/* Statistic 3 */}
                <div
                    className="flex flex-col items-center text-center p-6 rounded-lg"
                    data-aos="fade-right"
                    data-aos-delay="400"
                >
                    <FaRocket className="text-5xl text-secondary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Lessons Launched</h3>
                    <CountUp
                        start={0}
                        end={500}
                        duration={20}
                        separator=","
                        className="text-3xl font-bold text-primary"
                    />
                    <p className="text-gray-500 mt-2">Aiming high!</p>
                </div>

                {/* Statistic 4 */}
                <div
                    className="flex flex-col items-center text-center p-6 rounded-lg"
                    data-aos="fade-left"
                    data-aos-delay="600"
                >
                    <FaStar className="text-5xl text-secondary mb-4" />
                    <h3 className="text-xl font-semibold mb-2">Achievements</h3>
                    <CountUp
                        start={0}
                        end={1200}
                        duration={20}
                        separator=","
                        className="text-3xl font-bold text-primary"
                    />
                    <p className="text-gray-500 mt-2">Learners empowered!</p>
                </div>
            </div>
        </div>
    );
};

export default States;
