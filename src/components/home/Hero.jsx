const Hero = () => {
  return (
    <div className="hero bg-primary/25 py-12">
      <div className="hero-content flex flex-col lg:flex-row-reverse items-center">
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
        <div className="text-center lg:text-left lg:mr-12">
          <h1 className="text-4xl font-bold text-secondary mb-4">
            Discover Endless Possibilities
          </h1>
          <p className="mb-6 w-10/12  text-gray-400">
            Welcome to Biddasagor, your one-stop online resource for all
            things related to education, career, and personal development.
          </p>
          <button className="btn bg-tertiary/80 rounded-xl text-bold text-lg">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
