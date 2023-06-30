export class CharacterInfo {
    pcId: number; 
    pcName: string; 
    player: number; 
    level: number; 
    hitPoints: number;
    strength: number; 
    intelligence: number; 
    dexterity: number; 
    wisdom: number;
    charisma: number;
    constitution: number;

    constructor(pcId: number, pcName: string, player: number, level: number, hitPoints: number, strength: number, intelligence: number, dexterity: number, wisdom: number, charisma: number, constitution: number) {
        this.pcId = pcId; 
        this.pcName = pcName;
        this.player = player;
        this.level = level; 
        this.hitPoints = hitPoints;
        this.strength = strength;
        this.intelligence = intelligence;
        this.dexterity = dexterity;
        this.wisdom = wisdom;
        this.charisma = charisma;
        this.constitution = constitution;
    }
}