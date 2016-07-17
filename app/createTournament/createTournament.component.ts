import { Component }          from '@angular/core';

import { Player } from '../player/player';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'createTournament',
  templateUrl: 'app/createTournament.component.html',
  styleUrls: ['app/createTournament.component.css']
})
export class CreateTournament {
  playerName = '';
  playerList: Player[] = [];
  
  constructor(
    private playerService: PlayerService) {
  }

  addPlayer() {
    this.playerService.addPlayer(this.playerName);
    this.playerName = '';
    this.playerService.getPlayerList().then(players => this.playerList = players);
  }

  removePlayer(player) {
    this.playerService.removePlayer(player);
    this.playerService.getPlayerList().then(players => this.playerList = players);
  }

  resetTournament() {
    this.playerService.resetTournament();
    this.playerService.getPlayerList().then(players => this.playerList = players);
  }
}
