import React, {
  createContext,
  useCallback,
  useMemo,
} from "react";
import { useObjectState } from "../utils/state";

const noop = () => {};

export interface PrimaryContextValue {
  updateContextValue: (_: any) => void;
  countsTotal: 0;
  firstListItem: null;
  counterOne: 0;
  counterTwo: 0;
  counterThree: 0;
  storedFunction: () => void;
  storedList: [];
  storedObject: {};
}

const PrimaryContext = createContext<PrimaryContextValue>({
  updateContextValue: (_: any) => {},
  countsTotal: 0,
  firstListItem: null,
  counterOne: 0,
  counterTwo: 0,
  counterThree: 0,
  storedFunction: noop,
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
      storedFunction,
      storedList,
      storedObject,
      storedRef,
    },
    setState,
  ] = useObjectState({
    counterOne: 0,
    counterTwo: 0,
    counterThree: 0,
    storedFunction: () => {},
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
    const firstListItem = storedList[0];

    return {
      updateContextValue,
      countsTotal,
      firstListItem,
      counterOne,
      counterTwo,
      counterThree,
      storedFunction,
      storedList,
      storedObject,
      storedRef,
    };
  }, [
    counterOne,
    counterThree,
    counterTwo,
    storedFunction,
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
