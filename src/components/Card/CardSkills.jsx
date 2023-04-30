import React from 'react'

const CardSkills = ({title,subtitle,IconComponent}) => {
    return (
        <div className='flex flex-col items-center min-[385px]:w-96 gap-7 p-4 text-center'>
            <div className='p-4 shadow-personal dark:shadow-neutral-900 rounded-xl'>
                <IconComponent size='3rem' color='#3B82F6'></IconComponent>
            </div>
            <h3 className='text-2xl'>{title}</h3>
            <p className='text-lg'>{subtitle}</p>
        </div>
    )
}

export default CardSkills
