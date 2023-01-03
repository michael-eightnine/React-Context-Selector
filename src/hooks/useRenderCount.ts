import { useRef } from "react";

const useRenderCount = () => {
  const countRef = useRef(0);
  countRef.current++;

  return countRef.current;
};

export default useRenderCount;
