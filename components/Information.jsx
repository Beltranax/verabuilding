import React from 'react';
import Link from 'next/link';

const Information = () => {
  return (
    <div className='flex items-center justify-center text-center'>
      <div>

        <h2 className='text-3xl font-bold'>Who We Are</h2>

        <p className='py-5 text-2xl'><span className='font-bold'>Vera&apos;s General Building</span> 
        is a leading player in the construction industry. With over two decades of experience, we have established <br></br>
        ourselves as a trusted name in delivering high-quality construction projects. Our team of skilled professionals is dedicated to providing innovative <br></br>
        solutions and superior craftsmanship. We pride ourselves on our commitment to excellence, ensuring that every project we undertake is completed to the  <br></br>
        highest standards. From residential buildings to commercial complexes, our diverse portfolio showcases our expertise in various types of construction projects.<br></br>
        With a focus on customer satisfaction and attention to detail, we strive to exceed expectations and build long-lasting relationships with our  <br></br>
        clients. Trust <span className='font-bold'>Vera&apos;s General Building</span> for all your construction needs, and experience the difference
        of working with a reliable and reputable company.</p>

        <p className='py-5 font-bold text-2xl'>Why build with us?</p>
        <p className='py-5  text-2xl text-left'> <span className='font-bold'>Increased Rental Income: </span>  <br></br>Constructing an Accessory Dwelling Unit (ADU) 
        on your property can provide a valuable source of rental income. This can be particularly beneficial in 
        areas with high demand for housing.</p>
        <p className='py-5  text-2xl text-left'>  <span className='font-bold'>Flexible Living Space: </span> <br></br> ADUs offer versatile living options, such as a separate 
        space for extended family members or a home office. This flexibility allows homeowners to adapt their living 
        arrangements to changing needs.</p>
        <p className='py-5  text-2xl text-left'>  <span className='font-bold'>Increased Property Value: </span> <br></br> Adding an ADU can increase the overall value of your property. 
        This can be advantageous when it comes time to sell, as potential buyers may see the added living space as a desirable 
        feature.</p>
      </div>
    </div>
  );
};

export default Information;