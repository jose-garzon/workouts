import { Button, Link } from "@nextui-org/react";
import { If } from "../../components/HelperComponents";
import { WorkoutCard } from "../../components/WorkoutCard";
import { workoutList } from "../../mocks/workouts.mock";
import { Layout } from "../../components/Layout";

export function Home() {
  const emptyList = workoutList.length === 0;
  return (
    <Layout title="My Routines">
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
          size="lg"
          as={Link}
          fullWidth
          radius="none"
          variant="shadow"
          color="primary"
          href="/app/workout/create"
        >
          Create workout routine
        </Button>
      </div>
    </Layout>
  );
}
