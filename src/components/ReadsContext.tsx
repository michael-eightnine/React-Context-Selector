import { useContext } from "react";
import useRenderCount from "../hooks/useRenderCount";
import ValueList from "./ValueList";
import Card from "./Card";
import { PrimaryContext } from "../context/PrimaryContext";

const ReadsContext = () => {
  const renderCount = useRenderCount();
  const { storedObject, countsTotal } = useContext(PrimaryContext);

  return (
    <Card title="Reads Context (Default)" renderCount={renderCount}>
      <ValueList {...{ storedObject, countsTotal }} />
    </Card>
  );
};

export default ReadsContext;
