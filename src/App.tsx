import { Route, Router } from "wouter";
import { Landing } from "./pages/landing";
import { Home } from "./pages/home";
import { WorkoutRouter } from "./pages/workout/WorkoutRouter";
import { ExercisesList } from "./pages/excercise";

function App() {
  return (
    <>
      <Route path="/">
        <Landing />
      </Route>
      <Router base="/app">
        <Route path="/">
          <Home />
        </Route>
        <Route path="/excercise">
          <ExercisesList />
        </Route>
        <WorkoutRouter />
      </Router>
    </>
  );
}

export default App;
