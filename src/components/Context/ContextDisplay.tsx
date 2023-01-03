import { useContext, useState } from "react";
import { PrimaryContext } from "../../context/PrimaryContext";
import ValueList from "../Layout/ValueList";

const ContextDisplay = () => {
  const [open, setOpen] = useState(false);
  const { updateContextValue, ...rest } = useContext(PrimaryContext);

  return (
    <div className="context-display">
      <div className="context-display__trigger" onClick={() => setOpen(!open)}>
        👀
      </div>
      {open && (
        <div className="context-display__overlay">
          <ValueList {...rest} />
        </div>
      )}
    </div>
  );
};

export default ContextDisplay;
