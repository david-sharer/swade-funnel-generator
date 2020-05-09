import { Injectable } from '@angular/core';
import { MinimalEdge, Edge } from './edge';

// tslint:disable: max-line-length

@Injectable({
  providedIn: 'root'
})
export class EdgeProviderService {
  constructor() { }

  public get swadeCore(): Edge[] {
    return [
      new Edge('Alertness', 'N', '+2 to Notice rolls.'),
      new Edge('Ambidextrous', 'N, A d8', 'Ignore –2 penalty when making Trait rolls with off-hand.'),
      new Edge('Aristocrat', 'N', '+2 to Common Knowledge and networking with upper class.'),
      new Edge('Attractive', 'N, V d6', '+1 to Performance and Persuasion rolls.'),
      new Edge('Very Attractive', 'N, Attractive', '+2 to Performance and Persuasion rolls.'),
      new Edge('Berserk', 'N', 'After being Shaken or Wounded, melee attacks must be Wild Attacks, +1 die type to Strength, +2 to Toughness, ignore one level of Wound penalties, Critical Failure on Fighting roll hits random target. Take Fatigue after every five consecutive rounds, may choose to end rage with Smarts roll –2.'),
      new Edge('Brave', 'N, Sp d6', '+2 to Fear checks and –2 to rolls on the Fear Table.'),
      new Edge('Brawny', 'N, St d6, V d6', 'Size (and therefore Toughness) +1. Treat Strength as one die type higher for Encumbrance and Minimum Strength to use weapons, armor, or equipment.'),
      new Edge('Brute', 'N, St d6, V d6', 'Link Athletics to Strength instead of Agility (including resistance). Short Range of any thrown item increased by +1. Double that for the adjusted Medium Range, and double again for Long Range.'),
      new Edge('Charismatic', 'N, Sp d8', 'Free reroll when using Persuasion.'),
      new Edge('Elan', 'N, Sp d8', '+2 when spending a Benny to reroll a Trait roll.'),
      new Edge('Fame', 'N', '+1 Persuasion rolls when recognized (Common Knowledge), double usual fee for Performance. Famous S, Fame +2 Persuasion when recognized, 5× or more usual fee for Performance.'),
      new Edge('Fast Healer', 'N, V d8', '+2 Vigor when rolling for natural healing; check every 3 days.'),
      new Edge('Fleet-Footed', 'N, A d6', 'Pace +2, increase running die one step.'),
      new Edge('Linguist', 'N, Sm d6', 'Character has d6 in languages equal to half her Smarts die.'),
      new Edge('Luck', 'N', '+1 Benny at the start of each session.'),
      new Edge('Great Luck', 'N, Luck', '+2 Bennies at the start of each session.'),
      new Edge('Quick', 'N, A d8', 'The hero may discard and redraw Action Cards of 5 or lower.'),
      new Edge('Rich', 'N', 'Character starts with three times the starting funds and a $150K annual salary.'),
      new Edge('Filthy Rich', 'N, Rich', 'Five times starting funds and $500K average salary.'),
      new Edge('Brawler', 'N, St d8, V d8', 'Toughness +1, add d4 to damage from fists; or increase it a die type if combined with Martial Artist, Claws, or similar abilities.'),
      new Edge('Calculating', 'N, Sm d8', 'Ignore up to 2 points of penalties on one action with an Action Card of Five or less.'),
      new Edge('Dead Shot', 'WC, N, Athletics or Shooting d8', 'First successful Athletics (throwing) or Shooting roll, double damage from when dealt a Joker.'),
      new Edge('Extraction', 'N, A d8', 'One adjacent foe doesn’t get a free attack when you withdraw from close combat.'),
      new Edge('Feint', 'N, Fighting d8', 'You may choose to make foe resist with Smarts instead of Agility during a Fighting Test.'),
      new Edge('First Strike', 'N, A d8', 'Free Fighting attack once per round when foe moves within Reach.'),
      new Edge('Improved First Strike', 'H, First Strike', 'Free Fighting attack against up to three foes when they move within Reach.'),
      new Edge('Free Runner', 'N, A d8', 'Ignore Difficult Ground and add +2 to Athletics in foot chases and Athletics (climbing).'),
      new Edge('Hard to Kill', 'N, Sp d8', 'Ignore Wound penalties when making Vigor rolls to avoid Bleeding Out.'),
      new Edge('Iron Jaw', 'N, V d8', '+2 to Soak and Vigor rolls to avoid Knockout Blows.'),
      new Edge('Martial Artist', 'N, Fighting d6', 'Unarmed Fighting +1, fists and feet count as Natural Weapons, add d4 damage die to unarmed Fighting attacks (or increase die a step if you already have it).'),
      new Edge('Mighty Blow', 'WC, N, Fighting d8', 'On first successful Fighting roll, double damage when dealt a Joker.'),
      new Edge('Nerves of Steel', 'N, V d8', 'Ignore one level of Wound penalties.'),
      new Edge('Improved Nerves of Steel', 'N, Nerves of Steel', 'Ignore up to two levels of Wound penalties.'),
      new Edge('Steady Hands', 'N, A d8', 'Ignore Unstable Platform penalty; reduce running penalty to –1.'),
      new Edge('Sweep', 'N, St d8, Fighting d8', 'Fighting roll at –2 to hit all targets in weapon’s Reach, no more than once per turn.'),
      new Edge('Trademark Weapon', 'N, d8 in related skill', '+1 to Athletics (throwing), Fighting, or Shooting total with a specific weapon; +1 Parry while weapon is readied.'),
      new Edge('Two-Fisted', 'N, A d8', 'Make one extra Fighting roll with a second melee weapon in the off-hand at no Multi-Action penalty.'),
      new Edge('Two-Gun Kid', 'N, A d8', 'Make one extra Shooting (or Athletics (throwing) roll with a second ranged weapon in the off-hand at no Multi-Action penalty.'),
      new Edge('Command', 'N, Sm d6', '+1 to Extras’ Shaken recovery rolls in Command Range.'),

      new Edge("Ace", "N, A d8", "Character may spend Bennies to Soak damage for his vehicle and ignores up to 2 points of penalties."),
      new Edge("Acrobat", "N, A d8, Athletics d8", "Free reroll on acrobatic Athletics attempts."),
      new Edge("Assassin", "N, A d8, Fighting d6, Stealth d8", "+2 to damage foes when Vulnerable or assassin has The Drop."),
      new Edge("Investigator", "N, Sm d8, Research d8", "+2 to Research and certain types of Notice rolls."),
      new Edge("Jack-of-all-Trades", "N, Sm d10", "Gain d4 in a skill (or d6 with a raise) until replaced."),
      new Edge("McGyver", "N, Sm d6, Repair d6, Notice d8", "Quickly create improvised devices from scraps."),
      new Edge("Mr. Fix It", "N, Repair d8", "+2 to Repair rolls, half the time required with a raise."),
      new Edge("Scholar", "N, Research d8", "+2 to any one “knowledge” skill."),
      new Edge("Soldier", "N, S d6, V d6", "Strength is one die type higher for Encumbrance and Min Str. Reroll Vigor rolls when resisting environmental Hazards."),
      new Edge("Thief", "N, A d8, Stealth d6, Thievery d6", "+1 Thievery, Athletics rolls made to climb, Stealth in urban environments."),
      new Edge("Woodsman", "N, Sp d6, Survival d8", "+2 to Survival and Stealth in the wilds."),
      new Edge("Bolster", "N, Sp d8", "May remove Distracted or Vulnerable state after a Test."),
      new Edge("Common Bond", "WC, N, Sp d8", "The hero may freely give her Bennies to others."),
      new Edge("Connections", "N", "Contacts provide aid or other favors once per session."),
      new Edge("Humiliate", "N, Taunt d8", "Free reroll when making Taunt rolls."),
      new Edge("Menacing", "N, See Text", "+2 to Intimidation."),
      new Edge("Provoke", "N, Taunt d6", "May “provoke” foes with a raise on a Taunt roll. See text."),
      new Edge("Reliable", "N, Sp d8", "Free reroll when making Support rolls."),
      new Edge("Retort", "N, Taunt d6", "A raise when resisting a Taunt or Intimidation attack makes the foe Distracted."),
      new Edge("Streetwise", "N, Sm d6", "+2 to Common Knowledge and criminal networking."),
      new Edge("Strong Willed", "N, Sp d8", "+2 to resist Smarts or Spirit-based Tests."),
      new Edge("Work the Room", "N, Sp d8", "Once per turn, roll a second die when Supporting via Performance or Persuasion and apply result to additional ally."),
      new Edge("Beast Bond", "N", "The hero may spend Bennies for animals under her control."),
      new Edge("Beast Master", "N, Sp d8", "Animals like your hero and he has a pet of some sort. See text."),
      new Edge("Champion", "N, Sp d8, Fighting d6", "+2 damage vs. supernaturally evil creatures."),
      new Edge("Danger Sense", "N", "Notice roll at +2 to sense ambushes or similar events."),
      new Edge("Healer", "N, Sp d8", "+2 to Healing rolls, magical or otherwise."),
      new Edge("Liquid Courage", "N, V", "d8 Alcohol increases Vigor a die type and ignores one level of Wound penalty; –1 to Agility, Smarts, and related skills."),
      new Edge("Scavenger", "N, Luck", "May find a needed item once per encounter."),
    ];
  }

  public get swadeSeasoned(): Edge[] {
    return [
      new Edge('Block', 'S, Fighting d8', '+1 Parry, ignore 1 point of Gang Up bonus.'),
      new Edge('Bruiser', 'S, Brawler', 'Increase unarmed Strength damage a die type and Toughness another +1.'),
      new Edge('Combat Reflexes', 'S', '+2 Spirit to recover from being Shaken or Stunned.'),
      new Edge('Counterattack', 'S, Fighting d8', 'Free attack against one foe per turn who failed a Fighting roll.'),
      new Edge('Dodge', 'S, A d8', '−2 to be hit by ranged attacks.'),
      new Edge('Improved Dodge', 'S, Dodge', '+2 to Evasion totals.'),
      new Edge('Double Tap', 'S, Shooting d6', '+1 to hit and damage when firing no more than RoF 1 per action.'),
      new Edge('Improved Extraction', 'S, Extraction', 'Three adjacent foes don’t get free attacks when you withdraw from combat.'),
      new Edge('Frenzy', 'S, Fighting d8', 'Roll a second Fighting die with one melee attack per turn.'),
      new Edge('Improvisational Fighter', 'S, Sm d6', 'Ignore –2 penalty when attacking with improvised weapons.'),
      new Edge('Killer Instinct', 'S', 'The hero gets a free reroll in any opposed Test he initiates.'),
      new Edge('Level Headed', 'S, Sm d8', 'Draw an additional Action Card each round in combat and choose which one to use.'),
      new Edge('Improved Level Headed', 'S, Level Headed', 'Draw two additional Action Cards each round in combat and choose which one to use.'),
      new Edge('Marksman', 'S, Athletics or Shooting d8', 'Ignore up to 2 points of penalties from Range, Cover, Called Shot, Scale, or Speed; or add +1 to first Athletics (throwing) or Shooting roll. Character may not move or fire greater than RoF 1.'),
      new Edge('Martial Warrior', 'S, Martial Artist', 'Unarmed Fighting +2, increase damage die type a step.'),
      new Edge('No Mercy', 'S', '+2 damage when spending a Benny to reroll damage.'),
      new Edge('Rapid Fire', 'S, Shooting d6', 'Increase RoF by 1 for one Shooting attack per turn.'),
      new Edge('Rock and Roll!', 'S, Shooting d8', 'Ignore the Recoil penalty when firing weapons with a RoF of 2 or more. Character may not move.'),
      new Edge('Imp. Trademark Weapon', 'S, Trademark', 'Weapon The attack and Parry bonus increases to +2.'),
      new Edge('Command Presence', 'S, Command', 'Increase Command Range to 10″ (20 yards) Fervor V, Sp d8, Command Extras in range add +1 to their Fighting damage rolls.'),
      new Edge('Hold the Line', 'S, Sm d8, Command', '+1 to Extras’ Toughness in Command Range.'),
      new Edge('Inspire', 'S, Command', 'Once per turn, the hero may roll his Battle skill to Support one type of Trait roll, and apply it to everyone in Command Range Natural Leader S, Sp d8, Command Leadership Edges now apply to Wild Cards.'),
      new Edge('Tactician', 'S, Sm d8, Command, Battle d6', 'Draw an extra Action Card each turn that may be assigned to any allied Extra in Command Range.'),
      new Edge("Combat Acrobat", "S, Acrobat", "−1 to hit with ranged and melee attacks."),
      new Edge("Rabble-Rouser", "S, Spirit d8", "Once per turn, affect all foes in a Medium Blast Template with an Intimidation or Taunt Test."),
      new Edge("Iron Will", "S, Brave, Strong Willed", "The bonus now applies to resisting and recovery from powers."),
      new Edge("Work the Crowd", "S, Work the Room", "Twice per turn, roll a second die when Supporting via Performance or Persuasion and apply result to additional ally."),
    ];
  }

  public get swadeVeteran(): Edge[] {
    return [
      new Edge('Improved Block', 'V, Block', '+2 Parry, ignore 2 points of Gang Up bonus.'),
      new Edge('Improved Counterattack', 'V, Counterattack', 'As Counterattack, but against three failed attacks per turn.'),
      new Edge('Improved Frenzy', 'V, Frenzy', 'Roll a second Fighting die with up to two melee attacks per turn.'),
      new Edge('Giant Killer', 'V', '+1d6 damage vs. creatures three Sizes larger or more.'),
      new Edge('Harder to Kill', 'V, Hard to Kill', 'Roll a die if the character perishes. Even if he’s Incapacitated, he survives somehow.'),
      new Edge('Improved Rapid Fire', 'V, Rapid Fire', 'Increase RoF by 1 for up to two Shooting attacks per turn.'),
      new Edge('Improved Sweep', 'V, Sweep', 'As Sweep, but ignore the –2 penalty.'),
      new Edge('Master Tactician', 'V, Tactician', 'Draw and distribute two extra Action Cards instead of one.'),
      new Edge("Chi", "V, Martial Warrior", "Once per combat, reroll failed attack, make enemy reroll successful attack, or add +d6 to unarmed Fighting attack."),
    ];
  }

  public get swadeLegendary(): Edge[] {
    return [
      new Edge("Followers", "WC, L", "The hero has five followers."),
      new Edge("Professional", "L, Max Trait", "The character’s Trait and its limit increases one step."),
      new Edge("Expert", "L, Professional in Trait", "The character’s Trait and its limit increases one step."),
      new Edge("Master", "WC, L, Expert in Trait", "The character’s Wild Die is a d10 with a chosen Trait."),
      new Edge("Sidekick", "WC, L", "The character gains a Wild Card sidekick."),
      new Edge("Tough as Nails", "L, V d8", "The hero can take four Wounds before being Incapacitated."),
      new Edge("Tougher than Nails", "L, Tough as Nails, V d12", "The hero can take five Wounds before being Incapacitated."),
      new Edge("Weapon Master", "L, Fighting d12", "Parry increases by +1 and Fighting bonus damage die is d8."),
      new Edge("Master of Arms", "L, Weapon Master", "Parry increases another +1 and Fighting bonus damage die is d10."),
    ];
  }

  public get swadeCoreMagicUpgrades(): Edge[] {
    return [
      new Edge("Artificer", "S, AB", "Allows user to create Arcane Devices. If you do not already have magic, *also* gain an arcane background."),
      new Edge("Channeling", "S, AB", "Reduce Power Point cost by 1 with a raise on the activation roll. If you do not already have magic, gain an arcane background instead."),
      new Edge("Concentration", "S, AB", "Double Duration of non-Instant powers. If you do not already have magic, gain an arcane background instead."),

      new Edge("New Powers", "N, AB", "Your character knows two new powers. If you do not already have magic, gain an arcane background instead."),
      new Edge("Power Points", "N, AB", "Gain 5 additional Power Points, no more than once per Rank. If you do not already have magic, gain an arcane background instead."),
      new Edge("Power", "Surge WC, N, AB, arcane skill d8", "Recover 10 Power Points when dealt a Joker in combat. If you do not already have magic, gain an arcane background instead."),
      new Edge("Rapid Recharge", "S, Sp d6, AB", "Recover 10 Power Points per hour. If you do not already have magic, gain an arcane background instead."),
      new Edge("Improved Rapid Recharge", "V, Rapid Recharge", "Recover 20 Power Points per hour. If you do not already have magic, gain an arcane background instead."),
      new Edge("Soul Drain", "S, AB, arcane skill d10", "Recover 5 Power Points for a level of Fatigue. If you do not already have magic, gain an arcane background instead."),
    ];
  }

  public get swadeCoreMagicSettingSpecific(): Edge[] {
    return [
      new Edge('Arcane Background', 'N', 'Allows access to the Arcane Backgrounds listed in Chapter Five.'),
      new Edge('Arcane Resistance', 'N, Sp d8', 'Arcane skills targeting the hero suffer a −2 penalty (even if cast by allies!); magical damage is reduced by 2.'),
      new Edge('Improved Arcane Resistance', 'N, Arcane Resistance', 'As Arcane Resistance except penalty is increased to −4 and magical damage is reduced by 4.'),

      new Edge("Wizard", "S, AB (Magic), Spellcasting d6", "Spend 1 extra Power Point to change a spell’s Trapping."),
      new Edge("Extra Effort", "S, AB (Gifted), Focus", "d6 Increase Focus by +1 for 1 Power Point or +2 for 3 Power Points."),
      new Edge("Gadgeteer", "S, AB (Weird Science), Weird Science d6", "Spend 3 Power Points to create a device that replicates another power."),
      new Edge("Holy/Unholy Warrior", "S, AB (Miracles), Faith d6", "Add +1 to +4 to Soak rolls for each Power Point spent."),
      new Edge("Mentalist", "S, AB (Psionics), Psionics d6", "+2 to opposed Psionics rolls."),
    ];
  }

  public get swadeMagic(): Edge[] {
    return [
      ...this.swadeCore,
      ...this.swadeCoreMagicUpgrades
    ];
  }

  public get fiftyFathomsSwade(): Edge[] {
    return [
      ...this.swadeCore,
      new Edge("Artificer", "S, AB", "Allows user to create Arcane Devices. If you don't already have magic, gain magic. <genmagic>"),
      new Edge("Channeling", "S, AB", "Reduce Power Point cost by 1 with a raise on the activation roll. If you don't already have magic, gain magic. <genmagic>"),
      new Edge("Concentration", "S, AB", "Double Duration of non-Instant powers. If you don't already have magic, gain magic. <genmagic>"),

      new Edge("New Powers", "N, AB", "Your character knows two new powers, your choice. If you don't already have magic, gain magic. <genmagic>"),
      new Edge("Power Points", "N, AB", "Gain 5 additional Power Points, no more than once per Rank. If you don't already have magic, gain magic. <genmagic>"),
      new Edge("Power", "Surge WC, N, AB, arcane skill d8", "Recover 10 Power Points when dealt a Joker in combat. If you don't already have magic, gain magic. <genmagic>"),
      new Edge("Rapid Recharge", "S, Sp d6, AB", "Recover 10 Power Points per hour. If you don't already have magic, gain magic. <genmagic>"),
      new Edge("Improved Rapid Recharge", "V, Rapid Recharge", "Recover 20 Power Points per hour. If you don't already have magic, gain magic. <genmagic>"),
      new Edge("Soul Drain", "S, AB, arcane skill d10", "Recover 5 Power Points for a level of Fatigue. If you don't already have magic, gain magic. <genmagic>"),

      new Edge('Arcane Background (Magic)', 'N, Sm d6, Human, Kraken, Masaquani, Scurilian', "Mages' power comes from the bound spirits of the raw elements. RNG element, then spells. 10pp, 3 powers. <genmagic>"),
      new Edge("Elemental Mastery", "S, AB", "Gain a second element (optional). If you don't already have Magic, this gives you magic. This gives -1 to all spell rolls. Become an archmage to remove it.  <genmagic>"),

      new Edge('Booty!', 'N, Boating d6, Fighting d6, Shootingd6', 'Begin play with a roll on the King\'s Random table. Why do you have this?'),
      new Edge("Kraken Bone Sword & Armor", "N, Kraken", "Begin play with an enchanted bone sword from the Kraken Navy. Why do you have this?"),
      new Edge('Natural Swimmer', 'N, Non-Aquatic', 'Add +2 to Swimming, +1 to Swimming Pace, Hold Breath 50% longer than others.'),
      new Edge('Bilge Rat', 'N, A d8, Fighting d8', 'No -2 penalty while fighting below decks, unless the weapon has reach.'),
      new Edge('Improved Bilge Rat', 'S, Bilge Rat', 'No -2 penalty while fighting below decks, even if the weapon has reach.'),
      new Edge('Close Fighting', 'N, A d8, Fighting d8', 'Parry with Knife (Add Reach+1 to parry when being attacked by a sword or larger)'),
      new Edge('Improved Close Fighting', 'N, Close Fighting', 'Add Enemy\'s Reach +1 to Fighting rolls.'),
      new Edge('Dirty Fighter', 'S', '+2 to Tricks'),
      new Edge('Really Dirty Fighter', 'S, Dirty Fighter', 'Spend Benny and describe the trick to have The Drop (+4)'),
      new Edge('Oversized Weapon Master', 'S, Fighting d8', 'Use two-handed weapons with one hand'),
      new Edge('Ramming Speed', 'S, Boating d8', '+2 to perform a Ram maneuver, take half damage'),
      new Edge("Board 'em", "N, Command, Throwing d8", "When leading, +4 to group Throwing rolls to grapple an enemy ship"),
      new Edge("Master & Commander", "S, Sm d8, Boating d10, Intimidation d8, Command, sole captain", "When sole captain, crew get +2 to boating rolls"),
      new Edge("Boarder", "N, Boating d6, Climbing d8, Throwing d8", "You've survived a lot of boardings. Climbing/Throwing rolls made at +2; Gain a benny when you're the first to board"),
      new Edge("Gunsmith", "N, Sm d8, Science d8, Repair d8", "Repair guns. Four hours per device. Can make shots. see page 26"),
      new Edge("Mark of Torquemada", "N", "The dread inquisitor Tomas de Torquemada controls a legion of underlings to help him in his nefarious quest - the complete extermination of all Caribsus' mages. Those who pledge themselves to his cause, honestly and truly, are made inquisitors and painfully branded upon their left breast with the sign of the cross. The Edge comes with a price, though. Torquemada knows what is in a person's heart, and does not impart his brand to those with no intention of fulfilling their duties. The character is expected to bring Torquemada a minimum of one mage every six months. Those who fail are not banished, but are sent after more powerful targets to regain the High Inquisitor's trust. Arcane skills targeting the hero suffer a −4 penalty (even if cast by allies!); magical damage is reduced by 4."),
      new Edge("Merchant", "N, Persuasion d8", "Commodities on the Master Trading Table (p43) cost 25% less"),
      new Edge("Master Merchant", "N, Merchant", "Commodities on the Master Trading Table (p43) cost 25% less and sell for 25% more"),
      new Edge("Musketeer", "N, Shooting d8", "Reload firearm in a single action. May walk while reloading.", ["All Thumbs"]),
      new Edge("Rope Monkey", "S, Ag d8, Athletics d10", "Roll Athletics to swing (teleport) around the top of a ship. Raise = +2 to next Fighting roll&damage. -2 to AoO from this movement. May use this ability in forests at -2 to reposition within 10\" of a tall tree. May roll when they fall from a ship's rigging"),
      new Edge("Scout", "S", "When navigating Caribdus, scouts may make Notice at -2 to detect encounters when they can be avoided (if possible). Gain +2 to Notice to avoid surprise."),
      new Edge("Ship's Carpenter", "N, Boating d6, Science d6, Repair d8", "Repair damage to a ship without taking it to Dry Dock. Repair Roll, 1d4 days, Half a cargo space worth of timber per wound. Failure = ruined materials. Raise = time halved. Crew Required = Base Toughness. Double Crew = Half Time. Critical wounds require Repair-2 and 1d6 days."),
      new Edge("Treasure Hound", "N, Luck", "Increases Booty value by 25% and magic item chance by 10% if any are in the party"),
      new Edge("Whaler", "N, Ag d8, Boating d6, Athletics d8", "+2 to Throwing. +4 damage to Aquatic creatures of Size 3 or greater."),
      new Edge("Frugal", "N, Sm d8", "Carousing price is halved. +2 to avoid getting drunk"),
      new Edge("Storm Chaser", "N, Boating d8", "+2 to Boating rolls made during a storm. Draw an extra card each round during a storm and keep the best."),
      new Edge("Wind Sense", "N, Sm d8, Boating d8", "Can sense changes in weather and wind long before they actually happen. +2 to Boating Rolls during Contact when piloting, to outrun/catch prey. Draw an extra card each round during a storm and keep the best."),

      new Edge("Good Reputation", "V", "May reroll persuasion rolls once for free"),
      new Edge("Bad Reputation", "V", "May reroll intimidation rolls once for free"),
    ];
  }

  public get oldEdges(): MinimalEdge[] {
    return [
      new MinimalEdge('Alertness', '+2 to Notice rolls.'),
      new MinimalEdge('Ambidextrous', 'Ignore –2 penalty when making Trait rolls with off-hand.'),
      new MinimalEdge('Arcane Background', '(psionics) Allows access to the Arcane Backgrounds listed in Chapter Five. (start with 1 power)'),
      new MinimalEdge('Arcane Resistance', 'Arcane skills targeting the hero suffer a −2 penalty (even if cast by allies!); magical damage is reduced by 2.'),
      new MinimalEdge('Improved Arcane Resistance', 'As Arcane Resistance except penalty is increased to −4 and magical damage is reduced by 4.'),
      new MinimalEdge('Aristocrat', '+2 to Common Knowledge and networking with upper class.'),
      new MinimalEdge('Attractive', '+1 to Performance and Persuasion rolls.'),
      new MinimalEdge('Very Attractive', '+2 to Performance and Persuasion rolls.'),
      new MinimalEdge('Berserk', 'After being Shaken or Wounded, melee attacks must be Wild Attacks, +1 die type to Strength, +2 to Toughness, ignore one level of Wound penalties, Critical Failure on Fighting roll hits random target. Take Fatigue after every five consecutive rounds, may choose to end rage with Smarts roll –2.'),
      new MinimalEdge('Brave', '+2 to Fear checks and –2 to rolls on the Fear Table.'),
      new MinimalEdge('Brawny', 'Size (and therefore Toughness) +1. Treat Strength as one die type higher for Encumbrance and Minimum Strength to use weapons, armor, or equipment.'),
      new MinimalEdge('Brute', 'Link Athletics to Strength instead of Agility (including resistance). Short Range of any thrown item increased by +1. Double that for the adjusted Medium Range, and double again for Long Range.'),
      new MinimalEdge('Charismatic', 'Free reroll when using Persuasion.'),
      new MinimalEdge('Elan', '+2 when spending a Benny to reroll a Trait roll.'),
      new MinimalEdge('Fame', '+1 Persuasion rolls when recognized (Common Knowledge), double usual fee for Performance.'),
      new MinimalEdge('Fast Healer', '+2 Vigor when rolling for natural healing; check every 3 days.'),
      new MinimalEdge('Fleet-Footed', 'Pace +2, increase running die one step.'),
      new MinimalEdge('Linguist', 'Character has d6 in languages equal to half her Smarts die.'),
      new MinimalEdge('Luck', '+1 Benny at the start of each session.'),
      new MinimalEdge('Great Luck', '+2 Bennies at the start of each session.'),
      new MinimalEdge('Quick', 'The hero may discard and redraw Action Cards of 5 or lower.'),
      new MinimalEdge('Rich', 'Character starts with three times the starting funds and a $150K annual salary.'),
      new MinimalEdge('Filthy Rich', 'Five times starting funds and $500K average salary.'),
    ];
  }
}
