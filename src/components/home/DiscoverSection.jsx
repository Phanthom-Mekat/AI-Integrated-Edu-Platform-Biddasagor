import { useState, useEffect } from "react";
import { FaBookOpen, FaClock, FaRobot, FaUsers } from "react-icons/fa";
import { useSwipeable } from "react-swipeable";

const DiscoverSection = () => {
  const sliderImages = [
    "https://a-us.storyblok.com/f/1015735/690x440/693fb12dca/1-2.png/m/filters:quality(80)",
    "https://a-us.storyblok.com/f/1015735/690x440/32a86db431/1-5.png/m/filters:quality(80)",
    "https://a-us.storyblok.com/f/1015735/690x440/1e303bbe5b/1.png/m/filters:quality(80)",
    "https://a-us.storyblok.com/f/1015735/690x440/4a8b70fb7b/1-4.png/m/filters:quality(80)",
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  // Automatic slide
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length);
    }, 2000);

    return () => clearInterval(interval); // Clean up interval on unmount
  }, [sliderImages.length]);

  // Swipe handlers
  const handlers = useSwipeable({
    onSwipedLeft: () =>
      setCurrentSlide((prev) => (prev + 1) % sliderImages.length),
    onSwipedRight: () =>
      setCurrentSlide((prev) =>
        prev === 0 ? sliderImages.length - 1 : prev - 1
      ),
  });

  return (
    <section className="py-16 bg-light" data-aos="fade-up">
      <div className="container mx-auto px-6 text-center lg:text-left" data-aos="fade-up">
        {/* Title */}
        <h2 className="text-4xl text-center font-bold text-secondary mb-4">
          Discover Biddasagor
        </h2>
        <p className="text-center text-gray-500 md:w-9/12 mx-auto mb-16">
          Discover a wealth of tools and resources designed to elevate your educational experience. From AI-driven innovations to shared community insights, everything you need is right here.
        </p>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Slider */}
          <div className="relative bg-primary/10 " {...handlers} data-aos="fade-right">
            <div className="w-full relative overflow-hidden rounded-lg">
              <img
                src={sliderImages[currentSlide]}
                alt={`Slide ${currentSlide + 1}`}
                className="w-10/12 mx-auto bg-none  object-cover transition-all duration-300 ease-in-out"
              />
            </div>
          </div>

          {/* Features */}
          <div className="space-y-6" data-aos="fade" >
            <div className="flex items-start" data-aos="fade-up">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-lg mr-4">
                <FaRobot size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">All AI Models</h4>
                <p className="text-gray-400">
                  Access advanced AI models like GPT-40, Claude 3.5, and more.
                </p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-lg mr-4">
                <FaBookOpen size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">Step-by-Step</h4>
                <p className="text-gray-400">
                  Understand complex problems with detailed explanations.
                </p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-lg mr-4">
                <FaUsers size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">
                  Collaborative Learning
                </h4>
                <p className="text-gray-400">
                  Benefit from community-verified answers.
                </p>
              </div>
            </div>

            <div className="flex items-start" data-aos="fade-up">
              <div className="w-12 h-12 flex items-center justify-center bg-primary text-white rounded-lg mr-4">
                <FaClock size={20} />
              </div>
              <div>
                <h4 className="text-xl font-bold text-primary">24/7 AI Tutor</h4>
                <p className="text-gray-400">
                  Personalized, in-depth learning with an AI tutor.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DiscoverSection;
