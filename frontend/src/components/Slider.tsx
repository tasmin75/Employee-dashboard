import { useState } from "react";

const Slider = () => {
  const [activeSlide, setActiveSlide] = useState(0);

  const arr = [
    {
      heading: "Welcome tp Crewcomply",
      subheading: "Efficient training tracking for your team",
    },
    {
      heading: "Key Features",
      subheading: "Assign, track, and report on training easily",
    },
    {
      heading: "Why Choose Us",
      subheading: "Auto-Assign, Audi Log, Automated Training Reminders",
    },
  ];

  const numSlides = 3;

  return (
    <div className="flex flex-col gap-8" data-carousel="static">
      <div className="">
        {[...Array(numSlides)].map((_, index) => (
          <div
            key={index}
            className={`${activeSlide === index ? "" : "hidden"
              } duration-700 ease-in-out`}
            data-carousel-item
          >
            <div className=" h-full mt-10">
              {arr[activeSlide] && (
                <div className="flex flex-col justify-center h-full text-center text-white">
                  <h2 className="text-2xl font-semibold">
                    {arr[activeSlide].heading}
                  </h2>
                  <p className="mt-2 text-base">
                    {arr[activeSlide].subheading}
                  </p>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      <div className="flex gap-3 justify-center">
        {[...Array(numSlides)].map((_, index) => (
          <button
            key={index}
            type="button"
            className={`w-3 h-1 rounded-full ${activeSlide === index ? "bg-white" : "bg-gray-300"
              } ${activeSlide === index ? "scale-125" : ""
              }`}
            aria-current={activeSlide === index}
            aria-label={`Slide ${index + 1}`}
            data-carousel-slide-to={index}
            onClick={() => setActiveSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Slider;
