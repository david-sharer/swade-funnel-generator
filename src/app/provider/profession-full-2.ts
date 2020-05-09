import { Race } from './race';

export class ProfessionFull2 {
  constructor(
    public readonly occupation: string,
    public readonly race: Race,
    public readonly items: string[],
    public readonly referenceText: string,
    public readonly referenceUrl: string,
  ) { }
}
