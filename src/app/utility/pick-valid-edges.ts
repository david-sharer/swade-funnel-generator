import { Race } from '@provider/race';
import { Edge } from '@provider/edge';
import { Hindrance } from '@provider/hindrance';
import * as Chance from 'chance';
import * as _ from 'lodash';

export function pickValidEdges(
  chance: Chance.Chance,
  race: Race,
  edges: Edge[],
  hindrances: Hindrance[],
  edgeSource: Edge[],
  howManyEdges: number): Edge[]
{
  const shuffledEdges = chance.shuffle(edgeSource);
  const existingEdgeNames = [...edges, ...race.edges].map(e => e.name);
  const hindranceNames = [...hindrances, ...race.hindrances].map(h => h.name);
  const edgesBannedByHindrances = _(hindrances).map(h => h.bannedEdges).flatten().uniq().value();
  const hasNoConflictWithHindrances =
    (e: Edge) =>
      _.intersection(e.forbiddenHindrances, hindranceNames).length === 0
      && !edgesBannedByHindrances.includes(e.name);

  const hasNoConflictWithEdges =
    (e: Edge) => !existingEdgeNames.includes(e.name);

  const chosenEdges =
    _(shuffledEdges)
    .filter(hasNoConflictWithEdges)
    .filter(hasNoConflictWithHindrances)
    .take(howManyEdges)
    .value();

  return chosenEdges;
}
