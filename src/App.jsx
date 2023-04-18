import DropdownPage from "./pages/DropdownPage";
import ButtonPage from "./pages/ButtonPage";
import AccordianPage from "./pages/AccordianPage";

import Route from "./components/Route";
import Nav from "./components/Nav";
import ModalPage from "./pages/ModalPage";
import TablePage from "./pages/TablePage";

function App() {
  return (
    <div className="flex flex-row m-auto my-12 gap-12 w-3/5">
      <Nav />
      <div className="grow relative">
        <Route path="/dropdown" content={<DropdownPage />} />
        <Route path="/button" content={<ButtonPage />} />
        <Route path="/accordian" content={<AccordianPage />} />
        <Route path="/modal" content={<ModalPage />} />
        <Route path="/table" content={<TablePage />} />
      </div>
    </div>
  );
}
export default App;
