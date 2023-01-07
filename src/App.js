import DropdownPage from "./pages/DropdownPage";
import AccordionPage from "./pages/AccordionPage";
import Route from "./components/Route";
import Link from "./components/Link";
function App() {
  return (
    <div>
      <div>
        <Link to="/accordion"> Go to accordion</Link>
        <Link to="/dropdown"> Go to dropdown</Link>
      </div>
      <div>
        <Route path="/accordion">
          <AccordionPage />
        </Route>
        <Route path="/dropdown">
          <DropdownPage />
        </Route>
      </div>
    </div>
  );
}

export default App;
