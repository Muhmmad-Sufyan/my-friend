import React from 'react'

const ContactSection = () => {
    return (
        <div className='w-full h-full overflow-hidden py-[100px] font-serif px-[70px]  bg-slate-600  mx-auto my-8 rounded-lg'>
            <h1 className='text-center text-white  text-[80px]'>Contact Section</h1>
            <form >
                <div className='grid md:grid-cols-2 grid-cols-1'>
                    <label htmlFor=""> <h1 className='text-[25px] text-white'>First Name</h1> <input className='px-10 text-xl font-sarif rounded-lg w-[500px] h-[50px] my-6' type="text" /></label>
                    <label htmlFor=""> <h1 className='text-[25px] text-white'>Last Name</h1> <input className='px-10 text-xl font-sarif rounded-lg w-[500px] h-[50px] my-6' type="text" /></label>
                    <label htmlFor=""> <h1 className='text-[25px] text-white'>Email</h1> <input className='px-10 text-xl font-sarif rounded-lg w-[500px] h-[50px] my-6' type="text" /></label>
                    <label htmlFor=""> <h1 className='text-[25px] text-white'>Phone NUmber</h1> <input className='px-10 text-xl font-sarif rounded-lg w-[500px] h-[50px] my-6' type="text" /></label>
                    <label htmlFor=""> <h1 className='text-[25px] text-white'>Country</h1>  <input className='px-10 text-xl font-sarif rounded-lg w-[500px] h-[50px] my-6' type="text" /></label>
                    <label htmlFor="">  <h1 className='text-[25px] text-white'>City  </h1><input className='px-10 text-xl font-sarif rounded-lg w-[500px] h-[50px] my-6' type="text" /></label>

                </div>
                <div className='grid md:grid-cols-2 grid-cols-1 mx-0 ml-[-114px]'>
                    <button type='submit' className='bg-red-900 text-xl  mx-auto w-[60%] px-5 py-3 hover:bg-green-600  text-white hover:rounded-full'>Submit</button>
                    <button className='bg-gray-900 text-xl mx-auto w-[60%] px-5 py-3 hover:bg-green-600  text-white hover:rounded-full'>Cancle</button>

                </div>
            </form>
        </div>
    )
}

export default ContactSection