import React from 'react'
import ButtonProps from '../Button/ButtonProps';

const CardProjects = ({ urlImg , urlUser, date, typeWork , title, desc, author , href }) => {

    const transition = 'transition-all ease-in duration-200';
    const buttonStyle = `rounded-xl py-2 px-5 border-2 border-black dark:border-white hover:border-2 hover:border-purple-500 hover:text-purple-500 ${transition}`;
    return (
        <div className='min-[357px]:w-[356px] min-h-[481px] rounded-xl overflow-hidden bg-neutral-200 dark:bg-neutral-800 group'>
            <div className='relative overflow-hidden'>
                <img
                    src={urlImg}
                    alt="project-1"
                    className={`w-full h-full block object-cover`}
                />
                <div className='absolute bottom-1 right-0'>
                    <span className='p-2 bg-[#4F46E5] font-medium text-white'>{date}</span>
                </div>
            </div>
            <div className={`flex flex-col justify-center gap-3 py-4 px-5`}>
                <span className='font-extralight'>{typeWork}</span>
                <h3 className={`font-bold text-2xl group-hover:text-[#4F46E5] ${transition}`}>{title}</h3>
                <p>{desc}</p>
                <div className='flex justify-between items-center mt-3 flex-wrap'>
                    <div className='flex items-center gap-3'>
                        <img
                            src={urlUser}
                            alt="hero-1"
                            className={`h-[45px] w-[45px] rounded-[50%] object-cover`}
                        />
                        <p>by {author}</p>
                    </div>
                    <div>
                        <ButtonProps title='Demo' classButton={buttonStyle} href={href}/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CardProjects
