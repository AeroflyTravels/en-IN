import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

export function NotFound() {
  const imageRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    let lFollowX = 0;
    let lFollowY = 0;
    let x = 0;
    let y = 0;
    const friction = 1 / 30;

    function animate() {
      x += (lFollowX - x) * friction;
      y += (lFollowY - y) * friction;

      if (imageRef.current) {
        imageRef.current.style.transform = `translate(${x}px, ${y}px) scale(1.1)`;
      }

      requestAnimationFrame(animate);
    }

    const handleMouseMove = (e: MouseEvent) => {
      const lMouseX = Math.max(-100, Math.min(100, window.innerWidth / 2 - e.clientX));
      const lMouseY = Math.max(-100, Math.min(100, window.innerHeight / 2 - e.clientY));
      lFollowX = (20 * lMouseX) / 100;
      lFollowY = (10 * lMouseY) / 100;
    };

    window.addEventListener('mousemove', handleMouseMove);
    animate();

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-t from-[#202239] to-[#8595AC] relative overflow-hidden">
      
      {/* Background Image with Parallax */}
      <img
        ref={imageRef}
        src="https://images.unsplash.com/photo-1419242902214-272b3f66ee7a?w=1600&q=80"
        alt="Foggy mountains"
        className="absolute top-0 left-0 w-full h-full object-cover -z-10 transition-transform"
        style={{ transform: 'scale(1.1)' }}
      />

      {/* Card Container */}
      <div className="relative w-full max-w-4xl mx-4 h-[600px] bg-[#0D0C1E] rounded-2xl overflow-hidden shadow-2xl">
        
        {/* Header */}
        <header className="p-8 flex items-center justify-between">
          {/* Nav Menu Icon */}
          <div className="relative w-5 h-5 cursor-pointer group">
            <div className="absolute top-0 left-0 w-full h-0.5 bg-[#565c73] rounded-full 
              shadow-[0_5px_0_#565c73,_0_10px_0_#565c73] 
              group-hover:bg-cyan-400 transition-colors"></div>
          </div>

          {/* Logo */}
          <div className="text-center flex-1">
            <Link to="/">
              <svg className="w-16 h-4 mx-auto" viewBox="0 0 61 14">
                <path fillRule="evenodd" clipRule="evenodd" fill="#525C7C" d="M29.117,0.98h-1.846l-2.407,11.551h6.045l0.334-1.62h-4.198
                  L29.117,0.98z M40.132,0.98l-3.365,5.285l-1.2-5.285h-1.885l1.854,7.182l-0.926,4.369h1.854l0.889-4.337l4.853-7.214H40.132z
                  M8.529,2.125C7.771,1.362,6.688,0.98,5.282,0.98H2.407L0,12.531h3.124c1.339,0,2.505-0.286,3.497-0.861
                  c0.992-0.573,1.748-1.392,2.267-2.457c0.52-1.063,0.779-2.309,0.779-3.737C9.667,4.006,9.288,2.889,8.529,2.125z M7.201,8.351
                  c-0.366,0.821-0.892,1.46-1.577,1.913c-0.686,0.452-1.488,0.679-2.407,0.679H2.166L3.934,2.56h1.137
                  c0.873,0,1.537,0.254,1.994,0.762S7.751,4.57,7.751,5.539C7.751,6.592,7.567,7.53,7.201,8.351z M20.128,12.531h1.831L24.382,0.98
                  H22.55L20.128,12.531z M15.314,0.964l-6.1,11.567h1.979l1.627-3.208H16.6l0.319,3.208h1.823L17.448,0.964H15.314z M13.632,7.68
                  l1.339-2.655c0.452-0.885,0.821-1.693,1.106-2.425c0,0.274,0.015,0.642,0.043,1.102c0.029,0.461,0.147,1.787,0.354,3.979H13.632z
                  M44.33,0l-2.662,14h16.67L61,0H44.33z M52.584,8.584c-0.265,1.279-0.755,2.229-1.473,2.849c-0.719,0.62-1.67,0.931-2.854,0.931
                  c-1.025,0-1.816-0.254-2.376-0.762c-0.561-0.508-0.839-1.236-0.839-2.19c0-0.397,0.047-0.805,0.141-1.222l1.367-6.473h1.679
                  l-1.359,6.501c-0.1,0.422-0.149,0.801-0.149,1.136c0,0.488,0.141,0.867,0.422,1.139c0.28,0.271,0.707,0.405,1.277,0.405
                  c0.685,0,1.229-0.192,1.63-0.577c0.401-0.386,0.694-1.013,0.879-1.88l1.408-6.724h1.68L52.584,8.584z M56.034,12.221h-1.665
                  l2.203-10.504h1.664L56.034,12.221z"/>
              </svg>
            </Link>
          </div>

          {/* Search Icon */}
          <div className="cursor-pointer group">
            <svg className="w-4 h-4" viewBox="0 0 16 16">
              <path fillRule="evenodd" clipRule="evenodd" 
                className="fill-[#4F5269] group-hover:fill-cyan-400 transition-colors" 
                d="M14.769,14.769c-0.342,0.342-0.896,0.342-1.237,0l-3.756-3.756
                c-2.399,1.793-5.801,1.623-7.981-0.557c-2.392-2.392-2.392-6.271,0-8.663s6.271-2.392,8.662,0c2.18,2.181,2.35,5.583,0.557,7.981
                l3.756,3.756C15.11,13.873,15.11,14.427,14.769,14.769z M9.219,3.032c-1.709-1.709-4.479-1.709-6.188,0
                c-1.708,1.708-1.708,4.479,0,6.188c1.709,1.708,4.479,1.708,6.188,0C10.927,7.51,10.927,4.74,9.219,3.032z"/>
            </svg>
          </div>
        </header>

        {/* Content */}
        <div className="text-center pt-24 text-[#CDD4DE]">
          <h1 className="font-black text-[165px] leading-none mb-0 opacity-60">404</h1>
          <h2 className="font-bold text-4xl mb-2 opacity-90">Page not found</h2>
          <p className="font-light text-sm opacity-70 mb-32">
            I tried to catch some fog, but I mist
          </p>
          <Link 
            to="/" 
            className="inline-block font-light text-xs uppercase border border-[#CDD4DE] px-4 py-2 rounded opacity-40 hover:opacity-100 hover:border-cyan-400 hover:text-cyan-400 transition-all duration-300"
          >
            Back to home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default NotFound;