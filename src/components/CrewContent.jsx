import { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';

function CrewContent({ data }) {
    const db = data;
    const [selectedCrew, setSelectedCrew] = useState(db[0]);

    function handleDisplay(e) {
        const index = Number(e.target.dataset.index);
        setSelectedCrew(db[index]);
    }

    // Animations for text and image
    const fade = useSpring({
        opacity: 1,
        transform: 'translateY(0px)',
        from: { opacity: 0, transform: 'translateY(20px)' },
        reset: true,
        reverse: false,
    });

    const fadeTwo = useSpring({
        from: { opacity: '0' },
        to: { opacity: '1' },
        reset: true,
        config: { duration: 1000 },  // 1 seconds for a complete fadeTwo
    });

    return (
        <div className='flex flex-col items-center lg:items-start lg:flex-row gap-14 justify-center'>
            <div className=" md:max-w-[612px] lg:w-1/2">
                <animated.div style={fade} className="my-16 lg:my-32 text-center lg:text-start">
                    <h2 className='font-unique uppercase text-3xl text-gray-500 mb-4'>{selectedCrew.role}</h2>
                    <h1 className='font-unique uppercase text-3xl lg:text-5xl mb-4 lg:mb-6 text-white'>{selectedCrew.name}</h1>
                    <p className='text-lg sm:text-xl md:text-2xl font-thin text-gray-100'>{selectedCrew.bio}</p>
                </animated.div>
                <div className="">
                    <ul className='flex gap-5 w-fit mx-auto lg:mx-0'>
                        {
                            db.map((item, index) => (
                                <li key={item.name}>
                                    <button className={`w-6 h-6 rounded-full ${selectedCrew.name === item.name ? 'bg-white' : 'bg-gray-500'}`} data-index={index} onClick={handleDisplay}></button>
                                </li>
                            ))
                        }
                    </ul>
                </div>
            </div>

            <div className="w-[271.24px] md:w-[446.74px] lg:w-1/2">
                <animated.img src={selectedCrew.images.png} alt="" className='w-full' style={fadeTwo} />
            </div>
        </div>
    );
}

export default CrewContent;
