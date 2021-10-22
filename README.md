# Dice Game 🎲

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- Roll the dice 🎲
- Hold their current dice score 🔒 🎲
- Start a new game 🆕 🔁

### Screenshot

![](/images/dice-game.png)

### Links

- Solution URL: [Github](https://github.com/orion-esu/dice-game)
- Live Site URL: [Live Demo](https://dice-gameapp.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- CSS
- JavaScript

### What I learned

While building this game, i made use of a flow chart to understand the game play and also build the game, and i think that helped me fastened and understand the process better. I got to understand that the src of an HTML image can be manipulated using JS.

```js
diceEl.src = `images/dice-${rand}.png`;
```

While computing the total score of each player when they roll and hold their dice, i found it a bit difficult adding the current score of a particular player to his last total score, but alas i figured out that i needed an array to do the trick and wheeew it worked making my life a bit easier 😎

```js
  activePlayer = 0;
  scores = [0, 0];
  scores[activePlayer] = scores[activePlayer] + currentScore;
};
```

Lastly, i learnt how a class can be selected dynamically and it was key in this project, without it i wouldn't be able to keep track of the current player playing and be able to switch to that player 😴

```js
document.getElementById(`current--${activePlayer}`).textContent = currentScore;
activePlayer = activePlayer === 1 ? 0 : 1;
```

## Author

- Website - [Esu Gabriel](https://github.com/orion-esu)
- Twitter - [orion_esu](https://twitter.com/orion_esu)

## Acknowledgments

This Project was based on a course work and i was ahead of the instructor while building, i only went back to the project video to verify some things or when i ran into a bug 🐛 i found difficult to solve 🥶
