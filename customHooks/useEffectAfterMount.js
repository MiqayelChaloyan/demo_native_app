
import {useEffect, useRef} from 'react';

const useEffectAfterMount = (effect, dependencies) => {
  const initialRender = useRef(true);
  useEffect(() => {
    if (initialRender.current === true) {
      initialRender.current = false;
    } else {
      effect();
    }
  }, dependencies);
};

export default useEffectAfterMount;

// The useEffectAfterMount hook allows you to run an effect after the initial 
// mount of a component, skipping the effect's execution during the initial 
// rendering. It helps you separate the logic for the initial render and subsequent renders.

// Inside the hook, it uses the useRef hook to create a mutable initialRender 
// reference. The initialRender.current value is initially set to true.

// The hook then utilizes the useEffect hook to conditionally execute the effect. 
// On the initial mount, the effect is skipped by checking the value of 
// initialRender.current. If it is true, indicating the initial render, 
// the initialRender.current is set to false to indicate subsequent renders.

// On subsequent renders, when initialRender.current is false, the effect is 
// executed by invoking the effect function passed as a parameter to the 
// useEffectAfterMount hook.

// The dependencies array is provided to the useEffect hook to ensure that the 
// effect re-runs when any of the dependencies change, similar to how it works 
// in the regular useEffect hook.

// This custom useEffectAfterMount hook can be used in a functional component to 
// control the execution of an effect to only run after the initial render. 
// It allows you to separate the logic between the initial mount and subsequent 
// renders, providing more control and flexibility in managing your 
// component's side effects.