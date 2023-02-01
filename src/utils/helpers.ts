import { GameTypes } from './Game.types';

const getPrice = (game: GameTypes) => {
  const { released } = game;
  const releaseYear = new Date(released).getFullYear();
  const currentYear = new Date().getFullYear();
  const yearsDifference = currentYear - releaseYear;
  let randomNumber = Math.floor(Math.random() * 21);
  const minPrice = 1;
  let discountPerYear = 0.35;
  let newPrice = randomNumber <= 10 ? 20 : 45;
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < yearsDifference; i++) {
    randomNumber = Math.floor(Math.random() * 21);
    newPrice *= 1 - discountPerYear;
    if (discountPerYear > 0.1) {
      discountPerYear -= 0.08;
    } else {
      discountPerYear = 0.1;
    }
  }
  newPrice = Math.ceil(newPrice);
  newPrice = newPrice < minPrice ? minPrice : newPrice;
  return newPrice - 0.01;
};

export default getPrice;