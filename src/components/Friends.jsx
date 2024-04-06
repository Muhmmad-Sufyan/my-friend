import React from 'react'

const Friends = () => {
    return (
        <>
            <div className='w-full h-full text-white overflow-hidden py-[100px] font-serif px-[70px] grid md:grid-cols-3 grid-cols-2 bg-slate-600  mx-auto my-8 rounded-lg'>
                <div><h1 className='text-center text-xl font-bold '>Zia Ul Rehman</h1><img className='w-[400px] h-[400px]' src="src/assets/7.PNG" alt="" /></div>

                <div><h1 className='text-center text-xl font-bold '>Muhammad Sufyan</h1> <img className='w-[400px] h-[400px]' src="src/assets/f (2).jpg" alt="" /></div>
                <div><h1 className='text-center text-xl font-bold '>Ishtiak</h1> <img className='w-[400px] h-[400px]' src="src/assets/f (1).jpg" alt="" /></div>
            </div>
        </>
    )
}

export default Friends