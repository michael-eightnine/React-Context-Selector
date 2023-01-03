import { PrimaryContext } from "../context/PrimaryContext";
import useRenderCount from "../hooks/useRenderCount";
import Card from "./Card";
import ValueList from "./ValueList";
import { useContext } from "react";

const UpdatesContext = () => {
  const renderCount = useRenderCount();
  const { updateContextValue, storedList, storedObject } =
    useContext(PrimaryContext);

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

  return (
    <Card title="Updates Context (Default)" renderCount={renderCount}>
      <div>
        <ValueList {...{ storedList, storedObject }} />
        <div className="button-bar">
          <button onClick={onUpdateList}>Add entry to storedList</button>
          <button onClick={onUpdateObj}>Add entry to storedObject</button>
        </div>
      </div>
    </Card>
  );
};

export default UpdatesContext;
