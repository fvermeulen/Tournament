import { Component } from '@angular/core';

import { Player } from '../player/player';

@Component({
  selector: 'tournament-round',
  templateUrl: 'app/round/round.html'
})
export class Round {
  firstPlayer: Player;
  secondPlayer: Player;

  constructor(firstPlayer: Player, secondPlayer: Player) {
    this.firstPlayer = firstPlayer;
    this.secondPlayer = secondPlayer;
  }
}
