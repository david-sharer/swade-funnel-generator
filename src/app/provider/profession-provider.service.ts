import { Injectable } from '@angular/core';
import { Profession } from './profession';

@Injectable({
  providedIn: 'root'
})
export class ProfessionProviderService {

  constructor() { }

  public get professions(): Profession[] {
    return [
      new Profession('High School Jock'),
      new Profession('Street Kid'),
      new Profession('Wealthy Upbringing'),
      new Profession('Noble'),
      new Profession('Bartender'),
      new Profession('Band Member'),
      new Profession('Record Contract'),
      new Profession('Street Thug'),
      new Profession('Gangster'),
      new Profession('Con Artist'),
      new Profession('Burglar'),
      new Profession('Prison'),
      new Profession('Sports Scholarship'),
      new Profession('Pro Athlete'),
      new Profession('Superstar Athlete'),
      new Profession('College'),
      new Profession('Advanced College'),
      new Profession('Doctorate'),
      new Profession('Field Scientist'),
      new Profession('Counsellor'),
      new Profession('Military Academy'),
      new Profession('Starfleet Cadet Cruise'),
      new Profession('Starfleet Tour'),
      new Profession('Starship Engineer'),
      new Profession('Starship Science Officer'),
      new Profession('Starship Communications Officer'),
      new Profession('Starship Counsellor'),
      new Profession('Starship Medical Officer'),
      new Profession('Starship Security Officer'),
      new Profession('Starship Helmsman'),
      new Profession('Academy Teaching'),
      new Profession('Starbase Assignment'),
      new Profession('Space Marines Cadet Assignment'),
      new Profession('Space Marines Tour of Duty'),
      new Profession('Starfleet Intelligence Recruit'),
      new Profession('Police Officer'),
      new Profession('Detective'),
      new Profession('Psi-Corps'),
      new Profession('Smuggler'),
      new Profession('Drifter'),
      new Profession('Gambler'),
      new Profession('Space Jockey'),
      new Profession('Priest'),
      new Profession('Scout / Explorer'),
      new Profession('Musician'),
      new Profession('Revolutionary'),
      new Profession('Asteroid Miner'),
      new Profession('Deepspace Construction'),
      new Profession('Roboticist'),
      new Profession('Cyberneticist'),
      new Profession('Geneticist'),
      new Profession('Clone'),
      new Profession('Creche-raised'),
      new Profession('Genetically Altered'),
      new Profession('Mutant'),
      new Profession('Heavy-Worlder'),
      new Profession('Radiation Scarred'),
      new Profession('Runaway Regeneration'),
      new Profession('Ship-bred'),
      new Profession('null-g habitat'),
      new Profession('Entertainer'),
      new Profession('Actor'),
      new Profession('Journalist'),
      new Profession('Programmer/Hacker'),
      new Profession('Physician'),
      new Profession('Nanotech/3D Printing Engineer'),
      new Profession('Body Guard/Security Expert'),
      new Profession('Fire Fighter'),
      new Profession('Hazardous Materials Handler'),
      new Profession('Ecologist/Planetologist/Climatologist/Terra-forming Engineer'),
      new Profession('Exo-Welder/Construction Worker'),
      new Profession('Drone Operator/Robot Supervisor'),
      new Profession('Professional Gamer'),
      new Profession('Professional Simulation Designer'),
      new Profession('CAD/CAM Draftsman'),
      new Profession('Holography Engineer'),
      new Profession('Archaeologist')
    ];
  }
}
