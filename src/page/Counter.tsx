import { useState } from "react";

export default function Counter() {
  const [step, setStep] = useState(1);
  const [count, setCount] = useState(1);
  const handleStepNext = () => setStep(() => step + 1);
  const handleStepPrev = () => setStep(() => step - 1);
  const handleNext = () => setCount((count) => count + step);
  const handlePrev = () => setCount((count) => count - step);

  const displayDate = new Date();
  displayDate.setDate(displayDate.getDate() + count);
  
  return (
    <>
      <div className="flex space-x-3">
        <button className="bg-blue-300 p-5" onClick={handleStepPrev}>
          -
        </button>
        <p className="text-4xl text-center">Step: {step}</p>
        <button className="bg-blue-300 p-5" onClick={handleStepNext}>
          +
        </button>
      </div>
      <div className="flex space-x-3">
        <button className="bg-blue-300 p-5" onClick={handlePrev}>
          -
        </button>
        <p className="text-4xl text-center">Count: {count}</p>
        <button className="bg-blue-300 p-5" onClick={handleNext}>
          +
        </button>
        <p>{count < 0 ? 'The count cannot be negative' : `${count} days from today is ${displayDate.toDateString()}`}</p>
        <div>
            
        </div>
      </div>
    </>
  );
}
