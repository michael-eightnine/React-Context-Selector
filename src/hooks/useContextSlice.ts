import { pick, isEqual } from "lodash";
import { useContext, useRef } from "react";

const useContextSlice = (context: React.Context<any>, properties: string[]) => {
  const contextValue = useContext(context);
  const memoizedDataRef = useRef<any>();
  const sliceData = pick(contextValue, properties);

  if(!isEqual(memoizedDataRef.current, sliceData)) {
    memoizedDataRef.current = sliceData;
    return sliceData
  } else {
    return memoizedDataRef.current;
  }
}

export default useContextSlice;
