const Pricing = () => {
    return (
        <div className="bg-light py-16">
            <div className="w-11/12 mx-auto">
                <h2
                    className="text-4xl text-center font-bold text-secondary mb-6"
                    data-aos="fade-up"
                >
                    Choose Your Plan
                </h2>
                <p
                    className="text-center text-gray-500 mb-12"
                    data-aos="fade-up"
                    data-aos-delay="200"
                >
                    Unlock the full potential of personalized learning for your child. Select a plan that fits your needs!
                </p>

                <div
                    className="grid grid-cols-1 md:grid-cols-3 gap-8"
                    data-aos="fade-up"
                    data-aos-delay="300"
                >
                    {/* Basic Plan */}
                    <div
                        className="border-2 border-secondary rounded-lg shadow-lg p-6 text-center bg-primary/10"
                        data-aos="fade-right"
                        data-aos-delay="100"
                    >
                        <h3 className="text-xl font-bold text-secondary mb-4">Basic</h3>
                        <p className="text-lg font-semibold text-gray-700 mb-2">$0 / Free</p>
                        <p className="text-gray-600 mb-6">For occasional users</p>
                        <ul className="text-sm text-gray-500 text-start space-y-2 mb-6">
                            <li>✅ Limited exercises</li>
                            <li>✅ Step-by-step answers</li>
                            <li>❌ Progress tracking</li>
                            <li>❌ Advanced personalization</li>
                        </ul>
                        <button className="bg-secondary btn text-white px-6 rounded-lg hover:bg-secondary-dark">
                            Get Started
                        </button>
                    </div>

                    {/* Pro Plan */}
                    <div
                        className="border-8 border-secondary rounded-lg shadow-lg p-6 text-center bg-secondary/20"
                        data-aos="zoom-in"
                        data-aos-delay="200"
                    >
                        <h3 className="text-xl font-bold text-secondary mb-4">
                            Pro <span className="text-xs bg-secondary text-white py-1 px-2 rounded-lg ml-2">Most Popular</span>
                        </h3>
                        <p className="text-lg font-semibold text-gray-700 mb-2">$9.99 / Month</p>
                        <p className="text-gray-600 mb-6">For active learners</p>
                        <ul className="text-sm text-gray-500 text-start space-y-2 mb-6">
                            <li>✅ Unlimited exercises</li>
                            <li>✅ Step-by-step answers</li>
                            <li>✅ Progress tracking</li>
                            <li>❌ Advanced personalization</li>
                        </ul>
                        <button className="bg-secondary btn text-white px-6 rounded-lg hover:bg-secondary-dark">
                            Start Free Trial
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div
                        className="border-2 border-secondary rounded-lg shadow-lg p-6 text-center bg-primary/15"
                        data-aos="fade-left"
                        data-aos-delay="300"
                    >
                        <h3 className="text-xl font-bold text-secondary mb-4">Premium</h3>
                        <p className="text-lg font-semibold text-gray-700 mb-2">$99.99 / Year</p>
                        <p className="text-gray-600 mb-6">For dedicated learners</p>
                        <ul className="text-sm text-gray-500 text-start space-y-2 mb-6">
                            <li>✅ Unlimited exercises</li>
                            <li>✅ Step-by-step answers</li>
                            <li>✅ Progress tracking</li>
                            <li>✅ Advanced personalization</li>
                        </ul>
                        <button className="bg-secondary btn text-white px-6 rounded-lg hover:bg-secondary-dark">
                            Start Free Trial
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
