import {useEffect} from 'react';

const useDelayedAction = (callback, delay) => {
  useEffect(() => {
    const timeout = setTimeout(callback, delay);
    return () => clearTimeout(timeout);
  }, [callback, delay]);
};

export default useDelayedAction;
