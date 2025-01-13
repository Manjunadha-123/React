import React from 'react';
function EventHandling(){

    const  data = [
        {name:"KGF",description:"this song is playing based on the movie kgf"},
        {name:"Sahoo",description:"this song is playing based on the movie Sahoo"}
    ]

    const handleClick = ()=>{alert("Downloading...")};

    return(
        <div className='w-full h-screen bg-zinc-300 flex justify-center flex-col gap-10 items-center'>
            {
                data.map((item,index)=>(
                    <div key={index}className='px-3 py-2 bg-zinc-100 rounded'>
                        <h3 className='font-semibold text-xl'>{item.music_name}</h3>
                        <p className='text-xs mt-2'>{item.description}</p>
                        <button onMouseOver={handleClick} className='bg-sky-500 text-white px-2 py-1 mt-2 rounded'>
                            Download Now
                        </button>
                    </div>
                )     
                )
            }
        </div>
    )
}

export default EventHandling;