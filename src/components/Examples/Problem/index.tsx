import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import ReadsContext from "../../Context/ReadsContext";
import Actions from "../../Context/Actions";

const codeString = `interface PrimaryContextValue {
  counterOne: number;
  counterTwo: number;
  counterThree: number;
  countsTotal: number; // Derived count
  storedList: number[];
  storedObject: Record<string, string>;
  updateContextValue: (_: any) => void; // setState equivalent
}`;

const Problem = () => (
  <>
    <div className="grid">
      <ReadsContext />
      <SyntaxHighlighter language="typescript" style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
    <Actions />
  </>
);

export default Problem;
