import { Card } from "@nextui-org/react";

interface ExerciseCardProps {
  name: string;
  reps: number;
  weight: number;
}

export function ExerciseCard({ name, reps, weight }: ExerciseCardProps) {
  return (
    <Card isPressable isBlurred fullWidth radius="none">
      <div className="flex justify-between p-5 w-full">
        <h2>{name}</h2>
        <div className="flex items-baseline gap-2">
          <p className="text-2xl">{reps}</p>X
          <p className="text-2xl">{weight} kg</p>
        </div>
      </div>
    </Card>
  );
}
