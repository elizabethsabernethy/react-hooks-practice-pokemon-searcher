import React, { useState } from "react";
import { Card } from "semantic-ui-react";

function PokemonCard({creature}) {

  const[source, setSource] = useState(true)

const frontImage = creature.sprites.front;
const backImage = creature.sprites.back;

function toggleImage(){
  setSource((source) => !source)
}

  return (
    <Card>
      <div onClick={toggleImage}>
        <div className="image">
          <img src={source ? frontImage : backImage} alt={creature.name} />
        </div>
        <div className="content">
          <div className="header">{creature.name}</div>
        </div>
        <div className="extra content">
          <span>
            <i className="icon heartbeat red" />
            {creature.hp}
          </span>
        </div>
      </div>
    </Card>
  );
}

export default PokemonCard;
