import { Injectable } from '@angular/core';
import { Hindrance } from './hindrance';

// tslint:disable: max-line-length

@Injectable({
  providedIn: 'root'
})
export class HindranceProviderService {

  constructor() { }

  public get fiftyFathomsSwade(): Hindrance[] {
    return [
      ...this.swade,
      new Hindrance("Branded", 2, "Character was caught commiting acts of piracy. Received a brand on face labelling them a pirate. -2 to Persuasion among non-pirates. Any vessel they're on that is boarded by privateers is thoroughly searched. If they're caught committing more acts of piracy, they are summarily executed. (M)"),
      new Hindrance("Jingoistic", 2, "Character believes their culture to be superior to all others. -4 to Persuasion among other cultures. (M)"),
      new Hindrance("Jingoistic", 1, "Character believes their culture to be superior to all others. -2 to Persuasion among other cultures. (m)"),
      new Hindrance("Landlubber", 1, "d4-2 boating at start. -2 to Boating (m)"),
      new Hindrance("Seasick", 2, "Roll Vigor for seasickness when boarding a ship. Failure = -2 to all Trait rolls until they spend an hour on dry land. Storm = Vigor Roll per round. Failure = -4 penalty."),
      new Hindrance("Squanderous", 1, "Carousing cost doubled."),
    ];
  }

  public get swade(): Hindrance[] {
    return [
      new Hindrance('All Thumbs', 1, '–2 to use mechanical or electrical devices. (m)'),
      new Hindrance('Anemic', 1, '–2 Vigor when resisting Fatigue. (m)'),
      new Hindrance('Arrogant', 2, 'Likes to dominate his opponent, challenge the most powerful foe in combat. (M)'),
      new Hindrance('Bad Luck', 2, 'The characters starts with one less Benny per session. (M)'),
      new Hindrance('Big Mouth', 1, 'Unable to keep secrets and constantly gives away private information. (m)'),
      new Hindrance('Blind', 2, '–6 to all tasks that require vision (but choice of a free Edge to offset). (M)'),
      new Hindrance('Bloodthirsty', 2, 'Never takes prisoners. (M)'),
      new Hindrance('Can’t Swim', 1, '–2 to swimming (Athletics) rolls; Each inch moved in water costs 3” of Pace. (m)'),
      new Hindrance('Cautious', 1, 'The character plans extensively and/or is overly careful. (m)'),
      new Hindrance('Clueless', 2, '–1 to Common Knowledge and Notice rolls. (M)'),
      new Hindrance('Clumsy', 2, '–2 to Athletics and Stealth rolls. (M)'),
      new Hindrance('Code of Honor', 2, 'The character keeps his word and acts like a gentleman. (M)'),
      new Hindrance('Curious', 2, 'The character wants to know about everything. (M)'),
      new Hindrance('Death Wish', 1, 'The hero wants to die after or while completing some epic task. (m)'),
      new Hindrance('Doubting Thomas', 1, 'The character doesn’t believe in the supernatural, often exposing him to unnecessary risks. (m)'),
      new Hindrance('Elderly', 2, '–1 to Pace, running, Agility, Strength, and Vigor. Hero gets 5 extra skill points. (M)'),
      new Hindrance('Heroic', 2, 'The character always helps those in need. (M)'),
      new Hindrance('Hesitant', 1, 'Draw two Action Cards and take the lowest (except Jokers, which may be kept). (m)'),
      new Hindrance('Illiterate', 1, 'The character cannot read or write. (m)'),
      new Hindrance('Impulsive', 2, 'The hero leaps before he looks. (M)'),
      new Hindrance('Loyal', 1, 'The hero is loyal to his friends and allies. (m)'),
      new Hindrance('Mean', 1, '–1 to Persuasion rolls. (m)'),
      new Hindrance('Mild Mannered', 1, '–2 to Intimidation rolls. (m)'),
      new Hindrance('Mute', 2, 'The hero cannot speak. (M)'),
      new Hindrance('Obese', 1, 'Size +1, Pace –1 and running die of d4. Treat Str as one die type lower for Min Str. (m)'),
      new Hindrance('One Arm', 2, '–4 to tasks (such as Athletics) that require two hands. (M)'),
      new Hindrance('One Eye', 2, '–2 to actions at 5′′ (10 yards) or more distance. (M)'),
      new Hindrance('Overconfident', 2, 'The hero believes she can do anything. (M)'),
      new Hindrance('Poverty', 1, 'Half starting funds and the character is always broke. (m)'),
      new Hindrance('Quirk', 1, 'The individual has some minor but persistent foible that often annoys others. (m)'),
      new Hindrance('Small', 1, 'Size and Toughness are reduced by 1. Size cannot be reduced below –1. (m)'),
      new Hindrance('Stubborn', 1, 'The character wants his way and rarely admits his mistakes. (m)'),
      new Hindrance('Tongue-Tied', 2, 'The character often misspeaks or can’t get her words out. –1 to Intimidation, Persuasion, and Taunt rolls. (M)'),
      new Hindrance('Yellow', 2, '–2 to Fear checks and resisting Intimidation. (M)'),
      new Hindrance('Bad Eyes', 2, '–2 (major) to all Trait rolls dependent on vision. Eyewear negates penalty but have a 50% chance of breaking when the hero suffers trauma. (M)'),
      new Hindrance('Bad Eyes', 1, '–1 (minor) to all Trait rolls dependent on vision. Eyewear negates penalty but have a 50% chance of breaking when the hero suffers trauma. (m)'),
      new Hindrance('Delusional', 2, 'The individual believes something strange that causes him occasional or frequent trouble. (M)'),
      new Hindrance('Delusional', 1, 'The individual believes something strange that causes him occasional or frequent trouble. (m)'),
      new Hindrance('Driven', 2, 'The hero’s actions are driven by some important goal or belief. (M)'),
      new Hindrance('Driven', 1, 'The hero’s actions are driven by some important goal or belief. (m)'),
      new Hindrance('Enemy', 2, 'The character has a recurring nemesis. (M)'),
      new Hindrance('Enemy', 1, 'The character has a recurring nemesis. (m)'),
      new Hindrance('Greedy', 2, 'The individual is obsessed with wealth and material possessions. (M)'),
      new Hindrance('Greedy', 1, 'The individual is obsessed with wealth and material possessions. (m)'),
      new Hindrance('Habit', 2, 'Addicted to something, suffers Fatigue if deprived. Drugs. Potentially lethal. (M)'),
      new Hindrance('Habit', 1, 'Addicted to something, suffers Fatigue if deprived. Personal habit. Treat as Quirk (m)'),
      new Hindrance('Hard of Hearing', 2, 'Completely deaf. Automatic failure to Notice sounds. (major) (M)'),
      new Hindrance('Hard of Hearing', 1, '–4 to Notice sounds (minor) (m)'),
      new Hindrance('Jealous', 2, 'The individual covets what others have. (M)'),
      new Hindrance('Jealous', 1, 'The individual covets what others have. (m)'),
      new Hindrance('Obligation', 2, 'The character has a weekly obligation of 40 (major) hours. (M)'),
      new Hindrance('Obligation', 1, 'The character has a weekly obligation of 20 (minor) hours. (m)'),
      new Hindrance('Outsider', 2, 'The character doesn’t fit in to the local environment and subtracts 2 from Persuasion rolls. As a Major Hindrance she has no legal rights or other serious consequences. (M)'),
      new Hindrance('Outsider', 1, 'The character doesn’t fit in to the local environment and subtracts 2 from Persuasion rolls. (m)'),
      new Hindrance('Pacifist', 2, 'Won’t fight at all. (major) (M)'),
      new Hindrance('Pacifist', 1, 'Fights only in self-defense. (minor) (m)'),
      new Hindrance('Phobia', 2, 'The character is afraid of something, and subtracts –2 (major) from all Trait rolls in its presence. (M)'),
      new Hindrance('Phobia', 1, 'The character is afraid of something, and subtracts –1 (minor) from all Trait rolls in its presence. (m)'),
      new Hindrance('Ruthless', 2, 'The character does what it takes to get her way. (M)'),
      new Hindrance('Ruthless', 1, 'The character does what it takes to get her way. (m)'),
      new Hindrance('Secret', 2, 'The hero has a dark secret of some kind. (M)'),
      new Hindrance('Secret', 1, 'The hero has a dark secret of some kind. (m)'),
      new Hindrance('Shamed', 2, 'The individual is haunted by some tragic event from her past. (M)'),
      new Hindrance('Shamed', 1, 'The individual is haunted by some tragic event from her past. (m)'),
      new Hindrance('Slow', 2, '(major) Pace –2, –2 to Athletics and rolls to resist Athletics. May not take the Fleet-Footed Edge. (M)', ['Fleet-Footed']),
      new Hindrance('Slow', 1, '(minor) Pace –1, reduce running die one step. May not take the Fleet-Footed Edge. (m)', ['Fleet-Footed']),
      new Hindrance('Suspicious', 2, 'The individual is paranoid. (major) allies subtract 2 when rolling to Support him. (M)'),
      new Hindrance('Suspicious', 1, 'The individual is paranoid. (minor) It is a quirk. (m)'),
      new Hindrance('Thin Skinned', 2, 'The character is particularly susceptible to personal attacks. (major) He subtracts 4 when resisting Taunt attacks. (M)'),
      new Hindrance('Thin Skinned', 1, 'The character is particularly susceptible to personal attacks. (minor) He subtracts 2 when resisting Taunt attacks. (m)'),
      new Hindrance('Ugly', 2, 'The character is physically unattractive and subtracts 2 (major) from Persuasion rolls. (M)'),
      new Hindrance('Ugly', 1, 'The character is physically unattractive and subtracts 1 (minor) from Persuasion rolls. (m)'),
      new Hindrance('Vengeful', 2, 'The adventurer seeks payback for slights against her. As a Major Hindrance, she’ll cause physical harm to get it. (M)'),
      new Hindrance('Vengeful', 1, 'The adventurer seeks payback for slights against her. As a Major Hindrance, she’ll cause physical harm to get it. (m)'),
      new Hindrance('Vow', 2, 'The individual has pledged himself to some cause. (M)'),
      new Hindrance('Vow', 1, 'The individual has pledged himself to some cause. (m)'),
      new Hindrance('Wanted', 2, 'The character is wanted by the authorities. (M)'),
      new Hindrance('Wanted', 1, 'The character is wanted by the authorities. (m)'),
      new Hindrance('Young', 2, '(major) 3 attribute points, 10 skill points, and two extra Bennies per session. (M)'),
      new Hindrance('Young', 1, '(minor) 4 attribute points and 10 skill points, extra Benny per session. (m)'),
    ];
  }
}
