import axios from "axios";
import { CharacterInfo } from "../../models/CharacterInfo";

function CharacterEditor({ pcId, pcName, player, level, hitPoints, strength, intelligence, dexterity, wisdom, charisma, constitution }:CharacterInfo) {
    return (
        <div>
            <p>{pcName}</p>

        </div>
    )
}

export default CharacterEditor;