import { useContext } from "react";
import useRenderCount from "../../hooks/useRenderCount";
import ValueList from "../Layout/ValueList";
import Card from "../Layout/Card";
import { PrimaryContext } from "../../context/PrimaryContext";

const ReadsContext = () => {
  const renderCount = useRenderCount();
  const { storedObject, countsTotal } = useContext(PrimaryContext);

  return (
    <Card title="Reads Context (Via Default Hook)" renderCount={renderCount}>
      <ValueList {...{ storedObject, countsTotal }} />
    </Card>
  );
};

export default ReadsContext;
