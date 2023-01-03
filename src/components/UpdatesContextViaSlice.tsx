import useRenderCount from "../hooks/useRenderCount";
import Card from "./Card";
import ValueList from "./ValueList";
import { PrimaryContext, PrimaryContextValue } from "../context/PrimaryContext";
import withContextSlice from "../hoc/withContextSlice";

const contextProperties = [
  "updateContextValue",
  "storedList",
  "storedObject",
] as const;

type PropsFromContext = Pick<
  PrimaryContextValue,
  typeof contextProperties[number]
>;

const UpdatesContextViaSlice = ({
  updateContextValue,
  storedList,
  storedObject,
}: PropsFromContext) => {
  const renderCount = useRenderCount();

  const onUpdateList = () => {
    const newList = [...storedList, storedList.length + 1];
    updateContextValue({
      storedList: newList,
    });
  };

  const onUpdateObj = () => {
    const newObj = {
      ...storedObject,
      [Object.keys(storedObject).length + 1]: "0",
    };
    updateContextValue({
      storedObject: newObj,
    });
  };

  const onUpdateCount = () => {
    const newCount = Math.floor(Math.random() * (100 - 1));
    updateContextValue({
      counterOne: newCount,
    });
  };

  return (
    <Card title="Updates Context (via HOC)" renderCount={renderCount}>
      <div>
        <ValueList {...{ storedList, storedObject }} />
        <div className="button-bar">
          <button onClick={onUpdateList}>Add entry to storedList</button>
          <button onClick={onUpdateObj}>Add entry to storedObject</button>
          <button onClick={onUpdateCount}>Randomize Count</button>
        </div>
      </div>
    </Card>
  );
};

export default withContextSlice(
  UpdatesContextViaSlice,
  PrimaryContext,
  contextProperties
);
