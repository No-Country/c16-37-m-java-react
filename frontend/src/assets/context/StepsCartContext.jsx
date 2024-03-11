import { createContext, useState } from "react";

const StepsCartContext = createContext();
const stepsInitial = {
    one: false,
    two: false,
    three: false
 };
const StepsCartProvider = ({children}) => {
    const [stepsCartComplete, setStepsCartComplete] = useState(stepsInitial)
    const handleStepsCart = (stepComplete) => {
        setStepsCartComplete((prevSteps) => {
            if (stepComplete === 1) {
              return { one: true, two: false, three: false };
            }
            if (stepComplete === 2) {
              return { one: true, two: true, three: false };
            }
            if (stepComplete === 3) {
              return { one: true, two: true, three: true };
            }
            return prevSteps;
          });
    }
    const value = {handleStepsCart, stepsCartComplete};
    return <StepsCartContext.Provider value={value}>{children}</StepsCartContext.Provider>
}
export {StepsCartProvider}
export default StepsCartContext;