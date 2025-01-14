import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../../context/userContext"; // Import UserContext
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection

export default function MemoryGame() {
  const { userData } = useContext(UserContext); // Get the user from the context
  const navigate = useNavigate(); // Get the navigate function for redirection

  // State to track the round/level
  const [currentRound, setCurrentRound] = useState(1); // Starting from round 1
  const [targetPokemonCount, setTargetPokemonCount] = useState(12); // Start with 12 Pokémon
  const [pokemonList, setPokemonList] = useState([]); // State for storing Pokémon list
  const [selectedPokemon, setSelectedPokemon] = useState([]); // State for tracking selected Pokémon
  const [currentScore, setCurrentScore] = useState(0); // State for current score
  const [highestScore, setHighestScore] = useState(0); // State for highest score

  // Fetch Pokémon data based on the current target number of Pokémon
  const fetchPokemonData = async () => {
    const pokeList = [];
    for (let i = 1; i <= targetPokemonCount; i++) {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${i}`);
      const data = await response.json();
      pokeList.push({
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
      });
    }
    setPokemonList(pokeList);
  };

  useEffect(() => {
    fetchPokemonData();
  }, [targetPokemonCount]); // Fetch data whenever the targetPokemonCount changes

  // Shuffle the Pokémon list to randomize the order
  const randomizeArray = (array) => {
    return [...array].sort(() => Math.random() - 0.5);
  };

  // Handle click on Pokémon
  const handleClick = (id) => {
    if (selectedPokemon.includes(id)) {
      setSelectedPokemon([]); // Reset selected Pokémon
      setCurrentScore(0); // Reset score
      alert('Oh no, you did not catch all the Pokémon!');
    } else {
      setSelectedPokemon([...selectedPokemon, id]); // Add selected Pokémon to list
      setCurrentScore(currentScore + 1); // Increment score
      setHighestScore(Math.max(highestScore, currentScore + 1)); // Update highest score

      if (currentScore + 1 === targetPokemonCount) { // If all the Pokémon are caught
        alert(`Congratulations! You caught all ${targetPokemonCount} Pokémon!`);
        setSelectedPokemon([]); // Reset selected Pokémon
        setCurrentScore(0); // Reset current score
        setCurrentRound(currentRound + 1); // Increment round/level
        setTargetPokemonCount(targetPokemonCount + 12); // Increase the target by 12 for the next round
      }
    }
    setPokemonList(randomizeArray(pokemonList)); // Shuffle Pokémon list after each click
  };

  return (
    <div className="memory-game-container">
      <h1 className="memory-game-title">Welcome to the Pokémon Memory Game</h1>

      <div className="score-section">
        <p>Be sure to catch all the Pokémon!</p>
        <p>Current Round: {currentRound}</p> 
        <p>Current Score: {currentScore}</p>
        <p>Highest Score: {highestScore}</p>
        <p>Pokémon Left to Catch: {targetPokemonCount - currentScore}</p> 
      </div>

      <div className="pokemon-grid">
        {pokemonList.map((poke) => (
          <div
            className="pokemon-card"
            key={poke.id}
            onClick={() => handleClick(poke.id)}
            
          >
            <img src={poke.image} alt={poke.name} />
            <p className="pokemon-name">{poke.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
