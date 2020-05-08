export class Hindrance {
  constructor(
    public readonly name: string,
    public readonly points: number,
    public readonly summary: string,
    public readonly bannedEdges: string[] = [],
  ) { }
}
