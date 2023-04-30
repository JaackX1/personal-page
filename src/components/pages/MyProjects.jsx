import React from 'react'
import ButtonProps from '../Button/ButtonProps';
import CardProjects from '../Card/CardProjects';

const MyProjects = () => {

    const urlImg = 'https://fastly.picsum.photos/id/20/1920/1080.jpg?hmac=Utrr9fAysRiBfDa6fjzMkaTB0zlNK2Ll3v9_QyvX3VQ';
    /* 
        https://fastly.picsum.photos/id/999/1920/1080.jpg?hmac=UVOnR6VRpGMfprI8-QKg-U5-bXE1E09oj0wz6D1CvFU
    */

        const userImg = 'https://us.123rf.com/450wm/rawpixel/rawpixel1701/rawpixel170110994/68665469-hind%C3%BA-hombre-studio-concept.jpg?ver=6';

    return (
        <div>
            <div className='text-center mb-10'>
                <h2 className='font-semibold text-5xl'>My <span className='text-[#4F46E5]'>Projects</span></h2>
            </div>
            <div className='flex justify-center mt-10'>
                <div className='flex flex-wrap justify-center gap-10 max-w-[1200px]'>
                    <CardProjects
                        urlImg={urlImg}
                        urlUser={userImg}
                        date='22 Marzo, 01'
                        typeWork='Web Development'
                        title='Project One'
                        desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex labore ratione expedita cupiditate maxime hic tenetur, illum enim est laboriosam!'
                        author='JackX1'
                        href=''
                    />

                    <CardProjects
                        urlImg={urlImg}
                        urlUser={userImg}
                        date='22 Diciembre, 01'
                        typeWork='Web Development'
                        title='Project Two'
                        desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex labore ratione expedita cupiditate maxime hic tenetur, illum enim est laboriosam!'
                        author='JackX1'
                        href=''
                    />

                    <CardProjects
                        urlImg={urlImg}
                        urlUser={userImg}
                        date='22 Septiembre, 01'
                        typeWork='Web Development'
                        title='Project Three'
                        desc='Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ex labore ratione expedita cupiditate maxime hic tenetur, illum enim est laboriosam!'
                        author='JackX1'
                        href=''
                    />
                </div>
            </div>
        </div>
    )
}

export default MyProjects
