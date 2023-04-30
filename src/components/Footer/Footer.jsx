import React, { useState, useEffect } from 'react';
import { iconList } from '../icons';

const Footer = () => {
    const {
        FaLinkedin,
        FaGithubSquare,
        FaYoutubeSquare
    } = iconList;

    const sizeIcon = '2rem';
    const generalClass = 'hover:scale-110 opacity-75 hover:opacity-100';

    const GitHub = 'https://github.com/JaackX1';
    const LinkedIn = 'https://www.linkedin.com/in/nicolas-cabrera-m/';
    const Youtube = 'https://www.youtube.com/watch?v=mCdA4bJAGGk&ab_channel=sweetblue.';

    return (
        <footer>
            <div className='flex-wrap min-h-[128px] bg-white dark:bg-[#333333] flex justify-around items-center text-center py-5 rounded-3xl px-1 mx-2'>
                <div>
                    <h2>© 2020 Your Company, Inc. All rights reserved.</h2>
                </div>
                <div>
                    <ul className='flex gap-5'>
                        <li className={` ${generalClass} hover:text-green-400`}><a href={GitHub} target="_blank"><FaGithubSquare size={sizeIcon} /></a></li>
                        <li className={` ${generalClass} hover:text-blue-400`}><a href={LinkedIn} target="_blank"><FaLinkedin size={sizeIcon} /></a></li>
                        <li className={` ${generalClass} hover:text-red-500`}><a href={Youtube} target="_blank"><FaYoutubeSquare size={sizeIcon} /></a></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer
