import React from 'react';
import { ShootingStars } from '../components/ShootingStars';
import { StarsBackground } from '../components/StarsBackground';
const ThemesPage = () => {
  return (
    <div className="min-h-screen pt-24 px-6 relative flex flex-col items-center justify-center overflow-hidden bg-neutral-950">
        {/* Background Layer: Stars & Shooting Stars */}
        <div className="absolute inset-0 z-0">
          <StarsBackground />
          <ShootingStars />
        </div>
        
        {/* Content Layer */}
        <div className="relative z-10 text-center">
            {/* <h1 className="text-5xl md:text-7xl font-bold text-white mb-8 tracking-tighter drop-shadow-[0_0_15px_rgba(0,191,255,0.4)]">
                Themes
            </h1>
            
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto uppercase tracking-widest">
                Explore the frontiers of innovation
            </p>

            <button className="btn bg-neon-blue text-white hover:bg-blue-600 border-none px-10 py-4 text-xl font-bold shadow-[0_0_20px_rgba(0,191,255,0.5)] transition-all hover:scale-105 active:scale-95">
                this is theme page
            </button> */}

{/* cards */}



<div className="hover-3d ">
  {/* content */}
  <figure className="w-60 rounded-2xl h-60 w-120">
    <img src="https://static.vecteezy.com/system/resources/thumbnails/070/587/955/small/electronic-circuit-board-testing-with-multimeters-and-components-photo.jpg" alt="Tailwind CSS 3D card" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div className="hover-3d  mr-12 ml-12">
  {/* content */}
  <figure className="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/card-2.webp?x" alt="Tailwind CSS 3D hover" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>

<div className="hover-3d">
  {/* content */}
  <figure className="w-60 rounded-2xl">
    <img src="https://img.daisyui.com/images/stock/card-3.webp?x" alt="Tailwind CSS 3D hover" />
  </figure>
  {/* 8 empty divs needed for the 3D effect */}
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
  <div></div>
</div>


        </div>
    </div>
  );
}

export default ThemesPage;
