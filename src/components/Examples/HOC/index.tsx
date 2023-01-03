import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { materialDark } from "react-syntax-highlighter/dist/esm/styles/prism";
import Actions from "../../Context/Actions";
import ReadsContextViaHOC from "../../Context/ReadsContextViaHOC";

const codeString = `const withContextSlice = (
  WrappedComponent: ComponentType<any>,
  context: React.Context<any>,
  propertyKeys: readonly string[]
) => {
  const MemoizedWrapped = memoWithDisplayName(WrappedComponent);
  const ComponentWithSlice = (props) => {
    const contextValues = useContext(context);
    const sliceData = pick(contextValues, propertyKeys);

    return <MemoizedWrapped {...props} {...sliceData} />;
  };

  return ComponentWithSlice;
};

...

const contextProperties = ['storedObject', 'countsTotal'] as const;
export default withContextSlice(ReadsContextViaSlice, PrimaryContext, contextProperties);
`;

const ViaHOC = () => (
  <>
    <div className="grid">
      <ReadsContextViaHOC />
      <SyntaxHighlighter language="typescript" style={materialDark}>
        {codeString}
      </SyntaxHighlighter>
    </div>
    <Actions />
  </>
);

export default ViaHOC;
