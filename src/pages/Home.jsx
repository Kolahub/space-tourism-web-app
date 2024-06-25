// import React from 'react'
import { useSpring, animated } from '@react-spring/web'
import { useNavigate } from 'react-router-dom';

function Home() {
  const navigate = useNavigate()
  // Animation for the text container
  const textAnimation = useSpring({
    from: { opacity: 0, transform: 'translate3d(0,-50px,0)' },
    to: { opacity: 1, transform: 'translate3d(0,0px,0)' },
    config: { duration: 1000 }
  });

  // Animation for the "Explore" button
  const exploreButtonAnimation = useSpring({
    from: { opacity: 0, transform: 'scale(0.5)' },
    to: { opacity: 1, transform: 'scale(1)' },
    config: { tension: 200, friction: 10 },
    delay: 500
  });

  function handleExplore () {
    navigate('destination')
  }

  return (
    <section
      className="font-custom bg-[url('/home/background-home-mobile.jpg')]  md:bg-[url('/home/background-home-tablet.jpg')]  lg:bg-[url('/home/background-home-desktop.jpg')] bg-cover h-[130vh] lg:h-screen pt-32 md:pt-44 px-24"
      id="Home">
      <animated.div style={textAnimation} className="flex flex-col lg:flex-row justify-between gap-16 items-center lg:items-end lg:h-[25rem]">
        <div className="lg:w-1/2 flex flex-col gap-6 text-white text-center lg:text-start">
          <h3 className="text-2xl sm:text-3xl tracking-wider uppercase text-blue-100">So, you want to travel to</h3>
          <h1 className="font-unique uppercase text-8xl sm:text-9xl">Space</h1>
          <p className="text-lg sm:text-xl sm:tracking-wide text-gray-300">
            Let’s face it; if you want to go to space, you might as well genuinely go to
            outer space and not hover kind of on the edge of it. Well sit back, and relax
            because we’ll give you a truly out of this world experience!
          </p>
        </div>

        <div className="lg:w-1/2">
          <animated.button style={exploreButtonAnimation} className="relative z-10 block w-[244px] h-[244px] md:w-[272px] md:h-[272px] bg-white rounded-full lg:ml-auto before:content-[''] before:absolute before:w-[100%] before:h-[100%] before:top-0 before:left-0 before:z-[-1] before:bg-white before:opacity-10 before:rounded-full hover:before:scale-150 before:transition-all" onClick={handleExplore}>
            <p className="font-unique text-black text-4xl uppercase absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">Explore</p>
          </animated.button>
        </div>
      </animated.div>
    </section>
  );
}

export default Home;
