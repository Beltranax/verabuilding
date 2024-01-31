import React from 'react';
import Link from 'next/link';

const Hero = () => {
  return (
    <div className='flex items-center justify-center h-screen mb-12 bg-fixed bg-center bg-cover custom-img'>
      {/* Overlay */}
      <div className='absolute top-0 left-0 right-0 bottom-0 bg-black/70 z-[2]' />
      <div className='p-5 text-white z-[2] mt-[-10rem]'>
        <h2 className='font-serif text-5xl font-bold'>VERA&apos;S GENERAL BUILDING</h2>
        <p className='py-5 text-2xl'>We provide amazing, quality and creative Construction Designs!</p>
      </div>
    </div>
  );
};

export default Hero;
