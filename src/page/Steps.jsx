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
          <StepMessage step={step}>{messages[step - 1]}</StepMessage>
          <div className="buttons">
            <Button variant="primary" onClick={handlePrevious}>
              <span>❤️</span>Previous
            </Button>
            <Button variant="danger" onClick={handleNext}>
              <span>✔️</span>Next
            </Button>
          </div>
        </div>
      )}
    </>
  );
}
function StepMessage({step, children}){
  return(
    <div className="message">
      <p>Step {step}</p>
      {children}
    </div>
  )
}
function Button({ onClick, children, variant = "primary" }) {
  const colors = {
    primary: "#2563eb",
    danger: "#dc2626",
    success: "#16a34a",
    warning: "#eab308",
  };

  return (
    <button
      onClick={onClick}
      style={{
        backgroundColor: colors[variant] ?? colors.primary,
        color: "#fff",
      }}
      className="px-4 py-2 rounded"
    >
      {children}
    </button>
  );
}
