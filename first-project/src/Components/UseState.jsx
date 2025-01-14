import React, { useState } from 'react';




function UseState(){

    function Basic(){

        const [score,setscore] = useState(100);

        return(
            <div className='p-4 '>
                <h1>{score}</h1>
                <button onClick={()=>setscore(200)} className='px-2 py-2 bg-blue-400 rounded-full text-white mt-4'>Change</button>
            </div> 
        )
    }

    function Intermediate(){

        const [score,setscore] = useState(1);

        return(
            <div className='p-4 '>
                <h1>{score}</h1>
                <button onClick={()=>setscore(prev => prev+1)} className='px-2 py-2 bg-blue-400 rounded-full text-white mt-4'>Change</button>
            </div> 
        )
    }

    function Advance(){

        const [val,setVal] = useState({name:"score",value:false});

        return(
            <div className='p-4 '>
                <h1>{val.name}</h1>
                <h1>{val.value.toString()}</h1>
                <button onClick={()=>setVal({...val,name:"true"})} className='px-2 py-2 bg-blue-400 rounded-full text-white mt-4'>Change</button>
            </div> 
        )
    }

    return(
        <>
            <Basic />
            <Intermediate />
            <Advance />
        </>
    )
}

export default UseState;