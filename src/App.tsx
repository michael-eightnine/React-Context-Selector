import Section from "./components/Layout/Section";
import Problem from "./components/Examples/Problem";
import ViaHook from "./components/Examples/Hook";
import ViaHOC from "./components/Examples/HOC";
import "./style/app.scss";

const App = () => (
  <>
    <Section
      title="The Problem"
      description="Value access via `useContext` is not memoized or scoped to observe only the accessed values. For contexts with complex values this means unnecessary renders will be triggered, which can potentially introduce unintended side effects or bugs."
    >
      <Problem />
    </Section>
    <Section
      title="Memoizing Via Hook"
      description="Using a custom hook that saves and memoizes the accessed values seems like a good solution, but unfortunately doesn't work. `useContext` always forces a re-render of the implementing component, regardless of abstraction, so this will not prevent unnecessary renders."
    >
      <ViaHook />
    </Section>
    <Section
      title="Memoizing Via HOC"
      description="Using an HOC combined with React's out of box `memo` helper we can get closer to ensuring our component only re-renders when an observed context value changes. The HOC itself will still re-render every time context updates, but by having the HOC pass down the observed context values as props we can memoize them correctly."
    >
      <ViaHOC />
    </Section>
  </>
);

export default App;
