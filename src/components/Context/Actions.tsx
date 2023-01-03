import { useContext } from "react";
import { PrimaryContext } from "../../context/PrimaryContext";
import Button from "../Layout/Button";

const Actions = () => {
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

  const onUpdateCount = () => {
    const newCount = Math.floor(Math.random() * (100 - 1));
    updateContextValue({
      counterOne: newCount,
    });
  };

  return (
    <div className="actions">
      <Button onClick={onUpdateObj}>Update storedObject</Button>
      <Button onClick={onUpdateCount}>Randomize counterOne</Button>
      <Button kind="warn" onClick={onUpdateList}>Update storedList</Button>
    </div>
  );
};

export default Actions;
