import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Actions from "../../Context/Actions";
import ReadsContextViaHook from "../../Context/ReadsContextViaHook";

const codeString = `const useContextSlice = (context: React.Context<any>, properties: string[]) => {
  const contextValue = useContext(context);
  const memoizedDataRef = useRef<any>();
  const sliceData = pick(contextValue, properties);

  if(!isEqual(memoizedDataRef.current, sliceData)) {
    memoizedDataRef.current = sliceData;
    return sliceData
  } else {
    return memoizedDataRef.current;
  }
}

...

const { storedObject, countsTotal } = useContextSlice(PrimaryContext,
  ['storedObject', 'countsTotal']
);
`

const ViaHook = () => (
  <>
    <div className="grid">
      <ReadsContextViaHook />
      <SyntaxHighlighter language="typescript" style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
    <Actions />
  </>
);

export default ViaHook;
