import { useState } from "react";
export default function CounterV2(){
    const [count, setCount] = useState(0);
    const [step, setStep] = useState(1);

    const date = new Date();
    date.setDate(date.getDate() + count);
    function handleReset(e){
        setCount(0);
        setStep(1);
        console.log(e.target)
    }
    function handleInputCount(e){
        return setCount(Number(e.target.value))
    }
    function handleStep(e){
        return setStep(Number(e.target.value))
    }
    return(
        <div>
            <div>
                <input type="range" min="0" max="10" value={step} onChange={handleStep}/>
                <span>Step: {step}</span>
            </div>
            <div>
                <button onClick={()=>setCount((c)=>c-step)}>-</button>
                <input type="text" value={count} onChange={handleInputCount} />
                <button onClick={()=>setCount((c)=>c+step)}>+</button>
                <button onClick={handleReset}>Reset</button>
            </div>
            <span>{date.toDateString()}</span>
        </div>
    )
}