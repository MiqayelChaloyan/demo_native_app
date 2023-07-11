import {useState, useEffect} from 'react';

const useDelayDebounce = (initialValue, delay) => {
  const [value, setValue] = useState(initialValue);

  let delayDebounceFn = null;

  useEffect(() => {
    return () => {
      if (delayDebounceFn) {
        clearTimeout(delayDebounceFn);
      }
    };
  }, []);

  const handleInputText = inputText => {
    if (delayDebounceFn) {
      clearTimeout(delayDebounceFn);
    }

    delayDebounceFn = setTimeout(() => {
      setValue(inputText);
      delayDebounceFn = null;
    }, delay);
  };

  return [value, handleInputText];
};

export default useDelayDebounce;

// This useDelayDebounce hook is used to delay the execution of a
// function based on the provided delay value.

// The hook is used to delay the execution of handleInputText function
// by 500 milliseconds each time the input value changes.
// The final value is stored in the value state variable and can
// be accessed within the component.
