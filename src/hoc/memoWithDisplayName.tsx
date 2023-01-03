import { ComponentType, memo } from "react"

type GenericComponent = ComponentType<any>;

const getDisplayName = (Component: GenericComponent) => Component.displayName || Component.name || 'Unknown Component'

const memoWithDisplayName = (WrappedComponent: GenericComponent) => {
  const Memoized = memo(WrappedComponent);
  Memoized.displayName = getDisplayName(WrappedComponent);
  return Memoized
}

export default memoWithDisplayName
