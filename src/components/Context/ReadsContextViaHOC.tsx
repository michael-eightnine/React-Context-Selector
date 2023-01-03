import useRenderCount from "../../hooks/useRenderCount";
import ValueList from "../Layout/ValueList";
import Card from "../Layout/Card";
import { PrimaryContext, PrimaryContextValue } from "../../context/PrimaryContext";
import withContextSlice from "../../hoc/withContextSlice";

const contextProperties = ["storedObject", "countsTotal"] as const;

type PropsFromContext = Pick<
  PrimaryContextValue,
  typeof contextProperties[number]
>;

const ReadsContextViaSlice = ({
  storedObject,
  countsTotal,
}: PropsFromContext) => {
  const renderCount = useRenderCount();

  return (
    <Card title={`Reads Context (via HOC)`} renderCount={renderCount}>
      <ValueList {...{ storedObject, countsTotal }} />
    </Card>
  );
};

export default withContextSlice(
  ReadsContextViaSlice,
  PrimaryContext,
  contextProperties
);
