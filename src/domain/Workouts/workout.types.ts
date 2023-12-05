import { DayOfWeek } from "../Days";

export type Workout = {
  id: string;
  name: string;
  days: DayOfWeek[];
};

export type CreateWorkout = Omit<Workout, "id">;
