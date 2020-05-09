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
