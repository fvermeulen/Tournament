import { Injectable } from '@angular/core';

import { Player } from '../player/player';

@Injectable()
export class PlayerService {
  playerId = 0;
  playerList: Player[] = [];

  getPlayerList() {
    return Promise.resolve(this.playerList);
  }

  addPlayer(playerName: string) {
    var name = playerName.trim();

    if (name) {
      if (!this.playerList.length) {
        this.playerId = 0
      }
      this.playerId++;
      this.playerList.push(new Player(this.playerId, name));
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
