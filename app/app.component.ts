import { Component }          from '@angular/core';

import { Player } from './player/player';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html'
})
export class AppComponent {
  title = 'Tournament';
  playerId = 0;
  playerName = '';
  playerList: Player[] = [];

  addPlayer() {
    var name = this.playerName.trim();

    if (name) {
      this.playerId++;
      this.playerList.push(new Player(this.playerId, name));
      this.playerName = '';
    }
  }
}
