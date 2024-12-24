import {
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom/cjs/react-router-dom";
import Home from "./routes/Home";
import MovieDetail from "./routes/MovieDetail";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/movie/:id">
          <MovieDetail />
        </Route>

        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
