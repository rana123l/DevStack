const Hero = () => {
  return (
    <div className="py-12 lg:py-20">
      <div className="flex flex-col-reverse lg:flex-row justify-between items-center w-[95%] sm:w-[90%] lg:w-[80%] mx-auto gap-8 lg:gap-12">
        <div className="flex-1 max-w-xl">
          <h1 className="text-4xl md:text-5xl lg:text-[58px] font-extrabold text-slate-900 leading-[1.15] tracking-tight">
            Build Your Ideal <br />
            <span className="bg-gradient-to-r from-[#FF5722] via-[#DB2777] to-[#7C3AED] bg-clip-text text-transparent">
              Development Stack
            </span>
          </h1>
          <p className="mt-6 text-slate-500 text-base md:text-lg leading-relaxed">
            Explore frontend, backend, database, and tooling options, <br />
            compare them side by side, and put together the stack that fits your
            next project.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <button className="btn border-none text-white font-medium px-6 rounded-lg bg-gradient-to-r from-[#FF5722] to-[#DB2777] hover:opacity-95 shadow-sm">
              Explore Technologies
            </button>
            <button className="btn bg-white hover:bg-slate-50 text-slate-700 font-medium px-6 rounded-lg border border-slate-200 shadow-sm">
              Learn More
            </button>
          </div>
        </div>
        <div className="flex-1 flex justify-center lg:justify-end">
          <img
            src="/assets/banner-stack.png"
            alt="Hero Image"
            className="w-full max-w-md lg:max-w-lg object-contain transition-transform duration-500 ease-in-out hover:scale-105 cursor-pointer"
          />
        </div>
      </div>
    </div>
  )
}

export default Hero