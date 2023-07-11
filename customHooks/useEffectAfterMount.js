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
