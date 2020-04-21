import { Injectable } from '@angular/core';
import { Hindrance } from './hindrance';

// tslint:disable: max-line-length

@Injectable({
  providedIn: 'root'
})
export class HindranceProviderService {

  constructor() { }

  public get hindrances(): Hindrance[] {
    return [
      new Hindrance('All Thumbs (Minor)', '–2 to use mechanical or electrical devices.'),
      new Hindrance('Anemic (Minor)', '–2 Vigor when resisting Fatigue.'),
      new Hindrance('Big Mouth (Minor)', 'Unable to keep secrets and constantly gives away private information.'),
      new Hindrance('Can’t Swim (Minor)', '–2 to swimming (Athletics) rolls; Each inch moved in water costs 3” of Pace.'),
      new Hindrance('Cautious (Minor)', 'The character plans extensively and/or is overly careful.'),
      new Hindrance('Death Wish (Minor)', 'The hero wants to die after or while completing some epic task.'),
      new Hindrance('Doubting Thomas (Minor)', 'The character doesn’t believe in the supernatural, often exposing him to unnecessary risks.'),
      new Hindrance('Hesitant (Minor)', 'Draw two Action Cards and take the lowest (except Jokers, which may be kept).'),
      new Hindrance('Illiterate (Minor)', 'The character cannot read or write.'),
      new Hindrance('Loyal (Minor)', 'The hero is loyal to his friends and allies.'),
      new Hindrance('Mean (Minor)', '–1 to Persuasion rolls.'),
      new Hindrance('Mild Mannered (Minor)', '–2 to Intimidation rolls.'),
      new Hindrance('Obese (Minor)', 'Size +1, Pace –1 and running die of d4. Treat Str as one die type lower for Min Str.'),
      new Hindrance('Bad Eyes (Minor/Major)', '–1 to all Trait rolls dependent on vision, or –2 as a Major Hindrance. Eyewear negates penalty but have a 50% chance of breaking when the hero suffers trauma.'),
      new Hindrance('Delusional (Minor/Major)', 'The individual believes something strange that causes him occasional or frequent trouble.'),
      new Hindrance('Driven (Minor/Major)', 'The hero’s actions are driven by some important goal or belief.'),
      new Hindrance('Enemy (Minor/Major)', 'The character has a recurring nemesis.'),
      new Hindrance('Greedy (Minor/Major)', 'The individual is obsessed with wealth and material possessions.'),
      new Hindrance('Habit (Minor/Major)', 'Addicted to something, suffers Fatigue if deprived.'),
      new Hindrance('Hard of Hearing (Minor/Major)', '–4 to Notice sounds; automatic failure if completely deaf.'),
      new Hindrance('Jealous (Minor/Major)', 'The individual covets what others have.'),
      new Hindrance('Obligation (Minor/Major)', 'The character has a weekly obligation of 20 (Minor) to 40 (Major) hours.'),
      new Hindrance('Outsider (Minor/Major)', 'The character doesn’t fit in to the local environment and subtracts 2 from Persuasion rolls. As a Major Hindrance she has no legal rights or other serious consequences.'),
      new Hindrance('Arrogant (Major)', 'Likes to dominate his opponent, challenge the most powerful foe in combat.'),
      new Hindrance('Bad Luck (Major)', 'The characters starts with one less Benny per session.'),
      new Hindrance('Blind (Major)', '–6 to all tasks that require vision (but choice of a free Edge to offset).'),
      new Hindrance('Bloodthirsty (Major)', 'Never takes prisoners.'),
      new Hindrance('Clueless (Major)', '–1 to Common Knowledge and Notice rolls.'),
      new Hindrance('Clumsy (Major)', '–2 to Athletics and Stealth rolls.'),
      new Hindrance('Code of Honor (Major)', 'The character keeps his word and acts like a gentleman.'),
      new Hindrance('Curious (Major)', 'The character wants to know about everything.'),
      new Hindrance('Elderly (Major)', '–1 to Pace, running, Agility, Strength, and Vigor. Hero gets 5 extra skill points.'),
      new Hindrance('Heroic (Major)', 'The character always helps those in need.'),
      new Hindrance('Impulsive (Major)', 'The hero leaps before he looks.'),
      new Hindrance('Mute (Major)', 'The hero cannot speak.'),
      new Hindrance('One Arm (Major)', '–4 to tasks (such as Athletics) that require two hands.'),
      new Hindrance('One Eye (Major)', '–2 to actions at 5′′ (10 yards) or more distance.'),
      new Hindrance('Overconfident (Major)', 'The hero believes she can do anything.'),
    ];
  }
}
