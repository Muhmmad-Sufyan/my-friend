import React from 'react'

const Brand = () => {
    return (
        <>
            <div className='w-full h-full text-white overflow-hidden py-[100px] font-serif px-[70px]  bg-slate-600  mx-auto my-8 rounded-lg'>
                <h1 className='text-center text-[80px]'>Brand Section</h1>
                <div className='grid md:grid-cols-3 grid-cols-2'>
                    <div className='border-[15px]'><img className='w-[400px] h-[400px]' src="src/assets/s (1).jpg" alt="" /><h1 className='text-center text-xl font-bold '> Muhammad Sufyan</h1></div>
                    <div className='border-[15px]'> <img className='w-[400px] h-[400px]' src="src/assets/s (1).png" alt="" /><h1 className='text-center text-xl font-bold '>Zia Ul Rehman</h1></div>
                    <div className='border-[15px]'><img className='w-[400px] h-[400px]' src="src/assets/s.jpg" alt="" /><h1 className='text-center text-xl font-bold '>Zia Ul Rehman</h1></div>
                    <div className='border-[15px]'> <img className='w-[400px] h-[400px]' src="src/assets/s (2).png" alt="" /><h1 className='text-center text-xl font-bold '>Muhammad Sufyan</h1></div>
                    <div className='border-[15px]'><img className='w-[400px] h-[400px]' src="src/assets/s.jpg" alt="" /><h1 className='text-center text-xl font-bold '>Muhammad Sufyan</h1></div>
                    <div className='border-[15px]'><img className='w-[400px] h-[400px]' src="src/assets/4.png" alt="" /><h1 className='text-center text-xl font-bold '>Zia Ul Rehman</h1></div>

                </div>
            </div>
        </>
    )
}

export default Brand