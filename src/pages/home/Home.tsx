import { WorkoutCard } from "../../components/WorkoutCard";
import { workoutList } from "../../mocks/workouts.mock";
// const workoutList = [];
export function Home() {
  return (
    <div className="min-h-[100dvh] p-layout">
      <h1 className="mb-10">My Routines</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-flow-col md:auto-cols-fr">
        {workoutList.map((workout) => (
          <WorkoutCard
            key={workout.id}
            name={workout.name}
            activeDays={workout.days}
          />
        ))}
      </div>
    </div>
  );
}
