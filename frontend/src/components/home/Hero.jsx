
const Hero = () => {

  return (
    <div className="hero bg-primary/25 py-12 overflow-hidden" >
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center" data-aos="fade-up">
        {/* Right Image */}
        <div className="">
        <img src="https://cdn.prod.website-files.com/65d1995bebc2cbfa914e45d5/65d42f061abca6bbbd7cd77b_Hero%20Image%2004.svg" alt="" />
      
        
        <img
          src="https://cdn.prod.website-files.com/65d1995bebc2cbfa914e45d5/65d43265c66159bcd2aaddc7_01.svg"
          alt="Hero Illustration"
          className="w-full max-w-md lg:max-w-lg"
        />
        
        </div>
        
        {/* Left Content */}
        <div className="text-center lg:text-left lg:mr-12"  data-aos="fade-up" >
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Discover Endless Possibilities
          </h1>
          <p className="mb-6 w-10/12  text-gray-400">
            Welcome to Biddasagor, your one-stop online resource for all
            things related to education, career, and personal development.
          </p>
          <div className="md:w-3/12">
          <button
            type="submit"
            className="flex justify-center flex-start gap-2 items-center mx-auto shadow-xl text-lg bg-primary backdrop-blur-md lg:font-semibold isolation-auto border-gray-50 before:absolute before:w-full before:transition-all before:duration-700 before:hover:w-full before:-left-full before:hover:left-0 before:rounded-full before:bg-secondary hover:text-gray-50 before:-z-10 before:aspect-square before:hover:scale-150 before:hover:duration-700 relative z-10 px-4 py-2 overflow-hidden border-2 rounded-full group"
          >
            Get Started
            <svg
              className="w-8 h-8 justify-end group-hover:rotate-90 group-hover:bg-gray-50 text-gray-50 ease-linear duration-300 rounded-full border border-gray-700 group-hover:border-none p-2 rotate-45"
              viewBox="0 0 16 19"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 18C7 18.5523 7.44772 19 8 19C8.55228 19 9 18.5523 9 18H7ZM8.70711 0.292893C8.31658 -0.0976311 7.68342 -0.0976311 7.29289 0.292893L0.928932 6.65685C0.538408 7.04738 0.538408 7.68054 0.928932 8.07107C1.31946 8.46159 1.95262 8.46159 2.34315 8.07107L8 2.41421L13.6569 8.07107C14.0474 8.46159 14.6805 8.46159 15.0711 8.07107C15.4616 7.68054 15.4616 7.04738 15.0711 6.65685L8.70711 0.292893ZM9 18L9 1H7L7 18H9Z"
                className="fill-gray-800 group-hover:fill-gray-800"
              ></path>
            </svg>
          </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
