import React from 'react'
import ButtonProps from '../Button/ButtonProps';

const HeroBanner = () => {
    const urlImg = 'https://fastly.picsum.photos/id/888/1920/1080.jpg?hmac=gILdWiv5GfYCDYWFiZrEcK8TpR6X-Mm05tExxvr6YsY';

    const transition = 'transition-all ease-in duration-200';
    const button1 = `rounded-xl text-white bg-purple-700 border-purple-700 py-4 px-5 border-2 hover:bg-purple-900 hover:border-purple-900 ${transition}`;
    const button2 = `rounded-xl py-4 px-5 border-2 border-black dark:border-white hover:border-2 hover:border-purple-500 hover:text-purple-500 ${transition}`;
    return (
            <div className='min-h-[600px] grid grid-cols-1 md:grid-cols-2 bg-white dark:bg-transparent'>
                <div className='w-full h-full p-10 flex flex-col justify-center gap-5'>
                    <h1 className='text-5xl font-bold '>Create the screens<br/><span className='text-[#4F46E5]'>your visitors deserve to see</span></h1>
                    <p className='text-xl'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <div className='flex flex-wrap gap-5 py-10 justify-center'>
                        <ButtonProps title='Learn More' classButton={button1} />
                        <ButtonProps title='Contact me' classButton={button2} />
                    </div>
                </div>
                <div className="w-full h-[400px] md:h-full relative overflow-hidden">
                    <img
                        src={urlImg}
                        alt="hero-1"
                        className={`w-full h-full block object-cover md:object-cover md:clip-path-bannerPolygon`}
                    />
                </div>
            </div>
    )
}

export default HeroBanner
