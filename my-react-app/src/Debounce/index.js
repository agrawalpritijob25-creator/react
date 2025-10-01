import { useEffect, useState } from "react";
export default function Debounce(value, delay) {
  const [count, setCount] = useState(value);

  useEffect(() => {
    let debounceQuery = setTimeout(() => {
      setCount(value);
    }, delay);
    return () => clearTimeout(debounceQuery);
  }, [delay, value]);
  return count;
}
