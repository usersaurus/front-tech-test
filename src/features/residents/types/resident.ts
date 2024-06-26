import { Entity } from '@/types/entity';

type Gender = 'male' | 'female' | 'unknown' | 'n/a';

export type Resident = Entity<{
  name: string;
  gender: Gender;
  birthYear: string;
}>;