import Header from "./headerFiles/Header";
import Home from "./ContentFiles/Home";
import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  NavLink,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Switch>
          <Route component={Home} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
