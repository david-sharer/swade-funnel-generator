import { Profession } from './profession';

export class ProfessionFull {
  constructor(
    public readonly occupation: string,
    public readonly race: string,
    public readonly weapon: string,
    public readonly goods: string,
    public readonly referenceText: string,
    public readonly referenceUrl: string,
  ) { }
}
