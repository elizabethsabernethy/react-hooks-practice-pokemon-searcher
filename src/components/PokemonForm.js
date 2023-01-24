import React, {useState} from "react";
import { Form } from "semantic-ui-react";

function PokemonForm({onAddPokemon}) {

  const [formData, setFormData] = useState({
    name: "",
    hp: 0,
    sprites: {
      front: '',
      back: ''
    } 
  });

  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();
    const pokemonData = {
      'name': formData.name,
      'hp': formData.hp,
      'sprites': {
        'front': formData.frontUrl,
        'back': formData.backUrl
    } 
    }
    fetch('http://localhost:3001/pokemon', {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(pokemonData),
  })
    .then((resp) => resp.json())
    .then((newPokemon) => onAddPokemon(newPokemon));
}

  return (
    <div>
      <h3>Add a Pokemon!</h3>
      <Form
        onSubmit={handleSubmit}
      >
        <Form.Group widths="equal">
          <Form.Input onChange={handleChange} fluid label="Name" placeholder="Name" name="name" />
          <Form.Input onChange={handleChange} fluid label="hp" placeholder="hp" name="hp" />
          <Form.Input onChange={handleChange}
            fluid
            label="Front Image URL"
            placeholder="url"
            name="frontUrl"
          />
          <Form.Input onChange={handleChange}
            fluid
            label="Back Image URL"
            placeholder="url"
            name="backUrl"
          />
        </Form.Group>
        <Form.Button>Submit</Form.Button>
      </Form>
    </div>
  );
}

export default PokemonForm;
