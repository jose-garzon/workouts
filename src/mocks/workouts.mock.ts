import { Workout } from "../domain/Workouts";

export const workoutList: Workout[] = [
  {
    id: "1",
    name: "Test Pull workout",
    days: ["monday", "thursday"],
  },
  {
    id: "2",
    name: "Test Push workout",
    days: ["tuesday", "friday"],
  },
  {
    id: "3",
    name: "Test Legs workout",
    days: ["wednesday", "saturday"],
  },
];
