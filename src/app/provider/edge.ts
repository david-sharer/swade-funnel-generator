import { Power } from './power';

export class MinimalEdge {
  constructor(
    public name: string,
    public summary: string
  ) { }
}

export class Edge {
  constructor(
    public name: string,
    public usualRequirements: string,
    public summary: string,
    public readonly forbiddenHindrances?: string[]
  ) { }
}

export class ArcaneEdge extends Edge {
  constructor(
    public name: string,
    public usualRequirements: string,
    public summary: string,
    public readonly powers: Power[],
    public readonly shortName: string,
    public readonly trappings: string[],
    public readonly forbiddenHindrances?: string[],
  ) {
    super(name, usualRequirements, summary, forbiddenHindrances);
  }
}
