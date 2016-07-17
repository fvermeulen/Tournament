import { Component }          from '@angular/core';

import { Player } from './player/player';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css']
})
export class AppComponent {
  title = 'Tournament';
  playerId = 0;
  playerName = '';
  playerList: Player[] = [];

  addPlayer() {
    var name = this.playerName.trim();

    if (name) {
      if (!this.playerList.length) {
        this.playerId = 0
      }
      this.playerId++;
      this.playerList.push(new Player(this.playerId, name));
      this.playerName = '';
    }
  }

  removePlayer(player) {
    var index = this.playerList.indexOf(player);

    if (index == null) {
      //player not found
      return;
    }
    this.playerList.splice(index, 1);
  }

  resetTournament() {
    this.playerList = [];
    this.playerId = 0;
  }
}
