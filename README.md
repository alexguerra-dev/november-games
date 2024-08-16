# November Games

## Tasks

- [x] Reformat code
- [x] Update `favicon.ico`
- [x] Make `Header` and `Footer` components
- [x] Make _rules_ page and _game_ pages

## Rules

The game uses 5 dice and is made of turns. A turn is made up of rolls. After your first roll you get to decide to keep the points you get from combingations or to roll another set of dice that does not include the dice that are scoring. If you ever roll no scoring dice then your turn is over and you get 0 points. With each roll you must keep all the dice that are scoring. If all of your dice are scoring you must roll all 5 dice. You add the score from the previous roll to the new roll.

The score is recorded and the next player goes. The game is over when a player reaches 5,000 points.

### During a turn

1. Roll the dice
   - If the dice are all "scoring" then the player must roll again. The points from the previous roll are added to the players score.
   - If there are no "scoring" dice then the player loses all points from the previous rolls. And the turn is over.
   - Chose to stop rolling and keep the points from the previous rolls.

Scoreing dice:

- 1 = 100 points
- 5 = 50 points
- 3 of a kind = 100 \* the number on the dice
- strait = 1000 points
  - (1, 2, 3, 4, 5) or (2, 3, 4, 5, 6)
- 5 1's = 5000 points

## Links

- [November Games - Production](https://november-games.vercel.app/)
