import React from 'react';
function DifferentCards(){

    const item = [
        {img: 'https://images.unsplash.com/photo-1599497828090-6eb0838fb1c8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fHNhbXN1bmclMjBib3h8ZW58MHx8MHx8fDA%3D', title: 'Samsung Goods.', desc: 'Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.',instock : true},
        {img: 'https://images.unsplash.com/photo-1621768216002-5ac171876625?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlJTIwcHJvZGVjdHN8ZW58MHx8MHx8fDA%3D', title: 'Apple Tab.', desc: 'Lorem ipsum dolor sit amet. Description 1',instock : false},
        {img: 'https://images.unsplash.com/photo-1633174524778-61a18ee54490?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OHx8YW1hem9uJTIwYm94fGVufDB8fDB8fHww', title: 'Amazon Basics,', desc: 'Lorem ipsum dolor sit amet.',instock : true},
    ]
   

    return(
        <div className='w-full h-screen bg-zinc-200 flex items-center justify-center gap-4'>
            {item.map((ele, index) => (
                <div key ={index}className='w-52 px-3 py-4 bg-zinc-100 rounded-md'>
                <div className='w-full h-32 bg-zinc-300'>
                    <img className='w-full h-full object-cover rounded-md' src={ele.img} alt="" />
                </div>
                <div className='w-full px-3 py-4'>
                    <h2 className='font-semibold'>{ele.title}</h2>
                    <p className='text-xs mt-3'>{ele.desc}</p>
                    <button className={`px-4 py-1 mt-3 ${ele.instock ? ' bg-blue-600':' bg-red-600'} text-xs rounded text-zinc-100`}>
                        {ele.instock ? 'Add to cart' : 'Out of stock'}
                    </button>
                </div>
            </div>
            ))}
        </div>
    )
}

export default DifferentCards;