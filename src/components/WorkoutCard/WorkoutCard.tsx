import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { DayOfWeek } from "../../domain/Days";

interface WorkoutCardProps {
  name: string;
  activeDays: DayOfWeek[];
}

export function WorkoutCard({ name, activeDays }: WorkoutCardProps) {
  const daysLabel: { [key in DayOfWeek]: string } = {
    monday: "M",
    tuesday: "T",
    wednesday: "W",
    thursday: "T",
    friday: "F",
    saturday: "S",
    sunday: "S",
  };
  const mappedLabels = Object.keys(daysLabel) as DayOfWeek[];
  const checkDayIsActive = (day: DayOfWeek) => activeDays.includes(day);

  return (
    <Card isPressable isBlurred radius="none" className="px-4">
      <CardHeader>
        <h2>{name}</h2>
      </CardHeader>
      <CardBody>
        <div className="flex gap-1">
          {mappedLabels.map((day) => (
            <Chip
              key={day}
              color="primary"
              variant={checkDayIsActive(day) ? "solid" : "light"}
            >
              {daysLabel[day]}
            </Chip>
          ))}
        </div>
      </CardBody>
    </Card>
  );
}
