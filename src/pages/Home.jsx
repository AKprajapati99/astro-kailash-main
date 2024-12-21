import React from 'react';
import moon from '../assets/ay.png';
import shiva from '../assets/shiva.png';

export default function Home() {
  return (
    <div>
      <div className="bg-gradient-to-b from-zinc-900 via-zinc-950 to-black flex justify-center items-center h-screen">
        <div className="relative flex justify-center items-center h-[500px] w-[500px]">
          <div
            style={{
              backgroundImage: `url(${moon})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
            }}
            className="absolute top-0 left-0 h-full w-full moon-rotate"
          ></div>
          <img src={shiva} alt="Site logo" className="p-[6rem] relative z-10" />
        </div>
      </div>
      <style jsx>{`
        .moon-rotate {
          animation: rotate 40s linear infinite;
        }

        @keyframes rotate {
          from {
            transform: rotate(0deg);
          }
          to {
            transform: rotate(360deg);
          }
        }
      `}</style>
    </div>
  );
}
