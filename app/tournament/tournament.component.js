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
var round_1 = require('../round/round');
var player_service_1 = require('../service/player.service');
var Tournament = (function () {
    function Tournament(playerService) {
        var _this = this;
        this.playerService = playerService;
        this.playerList = [];
        this.rounds = [];
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
    }
    Tournament.prototype.ngOnInit = function () {
        var _this = this;
        this.playerService.getPlayerList().then(function (players) { return _this.playerList = players; });
        this.rounds = [];
        for (var i = 0; i < this.playerList.length; i++) {
            for (var j = this.playerList.length - 1; j >= 0; j--) {
                if (i != j) {
                    this.rounds.push(new round_1.Round(this.playerList[i], this.playerList[j]));
                }
            }
        }
    };
    Tournament = __decorate([
        core_1.Component({
            selector: 'tournament',
            templateUrl: 'app/tournament/tournament.component.html',
            styleUrls: ['app/tournament/tournament.component.css']
        }), 
        __metadata('design:paramtypes', [player_service_1.PlayerService])
    ], Tournament);
    return Tournament;
}());
exports.Tournament = Tournament;
//# sourceMappingURL=tournament.component.js.map