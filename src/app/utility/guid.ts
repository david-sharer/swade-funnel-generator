import * as seedrandom from 'seedrandom';

// tslint:disable: no-bitwise

// adapted from https://stackoverflow.com/questions/105034/how-to-create-guid-uuid
// uuidv4
export function guid(rng: seedrandom.prng = null) {
  const template = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx';
  if (!rng) { rng = seedrandom(); }
  return template.replace(/[xy]/g, (c) => {
    const r = rng() * 16 | 0;
    const v = c === 'x' ? r : (r & 0x3 | 0x8);
    return v.toString(16);
  });
}
