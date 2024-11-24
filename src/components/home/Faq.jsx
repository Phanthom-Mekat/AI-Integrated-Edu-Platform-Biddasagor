import  { useState } from "react";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const toggleFAQ = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    const faqData = [
        {
            question: "How does the personalized exercise system work?",
            answer:
                "Our platform uses AI to generate exercises tailored to your child's learning level, preferences, and goals. It adapts as they progress, ensuring optimal engagement and growth.",
        },
        {
            question: "Is there a free trial available?",
            answer:
                "Yes, we offer a 14-day free trial for our Pro and Premium plans, giving you full access to all features, including progress tracking and personalized exercises.",
        },
        {
            question: "What subjects are supported?",
            answer:
                "We currently support math, science, and English for grades K-12. New subjects and content are continually being added based on user feedback.",
        },
        {
            question: "Can I track my child's progress?",
            answer:
                "Absolutely! Our dashboard provides detailed insights into your child's performance, highlighting strengths and areas for improvement.",
        },
        {
            question: "Is the platform safe for kids?",
            answer:
                "Yes, we prioritize safety. Our platform is COPPA-compliant and ensures all data is securely stored and never shared with third parties.",
        },
        {
            question: "How can I contact customer support?",
            answer:
                "You can reach out to our customer support team at [support email]. We are here to help with any questions or concerns you may have.",
        },
        {
            question: "What payment methods are accepted?",
            answer:
                "We accept a wide range of payment methods, including credit cards, debit cards, and PayPal. You can choose the most convenient option for you.",
        },
    ];

    return (
        <div className="bg-light py-16 mb-10">
            <h2 className="text-4xl text-center  font-bold  mb-8">
                Frequently Asked Questions
            </h2>
            <div className="max-w-4xl mx-auto space-y-4">
                {faqData.map((faq, index) => (
                    <div
                        key={index}
                        className="border border-secondary/90 rounded-lg shadow-md overflow-hidden"
                    >
                        {/* Question */}
                        <button
                            onClick={() => toggleFAQ(index)}
                            className="w-full flex justify-between items-center p-4 text-left bg-secondary/5 hover:bg-secondary/40 focus:outline-none"
                        >
                            <span className="font-semibold text-secondary">
                                {faq.question}
                            </span>
                            {activeIndex === index ? (
                                <FaChevronUp className="text-secondary" />
                            ) : (
                                <FaChevronDown className="text-secondary" />
                            )}
                        </button>
                        {/* Answer */}
                        {activeIndex === index && (
                            <div className="p-4 bg-primary/10 text-gray-600">
                                {faq.answer}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Faq;
