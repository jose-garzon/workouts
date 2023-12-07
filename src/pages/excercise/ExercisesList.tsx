import { Button, Input, useDisclosure } from "@nextui-org/react";
import { Layout } from "../../components/Layout";
import { ExerciseCard } from "../../components/ExerciseCard";
import { exercisesList } from "../../mocks/exercises.mock";
import { If } from "../../components/HelperComponents";
import { CreateExcerciseModal } from "./CreateExcerciseModal";

export function ExercisesList() {
  const emptyList = exercisesList.length === 0;
  const { isOpen, onOpen, onOpenChange } = useDisclosure();

  return (
    <Layout title="Exercises">
      <div className="grid gap-4 grid-cols-1 md:grid-flow-col md:auto-cols-fr">
        <search>
          <Input radius="none" label="Excercise name" size="sm" />
        </search>
        <If condition={emptyList}>
          <Button
            size="lg"
            fullWidth
            radius="none"
            variant="shadow"
            color="primary"
            onPress={onOpen}
          >
            Create excercise
          </Button>
        </If>
        {exercisesList.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            name={exercise.name}
            reps={exercise.reps}
            weight={exercise.weight}
          />
        ))}
      </div>
      <CreateExcerciseModal
        isOpen={isOpen}
        onClose={onOpenChange}
        name="Biceps Curl"
      />
    </Layout>
  );
}
