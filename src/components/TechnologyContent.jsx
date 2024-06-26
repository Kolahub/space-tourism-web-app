import { useState } from "react";
import { useSpring, animated } from "@react-spring/web";

function TechnologyContent({ data }) {
  const db = data;
  const [selectedTech, setSelectedTech] = useState(db[0]);

  const fadeStyles = useSpring({
    from: { opacity: '0' },
    to: { opacity: '1' },
    reset: true,
    config: { duration: 1000 },  // 1 seconds for a complete fadeTwo
  });

  function handleDisplay(e) {
    const index = Number(e.target.dataset.index);
    setSelectedTech(db[index]);
  }

  return (
    <div className="flex flex-col-reverse lg:flex-row gap-10 justify-end items-center">
      <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16 lg:w-1/2 px-6 md:px-14 lg:px-0">
        <div>
          <ul className="font-unique flex flex-row lg:flex-col gap-10">
            {db.map((el, i) => (
              <li key={i}>
                <button
                  className={`text-3xl rounded-full h-14 w-14 lg:h-20 lg:w-20 ${
                    selectedTech.name === el.name
                      ? "bg-white text-gray-900"
                      : "text-white border border-gray-500"
                  }`}
                  onClick={handleDisplay}
                  data-index={i}
                >
                  {1 + i}
                </button>
              </li>
            ))}
          </ul>
        </div>

        <animated.div style={fadeStyles} className="text-center lg:text-start">
          <div className="max-w-[512px] lg:max-w-full">
            <h2 className="font-unique uppercase text-2xl sm:text-3xl text-gray-500 mb-4">
              the terminology...
            </h2>
            <h1 className="font-unique uppercase text-4xl sm:text-5xl mb-4 lg:mb-6 text-white">
              {selectedTech.name}
            </h1>
            <p className="text-gray-100 text-lg md:text-xl">{selectedTech.description}</p>
          </div>
        </animated.div>
      </div>

      <div className="w-full lg:w-1/2">
        <animated.picture style={fadeStyles}>
          <source
            media="(max-width: 1024px)"
            srcSet={selectedTech.images.landscape}
          />
          <img
            src={selectedTech.images.portrait}
            alt="Responsive"
            className="w-full h-auto"
          />
        </animated.picture>
      </div>
    </div>
  );
}

export default TechnologyContent;
