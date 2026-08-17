import { useState } from "react";
const messages = ["Learn React", "Apply for a job", "Invest new income"];
export default function Steps() {
  const [step, setStep] = useState(1);
  const [isOpen, setIsOpen] = useState(true);
  const handlePrevious = () => {
    if (step > 1) setStep(step - 1);
  };
  const handleNext = () => {
    if (step < 3) setStep(step + 1);
  };
  return (
    <>
      <button className="close" onClick={() => setIsOpen(!isOpen)}>
        &times;
      </button>
      {isOpen && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <div className="message">
            <p>
              Step {step} : {messages[step - 1]}
            </p>
          </div>
          <div className="buttons">
            <button className="bg-blue-300 text-white" onClick={handlePrevious}>
              Previous
            </button>
            <button className="bg-blue-300 text-white" onClick={handleNext}>
              Next
            </button>
          </div>
        </div>
      )}
    </>
  );
}
