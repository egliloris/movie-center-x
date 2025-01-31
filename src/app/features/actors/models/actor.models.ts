export type Gender = 1 | 2;

export type Department = 'Sound' | 'Directing' | 'Acting';

export interface Actor {
  id: number;
  name: string;
  originalName: string;
  mediaType: string;
  adult: boolean;
  popularity: number;
  gender: Gender;
  knownForDepartment: Department;
  profilePath: string;
}
