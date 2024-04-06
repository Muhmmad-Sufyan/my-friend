import React, { useState } from 'react'

const Hero = () => {

    return (
        <>
            <div className='grid md:grid-cols-2 sm:grid-cols-1 grid-cols-[70%_auto] p-10 bg-slate-600 rounded-lg text-white my-7 mx-6 text-center'>
                <div className='mt-[150px] mx-[50px]'>
                    <h1 className='text-4xl font-bold font-serif'> My Name Zia Ul-Rehman</h1>
                    <h2 className='text-3xl font-bold font-serif'>I Live In Narowal</h2>
                    <p className='text-2xl font-serif'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo optio nesciunt, consectetur magnam praesentium incidunt repudiandae nemo laudantium aspernatur nihil deserunt fugiat fuga a sed. Eum laudantium natus in!Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum quo optio nesciunt, consectetur magnam praesentium incidunt ?</p>
                </div>
                <div>

                    <figure className="relative">
                        <video autoPlay loop plays-playsInline className="absolute w-[80%] left-[10%] bottom-[20%] z-[1]">
                            <source src="src/assets/WhatsApp Video 2023-10-01 at 12.26.53 PM.mp4" />
                        </video>
                        <img className="relative z-[2]" src="src/assets/1.png" />
                    </figure>
                </div>
            </div>

        </>
    )
}

export default Hero