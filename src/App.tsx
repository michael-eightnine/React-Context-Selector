import ReadsContext from "./components/ReadsContext";
import ReadsContextViaSlice from "./components/ReadsContextViaSlice";
import UpdatesContext from "./components/UpdatesContext";
import UpdatesContextViaSlice from "./components/UpdatesContextViaSlice";
import { PrimaryContextProvider } from "./context/PrimaryContext";
import "./style/app.scss";

const App = () => (
  <PrimaryContextProvider>
    <div className="row">
      <ReadsContext />
      <ReadsContextViaSlice />
    </div>
    <div className="row">
      <UpdatesContext />
      <UpdatesContextViaSlice />
    </div>
  </PrimaryContextProvider>
);

export default App;
