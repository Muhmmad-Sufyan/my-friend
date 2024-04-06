import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
    return (
        <>
            {/* <div className='flex bg-black h-[-0px] w-[0.05px] '>
                <img className='w-[5px]' src="src/assets/1.png" alt="" />
                <img className='w-[5px]' src="src/assets/2.JPG" alt="" />
                <img className='w-[5px]' src="src/assets/3.png" alt="" />
                <img className='w-[5px]' src="src/assets/4.png" alt="" />
                <img className='w-[5px]' src="src/assets/5.jpg" alt="" />
                <img className='w-[5px]' src="src/assets/6.jpg" alt="" />
                <img className='w-[5px]' src="src/assets/7.png" alt="" />
                <img className='w-[5px]' src="src/assets/8.png" alt="" />
                <img className='w-[5px]' src="src/assets/9.png" alt="" />
                <img className='w-[5px]' src="src/assets/10.png" alt="" />
                <img className='w-[5px]' src="src/assets/11.png" alt="" />

            </div> */}

            <header className='flex bg-slate-600 gap-10 py-5 px-2 text-center'>
                <a href="" ><h1 className='text-3xl  font-bold font-serif text-white'>Zia ul Rehman </h1> </a>
                <div className='px-5 '>
                    <input type="text" className='md:w-[500px] w-[210px] text-lg font-bold px-5 h-[45px] hover:rounded-full ' />
                    <button className='bg-red-900 px-5 py-3 hover:bg-green-600  text-white hover:rounded-full '>Search</button>
                </div>

                <ul className='lg:flex gap-6 bg-red-900 px-5 py-3 hover:bg-green-600 md:hidden hidden text-white hover:rounded-full'>
                    <li className=' cursor-pointer'>Home</li>
                    <li className=' cursor-pointer'>About</li>
                    <li className=' cursor-pointer'>Contact us</li>
                </ul>

                <div className='lg:flex md:hidden  hidden bg-red-900 px-5 py-3 hover:bg-green-600   text-white hover:rounded-full'>
                    <Link to="/login">Login/SingUp</Link>
                </div>
            </header>
        </>

    )
}

export default Header