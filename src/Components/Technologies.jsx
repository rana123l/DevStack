import { useEffect, useState } from "react";
import { toast } from "react-toastify";

// Helper to style badge based on text
const getBadgeStyle = (badge) => {
  switch (badge) {
    case "Popular":
    case "Top SQL":
    case "Essential":
    case "Containers":
      return "bg-sky-50 text-sky-600 border-sky-100";
    case "Versatile":
    case "Standard":
      return "bg-emerald-50 text-emerald-600 border-emerald-100";
    case "Fast":
    case "Ubiquitous":
      return "bg-amber-50 text-amber-600 border-amber-100";
    case "SSR / Edge":
      return "bg-purple-50 text-purple-600 border-purple-100";
    case "Cache":
      return "bg-rose-50 text-rose-500 border-rose-100";
    case "Robust":
    case "Modern":
      return "bg-cyan-50 text-cyan-600 border-cyan-100";
    default:
      return "bg-slate-50 text-slate-600 border-slate-200";
  }
};

const Technologies = () => {
  const [technologies, setTechnologies] = useState([]);
  const [selectedStack, setSelectedStack] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data 
  useEffect(() => {
    setLoading(true);
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => {
        setTimeout(() => {
          setTechnologies(data);
          setLoading(false);
        }, 1000);
      })
      .catch((error) => {
        console.error("Error loading JSON:", error);
        setLoading(false);
      });
  }, []);

  // Add technology 
  const handleAddToStack = (tech) => {
    const alreadyExists = selectedStack.some((item) => item.id === tech.id);
    if (alreadyExists) {
      toast.warn(`${tech.name} is already added to your stack!`);
      return;
    }

    setSelectedStack([...selectedStack, tech]);
    toast.success(`${tech.name} added to stack!`);
  };

  // Remove stack
  const handleRemoveFromStack = (item) => {
    setSelectedStack(selectedStack.filter((tech) => tech.id !== item.id));
    toast.info(`${item.name} removed from stack!`);
  };

  // Remove all items from stack
  const handleRemoveAll = () => {
    if (selectedStack.length === 0) return;
    setSelectedStack([]);
    toast.error("All technologies removed from stack!");
  };

  return (
    <section className="py-12 bg-white">
      <div className="w-[95%] sm:w-[90%] lg:w-[80%] mx-auto">
        
        {/* Header */}
        <div className="mb-10">
          <h2 className="text-3xl md:text-4xl font-extrabold text-slate-900 tracking-tight">
            Explore the <span className="text-[#DB2777]">Technologies</span>
          </h2>
          <p className="mt-2 text-slate-500 text-sm md:text-base">
            Pick one technology per category to build your ideal stack.
          </p>
        </div>

        {/* Layout */}
        <div className="flex flex-col lg:flex-row items-start gap-8">
          
          {/* Left Column */}
          <div className="flex-1 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 w-full">
            {loading ? (
              <div className="col-span-full flex flex-col justify-center items-center py-24 gap-3">
                <span className="loading loading-spinner loading-lg text-[#DB2777]"></span>
                <p className="text-slate-400 text-sm">Loading technologies...</p>
              </div>
            ) : (
              technologies.map((tech) => {
                const isAdded = selectedStack.some((item) => item.id === tech.id);

                return (
                  <div
                    key={tech.id}
                    className="card bg-white border border-slate-200/90 rounded-2xl shadow-sm hover:shadow-md transition-shadow duration-200"
                  >
                    <div className="card-body p-6 flex flex-col justify-between">
                      <div>
                        {/* Icon & Badge */}
                        <div className="flex items-center justify-between mb-4">
                          <img
                            src={tech.icon}
                            alt={tech.name}
                            className="w-9 h-9 object-contain"
                          />
                          <span
                            className={`badge badge-sm border font-medium ${getBadgeStyle(
                              tech.badge
                            )}`}
                          >
                            {tech.badge}
                          </span>
                        </div>

                        {/* Title */}
                        <h3 className="card-title text-lg font-bold text-slate-900">
                          {tech.name}
                        </h3>

                        {/* Description */}
                        <p className="text-slate-500 text-xs mt-2 leading-relaxed min-h-[44px] line-clamp-3">
                          {tech.description}
                        </p>
                      </div>

                      {/* Tags & Button */}
                      <div className="mt-6">
                        <div className="flex items-center justify-between text-xs mb-4">
                          <span className="badge badge-sm bg-slate-100 text-slate-600 border-none font-medium">
                            {tech.category}
                          </span>
                          <span className="text-slate-500 text-[11px] font-medium">
                            {tech.difficulty}
                          </span>
                          <span className="flex items-center gap-1 text-[11px] font-semibold text-slate-700">
                            <span className="text-amber-400">★</span> {tech.rating}
                          </span>
                        </div>

                        <button
                          onClick={() => handleAddToStack(tech)}
                          className={`btn btn-block text-xs font-semibold rounded-lg border-none shadow-sm transition-colors ${
                            isAdded
                              ? "bg-slate-200 text-slate-400 cursor-not-allowed hover:bg-slate-200"
                              : "bg-[#0F172A] hover:bg-slate-800 text-white cursor-pointer"
                          }`}
                        >
                          {isAdded ? "✓ Added to Stack" : "Add to Stack"}
                        </button>
                      </div>
                    </div>
                  </div>
                );
              })
            )}
          </div>

          {/* Right Column */}
          <div className="card w-full lg:w-[320px] xl:w-[340px] shrink-0 bg-white border border-slate-200/90 rounded-2xl shadow-sm sticky top-6">
            <div className="card-body p-6">
              <h3 className="card-title text-xl font-bold text-slate-900 tracking-tight">
                Your Stack
              </h3>
              <p className="text-xs text-slate-400 font-normal">
                {selectedStack.length === 0
                  ? "No technologies selected yet."
                  : `${selectedStack.length} Technology Selected`}
              </p>

              {/* Empty State */}
              {selectedStack.length === 0 ? (
                <div className="border border-dashed border-slate-200 rounded-xl py-12 px-4 text-center mt-5">
                  <p className="text-slate-400 text-xs font-normal">
                    Your stack is empty.
                  </p>
                </div>
              ) : (
                <div className="mt-5 space-y-3">
                  {selectedStack.map((item) => (
                    <div
                      key={item.id}
                      className="border border-slate-200 rounded-xl p-3 flex items-center justify-between bg-white hover:border-slate-300 transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <img
                          src={item.icon}
                          alt={item.name}
                          className="w-7 h-7 object-contain"
                        />
                        <div>
                          <h4 className="text-xs font-bold text-slate-900 leading-tight">
                            {item.name}
                          </h4>
                          <p className="text-[10px] text-slate-400 font-normal mt-0.5">
                            {item.category}
                          </p>
                        </div>
                      </div>

                      {/* Button */}
                      <button
                        onClick={() => handleRemoveFromStack(item)}
                        className="btn btn-ghost btn-xs btn-circle text-slate-400 hover:text-slate-600"
                        title="Remove"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="w-4 h-4"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                          />
                        </svg>
                      </button>
                    </div>
                  ))}

                  {/* Button */}
                  <button
                    onClick={handleRemoveAll}
                    className="btn btn-block btn-outline border-[#FCA5A5] text-[#EF4444] hover:bg-red-50 hover:border-red-300 hover:text-red-600 text-xs font-semibold rounded-xl"
                  >
                    Remove All
                  </button>
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Technologies;