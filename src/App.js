import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="App">
      <h1>A Novice Aquarists's Journey</h1>
      <header className="App-header">
        {" "}
        <a className="Tab" href="">About Me</a> -  <a className="Tab" href="">29 Gallon</a> -{" "}
        <a className="Tab" href="">20 Gallon Long</a> - <a className="Tab" href="">10 Gallon Community</a> -{" "}
        <a className="Tab" href="">10 Gallon GBR</a>
        </header>
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Hello World</h1>
        <p>
          I started this blog to track the progress of my various aquariums and
          share that progress with anyone interested to follow along. I just
          started keeping an aquarium for the second time this year in
          mid-September. I had an old 29 Gallon tank that I used a few years
          prior and after my Blue Gourami passed I just felt uninterested until
          recently. This time around I will be keeping a 29g, a 20g long, and
          two 10g tanks. I will be keeping track of as much behavior as I can,
          including but not limited to territortial, sparring, stress, mating,
          spawning and overall health. I will also make sure to list all tank
          inhabitants by tank within each respective section.
        </p>
        <h2>The Tanks:</h2>
        <h4>29 Gallon:</h4> This is the largest tank and it is a very mixed
        community. I made the mistake of getting a Bala Shark and a Common
        Pleco. I will be rehoming the Pleco and moving the Bala to a larger tank
        or rehoming it. In this tank we have 1 male guppy, 1 male molly, 1
        female ballon molly, 1 bala shark, 1 common pleco, 1 african dwarf frog,
        5 mystery snails, 1 nerite snail, 2 rabbit snails, 5 red eye tetra, 8
        neon tetra. The plan is to rescape this aquarium and rehome the single
        fish.
        <h4>20 Gallon Long:</h4> Not Stocked.
        <h4>10 Gallon Community:</h4> 1 Betta Male Splendes, 1 Pair of Peacok
        Gudgeon(m/f), 8 Celestial Pearl Danio, 1 Nerite Snail, 1 Assassin Snail
        Eater, 1 Pair of Khuli Loach(m/f), 15+ Cherry Shrimp.
        <h4>10 Gallon GBR:</h4> 1 Clown Pleco, 3 Bamboo Shrimp, 3 German Blue
        Ram (1m/2f), 1 Amano Shrimp, 1 Ghost Shrimp.
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
    </div>
  );
}

export default App;
