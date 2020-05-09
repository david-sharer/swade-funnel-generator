import { Hindrance } from './hindrance';
import { Edge } from './edge';
import * as Chance from 'chance';

export class Race {
  constructor(
    public readonly name: string,
    public readonly summary: string,
    public readonly edges: Edge[],
    public readonly hindrances: Hindrance[],
    public readonly afterCreation?: (chance: Chance.Chance, r: Race, edges: Edge[], hindrances: Hindrance[]) => void
  ) { }
}
