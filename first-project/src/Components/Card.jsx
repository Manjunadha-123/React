import React from 'react';
function Card(){
    return(
        <div className='w-full h-screen bg-zinc-200'>
            <div className='w-52 px-3 py-4 bg-zinc-100 absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%] rounded-md'>
                <div className='w-full h-32 bg-zinc-300'>
                    <img className='w-full h-full object-cover rounded-md' src="https://plus.unsplash.com/premium_photo-1683133263716-731795d25343?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGFtYXpvbW4lMjBib3h8ZW58MHx8MHx8fDA%3D" alt="" />
                </div>
                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>Amazomn Basics.</h2>
                    <p className='text-xs mt-3'>Lorem ipsum dolor sit amet.</p>
                </div>
            </div>
        </div>
    )
}

export default Card;