import { Button, Link } from "@nextui-org/react";
import { If } from "../../components/HelperComponents";
import { WorkoutCard } from "../../components/WorkoutCard";
import { workoutList } from "../../mocks/workouts.mock";

export function Home() {
  const emptyList = workoutList.length === 0;
  return (
    <div className="min-h-[100dvh] p-layout">
      <h1 className="mb-10">My Routines</h1>
      <div className="grid gap-4 grid-cols-1 md:grid-flow-col md:auto-cols-fr">
        <If condition={emptyList}>
          <h2 className="mb-5">You haven't created any workout routine yet</h2>
        </If>
        <If condition={!emptyList}>
          {workoutList.map((workout) => (
            <WorkoutCard
              key={workout.id}
              name={workout.name}
              activeDays={workout.days}
            />
          ))}
        </If>
        <Button
          as={Link}
          fullWidth
          radius="full"
          variant="shadow"
          color="primary"
          href="/app/workout/create"
        >
          Create workout routine
        </Button>
      </div>
    </div>
  );
}
