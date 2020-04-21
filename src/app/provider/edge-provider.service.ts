import { Injectable } from '@angular/core';
import { Edge } from './edge';

@Injectable({
  providedIn: 'root'
})
export class EdgeProviderService {
  constructor() { }

  public get edges(): Edge[] {
    return [
      new Edge('Alertness', '+2 to Notice rolls.'),
      new Edge('Ambidextrous', 'Ignore –2 penalty when making Trait rolls with off-hand.'),
      new Edge('Arcane Background', '(psionics) Allows access to the Arcane Backgrounds listed in Chapter Five. (start with 1 power)'),
      new Edge('Arcane Resistance', 'Arcane skills targeting the hero suffer a −2 penalty (even if cast by allies!); magical damage is reduced by 2.'),
      new Edge('Improved Arcane Resistance', 'As Arcane Resistance except penalty is increased to −4 and magical damage is reduced by 4.'),
      new Edge('Aristocrat', '+2 to Common Knowledge and networking with upper class.'),
      new Edge('Attractive', '+1 to Performance and Persuasion rolls.'),
      new Edge('Very Attractive', '+2 to Performance and Persuasion rolls.'),
      new Edge('Berserk', 'After being Shaken or Wounded, melee attacks must be Wild Attacks, +1 die type to Strength, +2 to Toughness, ignore one level of Wound penalties, Critical Failure on Fighting roll hits random target. Take Fatigue after every five consecutive rounds, may choose to end rage with Smarts roll –2.'),
      new Edge('Brave', '+2 to Fear checks and –2 to rolls on the Fear Table.'),
      new Edge('Brawny', 'Size (and therefore Toughness) +1. Treat Strength as one die type higher for Encumbrance and Minimum Strength to use weapons, armor, or equipment.'),
      new Edge('Brute', 'Link Athletics to Strength instead of Agility (including resistance). Short Range of any thrown item increased by +1. Double that for the adjusted Medium Range, and double again for Long Range.'),
      new Edge('Charismatic', 'Free reroll when using Persuasion.'),
      new Edge('Elan', '+2 when spending a Benny to reroll a Trait roll.'),
      new Edge('Fame', '+1 Persuasion rolls when recognized (Common Knowledge), double usual fee for Performance.'),
      new Edge('Fast Healer', '+2 Vigor when rolling for natural healing; check every 3 days.'),
      new Edge('Fleet-Footed', 'Pace +2, increase running die one step.'),
      new Edge('Linguist', 'Character has d6 in languages equal to half her Smarts die.'),
      new Edge('Luck', '+1 Benny at the start of each session.'),
      new Edge('Great Luck', '+2 Bennies at the start of each session.'),
      new Edge('Quick', 'The hero may discard and redraw Action Cards of 5 or lower.'),
      new Edge('Rich', 'Character starts with three times the starting funds and a $150K annual salary.'),
      new Edge('Filthy Rich', 'Five times starting funds and $500K average salary.'),
    ];
  }
}
