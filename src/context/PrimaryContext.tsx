import React, {
  createContext,
  useCallback,
  useMemo,
} from "react";
import { useObjectState } from "../utils/state";

export interface PrimaryContextValue {
  updateContextValue: (_: any) => void;
  countsTotal: number;
  counterOne: number;
  counterTwo: number;
  counterThree: number;
  storedList: number[];
  storedObject: Record<string, string>;
}

const PrimaryContext = createContext<PrimaryContextValue>({
  updateContextValue: (_: any) => {},
  countsTotal: 0,
  counterOne: 0,
  counterTwo: 0,
  counterThree: 0,
  storedList: [],
  storedObject: {}
});

const PrimaryContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [
    {
      counterOne,
      counterTwo,
      counterThree,
      storedList,
      storedObject,
      storedRef,
    },
    setState,
  ] = useObjectState({
    counterOne: 0,
    counterTwo: 0,
    counterThree: 0,
    storedList: [],
    storedObject: {},
    storedRef: {},
  });

  const updateContextValue = useCallback(
    (value: Record<string, any>) => {
      setState({
        type: "merge",
        payload: value,
      });
    },
    [setState]
  );

  const contextValue = useMemo(() => {
    const countsTotal = counterOne + counterTwo + counterThree;

    return {
      updateContextValue,
      countsTotal,
      counterOne,
      counterTwo,
      counterThree,
      storedList,
      storedObject,
      storedRef,
    };
  }, [
    counterOne,
    counterThree,
    counterTwo,
    storedList,
    storedObject,
    storedRef,
    updateContextValue,
  ]);

  return (
    <PrimaryContext.Provider value={contextValue}>
      {children}
    </PrimaryContext.Provider>
  );
};

export { PrimaryContextProvider, PrimaryContext };
