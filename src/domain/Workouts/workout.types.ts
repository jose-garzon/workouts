import { DayOfWeek } from "../Days";

export type Workout = {
  id: string;
  title: string;
  days: DayOfWeek[];
};
