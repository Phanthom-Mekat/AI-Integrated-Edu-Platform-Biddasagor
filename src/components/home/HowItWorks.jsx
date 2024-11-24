import { FaUpload, FaTasks,  FaCheck, FaChartBar } from "react-icons/fa";
import { MdOutlineQuiz } from "react-icons/md";

const HowItWorks = () => {
    return (
        <div className="py-16 bg-light">
            <div>
                <h2 className="text-4xl text-center font-bold text-secondary pt-5 mb-4">
                    How It Works
                </h2>
                <p className="text-center text-gray-500 md:w-8/12 mx-auto mb-16">
                    Empower parents with an easy-to-use platform to create personalized exercises based on their childrens needs. From uploading problems to tracking progress, it’s all made simple!
                </p>
            </div>
            <ul className="timeline timeline-snap-icon max-md:timeline-compact timeline-vertical">
                {/* Step 1 */}
                <li>
                    <div className="timeline-middle p-3  bg-primary/60 rounded-full">
                        <FaUpload className="h-5 w-5" />
                    </div>
                    <div className="timeline-start  mb-10 md:text-end">
                        <time className="font-mono italic">Step 1</time>
                        <div className="text-lg font-bold">Upload or Describe</div>
                        <p className="text-gray-600">Upload a picture or select topic to generate a chatbot math problem to get started.</p>
                    </div>
                    <hr />
                </li>

                {/* Step 2 */}
                <li>
                    <hr />
                    <div className="timeline-middle p-3  bg-primary/60 rounded-full">
                        <FaTasks className="h-5 w-5" />
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">Step 2</time>
                        <div className="text-lg font-bold">Generate Exercises</div>
                       <p className="text-gray-600"> Our AI recreates math problems with a school-like feel for practice.</p>
                    </div>
                    <hr />
                </li>

                {/* Step 3 */}
                <li>
                    <hr />
                    <div className="timeline-middle p-3  bg-primary/60 rounded-full">
                        <MdOutlineQuiz className="h-5 w-5" />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">Step 3</time>
                        <div className="text-lg font-bold">Play Quiz</div>
                       <p className="text-gray-600"> Play a quiz to test your understanding of the problem.</p>
                    </div>
                    <hr />
                </li>

                {/* Step 4 */}
                <li>
                    <hr />
                    <div className="timeline-middle p-3  bg-primary/60 rounded-full">
                        <FaCheck className="h-5 w-5" />
                    </div>
                    <div className="timeline-end mb-10">
                        <time className="font-mono italic">Step 4</time>
                        <div className="text-lg font-bold">Check Results</div>
                       <p className="text-gray-600"> Review answers and track progress through the app for better insights.</p>
                    </div>
                    <hr />
                </li>

                {/* Step 5 */}
                <li>
                    <hr />
                    <div className="timeline-middle p-3   bg-primary/60 rounded-full">
                        <FaChartBar className="h-5 w-5" />
                    </div>
                    <div className="timeline-start mb-10 md:text-end">
                        <time className="font-mono italic">Step 5</time>
                        <div className="text-lg font-bold">Track Progress</div>
                            <p className="text-gray-600">                        Visualize learning trends and improvements with saved results.
                            </p>
                        </div>
                    <hr />
                </li>
            </ul>
        </div>
    );
};

export default HowItWorks;
