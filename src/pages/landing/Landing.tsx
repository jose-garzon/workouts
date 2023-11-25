import { Button, Link } from "@nextui-org/react";

export const Landing = () => {
  return (
    <div className="h-screen grid grid-rows-[1fr_auto] text-center p-layout">
      <div className="self-center">
        <h1 className="font-bold">Workouts</h1>
        <p className="font-thin mt-2">
          Create your workout routines and track your progress
        </p>
      </div>
      <Button
        size="lg"
        as={Link}
        fullWidth
        variant="shadow"
        radius="full"
        color="primary"
        href="/app"
      >
        Start
      </Button>
    </div>
  );
};
