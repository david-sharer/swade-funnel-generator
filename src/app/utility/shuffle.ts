/** Shuffles the array in place and returns it. */
export function shuffleInPlace<T>(input: T[], rng: seedrandom.prng): T[] {
  // TODO: Turn this into "sample in place", make a "single item" version, and make it faster. Tired.
  // tslint:disable-next-line: prefer-for-of
  for (let j = input.length - 1; j >= 1 ; j--) {
    const next = Math.floor(rng() * (j + 1));
    const t = input[next];
    input[next] = input[j];
    input[j] = t;
  }

  return input;
}
