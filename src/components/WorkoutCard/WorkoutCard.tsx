import { Card, CardBody, CardHeader, Chip } from "@nextui-org/react";
import { DayOfWeek } from "../../domain/Days";

interface WorkoutCardProps {
  title: string;
  activeDays: DayOfWeek[];
}

export const WorkoutCard = ({ title, activeDays }: WorkoutCardProps) => {
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
    <Card fullWidth isPressable isBlurred>
      <CardHeader>
        <h2>{title}</h2>
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
};
