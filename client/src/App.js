import Cards from "./components/Cards";
import Update from "./components/Update";
import Create from "./components/Create";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Cards} />

        <Route path="/update" exact component={Update} />
        <Route path="/create" exact component={Create} />
      </Switch>
    </Router>
  );
}

export default App;
