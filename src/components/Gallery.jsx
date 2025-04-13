import React, { useEffect, useState, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

function Gallery() {
  const sectionRef = useRef([]);
  
    useEffect(() => {
      gsap.fromTo(
        sectionRef.current,
        { opacity: 0, y: 100 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          delay:0.5,
          stagger: 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 80%',
            end: 'bottom 60%',
            scrub: true,
            toggleActions: 'play none none reverse',
          },
        }
      );
    }, []);
  const [media, setMedia] = useState([]);

  useEffect(() => {
    // Generate dummy barber images and videos
    const dummyMedia = Array.from({ length: 30 }, (_, i) => {
      const isVideo = i % 6 === 0; // every 6th item is a video
      if (isVideo) {
        return {
          type: 'video',
          url: 'https://www.w3schools.com/html/mov_bbb.mp4', // Replace with your barber video URLs
        };
      } else {
        const width = 300;
        const height = 300 + Math.floor(Math.random() * 200);
        return {
          type: 'image',
          url: `https://picsum.photos/${width}/${height}?random=${i}`, // Replace with real barber images if needed
        };
      }
    });

    setMedia(dummyMedia);
  }, []);

  return (
    <>
      {/* Hero Banner */}
      <div className="relative w-full h-28">
        <div className="absolute inset-0 -z-10 bg-[url('https://framerusercontent.com/images/MqHEokHdo8zTQVDxypZEntmHgQ.jpg?scale-down-to=2048')] bg-cover bg-center w-full h-full" />
        <div className="absolute inset-0 z-0 bg-black opacity-50" />
        <div ref={(el) => (sectionRef.current[0] = el)} className="relative z-10 flex flex-col items-center justify-center w-full h-full text-white">
          <h1 className="text-3xl sm:text-5xl font-bold tracking-tighter">OUR GAALLERY</h1>
        </div>
      </div>

      {/* Pinterest Style Barber Gallery */}
      <div className="p-4">
        <h2 ref={(el) => (sectionRef.current[1] = el)} className="text-3xl font-bold mb-6 text-center">Barber Style Gallery</h2>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {media.map((item, index) =>
            item.type === 'image' ? (
              <img
              ref={(el) => (sectionRef.current[index+2] = el)}
                key={index}
                src={item.url}
                alt={`Barber Image ${index + 1}`}
                loading="lazy"
                className="w-full rounded-lg break-inside-avoid shadow-md hover:scale-105 transition-transform duration-300"
              />
            ) : (
              <video
                key={index}
                // controls
                muted
                loop
                autoPlay
                // muted
                className="w-full rounded-lg break-inside-avoid shadow-md hover:scale-105 transition-transform duration-300"
              >
                <source src={item.url} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )
          )}
        </div>
      </div>
    </>
  );
}

export default Gallery;
