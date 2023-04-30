import React from 'react'
import { iconList } from '../icons'
import CardSkills from '../Card/CardSkills';

const SkillsSection = () => {
    const { FaReact,
        FaPython,
        FaJava,
        FaHtml5,
        IoServer,
        IoLogoCss3 } = iconList;

    return (
        <div className='flex flex-col gap-5'>
            <div className='text-center'>
                <h2 className='font-semibold text-4xl px-1'>One Product, <span className='text-[#4F46E5]'>Many Solutions</span></h2>
                <p className='text-lg pt-3 px-3'>Ac turpis egestas maecenas pharetra convallis posuere morbi leo urna.</p>
            </div>
            <div className='flex justify-center'>
                <div className='grid grid-cols-1 min-[770px]:grid-cols-2 min-[1155px]:grid-cols-3 max-w-7xl items-center gap-5'>
                    <CardSkills
                        title='Skills in Python'
                        subtitle='Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'
                        IconComponent={FaPython}
                    />
                    <CardSkills
                        title='Skills in React'
                        subtitle='Risus nec feugiat in fermentum posuere urna nec. Posuere sollicitudin aliquam ultrices sagittis.'
                        IconComponent={FaReact}
                    />
                    <CardSkills
                        title='Skills in Java'
                        subtitle='Ornare suspendisse sed nisi lacus sed viverra tellus. Neque volutpat ac tincidunt vitae semper.'
                        IconComponent={FaJava}
                    />
                    <CardSkills
                        title='Skills in Html'
                        subtitle='Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum tellus.'
                        IconComponent={FaHtml5}
                    />
                    <CardSkills
                        title='Skills in SqlServer'
                        subtitle='Nec tincidunt praesent semper feugiat. Sed adipiscing diam donec adipiscing tristique risus nec feugiat.'
                        IconComponent={IoServer}
                    />
                    <CardSkills
                        title='Skills in Css'
                        subtitle='Mattis rhoncus urna neque viverra justo nec ultrices. Id cursus metus aliquam eleifend.'
                        IconComponent={IoLogoCss3}
                    />
                </div>
            </div>
        </div>
    )
}

export default SkillsSection
