import { Button, Input, Link } from "@nextui-org/react";
import { Layout } from "../../../components/Layout";

export function WorkoutCreate() {
  return (
    <Layout title="Create">
      <form action="" className="mb-4">
        <Input radius="none" label="Name" size="lg" />
      </form>
      <Button
        as={Link}
        size="lg"
        fullWidth
        radius="none"
        variant="shadow"
        color="primary"
        href="/app/workout/excercise"
      >
        Add excercise
      </Button>
    </Layout>
  );
}
