"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var player_1 = require('../player/player');
var PlayerService = (function () {
    function PlayerService() {
        this.playerId = 0;
        this.playerList = [];
    }
    PlayerService.prototype.getPlayerList = function () {
        return Promise.resolve(this.playerList);
    };
    PlayerService.prototype.addPlayer = function (playerName) {
        var name = playerName.trim();
        if (name) {
            if (!this.playerList.length) {
                this.playerId = 0;
            }
            this.playerId++;
            this.playerList.push(new player_1.Player(this.playerId, name));
        }
    };
    PlayerService.prototype.removePlayer = function (player) {
        var index = this.playerList.indexOf(player);
        if (index == null) {
            //player not found
            return;
        }
        this.playerList.splice(index, 1);
    };
    PlayerService.prototype.resetTournament = function () {
        this.playerList = [];
        this.playerId = 0;
    };
    PlayerService = __decorate([
        core_1.Injectable(), 
        __metadata('design:paramtypes', [])
    ], PlayerService);
    return PlayerService;
}());
exports.PlayerService = PlayerService;
//# sourceMappingURL=player.service.js.map