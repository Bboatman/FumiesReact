export interface Perfume {
  id: string | undefined;
  name: string;
  house: string | undefined;
  description: string | undefined;
  notes: Note[];
}

export interface Note {
  label: string;
  temp: number;
  gloom: number;
  fancy: number;
  mood: number;
}
