import { Injectable } from '@angular/core';
import { Power } from './power';

@Injectable({
  providedIn: 'root'
})
export class PowerProviderService {
  public get fiftyFathomsTable() {
    const X = true;
    const _ = false;
    return [
      {efwa: [X, X, X, X], power: new Power("Beast Friend", "Make friends with a creature relevant to your elemental focus.")},
      {efwa: [X, X, X, X], power: new Power("Bolt", "An elemental Missile")},
      {efwa: [X, X, X, X], power: new Power("Summon Elemental", "Turn a bit of the raw element into a living spirit. Stats on page 186.")},
      {efwa: [X, X, X, X], power: new Power("Dispel", "Cancel a spell")},
      {efwa: [X, X, X, X], power: new Power("Elemental Manipulation", "Prestidigitation for your element")},
      {efwa: [X, X, X, X], power: new Power("Elemental Protection", "Protection from your element.")},
      {efwa: [X, X, X, _], power: new Power("Blind", "Blind a creature")},
      {efwa: [_, X, X, X], power: new Power("Burst", "Emit a cone of the element")},
      {efwa: [X, X, _, _], power: new Power("Barrier", "Raise a wall of the raw element. Fire deals 2d6 damage but does not block.")},
      {efwa: [X, _, _, X], power: new Power("Deflection", "Increase Parry, even at range")},
      {efwa: [_, _, X, X], power: new Power("Becalm", "Slow a ship. Be protected in a storm")},
      {efwa: [_, _, X, X], power: new Power("Storm", "Create a storm")},
      {efwa: [X, _, _, _], power: new Power("Armor", "Turn to stone")},
      {efwa: [X, _, _, _], power: new Power("Burrow", "Meld into the earth")},
      {efwa: [X, _, _, _], power: new Power("Entangle", "Vines grip the opponent. Only usable in vegetated areas.")},
      {efwa: [X, _, _, _], power: new Power("Mend", "Repair a vessel with earth.")},
      {efwa: [X, _, _, _], power: new Power("Pummel", "A cone of rock chunks and earth fires from the caster. Must be in contact with ground.")},
      {efwa: [X, _, _, _], power: new Power("Quake", "Cause an localized earthquake, potentially crusing foes.")},
      {efwa: [X, _, _, _], power: new Power("Wall Walker", "Stick to stone/earth surfaces")},
      {efwa: [_, X, _, _], power: new Power("Light/Obscure", "Torchlight / Thick fog / Swirling dust")},
      {efwa: [_, X, _, _], power: new Power("Smite", "Metal weapons/projectiles become red hot or burst into flame")},
      {efwa: [_, X, _, _], power: new Power("Blast", "Fireball")},
      {efwa: [_, X, _, _], power: new Power("Damage Field", "Aura of flames")},
      {efwa: [_, _, X, _], power: new Power("Farsight", "Read lips up to a mile distant.")},
      {efwa: [_, _, X, _], power: new Power("Greater Healing", "A drink of water, and then a gallon of water per wound poured over the body. 10 minutes.")},
      {efwa: [_, _, X, _], power: new Power("Healing", "A drink of water, and then a gallon of water per wound poured over the body. 10 minutes.")},
      {efwa: [_, _, X, _], power: new Power("Stun", "Victim sweats profusely and dehydrates.")},
      {efwa: [_, _, X, _], power: new Power("Relief", "Cooling mist - Remove fatigue")},
      {efwa: [_, _, X, _], power: new Power("Water Walk", "Walk on water")},
      {efwa: [_, _, _, X], power: new Power("Confusion", "Distract enemies with sounds")},
      {efwa: [_, _, _, X], power: new Power("Fly", "Into the skies")},
      {efwa: [_, _, _, X], power: new Power("Havoc", "Swirling column of air and debris")},
      {efwa: [_, _, _, X], power: new Power("Obscure", "Thick fog / Swirling Dust")},
      {efwa: [_, _, _, X], power: new Power("Settle Storm", "Heroic Tier. Quell a storm.")},
      {efwa: [_, _, _, X], power: new Power("Speak Language", "Air changes the target's words to be understood by all who hear them")},
      {efwa: [_, _, _, X], power: new Power("Speed", "A gust of wind propels you forward")},
      {efwa: [_, _, _, X], power: new Power("Telekinesis", "Air manipulates an object at range")},
      {efwa: [_, _, _, X], power: new Power("Zephyr", "Blow wind at a ship to make it go faster")},
    ];
  }

  public get fiftyFathomsEarth(): Power[] {
    return this.fiftyFathomsTable.filter(t => t.efwa[0]).map(t => t.power);
  }

  public get fiftyFathomsFire(): Power[] {
    return this.fiftyFathomsTable.filter(t => t.efwa[1]).map(t => t.power);
  }

  public get fiftyFathomsWater(): Power[] {
    return this.fiftyFathomsTable.filter(t => t.efwa[2]).map(t => t.power);
  }

  public get fiftyFathomsAir(): Power[] {
    return this.fiftyFathomsTable.filter(t => t.efwa[3]).map(t => t.power);
  }

  public get westMarchesAll(): Power[] {
    return this.westMarchesTable.map(t => t.power);
  }

  public get westMarchesNoviceAll() {
    return [
      new Power("Analyze Foe", "Gain knowledge of an enemy's weakness. (Fantasy Companion 28)"),
      new Power("Arcane Protection", "Defend against magic."),
      new Power("Beast Friend", "Make friends with a creature."),
      new Power("Blind", "Blind or distract an enemy."),
      new Power("Bolt", "An elemental Missile"),
      new Power("Boost Trait", "Raise a single Attribute / Skill. This costs 1 fewer pp for having half the spell."),
      new Power("Lower Trait", "Lower a single Attribute / Skill. This costs 1 fewer pp for having half the spell."),
      new Power("Burrow", "Meld into the earth"),
      new Power("Burst", "Emit a cone of raw element"),
      new Power("Confusion", "Distract enemies with sounds"),
      new Power("Damage Field", "Aura of flames"),
      new Power("Darksight", "Reduce penalties for darkness"),
      new Power("Deflection", "Increase Parry/dodge, even at range"),
      new Power("Detect Arcana", "See the world through magic eyes"),
      new Power("Conceal Arcana", "Make an item appear neutral to magic eyes"),
      new Power("Elemental Manipulation", "Perform small cantrips with the element"),
      new Power("Empathy", "Read the surface thoughts of another"),
      new Power("Environmental Protection", "Protection from your element."),
      new Power("Fear", "Cause fear to grip your foes."),
      new Power("Havoc", "Swirling column of air and debris"),
      new Power("Healing", "What it says on the tin."),
      new Power("Illusion", "Create something that isn't there."),
      new Power("Jet", "Fire a 1\" x 12\" column of raw element. (Fantasy Companion 39)"),
      new Power("Mage Hand", "Remotely perform actions. (Legerdemain, Fantasy Companion 39)"),
      new Power("Light", "Torchlight. Costs less (this is half a power)"),
      new Power("Darknes/Obscures", "Thick fog / Swirling dust (this is half a power)"),
      new Power("Mind Link", "Link (willing) minds for communication at great distances."),
      new Power("Mind Reading", "Intrude into the thoughts of another."),
      new Power("Protection", "Grant armor."),
      new Power("Relief", "Reduce fatigue."),
      new Power("Shape Change", "Morph into a beast."),
      new Power("Smite", "Imbue a melee weapon or ammunition with extra damage"),
      new Power("Speak Language", "Air changes the target's words to be understood by all who hear them"),
      new Power("Stun", "Stun according to your element (Fire: Victim sweats profusely and dehydrates.)"),
      new Power("Summon Elemental", "Turn a bit of the raw element into a living spirit."),
      new Power("Wall Walker", "Stick to stone/earth surfaces"),
    ];
  }

  public get westMarchesTable() {
    const O = true;
    const C = true;
    const _ = false;
    return [
      {sdrc: [_, O, O, _], power: new Power("Analyze Foe", "Defend yourself from magic with armor.")},
      {sdrc: [C, C, O, O], power: new Power("Arcane Protection", "Defend yourself from magic with armor.")},
      {sdrc: [_, O, _, _], power: new Power("Beast Friend", "Make friends with a creature relevant to your elemental focus.")},
      {sdrc: [C, C, O, _], power: new Power("Blind", "Blind a creature")},
      {sdrc: [C, C, O, _], power: new Power("Bolt", "An elemental Missile")},
      {sdrc: [C, C, O, O], power: new Power("Boost Trait (Bless)", "Raise a trait or skill. This is half a pair of powers so costs 1 less pp.")},
      {sdrc: [C, C, O, _], power: new Power("Lower Trait (Curse)", "Lower a trait or skill. This is half a pair of powers so costs 1 less pp.")},
      {sdrc: [_, O, _, _], power: new Power("Burrow", "Meld into the earth")},
      {sdrc: [C, C, O, _], power: new Power("Burst", "Emit a cone of the element")},
      {sdrc: [O, _, _, _], power: new Power("Confusion", "Distract enemies with sounds")},
      {sdrc: [C, C, O, _], power: new Power("Darksight", "See in the dark")},
      {sdrc: [C, C, O, _], power: new Power("Deflection", "Increase Parry, even at range")},
      {sdrc: [C, C, O, O], power: new Power("Detect (Detect Arcana+)", "Sense the color of the arcana on an object. Somewhat like a heat map.")},
      {sdrc: [O, _, _, _], power: new Power("Conceal (Conceal Arcana+)", "Conceal the color of arcana on an object.")},
      {sdrc: [C, C, O, O], power: new Power("Elemental Manipulation", "Prestidigitation for your element")},
      {sdrc: [C, C, O, _], power: new Power("Empathy", "Read the surface thoughts of an individual")},
      {sdrc: [_, O, _, _], power: new Power("Entangle", "Bind or Entangle an enemy")},
      {sdrc: [C, C, O, O], power: new Power("Environmental Protection", "Protection from your element.")},
      {sdrc: [O, _, _, _], power: new Power("Fear", "Strike the fear of god into an enemy")},
      {sdrc: [C, C, O, _], power: new Power("Havoc", "Swirling column of air and debris")},
      {sdrc: [_, O, _, O], power: new Power("Healing", "A drink of water, and then a gallon of water per wound poured over the body. 10 minutes.")},
      {sdrc: [O, _, _, _], power: new Power("Illusion", "Create something that is not there")},
      {sdrc: [C, C, O, _], power: new Power("Jet", "Emit a column of element")},
      {sdrc: [O, _, _, _], power: new Power("Legerdemain (Mage Hand)", "Perform an action at range")},
      {sdrc: [C, C, O, O], power: new Power("Light", "Torchlight")},
      {sdrc: [C, C, O, _], power: new Power("Obscure", "Thick fog / Swirling Dust")},
      {sdrc: [C, C, O, _], power: new Power("Mind Link", "Connect the minds of two willing individuals for comms at a range of miles")},
      {sdrc: [O, _, _, _], power: new Power("Mind Reading", "Invade the mind of another")},
      {sdrc: [C, C, O, _], power: new Power("Protection", "Armor. Stone Skin.")},
      {sdrc: [_, O, _, O], power: new Power("Relief", "Cooling mist - Remove fatigue")},
      {sdrc: [_, O, _, _], power: new Power("Shape Change", "Turn into an animal")},
      {sdrc: [C, C, O, _], power: new Power("Smite", "Metal weapons/projectiles become red hot or burst into flame")},
      {sdrc: [O, _, _, _], power: new Power("Sound", "Create an artificial sound. This is half a pair of powers so costs 1 less pp.")},
      {sdrc: [O, _, _, _], power: new Power("Silence", "Suppress sound in an area. This is half a pair of powers so costs 1 less pp.")},
      {sdrc: [_, O, _, O], power: new Power("Speak Language", "Air changes the target's words to be understood by all who hear them")},
      {sdrc: [C, C, O, O], power: new Power("Stun", "Victim sweats profusely and dehydrates.")},
      {sdrc: [_, O, _, _], power: new Power("Summon Ally", "Turn a bit of the raw element into a living spirit. Stats on page 186.")},
      {sdrc: [C, C, O, _], power: new Power("Wall Walker", "Stick to stone/earth surfaces")},
    ];
  }

  public get westMarchesSorceror(): Power[] {
    return this.westMarchesTable.filter(t => t.sdrc[0]).map(t => t.power);
  }

  public get westMarchesDruid(): Power[] {
    return this.westMarchesTable.filter(t => t.sdrc[1]).map(t => t.power);
  }

  public get westMarchesRunemaker(): Power[] {
    return this.westMarchesTable.filter(t => t.sdrc[2]).map(t => t.power);
  }

  public get westMarchesCleric(): Power[] {
    return this.westMarchesTable.filter(t => t.sdrc[3]).map(t => t.power);
  }
}
