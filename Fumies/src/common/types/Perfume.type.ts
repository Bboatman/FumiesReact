export interface Perfume {
  name: string;
  house: string;
  description: string;
  notes: Note[];
}

export interface Note {
  label: string;
  temp: number;
  gloom: number;
  fancy: number;
  mood: number;
}
