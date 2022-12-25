import type { Component } from "solid-js";
import RandomTable, { RollableTable } from "./RandomTable";

const exampleCharacters: RollableTable = {
  rows: [
    {minRoll: 1, maxRoll: 1, text: "The intrepid reporter"},
    {minRoll: 2, maxRoll: 2, text: "The dependable blue-collar worker"},
    {minRoll: 3, maxRoll: 3, text: "The respectable scientist"},
    {minRoll: 4, maxRoll: 4, text: "The plucky assistant"},
    {minRoll: 5, maxRoll: 5, text: "The grizzled four-star general"},
    {minRoll: 6, maxRoll: 6, text: "The brave soldier"},
  ]
}

const exampleBPlots: RollableTable = {
  rows: [
    {minRoll: 1, maxRoll: 1, text: "International tension"},
    {minRoll: 2, maxRoll: 2, text: "Someone stole something"},
    {minRoll: 3, maxRoll: 3, text: "Reporters or spies on the trail of something"},
    {minRoll: 4, maxRoll: 4, text: "Construction of a power plant, road, etc. is threatened by the monster's presence"},
    {minRoll: 5, maxRoll: 5, text: "Romance or rivalry between characters"},
    {minRoll: 6, maxRoll: 6, text: "Aliens are invading or infiltrating Earth"},
  ]
}

const success: RollableTable = {
  rows: [
    {minRoll: 1, maxRoll: 3, text: "It fails. A player from another faction (e.g. Scientist when a Military player rolled) must come up with an explanation of why."},
    {minRoll: 4, maxRoll: 5, text: "The monster develops a new bullshit power, nullifying the plan. Any player can make suggestions, with the Kid's player having the final say."},
    {minRoll: 6, maxRoll: 6, text: "Mark 1 HP off the monster. The player who rolled describes the outcome."},
  ]
}

const GameText: Component = () => {
  return (
    <>
      <h1>The Legally Distinct Kaiju RPG</h1>
      <h3>A game about giant monsters terrorizing the city, by <a href="https://astralfrontier.itch.io" target="_blank">astralfrontier</a></h3>
      <p>
        This is a game about giant monsters terrorizing cities. Everyone has their own ideas about what this means,
        including the original filmmakers. If the game isn't fun for you because of the material or the other players,
        speak up. If someone speaks up, stop and listen. Everyone's fun and comfort matters more than finishing the game.
      </p>
      <h2>Character Creation</h2>
      <p>One player is the Kid. They narrate for themselves, the monster, and all NPCs.</p>
      <p>All other players create a character from one of three factions: Civilian, Scientist, or Military.</p>
      <p>Everything the Kid says in-character about the monster is true. Nobody else knows this at first.</p>
      <p>Determine at least one B-plot before play begins. Every player involved in a B-plot must approve of it.</p>
      <h3>Example Characters</h3>
      <p>Create your own, choose from this list, or roll 1d6:</p>
      <RandomTable table={exampleCharacters} />
      <h3>Example B-Plots</h3>
      <p>Create your own, choose from this list, or roll 1d6:</p>
      <RandomTable table={exampleBPlots} />
      <h2>Playing the Game</h2>
      <p>Every player will need several six-sided dice (d6).</p>
      <p>The monster starts the game with 3 HP.</p>
      <p>The Kid narrates the current threat of the monster, while other players narrate the reactions from themselves or their faction as a whole.</p>
      <p><b>When anyone hatches a plan to defeat the monster</b>, describe it and roll 1d6.</p>
      <p>
        If you spent a scene advancing any B-plot, or introduced drama to an existing plot,
        add +1d6 to the roll per distinct contribution. If anyone hammed it up, add +1d6 per ham.
      </p>
      <p>Look for the highest roll on any of the dice.</p>
      <RandomTable table={success} />
      <h3>Examples of Hamming It Up</h3>
      <ul>
        <li>A Civilian interfered with the plan for some selfish or venal motive.</li>
        <li>A Scientist horribly mangles real-world science.</li>
        <li>The Military brags about the power of their new weapons.</li>
        <li>The Kid is allowed to run wild through an off-limits area.</li>
      </ul>
      <h3>Deus Ex Machina</h3>
      <p>
        Once per game, for any reason, the Kid may narrate an event out of the blue that's good for our heroes.
        A friendly monster appears, lightning strikes something important, whatever. Regardless, deduct 1 HP from the monster.
      </p>
      <h2>Finishing the Game</h2>
      <p>Once the monster is at 0 HP, it is killed, driven off, etc. Resolve any lingering B-plots. If there is a sequel:</p>
      <ul>
        <li>A different player becomes the Kid</li>
        <li>The monster returns from its defeat, but is now on the side of humanity</li>
        <li>Devise a new threat for this monster to fight</li>
      </ul>
    </>
  )
};

export default GameText;
