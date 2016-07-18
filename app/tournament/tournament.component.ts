import { Component, OnInit }          from '@angular/core';

import { Player } from '../player/player';
import { Round } from '../round/round';
import { PlayerService } from '../service/player.service';

@Component({
  selector: 'tournament',
  templateUrl: 'app/tournament/tournament.component.html',
  styleUrls: ['app/tournament/tournament.component.css']
})
export class Tournament implements OnInit {
  playerList: Player[] = [];
  rounds: Round[] = [];
  firstValue: number;
  secondValue: number;

  constructor(
    private playerService: PlayerService) {
      this.playerService.getPlayerList().then(players => this.playerList = players);
  }

  ngOnInit() {
    this.playerService.getPlayerList().then(players => this.playerList = players);
    this.rounds = [];

    for (var i = 0; i < this.playerList.length; i++) {
      for (var j = this.playerList.length -1; j >= 0; j--) {
        if (i != j) {
          this.rounds.push(new Round(this.playerList[i], this.playerList[j]));
        }
      }
    }
  }

  addFirstResult() {

  }

  addSecondResult() {

  }
}
