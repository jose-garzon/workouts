import { WorkoutCard } from "../../components/WorkoutCard";
import { workoutList } from "../../mocks/workouts.mock";

export const Home = () => {
  return (
    <div className="min-h-[100dvh] p-layout">
      <h1 className="mb-10">My Routines</h1>
      <div className="flex flex-col gap-4">
        {workoutList.map((workout) => (
          <WorkoutCard
            key={workout.id}
            title={workout.title}
            activeDays={workout.days}
          />
        ))}
      </div>
    </div>
  );
};
