import { pick } from "lodash";
import { ComponentProps, ComponentType, useContext } from "react";
import memoWithDisplayName from "./memoWithDisplayName";

const withContextSlice = (
  WrappedComponent: ComponentType<any>,
  context: React.Context<any>,
  propertyKeys: readonly string[]
) => {
  type SliceProps = Omit<ComponentProps<typeof WrappedComponent>, keyof typeof propertyKeys>;
  const MemoizedWrapped = memoWithDisplayName(WrappedComponent);

  const ComponentWithSlice = (props: SliceProps) => {
    const contextValues = useContext(context);
    const sliceData = pick(contextValues, propertyKeys);

    return <MemoizedWrapped {...props} {...sliceData} />;
  };

  ComponentWithSlice.displayName = `withContextSlice(${MemoizedWrapped.displayName})`;

  return ComponentWithSlice;
};

export default withContextSlice;
