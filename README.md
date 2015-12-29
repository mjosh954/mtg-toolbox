# mtg-toolbox
A React/Redux powered toolbox for everything that you should need to play MTG games.

# Getting Started
Clone the repo and install the necessary node modules
```
$ git clone https://github.com/mjosh954/mtg-toolbox.git <name-of-folder>
$ cd <name-of-folder>
$ npm install
$ npm start
```
Open browser to http://localhost:3000

## TODO:
- [ ] Game Match-up Mechanics
  - [x] 6 & 20-sided dice randomizer
  - [ ] Round Timer
  - [ ] Player Customization. (e.g. background color)
    - [ ] Edit Player Dialog
  - [ ] Add poison counter
  - [x] Life Counter increment/decrement
  - [ ] Add Mechanics for Team formats. (e.g. Two-Headed Giant)
  - [ ] Add Game Win/Loss Stats
- [ ] Draft Mode
  - [x] Add Players
  - [ ] Edit Player
  - [ ] Remove Player
- [ ] Add Rules/Instructions View
  - [ ] Add link to the view on splash and counter page
- [ ] Replace JS State object with Immutable-Js
- [ ] Improve Styling
- [ ] Improve README.md for Contributing
- [ ] [Tests... Tests everywhere] (http://cdn.meme.am/instances/500x/59621256.jpg)

### Draft Mode Feature
1. Players are able to signup for the draft
2. After all players are registered, the host (aka. judge) will assign seating for draft by clicking 'Start Draft'
  - Players are shuffled randomly and assigned seating.
3. After all the packs have been drafted, the host selects 'Create Matches'
  - This randomly pairs each of the players for the first round.
4. After the first round is done, then the winners will be paired with the other winners for the following round. This continues until the last winner is standing.
