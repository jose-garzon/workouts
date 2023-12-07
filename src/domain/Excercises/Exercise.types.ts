export type Excercise = {
  id: string;
  name: string;
  reps: number;
  weight: number;
};

export type CreateExcercise = Omit<Excercise, "id">;
