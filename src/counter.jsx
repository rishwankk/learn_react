import React,{useState} from "react";

const Counter=()=>{
    
    const[counter,setCounter]=useState(0)
    
    const increment=()=>{
        setCounter(counter+1)
    
    }
    const reset=()=>{
        setCounter(0)
    
    }
    const decrement=()=>{
        
       counter<=0?reset:setCounter(counter-1)
    
    }
    
    return (
        <>

        <div>
            <h1>{counter}</h1>
        </div>
        <button onClick={increment}>inc</button>
        <button onClick={decrement}>dec</button>
        <button onClick={reset}>res</button>
        </>
    )
    

}    


export default Counter



