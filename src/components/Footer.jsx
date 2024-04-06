import React from 'react'

const Footer = () => {
    return (
        <div className='w-full grid text-xl bg-slate-600  hover:bg-green-600  text-white rounded-lg grid-cols-3 mx-auto px-[90px] border-groove border-r-[red]  border-l-[#1af81a] border-t-[#ff5757] border-b-[white] border-[10px]'>

            <ul className=''>
                <li className='cursor-pointer'>Google</li>
                <li className='cursor-pointer'>Facebook</li>
                <li className='cursor-pointer'>Twiter</li>
                <li className='cursor-pointer'>Instagrame</li>
                <li className='cursor-pointer'>Email</li>
            </ul>
            <ul>
                <li className='cursor-pointer'>Youtub</li>
                <li className='cursor-pointer'>Ehsas Lab</li>
                <li className='cursor-pointer'>Bg Remove</li>
                <li className='cursor-pointer'>Image Quality</li>
                <li className='cursor-pointer'>Fiver</li>
            </ul>
            <ul>
                <li className='cursor-pointer'>TikTok</li>
                <li className='cursor-pointer'>Snap Chat</li>
                <li className='cursor-pointer'>Fire fox</li>
                <li className='cursor-pointer'>Canva</li>
                <li className='cursor-pointer'>Whatsapp</li>
            </ul>
        </div>
    )
}

export default Footer