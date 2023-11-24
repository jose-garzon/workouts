import { Route, Router, Switch, useRouter } from "wouter";
import { Workout, WorkoutCreate, WorkoutList } from ".";

export const WorkoutRouter = () => {
  const router = useRouter();
  return (
    <Router base="/workout" parent={router}>
      <Switch>
        <Route path="/">
          <WorkoutList />
        </Route>
        <Route path="/create">
          <WorkoutCreate />
        </Route>
        <Route path="/:id*">
          <Workout />
        </Route>
      </Switch>
    </Router>
  );
};
