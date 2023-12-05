export type Excercise = {
  id: string;
  name: string;
  series: number;
  reps: number;
  weight: number;
};

export type CreateExcercise = Omit<Excercise, "id">;
