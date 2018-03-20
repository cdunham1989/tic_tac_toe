# Tic-Tac-Toe tech test

## Requirements

* Write a program that lets two humans play Tic-Tac-Toe against each other.
* Implement a command line interface that lets the humans play the game by typing commands into the terminal.
* Players should be able to input their moves.
* The board should be shown after each move.
* The game should announce the result of the game when it's over.

### Rules of Tic-Tac-Toe

```
O X X
X X O
O X O
```

* There are two players in the game (X and O).
* The board is 9 positions in a 3x3 grid.
* Players take turns until the game is over.
* A player can claim a position if it is not already taken.
* A turn ends when a player claims a position.
* A player wins if they make a line by claiming 3 boxes in a row, 3 positions in a column, or 3 positions in a diagonal.
* If all positions are taken and neither player has a line, the game is a draw.

## Thought Process

I'm going to use a multi-dimensional array for the board.

board = [['a', 'b', 'c'], ['d', 'e', 'f'], ['g', 'h', 'i']]

Then to reference the coordinates of each cell I be able to locate them as they will be numbered like so:

|**[0][0]**|**[0][1]**|**[0][2]**|
|:--------:|:--------:|:--------:|
|**[1][0]**|**[1][1]**|**[1][2]**|
|**[2][0]**|**[2][1]**|**[2][2]**|


### Domain Model

Lastly my domain model for this tech test will be as follows:

! [domain model](/assets/domain_model.png "Domain Model"
)
