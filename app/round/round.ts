import { Player } from '../player/player';

export class Round {
  firstPlayer: Player;
  secondPlayer: Player;

  constructor(firstPlayer: Player, secondPlayer: Player) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
  }
}
