import { Component, OnInit }          from '@angular/core';

import { Player } from '../player/player';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'createTournament',
  templateUrl: 'app/createTournament/createTournament.component.html',
  styleUrls: ['app/createTournament/createTournament.component.css']
})
export class CreateTournament implements OnInit {
  playerName = '';
  playerList: Player[] = [];

  constructor(
    private playerService: PlayerService) {
  }

  ngOnInit() {
    this.playerService.getPlayerList().then(players => this.playerList = players);
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
