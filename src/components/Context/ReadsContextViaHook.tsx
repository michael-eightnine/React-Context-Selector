import useRenderCount from "../../hooks/useRenderCount";
import ValueList from "../Layout/ValueList";
import Card from "../Layout/Card";
import { PrimaryContext } from "../../context/PrimaryContext";
import useContextSlice from "../../hooks/useContextSlice";

const ReadsContextViaHook = () => {
  const renderCount = useRenderCount();
  const { storedObject, countsTotal } = useContextSlice(PrimaryContext, ['storedObject', 'countsTotal']);

  return (
    <Card title="Reads Context (Via Slice Hook)" renderCount={renderCount}>
      <ValueList {...{ storedObject, countsTotal }} />
    </Card>
  );
};

export default ReadsContextViaHook;
