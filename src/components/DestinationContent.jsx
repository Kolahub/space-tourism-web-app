// import React from 'react'
import { useState } from "react";
import { useSpring, animated } from '@react-spring/web';

function DestinationContent({ data }) {
  const db = data;
  const [selectedPlace, setSelectedPlace] = useState(db[0]);

  function handleDisplay(e) {
    const index = Number(e.target.dataset.index);
    setSelectedPlace(db[index]);
  }

  // Animation for the orbital rotation
  const orbit = useSpring({
    from: { transform: 'rotate(0deg)' },
    to: { transform: 'rotate(360deg)' },
    loop: { reverse: true },
    config: { duration: 80000 },  // 4 seconds for a complete orbit
  });

  const fade = useSpring({
    opacity: 1,
    transform: 'translateY(0px)',
    from: { opacity: 0, transform: 'translateY(20px)' },
    reset: true,
    reverse: false,
  });

  return (
    <div className=" flex flex-col lg:flex-row justify-center items-center gap-16 py-11">
      <div className="lg:w-1/2">
        <animated.img 
          src={selectedPlace.images.png} 
          alt="" 
          className="sm:w-[400px] sm:h-[400px] rounded-full" 
          style={{...fade, ...orbit}} 
        />
      </div>
      <div className="lg:w-1/2">
        <ul className="flex gap-6 mb-10">
          {db.map((element, i) => (
            <li key={element.name}>
              <button
                className={`text-white text-2xl py-2 ${selectedPlace.name === element.name ? 'border-b-4' : ''}`}
                data-index={i}
                onClick={(e) => handleDisplay(e)}
              >
                {element.name}
              </button>
            </li>
          ))}
        </ul>

        <animated.div className="my-10 text-white max-w-96" style={fade}>
          <div>
            <h1 className="font-unique uppercase text-7xl sm:text-8xl">{selectedPlace.name}</h1>
            <p className="text-xl text-gray-300">{selectedPlace.description}</p>
          </div>
        </animated.div>

        <animated.div className="text-white mt-10 flex gap-6 justify-between" style={fade}>
          <div>
            <p className="mb-3 text-2xl">AVG. DISTANCE</p>
            <h2 className="font-unique text-4xl">{selectedPlace.distance}</h2>
          </div>

          <div>
            <p className="mb-3 text-2xl">Est. travel time</p>
            <h2 className="font-unique text-4xl">{selectedPlace.travel}</h2>
          </div>
        </animated.div>
      </div>
    </div>
  );
}

export default DestinationContent;
