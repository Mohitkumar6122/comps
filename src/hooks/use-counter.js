import { useState, useEffect } from "react";

function useCounter(intialCount) {
  const [count, setCount] = useState(intialCount);

  useEffect(() => {
    console.log(count);
  }, [count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return [count, handleClick];
}

export default useCounter;
