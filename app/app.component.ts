import { Component }          from '@angular/core';

import { Player } from './player/player';
import { PlayerService } from './service/player.service';
import { CreateTournament } from './createTournament/createTournament.component';

@Component({
  selector: 'my-app',
  templateUrl: 'app/app.component.html',
  styleUrls: ['app/app.component.css'],
  providers: [
    PlayerService
  ]
})
export class AppComponent {
  title = 'Tournament';
  // createTournament;
  //
  // constructor(
  //   private createTournament: CreateTournament) {
  //   createTournament = createTournament;
  // }
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
